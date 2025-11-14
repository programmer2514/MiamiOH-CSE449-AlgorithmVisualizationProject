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
	public static readonly ARR = 1;
	public static readonly TO = 2;
	public static readonly LBRACK = 3;
	public static readonly RBRACK = 4;
	public static readonly FUN = 5;
	public static readonly FOR = 6;
	public static readonly IN = 7;
	public static readonly IF = 8;
	public static readonly RETURN = 9;
	public static readonly END = 10;
	public static readonly WHILE = 11;
	public static readonly ID = 12;
	public static readonly INT = 13;
	public static readonly EQ = 14;
	public static readonly EQEQ = 15;
	public static readonly LPAREN = 16;
	public static readonly RPAREN = 17;
	public static readonly COLON = 18;
	public static readonly COMMA = 19;
	public static readonly PLUS = 20;
	public static readonly MINUS = 21;
	public static readonly STAR = 22;
	public static readonly SLASH = 23;
	public static readonly LOW_THAN = 24;
	public static readonly GREATER_THAN = 25;
	public static readonly LESS_EQ = 26;
	public static readonly GREATER_EQ = 27;
	public static readonly NL = 28;
	public static readonly WS = 29;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_assignment = 2;
	public static readonly RULE_arrayInitialization = 3;
	public static readonly RULE_functionDecl = 4;
	public static readonly RULE_paramList = 5;
	public static readonly RULE_forEachLoop = 6;
	public static readonly RULE_ifStatement = 7;
	public static readonly RULE_whileLoop = 8;
	public static readonly RULE_returnStatement = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_comparisonExpression = 11;
	public static readonly RULE_additiveExpression = 12;
	public static readonly RULE_multiplicativeExpression = 13;
	public static readonly RULE_unaryExpression = 14;
	public static readonly RULE_primaryExpression = 15;
	public static readonly RULE_expressionList = 16;
	public static readonly RULE_atom = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "assignment", "arrayInitialization", "functionDecl", 
		"paramList", "forEachLoop", "ifStatement", "whileLoop", "returnStatement", 
		"expression", "comparisonExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "primaryExpression", "expressionList", "atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'arr'", "'to'", "'['", "']'", "'fun'", "'for'", "'in'", "'if'", 
		"'return'", "'end'", "'while'", undefined, undefined, "'='", "'=='", "'('", 
		"')'", "':'", "','", "'+'", "'-'", "'*'", "'/'", "'<'", "'>'", "'<='", 
		"'>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ARR", "TO", "LBRACK", "RBRACK", "FUN", "FOR", "IN", "IF", 
		"RETURN", "END", "WHILE", "ID", "INT", "EQ", "EQEQ", "LPAREN", "RPAREN", 
		"COLON", "COMMA", "PLUS", "MINUS", "STAR", "SLASH", "LOW_THAN", "GREATER_THAN", 
		"LESS_EQ", "GREATER_EQ", "NL", "WS",
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
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 36;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 42;
			this.statement();
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 44;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 43;
						this.match(PseudocodeParser.NL);
						}
						}
						this.state = 46;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === PseudocodeParser.NL);
					this.state = 48;
					this.statement();
					}
					}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 54;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
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
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PseudocodeParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				this.assignment();
				}
				break;
			case PseudocodeParser.FUN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.functionDecl();
				}
				break;
			case PseudocodeParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.forEachLoop();
				}
				break;
			case PseudocodeParser.IF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 65;
				this.ifStatement();
				}
				break;
			case PseudocodeParser.WHILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 66;
				this.whileLoop();
				}
				break;
			case PseudocodeParser.RETURN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 67;
				this.returnStatement();
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PseudocodeParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(PseudocodeParser.ID);
			this.state = 71;
			this.match(PseudocodeParser.EQ);
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PseudocodeParser.ID:
			case PseudocodeParser.INT:
			case PseudocodeParser.LPAREN:
			case PseudocodeParser.MINUS:
				{
				this.state = 72;
				this.expression();
				}
				break;
			case PseudocodeParser.ARR:
				{
				this.state = 73;
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
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new RangeArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				this.match(PseudocodeParser.ARR);
				this.state = 77;
				this.match(PseudocodeParser.LBRACK);
				this.state = 78;
				(_localctx as RangeArrayContext)._from = this.match(PseudocodeParser.INT);
				this.state = 79;
				this.match(PseudocodeParser.TO);
				this.state = 80;
				(_localctx as RangeArrayContext)._to = this.match(PseudocodeParser.INT);
				this.state = 81;
				this.match(PseudocodeParser.RBRACK);
				}
				break;

			case 2:
				_localctx = new SizeArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.match(PseudocodeParser.ARR);
				this.state = 83;
				this.match(PseudocodeParser.LPAREN);
				this.state = 84;
				(_localctx as SizeArrayContext)._size = this.match(PseudocodeParser.INT);
				this.state = 85;
				this.match(PseudocodeParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new ValueArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 86;
				this.match(PseudocodeParser.ARR);
				this.state = 87;
				this.match(PseudocodeParser.LBRACK);
				this.state = 88;
				this.match(PseudocodeParser.INT);
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PseudocodeParser.COMMA) {
					{
					{
					this.state = 89;
					this.match(PseudocodeParser.COMMA);
					this.state = 90;
					this.match(PseudocodeParser.INT);
					}
					}
					this.state = 95;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 96;
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
			this.state = 99;
			this.match(PseudocodeParser.FUN);
			this.state = 100;
			this.match(PseudocodeParser.ID);
			this.state = 101;
			this.match(PseudocodeParser.LPAREN);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PseudocodeParser.ID) {
				{
				this.state = 102;
				this.paramList();
				}
			}

			this.state = 105;
			this.match(PseudocodeParser.RPAREN);
			this.state = 106;
			this.match(PseudocodeParser.COLON);
			this.state = 108;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 107;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 110;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 112;
				this.statement();
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 113;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 116;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 118;
						this.statement();
						}
						}
					}
					this.state = 123;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				}
				}
			}

			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 126;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 132;
			this.match(PseudocodeParser.END);
			this.state = 133;
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
			this.state = 135;
			this.match(PseudocodeParser.ID);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.COMMA) {
				{
				{
				this.state = 136;
				this.match(PseudocodeParser.COMMA);
				this.state = 137;
				this.match(PseudocodeParser.ID);
				}
				}
				this.state = 142;
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
			this.state = 143;
			this.match(PseudocodeParser.FOR);
			this.state = 144;
			this.match(PseudocodeParser.ID);
			this.state = 145;
			this.match(PseudocodeParser.IN);
			this.state = 146;
			this.match(PseudocodeParser.ID);
			this.state = 147;
			this.match(PseudocodeParser.COLON);
			this.state = 149;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 148;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 153;
				this.statement();
				this.state = 162;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 155;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 154;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 157;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 159;
						this.statement();
						}
						}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				}
			}

			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 167;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this.match(PseudocodeParser.END);
			this.state = 174;
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
			this.state = 176;
			this.match(PseudocodeParser.IF);
			this.state = 177;
			this.expression();
			this.state = 178;
			this.match(PseudocodeParser.COLON);
			this.state = 180;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 179;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 184;
				this.statement();
				this.state = 193;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 186;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 185;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 188;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 190;
						this.statement();
						}
						}
					}
					this.state = 195;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				}
			}

			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 198;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 204;
			this.match(PseudocodeParser.END);
			this.state = 205;
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
			this.state = 207;
			this.match(PseudocodeParser.WHILE);
			this.state = 208;
			this.expression();
			this.state = 209;
			this.match(PseudocodeParser.COLON);
			this.state = 211;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 210;
					this.match(PseudocodeParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.FUN) | (1 << PseudocodeParser.FOR) | (1 << PseudocodeParser.IF) | (1 << PseudocodeParser.RETURN) | (1 << PseudocodeParser.WHILE) | (1 << PseudocodeParser.ID))) !== 0)) {
				{
				this.state = 215;
				this.statement();
				this.state = 224;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 217;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 216;
							this.match(PseudocodeParser.NL);
							}
							}
							this.state = 219;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === PseudocodeParser.NL);
						this.state = 221;
						this.statement();
						}
						}
					}
					this.state = 226;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				}
			}

			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.NL) {
				{
				{
				this.state = 229;
				this.match(PseudocodeParser.NL);
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 235;
			this.match(PseudocodeParser.END);
			this.state = 236;
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PseudocodeParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(PseudocodeParser.RETURN);
			this.state = 239;
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
		this.enterRule(_localctx, 20, PseudocodeParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
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
		this.enterRule(_localctx, 22, PseudocodeParser.RULE_comparisonExpression);
		let _la: number;
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new CompareExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 243;
				(_localctx as CompareExprContext)._left = this.additiveExpression();
				this.state = 244;
				(_localctx as CompareExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.EQEQ) | (1 << PseudocodeParser.LOW_THAN) | (1 << PseudocodeParser.GREATER_THAN) | (1 << PseudocodeParser.LESS_EQ) | (1 << PseudocodeParser.GREATER_EQ))) !== 0))) {
					(_localctx as CompareExprContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 245;
				(_localctx as CompareExprContext)._right = this.additiveExpression();
				}
				break;

			case 2:
				_localctx = new ComparisonPassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 247;
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
		this.enterRule(_localctx, 24, PseudocodeParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				_localctx = new AddExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				(_localctx as AddExprContext)._left = this.multiplicativeExpression();
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 251;
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
					this.state = 252;
					(_localctx as AddExprContext)._right = this.multiplicativeExpression();
					}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === PseudocodeParser.PLUS || _la === PseudocodeParser.MINUS);
				}
				break;

			case 2:
				_localctx = new AdditivePassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
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
		this.enterRule(_localctx, 26, PseudocodeParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				_localctx = new MulExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				(_localctx as MulExprContext)._left = this.unaryExpression();
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 261;
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
					this.state = 262;
					(_localctx as MulExprContext)._right = this.unaryExpression();
					}
					}
					this.state = 265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === PseudocodeParser.STAR || _la === PseudocodeParser.SLASH);
				}
				break;

			case 2:
				_localctx = new MultiplicativePassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
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
		this.enterRule(_localctx, 28, PseudocodeParser.RULE_unaryExpression);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PseudocodeParser.MINUS:
				_localctx = new UnaryMinusExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.match(PseudocodeParser.MINUS);
				this.state = 271;
				this.unaryExpression();
				}
				break;
			case PseudocodeParser.ID:
			case PseudocodeParser.INT:
			case PseudocodeParser.LPAREN:
				_localctx = new UnaryPassContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
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
		this.enterRule(_localctx, 30, PseudocodeParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				_localctx = new ParenExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.match(PseudocodeParser.LPAREN);
				this.state = 276;
				this.expression();
				this.state = 277;
				this.match(PseudocodeParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new FunctionCallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.match(PseudocodeParser.ID);
				this.state = 280;
				this.match(PseudocodeParser.LPAREN);
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PseudocodeParser.ID) | (1 << PseudocodeParser.INT) | (1 << PseudocodeParser.LPAREN) | (1 << PseudocodeParser.MINUS))) !== 0)) {
					{
					this.state = 281;
					this.expressionList();
					}
				}

				this.state = 284;
				this.match(PseudocodeParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new ArrayAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 285;
				this.match(PseudocodeParser.ID);
				this.state = 286;
				this.match(PseudocodeParser.LBRACK);
				this.state = 287;
				this.expression();
				this.state = 288;
				this.match(PseudocodeParser.RBRACK);
				}
				break;

			case 4:
				_localctx = new AtomExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 290;
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
		this.enterRule(_localctx, 32, PseudocodeParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.expression();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PseudocodeParser.COMMA) {
				{
				{
				this.state = 294;
				this.match(PseudocodeParser.COMMA);
				this.state = 295;
				this.expression();
				}
				}
				this.state = 300;
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
		this.enterRule(_localctx, 34, PseudocodeParser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\u0132\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x03" +
		"\x02\x06\x02/\n\x02\r\x02\x0E\x020\x03\x02\x07\x024\n\x02\f\x02\x0E\x02" +
		"7\v\x02\x03\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03G\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04M\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05^\n\x05\f\x05\x0E\x05a\v\x05\x03\x05\x05\x05d\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06j\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x06\x06o\n\x06\r\x06\x0E\x06p\x03\x06\x03\x06\x06\x06u\n\x06\r\x06\x0E" +
		"\x06v\x03\x06\x07\x06z\n\x06\f\x06\x0E\x06}\v\x06\x05\x06\x7F\n\x06\x03" +
		"\x06\x07\x06\x82\n\x06\f\x06\x0E\x06\x85\v\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x07\x07\x8D\n\x07\f\x07\x0E\x07\x90\v\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x06\b\x98\n\b\r\b\x0E\b\x99\x03\b\x03" +
		"\b\x06\b\x9E\n\b\r\b\x0E\b\x9F\x03\b\x07\b\xA3\n\b\f\b\x0E\b\xA6\v\b\x05" +
		"\b\xA8\n\b\x03\b\x07\b\xAB\n\b\f\b\x0E\b\xAE\v\b\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x06\t\xB7\n\t\r\t\x0E\t\xB8\x03\t\x03\t\x06\t\xBD" +
		"\n\t\r\t\x0E\t\xBE\x03\t\x07\t\xC2\n\t\f\t\x0E\t\xC5\v\t\x05\t\xC7\n\t" +
		"\x03\t\x07\t\xCA\n\t\f\t\x0E\t\xCD\v\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x06\n\xD6\n\n\r\n\x0E\n\xD7\x03\n\x03\n\x06\n\xDC\n\n\r\n\x0E" +
		"\n\xDD\x03\n\x07\n\xE1\n\n\f\n\x0E\n\xE4\v\n\x05\n\xE6\n\n\x03\n\x07\n" +
		"\xE9\n\n\f\n\x0E\n\xEC\v\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xFB\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x06\x0E\u0100\n\x0E\r\x0E\x0E\x0E\u0101\x03\x0E\x05\x0E\u0105\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x06\x0F\u010A\n\x0F\r\x0F\x0E\x0F\u010B\x03\x0F\x05" +
		"\x0F\u010F\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0114\n\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u011D\n\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0126\n\x11\x03" +
		"\x12\x03\x12\x03\x12\x07\x12\u012B\n\x12\f\x12\x0E\x12\u012E\v\x12\x03" +
		"\x13\x03\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02\x02\x06\x04\x02\x11\x11\x1A\x1D\x03\x02\x16\x17" +
		"\x03\x02\x18\x19\x03\x02\x0E\x0F\x02\u014D\x02)\x03\x02\x02\x02\x04F\x03" +
		"\x02\x02\x02\x06H\x03\x02\x02\x02\bc\x03\x02\x02\x02\ne\x03\x02\x02\x02" +
		"\f\x89\x03\x02\x02\x02\x0E\x91\x03\x02\x02\x02\x10\xB2\x03\x02\x02\x02" +
		"\x12\xD1\x03\x02\x02\x02\x14\xF0\x03\x02\x02\x02\x16\xF3\x03\x02\x02\x02" +
		"\x18\xFA\x03\x02\x02\x02\x1A\u0104\x03\x02\x02\x02\x1C\u010E\x03\x02\x02" +
		"\x02\x1E\u0113\x03\x02\x02\x02 \u0125\x03\x02\x02\x02\"\u0127\x03\x02" +
		"\x02\x02$\u012F\x03\x02\x02\x02&(\x07\x1E\x02\x02\'&\x03\x02\x02\x02(" +
		"+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*,\x03\x02\x02\x02" +
		"+)\x03\x02\x02\x02,5\x05\x04\x03\x02-/\x07\x1E\x02\x02.-\x03\x02\x02\x02" +
		"/0\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x02" +
		"24\x05\x04\x03\x023.\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x02" +
		"56\x03\x02\x02\x026;\x03\x02\x02\x0275\x03\x02\x02\x028:\x07\x1E\x02\x02" +
		"98\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02" +
		"<>\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\x02\x02\x03?\x03\x03\x02\x02" +
		"\x02@G\x05\x06\x04\x02AG\x05\n\x06\x02BG\x05\x0E\b\x02CG\x05\x10\t\x02" +
		"DG\x05\x12\n\x02EG\x05\x14\v\x02F@\x03\x02\x02\x02FA\x03\x02\x02\x02F" +
		"B\x03\x02\x02\x02FC\x03\x02\x02\x02FD\x03\x02\x02\x02FE\x03\x02\x02\x02" +
		"G\x05\x03\x02\x02\x02HI\x07\x0E\x02\x02IL\x07\x10\x02\x02JM\x05\x16\f" +
		"\x02KM\x05\b\x05\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02M\x07\x03\x02" +
		"\x02\x02NO\x07\x03\x02\x02OP\x07\x05\x02\x02PQ\x07\x0F\x02\x02QR\x07\x04" +
		"\x02\x02RS\x07\x0F\x02\x02Sd\x07\x06\x02\x02TU\x07\x03\x02\x02UV\x07\x12" +
		"\x02\x02VW\x07\x0F\x02\x02Wd\x07\x13\x02\x02XY\x07\x03\x02\x02YZ\x07\x05" +
		"\x02\x02Z_\x07\x0F\x02\x02[\\\x07\x15\x02\x02\\^\x07\x0F\x02\x02][\x03" +
		"\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`b\x03" +
		"\x02\x02\x02a_\x03\x02\x02\x02bd\x07\x06\x02\x02cN\x03\x02\x02\x02cT\x03" +
		"\x02\x02\x02cX\x03\x02\x02\x02d\t\x03\x02\x02\x02ef\x07\x07\x02\x02fg" +
		"\x07\x0E\x02\x02gi\x07\x12\x02\x02hj\x05\f\x07\x02ih\x03\x02\x02\x02i" +
		"j\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x07\x13\x02\x02ln\x07\x14\x02\x02" +
		"mo\x07\x1E\x02\x02nm\x03\x02\x02\x02op\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"pq\x03\x02\x02\x02q~\x03\x02\x02\x02r{\x05\x04\x03\x02su\x07\x1E\x02\x02" +
		"ts\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wx\x03\x02\x02\x02xz\x05\x04\x03\x02yt\x03\x02\x02\x02z}\x03\x02\x02\x02" +
		"{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02" +
		"\x02~r\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x83\x03\x02\x02\x02\x80" +
		"\x82\x07\x1E\x02\x02\x81\x80\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83" +
		"\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85" +
		"\x83\x03\x02\x02\x02\x86\x87\x07\f\x02\x02\x87\x88\x07\x07\x02\x02\x88" +
		"\v\x03\x02\x02\x02\x89\x8E\x07\x0E\x02\x02\x8A\x8B\x07\x15\x02\x02\x8B" +
		"\x8D\x07\x0E\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E" +
		"\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\r\x03\x02\x02\x02\x90" +
		"\x8E\x03\x02\x02\x02\x91\x92\x07\b\x02\x02\x92\x93\x07\x0E\x02\x02\x93" +
		"\x94\x07\t\x02\x02\x94\x95\x07\x0E\x02\x02\x95\x97\x07\x14\x02\x02\x96" +
		"\x98\x07\x1E\x02\x02\x97\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\xA7\x03\x02\x02\x02\x9B" +
		"\xA4\x05\x04\x03\x02\x9C\x9E\x07\x1E\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E" +
		"\x9F\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0" +
		"\xA1\x03\x02\x02\x02\xA1\xA3\x05\x04\x03\x02\xA2\x9D\x03\x02\x02\x02\xA3" +
		"\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5" +
		"\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\x9B\x03\x02\x02\x02\xA7" +
		"\xA8\x03\x02\x02\x02\xA8\xAC\x03\x02\x02\x02\xA9\xAB\x07\x1E\x02\x02\xAA" +
		"\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC" +
		"\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF" +
		"\xB0\x07\f\x02\x02\xB0\xB1\x07\b\x02\x02\xB1\x0F\x03\x02\x02\x02\xB2\xB3" +
		"\x07\n\x02\x02\xB3\xB4\x05\x16\f\x02\xB4\xB6\x07\x14\x02\x02\xB5\xB7\x07" +
		"\x1E\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB6\x03" +
		"\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC6\x03\x02\x02\x02\xBA\xC3\x05" +
		"\x04\x03\x02\xBB\xBD\x07\x1E\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xBE\x03" +
		"\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03" +
		"\x02\x02\x02\xC0\xC2\x05\x04\x03\x02\xC1\xBC\x03\x02\x02\x02\xC2\xC5\x03" +
		"\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x03" +
		"\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xBA\x03\x02\x02\x02\xC6\xC7\x03" +
		"\x02\x02\x02\xC7\xCB\x03\x02\x02\x02\xC8\xCA\x07\x1E\x02\x02\xC9\xC8\x03" +
		"\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03" +
		"\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xCF\x07" +
		"\f\x02\x02\xCF\xD0\x07\n\x02\x02\xD0\x11\x03\x02\x02\x02\xD1\xD2\x07\r" +
		"\x02\x02\xD2\xD3\x05\x16\f\x02\xD3\xD5\x07\x14\x02\x02\xD4\xD6\x07\x1E" +
		"\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD5\x03\x02" +
		"\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xE5\x03\x02\x02\x02\xD9\xE2\x05\x04" +
		"\x03\x02\xDA\xDC\x07\x1E\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02" +
		"\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02" +
		"\x02\x02\xDF\xE1\x05\x04\x03\x02\xE0\xDB\x03\x02\x02\x02\xE1\xE4\x03\x02" +
		"\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE6\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xD9\x03\x02\x02\x02\xE5\xE6\x03\x02" +
		"\x02\x02\xE6\xEA\x03\x02\x02\x02\xE7\xE9\x07\x1E\x02\x02\xE8\xE7\x03\x02" +
		"\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02" +
		"\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x07\f" +
		"\x02\x02\xEE\xEF\x07\r\x02\x02\xEF\x13\x03\x02\x02\x02\xF0\xF1\x07\v\x02" +
		"\x02\xF1\xF2\x05\x16\f\x02\xF2\x15\x03\x02\x02\x02\xF3\xF4\x05\x18\r\x02" +
		"\xF4\x17\x03\x02\x02\x02\xF5\xF6\x05\x1A\x0E\x02\xF6\xF7\t\x02\x02\x02" +
		"\xF7\xF8\x05\x1A\x0E\x02\xF8\xFB\x03\x02\x02\x02\xF9\xFB\x05\x1A\x0E\x02" +
		"\xFA\xF5\x03\x02\x02\x02\xFA\xF9\x03\x02\x02\x02\xFB\x19\x03\x02\x02\x02" +
		"\xFC\xFF\x05\x1C\x0F\x02\xFD\xFE\t\x03\x02\x02\xFE\u0100\x05\x1C\x0F\x02" +
		"\xFF\xFD\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02" +
		"\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103" +
		"\u0105\x05\x1C\x0F\x02\u0104\xFC\x03\x02\x02\x02\u0104\u0103\x03\x02\x02" +
		"\x02\u0105\x1B\x03\x02\x02\x02\u0106\u0109\x05\x1E\x10\x02\u0107\u0108" +
		"\t\x04\x02\x02\u0108\u010A\x05\x1E\x10\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u010A\u010B\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03" +
		"\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010F\x05\x1E\x10\x02\u010E" +
		"\u0106\x03\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F\x1D\x03\x02\x02" +
		"\x02\u0110\u0111\x07\x17\x02\x02\u0111\u0114\x05\x1E\x10\x02\u0112\u0114" +
		"\x05 \x11\x02\u0113\u0110\x03\x02\x02\x02\u0113\u0112\x03\x02\x02\x02" +
		"\u0114\x1F\x03\x02\x02\x02\u0115\u0116\x07\x12\x02\x02\u0116\u0117\x05" +
		"\x16\f\x02\u0117\u0118\x07\x13\x02\x02\u0118\u0126\x03\x02\x02\x02\u0119" +
		"\u011A\x07\x0E\x02\x02\u011A\u011C\x07\x12\x02\x02\u011B\u011D\x05\"\x12" +
		"\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E" +
		"\x03\x02\x02\x02\u011E\u0126\x07\x13\x02\x02\u011F\u0120\x07\x0E\x02\x02" +
		"\u0120\u0121\x07\x05\x02\x02\u0121\u0122\x05\x16\f\x02\u0122\u0123\x07" +
		"\x06\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0126\x05$\x13\x02\u0125" +
		"\u0115\x03\x02\x02\x02\u0125\u0119\x03\x02\x02\x02\u0125\u011F\x03\x02" +
		"\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126!\x03\x02\x02\x02\u0127\u012C" +
		"\x05\x16\f\x02\u0128\u0129\x07\x15\x02\x02\u0129\u012B\x05\x16\f\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02" +
		"\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D#\x03\x02\x02\x02\u012E\u012C" +
		"\x03\x02\x02\x02\u012F\u0130\t\x05\x02\x02\u0130%\x03\x02\x02\x02))05" +
		";FL_cipv{~\x83\x8E\x99\x9F\xA4\xA7\xAC\xB8\xBE\xC3\xC6\xCB\xD7\xDD\xE2" +
		"\xE5\xEA\xFA\u0101\u0104\u010B\u010E\u0113\u011C\u0125\u012C";
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


