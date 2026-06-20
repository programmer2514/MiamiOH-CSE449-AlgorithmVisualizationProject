import { AbstractParseTreeVisitor } from 'antlr4ng';
import { PseudocodeVisitor } from './.antlr/PseudocodeVisitor';
import {
  ProgramContext,
  AssignmentContext,
  ExpressionContext,
  FunctionDeclContext,
  FunctionCallStmtContext,
  ForEachLoopContext,
  IfStatementContext,
  ReturnStatementContext,
  ValueArrayContext,
  AtomExpressionContext,
  CompareExprContext,
  ExpressionListContext,
  RangeArrayContext,
  SizeArrayContext,
  AddExprContext,
  MulExprContext,
  ParenExpressionContext,
  UnaryMinusExprContext,
  UnaryNotExprContext,
  ArrayAccessExpressionContext,
  FunctionCallExpressionContext,
  WhileLoopContext,
  MetadataContext,
  BlockContext,
  StatementContext,
  PowerExpressionContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  ForLoopContext,
  DoWhileLoopContext,
  BreakStatementContext,
  ContinueStatementContext,
} from './.antlr/PseudocodeParser';
import { TraceStep, TraceAction } from './TraceType';

type Scope = Map<string, any>;
const MAX_ITERATIONS = 10000;

