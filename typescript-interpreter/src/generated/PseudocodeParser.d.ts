// Manually maintained, may need to be rewritten to work with auto-generated files.
import antlr4 from 'antlr4';

export class ProgramContext extends antlr4.ParserRuleContext {
  statement(i?: number): StatementContext | StatementContext[];
  EOF(): any;
  NL(i?: number): any;
}

export class StatementContext extends antlr4.ParserRuleContext {
  assignment(): AssignmentContext;
  functionDecl(): FunctionDeclContext;
  forEachLoop(): ForEachLoopContext;
  ifStatement(): IfStatementContext;
  returnStatement(): ReturnStatementContext;
}

export class AssignmentContext extends antlr4.ParserRuleContext {
  ID(): any;
  EQ(): any;
  expression(): ExpressionContext;
  arrayInitialization(): ArrayInitializationContext;
  getChild(i: number): any;
}

export class ArrayInitializationContext extends antlr4.ParserRuleContext {}

export class RangeArrayContext extends ArrayInitializationContext {
  from: any;
  to: any;
  ARR(): any;
  LBRACK(): any;
  TO(): any;
  RBRACK(): any;
  INT(i?: number): any;
}

export class SizeArrayContext extends ArrayInitializationContext {
  size: any;
  ARR(): any;
  LPAREN(): any;
  RPAREN(): any;
  INT(): any;
}

export class ValueArrayContext extends ArrayInitializationContext {
  ARR(): any;
  LBRACK(): any;
  INT(i?: number): any;
  RBRACK(): any;
  COMMA(i?: number): any;
}

export class FunctionDeclContext extends antlr4.ParserRuleContext {
  FUN(i?: number): any;
  ID(): any;
  LPAREN(): any;
  RPAREN(): any;
  COLON(): any;
  END(): any;
  paramList(): ParamListContext;
  NL(i?: number): any;
  statement(i?: number): StatementContext | StatementContext[];
}

export class ParamListContext extends antlr4.ParserRuleContext {
  ID(i?: number): any;
  COMMA(i?: number): any;
}

export class ForEachLoopContext extends antlr4.ParserRuleContext {
  FOR(i?: number): any;
  ID(i?: number): any;
  IN(): any;
  COLON(): any;
  END(): any;
  NL(i?: number): any;
  statement(i?: number): StatementContext | StatementContext[];
}

export class IfStatementContext extends antlr4.ParserRuleContext {
  IF(i?: number): any;
  expression(): ExpressionContext;
  COLON(): any;
  END(): any;
  NL(i?: number): any;
  statement(i?: number): StatementContext | StatementContext[];
}

export class ReturnStatementContext extends antlr4.ParserRuleContext {
  RETURN(): any;
  expression(): ExpressionContext;
}

export class ExpressionContext extends antlr4.ParserRuleContext {}

export class EqExpressionContext extends ExpressionContext {
  left: ExpressionContext;
  op: any;
  right: ExpressionContext;
  expression(i?: number): ExpressionContext | ExpressionContext[];
  EQEQ(): any;
}

export class AtomExpressionContext extends ExpressionContext {
  atom(): AtomContext;
}

export class AtomContext extends antlr4.ParserRuleContext {
  ID(): any;
  INT(): any;
  NEG_INT(): any;
  getText(): string;  // Add this method
}

export default class PseudocodeParser extends antlr4.Parser {
  constructor(input: any);
  program(): ProgramContext;
  statement(): StatementContext;
  assignment(): AssignmentContext;
  arrayInitialization(): ArrayInitializationContext;
  functionDecl(): FunctionDeclContext;
  paramList(): ParamListContext;
  forEachLoop(): ForEachLoopContext;
  ifStatement(): IfStatementContext;
  returnStatement(): ReturnStatementContext;
  expression(precedence?: number): ExpressionContext;
  atom(): AtomContext;
}