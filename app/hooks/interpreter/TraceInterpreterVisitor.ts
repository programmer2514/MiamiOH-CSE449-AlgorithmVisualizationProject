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
  ArrayAccessExpressionContext,
  FunctionCallExpressionContext,
  WhileLoopContext,
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

  // Heuristics
  private currentLoopIndex: number | null = null;
  private currentLoopVar: string | null = null;
  private lastComparisonLeft: any = null;
  private lastComparisonRight: any = null;
  private lastComparisonOp: string = '';
  private recentArrayAccesses: Array<{ index: number, arrayName: string }> = [];

  protected defaultResult(): any {
    return null;
  }

  private get memory(): Scope {
    return this.callStack.length > 0 ?
      this.callStack[this.callStack.length - 1] :
      this.globalScope;
  }

  private addStep(line: number | number[], actions: TraceAction[]) {
    this.steps.push({ line, actions });
  }

  // --- Entry ---
  visitProgram(ctx: ProgramContext): any {
    if (ctx.statement()) {
      for (const stmt of ctx.statement()) {
        this.visit(stmt);
      }
    }
    return this.steps;
  }

  // --- Statements ---
  visitAssignment(ctx: AssignmentContext): any {
    const name = ctx.ID().getText();
    let value;
    if (ctx.arrayInitialization()) {
      value = this.visit(ctx.arrayInitialization()!);
    } else {
      value = this.visit(ctx.expression()!);
    }
    this.memory.set(name, value);

    if (typeof value === 'number' && this.recentArrayAccesses.length > 0) {
      const unmarkActions: TraceAction[] = [];

      const accessedIndices = new Set(
        this.recentArrayAccesses.map(a => a.index),
      );
      for (const idx of accessedIndices) {
        unmarkActions.push({ cmd: 'vis_unmark', params: { index: idx, type: 'all' } });
      }

      // Add the variable assignment
      unmarkActions.push({ cmd: 'var_add', params: { name, value } });

      this.addStep(ctx.start!.line, unmarkActions);

      // Clear the array access history
      this.recentArrayAccesses = [];
      return;
    }

    this.addStep(ctx.start!.line, [{ cmd: 'var_add', params: { name, value } }]);
  }

  // --- Arrays ---
  visitValueArray(ctx: ValueArrayContext): any[] {
    return ctx.INT().map(n => parseInt(n.getText(), 10));
  }

  visitRangeArray(ctx: RangeArrayContext): any[] {
    const from = parseInt(ctx._from_!.text!, 10);
    const to = parseInt(ctx._to!.text!, 10);
    const arr: number[] = [];
    for (let i = from; i <= to; i++) arr.push(i);
    return arr;
  }

  visitSizeArray(ctx: SizeArrayContext): any[] {
    const size = parseInt(ctx._size!.text!, 10);
    return new Array(size).fill(0);
  }

  // --- Functions ---
  visitFunctionDecl(ctx: FunctionDeclContext): any {
    const funcName = ctx.ID().getText();
    this.functions.set(funcName, ctx);
    const start = ctx.start!.line;
    const end = ctx.stop?.line || start;
    this.addStep([start, end], [{
      cmd: 'var_add',
      params: { name: `${funcName}(...)`, value: '<function>' },
    }]);
  }

  visitFunctionCallStmt(ctx: FunctionCallStmtContext): any {
    const funcName = ctx.ID().getText();
    const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : [];

    // Execute any function generically
    return this.executeFunction(funcName, args, ctx.start!.line);
  }

  executeFunction(name: string, args: any[], callLine: number) {
    const funcCtx = this.functions.get(name);
    if (!funcCtx) return;

    const paramNames = funcCtx.paramList()?.ID().map(n => n.getText()) || [];
    const newScope: Scope = new Map();
    const initActions: TraceAction[] = [];

    paramNames.forEach((pName, i) => {
      const val = args[i];
      newScope.set(pName, val);
      initActions.push({ cmd: 'var_add', params: { name: pName, value: val } });
      if (Array.isArray(val)) {
        initActions.push({ cmd: 'vis_init', params: { data: val, type: 'table' } });
      }
    });

    this.globalScope.forEach((_, key) => initActions.push({ cmd: 'var_greyout', params: { name: key } }));

    let entryLine = funcCtx.start!.line;
    if (funcCtx.statement(0)) entryLine = funcCtx.statement(0)!.start!.line;
    this.addStep(entryLine, initActions);

    this.callStack.push(newScope);
    let retVal = null;

    const stmts = funcCtx.statement();
    if (stmts) {
      for (const stmt of stmts) {
        const res = this.visit(stmt);
        if (res !== undefined && res !== null) {
          retVal = res;
          break;
        }
      }
    }

    const cleanup: TraceAction[] = [];
    newScope.forEach((_, key) => cleanup.push({ cmd: 'var_delete', params: { name: key } }));
    this.globalScope.forEach((_, key) => cleanup.push({ cmd: 'var_normal', params: { name: key } }));
    if (retVal !== null) cleanup.push({ cmd: 'var_add', params: { name: 'result', value: retVal } });

    this.addStep(callLine, cleanup);
    this.callStack.pop();
    return retVal;
  }

  visitForEachLoop(ctx: ForEachLoopContext): any {
    const iterVarName = ctx.ID(0)!.getText();
    const arrayName = ctx.ID(1)!.getText();
    const arrayData = this.memory.get(arrayName);

    if (Array.isArray(arrayData)) {
      for (let i = 0; i < arrayData.length; i++) {
        const val = arrayData[i];
        this.memory.set(iterVarName, val);

        this.currentLoopIndex = i;
        this.currentLoopVar = iterVarName;

        const actions: TraceAction[] = [
          { cmd: 'var_add', params: { name: iterVarName, value: val } },
          { cmd: 'vis_mark', params: { index: i, type: 'outline', color: 'yellow' } },
        ];
        if (i > 0) actions.unshift({ cmd: 'vis_unmark', params: { index: i - 1, type: 'all' } });

        this.addStep(ctx.start!.line, actions);

        const stmts = ctx.statement();
        if (stmts) {
          for (const stmt of stmts) {
            console.log(`Visiting statement at index ${i}, value ${val}`);
            const res = this.visit(stmt);
            console.log(`Result: ${res}, Type: ${typeof res}, Undefined? ${res === undefined}, Null? ${res === null}`);

            // Check if a statement returned a value
            if (res !== undefined && res !== null) {
              console.log(`SHOULD RETURN HERE with value ${res}`);
              // Add final cleanup before returning
              this.addStep(ctx.start!.line, [
                { cmd: 'vis_unmark', params: { index: i, type: 'all' } },
              ]);
              this.currentLoopIndex = null;
              this.currentLoopVar = null;
              return res;
            }
          }
        }
      }
      if (arrayData.length > 0) {
        this.addStep(ctx.start!.line, [
          { cmd: 'vis_unmark', params: { index: arrayData.length - 1, type: 'all' } },
        ]);
      }

      this.currentLoopIndex = null;
      this.currentLoopVar = null;
    }
  }

  visitWhileLoop(ctx: WhileLoopContext): any {
    let limit = 20; // Safety break
    let iterations = 0;

    console.log('Starting while loop');

    while (this.visit(ctx.expression()) && limit-- > 0) {
      iterations++;
      console.log(`While loop iteration ${iterations}`);

      const stmts = ctx.statement();
      if (stmts) {
        for (const stmt of stmts) {
          const res = this.visit(stmt);
          console.log(`Statement result: ${res}`);
          if (res !== undefined && res !== null) {
            console.log(`While loop returning: ${res}`);
            return res;
          }
        }
      }
    }

    console.log(`While loop ended after ${iterations} iterations`);
  }

  visitIfStatement(ctx: IfStatementContext): any {
    const condition = this.visit(ctx.expression());

    // DYNAMIC: Visualize any array access that happened during the comparison
    // This works for binary search, linear search, sorting, or ANY algorithm
    if (this.recentArrayAccesses.length > 0) {
      const visualizeActions: TraceAction[] = [];

      // Visualize all recent array accesses
      for (const access of this.recentArrayAccesses) {
        visualizeActions.push({
          cmd: 'vis_mark',
          params: {
            index: access.index,
            type: 'outline',
            color: 'yellow',
          },
        });
      }

      if (this.lastComparisonLeft !== null &&
        this.lastComparisonRight !== null) {
        const mostRecent = this.recentArrayAccesses[this.recentArrayAccesses.length - 1];
        visualizeActions.push({
          cmd: 'vis_mark',
          params: {
            index: mostRecent.index,
            type: 'text',
            color: 'fg',
            value: `${this.lastComparisonLeft} ${this.lastComparisonOp} ${this.lastComparisonRight}?`,
          },
        });
      }

      this.addStep(ctx.start!.line, visualizeActions);
      this.recentArrayAccesses = [];
    } else if (this.currentLoopIndex !== null &&
      this.lastComparisonLeft !== null &&
      this.lastComparisonRight !== null) {
      this.addStep(ctx.start!.line, [{
        cmd: 'vis_mark',
        params: {
          index: this.currentLoopIndex,
          type: 'text',
          color: 'fg',
          value: `${this.lastComparisonLeft} ${this.lastComparisonOp} ${this.lastComparisonRight}?`,
        },
      }]);
    }

    if (condition) {
      const stmts = ctx.statement();
      if (stmts) {
        for (const stmt of stmts) {
          if (stmt.returnStatement()) {
            const matchActions: TraceAction[] = [];

            // DYNAMIC: Use most recent array access OR loop index
            let indexToMark: number | null = null;

            if (this.recentArrayAccesses.length > 0) {
              indexToMark = this.recentArrayAccesses[this.recentArrayAccesses.length - 1].index;
            } else if (this.currentLoopIndex !== null) {
              indexToMark = this.currentLoopIndex;
            }

            if (indexToMark !== null) {
              matchActions.push(
                {
                  cmd: 'vis_mark',
                  params: { index: indexToMark, type: 'outline', color: 'green' },
                },
                {
                  cmd: 'vis_mark',
                  params: { index: indexToMark, type: 'highlight', color: 'green' },
                },
              );

              if (this.lastComparisonLeft !== null &&
                this.lastComparisonRight !== null) {
                matchActions.push({
                  cmd: 'vis_mark',
                  params: {
                    index: indexToMark,
                    type: 'text',
                    color: 'fg',
                    value: `${this.lastComparisonLeft} ${this.lastComparisonOp} ${this.lastComparisonRight}`,
                  },
                });
              }

              this.addStep(stmt.start!.line, matchActions);
            }
          }

          const res = this.visit(stmt);
          if (res !== undefined && res !== null) {
          // Clear all state
            this.lastComparisonLeft = null;
            this.lastComparisonRight = null;
            this.lastComparisonOp = '';
            this.recentArrayAccesses = [];
            return res;
          }
        }
      }
    }

    // Clear state after if statement
    this.lastComparisonLeft = null;
    this.lastComparisonRight = null;
    this.lastComparisonOp = '';

    return undefined;
  }

  // math/expressions
  visitAddExpr(ctx: AddExprContext): any {
    const left = this.visit(ctx.getChild(0)!);
    const right = this.visit(ctx.getChild(2)!);
    if (ctx._op!.text === '+') return left + right;
    return left - right;
  }

  visitMulExpr(ctx: MulExprContext): any {
    const left = this.visit(ctx.getChild(0)!);
    const right = this.visit(ctx.getChild(2)!);
    if (ctx._op!.text === '*') return left * right;
    return left / right;
  }

  visitParenExpression(ctx: ParenExpressionContext): any {
    return this.visit(ctx.expression());
  }

  visitUnaryMinusExpr(ctx: UnaryMinusExprContext): any {
    return -this.visit(ctx.unaryExpression());
  }

  visitCompareExpr(ctx: CompareExprContext): boolean {
    const left = this.visit(ctx.getChild(0)!);
    const right = this.visit(ctx.getChild(2)!);

    this.lastComparisonLeft = left;
    this.lastComparisonRight = right;
    this.lastComparisonOp = ctx._op!.text!;

    switch (ctx._op!.text) {
      case '==': return left === right;
      case '<': return left < right;
      case '>': return left > right;
      case '<=': return left <= right;
      case '>=': return left >= right;
    }
    return false;
  }

  visitArrayAccessExpression(ctx: ArrayAccessExpressionContext): any {
    const arrayName = ctx.ID().getText();
    const index = Math.floor(this.visit(ctx.expression()));
    const arr = this.memory.get(arrayName);
    this.recentArrayAccesses.push({ index, arrayName });
    if (this.recentArrayAccesses.length > 5) {
      this.recentArrayAccesses.shift();
    }
    if (Array.isArray(arr)) return arr[index];
    return null;
  }

  visitFunctionCallExpression(ctx: FunctionCallExpressionContext): any {
    const funcName = ctx.ID().getText();
    const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : [];
    if (funcName === 'size' && Array.isArray(args[0])) {
      return args[0].length;
    }
    if (funcName === 'floor' && typeof args[0] === 'number') {
      return Math.floor(args[0]);
    }

    return this.executeFunction(funcName, args, ctx.start!.line);
  }

  visitAtomExpression(ctx: AtomExpressionContext): any {
    const text = ctx.getText();
    if (!isNaN(Number(text))) {
      console.log(`Atom is number: ${text} -> ${Number(text)}`);
      return Number(text);
    }
    const value = this.memory.get(text);
    console.log(`Atom is variable '${text}': ${value}`);
    return value;
  }

  visitExpressionList(ctx: ExpressionListContext): any[] {
    return ctx.expression().map(e => this.visit(e));
  }

  visitReturnStatement(ctx: ReturnStatementContext): any {
    return this.visit(ctx.expression());
  }
}
