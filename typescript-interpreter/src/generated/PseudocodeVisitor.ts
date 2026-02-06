// Generated from Pseudocode.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParenExpressionContext } from "./PseudocodeParser";
import { FunctionCallExpressionContext } from "./PseudocodeParser";
import { ArrayAccessExpressionContext } from "./PseudocodeParser";
import { AtomExpressionContext } from "./PseudocodeParser";
import { AddExprContext } from "./PseudocodeParser";
import { AdditivePassContext } from "./PseudocodeParser";
import { CompareExprContext } from "./PseudocodeParser";
import { ComparisonPassContext } from "./PseudocodeParser";
import { MulExprContext } from "./PseudocodeParser";
import { MultiplicativePassContext } from "./PseudocodeParser";
import { RangeArrayContext } from "./PseudocodeParser";
import { SizeArrayContext } from "./PseudocodeParser";
import { ValueArrayContext } from "./PseudocodeParser";
import { UnaryMinusExprContext } from "./PseudocodeParser";
import { UnaryPassContext } from "./PseudocodeParser";
import { ProgramContext } from "./PseudocodeParser";
import { StatementContext } from "./PseudocodeParser";
import { AssignmentContext } from "./PseudocodeParser";
import { ArrayInitializationContext } from "./PseudocodeParser";
import { FunctionDeclContext } from "./PseudocodeParser";
import { ParamListContext } from "./PseudocodeParser";
import { ForEachLoopContext } from "./PseudocodeParser";
import { IfStatementContext } from "./PseudocodeParser";
import { WhileLoopContext } from "./PseudocodeParser";
import { FunctionCallStmtContext } from "./PseudocodeParser";
import { ReturnStatementContext } from "./PseudocodeParser";
import { ExpressionContext } from "./PseudocodeParser";
import { ComparisonExpressionContext } from "./PseudocodeParser";
import { AdditiveExpressionContext } from "./PseudocodeParser";
import { MultiplicativeExpressionContext } from "./PseudocodeParser";
import { UnaryExpressionContext } from "./PseudocodeParser";
import { PrimaryExpressionContext } from "./PseudocodeParser";
import { ExpressionListContext } from "./PseudocodeParser";
import { AtomContext } from "./PseudocodeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PseudocodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PseudocodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ParenExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpression?: (ctx: ParenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionCallExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayAccessExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccessExpression?: (ctx: ArrayAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AtomExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpression?: (ctx: AtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddExpr`
	 * labeled alternative in `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpr?: (ctx: AddExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditivePass`
	 * labeled alternative in `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditivePass?: (ctx: AdditivePassContext) => Result;

	/**
	 * Visit a parse tree produced by the `CompareExpr`
	 * labeled alternative in `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareExpr?: (ctx: CompareExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComparisonPass`
	 * labeled alternative in `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonPass?: (ctx: ComparisonPassContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulExpr`
	 * labeled alternative in `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulExpr?: (ctx: MulExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativePass`
	 * labeled alternative in `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativePass?: (ctx: MultiplicativePassContext) => Result;

	/**
	 * Visit a parse tree produced by the `RangeArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeArray?: (ctx: RangeArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `SizeArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeArray?: (ctx: SizeArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `ValueArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueArray?: (ctx: ValueArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinusExpr`
	 * labeled alternative in `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPass`
	 * labeled alternative in `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPass?: (ctx: UnaryPassContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitialization?: (ctx: ArrayInitializationContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.forEachLoop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForEachLoop?: (ctx: ForEachLoopContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.whileLoop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileLoop?: (ctx: WhileLoopContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.functionCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallStmt?: (ctx: FunctionCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `PseudocodeParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
}

