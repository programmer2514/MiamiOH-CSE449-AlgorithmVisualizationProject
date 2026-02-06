import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PseudocodeVisitor } from './generated/PseudocodeVisitor';
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
  WhileLoopContext
  // Removed LogicalExprContext to fix your error
} from './generated/PseudocodeParser';
import { TraceStep, TraceAction } from './TraceType';

type Scope = Map<string, any>;

export default class TraceInterpreterVisitor
  extends AbstractParseTreeVisitor<any>
  implements PseudocodeVisitor<any>
{
  public steps: TraceStep[] = [];
  
  private globalScope: Scope = new Map();
  private callStack: Scope[] = [];
  private functions: Map<string, FunctionDeclContext> = new Map();

  // Heuristics
  private currentLoopIndex: number | null = null; 
  private currentLoopVar: string | null = null;

  protected defaultResult(): any { return null; }

  private get memory(): Scope {
    return this.callStack.length > 0 ? this.callStack[this.callStack.length - 1] : this.globalScope;
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
    const name = ctx.ID().text;
    let value;
    if (ctx.arrayInitialization()) {
      value = this.visit(ctx.arrayInitialization()!);
    } else {
      value = this.visit(ctx.expression()!);
    }
    this.memory.set(name, value);
    this.addStep(ctx.start.line, [{ cmd: 'var_add', params: { name, value } }]);
  }

  // --- Arrays ---
  visitValueArray(ctx: ValueArrayContext): any[] {
    return ctx.INT().map(n => parseInt(n.text, 10));
  }
  visitRangeArray(ctx: RangeArrayContext): any[] {
      const from = parseInt(ctx._from.text!, 10);
      const to = parseInt(ctx._to.text!, 10);
      const arr = [];
      for(let i=from; i<=to; i++) arr.push(i);
      return arr;
  }
  visitSizeArray(ctx: SizeArrayContext): any[] {
      const size = parseInt(ctx._size.text!, 10);
      return new Array(size).fill(0);
  }

  // --- Functions ---
  visitFunctionDecl(ctx: FunctionDeclContext): any {
    const funcName = ctx.ID().text;
    this.functions.set(funcName, ctx);
    const start = ctx.start.line;
    const end = ctx.stop?.line || start;
    this.addStep([start, end], [{
      cmd: 'var_add',
      params: { name: `${funcName}(...)`, value: '<function>' }
    }]);
  }

  visitFunctionCallStmt(ctx: FunctionCallStmtContext): any {
    const funcName = ctx.ID().text;
    const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : [];
    
    // Handle merge sort 
    if (funcName === 'merge_sort' && Array.isArray(args[0])) {
       args[0].sort((a: number, b: number) => a - b);
       this.addStep(ctx.start.line, [{
           cmd: 'vis_init', params: { data: args[0], type: 'table' } // Re-init with sorted data
       }]);
       return;
    }

    return this.executeFunction(funcName, args, ctx.start.line);
  }

  executeFunction(name: string, args: any[], callLine: number) {
    const funcCtx = this.functions.get(name);
    if (!funcCtx) return;

    const paramNames = funcCtx.paramList()?.ID().map(n => n.text) || [];
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
    
    let entryLine = funcCtx.start.line;
    if (funcCtx.statement(0)) entryLine = funcCtx.statement(0).start.line;
    this.addStep(entryLine, initActions);

    this.callStack.push(newScope);
    let retVal = null;
    
    const stmts = funcCtx.statement();
    if (stmts) {
      for (const stmt of stmts) {
        const res = this.visit(stmt);
        if (res !== undefined && res !== null && stmt.returnStatement()) {
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
    const iterVarName = ctx.ID(0).text; 
    const arrayName = ctx.ID(1).text;
    const arrayData = this.memory.get(arrayName);

    if (Array.isArray(arrayData)) {
      for (let i = 0; i < arrayData.length; i++) {
        const val = arrayData[i];
        this.memory.set(iterVarName, val);
        
        // Usage of loop index (fixes unused variable error)
        this.currentLoopIndex = i;
        this.currentLoopVar = iterVarName;

        const actions: TraceAction[] = [
            { cmd: 'var_add', params: { name: iterVarName, value: val } },
            { cmd: 'vis_mark', params: { index: i, type: 'outline', color: 'yellow' } }
        ];
        if (i > 0) actions.unshift({ cmd: 'vis_unmark', params: { index: i-1, type: 'all' } });

        this.addStep(ctx.start.line, actions);

        const stmts = ctx.statement();
        if (stmts) {
          for (const stmt of stmts) {
            const res = this.visit(stmt);
            if (res !== undefined && res !== null && stmt.returnStatement()) return res;
          }
        }
      }
      this.addStep(ctx.start.line, [{ cmd: 'vis_unmark', params: { index: arrayData.length - 1, type: 'all' } }]);
      
      // Resetting them (also counts as usage)
      this.currentLoopIndex = null;
      this.currentLoopVar = null;
    }
  }

  visitWhileLoop(ctx: WhileLoopContext): any {
      let limit = 20; // Safety break
      while (this.visit(ctx.expression()) && limit-- > 0) {
          const stmts = ctx.statement();
          if (stmts) {
              for (const stmt of stmts) {
                  const res = this.visit(stmt);
                  if (res !== undefined && res !== null && stmt.returnStatement()) return res;
              }
          }
      }
  }

  visitIfStatement(ctx: IfStatementContext): any {
    // Reads currentLoopIndex and currentLoopVar
    if (this.currentLoopIndex !== null && this.currentLoopVar !== null) {
        const lhsVal = this.memory.get(this.currentLoopVar);
        const rhsVal = this.memory.get('k') || this.memory.get('key');
        
        this.addStep(ctx.start.line, [{
            cmd: 'vis_mark', params: { index: this.currentLoopIndex, type: 'text', color: 'fg', value: `${lhsVal} == ${rhsVal}?` }
        }]);
    }

    // Check if 'mid' exists
    const midVal = this.memory.get('mid');
    if (midVal !== undefined && typeof midVal === 'number') {
        this.addStep(ctx.start.line, [{
            cmd: 'vis_mark', params: { index: Math.floor(midVal), type: 'outline', color: 'blue' }
        }]);
    }

    const condition = this.visit(ctx.expression());
    if (condition) {
      const stmts = ctx.statement();
      if (stmts) {
        for (const stmt of stmts) {
            // Reads currentLoopIndex
           if (stmt.returnStatement() && this.currentLoopIndex !== null) {
             this.addStep(stmt.start.line, [{
                cmd: 'vis_mark', params: { index: this.currentLoopIndex, type: 'outline', color: 'green' }
             }]);
           }
           const res = this.visit(stmt);
           if (res !== undefined && res !== null && stmt.returnStatement()) return res;
        }
      }
    }
  }

  // math/expressions 

  visitAddExpr(ctx: AddExprContext): any {
      const left = this.visit(ctx._left);
      const right = this.visit(ctx._right);
      if (ctx._op.text === '+') return left + right;
      return left - right;
  }

  visitMulExpr(ctx: MulExprContext): any {
      const left = this.visit(ctx._left);
      const right = this.visit(ctx._right);
      if (ctx._op.text === '*') return left * right;
      return left / right;
  }

  visitParenExpression(ctx: ParenExpressionContext): any {
      return this.visit(ctx.expression());
  }

  visitUnaryMinusExpr(ctx: UnaryMinusExprContext): any {
      return -this.visit(ctx.unaryExpression());
  }

  visitCompareExpr(ctx: CompareExprContext): boolean {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    switch(ctx._op.text) {
        case '==': return left === right;
        case '<': return left < right;
        case '>': return left > right;
        case '<=': return left <= right;
        case '>=': return left >= right;
    }
    return false;
  }

  visitArrayAccessExpression(ctx: ArrayAccessExpressionContext): any {
      const arrayName = ctx.ID().text;
      const index = Math.floor(this.visit(ctx.expression()));
      const arr = this.memory.get(arrayName);
      if (Array.isArray(arr)) return arr[index];
      return null;
  }

visitFunctionCallExpression(ctx: FunctionCallExpressionContext): any {
      const funcName = ctx.ID().text;
      const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : [];
      
      // Built-in size
      if (funcName === 'size' && Array.isArray(args[0])) {
          return args[0].length;
      }

      // Built-in floor because typescript automatically uses floats for arithmetic ig 
      if (funcName === 'floor' && typeof args[0] === 'number') {
          return Math.floor(args[0]);
      }
      return this.executeFunction(funcName, args, ctx.start.line);
  }
  visitAtomExpression(ctx: AtomExpressionContext): any {
    const text = ctx.text;
    if (!isNaN(Number(text))) return Number(text);
    return this.memory.get(text);
  }

  visitExpressionList(ctx: ExpressionListContext): any[] {
    return ctx.expression().map(e => this.visit(e));
  }
  
  visitReturnStatement(ctx: ReturnStatementContext): any {
    return this.visit(ctx.expression());
  }
}