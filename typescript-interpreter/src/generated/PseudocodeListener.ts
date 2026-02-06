// Generated from Pseudocode.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PseudocodeParser`.
 */
export interface PseudocodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ParenExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenExpression?: (ctx: ParenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenExpression?: (ctx: ParenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionCallExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionCallExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayAccessExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayAccessExpression?: (ctx: ArrayAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayAccessExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayAccessExpression?: (ctx: ArrayAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AtomExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterAtomExpression?: (ctx: AtomExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AtomExpression`
	 * labeled alternative in `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitAtomExpression?: (ctx: AtomExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AddExpr`
	 * labeled alternative in `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AddExpr`
	 * labeled alternative in `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditivePass`
	 * labeled alternative in `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditivePass?: (ctx: AdditivePassContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditivePass`
	 * labeled alternative in `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditivePass?: (ctx: AdditivePassContext) => void;

	/**
	 * Enter a parse tree produced by the `CompareExpr`
	 * labeled alternative in `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterCompareExpr?: (ctx: CompareExprContext) => void;
	/**
	 * Exit a parse tree produced by the `CompareExpr`
	 * labeled alternative in `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitCompareExpr?: (ctx: CompareExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ComparisonPass`
	 * labeled alternative in `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterComparisonPass?: (ctx: ComparisonPassContext) => void;
	/**
	 * Exit a parse tree produced by the `ComparisonPass`
	 * labeled alternative in `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitComparisonPass?: (ctx: ComparisonPassContext) => void;

	/**
	 * Enter a parse tree produced by the `MulExpr`
	 * labeled alternative in `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MulExpr`
	 * labeled alternative in `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMulExpr?: (ctx: MulExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativePass`
	 * labeled alternative in `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativePass?: (ctx: MultiplicativePassContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativePass`
	 * labeled alternative in `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativePass?: (ctx: MultiplicativePassContext) => void;

	/**
	 * Enter a parse tree produced by the `RangeArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	enterRangeArray?: (ctx: RangeArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `RangeArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	exitRangeArray?: (ctx: RangeArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `SizeArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	enterSizeArray?: (ctx: SizeArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `SizeArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	exitSizeArray?: (ctx: SizeArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `ValueArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	enterValueArray?: (ctx: ValueArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `ValueArray`
	 * labeled alternative in `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	exitValueArray?: (ctx: ValueArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpr`
	 * labeled alternative in `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpr`
	 * labeled alternative in `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPass`
	 * labeled alternative in `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPass?: (ctx: UnaryPassContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPass`
	 * labeled alternative in `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPass?: (ctx: UnaryPassContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	enterArrayInitialization?: (ctx: ArrayInitializationContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.arrayInitialization`.
	 * @param ctx the parse tree
	 */
	exitArrayInitialization?: (ctx: ArrayInitializationContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.forEachLoop`.
	 * @param ctx the parse tree
	 */
	enterForEachLoop?: (ctx: ForEachLoopContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.forEachLoop`.
	 * @param ctx the parse tree
	 */
	exitForEachLoop?: (ctx: ForEachLoopContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.whileLoop`.
	 * @param ctx the parse tree
	 */
	enterWhileLoop?: (ctx: WhileLoopContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.whileLoop`.
	 * @param ctx the parse tree
	 */
	exitWhileLoop?: (ctx: WhileLoopContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.functionCallStmt`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallStmt?: (ctx: FunctionCallStmtContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.functionCallStmt`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallStmt?: (ctx: FunctionCallStmtContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `PseudocodeParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `PseudocodeParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}

