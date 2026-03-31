grammar Pseudocode;

// This rule is updated to use NL as a statement separator
program         : NL* statement (NL+ statement)* NL* EOF;

// Statements can now have optional metadata directives before them
statement       : metadata* (assignment | functionDecl | functionCallStmt | forEachLoop | ifStatement | whileLoop | returnStatement);

assignment      : ID EQ (expression | arrayInitialization);

arrayInitialization:
    ARR LBRACK from=INT TO to=INT RBRACK    # RangeArray
  | ARR LPAREN size=INT RPAREN             # SizeArray
  | ARR LBRACK INT (COMMA INT)* RBRACK     # ValueArray
  ;

// Metadata directive rule
metadata        : AT ID LT metadataParams GT;
metadataParams  : metadataParam (COMMA metadataParam)*;
metadataParam   : ID | INT | STRING;

// These block rules are updated to require newlines
functionDecl    : FUN ID LPAREN paramList? RPAREN COLON NL+ (statement (NL+ statement)*)? NL* END FUN;
paramList       : ID (COMMA ID)*;
forEachLoop     : FOR ID IN ID COLON NL+ (statement (NL+ statement)*)? NL* END FOR;
ifStatement : IF expression COLON NL+ (statement (NL+ statement)*)? NL*
              (ELSEIF expression COLON NL+ (statement (NL+ statement)*)? NL*)*
              (ELSE COLON NL+ (statement (NL+ statement)*)? NL*)?
              END IF;
whileLoop       : WHILE expression COLON NL+ (statement (NL+ statement)*)? NL* END WHILE;

// allows functions to be called inline
functionCallStmt : ID LPAREN expressionList? RPAREN;

returnStatement : RETURN expression;

expression
    : comparisonExpression
    ;

comparisonExpression
    : left=additiveExpression op=(EQEQ | LESS_EQ | GREATER_EQ) right=additiveExpression # CompareExpr
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

// Reserved names for standard types
TYPE_INT    : 'Integer' | 'integer';
TYPE_FLOAT  : 'float' | 'Float';
TYPE_STRING : 'string' | 'String';
TYPE_BOOL   : 'boolean' | 'Boolean';
TYPE_DOUBLE : 'double' | 'Double';

ARR     : 'arr';
TO      : 'to';
LBRACK  : '[';
RBRACK  : ']';
FUN     : 'fun';
FOR     : 'for';
IN      : 'in';
IF      : 'if';
ELSE    : 'else';
ELSEIF  : 'else if';
RETURN  : 'return';
END     : 'end';
WHILE   : 'while';
AND     : 'and';
OR      : 'or';
AT      : '@';
LT      : '<';
GT      : '>';

ID      : [a-zA-Z_][a-zA-Z_0-9]*;
INT     : [0-9]+;
STRING  : '"' (~["\r\n])* '"';

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
LESS_EQ : '<=';
GREATER_EQ : '>=';

NL      : '\r'? '\n' ; 
WS      : [ \t]+ -> skip;
// Skip comments if necessary (our standard mentions checking simple # or //)
COMMENT : ('#' | '//') ~[\r\n]* -> skip;