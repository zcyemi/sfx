grammar GLES;

@lexer::members {
   ignoreNewLine:boolean = true;
}

@parser::members {
   ignoreNewLine:boolean = true;
}


primary_expression:
	variable_identifier
	| INTCONSTANT
	| UINTCONSTANT
	| FLOATCONSTANT
	| BOOLCONSTANT
	| LEFT_PAREN expression RIGHT_PAREN;

postfix_expression:
	primary_expression
	| postfix_expression LEFT_BRACKET integer_expression RIGHT_BRACKET
	| postfix_expression DOT FIELD_SELECTION=variable_identifier
	| postfix_expression INC_OP
	| postfix_expression DEC_OP
	| function_call_generic
	;

integer_expression: expression;


function_call_generic:
	function_call_header_with_parameters RIGHT_PAREN
	| function_call_header_no_parameters RIGHT_PAREN;

function_call_header_no_parameters:
	function_call_header VOID
	| function_call_header;

function_call_header_with_parameters:
	function_call_header assignment_expression
	| function_call_header_with_parameters COMMA assignment_expression;

function_call_header: function_identifier LEFT_PAREN;

function_identifier: type_specifier FIELD_SELECTION=variable_identifier?;

unary_expression:
	postfix_expression
	| INC_OP unary_expression
	| DEC_OP unary_expression
	| unary_operator unary_expression;

unary_operator: PLUS | DASH | BANG | TILDE;

multiplicative_expression:
	unary_expression
	| multiplicative_expression STAR unary_expression
	| multiplicative_expression SLASH unary_expression
	| multiplicative_expression PERCENT unary_expression;

additive_expression:
	multiplicative_expression
	| additive_expression PLUS multiplicative_expression
	| additive_expression DASH multiplicative_expression;

shift_expression:
	additive_expression
	| shift_expression LEFT_OP additive_expression
	| shift_expression RIGHT_OP additive_expression;
relational_expression:
	shift_expression
	| relational_expression LEFT_ANGLE shift_expression
	| relational_expression RIGHT_ANGLE shift_expression
	| relational_expression LE_OP shift_expression
	| relational_expression GE_OP shift_expression;
equality_expression:
	relational_expression
	| equality_expression EQUAL relational_expression
	| equality_expression NE_OP relational_expression;

and_expression:
	equality_expression
	| and_expression AMPERSAND equality_expression;
exclusive_or_expression:
	and_expression
	| exclusive_or_expression CARET and_expression;
inclusive_or_expression:
	exclusive_or_expression
	| inclusive_or_expression VERTICAL_BAR exclusive_or_expression;
logical_and_expression:
	inclusive_or_expression
	| logical_and_expression AND_OP inclusive_or_expression;
logical_xor_expression:
	logical_and_expression
	| logical_xor_expression XOR_OP logical_and_expression;
logical_or_expression:
	logical_xor_expression
	| logical_or_expression OR_OP logical_xor_expression;
conditional_expression:
	logical_or_expression
	| logical_or_expression QUESTION expression COLON assignment_expression;
assignment_expression:
	conditional_expression
	| unary_expression assignment_operator assignment_expression;
assignment_operator:
	EQUAL
	| MUL_ASSIGN
	| DIV_ASSIGN
	| MOD_ASSIGN
	| ADD_ASSIGN
	| SUB_ASSIGN
	| LEFT_ASSIGN
	| RIGHT_ASSIGN
	| AND_ASSIGN
	| XOR_ASSIGN
	| OR_ASSIGN;
expression:
	assignment_expression
	| expression COMMA assignment_expression;

constant_expression: conditional_expression;
declaration:
	function_prototype SEMICOLON
	| init_declarator_list SEMICOLON
	| PRECISION precision_qualifier type_specifier SEMICOLON
	| type_qualifier IDENTIFIER LEFT_BRACE struct_declaration_list RIGHT_BRACE SEMICOLON
	| type_qualifier IDENTIFIER LEFT_BRACE struct_declaration_list RIGHT_BRACE IDENTIFIER
	| SEMICOLON
	| type_qualifier IDENTIFIER LEFT_BRACE struct_declaration_list RIGHT_BRACE IDENTIFIER
	| array_specifier SEMICOLON
	| type_qualifier SEMICOLON
	| type_qualifier IDENTIFIER SEMICOLON
	| type_qualifier IDENTIFIER identifier_list SEMICOLON;
