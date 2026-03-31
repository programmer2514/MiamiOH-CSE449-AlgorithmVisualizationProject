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
  MetadataContext,
  BlockContext
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

  // Heuristics - all generic, no hardcoded names
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

  /**
   * Process metadata directive and generate appropriate trace action
   * Works for any metadata directive
   */
  private processMetadata(ctx: MetadataContext): TraceAction | null {
    const directive = ctx.ID().getText();
    const paramsCtx = ctx.metadataParams();

    if (!paramsCtx) return null;

    const params = paramsCtx.metadataParam().map((p) => {
      const text = p.getText();

      // Remove quotes from strings
      if (text.startsWith('"') && text.endsWith('"')) {
        return text.slice(1, -1);
      }

      // Parse numbers
      if (!isNaN(Number(text))) {
        return Number(text);
      }

      // Return identifiers as-is
      return text;
    });

    let action: TraceAction | null = null;

    // Handle @log directive
    if (directive === 'log') {
      if (params.length === 1) {
        // @log<"message"> - defaults to 'info'
        action = {
          cmd: 'vis_log',
          params: {
            level: 'info',
            text: String(params[0]),
          },
        };
      } else if (params.length === 2) {
        // @log<level, "message">
        action = {
          cmd: 'vis_log',
          params: {
            level: String(params[0]),
            text: String(params[1]),
          },
        };
      }
    }

    // Handle @init directive
    else if (directive === 'init') {
      if (params.length >= 1) {
        // e.g. @init<"table">
        action = {
          cmd: 'vis_init',
          params: {
            type: String(params[0]),
          },
        };
      }
    }

    // Handle @mark directive
    else if (directive === 'mark') {
      if (params.length >= 1) {
        // pass @mark<index> OR @mark<index, color> OR @mark<index, color, type>
        action = {
          cmd: 'vis_mark',
          params: {
            index: Number(params[0]),
            color: params.length > 1 ? String(params[1]) : 'yellow', // Default color
            type: params.length > 2 ? String(params[2]) : 'outline', // Default type
          },
        };
      }
    }

    // Console log the trace result
    if (action) {
      console.log(`[Trace Interpreter] Parsed @${directive} ->`, action);
    } else {
      console.log(`[Trace Interpreter] Ignored or invalid @${directive} with params:`, params);
    }

    return action;
  }

  /**
   * Extract all metadata actions from statement context
   */
  private extractMetadataActions(ctx: any): TraceAction[] {
    const actions: TraceAction[] = [];

    // Check if this context has metadata
    if (typeof ctx.metadata === 'function') {
      const metadataList = ctx.metadata();
      if (metadataList && Array.isArray(metadataList)) {
        for (const metaCtx of metadataList) {
          const action = this.processMetadata(metaCtx);
          if (action) {
            actions.push(action);
          }
        }
      }
    }

    // Console log the extracted actions
    if (actions.length > 0) {
      console.log(`[Trace Extractor] Extracted ${actions.length} action(s) from current statement.`);
    }

    return actions;
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
    // Extract metadata
    const metadataActions = this.extractMetadataActions(ctx);

    const name = ctx.ID().getText();
    let value;
    if (ctx.arrayInitialization()) {
      value = this.visit(ctx.arrayInitialization()!);
    } else {
      value = this.visit(ctx.expression()!);
    }
    this.memory.set(name, value);

    // Clear array access visualization when ANY numeric variable changes
    if (typeof value === 'number' && this.recentArrayAccesses.length > 0) {
      const unmarkActions: TraceAction[] = [];

      // Add metadata first
      unmarkActions.push(...metadataActions);

      // Unmark all recent array accesses (deduplicated)
      const accessedIndices = new Set(this.recentArrayAccesses.map(a => a.index));
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

    const actions: TraceAction[] = [...metadataActions, { cmd: 'var_add', params: { name, value } }];
    this.addStep(ctx.start!.line, actions);
  }

  // --- Arrays ---
  visitValueArray(ctx: ValueArrayContext): any[] {
    return ctx.INT().map((n) => parseInt(n.getText(), 10));
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
    // Extract metadata
    const metadataActions = this.extractMetadataActions(ctx);

    const funcName = ctx.ID().getText();
    this.functions.set(funcName, ctx);
    const start = ctx.start!.line;
    const end = ctx.stop?.line || start;

    const actions: TraceAction[] = [
      ...metadataActions,
      {
        cmd: 'var_add',
        params: { name: `${funcName}(...)`, value: '<function>' },
      },
    ];

    this.addStep([start, end], actions);
  }

  visitFunctionCallStmt(ctx: FunctionCallStmtContext): any {
    // Extract metadata
    const metadataActions = this.extractMetadataActions(ctx);
    if (metadataActions.length > 0) {
      this.addStep(ctx.start!.line, metadataActions);
    }

    const funcName = ctx.ID().getText();
    const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : [];

    // Execute any function generically
    return this.executeFunction(funcName, args, ctx.start!.line);
  }

  executeFunction(name: string, args: any[], callLine: number) {
    const funcCtx = this.functions.get(name);
    if (!funcCtx) return;

    const paramNames = funcCtx.paramList()?.ID().map((n) => n.getText()) || [];
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

    this.globalScope.forEach((_, key) =>
      initActions.push({ cmd: 'var_greyout', params: { name: key } }),
    );

    let entryLine = funcCtx.start!.line;
    const funcBlock = funcCtx.block();
    if (funcBlock && funcBlock.statement(0)) entryLine = funcBlock.statement(0)!.start!.line;
    this.addStep(entryLine, initActions);

    this.callStack.push(newScope);
    let retVal = null;

    const stmts = funcBlock?.statement();
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
    newScope.forEach((_, key) =>
      cleanup.push({ cmd: 'var_delete', params: { name: key } }),
    );
    this.globalScope.forEach((_, key) =>
      cleanup.push({ cmd: 'var_normal', params: { name: key } }),
    );
    if (retVal !== null)
      cleanup.push({ cmd: 'var_add', params: { name: 'result', value: retVal } });

    this.addStep(callLine, cleanup);
    this.callStack.pop();
    return retVal;
  }

  visitForEachLoop(ctx: ForEachLoopContext): any {
    // Extract metadata
    const metadataActions = this.extractMetadataActions(ctx);
    if (metadataActions.length > 0) {
      this.addStep(ctx.start!.line, metadataActions);
    }

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
        if (i > 0)
          actions.unshift({ cmd: 'vis_unmark', params: { index: i - 1, type: 'all' } });

        this.addStep(ctx.start!.line, actions);

        const stmts = ctx.block()?.statement();
        if (stmts) {
          for (const stmt of stmts) {
            const res = this.visit(stmt);

            // Check if a statement returned a value
            if (res !== undefined && res !== null) {
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

      // Only unmark last element if the entire loop completed without returning
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
    // Extract metadata
    const metadataActions = this.extractMetadataActions(ctx);
    if (metadataActions.length > 0) {
      this.addStep(ctx.start!.line, metadataActions);
    }

    let limit = 20; // Safety break
    while (this.visit(ctx.expression()) && limit-- > 0) {
      const stmts = ctx.block()?.statement();
      if (stmts) {
        for (const stmt of stmts) {
          const res = this.visit(stmt);
          if (res !== undefined && res !== null) {
            return res;
          }
        }
      }
    }
  }

  visitIfStatement(ctx: IfStatementContext): any {
    // Extract metadata
    const metadataActions = this.extractMetadataActions(ctx);
    
    const expressions = ctx.expression();
    const blocks = ctx.block();
    
    let matchedBlockIndex = -1;

    // Evaluate in order (IF, ELSE IF 1, ELSE IF 2...)
    for (let i = 0; i < expressions.length; i++) {
      const condition = this.visit(expressions[i]);

      // Visualize array access that happened during the comparison
      if (this.recentArrayAccesses.length > 0) {
        const visualizeActions: TraceAction[] = i === 0 ? [...metadataActions] : [];
        for (const access of this.recentArrayAccesses) {
          visualizeActions.push({
            cmd: 'vis_mark',
            params: { index: access.index, type: 'outline', color: 'yellow' },
          });
        }
        if (this.lastComparisonLeft !== null && this.lastComparisonRight !== null) {
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
      } else if (
        this.currentLoopIndex !== null &&
        this.lastComparisonLeft !== null &&
        this.lastComparisonRight !== null
      ) {
        // Fallback for for-each loops
        const actions: TraceAction[] = i === 0 ? [...metadataActions] : [];
        actions.push({
          cmd: 'vis_mark',
          params: {
            index: this.currentLoopIndex,
            type: 'text',
            color: 'fg',
            value: `${this.lastComparisonLeft} ${this.lastComparisonOp} ${this.lastComparisonRight}?`,
          },
        });
        this.addStep(ctx.start!.line, actions);
      } else if (i === 0 && metadataActions.length > 0) {
        this.addStep(ctx.start!.line, metadataActions);
      }

      // If true, stop evaluating and execute this block
      if (condition) {
        matchedBlockIndex = i;
        break;
      }
      
      // Clear comparison state if false, before we evaluate the next else-if
      this.lastComparisonLeft = null;
      this.lastComparisonRight = null;
      this.lastComparisonOp = '';
    }

    // Determine if we need to fall back to the ELSE block
    if (matchedBlockIndex === -1 && blocks.length > expressions.length) {
      matchedBlockIndex = blocks.length - 1; // The final block is the ELSE
    }

    // Execute the statements within the matched block
    if (matchedBlockIndex !== -1) {
      const stmts = blocks[matchedBlockIndex].statement();
      if (stmts) {
        for (const stmt of stmts) {
          if (stmt.returnStatement()) {
            const matchActions: TraceAction[] = [];
            let indexToMark: number | null = null;

            if (this.recentArrayAccesses.length > 0) {
              indexToMark = this.recentArrayAccesses[this.recentArrayAccesses.length - 1].index;
            } else if (this.currentLoopIndex !== null) {
              indexToMark = this.currentLoopIndex;
            }

            if (indexToMark !== null) {
              matchActions.push(
                { cmd: 'vis_mark', params: { index: indexToMark, type: 'outline', color: 'green' } },
                { cmd: 'vis_mark', params: { index: indexToMark, type: 'highlight', color: 'green' } },
              );

              if (this.lastComparisonLeft !== null && this.lastComparisonRight !== null) {
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

    // Clear state after execution finishes
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

    // Store comparison info for visualization
    this.lastComparisonLeft = left;
    this.lastComparisonRight = right;
    this.lastComparisonOp = ctx._op!.text!;

    switch (ctx._op!.text) {
      case '==':
        return left === right;
      case '<':
        return left < right;
      case '>':
        return left > right;
      case '<=':
        return left <= right;
      case '>=':
        return left >= right;
    }
    return false;
  }

  visitArrayAccessExpression(ctx: ArrayAccessExpressionContext): any {
    const arrayName = ctx.ID().getText();
    const index = Math.floor(this.visit(ctx.expression()));
    const arr = this.memory.get(arrayName);

    // Track this array access
    this.recentArrayAccesses.push({ index, arrayName });
    if (this.recentArrayAccesses.length > 5) {
      this.recentArrayAccesses.shift(); // Keep only last 5
    }

    if (Array.isArray(arr)) return arr[index];
    return null;
  }

  visitFunctionCallExpression(ctx: FunctionCallExpressionContext): any {
    const funcName = ctx.ID().getText();
    const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : [];

    // Built-in size
    if (funcName === 'size' && Array.isArray(args[0])) {
      return args[0].length;
    }

    // Built-in floor
    if (funcName === 'floor' && typeof args[0] === 'number') {
      return Math.floor(args[0]);
    }

    return this.executeFunction(funcName, args, ctx.start!.line);
  }

  visitAtomExpression(ctx: AtomExpressionContext): any {
    const text = ctx.getText();
    if (!isNaN(Number(text))) {
      return Number(text);
    }
    return this.memory.get(text);
  }

  visitExpressionList(ctx: ExpressionListContext): any[] {
    return ctx.expression().map((e) => this.visit(e));
  }

  visitReturnStatement(ctx: ReturnStatementContext): any {
    // Extract metadata
    const metadataActions = this.extractMetadataActions(ctx);
    if (metadataActions.length > 0) {
      this.addStep(ctx.start!.line, metadataActions);
    }

    return this.visit(ctx.expression());
  }
}
