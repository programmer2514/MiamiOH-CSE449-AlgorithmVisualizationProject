import { AbstractParseTreeVisitor } from 'antlr4ng';
import { PseudocodeVisitor } from './.antlr/PseudocodeVisitor';
import {
  ProgramContext,
  AssignmentContext,
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

export default class TraceInterpreterVisitor
  extends AbstractParseTreeVisitor<any>
  implements PseudocodeVisitor<any> {
  public steps: TraceStep[] = [];
  private globalScope: Scope = new Map();
  private callStack: Scope[] = [];
  private functions: Map<string, FunctionDeclContext> = new Map();

  // Heuristics & States
  private isReferenceMode: boolean = false;

  protected defaultResult(): any {
    return null;
  }

  protected aggregateResult(aggregate: any, nextResult: any): any {
    if (aggregate !== null && aggregate !== undefined) return aggregate;
    return nextResult;
  }

  // TODO: Allow functions access to global scope
  // TODO: Unmark any context-dependent metadata when loops end
  // TODO: Mark scope in var_* actions so the frontend can process it
  private get memory(): Scope {
    return this.callStack.length > 0 ?
      this.callStack[this.callStack.length - 1] :
      this.globalScope;
  }

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
    ctx: MetadataContext, iterCtx?: number, exprCtx?: string,
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
      action = { cmd: 'vis_init', params: { type: String(params[0]) } };
    } else if (directive === 'mark') {
      const idx = Number(params[0]);
      if (isNaN(idx) && (iterCtx === undefined)) throw new Error(`[line ${ctx.start!.line}:${ctx.start!.column}] Invalid mark index: ${params[0]}`);
      if (!isNaN(idx)) action = { cmd: 'vis_mark', params: { index: idx, type: params.length > 1 ? String(params[1]) : 'outline', color: params.length > 2 ? String(params[2]) : 'yellow', value: params.length > 3 ? params[3] : null } };
      else action = { cmd: 'vis_mark', params: { index: iterCtx, type: params.length > 0 ? String(params[0]) : 'outline', color: params.length > 1 ? String(params[1]) : 'yellow', value: params.length > 2 ? params[2] : null } };
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
    ctx: any, iterCtx?: number, exprCtx?: string,
  ): TraceAction[] {
    const actions: TraceAction[] = [];
    if (typeof ctx.metadata === 'function') {
      const metadataList = ctx.metadata();
      if (metadataList && Array.isArray(metadataList)) {
        for (const metaCtx of metadataList) {
          const action = this.processMetadata(metaCtx, iterCtx, exprCtx);
          if (action) actions.push(action);
        }
      }
    }
    if (
      ctx.parent &&
      typeof ctx.parent.metadata === 'function' &&
      ctx.parent.constructor.name === 'StatementContext'
    ) {
      const parentMetadataList = ctx.parent.metadata();
      if (parentMetadataList && Array.isArray(parentMetadataList)) {
        for (const metaCtx of parentMetadataList) {
          const action = this.processMetadata(metaCtx, iterCtx, exprCtx);
          if (action) actions.push(action);
        }
      }
    }

    return actions;
  }

  private prettyPrint(str: string): string {
    return str.replaceAll(/(and|or|not|\+|-|\*\*|\*|\/|%|<=|>=|<|>)/g, ' $1 ');
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
    if (metadataActions.length > 0)
      this.addStep(ctx.start!.line, metadataActions);

    return { __type: 'break' };
  }

  visitContinueStatement(ctx: ContinueStatementContext): any {
    const metadataActions = this.extractMetadataActions(ctx);
    if (metadataActions.length > 0)
      this.addStep(ctx.start!.line, metadataActions);

    return { __type: 'continue' };
  }

  visitAssignment(ctx: AssignmentContext): any {
    const assignableCtx = ctx.assignable();
    const name = assignableCtx.ID().getText();
    const isArrayAccess = !!assignableCtx.LBRACK();

    let value = ctx.arrayInitialization() ?
      this.visit(ctx.arrayInitialization()!) :
      this.visit(ctx.expression()!);

    if (!isArrayAccess) {
      if (ctx.PLUS_EQ()) value = (this.memory.get(name) || 0) + value;
      else if (ctx.MINUS_EQ()) value = (this.memory.get(name) || 0) - value;
    }

    if (isArrayAccess) {
      const prevRef = this.isReferenceMode;
      this.isReferenceMode = false;
      const index = Math.floor(this.visit(assignableCtx.expression()!));
      this.isReferenceMode = prevRef;

      const arr = this.memory.get(name);
      if (Array.isArray(arr)) {
        if (ctx.PLUS_EQ()) value = arr[index] + value;
        else if (ctx.MINUS_EQ()) value = arr[index] - value;
        arr[index] = value;

        const metadataActions = this.extractMetadataActions(ctx, index, value);
        const actions: TraceAction[] = [...metadataActions,
          { cmd: 'vis_update', params: { index, value } },
          { cmd: 'var_add', params: { name, value: [...arr] } },
        ];
        this.addStep(ctx.start!.line, actions);
      }
      return value;
    }

    this.memory.set(name, value);
    const snapshotValue = Array.isArray(value) ? [...value] : value;
    const metadataActions = this.extractMetadataActions(ctx, value, value);

    const actions: TraceAction[] = [...metadataActions, { cmd: 'var_add', params: { name, value: snapshotValue } }];
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
    const arr: number[] = [];
    for (let i = from; i <= to; i += step) arr.push(i);
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
    if (metadataActions.length > 0)
      this.addStep(ctx.start!.line, metadataActions);

    const funcName = ctx.ID().getText();
    const exprList = ctx.expressionList();

    if (funcName === 'swap' && exprList) {
      const exprs = exprList.expression();
      if (exprs.length === 2) {
        this.isReferenceMode = true;
        const ref1 = this.visit(exprs[0]);
        this.isReferenceMode = true;
        const ref2 = this.visit(exprs[1]);
        this.isReferenceMode = false;

        if (ref1?.isArrayAccess && ref2?.isArrayAccess) {
          const arr1 = this.memory.get(ref1.arrayName);
          const arr2 = this.memory.get(ref2.arrayName);

          if (Array.isArray(arr1) && Array.isArray(arr2)) {
            const temp = arr1[ref1.index];
            arr1[ref1.index] = arr2[ref2.index];
            arr2[ref2.index] = temp;

            if (ref1.arrayName === ref2.arrayName) {
              this.addStep(ctx.start!.line, [
                { cmd: 'var_add', params: { name: ref1.arrayName, value: [...arr1] } },
                { cmd: 'vis_swap', params: { index: ref1.index, index2: ref2.index } },
              ]);
            } else {
              this.addStep(ctx.start!.line, [
                { cmd: 'var_add', params: { name: ref1.arrayName, value: [...arr1] } },
                { cmd: 'var_add', params: { name: ref2.arrayName, value: [...arr2] } },
                { cmd: 'vis_swap', params: { index: ref1.index, index2: ref2.index } },
              ]);
            }
            return;
          }
        }
      }
    }

    const args = exprList ? this.visit(exprList) : [];
    return this.executeFunction(funcName, args, ctx.start!.line);
  }

  executeFunction(name: string, args: any[], callLine: number) {
    const funcCtx = this.functions.get(name);
    if (!funcCtx) {
      try {
        return eval(`Math.${name}(${args.map(a => JSON.stringify(a)).join(',')})`);
      } catch {
        try {
          return eval(`${name}(${args.map(a => JSON.stringify(a)).join(',')})`);
        } catch {
          return undefined;
        }
      }
    }

    const paramCtxs = funcCtx.paramList()?.param() || [];
    const newScope: Scope = new Map();
    const initActions: TraceAction[] = [];

    paramCtxs.forEach((pCtx, i) => {
      const pName = pCtx.ID().getText();
      const val = args[i];
      newScope.set(pName, val);
      const snapshotVal = Array.isArray(val) ? [...val] : val;
      initActions.push({ cmd: 'var_add', params: { name: pName, value: snapshotVal } });
      let hasInit = false;
      if (pCtx.metadata) {
        const metaList = pCtx.metadata();
        for (const meta of metaList) {
          const action = this.processMetadata(meta);
          if (action && action.cmd === 'vis_init') {
            action.params.data = snapshotVal;
            initActions.push(action);
            hasInit = true;
          }
        }
      }
      if (!hasInit && Array.isArray(val)) {
        initActions.push({ cmd: 'vis_init', params: { data: snapshotVal, type: 'table' } });
      }
    });

    this.globalScope.forEach((_, key) => initActions.push({ cmd: 'var_greyout', params: { name: key } }));

    const funcBlock: BlockContext | null = funcCtx.block();
    let entryLine = funcCtx.start!.line;
    if (funcBlock && funcBlock.statement(0))
      entryLine = funcBlock.statement(0)!.start!.line;
    this.addStep(entryLine, initActions);

    this.callStack.push(newScope);
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
    newScope.forEach((_, key) => cleanup.push({ cmd: 'var_delete', params: { name: key } }));
    this.globalScope.forEach((_, key) => cleanup.push({ cmd: 'var_normal', params: { name: key } }));

    this.addStep(callLine, cleanup);

    this.callStack.pop();
    return retVal;
  }

  visitForLoop(ctx: ForLoopContext): any {
    const init = this.visit(ctx.assignment(0)!);

    let limit = 1000;
    let iter = init;
    while (true) {
      const condition = this.visit(ctx.expression()!);
      if (!condition || limit-- <= 0) break;

      const metadataActions = this.extractMetadataActions(ctx, iter++, `${this.prettyPrint(ctx.expression()!.getText())}?`);
      if (metadataActions.length > 0)
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
      this.visit(ctx.assignment(1)!);
    }
  }

  visitWhileLoop(ctx: WhileLoopContext): any {
    let limit = 1000;
    let iter = 0;

    while (true) {
      const condition = this.visit(ctx.expression()!);
      if (!condition || limit-- <= 0) break;

      const metadataActions = this.extractMetadataActions(ctx, iter++, `${this.prettyPrint(ctx.expression()!.getText())}?`);
      if (metadataActions.length > 0)
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
    }
  }

  visitDoWhileLoop(ctx: DoWhileLoopContext): any {
    let limit = 1000;
    let iter = 0;

    do {
      const metadataActions = this.extractMetadataActions(ctx, iter++, `${this.prettyPrint(ctx.expression()!.getText())}?`);
      if (metadataActions.length > 0)
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
          { cmd: 'var_add', params: { name: iterVarName, value: val } },
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

    const metadataActions = this.extractMetadataActions(ctx, undefined, `${this.prettyPrint(ctx.expression()!.map(e => e.getText()).join(''))}?`);
    if (metadataActions.length > 0)
      this.addStep(ctx.start!.line, metadataActions);

    let matchedBlockIndex = -1;
    for (let i = 0; i < expressions.length; i++) {
      const condition = this.visit(expressions[i]);
      if (condition) {
        matchedBlockIndex = i;
        break;
      }
    }
    if (matchedBlockIndex === -1 && blocks.length > expressions.length)
      matchedBlockIndex = blocks.length - 1;
    if (matchedBlockIndex !== -1) {
      const stmts = blocks[matchedBlockIndex].statement();
      if (stmts) {
        for (const stmt of stmts) {
          const res = this.visit(stmt);
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
    const index = Math.floor(this.visit(ctx.expression()!));
    this.isReferenceMode = prevRefMode;

    if (this.isReferenceMode) {
      this.isReferenceMode = false; // consume it safely
      return { isArrayAccess: true, arrayName, index };
    }

    const arr = this.memory.get(arrayName);
    if (Array.isArray(arr)) return arr[index];
    return null;
  }

  visitFunctionCallExpression(ctx: FunctionCallExpressionContext): any {
    const funcName = ctx.ID().getText();
    const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : [];

    if ((funcName === 'size' || funcName === 'length') && Array.isArray(args[0])) return args[0].length;
    if (funcName === 'floor' && typeof args[0] === 'number') return Math.floor(args[0]);
    return this.executeFunction(funcName, args, ctx.start!.line);
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
    if (metadataActions.length > 0)
      this.addStep(ctx.start!.line, metadataActions);
    return { __type: 'return', value: this.visit(ctx.expression()!) };
  }
}
