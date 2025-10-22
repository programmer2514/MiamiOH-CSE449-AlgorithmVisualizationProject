// Generated from Pseudocode.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PseudocodeListener from './PseudocodeListener.js';
import PseudocodeVisitor from './PseudocodeVisitor.js';

const serializedATN = [4,1,21,209,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,1,0,4,0,31,8,0,11,0,12,0,32,1,0,5,0,36,8,0,10,0,12,0,39,
9,0,1,0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,54,8,
1,1,2,1,2,1,2,1,2,3,2,60,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,5,3,77,8,3,10,3,12,3,80,9,3,1,3,3,3,83,8,3,1,4,1,4,1,4,1,
4,3,4,89,8,4,1,4,1,4,1,4,4,4,94,8,4,11,4,12,4,95,1,4,1,4,4,4,100,8,4,11,
4,12,4,101,1,4,5,4,105,8,4,10,4,12,4,108,9,4,3,4,110,8,4,1,4,5,4,113,8,4,
10,4,12,4,116,9,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,124,8,5,10,5,12,5,127,9,5,
1,6,1,6,1,6,1,6,1,6,1,6,4,6,135,8,6,11,6,12,6,136,1,6,1,6,4,6,141,8,6,11,
6,12,6,142,1,6,5,6,146,8,6,10,6,12,6,149,9,6,3,6,151,8,6,1,6,5,6,154,8,6,
10,6,12,6,157,9,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,4,7,166,8,7,11,7,12,7,167,
1,7,1,7,4,7,172,8,7,11,7,12,7,173,1,7,5,7,177,8,7,10,7,12,7,180,9,7,3,7,
182,8,7,1,7,5,7,185,8,7,10,7,12,7,188,9,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,
9,1,9,1,9,1,9,1,9,5,9,202,8,9,10,9,12,9,205,9,9,1,10,1,10,1,10,0,1,18,11,
0,2,4,6,8,10,12,14,16,18,20,0,1,1,0,11,13,227,0,25,1,0,0,0,2,53,1,0,0,0,
4,55,1,0,0,0,6,82,1,0,0,0,8,84,1,0,0,0,10,120,1,0,0,0,12,128,1,0,0,0,14,
161,1,0,0,0,16,192,1,0,0,0,18,195,1,0,0,0,20,206,1,0,0,0,22,24,5,20,0,0,
23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,
25,1,0,0,0,28,37,3,2,1,0,29,31,5,20,0,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,
1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,0,34,36,3,2,1,0,35,30,1,0,0,0,36,39,1,
0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,43,1,0,0,0,39,37,1,0,0,0,40,42,5,20,
0,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,
0,45,43,1,0,0,0,46,47,5,0,0,1,47,1,1,0,0,0,48,54,3,4,2,0,49,54,3,8,4,0,50,
54,3,12,6,0,51,54,3,14,7,0,52,54,3,16,8,0,53,48,1,0,0,0,53,49,1,0,0,0,53,
50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,3,1,0,0,0,55,56,5,11,0,0,56,59,
5,14,0,0,57,60,3,18,9,0,58,60,3,6,3,0,59,57,1,0,0,0,59,58,1,0,0,0,60,5,1,
0,0,0,61,62,5,1,0,0,62,63,5,3,0,0,63,64,5,12,0,0,64,65,5,2,0,0,65,66,5,12,
0,0,66,83,5,4,0,0,67,68,5,1,0,0,68,69,5,16,0,0,69,70,5,12,0,0,70,83,5,17,
0,0,71,72,5,1,0,0,72,73,5,3,0,0,73,78,5,12,0,0,74,75,5,19,0,0,75,77,5,12,
0,0,76,74,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,
0,80,78,1,0,0,0,81,83,5,4,0,0,82,61,1,0,0,0,82,67,1,0,0,0,82,71,1,0,0,0,
83,7,1,0,0,0,84,85,5,5,0,0,85,86,5,11,0,0,86,88,5,16,0,0,87,89,3,10,5,0,
88,87,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,5,17,0,0,91,93,5,18,0,0,
92,94,5,20,0,0,93,92,1,0,0,0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,
109,1,0,0,0,97,106,3,2,1,0,98,100,5,20,0,0,99,98,1,0,0,0,100,101,1,0,0,0,
101,99,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,105,3,2,1,0,104,99,1,
0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,110,1,0,0,0,108,
106,1,0,0,0,109,97,1,0,0,0,109,110,1,0,0,0,110,114,1,0,0,0,111,113,5,20,
0,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,
117,1,0,0,0,116,114,1,0,0,0,117,118,5,10,0,0,118,119,5,5,0,0,119,9,1,0,0,
0,120,125,5,11,0,0,121,122,5,19,0,0,122,124,5,11,0,0,123,121,1,0,0,0,124,
127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,11,1,0,0,0,127,125,1,0,0,
0,128,129,5,6,0,0,129,130,5,11,0,0,130,131,5,7,0,0,131,132,5,11,0,0,132,
134,5,18,0,0,133,135,5,20,0,0,134,133,1,0,0,0,135,136,1,0,0,0,136,134,1,
0,0,0,136,137,1,0,0,0,137,150,1,0,0,0,138,147,3,2,1,0,139,141,5,20,0,0,140,
139,1,0,0,0,141,142,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,144,1,0,
0,0,144,146,3,2,1,0,145,140,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,
148,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,150,138,1,0,0,0,150,151,1,0,
0,0,151,155,1,0,0,0,152,154,5,20,0,0,153,152,1,0,0,0,154,157,1,0,0,0,155,
153,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,157,155,1,0,0,0,158,159,5,10,
0,0,159,160,5,6,0,0,160,13,1,0,0,0,161,162,5,8,0,0,162,163,3,18,9,0,163,
165,5,18,0,0,164,166,5,20,0,0,165,164,1,0,0,0,166,167,1,0,0,0,167,165,1,
0,0,0,167,168,1,0,0,0,168,181,1,0,0,0,169,178,3,2,1,0,170,172,5,20,0,0,171,
170,1,0,0,0,172,173,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,175,1,0,
0,0,175,177,3,2,1,0,176,171,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,
179,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,181,169,1,0,0,0,181,182,1,0,
0,0,182,186,1,0,0,0,183,185,5,20,0,0,184,183,1,0,0,0,185,188,1,0,0,0,186,
184,1,0,0,0,186,187,1,0,0,0,187,189,1,0,0,0,188,186,1,0,0,0,189,190,5,10,
0,0,190,191,5,8,0,0,191,15,1,0,0,0,192,193,5,9,0,0,193,194,3,18,9,0,194,
17,1,0,0,0,195,196,6,9,-1,0,196,197,3,20,10,0,197,203,1,0,0,0,198,199,10,
2,0,0,199,200,5,15,0,0,200,202,3,18,9,3,201,198,1,0,0,0,202,205,1,0,0,0,
203,201,1,0,0,0,203,204,1,0,0,0,204,19,1,0,0,0,205,203,1,0,0,0,206,207,7,
0,0,0,207,21,1,0,0,0,26,25,32,37,43,53,59,78,82,88,95,101,106,109,114,125,
136,142,147,150,155,167,173,178,181,186,203];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PseudocodeParser extends antlr4.Parser {

    static grammarFileName = "Pseudocode.g4";
    static literalNames = [ null, "'arr'", "'to'", "'['", "']'", "'fun'", 
                            "'for'", "'in'", "'if'", "'return'", "'end'", 
                            null, null, null, "'='", "'=='", "'('", "')'", 
                            "':'", "','" ];
    static symbolicNames = [ null, "ARR", "TO", "LBRACK", "RBRACK", "FUN", 
                             "FOR", "IN", "IF", "RETURN", "END", "ID", "INT", 
                             "NEG_INT", "EQ", "EQEQ", "LPAREN", "RPAREN", 
                             "COLON", "COMMA", "NL", "WS" ];
    static ruleNames = [ "program", "statement", "assignment", "arrayInitialization", 
                         "functionDecl", "paramList", "forEachLoop", "ifStatement", 
                         "returnStatement", "expression", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PseudocodeParser.ruleNames;
        this.literalNames = PseudocodeParser.literalNames;
        this.symbolicNames = PseudocodeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PseudocodeParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 22;
	            this.match(PseudocodeParser.NL);
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.statement();
	        this.state = 37;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 30; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 29;
	                    this.match(PseudocodeParser.NL);
	                    this.state = 32; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===20);
	                this.state = 34;
	                this.statement(); 
	            }
	            this.state = 39;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 40;
	            this.match(PseudocodeParser.NL);
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this.match(PseudocodeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PseudocodeParser.RULE_statement);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.assignment();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.functionDecl();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.forEachLoop();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.ifStatement();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 52;
	            this.returnStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PseudocodeParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(PseudocodeParser.ID);
	        this.state = 56;
	        this.match(PseudocodeParser.EQ);
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	        case 13:
	            this.state = 57;
	            this.expression(0);
	            break;
	        case 1:
	            this.state = 58;
	            this.arrayInitialization();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayInitialization() {
	    let localctx = new ArrayInitializationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PseudocodeParser.RULE_arrayInitialization);
	    var _la = 0;
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RangeArrayContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.match(PseudocodeParser.ARR);
	            this.state = 62;
	            this.match(PseudocodeParser.LBRACK);
	            this.state = 63;
	            localctx.from = this.match(PseudocodeParser.INT);
	            this.state = 64;
	            this.match(PseudocodeParser.TO);
	            this.state = 65;
	            localctx.to = this.match(PseudocodeParser.INT);
	            this.state = 66;
	            this.match(PseudocodeParser.RBRACK);
	            break;

	        case 2:
	            localctx = new SizeArrayContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.match(PseudocodeParser.ARR);
	            this.state = 68;
	            this.match(PseudocodeParser.LPAREN);
	            this.state = 69;
	            localctx.size = this.match(PseudocodeParser.INT);
	            this.state = 70;
	            this.match(PseudocodeParser.RPAREN);
	            break;

	        case 3:
	            localctx = new ValueArrayContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.match(PseudocodeParser.ARR);
	            this.state = 72;
	            this.match(PseudocodeParser.LBRACK);
	            this.state = 73;
	            this.match(PseudocodeParser.INT);
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===19) {
	                this.state = 74;
	                this.match(PseudocodeParser.COMMA);
	                this.state = 75;
	                this.match(PseudocodeParser.INT);
	                this.state = 80;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 81;
	            this.match(PseudocodeParser.RBRACK);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDecl() {
	    let localctx = new FunctionDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PseudocodeParser.RULE_functionDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(PseudocodeParser.FUN);
	        this.state = 85;
	        this.match(PseudocodeParser.ID);
	        this.state = 86;
	        this.match(PseudocodeParser.LPAREN);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 87;
	            this.paramList();
	        }

	        this.state = 90;
	        this.match(PseudocodeParser.RPAREN);
	        this.state = 91;
	        this.match(PseudocodeParser.COLON);
	        this.state = 93; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 92;
	        		this.match(PseudocodeParser.NL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 95; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2912) !== 0)) {
	            this.state = 97;
	            this.statement();
	            this.state = 106;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 99; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 98;
	                        this.match(PseudocodeParser.NL);
	                        this.state = 101; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===20);
	                    this.state = 103;
	                    this.statement(); 
	                }
	                this.state = 108;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	        }

	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 111;
	            this.match(PseudocodeParser.NL);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
	        this.match(PseudocodeParser.END);
	        this.state = 118;
	        this.match(PseudocodeParser.FUN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PseudocodeParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(PseudocodeParser.ID);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 121;
	            this.match(PseudocodeParser.COMMA);
	            this.state = 122;
	            this.match(PseudocodeParser.ID);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forEachLoop() {
	    let localctx = new ForEachLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PseudocodeParser.RULE_forEachLoop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(PseudocodeParser.FOR);
	        this.state = 129;
	        this.match(PseudocodeParser.ID);
	        this.state = 130;
	        this.match(PseudocodeParser.IN);
	        this.state = 131;
	        this.match(PseudocodeParser.ID);
	        this.state = 132;
	        this.match(PseudocodeParser.COLON);
	        this.state = 134; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 133;
	        		this.match(PseudocodeParser.NL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 136; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,15, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2912) !== 0)) {
	            this.state = 138;
	            this.statement();
	            this.state = 147;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 140; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 139;
	                        this.match(PseudocodeParser.NL);
	                        this.state = 142; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===20);
	                    this.state = 144;
	                    this.statement(); 
	                }
	                this.state = 149;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	            }

	        }

	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 152;
	            this.match(PseudocodeParser.NL);
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 158;
	        this.match(PseudocodeParser.END);
	        this.state = 159;
	        this.match(PseudocodeParser.FOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PseudocodeParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(PseudocodeParser.IF);
	        this.state = 162;
	        this.expression(0);
	        this.state = 163;
	        this.match(PseudocodeParser.COLON);
	        this.state = 165; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 164;
	        		this.match(PseudocodeParser.NL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 167; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2912) !== 0)) {
	            this.state = 169;
	            this.statement();
	            this.state = 178;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 171; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 170;
	                        this.match(PseudocodeParser.NL);
	                        this.state = 173; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===20);
	                    this.state = 175;
	                    this.statement(); 
	                }
	                this.state = 180;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	            }

	        }

	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 183;
	            this.match(PseudocodeParser.NL);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 189;
	        this.match(PseudocodeParser.END);
	        this.state = 190;
	        this.match(PseudocodeParser.IF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PseudocodeParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(PseudocodeParser.RETURN);
	        this.state = 193;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, PseudocodeParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new AtomExpressionContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 196;
	        this.atom();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, PseudocodeParser.RULE_expression);
	                this.state = 198;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 199;
	                localctx.op = this.match(PseudocodeParser.EQEQ);
	                this.state = 200;
	                localctx.right = this.expression(3); 
	            }
	            this.state = 205;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PseudocodeParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PseudocodeParser.EOF = antlr4.Token.EOF;