identifier_list:
	COMMA IDENTIFIER
	| identifier_list COMMA IDENTIFIER;
function_prototype: function_declarator RIGHT_PAREN;
function_declarator:
	function_header
	| function_header_with_parameters;
function_header_with_parameters:
	function_header parameter_declaration
	| function_header_with_parameters COMMA parameter_declaration;
function_header: fully_specified_type IDENTIFIER LEFT_PAREN;
parameter_declarator:
	type_specifier IDENTIFIER
	| type_specifier IDENTIFIER array_specifier;

parameter_declaration:
	type_qualifier parameter_declarator
	| parameter_declarator
	| type_qualifier parameter_type_specifier
	| parameter_type_specifier;
parameter_type_specifier: type_specifier;

init_declarator_list:
	| single_declaration
	| init_declarator_list COMMA IDENTIFIER
	| init_declarator_list COMMA IDENTIFIER array_specifier
	| init_declarator_list COMMA IDENTIFIER array_specifier EQUAL initializer
	| init_declarator_list COMMA IDENTIFIER EQUAL initializer;
single_declaration:
	fully_specified_type
	| fully_specified_type IDENTIFIER
	| fully_specified_type IDENTIFIER array_specifier
	| fully_specified_type IDENTIFIER array_specifier EQUAL initializer
	| fully_specified_type IDENTIFIER EQUAL initializer;

fully_specified_type:
	type_specifier
	| type_qualifier type_specifier;
invariant_qualifier: INVARIANT;
interpolation_qualifier: SMOOTH | FLAT;

layout_qualifier:
	LAYOUT LEFT_PAREN layout_qualifier_id_list RIGHT_PAREN;
layout_qualifier_id_list:
	layout_qualifier_id
	| layout_qualifier_id_list COMMA layout_qualifier_id;
layout_qualifier_id:
	IDENTIFIER
	| IDENTIFIER EQUAL INTCONSTANT
	| IDENTIFIER EQUAL UINTCONSTANT
	| SHARED;
precise_qualifier: PRECISE;
type_qualifier:
	single_type_qualifier
	| type_qualifier single_type_qualifier;

single_type_qualifier:
	storage_qualifier
	| layout_qualifier
	| precision_qualifier
	| interpolation_qualifier
	| invariant_qualifier
	| precise_qualifier;

storage_qualifier:
	CONST
	| IN
	| OUT
	| INOUT
	| CENTROID
	| PATCH
	| SAMPLE
	| UNIFORM
	| BUFFER
	| SHARED
	| COHERENT
	| VOLATILE
	| RESTRICT
	| READONLY
	| WRITEONLY;

type_specifier:
	type_specifier_nonArray
	| type_specifier_nonArray array_specifier;
array_specifier:
	LEFT_BRACKET RIGHT_BRACKET
	| LEFT_BRACKET conditional_expression RIGHT_BRACKET
	| array_specifier LEFT_BRACKET RIGHT_BRACKET
	| array_specifier LEFT_BRACKET conditional_expression RIGHT_BRACKET;
