// Manually maintained, may need to be rewritten to work with auto-generated files.
import antlr4 from 'antlr4';
import {
  ProgramContext,
  StatementContext,
  AssignmentContext,
  RangeArrayContext,
  SizeArrayContext,
  ValueArrayContext,
  FunctionDeclContext,
  ParamListContext,
  ForEachLoopContext,
  IfStatementContext,
  ReturnStatementContext,
  EqExpressionContext,
  AtomExpressionContext,
  AtomContext
} from './PseudocodeParser';

export default class PseudocodeVisitor extends antlr4.tree.ParseTreeVisitor {
  visit(ctx: any): any;
  visitChildren(ctx: any): any;
  visitProgram(ctx: ProgramContext): any;
  visitStatement(ctx: StatementContext): any;
  visitAssignment(ctx: AssignmentContext): any;
  visitRangeArray(ctx: RangeArrayContext): any;
  visitSizeArray(ctx: SizeArrayContext): any;
  visitValueArray(ctx: ValueArrayContext): any;
  visitFunctionDecl(ctx: FunctionDeclContext): any;
  visitParamList(ctx: ParamListContext): any;
  visitForEachLoop(ctx: ForEachLoopContext): any;
  visitIfStatement(ctx: IfStatementContext): any;
  visitReturnStatement(ctx: ReturnStatementContext): any;
  visitEqExpression(ctx: EqExpressionContext): any;
  visitAtomExpression(ctx: AtomExpressionContext): any;
  visitAtom(ctx: AtomContext): any;
}