PseudocodeParser.ARR = 1;
PseudocodeParser.TO = 2;
PseudocodeParser.LBRACK = 3;
PseudocodeParser.RBRACK = 4;
PseudocodeParser.FUN = 5;
PseudocodeParser.FOR = 6;
PseudocodeParser.IN = 7;
PseudocodeParser.IF = 8;
PseudocodeParser.RETURN = 9;
PseudocodeParser.END = 10;
PseudocodeParser.ID = 11;
PseudocodeParser.INT = 12;
PseudocodeParser.NEG_INT = 13;
PseudocodeParser.EQ = 14;
PseudocodeParser.EQEQ = 15;
PseudocodeParser.LPAREN = 16;
PseudocodeParser.RPAREN = 17;
PseudocodeParser.COLON = 18;
PseudocodeParser.COMMA = 19;
PseudocodeParser.NL = 20;
PseudocodeParser.WS = 21;

PseudocodeParser.RULE_program = 0;
PseudocodeParser.RULE_statement = 1;
PseudocodeParser.RULE_assignment = 2;
PseudocodeParser.RULE_arrayInitialization = 3;
PseudocodeParser.RULE_functionDecl = 4;
PseudocodeParser.RULE_paramList = 5;
PseudocodeParser.RULE_forEachLoop = 6;
PseudocodeParser.RULE_ifStatement = 7;
PseudocodeParser.RULE_returnStatement = 8;
PseudocodeParser.RULE_expression = 9;
PseudocodeParser.RULE_atom = 10;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	EOF() {
	    return this.getToken(PseudocodeParser.EOF, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.NL);
	    } else {
	        return this.getToken(PseudocodeParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	functionDecl() {
	    return this.getTypedRuleContext(FunctionDeclContext,0);
	};

	forEachLoop() {
	    return this.getTypedRuleContext(ForEachLoopContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_assignment;
    }

	ID() {
	    return this.getToken(PseudocodeParser.ID, 0);
	};

	EQ() {
	    return this.getToken(PseudocodeParser.EQ, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	arrayInitialization() {
	    return this.getTypedRuleContext(ArrayInitializationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayInitializationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_arrayInitialization;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RangeArrayContext extends ArrayInitializationContext {

    constructor(parser, ctx) {
        super(parser);
        this.from = null;;
        this.to = null;;
        super.copyFrom(ctx);
    }

	ARR() {
	    return this.getToken(PseudocodeParser.ARR, 0);
	};

	LBRACK() {
	    return this.getToken(PseudocodeParser.LBRACK, 0);
	};

	TO() {
	    return this.getToken(PseudocodeParser.TO, 0);
	};

	RBRACK() {
	    return this.getToken(PseudocodeParser.RBRACK, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.INT);
	    } else {
	        return this.getToken(PseudocodeParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterRangeArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitRangeArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitRangeArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PseudocodeParser.RangeArrayContext = RangeArrayContext;

class ValueArrayContext extends ArrayInitializationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ARR() {
	    return this.getToken(PseudocodeParser.ARR, 0);
	};

	LBRACK() {
	    return this.getToken(PseudocodeParser.LBRACK, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.INT);
	    } else {
	        return this.getToken(PseudocodeParser.INT, i);
	    }
	};


	RBRACK() {
	    return this.getToken(PseudocodeParser.RBRACK, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.COMMA);
	    } else {
	        return this.getToken(PseudocodeParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterValueArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitValueArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitValueArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PseudocodeParser.ValueArrayContext = ValueArrayContext;

class SizeArrayContext extends ArrayInitializationContext {

    constructor(parser, ctx) {
        super(parser);
        this.size = null;;
        super.copyFrom(ctx);
    }

	ARR() {
	    return this.getToken(PseudocodeParser.ARR, 0);
	};

	LPAREN() {
	    return this.getToken(PseudocodeParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PseudocodeParser.RPAREN, 0);
	};

	INT() {
	    return this.getToken(PseudocodeParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterSizeArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitSizeArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitSizeArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PseudocodeParser.SizeArrayContext = SizeArrayContext;

class FunctionDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_functionDecl;
    }

	FUN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.FUN);
	    } else {
	        return this.getToken(PseudocodeParser.FUN, i);
	    }
	};


	ID() {
	    return this.getToken(PseudocodeParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(PseudocodeParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PseudocodeParser.RPAREN, 0);
	};

	COLON() {
	    return this.getToken(PseudocodeParser.COLON, 0);
	};

	END() {
	    return this.getToken(PseudocodeParser.END, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.NL);
	    } else {
	        return this.getToken(PseudocodeParser.NL, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterFunctionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitFunctionDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitFunctionDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_paramList;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.ID);
	    } else {
	        return this.getToken(PseudocodeParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.COMMA);
	    } else {
	        return this.getToken(PseudocodeParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitParamList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitParamList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForEachLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_forEachLoop;
    }

	FOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.FOR);
	    } else {
	        return this.getToken(PseudocodeParser.FOR, i);
	    }
	};


	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.ID);
	    } else {
	        return this.getToken(PseudocodeParser.ID, i);
	    }
	};


	IN() {
	    return this.getToken(PseudocodeParser.IN, 0);
	};

	COLON() {
	    return this.getToken(PseudocodeParser.COLON, 0);
	};

	END() {
	    return this.getToken(PseudocodeParser.END, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.NL);
	    } else {
	        return this.getToken(PseudocodeParser.NL, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterForEachLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitForEachLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitForEachLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_ifStatement;
    }

	IF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.IF);
	    } else {
	        return this.getToken(PseudocodeParser.IF, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	COLON() {
	    return this.getToken(PseudocodeParser.COLON, 0);
	};

	END() {
	    return this.getToken(PseudocodeParser.END, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PseudocodeParser.NL);
	    } else {
	        return this.getToken(PseudocodeParser.NL, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_returnStatement;
    }

	RETURN() {
	    return this.getToken(PseudocodeParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EqExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.op = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	EQEQ() {
	    return this.getToken(PseudocodeParser.EQEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterEqExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitEqExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitEqExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PseudocodeParser.EqExpressionContext = EqExpressionContext;

class AtomExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterAtomExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitAtomExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitAtomExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PseudocodeParser.AtomExpressionContext = AtomExpressionContext;

class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PseudocodeParser.RULE_atom;
    }

	ID() {
	    return this.getToken(PseudocodeParser.ID, 0);
	};

	INT() {
	    return this.getToken(PseudocodeParser.INT, 0);
	};

	NEG_INT() {
	    return this.getToken(PseudocodeParser.NEG_INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PseudocodeListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PseudocodeVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PseudocodeParser.ProgramContext = ProgramContext; 
PseudocodeParser.StatementContext = StatementContext; 
PseudocodeParser.AssignmentContext = AssignmentContext; 
PseudocodeParser.ArrayInitializationContext = ArrayInitializationContext; 
PseudocodeParser.FunctionDeclContext = FunctionDeclContext; 
PseudocodeParser.ParamListContext = ParamListContext; 
PseudocodeParser.ForEachLoopContext = ForEachLoopContext; 
PseudocodeParser.IfStatementContext = IfStatementContext; 
PseudocodeParser.ReturnStatementContext = ReturnStatementContext; 
PseudocodeParser.ExpressionContext = ExpressionContext; 
PseudocodeParser.AtomContext = AtomContext; 