export default class TraceInterpreterVisitor
  extends AbstractParseTreeVisitor<any>
  implements PseudocodeVisitor<any> {
  public steps: TraceStep[] = [];
  private globalScope: Scope = new Map();
  private callStack: Scope[] = [];
  private functions: Map<string, FunctionDeclContext> = new Map();

  // Heuristics & States
  private isReferenceMode: boolean = false;
  private initArray: string = '';

  protected defaultResult(): any {
    return null;
  }

  protected aggregateResult(aggregate: any, nextResult: any): any {
    if (aggregate !== null && aggregate !== undefined) return aggregate;
    return nextResult;
  }

  private memory = {
    get: (key: string): any => {
      const gScope = this.globalScope;
      const lScope = this.callStack.length > 0 ?
        this.callStack[this.callStack.length - 1] :
        undefined;

      if (lScope && lScope.has(key)) return lScope.get(key);
      else if (gScope.has(key)) return gScope.get(key);
      else return undefined;
    },
    set: (key: string, value: any) => {
      const gScope = this.globalScope;
      const lScope = this.callStack.length > 0 ?
        this.callStack[this.callStack.length - 1] :
        undefined;

      if (lScope && lScope.has(key)) lScope.set(key, value);
      else gScope.set(key, value);
    },
    globalOrLocal: (key: string) => {
      const gScope = this.globalScope;
      const lScope = this.callStack.length > 0 ?
        this.callStack[this.callStack.length - 1] :
        undefined;

      if (lScope && lScope.has(key)) return '__$LOCAL__';
      else if (gScope.has(key)) return '__$GLOBAL__';
      else return undefined;
    },
    GLOBAL: '__$GLOBAL__',
    LOCAL: '__$LOCAL__',
  };

  private addStep(line: number | number[], actions: TraceAction[]) {
    const safeActions: TraceAction[] = [];

    for (const action of actions) {
      if (action.cmd === 'var_add' && action.params.value === undefined) {
        action.params.value = 'undefined';
        throw new Error(`[line ${isNaN(Number(line)) ? (line as number[])[0] : line}:0] '${action.params.name}' is undefined. Does the function you are trying to call exist?`);
      }
      safeActions.push(action);
    }
    this.steps.push({ line, actions: safeActions });
  }

  private processMetadata(
    ctx: MetadataContext, iterCtx?: number, exprCtx?: string, snapCtx?: any[],
  ): TraceAction | null {
    const directive = ctx.ID().getText();
    const paramsCtx = ctx.metadataParams();

    if (!paramsCtx) return null;

    const params = paramsCtx.metadataParam().map((p) => {
      const text = p.ID()?.getText();

      if (!text) {
        return this.visit(p.expression()!);
      } else {
        if (text.startsWith('"') && text.endsWith('"')) return text.slice(1, -1);
        if (!isNaN(Number(text))) return Number(text);

        const memVal = this.memory.get(text);
        if (memVal !== undefined) return memVal;
      }

      return text;
    });

    let action: TraceAction | null = null;

    if (directive === 'log') {
      if ((exprCtx !== undefined) && (params.length < 2))
        action = { cmd: 'vis_log', params: { level: params.length > 0 ? String(params[0]) : 'info', text: exprCtx } };
      else action = { cmd: 'vis_log', params: { level: params.length > 1 ? String(params[0]) : 'info', text: String(params.length > 1 ? params[1] : params[0]) } };
    } else if (directive === 'init') {
      if (exprCtx === undefined || snapCtx === undefined) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid init expression`);
      action = { cmd: 'vis_init', params: { type: String(params[0]), data: [...snapCtx] } };
      this.initArray = `${this.memory.globalOrLocal(exprCtx)}.${exprCtx}`;
    } else if (directive === 'mark') {
      const idx = Number(params[0]);
      if (isNaN(idx) && (iterCtx === undefined)) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid mark index: ${params[0]}`);
      if (!isNaN(idx)) action = { cmd: 'vis_mark', params: { index: idx, type: params.length > 1 ? String(params[1]) : 'outline', color: params.length > 2 ? String(params[2]) : 'fg', value: params.length > 3 ? params[3] : exprCtx } };
      else action = { cmd: 'vis_mark', params: { index: iterCtx, type: params.length > 0 ? String(params[0]) : 'outline', color: params.length > 1 ? String(params[1]) : 'fg', value: params.length > 2 ? params[2] : exprCtx } };
    } else if (directive === 'insert') {
      const idx = Number(params[0]);
      if (isNaN(idx) && (iterCtx === undefined)) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid insert index: ${params[0]}`);
      if (!isNaN(idx)) action = { cmd: 'vis_insert', params: { index: idx, value: params[1] } };
      else action = { cmd: 'vis_insert', params: { index: iterCtx, value: params[0] } };
    } else if (directive === 'delete') {
      const idx = Number(params[0]);
      if (isNaN(idx) && (iterCtx === undefined)) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid delete index: ${params[0]}`);
      if (!isNaN(idx)) action = { cmd: 'vis_delete', params: { index: idx } };
      else action = { cmd: 'vis_delete', params: { index: iterCtx } };
    } else if (directive === 'update') {
      const idx = Number(params[0]);
      if (isNaN(idx) && (iterCtx === undefined)) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid update index: ${params[0]}`);
      if (!isNaN(idx)) action = { cmd: 'vis_update', params: { index: idx, value: params[1] } };
      else action = { cmd: 'vis_update', params: { index: iterCtx, value: params[0] } };
    } else if (directive === 'swap') {
      const idx1 = Number(params[0]);
      const idx2 = Number(params[1]);
      if (isNaN(idx1) && (iterCtx === undefined)) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid first swap index: ${params[0]}`);
      if (isNaN(idx2) && (iterCtx === undefined)) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid second swap index: ${params[1]}`);
      if (!isNaN(idx1) && !isNaN(idx2)) action = { cmd: 'vis_swap', params: { index: idx1, index2: idx2 } };
      else if (!isNaN(idx1) && isNaN(idx2)) action = { cmd: 'vis_swap', params: { index: idx1, index2: iterCtx } };
      else if (isNaN(idx1) && !isNaN(idx2)) action = { cmd: 'vis_swap', params: { index: iterCtx, index2: idx2 } };
      else action = { cmd: 'vis_swap', params: { index: iterCtx, index2: iterCtx } };
    } else if (directive === 'sort') {
      action = { cmd: 'vis_sort', params: { name: String(params[0]) } };
    }

    return action;
  }

  private extractMetadataActions(
    ctx: any, iterCtx?: number, exprCtx?: string, snapCtx?: any[],
  ): TraceAction[] {
    const actions: TraceAction[] = [];
    const metadatas: any[] = [];

    if (typeof ctx.metadata === 'function')
      metadatas.push(ctx.metadata());
    if (ctx.parent && typeof ctx.parent.metadata === 'function' &&
      ctx.parent.constructor.name === 'StatementContext')
      metadatas.push(ctx.parent.metadata());

    for (const metadata of metadatas) {
      if (metadata && Array.isArray(metadata)) {
        for (const metaCtx of metadata) {
          const action =
            this.processMetadata(metaCtx, iterCtx, exprCtx, snapCtx);
          if (action) actions.push(action);
        }
      }
    }

    return actions;
  }

  private splitExpression(expr: any): string {
    if (expr.arrayInitialization && expr.arrayInitialization())
      throw new Error(`[line ${expr.start!.line}:${expr.start!.column}] Arrays cannot be used as logical expressions`);

    if (expr.logicalOrExpression && expr.logicalOrExpression())
      return this.splitExpression(expr.logicalOrExpression()!);

    if (!expr._left) {
      if (expr._op) {
        return ` ${expr._op.text}${this.splitExpression(expr._right!)}`;
      } else if (expr._right) {
        return this.splitExpression(expr._right!);
      } else if (expr._inner) {
        alert('inner');
        return ` (${this.splitExpression(expr.expression()!)})`;
      } else {
        return this.visit(expr).toString();
      }
    }

    let result = this.splitExpression(expr._left!);

    const rights = expr._right;
    if (!rights || (Array.isArray(rights) && rights.length === 0))
      return result;

    const rightArray = Array.isArray(rights) ? rights : [rights];
    for (let i = 0; i < rightArray.length; i++)
      result += ` ${expr._op[i].text} ${this.splitExpression(rightArray[i])}`;

    return result;
  }

  private prettyPrint(expr: ExpressionContext): string {
    if (expr.arrayInitialization())
      throw new Error(`[line ${expr.start!.line}:${expr.start!.column}] Arrays cannot be used as logical expressions`);

    return `${this.splitExpression(expr.logicalOrExpression()!)}?`;
  }

  private numDecimals(n: number): number {
    if (Math.floor(n) === n) return 0;
    return n.toString().split('.')[1].length;
  }

  visitProgram(ctx: ProgramContext): any {
    if (ctx.statement()) for (const stmt of ctx.statement()) this.visit(stmt);
    return this.steps;
  }

  visitStatement(ctx: StatementContext): any {
    if (ctx.assignment()) return this.visit(ctx.assignment()!);
    if (ctx.functionDecl()) return this.visit(ctx.functionDecl()!);
    if (ctx.functionCallStmt()) return this.visit(ctx.functionCallStmt()!);
    if (ctx.forEachLoop()) return this.visit(ctx.forEachLoop()!);
    if (ctx.whileLoop()) return this.visit(ctx.whileLoop()!);
    if (ctx.ifStatement()) return this.visit(ctx.ifStatement()!);
    if (ctx.returnStatement()) return this.visit(ctx.returnStatement()!);
    if (ctx.forLoop()) return this.visit(ctx.forLoop()!);
    if (ctx.doWhileLoop()) return this.visit(ctx.doWhileLoop()!);
    if (ctx.breakStatement()) return this.visit(ctx.breakStatement()!);
    if (ctx.continueStatement()) return this.visit(ctx.continueStatement()!);
    return null;
  }

  visitBreakStatement(ctx: BreakStatementContext): any {
    const metadataActions = this.extractMetadataActions(ctx);
    this.addStep(ctx.start!.line, metadataActions);

    return { __type: 'break' };
  }

  visitContinueStatement(ctx: ContinueStatementContext): any {
    const metadataActions = this.extractMetadataActions(ctx);
    this.addStep(ctx.start!.line, metadataActions);

    return { __type: 'continue' };
  }

  visitAssignment(ctx: AssignmentContext): any {
    const actions: TraceAction[] = [];
    const assignableCtx = ctx.assignable();
    const name = assignableCtx.ID().getText();
    let value = this.visit(ctx.expression()!);

    if (Array.isArray(this.memory.get(name)) && !ctx.EQ())
      throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Arrays cannot use special assignment operators`);

    if (ctx.PLUS_EQ()) value = this.memory.get(name) + value;
    else if (ctx.MINUS_EQ()) value = this.memory.get(name) - value;
    else if (ctx.STAR_EQ()) value = this.memory.get(name) * value;
    else if (ctx.SLASH_EQ()) value = this.memory.get(name) / value;
    else if (ctx.MOD_EQ()) value = this.memory.get(name) % value;

    if (assignableCtx.LBRACK()) {
      const array = this.memory.get(name);
      const index = this.visit(assignableCtx.expression()!);

      array[index] = value;
      if (`${this.memory.globalOrLocal(name)}.${name}` === this.initArray)
        actions.push({ cmd: 'vis_update', params: { index, value } });

      value = [...array];

      const metadataActions =
        this.extractMetadataActions(ctx, index, name, value);
      for (const action of metadataActions) actions.push(action);
    } else {
      this.memory.set(name, value);

      if (`${this.memory.globalOrLocal(name)}.${name}` === this.initArray) {
        const array = this.memory.get(name);
        for (let index = 0; index < array.length; index++)
          actions.push({ cmd: 'vis_update', params: { index, value: array[index] } });
      }

      const metadataActions =
        this.extractMetadataActions(ctx, value, name, value);
      for (const action of metadataActions) actions.push(action);
    }

    const snapshotValue = Array.isArray(value) ? [...value] : value;
    actions.push({ cmd: 'var_add', params: { name: `${this.memory.globalOrLocal(name)}.${name}`, value: snapshotValue } });

    this.addStep(ctx.start!.line, actions);
    return value;
  }

  visitValueArray(ctx: ValueArrayContext): any[] {
    return ctx.expressionList().expression().map((e) => {
      const val = this.visit(e);
      return val;
    });
  }

  visitRangeArray(ctx: RangeArrayContext): any[] {
    const from = this.visit(ctx._from_!);
    const to = this.visit(ctx._to!);

    const step = ctx._step ? this.visit(ctx._step) : 1;
    if (step <= 0) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Step must be > 0`);

    const maxDecimals = Math.max(
      this.numDecimals(from),
      this.numDecimals(to),
      this.numDecimals(step),
    );

    const arr: number[] = [];
    if (from > to) for (let i = from; i >= to; i -= step)
      arr.push(parseFloat(i.toFixed(maxDecimals)));
    else for (let i = from; i <= to; i += step)
      arr.push(parseFloat(i.toFixed(maxDecimals)));

    return arr;
  }

  visitSizeArray(ctx: SizeArrayContext): any[] {
    const size = Math.floor(this.visit(ctx._size!));
    const defaultVal = ctx._defaultVal != null ?
      this.visit(ctx._defaultVal) :
      0;
    return new Array(size).fill(defaultVal);
  }

  visitFunctionDecl(ctx: FunctionDeclContext): any {
    const metadataActions = this.extractMetadataActions(ctx);
    const funcName = ctx.ID().getText();

    this.functions.set(funcName, ctx);

    const start = ctx.start!.line;
    const end = ctx.stop?.line || start;

    this.addStep([start, end], [
      ...metadataActions,
      { cmd: 'var_add', params: { name: `${funcName}(...)`, value: '<function>' } },
    ]);
  }

  visitFunctionCallStmt(ctx: FunctionCallStmtContext): any {
    const metadataActions = this.extractMetadataActions(ctx);

    const funcName = ctx.ID().getText();
    const exprList = ctx.expressionList();

    return this.executeFunction(
      funcName, exprList, ctx.start!.line, metadataActions,
    );
  }

  private executeFunction(
    name: string, exprList: ExpressionListContext | null,
    callLine: number, metadataActions: TraceAction[] = [],
    shouldStep: boolean = true,
  ): any {
    const funcCtx = this.functions.get(name)!;
    const args = exprList ? this.visit(exprList) : [];

    if (!funcCtx) {
      switch (name) {
        case 'size':
        case 'length':
          if (args.length !== 1)
            throw new Error(`[line ${callLine}:0] Function '${name}' expects 1 arguments, but got ${args.length}`);

          if (shouldStep)
            this.addStep(callLine, metadataActions);
          return args[0].length;

        case 'print':
        case 'log':
          if (args.length !== 1)
            throw new Error(`[line ${callLine}:0] Function '${name}' expects 1 arguments, but got ${args.length}`);

          this.addStep(callLine, [...metadataActions,
            { cmd: 'vis_log', params: { text: args[0].toString() } },
          ]);
          return undefined;

        case 'warn':
          if (args.length !== 1)
            throw new Error(`[line ${callLine}:0] Function '${name}' expects 1 arguments, but got ${args.length}`);

          this.addStep(callLine, [...metadataActions,
            { cmd: 'vis_log', params: { level: 'warn', text: args[0].toString() } },
          ]);
          return undefined;

        case 'error':
          if (args.length !== 1)
            throw new Error(`[line ${callLine}:0] Function '${name}' expects 1 arguments, but got ${args.length}`);

          this.addStep(callLine, [...metadataActions,
            { cmd: 'vis_log', params: { level: 'error', text: args[0].toString() } },
          ]);
          return undefined;

        case 'sort':
          if (args.length !== 1)
            throw new Error(`[line ${callLine}:0] Function '${name}' expects 1 arguments, but got ${args.length}`);

          if (!Array.isArray(args[0]))
            throw new Error(`[line ${callLine}:0] Function '${name}' can only act on arrays`);

          if (shouldStep)
            this.addStep(callLine, metadataActions);
          return args[0].sort();

        case 'swap':
        {
          const exprs = exprList!.expression();
          if (exprs.length !== 2)
            throw new Error(`[line ${callLine}:0] Function '${name}' expects 2 arguments, but got ${exprs.length}`);

          this.isReferenceMode = true;
          const ref1 = this.visit(exprs[0]);
          this.isReferenceMode = true;
          const ref2 = this.visit(exprs[1]);
          this.isReferenceMode = false;

          if (!ref1?.isArrayAccess || !ref2?.isArrayAccess)
            throw new Error(`[line ${callLine}:0] Function '${name}' can only act on arrays`);

          const arr1 = this.memory.get(ref1.arrayName);
          const arr2 = this.memory.get(ref2.arrayName);

          if (!Array.isArray(arr1) || !Array.isArray(arr2))
            throw new Error(`[line ${callLine}:0] Function '${name}' can only act on arrays`);

          const temp = arr1[ref1.index];
          arr1[ref1.index] = arr2[ref2.index];
          arr2[ref2.index] = temp;

          const actions: TraceAction[] = [
            { cmd: 'var_add', params: { name: `${this.memory.globalOrLocal(ref1.arrayName)}.${ref1.arrayName}`, value: [...arr1] } },
          ];

          if (ref1.arrayName !== ref2.arrayName)
            actions.push({ cmd: 'var_add', params: { name: `${this.memory.globalOrLocal(ref2.arrayName)}.${ref2.arrayName}`, value: [...arr2] } });
          else if (`${this.memory.globalOrLocal(ref1.arrayName)}.${ref1.arrayName}` === this.initArray)
            actions.push({ cmd: 'vis_swap', params: { index: ref1.index, index2: ref2.index } });

          this.addStep(callLine, [...metadataActions, ...actions]);
          return undefined;
        }

        default:
          if (shouldStep)
            this.addStep(callLine, metadataActions);
          try {
            return eval(`Math.${name}(${args.map((a: any) => JSON.stringify(a)).join(',')})`);
          } catch {
            try {
              return eval(`(${name}(${args.map((a: any) => JSON.stringify(a)).join(',')}))`);
            } catch {
              throw new Error(`[line ${callLine}:0] Function '${name}' does not exist`);
            }
          }
      }
    }

    const paramCtxs = funcCtx.paramList()?.param() || [];
    if (paramCtxs.length !== args.length)
      throw new Error(`[line ${callLine}:0] Function '${name}' expects ${paramCtxs.length} arguments, but got ${args.length}`);

    const newScope: Scope = new Map();
    this.callStack.push(newScope);

    const initActions: TraceAction[] = [...metadataActions];

    paramCtxs.forEach((pCtx, i) => {
      const pName = pCtx.ID().getText();
      const val = args[i];
      const snapshotVal = Array.isArray(val) ? [...val] : val;

      newScope.set(pName, val);
      initActions.push({ cmd: 'var_add', params: { name: `${this.memory.LOCAL}.${pName}`, value: snapshotVal } });

      const metadataActions =
        this.extractMetadataActions(pCtx, undefined, pName, snapshotVal);
      if (metadataActions.length > 0) {
        for (const action of metadataActions) initActions.push(action);
      }
    });

    this.globalScope.forEach((_, key) => initActions.push({ cmd: 'var_greyout', params: { name: `${this.memory.GLOBAL}.${key}` } }));

    const funcBlock: BlockContext | null = funcCtx.block();
    this.addStep(funcCtx.start!.line, initActions);

    let retVal: any = undefined;
    const stmts = funcBlock?.statement();
    if (stmts) {
      for (const stmt of stmts) {
        const res = this.visit(stmt);
        if (res && res.__type === 'return') {
          retVal = res.value;
          break;
        }
      }
    }

    const cleanup: TraceAction[] = [];
    newScope.forEach((_, key) => cleanup.push({ cmd: 'var_delete', params: { name: `${this.memory.LOCAL}.${key}` } }));
    this.globalScope.forEach((_, key) => cleanup.push({ cmd: 'var_normal', params: { name: `${this.memory.GLOBAL}.${key}` } }));

    this.addStep(callLine, cleanup);
    this.callStack.pop();

    return retVal;
  }

  visitForLoop(ctx: ForLoopContext): any {
    const init = this.visit(ctx.assignment(0)!);

    let limit = MAX_ITERATIONS;
    let iter = init;
    while (true) {
      const metadataActions = this.extractMetadataActions(
        ctx, iter++, this.prettyPrint(ctx.expression()!),
      );
      this.addStep(ctx.start!.line, metadataActions);

      const condition = this.visit(ctx.expression()!);
      if (!condition || limit-- <= 0) break;

      const stmts = ctx.block()?.statement();
      let broke = false;
      if (stmts) {
        for (const stmt of stmts) {
          const res = this.visit(stmt);
          if (res && res.__type === 'break') {
            broke = true;
            break;
          }
          if (res && res.__type === 'continue') break;
          if (res && res.__type === 'return') return res;
        }
      }
      if (broke || !stmts) break;
      this.visit(ctx.assignment(1)!);
    }
  }

  visitWhileLoop(ctx: WhileLoopContext): any {
    let limit = MAX_ITERATIONS;
    let iter = 0;

    while (true) {
      const metadataActions = this.extractMetadataActions(
        ctx, iter++, this.prettyPrint(ctx.expression()!),
      );
      this.addStep(ctx.start!.line, metadataActions);

      const condition = this.visit(ctx.expression()!);
      if (!condition || limit-- <= 0) break;

      const stmts = ctx.block()?.statement();
      let broke = false;
      if (stmts) {
        for (const stmt of stmts) {
          const res = this.visit(stmt);
          if (res && res.__type === 'break') {
            broke = true;
            break;
          }
          if (res && res.__type === 'continue') break;
          if (res && res.__type === 'return') return res;
        }
      }
      if (broke || !stmts) break;
    }
  }

  visitDoWhileLoop(ctx: DoWhileLoopContext): any {
    let limit = MAX_ITERATIONS;
    let iter = 0;

    do {
      const metadataActions = this.extractMetadataActions(
        ctx, iter++, this.prettyPrint(ctx.expression()!),
      );
      this.addStep(ctx.start!.line, metadataActions);

      const stmts = ctx.block()?.statement();
      let broke = false;
      if (stmts) {
        for (const stmt of stmts) {
          const res = this.visit(stmt);
          if (res && res.__type === 'break') {
            broke = true;
            break;
          }
          if (res && res.__type === 'continue') break;
          if (res && res.__type === 'return') return res;
        }
      }
      if (broke || !stmts) break;

      const condition = this.visit(ctx.expression()!);
      if (!condition) break;
    } while (limit-- > 0);
  }

  visitForEachLoop(ctx: ForEachLoopContext): any {
    const iterVarName = ctx.ID(0)!.getText();
    const arrayName = ctx.ID(1)!.getText();
    const arrayData = this.memory.get(arrayName);

    if (Array.isArray(arrayData)) {
      for (let i = 0; i < arrayData.length; i++) {
        const val = arrayData[i];

        this.memory.set(iterVarName, val);

        const metadataActions = this.extractMetadataActions(ctx, i);
        const actions: TraceAction[] = [
          ...metadataActions,
          { cmd: 'var_add', params: { name: `${this.memory.globalOrLocal(iterVarName)}.${iterVarName}`, value: val } },
        ];
        this.addStep(ctx.start!.line, actions);

        const stmts = ctx.block()?.statement();
        let broke = false;
        if (stmts) {
          for (const stmt of stmts) {
            const res = this.visit(stmt);
            if (res && res.__type === 'break') {
              broke = true;
              break;
            }
            if (res && res.__type === 'continue') break;
            if (res && res.__type === 'return') return res;
          }
        }
        if (broke || !stmts) break;
      }
    } else throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] ${arrayName} is not an array`);
  }

  visitIfStatement(ctx: IfStatementContext): any {
    const expressions = ctx.expression();
    const blocks = ctx.block();

    let matchedBlockIndex = -1;
    for (let i = 0; i < expressions.length; i++) {
      const condition = this.visit(expressions[i]);
      if (condition) {
        matchedBlockIndex = i;
        break;
      }
    }

    const metadataActions = this.extractMetadataActions(
      ctx, undefined, this.prettyPrint(
        expressions[matchedBlockIndex >= 0 ? matchedBlockIndex : 0],
      ),
    );
    this.addStep(ctx.start!.line, metadataActions);

    if (matchedBlockIndex === -1 && blocks.length > expressions.length)
      matchedBlockIndex = blocks.length - 1;
    if (matchedBlockIndex !== -1) {
      const stmts = blocks[matchedBlockIndex].statement();
      if (stmts) {
        for (const stmt of stmts) {
          const res = this.visit(stmt);
          if (res && res.__type === 'break') return res;
          if (res && res.__type === 'continue') return res;
          if (res && res.__type === 'return') return res;
        }
      }
    }
  }

  visitLogicalOrExpression(ctx: LogicalOrExpressionContext): any {
    let left = this.visit(ctx._left!);
    const rights = ctx._right;
    if (!rights || (Array.isArray(rights) && rights.length === 0)) return left;
    const rightArray = Array.isArray(rights) ? rights : [rights];
    for (let i = 0; i < rightArray.length; i++)
      left = left || this.visit(rightArray[i]);
    return left;
  }

  visitLogicalAndExpression(ctx: LogicalAndExpressionContext): any {
    let left = this.visit(ctx._left!);
    const rights = ctx._right;
    if (!rights || (Array.isArray(rights) && rights.length === 0)) return left;
    const rightArray = Array.isArray(rights) ? rights : [rights];
    for (let i = 0; i < rightArray.length; i++)
      left = left && this.visit(rightArray[i]);
    return left;
  }

  visitCompareExpr(ctx: CompareExprContext): boolean | any {
    let left = this.visit(ctx._left!);
    const rights = ctx._right;
    const ops = ctx._op;

    if (!rights || (Array.isArray(rights) && rights.length === 0)) return left;

    const rightArray = Array.isArray(rights) ? rights : [rights];
    const opArray = Array.isArray(ops) ? ops : [ops];

    for (let i = 0; i < rightArray.length; i++) {
      const right = this.visit(rightArray[i]);
      const opText = opArray[i].text!;

      switch (opText) {
        case '==':
          left = left === right;
          break;
        case '!=':
          left = left !== right;
          break;
        case '<':
          left = left < right;
          break;
        case '>':
          left = left > right;
          break;
        case '<=':
          left = left <= right;
          break;
        case '>=':
          left = left >= right;
          break;
      }
    }
    return left;
  }

  visitAddExpr(ctx: AddExprContext): any {
    let left = this.visit(ctx._left!);
    const rights = ctx._right;
    const ops = ctx._op;
    if (!rights || (Array.isArray(rights) && rights.length === 0)) return left;

    const rightArray = Array.isArray(rights) ? rights : [rights];
    const opArray = Array.isArray(ops) ? ops : [ops];

    for (let i = 0; i < rightArray.length; i++) {
      const right = this.visit(rightArray[i]);
      const opText = opArray[i].text!;
      left = opText === '+' ? left + right : left - right;
    }
    return left;
  }

  visitMulExpr(ctx: MulExprContext): any {
    let left = this.visit(ctx._left!);
    const rights = ctx._right;
    const ops = ctx._op;
    if (!rights || (Array.isArray(rights) && rights.length === 0)) return left;

    const rightArray = Array.isArray(rights) ? rights : [rights];
    const opArray = Array.isArray(ops) ? ops : [ops];

    for (let i = 0; i < rightArray.length; i++) {
      const right = this.visit(rightArray[i]);
      const opText = opArray[i].text!;
      if (opText === '*') left = left * right;
      else if (opText === '/') left = left / right;
      else if (opText === '%') left = left % Math.floor(right);
    }
    return left;
  }

  visitPowerExpression(ctx: PowerExpressionContext): any {
    let left = this.visit(ctx._left!);
    const rights = ctx._right;
    if (!rights || (Array.isArray(rights) && rights.length === 0)) return left;
    const rightArray = Array.isArray(rights) ? rights : [rights];
    for (let i = 0; i < rightArray.length; i++)
      left = Math.pow(left, this.visit(rightArray[i]));
    return left;
  }

  visitParenExpression(ctx: ParenExpressionContext): any {
    return this.visit(ctx.expression()!);
  }

  visitUnaryMinusExpr(ctx: UnaryMinusExprContext): any {
    return -this.visit(ctx.unaryExpression()!);
  }

  visitUnaryNotExpr(ctx: UnaryNotExprContext): any {
    return !this.visit(ctx.unaryExpression()!);
  }

  visitArrayAccessExpression(ctx: ArrayAccessExpressionContext): any {
    const arrayName = ctx.ID().getText();

    // Disable ref mode deeply so nested indexes evaluate normally
    const prevRefMode = this.isReferenceMode;
    this.isReferenceMode = false;
    const index = this.visit(ctx.expression()!);
    if (isNaN(Number(index)) || index !== Math.floor(index) || index < 0) {
      throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Array index must be an integer >= 0`);
    }
    this.isReferenceMode = prevRefMode;

    if (this.isReferenceMode) {
      this.isReferenceMode = false; // consume it safely
      return { isArrayAccess: true, arrayName, index };
    }

    const arr = this.memory.get(arrayName);
    if (Array.isArray(arr)) return arr[index];
    throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Array '${arrayName}' does not exist`);
  }

  visitFunctionCallExpression(ctx: FunctionCallExpressionContext): any {
    const funcName = ctx.ID().getText();
    const exprList = ctx.expressionList();

    return this.executeFunction(funcName, exprList, ctx.start!.line, [], false);
  }

  visitAtomExpression(ctx: AtomExpressionContext): any {
    const text = ctx.getText();
    if (text === 'true' || text === 'True') return true;
    if (text === 'false' || text === 'False') return false;
    if (text === 'null' || text === 'Null') return null;
    if (!isNaN(Number(text))) return Number(text);
    if (text.startsWith('"') && text.endsWith('"')) return text.slice(1, -1);
    return this.memory.get(text);
  }

  visitExpressionList(ctx: ExpressionListContext): any[] {
    return ctx.expression().map(e => this.visit(e));
  }

  visitReturnStatement(ctx: ReturnStatementContext): any {
    const metadataActions = this.extractMetadataActions(ctx);
    this.addStep(ctx.start!.line, metadataActions);
    return { __type: 'return', value: this.visit(ctx.expression()!) };
  }
}
