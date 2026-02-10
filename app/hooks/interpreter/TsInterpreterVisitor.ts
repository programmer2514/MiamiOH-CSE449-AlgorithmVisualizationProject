import { AbstractParseTreeVisitor } from 'antlr4ng';
import { PseudocodeVisitor } from './generated/PseudocodeVisitor';
import type {
  AssignmentContext,
  ForEachLoopContext,
  FunctionDeclContext,
  IfStatementContext,
  ProgramContext,
  ReturnStatementContext,
  AtomExpressionContext,
  RangeArrayContext,
  SizeArrayContext,
  ValueArrayContext,
  WhileLoopContext,
  CompareExprContext,
  ComparisonPassContext,
  AddExprContext,
  AdditivePassContext,
  MulExprContext,
  MultiplicativePassContext,
  UnaryMinusExprContext,
  UnaryPassContext,
  ParenExpressionContext,
  FunctionCallExpressionContext,
  ArrayAccessExpressionContext,
  ExpressionListContext,
  StatementContext,
  FunctionCallStmtContext,
} from './generated/PseudocodeParser';

// Extend a base class and implement the generated visitor interface.
// specify string as the return type.
export default class TsInterpreterVisitor
  extends AbstractParseTreeVisitor<string>
  implements PseudocodeVisitor<string> {
  private indentLevel = 0;

  // The base class requires a default result.
  protected defaultResult(): string {
    return ''; // Return an empty string by default
  }

  // Creates an indentation string based on the current level.
  private indent(): string {
    return '  '.repeat(this.indentLevel);
  }

  // Manages indentation for a multi-line block of code.
  private visitBlock(ctx: { statement: () => StatementContext[] }): string {
    this.indentLevel++;
    let blockContent = '';
    if (ctx.statement) {
      const statements = ctx.statement();
      if (statements) {
        blockContent = statements.map(stmt => this.visit(stmt)).join('');
      }
    }
    this.indentLevel--;
    return blockContent;
  }

  // Begins the translation for the entire pseudocode program.
  visitProgram(ctx: ProgramContext): string {
    let programCode = '';
    const statements = ctx.statement();
    if (statements) {
      programCode = statements.map(stmt => this.visit(stmt)).join('');
    }
    return programCode;
  }

  // Translates a variable assignment (e.g., key = 4).
  visitAssignment(ctx: AssignmentContext): string {
    const varName = ctx.ID().getText();
    // Visit the expression or array init directly
    const value = ctx.expression() ?
      this.visit(ctx.expression()!) :
      this.visit(ctx.arrayInitialization()!);
    return `${this.indent()}let ${varName} = ${value};\n`;
  }

  // Creates a JavaScript array from a range (e.g., arr[1 to 5]).
  visitRangeArray(ctx: RangeArrayContext): string {
    const from = parseInt(ctx._from_!.text!, 10);
    const to = parseInt(ctx._to!.text!, 10);
    const values = [];
    for (let i = from; i <= to; i++) {
      values.push(i);
    }
    return `[${values.join(', ')}]`;
  }

  // Creates an empty JavaScript array of a specific size (e.g., arr(100)).
  visitSizeArray(ctx: SizeArrayContext): string {
    const size = ctx._size!.text;
    return `new Array(${size})`;
  }

  // Creates a JavaScript array from a list of values (e.g., arr[1, 2, 3]).
  visitValueArray(ctx: ValueArrayContext): string {
    const values = ctx.INT();
    return `[${values.map((i: any) => i.text).join(', ')}]`;
  }

  // Translates a function declaration.
  visitFunctionDecl(ctx: FunctionDeclContext): string {
    const funcName = ctx.ID().getText();
    const paramList = ctx.paramList();
    let params = '';
    if (paramList) {
      const paramIds = paramList.ID();
      if (paramIds) {
        params = paramIds.map((p: any) => p.text).join(', ');
      }
    }
    const body = this.visitBlock(ctx);
    return `${this.indent()}function ${funcName}(${params}) {\n${body}${this.indent()}}\n`;
  }

  // Translates a 'for each' loop.
  visitForEachLoop(ctx: ForEachLoopContext): string {
    const varName = ctx.ID(0)!.getText();
    const arrayName = ctx.ID(1)!.getText();
    const body = this.visitBlock(ctx);
    return `${this.indent()}for (const ${varName} of ${arrayName}) {\n${body}${this.indent()}}\n`;
  }

  // Translates a 'while' loop.
  visitWhileLoop(ctx: WhileLoopContext): string {
    const condition = this.visit(ctx.expression());
    const body = this.visitBlock(ctx);
    return `${this.indent()}while (${condition}) {\n${body}${this.indent()}}\n`;
  }

  // Translates an 'if' statement.
  visitIfStatement(ctx: IfStatementContext): string {
    const condition = this.visit(ctx.expression());
    const body = this.visitBlock(ctx);
    return `${this.indent()}if (${condition}) {\n${body}${this.indent()}}\n`;
  }

  // Translates a 'return' statement.
  visitReturnStatement(ctx: ReturnStatementContext): string {
    return `${this.indent()}return ${this.visit(ctx.expression())};\n`;
  }

  // Returns the raw text of a basic value like a variable or number.
  visitAtomExpression(ctx: AtomExpressionContext): string {
    return ctx.atom().getText();
  }

  // Handles: left > right, left == right, etc.
  visitCompareExpr(ctx: CompareExprContext): string {
    const left = this.visit(ctx.getChild(0)!);
    const right = this.visit(ctx.getChild(1)!);
    const op = ctx._op!.text!;
    // Translate pseudocode == to JavaScript ===
    const jsOp = op === '==' ? '===' : op;
    return `${left} ${jsOp} ${right}`;
  }

  // Handles: left + right or left - right
  visitAddExpr(ctx: AddExprContext): string {
    const left = this.visit(ctx.getChild(0)!); // Use _left
    const right = this.visit(ctx.getChild(1)!); // Use _right
    const op = ctx._op!.text!; // '+' or '-'
    return `${left} ${op} ${right}`;
  }

  // Handles: left * right or left / right
  visitMulExpr(ctx: MulExprContext): string {
    const left = this.visit(ctx.getChild(0)!); // Use _left
    const right = this.visit(ctx.getChild(1)!); // Use _right
    const op = ctx._op!.text!; // '*' or '/'
    return `${left} ${op} ${right}`;
  }

  // Handles: (expression)
  visitParenExpression(ctx: ParenExpressionContext): string {
    return `(${this.visit(ctx.expression())})`;
  }

  // Handles: -value
  visitUnaryMinusExpr(ctx: UnaryMinusExprContext): string {
    return `-${this.visit(ctx.unaryExpression())}`;
  }

  // Handles: function(arg1, arg2)
  visitFunctionCallExpression(ctx: FunctionCallExpressionContext): string {
    const funcName = ctx.ID().getText();
    let args = '';
    const list = ctx.expressionList();
    if (list) {
      args = this.visit(list)!;
    }

    // 1. Transform size(arr) -> arr.length
    if (funcName === 'size') {
      return `${args}.length`;
    }

    // 2. Transform floor(x) -> Math.floor(x)
    if (funcName === 'floor') {
      return `Math.floor(${args})`;
    }

    // 3. Normal function call -> name(args)
    return `${funcName}(${args})`;
  }

  // Handles arguments in a function call
  visitExpressionList(ctx: ExpressionListContext): string {
    const expressions = ctx.expression();
    if (expressions) {
      return expressions.map(expr => this.visit(expr)).join(', ');
    }
    return '';
  }

  // Handles array[index]
  visitArrayAccessExpression(ctx: ArrayAccessExpressionContext): string {
    const arrayName = ctx.ID().getText();
    const index = this.visit(ctx.expression());
    return `${arrayName}[${index}]`;
  }

  // handles inline function calls.
  visitFunctionCallStmt(ctx: FunctionCallStmtContext): string {
    const funcName = ctx.ID().getText();
    const args = ctx.expressionList() ? this.visit(ctx.expressionList()!) : '';
    return `${this.indent()}${funcName}(${args});\n`;
  }

  // passthrough methods.

  visitComparisonPass(ctx: ComparisonPassContext): string {
    return this.visit(ctx.additiveExpression())!;
  }

  visitAdditivePass(ctx: AdditivePassContext): string {
    return this.visit(ctx.multiplicativeExpression())!;
  }

  visitMultiplicativePass(ctx: MultiplicativePassContext): string {
    return this.visit(ctx.unaryExpression())!;
  }

  visitUnaryPass(ctx: UnaryPassContext): string {
    return this.visit(ctx.primaryExpression())!;
  }
}