type_specifier_nonArray:
	VOID
	| FLOAT
	| INT
	| UINT
	| BOOL
	| VEC2
	| VEC3
	| VEC4
	| BVEC2
	| BVEC3
	| BVEC4
	| IVEC2
	| IVEC3
	| IVEC4
	| UVEC2
	| UVEC3
	| UVEC4
	| MAT2
	| MAT3
	| MAT4
	| MAT2X2
	| MAT2X3
	| MAT2X4
	| MAT3X2
	| MAT3X3
	| MAT3X4
	| MAT4X2
	| MAT4X3
	| MAT4X4
	| ATOMIC_UINT
	| SAMPLER2D
	| SAMPLER3D
	| SAMPLERCUBE
	| SAMPLER2DSHADOW
	| SAMPLERCUBESHADOW
	| SAMPLER2DARRAY
	| SAMPLER2DARRAYSHADOW
	| SAMPLERCUBEARRAY
	| SAMPLERCUBEARRAYSHADOW
	| ISAMPLER2D
	| ISAMPLER3D
	| ISAMPLERCUBE
	| ISAMPLER2DARRAY
	| ISAMPLERCUBEARRAY
	| USAMPLER2D
	| USAMPLER3D
	| USAMPLERCUBE
	| USAMPLER2DARRAY
	| USAMPLERCUBEARRAY
	| SAMPLERBUFFER
	| ISAMPLERBUFFER
	| USAMPLERBUFFER
	| SAMPLER2DMS
	| ISAMPLER2DMS
	| USAMPLER2DMS
	| SAMPLER2DMSARRAY
	| ISAMPLER2DMSARRAY
	| USAMPLER2DMSARRAY
	| IMAGE2D
	| IIMAGE2D
	| UIMAGE2D
	| IMAGE3D
	| IIMAGE3D
	| UIMAGE3D
	| IMAGECUBE
	| IIMAGECUBE
	| UIMAGECUBE
	| IMAGEBUFFER
	| IIMAGEBUFFER
	| UIMAGEBUFFER
	| IMAGE2DARRAY
	| IIMAGE2DARRAY
	| UIMAGE2DARRAY
	| IMAGECUBEARRAY
	| IIMAGECUBEARRAY
	| UIMAGECUBEARRAY
	| struct_specifier
	| TYPE_NAME=variable_identifier;

precision_qualifier:
	HIGH_PRECISION
	| MEDIUM_PRECISION
	| LOW_PRECISION;

struct_specifier:
	STRUCT IDENTIFIER LEFT_BRACE struct_declaration_list RIGHT_BRACE
	| STRUCT LEFT_BRACE struct_declaration_list RIGHT_BRACE;
struct_declaration_list:
	struct_declaration
	| struct_declaration_list struct_declaration;
struct_declaration:
	type_specifier struct_declarator_list SEMICOLON
	| type_qualifier type_specifier struct_declarator_list SEMICOLON;
struct_declarator_list:
	struct_declarator
	| struct_declarator_list COMMA struct_declarator;
struct_declarator: IDENTIFIER | IDENTIFIER array_specifier;
initializer: assignment_expression;

declaration_statement: declaration;

statement: compound_statement | simple_statement;

simple_statement:
	declaration_statement
	| expression_statement
	| selection_statement
	| switch_statement
	| case_label
	| iteration_statement
	| jump_statement;
compound_statement:
	LEFT_BRACE RIGHT_BRACE
	| LEFT_BRACE statement_list RIGHT_BRACE;
statement_no_new_scope:
	compound_statement_no_new_scope
	| simple_statement;
compound_statement_no_new_scope:
	LEFT_BRACE RIGHT_BRACE
	| LEFT_BRACE statement_list RIGHT_BRACE;
statement_list: statement+;
expression_statement: SEMICOLON | expression SEMICOLON;
selection_statement:
	IF LEFT_PAREN expression RIGHT_PAREN selection_rest_statement;
selection_rest_statement: statement ELSE statement | statement;
condition:
	expression
	| fully_specified_type IDENTIFIER EQUAL initializer;

switch_statement:
	SWITCH LEFT_PAREN expression RIGHT_PAREN LEFT_BRACE switch_statement_list
	| RIGHT_BRACE;
switch_statement_list: statement_list;
case_label: CASE expression COLON | DEFAULT COLON;
iteration_statement:
	WHILE LEFT_PAREN condition RIGHT_PAREN statement_no_new_scope
	| DO statement WHILE LEFT_PAREN expression RIGHT_PAREN SEMICOLON
	| FOR LEFT_PAREN for_init_statement for_rest_statement RIGHT_PAREN statement_no_new_scope;
