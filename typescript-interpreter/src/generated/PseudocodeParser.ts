// Generated from Pseudocode.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PseudocodeListener } from "./PseudocodeListener";
import { PseudocodeVisitor } from "./PseudocodeVisitor";


export class PseudocodeParser extends Parser {
	public static readonly TYPE_INT = 1;
	public static readonly TYPE_FLOAT = 2;
	public static readonly TYPE_STRING = 3;
	public static readonly TYPE_BOOL = 4;
	public static readonly TYPE_DOUBLE = 5;
	public static readonly ARR = 6;
	public static readonly TO = 7;
	public static readonly LBRACK = 8;
	public static readonly RBRACK = 9;
	public static readonly FUN = 10;
	public static readonly FOR = 11;
	public static readonly IN = 12;
	public static readonly IF = 13;
	public static readonly RETURN = 14;
	public static readonly END = 15;
	public static readonly WHILE = 16;
	public static readonly AND = 17;
	public static readonly OR = 18;
	public static readonly ID = 19;
	public static readonly INT = 20;
	public static readonly EQ = 21;
	public static readonly EQEQ = 22;
	public static readonly LPAREN = 23;
	public static readonly RPAREN = 24;
	public static readonly COLON = 25;
	public static readonly COMMA = 26;
	public static readonly PLUS = 27;
	public static readonly MINUS = 28;
	public static readonly STAR = 29;
	public static readonly SLASH = 30;
	public static readonly LOW_THAN = 31;
	public static readonly GREATER_THAN = 32;
	public static readonly LESS_EQ = 33;
	public static readonly GREATER_EQ = 34;
	public static readonly NL = 35;
	public static readonly WS = 36;
	public static readonly COMMENT = 37;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_assignment = 2;
	public static readonly RULE_arrayInitialization = 3;
	public static readonly RULE_functionDecl = 4;
	public static readonly RULE_paramList = 5;
	public static readonly RULE_forEachLoop = 6;
	public static readonly RULE_ifStatement = 7;
	public static readonly RULE_whileLoop = 8;
	public static readonly RULE_functionCallStmt = 9;
	public static readonly RULE_returnStatement = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_comparisonExpression = 12;
	public static readonly RULE_additiveExpression = 13;
	public static readonly RULE_multiplicativeExpression = 14;
	public static readonly RULE_unaryExpression = 15;
	public static readonly RULE_primaryExpression = 16;
	public static readonly RULE_expressionList = 17;
	public static readonly RULE_atom = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "assignment", "arrayInitialization", "functionDecl", 
		"paramList", "forEachLoop", "ifStatement", "whileLoop", "functionCallStmt", 
		"returnStatement", "expression", "comparisonExpression", "additiveExpression", 
		"multiplicativeExpression", "unaryExpression", "primaryExpression", "expressionList", 
		"atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'arr'", 
		"'to'", "'['", "']'", "'fun'", "'for'", "'in'", "'if'", "'return'", "'end'", 
		"'while'", "'and'", "'or'", undefined, undefined, "'='", "'=='", "'('", 
		"')'", "':'", "','", "'+'", "'-'", "'*'", "'/'", "'<'", "'>'", "'<='", 
		"'>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TYPE_INT", "TYPE_FLOAT", "TYPE_STRING", "TYPE_BOOL", "TYPE_DOUBLE", 
		"ARR", "TO", "LBRACK", "RBRACK", "FUN", "FOR", "IN", "IF", "RETURN", "END", 
		"WHILE", "AND", "OR", "ID", "INT", "EQ", "EQEQ", "LPAREN", "RPAREN", "COLON", 
		"COMMA", "PLUS", "MINUS", "STAR", "SLASH", "LOW_THAN", "GREATER_THAN", 
		"LESS_EQ", "GREATER_EQ", "NL", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PseudocodeParser._LITERAL_NAMES, PseudocodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PseudocodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Pseudocode.g4"; }

