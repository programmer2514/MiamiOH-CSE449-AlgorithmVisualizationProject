import PseudocodeVisitor from './generated/PseudocodeVisitor.js';
import type {
  AssignmentContext,
  EqExpressionContext,
  ForEachLoopContext,
  FunctionDeclContext,
  IfStatementContext,
  ProgramContext,
  ReturnStatementContext,
  AtomExpressionContext,
  RangeArrayContext,
  SizeArrayContext,
  ValueArrayContext
} from './generated/PseudocodeParser.js';

export default class TsInterpreterVisitor extends PseudocodeVisitor {
  private indentLevel = 0;

  // Creates an indentation string based on the current level.
  private indent(): string {
    return '  '.repeat(this.indentLevel);
  }

  // Manages indentation for a multi-line block of code.
  private visitBlock(ctx: any): string {
    this.indentLevel++;
    let blockContent = '';
    if (ctx.statement) {
      const statements = ctx.statement();
      // Handle both single statement and array of statements
      const stmtArray = Array.isArray(statements) ? statements : [statements];
      for (const statement of stmtArray) {
        blockContent += this.visit(statement);
      }
    }
    this.indentLevel--;
    return blockContent;
  }

  // Begins the translation for the entire pseudocode program.
  visitProgram(ctx: ProgramContext): string {
    let programCode = '';
    const statements = ctx.statement();
    const stmtArray = Array.isArray(statements) ? statements : [statements];
    for (const statement of stmtArray) {
      programCode += this.visit(statement);
    }
    return programCode;
  }

  // Translates a variable assignment (e.g., key = 4).
  visitAssignment(ctx: AssignmentContext): string {
    const varName = ctx.ID().getText();
    const value = this.visit(ctx.getChild(2)); // Visit the expression/array init
    return `${this.indent()}let ${varName} = ${value};\n`;
  }

  // Creates a JavaScript array from a range (e.g., arr[1 to 5]).
  visitRangeArray(ctx: RangeArrayContext): string {
    const from = parseInt(ctx.from.text, 10);
    const to = parseInt(ctx.to.text, 10);
    const values = [];
    for (let i = from; i <= to; i++) {
      values.push(i);
    }
    return `[${values.join(', ')}]`;
  }

  // Creates an empty JavaScript array of a specific size (e.g., arr(100)).
  visitSizeArray(ctx: SizeArrayContext): string {
    const size = ctx.size.text;
    return `new Array(${size})`;
  }

  // Creates a JavaScript array from a list of values (e.g., arr[1, 2, 3]).
  visitValueArray(ctx: ValueArrayContext): string {
    const intTokens = ctx.INT();
    const values = Array.isArray(intTokens) ? intTokens : [intTokens];
    return `[${values.map((i: any) => i.getText()).join(', ')}]`;
  }

  // Translates a function declaration.
  visitFunctionDecl(ctx: FunctionDeclContext): string {
    const funcName = ctx.ID().getText();
    const paramList = ctx.paramList();
    let params = '';
    if (paramList) {
      const paramIds = paramList.ID();
      const paramArray = Array.isArray(paramIds) ? paramIds : [paramIds];
      params = paramArray.map((p: any) => p.getText()).join(', ');
    }
    const body = this.visitBlock(ctx);
    return `${this.indent()}function ${funcName}(${params}) {\n${body}${this.indent()}}\n`;
  }

  // Translates a 'for each' loop.
  visitForEachLoop(ctx: ForEachLoopContext): string {
    const ids = ctx.ID();
    const varName = Array.isArray(ids) ? ids[0].getText() : ids.getText();
    const arrayName = Array.isArray(ids) ? ids[1].getText() : ids.getText();
    const body = this.visitBlock(ctx);
    return `${this.indent()}for (const ${varName} of ${arrayName}) {\n${body}${this.indent()}}\n`;
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

  // Translates an equality comparison (== to ===).
  visitEqExpression(ctx: EqExpressionContext): string {
    return `${this.visit(ctx.left)} === ${this.visit(ctx.right)}`;
  }
  
  // Returns the raw text of a basic value like a variable or number.
  visitAtomExpression(ctx: AtomExpressionContext): string {
    return ctx.atom().getText();
  }
}