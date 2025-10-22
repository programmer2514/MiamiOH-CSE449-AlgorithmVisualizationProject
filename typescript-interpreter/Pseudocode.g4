grammar Pseudocode;

// This rule is updated to use NL as a statement separator
program         : NL* statement (NL+ statement)* NL* EOF;

statement       : assignment | functionDecl | forEachLoop | ifStatement | returnStatement;
assignment      : ID EQ (expression | arrayInitialization);

arrayInitialization:
    ARR LBRACK from=INT TO to=INT RBRACK    # RangeArray
  | ARR LPAREN size=INT RPAREN             # SizeArray
  | ARR LBRACK INT (COMMA INT)* RBRACK     # ValueArray
  ;

// These block rules are updated to require newlines
functionDecl    : FUN ID LPAREN paramList? RPAREN COLON NL+ (statement (NL+ statement)*)? NL* END FUN;
paramList       : ID (COMMA ID)*;
forEachLoop     : FOR ID IN ID COLON NL+ (statement (NL+ statement)*)? NL* END FOR;
ifStatement     : IF expression COLON NL+ (statement (NL+ statement)*)? NL* END IF;

returnStatement : RETURN expression;

expression      : left=expression op=EQEQ right=expression # EqExpression
                | atom                                     # AtomExpression
                ;

atom            : ID | INT | NEG_INT;

ARR     : 'arr';
TO      : 'to';
LBRACK  : '[';
RBRACK  : ']';
FUN     : 'fun';
FOR     : 'for';
IN      : 'in';
IF      : 'if';
RETURN  : 'return';
END     : 'end';

ID      : [a-zA-Z_][a-zA-Z_0-9]*;
INT     : [0-9]+;
NEG_INT : '-'[0-9]+;

EQ      : '=';
EQEQ    : '==';
LPAREN  : '(';
RPAREN  : ')';
COLON   : ':';
COMMA   : ',';

// --- LEXER CHANGES ARE HERE ---
// Newlines are now a dedicated token
NL      : '\r'? '\n' ; 
// Whitespace no longer includes newlines
WS      : [ \t]+ -> skip;