	// @Override
	public get ruleNames(): string[] { return PseudocodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PseudocodeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PseudocodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PseudocodeParser.RULE_program);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 38;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this.statement();
			this.state = 53;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 46;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 45;
						this.match(PseudocodeParser.NL);
						}
						}
						this.state = 48;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === PseudocodeParser.NL);
					this.state = 50;
					this.statement();
					}
					}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 56;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(PseudocodeParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PseudocodeParser.RULE_statement);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.functionDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 66;
				this.functionCallStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 67;
				this.forEachLoop();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 68;
				this.ifStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 69;
				this.whileLoop();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 70;
				this.returnStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PseudocodeParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(PseudocodeParser.ID);
			this.state = 74;
			this.match(PseudocodeParser.EQ);
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PseudocodeParser.ID:
			case PseudocodeParser.INT:
			case PseudocodeParser.LPAREN:
			case PseudocodeParser.MINUS:
				{
				this.state = 75;
				this.expression();
				}
				break;
			case PseudocodeParser.ARR:
				{
				this.state = 76;
				this.arrayInitialization();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitialization(): ArrayInitializationContext {
		let _localctx: ArrayInitializationContext = new ArrayInitializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PseudocodeParser.RULE_arrayInitialization);
		let _la: number;
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new RangeArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.match(PseudocodeParser.ARR);
				this.state = 80;
				this.match(PseudocodeParser.LBRACK);
				this.state = 81;
				(_localctx as RangeArrayContext)._from = this.match(PseudocodeParser.INT);
				this.state = 82;
				this.match(PseudocodeParser.TO);
				this.state = 83;
				(_localctx as RangeArrayContext)._to = this.match(PseudocodeParser.INT);
				this.state = 84;
				this.match(PseudocodeParser.RBRACK);
				}
				break;

			case 2:
				_localctx = new SizeArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 85;
				this.match(PseudocodeParser.ARR);
				this.state = 86;
				this.match(PseudocodeParser.LPAREN);
				this.state = 87;
				(_localctx as SizeArrayContext)._size = this.match(PseudocodeParser.INT);
				this.state = 88;
				this.match(PseudocodeParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new ValueArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 89;
				this.match(PseudocodeParser.ARR);
				this.state = 90;
				this.match(PseudocodeParser.LBRACK);
				this.state = 91;
				this.match(PseudocodeParser.INT);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PseudocodeParser.COMMA) {
					{
					{
					this.state = 92;
					this.match(PseudocodeParser.COMMA);
					this.state = 93;
					this.match(PseudocodeParser.INT);
					}
					}
					this.state = 98;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 99;
				this.match(PseudocodeParser.RBRACK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PseudocodeParser.RULE_functionDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(PseudocodeParser.FUN);
			this.state = 103;
			this.match(PseudocodeParser.ID);
			this.state = 104;
			this.match(PseudocodeParser.LPAREN);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PseudocodeParser.ID) {
				{
				this.state = 105;
				this.paramList();
				}
			}

			this.state = 108;
			this.match(PseudocodeParser.RPAREN);
			this.state = 109;
			this.match(PseudocodeParser.COLON);
			this.state = 111;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 110;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 113;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 115;
				this.statement();
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 117;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 116;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 119;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 121;
						this.statement();
						}
						}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				}
				}
			}

			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 129;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this.match(PseudocodeParser.END);
			this.state = 136;
			this.match(PseudocodeParser.FUN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PseudocodeParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(PseudocodeParser.ID);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.COMMA) {
				{
				{
				this.state = 139;
				this.match(PseudocodeParser.COMMA);
				this.state = 140;
				this.match(PseudocodeParser.ID);
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forEachLoop(): ForEachLoopContext {
		let _localctx: ForEachLoopContext = new ForEachLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PseudocodeParser.RULE_forEachLoop);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(PseudocodeParser.FOR);
			this.state = 147;
			this.match(PseudocodeParser.ID);
			this.state = 148;
			this.match(PseudocodeParser.IN);
			this.state = 149;
			this.match(PseudocodeParser.ID);
			this.state = 150;
			this.match(PseudocodeParser.COLON);
			this.state = 152;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 151;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 154;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 156;
				this.statement();
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 158;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 157;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 160;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 162;
						this.statement();
						}
						}
					}
					this.state = 167;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				}
			}

			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 170;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 176;
			this.match(PseudocodeParser.END);
			this.state = 177;
			this.match(PseudocodeParser.FOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PseudocodeParser.RULE_ifStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(PseudocodeParser.IF);
			this.state = 180;
			this.expression();
			this.state = 181;
			this.match(PseudocodeParser.COLON);
			this.state = 183;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 182;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 187;
				this.statement();
				this.state = 196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 189;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 188;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 191;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 193;
						this.statement();
						}
						}
					}
					this.state = 198;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				}
			}

			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 201;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this.match(PseudocodeParser.END);
			this.state = 208;
			this.match(PseudocodeParser.IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileLoop(): WhileLoopContext {
		let _localctx: WhileLoopContext = new WhileLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PseudocodeParser.RULE_whileLoop);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(PseudocodeParser.WHILE);
			this.state = 211;
			this.expression();
			this.state = 212;
			this.match(PseudocodeParser.COLON);
			this.state = 214;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 213;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 218;
				this.statement();
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 220;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 219;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 222;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 224;
						this.statement();
						}
						}
					}
					this.state = 229;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 232;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 238;
			this.match(PseudocodeParser.END);
			this.state = 239;
			this.match(PseudocodeParser.WHILE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCallStmt(): FunctionCallStmtContext {
		let _localctx: FunctionCallStmtContext = new FunctionCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PseudocodeParser.RULE_functionCallStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(PseudocodeParser.ID);
			this.state = 242;
			this.match(PseudocodeParser.LPAREN);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.ID) | (1 << PseudocodeParser.INT) | (1 << PseudocodeParser.LPAREN) | (1 << PseudocodeParser.MINUS))) !== 0)) {
				{
				this.state = 243;
				this.expressionList();
				}
			}

			this.state = 246;
			this.match(PseudocodeParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PseudocodeParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(PseudocodeParser.RETURN);
			this.state = 249;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PseudocodeParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.comparisonExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonExpression(): ComparisonExpressionContext {
		let _localctx: ComparisonExpressionContext = new ComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PseudocodeParser.RULE_comparisonExpression);
		let _la: number;
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				_localctx = new CompareExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				(_localctx as CompareExprContext)._left = this.additiveExpression();
				this.state = 254;
				(_localctx as CompareExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (PseudocodeParser.EQEQ - 22)) | (1 << (PseudocodeParser.LOW_THAN - 22)) | (1 << (PseudocodeParser.GREATER_THAN - 22)) | (1 << (PseudocodeParser.LESS_EQ - 22)) | (1 << (PseudocodeParser.GREATER_EQ - 22)))) !== 0))) {
					(_localctx as CompareExprContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 255;
				(_localctx as CompareExprContext)._right = this.additiveExpression();
				}
				break;

			case 2:
				_localctx = new ComparisonPassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.additiveExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PseudocodeParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				_localctx = new AddExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				(_localctx as AddExprContext)._left = this.multiplicativeExpression();
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 261;
					(_localctx as AddExprContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === PseudocodeParser.PLUS || _la === PseudocodeParser.MINUS)) {
						(_localctx as AddExprContext)._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 262;
					(_localctx as AddExprContext)._right = this.multiplicativeExpression();
					}
					}
					this.state = 265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === PseudocodeParser.PLUS || _la === PseudocodeParser.MINUS);
				}
				break;

			case 2:
				_localctx = new AdditivePassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
				this.multiplicativeExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PseudocodeParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				_localctx = new MulExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				(_localctx as MulExprContext)._left = this.unaryExpression();
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 271;
					(_localctx as MulExprContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === PseudocodeParser.STAR || _la === PseudocodeParser.SLASH)) {
						(_localctx as MulExprContext)._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 272;
					(_localctx as MulExprContext)._right = this.unaryExpression();
					}
					}
					this.state = 275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === PseudocodeParser.STAR || _la === PseudocodeParser.SLASH);
				}
				break;

			case 2:
				_localctx = new MultiplicativePassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.unaryExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PseudocodeParser.RULE_unaryExpression);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PseudocodeParser.MINUS:
				_localctx = new UnaryMinusExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 280;
				this.match(PseudocodeParser.MINUS);
				this.state = 281;
				this.unaryExpression();
				}
				break;
			case PseudocodeParser.ID:
			case PseudocodeParser.INT:
			case PseudocodeParser.LPAREN:
				_localctx = new UnaryPassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.primaryExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PseudocodeParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new ParenExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 285;
				this.match(PseudocodeParser.LPAREN);
				this.state = 286;
				this.expression();
				this.state = 287;
				this.match(PseudocodeParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new FunctionCallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				this.match(PseudocodeParser.ID);
				this.state = 290;
				this.match(PseudocodeParser.LPAREN);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.ID) | (1 << PseudocodeParser.INT) | (1 << PseudocodeParser.LPAREN) | (1 << PseudocodeParser.MINUS))) !== 0)) {
					{
					this.state = 291;
					this.expressionList();
					}
				}

				this.state = 294;
				this.match(PseudocodeParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new ArrayAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 295;
				this.match(PseudocodeParser.ID);
				this.state = 296;
				this.match(PseudocodeParser.LBRACK);
				this.state = 297;
				this.expression();
				this.state = 298;
				this.match(PseudocodeParser.RBRACK);
				}
				break;

			case 4:
				_localctx = new AtomExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 300;
				this.atom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PseudocodeParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.expression();
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.COMMA) {
				{
				{
				this.state = 304;
				this.match(PseudocodeParser.COMMA);
				this.state = 305;
				this.expression();
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PseudocodeParser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			_la = this._input.LA(1);
			if (!(_la === PseudocodeParser.ID || _la === PseudocodeParser.INT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\u013C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02\x03" +
		"\x02\x03\x02\x06\x021\n\x02\r\x02\x0E\x022\x03\x02\x07\x026\n\x02\f\x02" +
		"\x0E\x029\v\x02\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03J" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04P\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05a\n\x05\f\x05\x0E\x05d\v\x05\x03" +
		"\x05\x05\x05g\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06m\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x06\x06r\n\x06\r\x06\x0E\x06s\x03\x06\x03\x06\x06" +
		"\x06x\n\x06\r\x06\x0E\x06y\x03\x06\x07\x06}\n\x06\f\x06\x0E\x06\x80\v" +
		"\x06\x05\x06\x82\n\x06\x03\x06\x07\x06\x85\n\x06\f\x06\x0E\x06\x88\v\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07\x90\n\x07\f\x07" +
		"\x0E\x07\x93\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x06\b\x9B\n\b\r" +
		"\b\x0E\b\x9C\x03\b\x03\b\x06\b\xA1\n\b\r\b\x0E\b\xA2\x03\b\x07\b\xA6\n" +
		"\b\f\b\x0E\b\xA9\v\b\x05\b\xAB\n\b\x03\b\x07\b\xAE\n\b\f\b\x0E\b\xB1\v" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x06\t\xBA\n\t\r\t\x0E\t\xBB" +
		"\x03\t\x03\t\x06\t\xC0\n\t\r\t\x0E\t\xC1\x03\t\x07\t\xC5\n\t\f\t\x0E\t" +
		"\xC8\v\t\x05\t\xCA\n\t\x03\t\x07\t\xCD\n\t\f\t\x0E\t\xD0\v\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x06\n\xD9\n\n\r\n\x0E\n\xDA\x03\n\x03" +
		"\n\x06\n\xDF\n\n\r\n\x0E\n\xE0\x03\n\x07\n\xE4\n\n\f\n\x0E\n\xE7\v\n\x05" +
		"\n\xE9\n\n\x03\n\x07\n\xEC\n\n\f\n\x0E\n\xEF\v\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x05\v\xF7\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0105\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x06\x0F\u010A\n\x0F\r\x0F\x0E\x0F\u010B\x03\x0F\x05\x0F\u010F" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x06\x10\u0114\n\x10\r\x10\x0E\x10\u0115" +
		"\x03\x10\x05\x10\u0119\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\u011E\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0127" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0130\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\u0135\n\x13\f\x13\x0E\x13" +
		"\u0138\v\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x06\x04\x02\x18\x18" +
		"!$\x03\x02\x1D\x1E\x03\x02\x1F \x03\x02\x15\x16\x02\u0158\x02+\x03\x02" +
		"\x02\x02\x04I\x03\x02\x02\x02\x06K\x03\x02\x02\x02\bf\x03\x02\x02\x02" +
		"\nh\x03\x02\x02\x02\f\x8C\x03\x02\x02\x02\x0E\x94\x03\x02\x02\x02\x10" +
		"\xB5\x03\x02\x02\x02\x12\xD4\x03\x02\x02\x02\x14\xF3\x03\x02\x02\x02\x16" +
		"\xFA\x03\x02\x02\x02\x18\xFD\x03\x02\x02\x02\x1A\u0104\x03\x02\x02\x02" +
		"\x1C\u010E\x03\x02\x02\x02\x1E\u0118\x03\x02\x02\x02 \u011D\x03\x02\x02" +
		"\x02\"\u012F\x03\x02\x02\x02$\u0131\x03\x02\x02\x02&\u0139\x03\x02\x02" +
		"\x02(*\x07%\x02\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02" +
		"\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02.7\x05\x04\x03" +
		"\x02/1\x07%\x02\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02" +
		"\x0223\x03\x02\x02\x0234\x03\x02\x02\x0246\x05\x04\x03\x0250\x03\x02\x02" +
		"\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028=\x03\x02\x02" +
		"\x0297\x03\x02\x02\x02:<\x07%\x02\x02;:\x03\x02\x02\x02<?\x03\x02\x02" +
		"\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02" +
		"\x02@A\x07\x02\x02\x03A\x03\x03\x02\x02\x02BJ\x05\x06\x04\x02CJ\x05\n" +
		"\x06\x02DJ\x05\x14\v\x02EJ\x05\x0E\b\x02FJ\x05\x10\t\x02GJ\x05\x12\n\x02" +
		"HJ\x05\x16\f\x02IB\x03\x02\x02\x02IC\x03\x02\x02\x02ID\x03\x02\x02\x02" +
		"IE\x03\x02\x02\x02IF\x03\x02\x02\x02IG\x03\x02\x02\x02IH\x03\x02\x02\x02" +
		"J\x05\x03\x02\x02\x02KL\x07\x15\x02\x02LO\x07\x17\x02\x02MP\x05\x18\r" +
		"\x02NP\x05\b\x05\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02P\x07\x03\x02" +
		"\x02\x02QR\x07\b\x02\x02RS\x07\n\x02\x02ST\x07\x16\x02\x02TU\x07\t\x02" +
		"\x02UV\x07\x16\x02\x02Vg\x07\v\x02\x02WX\x07\b\x02\x02XY\x07\x19\x02\x02" +
		"YZ\x07\x16\x02\x02Zg\x07\x1A\x02\x02[\\\x07\b\x02\x02\\]\x07\n\x02\x02" +
		"]b\x07\x16\x02\x02^_\x07\x1C\x02\x02_a\x07\x16\x02\x02`^\x03\x02\x02\x02" +
		"ad\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02" +
		"db\x03\x02\x02\x02eg\x07\v\x02\x02fQ\x03\x02\x02\x02fW\x03\x02\x02\x02" +
		"f[\x03\x02\x02\x02g\t\x03\x02\x02\x02hi\x07\f\x02\x02ij\x07\x15\x02\x02" +
		"jl\x07\x19\x02\x02km\x05\f\x07\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02" +
		"mn\x03\x02\x02\x02no\x07\x1A\x02\x02oq\x07\x1B\x02\x02pr\x07%\x02\x02" +
		"qp\x03\x02\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02" +
		"t\x81\x03\x02\x02\x02u~\x05\x04\x03\x02vx\x07%\x02\x02wv\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02" +
		"{}\x05\x04\x03\x02|w\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x81u\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x86\x03\x02\x02\x02" +
		"\x83\x85\x07%\x02\x02\x84\x83\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02" +
		"\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02" +
		"\x88\x86\x03\x02\x02\x02\x89\x8A\x07\x11\x02\x02\x8A\x8B\x07\f\x02\x02" +
		"\x8B\v\x03\x02\x02\x02\x8C\x91\x07\x15\x02\x02\x8D\x8E\x07\x1C\x02\x02" +
		"\x8E\x90\x07\x15\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02" +
		"\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\r\x03\x02\x02\x02" +
		"\x93\x91\x03\x02\x02\x02\x94\x95\x07\r\x02\x02\x95\x96\x07\x15\x02\x02" +
		"\x96\x97\x07\x0E\x02\x02\x97\x98\x07\x15\x02\x02\x98\x9A\x07\x1B\x02\x02" +
		"\x99\x9B\x07%\x02\x02\x9A\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02" +
		"\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\xAA\x03\x02\x02\x02" +
		"\x9E\xA7\x05\x04\x03\x02\x9F\xA1\x07%\x02\x02\xA0\x9F\x03\x02\x02\x02" +
		"\xA1\xA2\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02" +
		"\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x05\x04\x03\x02\xA5\xA0\x03\x02\x02\x02" +
		"\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02" +
		"\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\x9E\x03\x02\x02\x02" +
		"\xAA\xAB\x03\x02\x02\x02\xAB\xAF\x03\x02\x02\x02\xAC\xAE\x07%\x02\x02" +
		"\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02" +
		"\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02" +
		"\xB2\xB3\x07\x11\x02\x02\xB3\xB4\x07\r\x02\x02\xB4\x0F\x03\x02\x02\x02" +
		"\xB5\xB6\x07\x0F\x02\x02\xB6\xB7\x05\x18\r\x02\xB7\xB9\x07\x1B\x02\x02" +
		"\xB8\xBA\x07%\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02" +
		"\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xC9\x03\x02\x02\x02" +
		"\xBD\xC6\x05\x04\x03\x02\xBE\xC0\x07%\x02\x02\xBF\xBE\x03\x02\x02\x02" +
		"\xC0\xC1\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02" +
		"\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x05\x04\x03\x02\xC4\xBF\x03\x02\x02\x02" +
		"\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
		"\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xBD\x03\x02\x02\x02" +
		"\xC9\xCA\x03\x02\x02\x02\xCA\xCE\x03\x02\x02\x02\xCB\xCD\x07%\x02\x02" +
		"\xCC\xCB\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02" +
		"\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02" +
		"\xD1\xD2\x07\x11\x02\x02\xD2\xD3\x07\x0F\x02\x02\xD3\x11\x03\x02\x02\x02" +
		"\xD4\xD5\x07\x12\x02\x02\xD5\xD6\x05\x18\r\x02\xD6\xD8\x07\x1B\x02\x02" +
		"\xD7\xD9\x07%\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02" +
		"\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xE8\x03\x02\x02\x02" +
		"\xDC\xE5\x05\x04\x03\x02\xDD\xDF\x07%\x02\x02\xDE\xDD\x03\x02\x02\x02" +
		"\xDF\xE0\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x05\x04\x03\x02\xE3\xDE\x03\x02\x02\x02" +
		"\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02" +
		"\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xDC\x03\x02\x02\x02" +
		"\xE8\xE9\x03\x02\x02\x02\xE9\xED\x03\x02\x02\x02\xEA\xEC\x07%\x02\x02" +
		"\xEB\xEA\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02" +
		"\xED\xEE\x03\x02\x02\x02\xEE\xF0\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02" +
		"\xF0\xF1\x07\x11\x02\x02\xF1\xF2\x07\x12\x02\x02\xF2\x13\x03\x02\x02\x02" +
		"\xF3\xF4\x07\x15\x02\x02\xF4\xF6\x07\x19\x02\x02\xF5\xF7\x05$\x13\x02" +
		"\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02" +
		"\xF8\xF9\x07\x1A\x02\x02\xF9\x15\x03\x02\x02\x02\xFA\xFB\x07\x10\x02\x02" +
		"\xFB\xFC\x05\x18\r\x02\xFC\x17\x03\x02\x02\x02\xFD\xFE\x05\x1A\x0E\x02" +
		"\xFE\x19\x03\x02\x02\x02\xFF\u0100\x05\x1C\x0F\x02\u0100\u0101\t\x02\x02" +
		"\x02\u0101\u0102\x05\x1C\x0F\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0105" +
		"\x05\x1C\x0F\x02\u0104\xFF\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02" +
		"\u0105\x1B\x03\x02\x02\x02\u0106\u0109\x05\x1E\x10\x02\u0107\u0108\t\x03" +
		"\x02\x02\u0108\u010A\x05\x1E\x10\x02\u0109\u0107\x03\x02\x02\x02\u010A" +
		"\u010B\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010F\x05\x1E\x10\x02\u010E" +
		"\u0106\x03\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F\x1D\x03\x02\x02" +
		"\x02\u0110\u0113\x05 \x11\x02\u0111\u0112\t\x04\x02\x02\u0112\u0114\x05" +
		" \x11\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
		"\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0119\x03\x02" +
		"\x02\x02\u0117\u0119\x05 \x11\x02\u0118\u0110\x03\x02\x02\x02\u0118\u0117" +
		"\x03\x02\x02\x02\u0119\x1F\x03\x02\x02\x02\u011A\u011B\x07\x1E\x02\x02" +
		"\u011B\u011E\x05 \x11\x02\u011C\u011E\x05\"\x12\x02\u011D\u011A\x03\x02" +
		"\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E!\x03\x02\x02\x02\u011F\u0120" +
		"\x07\x19\x02\x02\u0120\u0121\x05\x18\r\x02\u0121\u0122\x07\x1A\x02\x02" +
		"\u0122\u0130\x03\x02\x02\x02\u0123\u0124\x07\x15\x02\x02\u0124\u0126\x07" +
		"\x19\x02\x02\u0125\u0127\x05$\x13\x02\u0126\u0125\x03\x02\x02\x02\u0126" +
		"\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0130\x07\x1A" +
		"\x02\x02\u0129\u012A\x07\x15\x02\x02\u012A\u012B\x07\n\x02\x02\u012B\u012C" +
		"\x05\x18\r\x02\u012C\u012D\x07\v\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E" +
		"\u0130\x05&\x14\x02\u012F\u011F\x03\x02\x02\x02\u012F\u0123\x03\x02\x02" +
		"\x02\u012F\u0129\x03\x02\x02\x02\u012F\u012E\x03\x02\x02\x02\u0130#\x03" +
		"\x02\x02\x02\u0131\u0136\x05\x18\r\x02\u0132\u0133\x07\x1C\x02\x02\u0133" +
		"\u0135\x05\x18\r\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0138\x03\x02\x02" +
		"\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137%\x03" +
		"\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013A\t\x05\x02\x02\u013A" +
		"\'\x03\x02\x02\x02*+27=IObflsy~\x81\x86\x91\x9C\xA2\xA7\xAA\xAF\xBB\xC1" +
		"\xC6\xC9\xCE\xDA\xE0\xE5\xE8\xED\xF6\u0104\u010B\u010E\u0115\u0118\u011D" +
		"\u0126\u012F\u0136";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PseudocodeParser.__ATN) {
			PseudocodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PseudocodeParser._serializedATN));
		}

		return PseudocodeParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(PseudocodeParser.EOF, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.NL);
		} else {
			return this.getToken(PseudocodeParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_program; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public functionDecl(): FunctionDeclContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclContext);
	}
	public functionCallStmt(): FunctionCallStmtContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallStmtContext);
	}
	public forEachLoop(): ForEachLoopContext | undefined {
		return this.tryGetRuleContext(0, ForEachLoopContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileLoop(): WhileLoopContext | undefined {
		return this.tryGetRuleContext(0, WhileLoopContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_statement; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(PseudocodeParser.ID, 0); }
	public EQ(): TerminalNode { return this.getToken(PseudocodeParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public arrayInitialization(): ArrayInitializationContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_assignment; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_arrayInitialization; }
	public copyFrom(ctx: ArrayInitializationContext): void {
		super.copyFrom(ctx);
	}
}
export class RangeArrayContext extends ArrayInitializationContext {
	public _from!: Token;
	public _to!: Token;
	public ARR(): TerminalNode { return this.getToken(PseudocodeParser.ARR, 0); }
	public LBRACK(): TerminalNode { return this.getToken(PseudocodeParser.LBRACK, 0); }
	public TO(): TerminalNode { return this.getToken(PseudocodeParser.TO, 0); }
	public RBRACK(): TerminalNode { return this.getToken(PseudocodeParser.RBRACK, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.INT);
		} else {
			return this.getToken(PseudocodeParser.INT, i);
		}
	}
	constructor(ctx: ArrayInitializationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterRangeArray) {
			listener.enterRangeArray(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitRangeArray) {
			listener.exitRangeArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitRangeArray) {
			return visitor.visitRangeArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SizeArrayContext extends ArrayInitializationContext {
	public _size!: Token;
	public ARR(): TerminalNode { return this.getToken(PseudocodeParser.ARR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(PseudocodeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PseudocodeParser.RPAREN, 0); }
	public INT(): TerminalNode { return this.getToken(PseudocodeParser.INT, 0); }
	constructor(ctx: ArrayInitializationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterSizeArray) {
			listener.enterSizeArray(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitSizeArray) {
			listener.exitSizeArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitSizeArray) {
			return visitor.visitSizeArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueArrayContext extends ArrayInitializationContext {
	public ARR(): TerminalNode { return this.getToken(PseudocodeParser.ARR, 0); }
	public LBRACK(): TerminalNode { return this.getToken(PseudocodeParser.LBRACK, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.INT);
		} else {
			return this.getToken(PseudocodeParser.INT, i);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(PseudocodeParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.COMMA);
		} else {
			return this.getToken(PseudocodeParser.COMMA, i);
		}
	}
	constructor(ctx: ArrayInitializationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterValueArray) {
			listener.enterValueArray(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitValueArray) {
			listener.exitValueArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitValueArray) {
			return visitor.visitValueArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public FUN(): TerminalNode[];
	public FUN(i: number): TerminalNode;
	public FUN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.FUN);
		} else {
			return this.getToken(PseudocodeParser.FUN, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(PseudocodeParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(PseudocodeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PseudocodeParser.RPAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(PseudocodeParser.COLON, 0); }
	public END(): TerminalNode { return this.getToken(PseudocodeParser.END, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.NL);
		} else {
			return this.getToken(PseudocodeParser.NL, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.ID);
		} else {
			return this.getToken(PseudocodeParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.COMMA);
		} else {
			return this.getToken(PseudocodeParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_paramList; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForEachLoopContext extends ParserRuleContext {
	public FOR(): TerminalNode[];
	public FOR(i: number): TerminalNode;
	public FOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.FOR);
		} else {
			return this.getToken(PseudocodeParser.FOR, i);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.ID);
		} else {
			return this.getToken(PseudocodeParser.ID, i);
		}
	}
	public IN(): TerminalNode { return this.getToken(PseudocodeParser.IN, 0); }
	public COLON(): TerminalNode { return this.getToken(PseudocodeParser.COLON, 0); }
	public END(): TerminalNode { return this.getToken(PseudocodeParser.END, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.NL);
		} else {
			return this.getToken(PseudocodeParser.NL, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_forEachLoop; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterForEachLoop) {
			listener.enterForEachLoop(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitForEachLoop) {
			listener.exitForEachLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitForEachLoop) {
			return visitor.visitForEachLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.IF);
		} else {
			return this.getToken(PseudocodeParser.IF, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(PseudocodeParser.COLON, 0); }
	public END(): TerminalNode { return this.getToken(PseudocodeParser.END, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.NL);
		} else {
			return this.getToken(PseudocodeParser.NL, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileLoopContext extends ParserRuleContext {
	public WHILE(): TerminalNode[];
	public WHILE(i: number): TerminalNode;
	public WHILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.WHILE);
		} else {
			return this.getToken(PseudocodeParser.WHILE, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(PseudocodeParser.COLON, 0); }
	public END(): TerminalNode { return this.getToken(PseudocodeParser.END, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.NL);
		} else {
			return this.getToken(PseudocodeParser.NL, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_whileLoop; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterWhileLoop) {
			listener.enterWhileLoop(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitWhileLoop) {
			listener.exitWhileLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitWhileLoop) {
			return visitor.visitWhileLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallStmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(PseudocodeParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(PseudocodeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PseudocodeParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_functionCallStmt; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterFunctionCallStmt) {
			listener.enterFunctionCallStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitFunctionCallStmt) {
			listener.exitFunctionCallStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitFunctionCallStmt) {
			return visitor.visitFunctionCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(PseudocodeParser.RETURN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getRuleContext(0, ComparisonExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_expression; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_comparisonExpression; }
	public copyFrom(ctx: ComparisonExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CompareExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	public _op!: Token;
	public _right!: AdditiveExpressionContext;
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(PseudocodeParser.EQEQ, 0); }
	public LOW_THAN(): TerminalNode | undefined { return this.tryGetToken(PseudocodeParser.LOW_THAN, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(PseudocodeParser.GREATER_THAN, 0); }
	public LESS_EQ(): TerminalNode | undefined { return this.tryGetToken(PseudocodeParser.LESS_EQ, 0); }
	public GREATER_EQ(): TerminalNode | undefined { return this.tryGetToken(PseudocodeParser.GREATER_EQ, 0); }
	constructor(ctx: ComparisonExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterCompareExpr) {
			listener.enterCompareExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitCompareExpr) {
			listener.exitCompareExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitCompareExpr) {
			return visitor.visitCompareExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonPassContext extends ComparisonExpressionContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	constructor(ctx: ComparisonExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterComparisonPass) {
			listener.enterComparisonPass(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitComparisonPass) {
			listener.exitComparisonPass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitComparisonPass) {
			return visitor.visitComparisonPass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_additiveExpression; }
	public copyFrom(ctx: AdditiveExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AddExprContext extends AdditiveExpressionContext {
	public _left!: MultiplicativeExpressionContext;
	public _op!: Token;
	public _right!: MultiplicativeExpressionContext;
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.PLUS);
		} else {
			return this.getToken(PseudocodeParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.MINUS);
		} else {
			return this.getToken(PseudocodeParser.MINUS, i);
		}
	}
	constructor(ctx: AdditiveExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterAddExpr) {
			listener.enterAddExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitAddExpr) {
			listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditivePassContext extends AdditiveExpressionContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	constructor(ctx: AdditiveExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterAdditivePass) {
			listener.enterAdditivePass(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitAdditivePass) {
			listener.exitAdditivePass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitAdditivePass) {
			return visitor.visitAdditivePass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_multiplicativeExpression; }
	public copyFrom(ctx: MultiplicativeExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MulExprContext extends MultiplicativeExpressionContext {
	public _left!: UnaryExpressionContext;
	public _op!: Token;
	public _right!: UnaryExpressionContext;
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.STAR);
		} else {
			return this.getToken(PseudocodeParser.STAR, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.SLASH);
		} else {
			return this.getToken(PseudocodeParser.SLASH, i);
		}
	}
	constructor(ctx: MultiplicativeExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterMulExpr) {
			listener.enterMulExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitMulExpr) {
			listener.exitMulExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitMulExpr) {
			return visitor.visitMulExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativePassContext extends MultiplicativeExpressionContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(ctx: MultiplicativeExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterMultiplicativePass) {
			listener.enterMultiplicativePass(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitMultiplicativePass) {
			listener.exitMultiplicativePass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitMultiplicativePass) {
			return visitor.visitMultiplicativePass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_unaryExpression; }
	public copyFrom(ctx: UnaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryMinusExprContext extends UnaryExpressionContext {
	public MINUS(): TerminalNode { return this.getToken(PseudocodeParser.MINUS, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(ctx: UnaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterUnaryMinusExpr) {
			listener.enterUnaryMinusExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitUnaryMinusExpr) {
			listener.exitUnaryMinusExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpr) {
			return visitor.visitUnaryMinusExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPassContext extends UnaryExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: UnaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterUnaryPass) {
			listener.enterUnaryPass(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitUnaryPass) {
			listener.exitUnaryPass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitUnaryPass) {
			return visitor.visitUnaryPass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenExpressionContext extends PrimaryExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(PseudocodeParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(PseudocodeParser.RPAREN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterParenExpression) {
			listener.enterParenExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitParenExpression) {
			listener.exitParenExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitParenExpression) {
			return visitor.visitParenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends PrimaryExpressionContext {
	public ID(): TerminalNode { return this.getToken(PseudocodeParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(PseudocodeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PseudocodeParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayAccessExpressionContext extends PrimaryExpressionContext {
	public ID(): TerminalNode { return this.getToken(PseudocodeParser.ID, 0); }
	public LBRACK(): TerminalNode { return this.getToken(PseudocodeParser.LBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(PseudocodeParser.RBRACK, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterArrayAccessExpression) {
			listener.enterArrayAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitArrayAccessExpression) {
			listener.exitArrayAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitArrayAccessExpression) {
			return visitor.visitArrayAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtomExpressionContext extends PrimaryExpressionContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterAtomExpression) {
			listener.enterAtomExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitAtomExpression) {
			listener.exitAtomExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitAtomExpression) {
			return visitor.visitAtomExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PseudocodeParser.COMMA);
		} else {
			return this.getToken(PseudocodeParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(PseudocodeParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(PseudocodeParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PseudocodeParser.RULE_atom; }
	// @Override
	public enterRule(listener: PseudocodeListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: PseudocodeListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PseudocodeVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