for_init_statement:
	expression_statement
	| declaration_statement;
conditionopt: condition;
/* empty */
for_rest_statement:
	conditionopt SEMICOLON
	| conditionopt SEMICOLON expression;
jump_statement:
	CONTINUE SEMICOLON
	| BREAK SEMICOLON
	| RETURN SEMICOLON
	| RETURN expression SEMICOLON
	| DISCARD SEMICOLON ; // Fragment shader only.

external_declaration: function_definition | declaration;
function_definition: function_prototype compound_statement_no_new_scope;

HIGH_PRECISION: 'highp';
MEDIUM_PRECISION: 'mediump';
LOW_PRECISION: 'lowp';
PRECISION: 'precision';
INVARIANT: 'invariant';
SMOOTH: 'smooth';
FLAT: 'flat';
LAYOUT: 'layout';
PRECISE: 'precise';

STRUCT: 'struct';
IF: 'if';
ELSE: 'else';
SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';
WHILE: 'while';
DO: 'do';
FOR: 'for';
CONTINUE: 'continue';
BREAK: 'break';
RETURN: 'return';
DISCARD: 'discard';

CONST: 'const';
IN: 'in';
OUT: 'out';
INOUT: 'inout';
CENTROID: 'centroid';
PATCH: 'patch';
SAMPLE: 'sample';
UNIFORM: 'uniform';
BUFFER: 'Buffer';
SHARED: 'shared';
COHERENT: 'coherent';
VOLATILE: 'volatile';
RESTRICT: 'restrict';
READONLY: 'readonly';
WRITEONLY: 'writeonly';

FLOAT: 'float';
INT: 'int';
UINT: 'uint';
BOOL: 'bool';
VEC2: 'vec2';
VEC3: 'vec3';
VEC4: 'vec4';
BVEC2: 'bvec2';
BVEC3: 'bvec3';
BVEC4: 'bvec4';
IVEC2: 'ivec2';
IVEC3: 'ivec3';
IVEC4: 'ivec4';

UVEC2: 'uvec2';
UVEC3: 'uvec3';
UVEC4: 'uvec4';
MAT2: 'mat2';
MAT3: 'mat3';
MAT4: 'mat4';
MAT2X2: 'mat2x2';
MAT2X3: 'mat2x3';
MAT2X4: 'mat2x4';
MAT3X2: 'mat3x2';
MAT3X3: 'mat3x3';
MAT3X4: 'mat3x4';
MAT4X2: 'mat4x2';
MAT4X3: 'mat4x3';
MAT4X4: 'mat4x4';
ATOMIC_UINT: 'atomic_uint';
SAMPLER2D: 'sampler2D';
SAMPLER3D: 'sampler3D';
SAMPLERCUBE: 'samplerCube';
SAMPLER2DSHADOW: 'sampler2DShadow';
SAMPLERCUBESHADOW: 'samplerCubeShadow';
SAMPLER2DARRAY: 'sampler2DArray';
SAMPLER2DARRAYSHADOW: 'sampler2DArrayShadow';
SAMPLERCUBEARRAY: 'samplerCubeArray';
SAMPLERCUBEARRAYSHADOW: 'samplerCubeArrayShadow';
ISAMPLER2D: 'isampler2D';
ISAMPLER3D: 'isampler3D';
ISAMPLERCUBE: 'isamplerCube';
ISAMPLER2DARRAY: 'isampler2DArray';
ISAMPLERCUBEARRAY: 'isamplerCubeArray';
USAMPLER2D: 'usampler2D';
USAMPLER3D: 'usampler3D';
USAMPLERCUBE: 'usamplerCube';
USAMPLER2DARRAY: 'usampler2DArray';
USAMPLERCUBEARRAY: 'usamplerCubeArray';
SAMPLERBUFFER: 'samplerBuffer';
ISAMPLERBUFFER: 'isamplerBuffer';
USAMPLERBUFFER: 'usamplerBuffer';
SAMPLER2DMS: 'sampler2DMS';
ISAMPLER2DMS: 'isampler2DMS';
USAMPLER2DMS: 'usampler2DMS';
SAMPLER2DMSARRAY: 'sampler2DMSArray';
ISAMPLER2DMSARRAY: 'isampler2DMSArray';
USAMPLER2DMSARRAY: 'usampler2DMSArray';
IMAGE2D: 'image2D';
IIMAGE2D: 'iimage2D';
UIMAGE2D: 'uimage2D';
IMAGE3D: 'image3D';
IIMAGE3D: 'iimage3D';
UIMAGE3D: 'uimage3D';
IMAGECUBE: 'imageCube';
IIMAGECUBE: 'iimageCube';
UIMAGECUBE: 'uimageCube';
IMAGEBUFFER: 'imageBuffer';
IIMAGEBUFFER: 'iimageBuffer';
UIMAGEBUFFER: 'uimageBuffer';
IMAGE2DARRAY: 'image2DArray';
IIMAGE2DARRAY: 'iimage2DArray';
UIMAGE2DARRAY: 'uimage2DArray';
IMAGECUBEARRAY: 'imageCubeArray';
IIMAGECUBEARRAY: 'iimageCubeArray';
UIMAGECUBEARRAY: 'uimageCubeArray';

