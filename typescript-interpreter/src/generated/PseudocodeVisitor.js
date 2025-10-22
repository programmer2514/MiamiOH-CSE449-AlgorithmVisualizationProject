// Generated from Pseudocode.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PseudocodeParser.

export default class PseudocodeVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PseudocodeParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#statement.
	visitStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#assignment.
	visitAssignment(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#RangeArray.
	visitRangeArray(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#SizeArray.
	visitSizeArray(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#ValueArray.
	visitValueArray(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#functionDecl.
	visitFunctionDecl(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#paramList.
	visitParamList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#forEachLoop.
	visitForEachLoop(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#ifStatement.
	visitIfStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#returnStatement.
	visitReturnStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#EqExpression.
	visitEqExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#AtomExpression.
	visitAtomExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PseudocodeParser#atom.
	visitAtom(ctx) {
	  return this.visitChildren(ctx);
	}



}