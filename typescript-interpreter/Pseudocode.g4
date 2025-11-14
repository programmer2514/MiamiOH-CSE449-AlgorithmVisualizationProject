grammar Pseudocode;

// This rule is updated to use NL as a statement separator
program         : NL* statement (NL+ statement)* NL* EOF;

statement       : assignment | functionDecl | forEachLoop | ifStatement | whileLoop | returnStatement;
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
whileLoop       : WHILE expression COLON NL+ (statement (NL+ statement)*)? NL* END WHILE;

returnStatement : RETURN expression;

expression
    : comparisonExpression
    ;

comparisonExpression
    : left=additiveExpression op=(EQEQ | LOW_THAN | GREATER_THAN | LESS_EQ | GREATER_EQ) right=additiveExpression # CompareExpr
    | additiveExpression # ComparisonPass
    ;

additiveExpression
    : left=multiplicativeExpression (op=(PLUS | MINUS) right=multiplicativeExpression)+ # AddExpr
    | multiplicativeExpression # AdditivePass
    ;

multiplicativeExpression
    : left=unaryExpression (op=(STAR | SLASH) right=unaryExpression)+ # MulExpr
    | unaryExpression # MultiplicativePass
    ;

unaryExpression
    : MINUS unaryExpression # UnaryMinusExpr
    | primaryExpression # UnaryPass
    ;

primaryExpression
    : LPAREN expression RPAREN         # ParenExpression
    | ID LPAREN expressionList? RPAREN # FunctionCallExpression
    | ID LBRACK expression RBRACK    # ArrayAccessExpression
    | atom                           # AtomExpression
    ;

expressionList
    : expression (COMMA expression)*
    ;

atom
    : ID | INT;

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
WHILE   : 'while';
ID      : [a-zA-Z_][a-zA-Z_0-9]*;
INT     : [0-9]+;

EQ      : '=';
EQEQ    : '==';
LPAREN  : '(';
RPAREN  : ')';
COLON   : ':';
COMMA   : ',';
PLUS    : '+';
MINUS   : '-';
STAR    : '*';
SLASH   : '/';
LOW_THAN : '<';
GREATER_THAN : '>';
LESS_EQ : '<=';
GREATER_EQ : '>=';

// --- LEXER CHANGES ARE HERE ---
// Newlines are now a dedicated token
NL      : '\r'? '\n' ; 
// Whitespace no longer includes newlines
WS      : [ \t]+ -> skip;