LEFT_PAREN: '(';
RIGHT_PAREN: ')';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
SEMICOLON: ';';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
COMMA: ',';
COLON: ':';

DOT: '.';
EQUAL: '=';

MUL_ASSIGN: '*=';
DIV_ASSIGN: '/=';
MOD_ASSIGN: '%=';
ADD_ASSIGN: '+=';
SUB_ASSIGN: '-=';
LEFT_ASSIGN: '<<=';
RIGHT_ASSIGN: '>>=';
AND_ASSIGN: '&=';
XOR_ASSIGN: '^=';
OR_ASSIGN: '|=';

INC_OP: '++';
DEC_OP: '--';

PLUS: '+';
DASH: '-';
BANG: '!';
TILDE: '~';

STAR: '*';
SLASH: '/';
PERCENT: '%';
LEFT_OP: '<<';
RIGHT_OP: '>>';

NE_OP: '!=';

LEFT_ANGLE: '<';
RIGHT_ANGLE: '>';
LE_OP: '<=';
GE_OP: '>=';
AMPERSAND: '&';
CARET: '^';
VERTICAL_BAR: '|';
AND_OP: '&&';
XOR_OP: '^^';
OR_OP: '||';
QUESTION: '?';

VOID: 'void';

fragment DECIMAL_DIGITS: '0' | ('1' ..'9' DIGIT*);
fragment OCTAL_DIGITS: '0' '0' ..'7'+;
fragment HEX_DIGITS: '0x' (DIGIT | 'a' ..'f' | 'A' ..'F')+;
fragment DIGIT: '0' ..'9';

INTCONSTANT: DECIMAL_DIGITS | OCTAL_DIGITS | HEX_DIGITS;
UINTCONSTANT: (DECIMAL_DIGITS | OCTAL_DIGITS | HEX_DIGITS) 'u';
FLOATCONSTANT: ((DIGIT+ ('.' DIGIT*)?) | ('.' DIGIT+)) (
		('e' | 'E') ('+' | '-')? DIGIT*
	)? 'f'?;
BOOLCONSTANT: 'true' | 'false';

IDENTIFIER: ('a' ..'z' | 'A' ..'Z' | '_') (
		DIGIT
		| 'a' ..'z'
		| 'A' ..'Z'
		| '_'
	)*;

variable_identifier: IDENTIFIER;


COMMENT: ('//' ~('\n' | '\r')* '\r'? '\n' | '/*' (.)*? '*/') -> skip;
WS: [\t\r\u000C ]+ { this.skip(); };
EOL:
	'\n' { if(this.ignoreNewLine) { this.skip(); } this.ignoreNewLine = true; };


translation_unit: external_declaration*;