// Generated from ../../grammar/GLSL.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { GLSLListener } from "./GLSLListener";
import { GLSLVisitor } from "./GLSLVisitor";


export class GLSLParser extends Parser {
	public static readonly PREPROC_DEFINE = 1;
	public static readonly PREPROC_IF = 2;
	public static readonly PREPROC_IFDEF = 3;
	public static readonly PREPROC_IFNDEF = 4;
	public static readonly PREPROC_ELIF = 5;
	public static readonly PREPROC_UNDEF = 6;
	public static readonly PREPROC_ELSE = 7;
	public static readonly PREPROC_ENDIF = 8;
	public static readonly PREPROC_PREFIX = 9;
	public static readonly PRAGMA_DEBUG_ON = 10;
	public static readonly PRAGMA_DEBUG_OFF = 11;
	public static readonly PRAGMA_OPTIMIZE_ON = 12;
	public static readonly PRAGMA_OPTIMIZE_OFF = 13;
	public static readonly PRAGMA_INVARIANT_ALL = 14;
	public static readonly EXTENSION = 15;
	public static readonly COLON = 16;
	public static readonly UNIFORM = 17;
	public static readonly BUFFER = 18;
	public static readonly IN_TOK = 19;
	public static readonly OUT_TOK = 20;
	public static readonly INOUT_TOK = 21;
	public static readonly HIGHP = 22;
	public static readonly MEDIUMP = 23;
	public static readonly LOWP = 24;
	public static readonly PRECISION = 25;
	public static readonly VERSION = 26;
	public static readonly INTCONSTANT = 27;
	public static readonly CONST_TOK = 28;
	public static readonly PRECISE = 29;
	public static readonly INVARIANT = 30;
	public static readonly SMOOTH = 31;
	public static readonly FLAT = 32;
	public static readonly NOPERSPECTIVE = 33;
	public static readonly CENTROID = 34;
	public static readonly SAMPLE = 35;
	public static readonly ATTRIBUTE = 36;
	public static readonly COHERENT = 37;
	public static readonly VOLATILE = 38;
	public static readonly RESTRICT = 39;
	public static readonly VARYING = 40;
	public static readonly READONLY = 41;
	public static readonly WRITEONLY = 42;
	public static readonly SHARED = 43;
	public static readonly LAYOUT_TOK = 44;
	public static readonly UINTCONSTANT = 45;
	public static readonly ROW_MAJOR = 46;
	public static readonly PACKED_TOK = 47;
	public static readonly FLOATCONSTANT = 48;
	public static readonly BOOLCONSTANT = 49;
	public static readonly INC_OP = 50;
	public static readonly DEC_OP = 51;
	public static readonly VOID_TOK = 52;
	public static readonly FIELD_SELECTION = 53;
	public static readonly LEFT_OP = 54;
	public static readonly RIGHT_OP = 55;
	public static readonly LE_OP = 56;
	public static readonly GE_OP = 57;
	public static readonly EQ_OP = 58;
	public static readonly NE_OP = 59;
	public static readonly AND_OP = 60;
	public static readonly XOR_OP = 61;
	public static readonly OR_OP = 62;
	public static readonly MUL_ASSIGN = 63;
	public static readonly DIV_ASSIGN = 64;
	public static readonly MOD_ASSIGN = 65;
	public static readonly ADD_ASSIGN = 66;
	public static readonly SUB_ASSIGN = 67;
	public static readonly LEFT_ASSIGN = 68;
	public static readonly RIGHT_ASSIGN = 69;
	public static readonly AND_ASSIGN = 70;
	public static readonly XOR_ASSIGN = 71;
	public static readonly OR_ASSIGN = 72;
	public static readonly FLOAT_TOK = 73;
	public static readonly INT_TOK = 74;
	public static readonly UINT_TOK = 75;
	public static readonly BOOL_TOK = 76;
	public static readonly SAMPLERCUBE = 77;
	public static readonly SAMPLEREXTERNALOES = 78;
	public static readonly SAMPLERCUBESHADOW = 79;
	public static readonly SAMPLERBUFFER = 80;
	public static readonly SAMPLERCUBEARRAY = 81;
	public static readonly SAMPLERCUBEARRAYSHADOW = 82;
	public static readonly ISAMPLERCUBE = 83;
	public static readonly ISAMPLERBUFFER = 84;
	public static readonly ISAMPLERCUBEARRAY = 85;
	public static readonly USAMPLERCUBE = 86;
	public static readonly USAMPLERBUFFER = 87;
	public static readonly USAMPLERCUBEARRAY = 88;
	public static readonly IMAGECUBE = 89;
	public static readonly IMAGEBUFFER = 90;
	public static readonly IMAGECUBEARRAY = 91;
	public static readonly IIMAGECUBE = 92;
	public static readonly IIMAGEBUFFER = 93;
	public static readonly IIMAGECUBEARRAY = 94;
	public static readonly UIMAGECUBE = 95;
	public static readonly UIMAGEBUFFER = 96;
	public static readonly UIMAGECUBEARRAY = 97;
	public static readonly ATOMIC_UINT = 98;
	public static readonly STRUCT = 99;
	public static readonly IF = 100;
	public static readonly ELSE = 101;
	public static readonly SWITCH = 102;
	public static readonly CASE = 103;
	public static readonly DEFAULT = 104;
	public static readonly WHILE = 105;
	public static readonly DO = 106;
	public static readonly FOR = 107;
	public static readonly CONTINUE = 108;
	public static readonly BREAK = 109;
	public static readonly RETURN = 110;
	public static readonly DISCARD = 111;
	public static readonly VEC2 = 112;
	public static readonly VEC3 = 113;
	public static readonly VEC4 = 114;
	public static readonly BVEC2 = 115;
	public static readonly BVEC3 = 116;
	public static readonly BVEC4 = 117;
	public static readonly IVEC2 = 118;
	public static readonly IVEC3 = 119;
	public static readonly IVEC4 = 120;
	public static readonly UVEC2 = 121;
	public static readonly UVEC3 = 122;
	public static readonly UVEC4 = 123;
	public static readonly MAT2X2 = 124;
	public static readonly MAT2X3 = 125;
	public static readonly MAT2X4 = 126;
	public static readonly MAT3X2 = 127;
	public static readonly MAT3X3 = 128;
	public static readonly MAT3X4 = 129;
	public static readonly MAT4X2 = 130;
	public static readonly MAT4X3 = 131;
	public static readonly MAT4X4 = 132;
	public static readonly IMAGE1D = 133;
	public static readonly IMAGE2D = 134;
	public static readonly IMAGE3D = 135;
	public static readonly UIMAGE1D = 136;
	public static readonly UIMAGE2D = 137;
	public static readonly UIMAGE3D = 138;
	public static readonly IIMAGE1D = 139;
	public static readonly IIMAGE2D = 140;
	public static readonly IIMAGE3D = 141;
	public static readonly SAMPLER1D = 142;
	public static readonly SAMPLER2D = 143;
	public static readonly SAMPLER3D = 144;
	public static readonly SAMPLER2DRECT = 145;
	public static readonly SAMPLER1DSHADOW = 146;
	public static readonly SAMPLER2DSHADOW = 147;
	public static readonly SAMPLER2DRECTSHADOW = 148;
	public static readonly SAMPLER1DARRAY = 149;
	public static readonly SAMPLER2DARRAY = 150;
	public static readonly SAMPLER1DARRAYSHADOW = 151;
	public static readonly SAMPLER2DARRAYSHADOW = 152;
	public static readonly ISAMPLER1D = 153;
	public static readonly ISAMPLER2D = 154;
	public static readonly ISAMPLER2DRECT = 155;
	public static readonly ISAMPLER3D = 156;
	public static readonly ISAMPLER1DARRAY = 157;
	public static readonly ISAMPLER2DARRAY = 158;
	public static readonly USAMPLER1D = 159;
	public static readonly USAMPLER2D = 160;
	public static readonly USAMPLER2DRECT = 161;
	public static readonly USAMPLER3D = 162;
	public static readonly USAMPLER1DARRAY = 163;
	public static readonly USAMPLER2DARRAY = 164;
	public static readonly SAMPLER2DMS = 165;
	public static readonly ISAMPLER2DMS = 166;
	public static readonly USAMPLER2DMS = 167;
	public static readonly SAMPLER2DMSARRAY = 168;
	public static readonly ISAMPLER2DMSARRAY = 169;
	public static readonly USAMPLER2DMSARRAY = 170;
	public static readonly IMAGE2DRECT = 171;
	public static readonly IMAGE1DARRAY = 172;
	public static readonly IMAGE2DARRAY = 173;
	public static readonly IMAGE2DMS = 174;
	public static readonly IMAGE2DMSARRAY = 175;
	public static readonly IIMAGE2DRECT = 176;
	public static readonly IIMAGE1DARRAY = 177;
	public static readonly IIMAGE2DARRAY = 178;
	public static readonly IIMAGE2DMS = 179;
	public static readonly IIMAGE2DMSARRAY = 180;
	public static readonly UIMAGE2DRECT = 181;
	public static readonly UIMAGE1DARRAY = 182;
	public static readonly UIMAGE2DARRAY = 183;
	public static readonly UIMAGE2DMS = 184;
	public static readonly UIMAGE2DMSARRAY = 185;
	public static readonly LPAREN = 186;
	public static readonly RPAREN = 187;
	public static readonly LBRACE = 188;
	public static readonly RBRACE = 189;
	public static readonly SEMICOLON = 190;
	public static readonly LBRACKET = 191;
	public static readonly RBRACKET = 192;
	public static readonly COMMA = 193;
	public static readonly DOT = 194;
	public static readonly PLUS_OP = 195;
	public static readonly MINUS_OP = 196;
	public static readonly NOT_OP = 197;
	public static readonly BNEG_OP = 198;
	public static readonly TIMES_OP = 199;
	public static readonly DIV_OP = 200;
	public static readonly MOD_OP = 201;
	public static readonly LT_OP = 202;
	public static readonly GT_OP = 203;
	public static readonly BAND_OP = 204;
	public static readonly BOR_OP = 205;
	public static readonly BXOR_OP = 206;
	public static readonly QUERY_OP = 207;
	public static readonly ASSIGN_OP = 208;
	public static readonly IDENTIFIER = 209;
	public static readonly TYPE_NAME = 210;
	public static readonly COMMENT = 211;
	public static readonly WS = 212;
	public static readonly EOL = 213;
	public static readonly RULE_pragma_statement = 0;
	public static readonly RULE_extension_statement = 1;
	public static readonly RULE_external_declaration_list = 2;
	public static readonly RULE_variable_identifier = 3;
	public static readonly RULE_primary_expression = 4;
	public static readonly RULE_postfix_expression = 5;
	public static readonly RULE_integer_expression = 6;
	public static readonly RULE_function_call_generic = 7;
	public static readonly RULE_function_call_header_no_parameters = 8;
	public static readonly RULE_function_call_header_with_parameters = 9;
	public static readonly RULE_function_call_header = 10;
	public static readonly RULE_function_identifier = 11;
	public static readonly RULE_method_call_generic = 12;
	public static readonly RULE_method_call_header_no_parameters = 13;
	public static readonly RULE_method_call_header_with_parameters = 14;
	public static readonly RULE_method_call_header = 15;
	public static readonly RULE_unary_expression = 16;
	public static readonly RULE_unary_operator = 17;
	public static readonly RULE_multiplicative_expression = 18;
	public static readonly RULE_additive_expression = 19;
	public static readonly RULE_shift_expression = 20;
	public static readonly RULE_relational_expression = 21;
	public static readonly RULE_equality_expression = 22;
	public static readonly RULE_and_expression = 23;
	public static readonly RULE_exclusive_or_expression = 24;
	public static readonly RULE_inclusive_or_expression = 25;
	public static readonly RULE_logical_and_expression = 26;
	public static readonly RULE_logical_xor_expression = 27;
	public static readonly RULE_logical_or_expression = 28;
	public static readonly RULE_conditional_expression = 29;
	public static readonly RULE_assignment_expression = 30;
	public static readonly RULE_assignment_operator = 31;
	public static readonly RULE_expression = 32;
	public static readonly RULE_constant_expression = 33;
	public static readonly RULE_declaration = 34;
	public static readonly RULE_function_prototype = 35;
	public static readonly RULE_function_declarator = 36;
	public static readonly RULE_function_header_with_parameters = 37;
	public static readonly RULE_function_header = 38;
	public static readonly RULE_parameter_declarator = 39;
	public static readonly RULE_parameter_declaration = 40;
	public static readonly RULE_parameter_qualifier = 41;
	public static readonly RULE_parameter_direction_qualifier = 42;
	public static readonly RULE_parameter_type_specifier = 43;
	public static readonly RULE_init_declarator_list = 44;
	public static readonly RULE_single_declaration = 45;
	public static readonly RULE_fully_specified_type = 46;
	public static readonly RULE_layout_qualifier = 47;
	public static readonly RULE_layout_qualifier_id_list = 48;
	public static readonly RULE_integer_constant = 49;
	public static readonly RULE_layout_qualifier_id = 50;
	public static readonly RULE_interface_block_layout_qualifier = 51;
	public static readonly RULE_interpolation_qualifier = 52;
	public static readonly RULE_type_qualifier = 53;
	public static readonly RULE_auxiliary_storage_qualifier = 54;
	public static readonly RULE_storage_qualifier = 55;
	public static readonly RULE_array_specifier = 56;
	public static readonly RULE_type_specifier = 57;
	public static readonly RULE_type_specifier_nonarray = 58;
	public static readonly RULE_builtin_type_specifier_nonarray = 59;
	public static readonly RULE_precision_qualifier = 60;
	public static readonly RULE_struct_specifier = 61;
	public static readonly RULE_member_list = 62;
	public static readonly RULE_member_declaration = 63;
	public static readonly RULE_struct_declarator_list = 64;
	public static readonly RULE_struct_declarator = 65;
	public static readonly RULE_initializer = 66;
	public static readonly RULE_initializer_list = 67;
	public static readonly RULE_declaration_statement = 68;
	public static readonly RULE_statement = 69;
	public static readonly RULE_simple_statement = 70;
	public static readonly RULE_compound_statement = 71;
	public static readonly RULE_statement_no_new_scope = 72;
	public static readonly RULE_compound_statement_no_new_scope = 73;
	public static readonly RULE_statement_list = 74;
	public static readonly RULE_expression_statement = 75;
	public static readonly RULE_selection_statement = 76;
	public static readonly RULE_selection_rest_statement = 77;
	public static readonly RULE_condition = 78;
	public static readonly RULE_switch_statement = 79;
	public static readonly RULE_switch_body = 80;
	public static readonly RULE_case_label = 81;
	public static readonly RULE_case_label_list = 82;
	public static readonly RULE_case_statement = 83;
	public static readonly RULE_case_statement_list = 84;
	public static readonly RULE_iteration_statement = 85;
	public static readonly RULE_for_init_statement = 86;
	public static readonly RULE_conditionopt = 87;
	public static readonly RULE_for_rest_statement = 88;
	public static readonly RULE_jump_statement = 89;
	public static readonly RULE_external_declaration = 90;
	public static readonly RULE_function_definition = 91;
	public static readonly RULE_interface_block = 92;
	public static readonly RULE_basic_interface_block = 93;
	public static readonly RULE_interface_qualifier = 94;
	public static readonly RULE_instance_name_opt = 95;
	public static readonly RULE_layout_defaults = 96;
	public static readonly RULE_preprocessor_statement = 97;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"pragma_statement", "extension_statement", "external_declaration_list", 
		"variable_identifier", "primary_expression", "postfix_expression", "integer_expression", 
		"function_call_generic", "function_call_header_no_parameters", "function_call_header_with_parameters", 
		"function_call_header", "function_identifier", "method_call_generic", 
		"method_call_header_no_parameters", "method_call_header_with_parameters", 
		"method_call_header", "unary_expression", "unary_operator", "multiplicative_expression", 
		"additive_expression", "shift_expression", "relational_expression", "equality_expression", 
		"and_expression", "exclusive_or_expression", "inclusive_or_expression", 
		"logical_and_expression", "logical_xor_expression", "logical_or_expression", 
		"conditional_expression", "assignment_expression", "assignment_operator", 
		"expression", "constant_expression", "declaration", "function_prototype", 
		"function_declarator", "function_header_with_parameters", "function_header", 
		"parameter_declarator", "parameter_declaration", "parameter_qualifier", 
		"parameter_direction_qualifier", "parameter_type_specifier", "init_declarator_list", 
		"single_declaration", "fully_specified_type", "layout_qualifier", "layout_qualifier_id_list", 
		"integer_constant", "layout_qualifier_id", "interface_block_layout_qualifier", 
		"interpolation_qualifier", "type_qualifier", "auxiliary_storage_qualifier", 
		"storage_qualifier", "array_specifier", "type_specifier", "type_specifier_nonarray", 
		"builtin_type_specifier_nonarray", "precision_qualifier", "struct_specifier", 
		"member_list", "member_declaration", "struct_declarator_list", "struct_declarator", 
		"initializer", "initializer_list", "declaration_statement", "statement", 
		"simple_statement", "compound_statement", "statement_no_new_scope", "compound_statement_no_new_scope", 
		"statement_list", "expression_statement", "selection_statement", "selection_rest_statement", 
		"condition", "switch_statement", "switch_body", "case_label", "case_label_list", 
		"case_statement", "case_statement_list", "iteration_statement", "for_init_statement", 
		"conditionopt", "for_rest_statement", "jump_statement", "external_declaration", 
		"function_definition", "interface_block", "basic_interface_block", "interface_qualifier", 
		"instance_name_opt", "layout_defaults", "preprocessor_statement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "':'", "'uniform'", "'buffer'", "'in'", "'out'", 
		"'inout'", "'highp'", "'mediump'", "'lowp'", "'precision'", undefined, 
		undefined, "'const'", "'precise'", "'invariant'", "'smooth'", "'flat'", 
		"'noperspective'", "'centroid'", "'sample'", "'attribute'", "'coherent'", 
		"'volatile'", "'restrict'", "'varying'", "'readonly'", "'writeonly'", 
		"'shared'", "'layout'", undefined, "'row_major'", "'packed'", undefined, 
		undefined, "'++'", "'--'", "'void'", "'C_TODO'", "'<<'", "'>>'", "'<='", 
		"'>='", "'=='", "'!='", "'&&'", "'^^'", "'||'", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'float'", "'int'", 
		"'uint'", "'bool'", "'samplerCube'", "'samplerExternalOES'", "'samplerCubeShadow'", 
		"'samplerBuffer'", "'samplerCubeArray'", "'samplerCubeArrayShadow'", "'isamplerCube'", 
		"'isamplerBuffer'", "'isamplerCubeArray'", "'usamplerCube'", "'usamplerBuffer'", 
		"'usamplerCubeArray'", "'imageCube'", "'imageBuffer'", "'imageCubeArray'", 
		"'iimageCube'", "'iimageBuffer'", "'iimageCubeArray'", "'uimageCube'", 
		"'uimageBuffer'", "'uimageCubeArray'", "'atomic_uint'", "'struct'", "'if'", 
		"'else'", "'switch'", "'case'", "'default'", "'while'", "'do'", "'for'", 
		"'continue'", "'break'", "'return'", "'discard'", "'vec2'", "'vec3'", 
		"'vec4'", "'bvec2'", "'bvec3'", "'bvec4'", "'ivec2'", "'ivec3'", "'ivec4'", 
		"'uvec2'", "'uvec3'", "'uvec4'", undefined, "'mat2x3'", "'mat2x4'", "'mat3x2'", 
		undefined, "'mat3x4'", "'mat4x2'", "'mat4x3'", undefined, "'image1D'", 
		"'image2D'", "'image3D'", "'uimage1D'", "'uimage2D'", "'uimage3D'", "'iimage1D'", 
		"'iimage2D'", "'iimage3D'", "'sampler1D'", "'sampler2D'", "'sampler3D'", 
		"'sampler2DRect'", "'sampler1DShadow'", "'sampler2DShadow'", "'sampler2DRectShadow'", 
		"'sampler1DArray'", "'sampler2DArray'", "'sampler1DArrayShadow'", "'sampler2DArrayShadow'", 
		"'isampler1D'", "'isampler2D'", "'isampler2DRect'", "'isampler3D'", "'isampler1DArray'", 
		"'isampler2DArray'", "'usampler1D'", "'usampler2D'", "'usampler2DRect'", 
		"'usampler3D'", "'usampler1DArray'", "'usampler2DArray'", "'sampler2DMS'", 
		"'isampler2DMS'", "'usampler2DMS'", "'sampler2DMSArray'", "'isampler2DMSArray'", 
		"'usampler2DMSArray'", "'image2DRect'", "'image1DArray'", "'image2DArray'", 
		"'image2DMS'", "'image2DMSArray'", "'iimage2DRect'", "'iimage1DArray'", 
		"'iimage2DArray'", "'iimage2DMS'", "'iimage2DMSArray'", "'uimage2DRect'", 
		"'uimage1DArray'", "'uimage2DArray'", "'uimage2DMS'", "'uimage2DMSArray'", 
		"'('", "')'", "'{'", "'}'", "';'", "'['", "']'", "','", "'.'", "'+'", 
		"'-'", "'!'", "'~'", "'*'", "'/'", "'%'", "'<'", "'>'", "'&'", "'|'", 
		"'^'", "'?'", "'='", undefined, undefined, undefined, undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PREPROC_DEFINE", "PREPROC_IF", "PREPROC_IFDEF", "PREPROC_IFNDEF", 
		"PREPROC_ELIF", "PREPROC_UNDEF", "PREPROC_ELSE", "PREPROC_ENDIF", "PREPROC_PREFIX", 
		"PRAGMA_DEBUG_ON", "PRAGMA_DEBUG_OFF", "PRAGMA_OPTIMIZE_ON", "PRAGMA_OPTIMIZE_OFF", 
		"PRAGMA_INVARIANT_ALL", "EXTENSION", "COLON", "UNIFORM", "BUFFER", "IN_TOK", 
		"OUT_TOK", "INOUT_TOK", "HIGHP", "MEDIUMP", "LOWP", "PRECISION", "VERSION", 
		"INTCONSTANT", "CONST_TOK", "PRECISE", "INVARIANT", "SMOOTH", "FLAT", 
		"NOPERSPECTIVE", "CENTROID", "SAMPLE", "ATTRIBUTE", "COHERENT", "VOLATILE", 
		"RESTRICT", "VARYING", "READONLY", "WRITEONLY", "SHARED", "LAYOUT_TOK", 
		"UINTCONSTANT", "ROW_MAJOR", "PACKED_TOK", "FLOATCONSTANT", "BOOLCONSTANT", 
		"INC_OP", "DEC_OP", "VOID_TOK", "FIELD_SELECTION", "LEFT_OP", "RIGHT_OP", 
		"LE_OP", "GE_OP", "EQ_OP", "NE_OP", "AND_OP", "XOR_OP", "OR_OP", "MUL_ASSIGN", 
		"DIV_ASSIGN", "MOD_ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", "LEFT_ASSIGN", 
		"RIGHT_ASSIGN", "AND_ASSIGN", "XOR_ASSIGN", "OR_ASSIGN", "FLOAT_TOK", 
		"INT_TOK", "UINT_TOK", "BOOL_TOK", "SAMPLERCUBE", "SAMPLEREXTERNALOES", 
		"SAMPLERCUBESHADOW", "SAMPLERBUFFER", "SAMPLERCUBEARRAY", "SAMPLERCUBEARRAYSHADOW", 
		"ISAMPLERCUBE", "ISAMPLERBUFFER", "ISAMPLERCUBEARRAY", "USAMPLERCUBE", 
		"USAMPLERBUFFER", "USAMPLERCUBEARRAY", "IMAGECUBE", "IMAGEBUFFER", "IMAGECUBEARRAY", 
		"IIMAGECUBE", "IIMAGEBUFFER", "IIMAGECUBEARRAY", "UIMAGECUBE", "UIMAGEBUFFER", 
		"UIMAGECUBEARRAY", "ATOMIC_UINT", "STRUCT", "IF", "ELSE", "SWITCH", "CASE", 
		"DEFAULT", "WHILE", "DO", "FOR", "CONTINUE", "BREAK", "RETURN", "DISCARD", 
		"VEC2", "VEC3", "VEC4", "BVEC2", "BVEC3", "BVEC4", "IVEC2", "IVEC3", "IVEC4", 
		"UVEC2", "UVEC3", "UVEC4", "MAT2X2", "MAT2X3", "MAT2X4", "MAT3X2", "MAT3X3", 
		"MAT3X4", "MAT4X2", "MAT4X3", "MAT4X4", "IMAGE1D", "IMAGE2D", "IMAGE3D", 
		"UIMAGE1D", "UIMAGE2D", "UIMAGE3D", "IIMAGE1D", "IIMAGE2D", "IIMAGE3D", 
		"SAMPLER1D", "SAMPLER2D", "SAMPLER3D", "SAMPLER2DRECT", "SAMPLER1DSHADOW", 
		"SAMPLER2DSHADOW", "SAMPLER2DRECTSHADOW", "SAMPLER1DARRAY", "SAMPLER2DARRAY", 
		"SAMPLER1DARRAYSHADOW", "SAMPLER2DARRAYSHADOW", "ISAMPLER1D", "ISAMPLER2D", 
		"ISAMPLER2DRECT", "ISAMPLER3D", "ISAMPLER1DARRAY", "ISAMPLER2DARRAY", 
		"USAMPLER1D", "USAMPLER2D", "USAMPLER2DRECT", "USAMPLER3D", "USAMPLER1DARRAY", 
		"USAMPLER2DARRAY", "SAMPLER2DMS", "ISAMPLER2DMS", "USAMPLER2DMS", "SAMPLER2DMSARRAY", 
		"ISAMPLER2DMSARRAY", "USAMPLER2DMSARRAY", "IMAGE2DRECT", "IMAGE1DARRAY", 
		"IMAGE2DARRAY", "IMAGE2DMS", "IMAGE2DMSARRAY", "IIMAGE2DRECT", "IIMAGE1DARRAY", 
		"IIMAGE2DARRAY", "IIMAGE2DMS", "IIMAGE2DMSARRAY", "UIMAGE2DRECT", "UIMAGE1DARRAY", 
		"UIMAGE2DARRAY", "UIMAGE2DMS", "UIMAGE2DMSARRAY", "LPAREN", "RPAREN", 
		"LBRACE", "RBRACE", "SEMICOLON", "LBRACKET", "RBRACKET", "COMMA", "DOT", 
		"PLUS_OP", "MINUS_OP", "NOT_OP", "BNEG_OP", "TIMES_OP", "DIV_OP", "MOD_OP", 
		"LT_OP", "GT_OP", "BAND_OP", "BOR_OP", "BXOR_OP", "QUERY_OP", "ASSIGN_OP", 
		"IDENTIFIER", "TYPE_NAME", "COMMENT", "WS", "EOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GLSLParser._LITERAL_NAMES, GLSLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GLSLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GLSL.g4"; }

	// @Override
	public get ruleNames(): string[] { return GLSLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GLSLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GLSLParser._ATN, this);
	}
	// @RuleVersion(0)
	public pragma_statement(): Pragma_statementContext {
		let _localctx: Pragma_statementContext = new Pragma_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GLSLParser.RULE_pragma_statement);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.PRAGMA_DEBUG_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.match(GLSLParser.PRAGMA_DEBUG_ON);
				this.state = 197;
				this.match(GLSLParser.EOL);
				}
				break;
			case GLSLParser.PRAGMA_DEBUG_OFF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.match(GLSLParser.PRAGMA_DEBUG_OFF);
				this.state = 199;
				this.match(GLSLParser.EOL);
				}
				break;
			case GLSLParser.PRAGMA_OPTIMIZE_ON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 200;
				this.match(GLSLParser.PRAGMA_OPTIMIZE_ON);
				this.state = 201;
				this.match(GLSLParser.EOL);
				}
				break;
			case GLSLParser.PRAGMA_OPTIMIZE_OFF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 202;
				this.match(GLSLParser.PRAGMA_OPTIMIZE_OFF);
				this.state = 203;
				this.match(GLSLParser.EOL);
				}
				break;
			case GLSLParser.PRAGMA_INVARIANT_ALL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 204;
				this.match(GLSLParser.PRAGMA_INVARIANT_ALL);
				this.state = 205;
				this.match(GLSLParser.EOL);
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
	public extension_statement(): Extension_statementContext {
		let _localctx: Extension_statementContext = new Extension_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GLSLParser.RULE_extension_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(GLSLParser.EXTENSION);
			this.state = 209;
			_localctx._extension_name = this.match(GLSLParser.IDENTIFIER);
			this.state = 210;
			this.match(GLSLParser.COLON);
			this.state = 211;
			_localctx._extension_status = this.match(GLSLParser.IDENTIFIER);
			this.state = 212;
			this.match(GLSLParser.EOL);
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
	public external_declaration_list(): External_declaration_listContext {
		let _localctx: External_declaration_listContext = new External_declaration_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GLSLParser.RULE_external_declaration_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 214;
				this.external_declaration();
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GLSLParser.PREPROC_DEFINE) | (1 << GLSLParser.PREPROC_IF) | (1 << GLSLParser.PREPROC_IFDEF) | (1 << GLSLParser.PREPROC_IFNDEF) | (1 << GLSLParser.PREPROC_ELIF) | (1 << GLSLParser.PREPROC_UNDEF) | (1 << GLSLParser.PREPROC_ELSE) | (1 << GLSLParser.PREPROC_ENDIF) | (1 << GLSLParser.PRAGMA_DEBUG_ON) | (1 << GLSLParser.PRAGMA_DEBUG_OFF) | (1 << GLSLParser.PRAGMA_OPTIMIZE_ON) | (1 << GLSLParser.PRAGMA_OPTIMIZE_OFF) | (1 << GLSLParser.PRAGMA_INVARIANT_ALL) | (1 << GLSLParser.EXTENSION) | (1 << GLSLParser.UNIFORM) | (1 << GLSLParser.BUFFER) | (1 << GLSLParser.IN_TOK) | (1 << GLSLParser.OUT_TOK) | (1 << GLSLParser.HIGHP) | (1 << GLSLParser.MEDIUMP) | (1 << GLSLParser.LOWP) | (1 << GLSLParser.PRECISION) | (1 << GLSLParser.CONST_TOK) | (1 << GLSLParser.PRECISE) | (1 << GLSLParser.INVARIANT) | (1 << GLSLParser.SMOOTH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GLSLParser.FLAT - 32)) | (1 << (GLSLParser.NOPERSPECTIVE - 32)) | (1 << (GLSLParser.CENTROID - 32)) | (1 << (GLSLParser.SAMPLE - 32)) | (1 << (GLSLParser.ATTRIBUTE - 32)) | (1 << (GLSLParser.COHERENT - 32)) | (1 << (GLSLParser.VOLATILE - 32)) | (1 << (GLSLParser.RESTRICT - 32)) | (1 << (GLSLParser.VARYING - 32)) | (1 << (GLSLParser.READONLY - 32)) | (1 << (GLSLParser.WRITEONLY - 32)) | (1 << (GLSLParser.SHARED - 32)) | (1 << (GLSLParser.LAYOUT_TOK - 32)) | (1 << (GLSLParser.VOID_TOK - 32)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (GLSLParser.FLOAT_TOK - 73)) | (1 << (GLSLParser.INT_TOK - 73)) | (1 << (GLSLParser.UINT_TOK - 73)) | (1 << (GLSLParser.BOOL_TOK - 73)) | (1 << (GLSLParser.SAMPLERCUBE - 73)) | (1 << (GLSLParser.SAMPLEREXTERNALOES - 73)) | (1 << (GLSLParser.SAMPLERCUBESHADOW - 73)) | (1 << (GLSLParser.SAMPLERBUFFER - 73)) | (1 << (GLSLParser.SAMPLERCUBEARRAY - 73)) | (1 << (GLSLParser.SAMPLERCUBEARRAYSHADOW - 73)) | (1 << (GLSLParser.ISAMPLERCUBE - 73)) | (1 << (GLSLParser.ISAMPLERBUFFER - 73)) | (1 << (GLSLParser.ISAMPLERCUBEARRAY - 73)) | (1 << (GLSLParser.USAMPLERCUBE - 73)) | (1 << (GLSLParser.USAMPLERBUFFER - 73)) | (1 << (GLSLParser.USAMPLERCUBEARRAY - 73)) | (1 << (GLSLParser.IMAGECUBE - 73)) | (1 << (GLSLParser.IMAGEBUFFER - 73)) | (1 << (GLSLParser.IMAGECUBEARRAY - 73)) | (1 << (GLSLParser.IIMAGECUBE - 73)) | (1 << (GLSLParser.IIMAGEBUFFER - 73)) | (1 << (GLSLParser.IIMAGECUBEARRAY - 73)) | (1 << (GLSLParser.UIMAGECUBE - 73)) | (1 << (GLSLParser.UIMAGEBUFFER - 73)) | (1 << (GLSLParser.UIMAGECUBEARRAY - 73)) | (1 << (GLSLParser.ATOMIC_UINT - 73)) | (1 << (GLSLParser.STRUCT - 73)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (GLSLParser.VEC2 - 112)) | (1 << (GLSLParser.VEC3 - 112)) | (1 << (GLSLParser.VEC4 - 112)) | (1 << (GLSLParser.BVEC2 - 112)) | (1 << (GLSLParser.BVEC3 - 112)) | (1 << (GLSLParser.BVEC4 - 112)) | (1 << (GLSLParser.IVEC2 - 112)) | (1 << (GLSLParser.IVEC3 - 112)) | (1 << (GLSLParser.IVEC4 - 112)) | (1 << (GLSLParser.UVEC2 - 112)) | (1 << (GLSLParser.UVEC3 - 112)) | (1 << (GLSLParser.UVEC4 - 112)) | (1 << (GLSLParser.MAT2X2 - 112)) | (1 << (GLSLParser.MAT2X3 - 112)) | (1 << (GLSLParser.MAT2X4 - 112)) | (1 << (GLSLParser.MAT3X2 - 112)) | (1 << (GLSLParser.MAT3X3 - 112)) | (1 << (GLSLParser.MAT3X4 - 112)) | (1 << (GLSLParser.MAT4X2 - 112)) | (1 << (GLSLParser.MAT4X3 - 112)) | (1 << (GLSLParser.MAT4X4 - 112)) | (1 << (GLSLParser.IMAGE1D - 112)) | (1 << (GLSLParser.IMAGE2D - 112)) | (1 << (GLSLParser.IMAGE3D - 112)) | (1 << (GLSLParser.UIMAGE1D - 112)) | (1 << (GLSLParser.UIMAGE2D - 112)) | (1 << (GLSLParser.UIMAGE3D - 112)) | (1 << (GLSLParser.IIMAGE1D - 112)) | (1 << (GLSLParser.IIMAGE2D - 112)) | (1 << (GLSLParser.IIMAGE3D - 112)) | (1 << (GLSLParser.SAMPLER1D - 112)) | (1 << (GLSLParser.SAMPLER2D - 112)))) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & ((1 << (GLSLParser.SAMPLER3D - 144)) | (1 << (GLSLParser.SAMPLER2DRECT - 144)) | (1 << (GLSLParser.SAMPLER1DSHADOW - 144)) | (1 << (GLSLParser.SAMPLER2DSHADOW - 144)) | (1 << (GLSLParser.SAMPLER2DRECTSHADOW - 144)) | (1 << (GLSLParser.SAMPLER1DARRAY - 144)) | (1 << (GLSLParser.SAMPLER2DARRAY - 144)) | (1 << (GLSLParser.SAMPLER1DARRAYSHADOW - 144)) | (1 << (GLSLParser.SAMPLER2DARRAYSHADOW - 144)) | (1 << (GLSLParser.ISAMPLER1D - 144)) | (1 << (GLSLParser.ISAMPLER2D - 144)) | (1 << (GLSLParser.ISAMPLER2DRECT - 144)) | (1 << (GLSLParser.ISAMPLER3D - 144)) | (1 << (GLSLParser.ISAMPLER1DARRAY - 144)) | (1 << (GLSLParser.ISAMPLER2DARRAY - 144)) | (1 << (GLSLParser.USAMPLER1D - 144)) | (1 << (GLSLParser.USAMPLER2D - 144)) | (1 << (GLSLParser.USAMPLER2DRECT - 144)) | (1 << (GLSLParser.USAMPLER3D - 144)) | (1 << (GLSLParser.USAMPLER1DARRAY - 144)) | (1 << (GLSLParser.USAMPLER2DARRAY - 144)) | (1 << (GLSLParser.SAMPLER2DMS - 144)) | (1 << (GLSLParser.ISAMPLER2DMS - 144)) | (1 << (GLSLParser.USAMPLER2DMS - 144)) | (1 << (GLSLParser.SAMPLER2DMSARRAY - 144)) | (1 << (GLSLParser.ISAMPLER2DMSARRAY - 144)) | (1 << (GLSLParser.USAMPLER2DMSARRAY - 144)) | (1 << (GLSLParser.IMAGE2DRECT - 144)) | (1 << (GLSLParser.IMAGE1DARRAY - 144)) | (1 << (GLSLParser.IMAGE2DARRAY - 144)) | (1 << (GLSLParser.IMAGE2DMS - 144)) | (1 << (GLSLParser.IMAGE2DMSARRAY - 144)))) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & ((1 << (GLSLParser.IIMAGE2DRECT - 176)) | (1 << (GLSLParser.IIMAGE1DARRAY - 176)) | (1 << (GLSLParser.IIMAGE2DARRAY - 176)) | (1 << (GLSLParser.IIMAGE2DMS - 176)) | (1 << (GLSLParser.IIMAGE2DMSARRAY - 176)) | (1 << (GLSLParser.UIMAGE2DRECT - 176)) | (1 << (GLSLParser.UIMAGE1DARRAY - 176)) | (1 << (GLSLParser.UIMAGE2DARRAY - 176)) | (1 << (GLSLParser.UIMAGE2DMS - 176)) | (1 << (GLSLParser.UIMAGE2DMSARRAY - 176)))) !== 0) || _la === GLSLParser.IDENTIFIER);
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
	public variable_identifier(): Variable_identifierContext {
		let _localctx: Variable_identifierContext = new Variable_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GLSLParser.RULE_variable_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			_la = this._input.LA(1);
			if (!(_la === GLSLParser.IDENTIFIER)) {
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
	// @RuleVersion(0)
	public primary_expression(): Primary_expressionContext {
		let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GLSLParser.RULE_primary_expression);
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.variable_identifier();

				      // NEW VARIABLE DECLARATION
				   
				}
				break;
			case GLSLParser.INTCONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 224;
				this.match(GLSLParser.INTCONSTANT);
				}
				break;
			case GLSLParser.UINTCONSTANT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 225;
				this.match(GLSLParser.UINTCONSTANT);
				}
				break;
			case GLSLParser.FLOATCONSTANT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 226;
				this.match(GLSLParser.FLOATCONSTANT);
				}
				break;
			case GLSLParser.BOOLCONSTANT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 227;
				this.match(GLSLParser.BOOLCONSTANT);
				}
				break;
			case GLSLParser.LPAREN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 228;
				this.match(GLSLParser.LPAREN);
				this.state = 229;
				this.expression();
				this.state = 230;
				this.match(GLSLParser.RPAREN);
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

	public postfix_expression(): Postfix_expressionContext;
	public postfix_expression(_p: number): Postfix_expressionContext;
	// @RuleVersion(0)
	public postfix_expression(_p?: number): Postfix_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Postfix_expressionContext = new Postfix_expressionContext(this._ctx, _parentState);
		let _prevctx: Postfix_expressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, GLSLParser.RULE_postfix_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 235;
				this.primary_expression();
				}
				break;

			case 2:
				{
				this.state = 236;
				this.function_call_generic();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 256;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 254;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 239;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 240;
						this.match(GLSLParser.LBRACKET);
						this.state = 241;
						this.integer_expression();
						this.state = 242;
						this.match(GLSLParser.RBRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 244;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 245;
						this.match(GLSLParser.DOT);
						this.state = 246;
						this.method_call_generic();
						}
						break;

					case 3:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 247;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 248;
						this.match(GLSLParser.DOT);
						this.state = 249;
						this.match(GLSLParser.IDENTIFIER);
						}
						break;

					case 4:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 250;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 251;
						this.match(GLSLParser.INC_OP);
						}
						break;

					case 5:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 252;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 253;
						this.match(GLSLParser.DEC_OP);
						}
						break;
					}
					}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer_expression(): Integer_expressionContext {
		let _localctx: Integer_expressionContext = new Integer_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GLSLParser.RULE_integer_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
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
	public function_call_generic(): Function_call_genericContext {
		let _localctx: Function_call_genericContext = new Function_call_genericContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GLSLParser.RULE_function_call_generic);
		try {
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 261;
				this.function_call_header_with_parameters(0);
				this.state = 262;
				this.match(GLSLParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this.function_call_header_no_parameters();
				this.state = 265;
				this.match(GLSLParser.RPAREN);
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
	public function_call_header_no_parameters(): Function_call_header_no_parametersContext {
		let _localctx: Function_call_header_no_parametersContext = new Function_call_header_no_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GLSLParser.RULE_function_call_header_no_parameters);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.function_call_header();
				this.state = 270;
				this.match(GLSLParser.VOID_TOK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
				this.function_call_header();
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

	public function_call_header_with_parameters(): Function_call_header_with_parametersContext;
	public function_call_header_with_parameters(_p: number): Function_call_header_with_parametersContext;
	// @RuleVersion(0)
	public function_call_header_with_parameters(_p?: number): Function_call_header_with_parametersContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Function_call_header_with_parametersContext = new Function_call_header_with_parametersContext(this._ctx, _parentState);
		let _prevctx: Function_call_header_with_parametersContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, GLSLParser.RULE_function_call_header_with_parameters, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 276;
			this.function_call_header();
			this.state = 277;
			this.assignment_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Function_call_header_with_parametersContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_function_call_header_with_parameters);
					this.state = 279;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 280;
					this.match(GLSLParser.COMMA);
					this.state = 281;
					this.assignment_expression();
					}
					}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_call_header(): Function_call_headerContext {
		let _localctx: Function_call_headerContext = new Function_call_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GLSLParser.RULE_function_call_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.function_identifier();
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GLSLParser.LBRACKET) {
				{
				this.state = 288;
				this.array_specifier(0);
				}
			}

			this.state = 291;
			this.match(GLSLParser.LPAREN);
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
	public function_identifier(): Function_identifierContext {
		let _localctx: Function_identifierContext = new Function_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GLSLParser.RULE_function_identifier);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.VOID_TOK:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 293;
				this.builtin_type_specifier_nonarray();
				}
				break;
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 294;
				this.variable_identifier();
				}
				break;
			case GLSLParser.FIELD_SELECTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 295;
				this.match(GLSLParser.FIELD_SELECTION);
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
	public method_call_generic(): Method_call_genericContext {
		let _localctx: Method_call_genericContext = new Method_call_genericContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GLSLParser.RULE_method_call_generic);
		try {
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.method_call_header_with_parameters(0);
				this.state = 299;
				this.match(GLSLParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 301;
				this.method_call_header_no_parameters();
				this.state = 302;
				this.match(GLSLParser.RPAREN);
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
	public method_call_header_no_parameters(): Method_call_header_no_parametersContext {
		let _localctx: Method_call_header_no_parametersContext = new Method_call_header_no_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GLSLParser.RULE_method_call_header_no_parameters);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 306;
				this.method_call_header();
				this.state = 307;
				this.match(GLSLParser.VOID_TOK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 309;
				this.method_call_header();
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

	public method_call_header_with_parameters(): Method_call_header_with_parametersContext;
	public method_call_header_with_parameters(_p: number): Method_call_header_with_parametersContext;
	// @RuleVersion(0)
	public method_call_header_with_parameters(_p?: number): Method_call_header_with_parametersContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Method_call_header_with_parametersContext = new Method_call_header_with_parametersContext(this._ctx, _parentState);
		let _prevctx: Method_call_header_with_parametersContext = _localctx;
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, GLSLParser.RULE_method_call_header_with_parameters, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 313;
			this.method_call_header();
			this.state = 314;
			this.assignment_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Method_call_header_with_parametersContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_method_call_header_with_parameters);
					this.state = 316;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 317;
					this.match(GLSLParser.COMMA);
					this.state = 318;
					this.assignment_expression();
					}
					}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method_call_header(): Method_call_headerContext {
		let _localctx: Method_call_headerContext = new Method_call_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, GLSLParser.RULE_method_call_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.variable_identifier();
			this.state = 325;
			this.match(GLSLParser.LPAREN);
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
	public unary_expression(): Unary_expressionContext {
		let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GLSLParser.RULE_unary_expression);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.INTCONSTANT:
			case GLSLParser.UINTCONSTANT:
			case GLSLParser.FLOATCONSTANT:
			case GLSLParser.BOOLCONSTANT:
			case GLSLParser.VOID_TOK:
			case GLSLParser.FIELD_SELECTION:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
			case GLSLParser.LPAREN:
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 327;
				this.postfix_expression(0);
				}
				break;
			case GLSLParser.INC_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 328;
				this.match(GLSLParser.INC_OP);
				this.state = 329;
				this.unary_expression();
				}
				break;
			case GLSLParser.DEC_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 330;
				this.match(GLSLParser.DEC_OP);
				this.state = 331;
				this.unary_expression();
				}
				break;
			case GLSLParser.PLUS_OP:
			case GLSLParser.MINUS_OP:
			case GLSLParser.NOT_OP:
			case GLSLParser.BNEG_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 332;
				this.unary_operator();
				this.state = 333;
				this.unary_expression();
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
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, GLSLParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			_la = this._input.LA(1);
			if (!(((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & ((1 << (GLSLParser.PLUS_OP - 195)) | (1 << (GLSLParser.MINUS_OP - 195)) | (1 << (GLSLParser.NOT_OP - 195)) | (1 << (GLSLParser.BNEG_OP - 195)))) !== 0))) {
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
	// @RuleVersion(0)
	public multiplicative_expression(): Multiplicative_expressionContext {
		let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GLSLParser.RULE_multiplicative_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			_localctx._unary_expression = this.unary_expression();
			_localctx._operands.push(_localctx._unary_expression);
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 343;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.TIMES_OP:
						{
						this.state = 340;
						_localctx._TIMES_OP = this.match(GLSLParser.TIMES_OP);
						_localctx._operators.push(_localctx._TIMES_OP);
						}
						break;
					case GLSLParser.DIV_OP:
						{
						this.state = 341;
						_localctx._DIV_OP = this.match(GLSLParser.DIV_OP);
						_localctx._operators.push(_localctx._DIV_OP);
						}
						break;
					case GLSLParser.MOD_OP:
						{
						this.state = 342;
						_localctx._MOD_OP = this.match(GLSLParser.MOD_OP);
						_localctx._operators.push(_localctx._MOD_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 345;
					_localctx._unary_expression = this.unary_expression();
					_localctx._operands.push(_localctx._unary_expression);
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
	public additive_expression(): Additive_expressionContext {
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, GLSLParser.RULE_additive_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			_localctx._multiplicative_expression = this.multiplicative_expression();
			_localctx._operands.push(_localctx._multiplicative_expression);
			this.state = 359;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 354;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.PLUS_OP:
						{
						this.state = 352;
						_localctx._PLUS_OP = this.match(GLSLParser.PLUS_OP);
						_localctx._operators.push(_localctx._PLUS_OP);
						}
						break;
					case GLSLParser.MINUS_OP:
						{
						this.state = 353;
						_localctx._MINUS_OP = this.match(GLSLParser.MINUS_OP);
						_localctx._operators.push(_localctx._MINUS_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 356;
					_localctx._multiplicative_expression = this.multiplicative_expression();
					_localctx._operands.push(_localctx._multiplicative_expression);
					}
					}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	public shift_expression(): Shift_expressionContext {
		let _localctx: Shift_expressionContext = new Shift_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, GLSLParser.RULE_shift_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			_localctx._additive_expression = this.additive_expression();
			_localctx._operands.push(_localctx._additive_expression);
			this.state = 370;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 365;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.LEFT_OP:
						{
						this.state = 363;
						_localctx._LEFT_OP = this.match(GLSLParser.LEFT_OP);
						_localctx._operators.push(_localctx._LEFT_OP);
						}
						break;
					case GLSLParser.RIGHT_OP:
						{
						this.state = 364;
						_localctx._RIGHT_OP = this.match(GLSLParser.RIGHT_OP);
						_localctx._operators.push(_localctx._RIGHT_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 367;
					_localctx._additive_expression = this.additive_expression();
					_localctx._operands.push(_localctx._additive_expression);
					}
					}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
	public relational_expression(): Relational_expressionContext {
		let _localctx: Relational_expressionContext = new Relational_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, GLSLParser.RULE_relational_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			_localctx._shift_expression = this.shift_expression();
			_localctx._operands.push(_localctx._shift_expression);
			this.state = 383;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 378;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.LT_OP:
						{
						this.state = 374;
						_localctx._LT_OP = this.match(GLSLParser.LT_OP);
						_localctx._operators.push(_localctx._LT_OP);
						}
						break;
					case GLSLParser.GT_OP:
						{
						this.state = 375;
						_localctx._GT_OP = this.match(GLSLParser.GT_OP);
						_localctx._operators.push(_localctx._GT_OP);
						}
						break;
					case GLSLParser.LE_OP:
						{
						this.state = 376;
						_localctx._LE_OP = this.match(GLSLParser.LE_OP);
						_localctx._operators.push(_localctx._LE_OP);
						}
						break;
					case GLSLParser.GE_OP:
						{
						this.state = 377;
						_localctx._GE_OP = this.match(GLSLParser.GE_OP);
						_localctx._operators.push(_localctx._GE_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 380;
					_localctx._shift_expression = this.shift_expression();
					_localctx._operands.push(_localctx._shift_expression);
					}
					}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
	public equality_expression(): Equality_expressionContext {
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, GLSLParser.RULE_equality_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			_localctx._relational_expression = this.relational_expression();
			_localctx._operands.push(_localctx._relational_expression);
			this.state = 394;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 389;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.EQ_OP:
						{
						this.state = 387;
						_localctx._EQ_OP = this.match(GLSLParser.EQ_OP);
						_localctx._operators.push(_localctx._EQ_OP);
						}
						break;
					case GLSLParser.NE_OP:
						{
						this.state = 388;
						_localctx._NE_OP = this.match(GLSLParser.NE_OP);
						_localctx._operators.push(_localctx._NE_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 391;
					_localctx._relational_expression = this.relational_expression();
					_localctx._operands.push(_localctx._relational_expression);
					}
					}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
	public and_expression(): And_expressionContext {
		let _localctx: And_expressionContext = new And_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, GLSLParser.RULE_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			_localctx._equality_expression = this.equality_expression();
			_localctx._operands.push(_localctx._equality_expression);
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 398;
					_localctx._BAND_OP = this.match(GLSLParser.BAND_OP);
					_localctx._operators.push(_localctx._BAND_OP);
					this.state = 399;
					_localctx._equality_expression = this.equality_expression();
					_localctx._operands.push(_localctx._equality_expression);
					}
					}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
	public exclusive_or_expression(): Exclusive_or_expressionContext {
		let _localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, GLSLParser.RULE_exclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			_localctx._and_expression = this.and_expression();
			_localctx._operands.push(_localctx._and_expression);
			this.state = 410;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 406;
					_localctx._BXOR_OP = this.match(GLSLParser.BXOR_OP);
					_localctx._operators.push(_localctx._BXOR_OP);
					this.state = 407;
					_localctx._and_expression = this.and_expression();
					_localctx._operands.push(_localctx._and_expression);
					}
					}
				}
				this.state = 412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
	public inclusive_or_expression(): Inclusive_or_expressionContext {
		let _localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, GLSLParser.RULE_inclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			_localctx._exclusive_or_expression = this.exclusive_or_expression();
			_localctx._operands.push(_localctx._exclusive_or_expression);
			this.state = 418;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 414;
					_localctx._BOR_OP = this.match(GLSLParser.BOR_OP);
					_localctx._operators.push(_localctx._BOR_OP);
					this.state = 415;
					_localctx._exclusive_or_expression = this.exclusive_or_expression();
					_localctx._operands.push(_localctx._exclusive_or_expression);
					}
					}
				}
				this.state = 420;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
	public logical_and_expression(): Logical_and_expressionContext {
		let _localctx: Logical_and_expressionContext = new Logical_and_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, GLSLParser.RULE_logical_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			_localctx._inclusive_or_expression = this.inclusive_or_expression();
			_localctx._operands.push(_localctx._inclusive_or_expression);
			this.state = 426;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 422;
					_localctx._AND_OP = this.match(GLSLParser.AND_OP);
					_localctx._operators.push(_localctx._AND_OP);
					this.state = 423;
					_localctx._inclusive_or_expression = this.inclusive_or_expression();
					_localctx._operands.push(_localctx._inclusive_or_expression);
					}
					}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
	public logical_xor_expression(): Logical_xor_expressionContext {
		let _localctx: Logical_xor_expressionContext = new Logical_xor_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, GLSLParser.RULE_logical_xor_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			_localctx._logical_and_expression = this.logical_and_expression();
			_localctx._operands.push(_localctx._logical_and_expression);
			this.state = 434;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 430;
					_localctx._XOR_OP = this.match(GLSLParser.XOR_OP);
					_localctx._operators.push(_localctx._XOR_OP);
					this.state = 431;
					_localctx._logical_and_expression = this.logical_and_expression();
					_localctx._operands.push(_localctx._logical_and_expression);
					}
					}
				}
				this.state = 436;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public logical_or_expression(): Logical_or_expressionContext {
		let _localctx: Logical_or_expressionContext = new Logical_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, GLSLParser.RULE_logical_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			_localctx._logical_xor_expression = this.logical_xor_expression();
			_localctx._operands.push(_localctx._logical_xor_expression);
			this.state = 442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 438;
					_localctx._OR_OP = this.match(GLSLParser.OR_OP);
					_localctx._operators.push(_localctx._OR_OP);
					this.state = 439;
					_localctx._logical_xor_expression = this.logical_xor_expression();
					_localctx._operands.push(_localctx._logical_xor_expression);
					}
					}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public conditional_expression(): Conditional_expressionContext {
		let _localctx: Conditional_expressionContext = new Conditional_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, GLSLParser.RULE_conditional_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.logical_or_expression();
			this.state = 453;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 446;
					this.match(GLSLParser.QUERY_OP);
					this.state = 447;
					this.expression();
					this.state = 448;
					this.match(GLSLParser.COLON);
					this.state = 449;
					this.assignment_expression();
					}
					}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public assignment_expression(): Assignment_expressionContext {
		let _localctx: Assignment_expressionContext = new Assignment_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, GLSLParser.RULE_assignment_expression);
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.conditional_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
				this.unary_expression();
				this.state = 458;
				this.assignment_operator();
				this.state = 459;
				this.assignment_expression();
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
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, GLSLParser.RULE_assignment_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			_la = this._input.LA(1);
			if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (GLSLParser.MUL_ASSIGN - 63)) | (1 << (GLSLParser.DIV_ASSIGN - 63)) | (1 << (GLSLParser.MOD_ASSIGN - 63)) | (1 << (GLSLParser.ADD_ASSIGN - 63)) | (1 << (GLSLParser.SUB_ASSIGN - 63)) | (1 << (GLSLParser.LEFT_ASSIGN - 63)) | (1 << (GLSLParser.RIGHT_ASSIGN - 63)) | (1 << (GLSLParser.AND_ASSIGN - 63)) | (1 << (GLSLParser.XOR_ASSIGN - 63)) | (1 << (GLSLParser.OR_ASSIGN - 63)))) !== 0) || _la === GLSLParser.ASSIGN_OP)) {
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
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, GLSLParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			_localctx._assignment_expression = this.assignment_expression();
			_localctx._operands.push(_localctx._assignment_expression);
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GLSLParser.COMMA) {
				{
				{
				this.state = 466;
				_localctx._COMMA = this.match(GLSLParser.COMMA);
				_localctx._operators.push(_localctx._COMMA);
				this.state = 467;
				_localctx._assignment_expression = this.assignment_expression();
				_localctx._operands.push(_localctx._assignment_expression);
				}
				}
				this.state = 472;
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
	public constant_expression(): Constant_expressionContext {
		let _localctx: Constant_expressionContext = new Constant_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, GLSLParser.RULE_constant_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.conditional_expression();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, GLSLParser.RULE_declaration);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.function_prototype();
				this.state = 476;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 478;
				this.init_declarator_list(0);
				this.state = 479;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 481;
				this.match(GLSLParser.PRECISION);
				this.state = 482;
				this.precision_qualifier();
				this.state = 483;
				this.type_specifier();
				this.state = 484;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 486;
				this.interface_block();
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
	public function_prototype(): Function_prototypeContext {
		let _localctx: Function_prototypeContext = new Function_prototypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, GLSLParser.RULE_function_prototype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.function_declarator();
			this.state = 490;
			this.match(GLSLParser.RPAREN);
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
	public function_declarator(): Function_declaratorContext {
		let _localctx: Function_declaratorContext = new Function_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, GLSLParser.RULE_function_declarator);
		try {
			this.state = 494;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 492;
				this.function_header();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 493;
				this.function_header_with_parameters(0);
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

	public function_header_with_parameters(): Function_header_with_parametersContext;
	public function_header_with_parameters(_p: number): Function_header_with_parametersContext;
	// @RuleVersion(0)
	public function_header_with_parameters(_p?: number): Function_header_with_parametersContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Function_header_with_parametersContext = new Function_header_with_parametersContext(this._ctx, _parentState);
		let _prevctx: Function_header_with_parametersContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, GLSLParser.RULE_function_header_with_parameters, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 497;
			this.function_header();
			this.state = 498;
			this.parameter_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 505;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Function_header_with_parametersContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_function_header_with_parameters);
					this.state = 500;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 501;
					this.match(GLSLParser.COMMA);
					this.state = 502;
					this.parameter_declaration();
					}
					}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_header(): Function_headerContext {
		let _localctx: Function_headerContext = new Function_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, GLSLParser.RULE_function_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.fully_specified_type();
			this.state = 509;
			this.variable_identifier();
			this.state = 510;
			this.match(GLSLParser.LPAREN);
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
	public parameter_declarator(): Parameter_declaratorContext {
		let _localctx: Parameter_declaratorContext = new Parameter_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, GLSLParser.RULE_parameter_declarator);
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this.type_specifier();
				this.state = 513;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 515;
				this.type_specifier();
				this.state = 516;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 517;
				this.array_specifier(0);
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
	public parameter_declaration(): Parameter_declarationContext {
		let _localctx: Parameter_declarationContext = new Parameter_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, GLSLParser.RULE_parameter_declaration);
		try {
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.parameter_qualifier();
				this.state = 522;
				this.parameter_declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.parameter_qualifier();
				this.state = 525;
				this.parameter_type_specifier();
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
	public parameter_qualifier(): Parameter_qualifierContext {
		let _localctx: Parameter_qualifierContext = new Parameter_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, GLSLParser.RULE_parameter_qualifier);
		try {
			this.state = 540;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.VOID_TOK:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.STRUCT:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case GLSLParser.CONST_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 530;
				this.match(GLSLParser.CONST_TOK);
				this.state = 531;
				this.parameter_qualifier();
				}
				break;
			case GLSLParser.PRECISE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 532;
				this.match(GLSLParser.PRECISE);
				this.state = 533;
				this.parameter_qualifier();
				}
				break;
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
			case GLSLParser.INOUT_TOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 534;
				this.parameter_direction_qualifier();
				this.state = 535;
				this.parameter_qualifier();
				}
				break;
			case GLSLParser.HIGHP:
			case GLSLParser.MEDIUMP:
			case GLSLParser.LOWP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 537;
				this.precision_qualifier();
				this.state = 538;
				this.parameter_qualifier();
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
	public parameter_direction_qualifier(): Parameter_direction_qualifierContext {
		let _localctx: Parameter_direction_qualifierContext = new Parameter_direction_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, GLSLParser.RULE_parameter_direction_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GLSLParser.IN_TOK) | (1 << GLSLParser.OUT_TOK) | (1 << GLSLParser.INOUT_TOK))) !== 0))) {
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
	// @RuleVersion(0)
	public parameter_type_specifier(): Parameter_type_specifierContext {
		let _localctx: Parameter_type_specifierContext = new Parameter_type_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, GLSLParser.RULE_parameter_type_specifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.type_specifier();
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

	public init_declarator_list(): Init_declarator_listContext;
	public init_declarator_list(_p: number): Init_declarator_listContext;
	// @RuleVersion(0)
	public init_declarator_list(_p?: number): Init_declarator_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Init_declarator_listContext = new Init_declarator_listContext(this._ctx, _parentState);
		let _prevctx: Init_declarator_listContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, GLSLParser.RULE_init_declarator_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 547;
			this.single_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 570;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 568;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 549;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 550;
						this.match(GLSLParser.COMMA);
						this.state = 551;
						this.match(GLSLParser.IDENTIFIER);
						}
						break;

					case 2:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 552;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 553;
						this.match(GLSLParser.COMMA);
						this.state = 554;
						this.match(GLSLParser.IDENTIFIER);
						this.state = 555;
						this.array_specifier(0);
						}
						break;

					case 3:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 556;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 557;
						this.match(GLSLParser.COMMA);
						this.state = 558;
						this.match(GLSLParser.IDENTIFIER);
						this.state = 559;
						this.array_specifier(0);
						this.state = 560;
						this.match(GLSLParser.ASSIGN_OP);
						this.state = 561;
						this.initializer();
						}
						break;

					case 4:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 563;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 564;
						this.match(GLSLParser.COMMA);
						this.state = 565;
						this.match(GLSLParser.IDENTIFIER);
						this.state = 566;
						this.match(GLSLParser.ASSIGN_OP);
						this.state = 567;
						this.initializer();
						}
						break;
					}
					}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public single_declaration(): Single_declarationContext {
		let _localctx: Single_declarationContext = new Single_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, GLSLParser.RULE_single_declaration);
		try {
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 573;
				this.fully_specified_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 574;
				this.fully_specified_type();
				this.state = 575;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 577;
				this.fully_specified_type();
				this.state = 578;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 579;
				this.array_specifier(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 581;
				this.fully_specified_type();
				this.state = 582;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 583;
				this.array_specifier(0);
				this.state = 584;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 585;
				this.initializer();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 587;
				this.fully_specified_type();
				this.state = 588;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 589;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 590;
				this.initializer();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 592;
				this.match(GLSLParser.INVARIANT);
				this.state = 593;
				this.variable_identifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 594;
				this.match(GLSLParser.PRECISE);
				this.state = 595;
				this.variable_identifier();
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
	public fully_specified_type(): Fully_specified_typeContext {
		let _localctx: Fully_specified_typeContext = new Fully_specified_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, GLSLParser.RULE_fully_specified_type);
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.VOID_TOK:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.STRUCT:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 598;
				this.type_specifier();
				}
				break;
			case GLSLParser.UNIFORM:
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
			case GLSLParser.HIGHP:
			case GLSLParser.MEDIUMP:
			case GLSLParser.LOWP:
			case GLSLParser.CONST_TOK:
			case GLSLParser.PRECISE:
			case GLSLParser.INVARIANT:
			case GLSLParser.SMOOTH:
			case GLSLParser.FLAT:
			case GLSLParser.NOPERSPECTIVE:
			case GLSLParser.CENTROID:
			case GLSLParser.SAMPLE:
			case GLSLParser.ATTRIBUTE:
			case GLSLParser.COHERENT:
			case GLSLParser.VOLATILE:
			case GLSLParser.RESTRICT:
			case GLSLParser.VARYING:
			case GLSLParser.READONLY:
			case GLSLParser.WRITEONLY:
			case GLSLParser.SHARED:
			case GLSLParser.LAYOUT_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.type_qualifier();
				this.state = 600;
				this.type_specifier();
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
	public layout_qualifier(): Layout_qualifierContext {
		let _localctx: Layout_qualifierContext = new Layout_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, GLSLParser.RULE_layout_qualifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(GLSLParser.LAYOUT_TOK);
			this.state = 605;
			this.match(GLSLParser.LPAREN);
			this.state = 606;
			this.layout_qualifier_id_list(0);
			this.state = 607;
			this.match(GLSLParser.RPAREN);
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

	public layout_qualifier_id_list(): Layout_qualifier_id_listContext;
	public layout_qualifier_id_list(_p: number): Layout_qualifier_id_listContext;
	// @RuleVersion(0)
	public layout_qualifier_id_list(_p?: number): Layout_qualifier_id_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Layout_qualifier_id_listContext = new Layout_qualifier_id_listContext(this._ctx, _parentState);
		let _prevctx: Layout_qualifier_id_listContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, GLSLParser.RULE_layout_qualifier_id_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 610;
			this.layout_qualifier_id();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Layout_qualifier_id_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_layout_qualifier_id_list);
					this.state = 612;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 613;
					this.match(GLSLParser.COMMA);
					this.state = 614;
					this.layout_qualifier_id();
					}
					}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer_constant(): Integer_constantContext {
		let _localctx: Integer_constantContext = new Integer_constantContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, GLSLParser.RULE_integer_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			_la = this._input.LA(1);
			if (!(_la === GLSLParser.INTCONSTANT || _la === GLSLParser.UINTCONSTANT)) {
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
	// @RuleVersion(0)
	public layout_qualifier_id(): Layout_qualifier_idContext {
		let _localctx: Layout_qualifier_idContext = new Layout_qualifier_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, GLSLParser.RULE_layout_qualifier_id);
		try {
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 622;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 623;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 624;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 625;
				this.integer_constant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 626;
				this.interface_block_layout_qualifier();
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
	public interface_block_layout_qualifier(): Interface_block_layout_qualifierContext {
		let _localctx: Interface_block_layout_qualifierContext = new Interface_block_layout_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, GLSLParser.RULE_interface_block_layout_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			_la = this._input.LA(1);
			if (!(_la === GLSLParser.ROW_MAJOR || _la === GLSLParser.PACKED_TOK)) {
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
	// @RuleVersion(0)
	public interpolation_qualifier(): Interpolation_qualifierContext {
		let _localctx: Interpolation_qualifierContext = new Interpolation_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, GLSLParser.RULE_interpolation_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (GLSLParser.SMOOTH - 31)) | (1 << (GLSLParser.FLAT - 31)) | (1 << (GLSLParser.NOPERSPECTIVE - 31)))) !== 0))) {
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
	// @RuleVersion(0)
	public type_qualifier(): Type_qualifierContext {
		let _localctx: Type_qualifierContext = new Type_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, GLSLParser.RULE_type_qualifier);
		try {
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this.match(GLSLParser.INVARIANT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 634;
				this.match(GLSLParser.PRECISE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 635;
				this.auxiliary_storage_qualifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 636;
				this.storage_qualifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 637;
				this.interpolation_qualifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 638;
				this.layout_qualifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 639;
				this.precision_qualifier();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 640;
				this.match(GLSLParser.PRECISE);
				this.state = 641;
				this.type_qualifier();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 642;
				this.match(GLSLParser.INVARIANT);
				this.state = 643;
				this.type_qualifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 644;
				this.interpolation_qualifier();
				this.state = 645;
				this.type_qualifier();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 647;
				this.layout_qualifier();
				this.state = 648;
				this.type_qualifier();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 650;
				this.auxiliary_storage_qualifier();
				this.state = 651;
				this.type_qualifier();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 653;
				this.storage_qualifier();
				this.state = 654;
				this.type_qualifier();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 656;
				this.precision_qualifier();
				this.state = 657;
				this.type_qualifier();
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
	public auxiliary_storage_qualifier(): Auxiliary_storage_qualifierContext {
		let _localctx: Auxiliary_storage_qualifierContext = new Auxiliary_storage_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, GLSLParser.RULE_auxiliary_storage_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			_la = this._input.LA(1);
			if (!(_la === GLSLParser.CENTROID || _la === GLSLParser.SAMPLE)) {
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
	// @RuleVersion(0)
	public storage_qualifier(): Storage_qualifierContext {
		let _localctx: Storage_qualifierContext = new Storage_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, GLSLParser.RULE_storage_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (GLSLParser.UNIFORM - 17)) | (1 << (GLSLParser.IN_TOK - 17)) | (1 << (GLSLParser.OUT_TOK - 17)) | (1 << (GLSLParser.CONST_TOK - 17)) | (1 << (GLSLParser.ATTRIBUTE - 17)) | (1 << (GLSLParser.COHERENT - 17)) | (1 << (GLSLParser.VOLATILE - 17)) | (1 << (GLSLParser.RESTRICT - 17)) | (1 << (GLSLParser.VARYING - 17)) | (1 << (GLSLParser.READONLY - 17)) | (1 << (GLSLParser.WRITEONLY - 17)) | (1 << (GLSLParser.SHARED - 17)))) !== 0))) {
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

	public array_specifier(): Array_specifierContext;
	public array_specifier(_p: number): Array_specifierContext;
	// @RuleVersion(0)
	public array_specifier(_p?: number): Array_specifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Array_specifierContext = new Array_specifierContext(this._ctx, _parentState);
		let _prevctx: Array_specifierContext = _localctx;
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, GLSLParser.RULE_array_specifier, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 666;
				this.match(GLSLParser.LBRACKET);
				this.state = 667;
				this.match(GLSLParser.RBRACKET);
				}
				break;

			case 2:
				{
				this.state = 668;
				this.match(GLSLParser.LBRACKET);
				this.state = 669;
				this.constant_expression();
				this.state = 670;
				this.match(GLSLParser.RBRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 684;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 682;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						_localctx = new Array_specifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_array_specifier);
						this.state = 674;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 675;
						this.match(GLSLParser.LBRACKET);
						this.state = 676;
						this.match(GLSLParser.RBRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Array_specifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_array_specifier);
						this.state = 677;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 678;
						this.match(GLSLParser.LBRACKET);
						this.state = 679;
						this.constant_expression();
						this.state = 680;
						this.match(GLSLParser.RBRACKET);
						}
						break;
					}
					}
				}
				this.state = 686;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_specifier(): Type_specifierContext {
		let _localctx: Type_specifierContext = new Type_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, GLSLParser.RULE_type_specifier);
		try {
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 687;
				this.type_specifier_nonarray();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 688;
				this.type_specifier_nonarray();
				this.state = 689;
				this.array_specifier(0);
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
	public type_specifier_nonarray(): Type_specifier_nonarrayContext {
		let _localctx: Type_specifier_nonarrayContext = new Type_specifier_nonarrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, GLSLParser.RULE_type_specifier_nonarray);
		try {
			this.state = 696;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.VOID_TOK:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 693;
				this.builtin_type_specifier_nonarray();
				}
				break;
			case GLSLParser.STRUCT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 694;
				this.struct_specifier();
				}
				break;
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 695;
				this.match(GLSLParser.IDENTIFIER);
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
	public builtin_type_specifier_nonarray(): Builtin_type_specifier_nonarrayContext {
		let _localctx: Builtin_type_specifier_nonarrayContext = new Builtin_type_specifier_nonarrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, GLSLParser.RULE_builtin_type_specifier_nonarray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (GLSLParser.VOID_TOK - 52)) | (1 << (GLSLParser.FLOAT_TOK - 52)) | (1 << (GLSLParser.INT_TOK - 52)) | (1 << (GLSLParser.UINT_TOK - 52)) | (1 << (GLSLParser.BOOL_TOK - 52)) | (1 << (GLSLParser.SAMPLERCUBE - 52)) | (1 << (GLSLParser.SAMPLEREXTERNALOES - 52)) | (1 << (GLSLParser.SAMPLERCUBESHADOW - 52)) | (1 << (GLSLParser.SAMPLERBUFFER - 52)) | (1 << (GLSLParser.SAMPLERCUBEARRAY - 52)) | (1 << (GLSLParser.SAMPLERCUBEARRAYSHADOW - 52)) | (1 << (GLSLParser.ISAMPLERCUBE - 52)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (GLSLParser.ISAMPLERBUFFER - 84)) | (1 << (GLSLParser.ISAMPLERCUBEARRAY - 84)) | (1 << (GLSLParser.USAMPLERCUBE - 84)) | (1 << (GLSLParser.USAMPLERBUFFER - 84)) | (1 << (GLSLParser.USAMPLERCUBEARRAY - 84)) | (1 << (GLSLParser.IMAGECUBE - 84)) | (1 << (GLSLParser.IMAGEBUFFER - 84)) | (1 << (GLSLParser.IMAGECUBEARRAY - 84)) | (1 << (GLSLParser.IIMAGECUBE - 84)) | (1 << (GLSLParser.IIMAGEBUFFER - 84)) | (1 << (GLSLParser.IIMAGECUBEARRAY - 84)) | (1 << (GLSLParser.UIMAGECUBE - 84)) | (1 << (GLSLParser.UIMAGEBUFFER - 84)) | (1 << (GLSLParser.UIMAGECUBEARRAY - 84)) | (1 << (GLSLParser.ATOMIC_UINT - 84)) | (1 << (GLSLParser.VEC2 - 84)) | (1 << (GLSLParser.VEC3 - 84)) | (1 << (GLSLParser.VEC4 - 84)) | (1 << (GLSLParser.BVEC2 - 84)))) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (GLSLParser.BVEC3 - 116)) | (1 << (GLSLParser.BVEC4 - 116)) | (1 << (GLSLParser.IVEC2 - 116)) | (1 << (GLSLParser.IVEC3 - 116)) | (1 << (GLSLParser.IVEC4 - 116)) | (1 << (GLSLParser.UVEC2 - 116)) | (1 << (GLSLParser.UVEC3 - 116)) | (1 << (GLSLParser.UVEC4 - 116)) | (1 << (GLSLParser.MAT2X2 - 116)) | (1 << (GLSLParser.MAT2X3 - 116)) | (1 << (GLSLParser.MAT2X4 - 116)) | (1 << (GLSLParser.MAT3X2 - 116)) | (1 << (GLSLParser.MAT3X3 - 116)) | (1 << (GLSLParser.MAT3X4 - 116)) | (1 << (GLSLParser.MAT4X2 - 116)) | (1 << (GLSLParser.MAT4X3 - 116)) | (1 << (GLSLParser.MAT4X4 - 116)) | (1 << (GLSLParser.IMAGE1D - 116)) | (1 << (GLSLParser.IMAGE2D - 116)) | (1 << (GLSLParser.IMAGE3D - 116)) | (1 << (GLSLParser.UIMAGE1D - 116)) | (1 << (GLSLParser.UIMAGE2D - 116)) | (1 << (GLSLParser.UIMAGE3D - 116)) | (1 << (GLSLParser.IIMAGE1D - 116)) | (1 << (GLSLParser.IIMAGE2D - 116)) | (1 << (GLSLParser.IIMAGE3D - 116)) | (1 << (GLSLParser.SAMPLER1D - 116)) | (1 << (GLSLParser.SAMPLER2D - 116)) | (1 << (GLSLParser.SAMPLER3D - 116)) | (1 << (GLSLParser.SAMPLER2DRECT - 116)) | (1 << (GLSLParser.SAMPLER1DSHADOW - 116)) | (1 << (GLSLParser.SAMPLER2DSHADOW - 116)))) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & ((1 << (GLSLParser.SAMPLER2DRECTSHADOW - 148)) | (1 << (GLSLParser.SAMPLER1DARRAY - 148)) | (1 << (GLSLParser.SAMPLER2DARRAY - 148)) | (1 << (GLSLParser.SAMPLER1DARRAYSHADOW - 148)) | (1 << (GLSLParser.SAMPLER2DARRAYSHADOW - 148)) | (1 << (GLSLParser.ISAMPLER1D - 148)) | (1 << (GLSLParser.ISAMPLER2D - 148)) | (1 << (GLSLParser.ISAMPLER2DRECT - 148)) | (1 << (GLSLParser.ISAMPLER3D - 148)) | (1 << (GLSLParser.ISAMPLER1DARRAY - 148)) | (1 << (GLSLParser.ISAMPLER2DARRAY - 148)) | (1 << (GLSLParser.USAMPLER1D - 148)) | (1 << (GLSLParser.USAMPLER2D - 148)) | (1 << (GLSLParser.USAMPLER2DRECT - 148)) | (1 << (GLSLParser.USAMPLER3D - 148)) | (1 << (GLSLParser.USAMPLER1DARRAY - 148)) | (1 << (GLSLParser.USAMPLER2DARRAY - 148)) | (1 << (GLSLParser.SAMPLER2DMS - 148)) | (1 << (GLSLParser.ISAMPLER2DMS - 148)) | (1 << (GLSLParser.USAMPLER2DMS - 148)) | (1 << (GLSLParser.SAMPLER2DMSARRAY - 148)) | (1 << (GLSLParser.ISAMPLER2DMSARRAY - 148)) | (1 << (GLSLParser.USAMPLER2DMSARRAY - 148)) | (1 << (GLSLParser.IMAGE2DRECT - 148)) | (1 << (GLSLParser.IMAGE1DARRAY - 148)) | (1 << (GLSLParser.IMAGE2DARRAY - 148)) | (1 << (GLSLParser.IMAGE2DMS - 148)) | (1 << (GLSLParser.IMAGE2DMSARRAY - 148)) | (1 << (GLSLParser.IIMAGE2DRECT - 148)) | (1 << (GLSLParser.IIMAGE1DARRAY - 148)) | (1 << (GLSLParser.IIMAGE2DARRAY - 148)) | (1 << (GLSLParser.IIMAGE2DMS - 148)))) !== 0) || ((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (GLSLParser.IIMAGE2DMSARRAY - 180)) | (1 << (GLSLParser.UIMAGE2DRECT - 180)) | (1 << (GLSLParser.UIMAGE1DARRAY - 180)) | (1 << (GLSLParser.UIMAGE2DARRAY - 180)) | (1 << (GLSLParser.UIMAGE2DMS - 180)) | (1 << (GLSLParser.UIMAGE2DMSARRAY - 180)))) !== 0))) {
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
	// @RuleVersion(0)
	public precision_qualifier(): Precision_qualifierContext {
		let _localctx: Precision_qualifierContext = new Precision_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, GLSLParser.RULE_precision_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GLSLParser.HIGHP) | (1 << GLSLParser.MEDIUMP) | (1 << GLSLParser.LOWP))) !== 0))) {
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
	// @RuleVersion(0)
	public struct_specifier(): Struct_specifierContext {
		let _localctx: Struct_specifierContext = new Struct_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, GLSLParser.RULE_struct_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(GLSLParser.STRUCT);
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GLSLParser.IDENTIFIER) {
				{
				this.state = 703;
				this.match(GLSLParser.IDENTIFIER);
				}
			}

			this.state = 706;
			this.match(GLSLParser.LBRACE);
			this.state = 707;
			this.member_list(0);
			this.state = 708;
			this.match(GLSLParser.RBRACE);
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

	public member_list(): Member_listContext;
	public member_list(_p: number): Member_listContext;
	// @RuleVersion(0)
	public member_list(_p?: number): Member_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Member_listContext = new Member_listContext(this._ctx, _parentState);
		let _prevctx: Member_listContext = _localctx;
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, GLSLParser.RULE_member_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 711;
			this.member_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 717;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Member_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_member_list);
					this.state = 713;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 714;
					this.member_declaration();
					}
					}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_declaration(): Member_declarationContext {
		let _localctx: Member_declarationContext = new Member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, GLSLParser.RULE_member_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.fully_specified_type();
			this.state = 721;
			this.struct_declarator_list(0);
			this.state = 722;
			this.match(GLSLParser.SEMICOLON);
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

	public struct_declarator_list(): Struct_declarator_listContext;
	public struct_declarator_list(_p: number): Struct_declarator_listContext;
	// @RuleVersion(0)
	public struct_declarator_list(_p?: number): Struct_declarator_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Struct_declarator_listContext = new Struct_declarator_listContext(this._ctx, _parentState);
		let _prevctx: Struct_declarator_listContext = _localctx;
		let _startState: number = 128;
		this.enterRecursionRule(_localctx, 128, GLSLParser.RULE_struct_declarator_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 725;
			this.struct_declarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 732;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Struct_declarator_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_struct_declarator_list);
					this.state = 727;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 728;
					this.match(GLSLParser.COMMA);
					this.state = 729;
					this.struct_declarator();
					}
					}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_declarator(): Struct_declaratorContext {
		let _localctx: Struct_declaratorContext = new Struct_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, GLSLParser.RULE_struct_declarator);
		try {
			this.state = 738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 737;
				this.array_specifier(0);
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
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, GLSLParser.RULE_initializer);
		try {
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 740;
				this.assignment_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 741;
				this.match(GLSLParser.LBRACE);
				this.state = 742;
				this.initializer_list(0);
				this.state = 743;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 745;
				this.match(GLSLParser.LBRACE);
				this.state = 746;
				this.initializer_list(0);
				this.state = 747;
				this.match(GLSLParser.COMMA);
				this.state = 748;
				this.match(GLSLParser.RBRACE);
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

	public initializer_list(): Initializer_listContext;
	public initializer_list(_p: number): Initializer_listContext;
	// @RuleVersion(0)
	public initializer_list(_p?: number): Initializer_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Initializer_listContext = new Initializer_listContext(this._ctx, _parentState);
		let _prevctx: Initializer_listContext = _localctx;
		let _startState: number = 134;
		this.enterRecursionRule(_localctx, 134, GLSLParser.RULE_initializer_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 753;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 760;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Initializer_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_initializer_list);
					this.state = 755;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 756;
					this.match(GLSLParser.COMMA);
					this.state = 757;
					this.initializer();
					}
					}
				}
				this.state = 762;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_statement(): Declaration_statementContext {
		let _localctx: Declaration_statementContext = new Declaration_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, GLSLParser.RULE_declaration_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.declaration();
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
		this.enterRule(_localctx, 138, GLSLParser.RULE_statement);
		try {
			this.state = 767;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 765;
				this.compound_statement();
				}
				break;
			case GLSLParser.UNIFORM:
			case GLSLParser.BUFFER:
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
			case GLSLParser.HIGHP:
			case GLSLParser.MEDIUMP:
			case GLSLParser.LOWP:
			case GLSLParser.PRECISION:
			case GLSLParser.INTCONSTANT:
			case GLSLParser.CONST_TOK:
			case GLSLParser.PRECISE:
			case GLSLParser.INVARIANT:
			case GLSLParser.SMOOTH:
			case GLSLParser.FLAT:
			case GLSLParser.NOPERSPECTIVE:
			case GLSLParser.CENTROID:
			case GLSLParser.SAMPLE:
			case GLSLParser.ATTRIBUTE:
			case GLSLParser.COHERENT:
			case GLSLParser.VOLATILE:
			case GLSLParser.RESTRICT:
			case GLSLParser.VARYING:
			case GLSLParser.READONLY:
			case GLSLParser.WRITEONLY:
			case GLSLParser.SHARED:
			case GLSLParser.LAYOUT_TOK:
			case GLSLParser.UINTCONSTANT:
			case GLSLParser.FLOATCONSTANT:
			case GLSLParser.BOOLCONSTANT:
			case GLSLParser.INC_OP:
			case GLSLParser.DEC_OP:
			case GLSLParser.VOID_TOK:
			case GLSLParser.FIELD_SELECTION:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.STRUCT:
			case GLSLParser.IF:
			case GLSLParser.SWITCH:
			case GLSLParser.WHILE:
			case GLSLParser.DO:
			case GLSLParser.FOR:
			case GLSLParser.CONTINUE:
			case GLSLParser.BREAK:
			case GLSLParser.RETURN:
			case GLSLParser.DISCARD:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
			case GLSLParser.LPAREN:
			case GLSLParser.SEMICOLON:
			case GLSLParser.PLUS_OP:
			case GLSLParser.MINUS_OP:
			case GLSLParser.NOT_OP:
			case GLSLParser.BNEG_OP:
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 766;
				this.simple_statement();
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
	public simple_statement(): Simple_statementContext {
		let _localctx: Simple_statementContext = new Simple_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, GLSLParser.RULE_simple_statement);
		try {
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				this.expression_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this.declaration_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 771;
				this.selection_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 772;
				this.switch_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 773;
				this.iteration_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 774;
				this.jump_statement();
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
	public compound_statement(): Compound_statementContext {
		let _localctx: Compound_statementContext = new Compound_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, GLSLParser.RULE_compound_statement);
		try {
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 777;
				this.match(GLSLParser.LBRACE);
				this.state = 778;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 779;
				this.match(GLSLParser.LBRACE);
				this.state = 780;
				this.statement_list(0);
				this.state = 781;
				this.match(GLSLParser.RBRACE);
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
	public statement_no_new_scope(): Statement_no_new_scopeContext {
		let _localctx: Statement_no_new_scopeContext = new Statement_no_new_scopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, GLSLParser.RULE_statement_no_new_scope);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 785;
				this.compound_statement_no_new_scope();
				}
				break;
			case GLSLParser.UNIFORM:
			case GLSLParser.BUFFER:
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
			case GLSLParser.HIGHP:
			case GLSLParser.MEDIUMP:
			case GLSLParser.LOWP:
			case GLSLParser.PRECISION:
			case GLSLParser.INTCONSTANT:
			case GLSLParser.CONST_TOK:
			case GLSLParser.PRECISE:
			case GLSLParser.INVARIANT:
			case GLSLParser.SMOOTH:
			case GLSLParser.FLAT:
			case GLSLParser.NOPERSPECTIVE:
			case GLSLParser.CENTROID:
			case GLSLParser.SAMPLE:
			case GLSLParser.ATTRIBUTE:
			case GLSLParser.COHERENT:
			case GLSLParser.VOLATILE:
			case GLSLParser.RESTRICT:
			case GLSLParser.VARYING:
			case GLSLParser.READONLY:
			case GLSLParser.WRITEONLY:
			case GLSLParser.SHARED:
			case GLSLParser.LAYOUT_TOK:
			case GLSLParser.UINTCONSTANT:
			case GLSLParser.FLOATCONSTANT:
			case GLSLParser.BOOLCONSTANT:
			case GLSLParser.INC_OP:
			case GLSLParser.DEC_OP:
			case GLSLParser.VOID_TOK:
			case GLSLParser.FIELD_SELECTION:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.STRUCT:
			case GLSLParser.IF:
			case GLSLParser.SWITCH:
			case GLSLParser.WHILE:
			case GLSLParser.DO:
			case GLSLParser.FOR:
			case GLSLParser.CONTINUE:
			case GLSLParser.BREAK:
			case GLSLParser.RETURN:
			case GLSLParser.DISCARD:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
			case GLSLParser.LPAREN:
			case GLSLParser.SEMICOLON:
			case GLSLParser.PLUS_OP:
			case GLSLParser.MINUS_OP:
			case GLSLParser.NOT_OP:
			case GLSLParser.BNEG_OP:
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				this.simple_statement();
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
	public compound_statement_no_new_scope(): Compound_statement_no_new_scopeContext {
		let _localctx: Compound_statement_no_new_scopeContext = new Compound_statement_no_new_scopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, GLSLParser.RULE_compound_statement_no_new_scope);
		try {
			this.state = 795;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 789;
				this.match(GLSLParser.LBRACE);
				this.state = 790;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 791;
				this.match(GLSLParser.LBRACE);
				this.state = 792;
				this.statement_list(0);
				this.state = 793;
				this.match(GLSLParser.RBRACE);
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

	public statement_list(): Statement_listContext;
	public statement_list(_p: number): Statement_listContext;
	// @RuleVersion(0)
	public statement_list(_p?: number): Statement_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Statement_listContext = new Statement_listContext(this._ctx, _parentState);
		let _prevctx: Statement_listContext = _localctx;
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, GLSLParser.RULE_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 798;
			this.statement();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 804;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Statement_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_statement_list);
					this.state = 800;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 801;
					this.statement();
					}
					}
				}
				this.state = 806;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression_statement(): Expression_statementContext {
		let _localctx: Expression_statementContext = new Expression_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, GLSLParser.RULE_expression_statement);
		try {
			this.state = 811;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 807;
				this.match(GLSLParser.SEMICOLON);
				}
				break;
			case GLSLParser.INTCONSTANT:
			case GLSLParser.UINTCONSTANT:
			case GLSLParser.FLOATCONSTANT:
			case GLSLParser.BOOLCONSTANT:
			case GLSLParser.INC_OP:
			case GLSLParser.DEC_OP:
			case GLSLParser.VOID_TOK:
			case GLSLParser.FIELD_SELECTION:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
			case GLSLParser.LPAREN:
			case GLSLParser.PLUS_OP:
			case GLSLParser.MINUS_OP:
			case GLSLParser.NOT_OP:
			case GLSLParser.BNEG_OP:
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 808;
				this.expression();
				this.state = 809;
				this.match(GLSLParser.SEMICOLON);
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
	public selection_statement(): Selection_statementContext {
		let _localctx: Selection_statementContext = new Selection_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, GLSLParser.RULE_selection_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(GLSLParser.IF);
			this.state = 814;
			this.match(GLSLParser.LPAREN);
			this.state = 815;
			this.expression();
			this.state = 816;
			this.match(GLSLParser.RPAREN);
			this.state = 817;
			this.selection_rest_statement();
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
	public selection_rest_statement(): Selection_rest_statementContext {
		let _localctx: Selection_rest_statementContext = new Selection_rest_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, GLSLParser.RULE_selection_rest_statement);
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 819;
				this.statement();
				this.state = 820;
				this.match(GLSLParser.ELSE);
				this.state = 821;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 823;
				this.statement();
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, GLSLParser.RULE_condition);
		try {
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 826;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 827;
				this.fully_specified_type();
				this.state = 828;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 829;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 830;
				this.initializer();
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
	public switch_statement(): Switch_statementContext {
		let _localctx: Switch_statementContext = new Switch_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, GLSLParser.RULE_switch_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.match(GLSLParser.SWITCH);
			this.state = 835;
			this.match(GLSLParser.LPAREN);
			this.state = 836;
			this.expression();
			this.state = 837;
			this.match(GLSLParser.RPAREN);
			this.state = 838;
			this.switch_body();
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
	public switch_body(): Switch_bodyContext {
		let _localctx: Switch_bodyContext = new Switch_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, GLSLParser.RULE_switch_body);
		try {
			this.state = 846;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 840;
				this.match(GLSLParser.LBRACE);
				this.state = 841;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 842;
				this.match(GLSLParser.LBRACE);
				this.state = 843;
				this.case_statement_list(0);
				this.state = 844;
				this.match(GLSLParser.RBRACE);
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
	public case_label(): Case_labelContext {
		let _localctx: Case_labelContext = new Case_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, GLSLParser.RULE_case_label);
		try {
			this.state = 854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 848;
				this.match(GLSLParser.CASE);
				this.state = 849;
				this.expression();
				this.state = 850;
				this.match(GLSLParser.COLON);
				}
				break;
			case GLSLParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 852;
				this.match(GLSLParser.DEFAULT);
				this.state = 853;
				this.match(GLSLParser.COLON);
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

	public case_label_list(): Case_label_listContext;
	public case_label_list(_p: number): Case_label_listContext;
	// @RuleVersion(0)
	public case_label_list(_p?: number): Case_label_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Case_label_listContext = new Case_label_listContext(this._ctx, _parentState);
		let _prevctx: Case_label_listContext = _localctx;
		let _startState: number = 164;
		this.enterRecursionRule(_localctx, 164, GLSLParser.RULE_case_label_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 857;
			this.case_label();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 863;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Case_label_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_case_label_list);
					this.state = 859;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 860;
					this.case_label();
					}
					}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public case_statement(): Case_statementContext;
	public case_statement(_p: number): Case_statementContext;
	// @RuleVersion(0)
	public case_statement(_p?: number): Case_statementContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Case_statementContext = new Case_statementContext(this._ctx, _parentState);
		let _prevctx: Case_statementContext = _localctx;
		let _startState: number = 166;
		this.enterRecursionRule(_localctx, 166, GLSLParser.RULE_case_statement, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 867;
			this.case_label_list(0);
			this.state = 868;
			this.statement();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 874;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Case_statementContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_case_statement);
					this.state = 870;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 871;
					this.statement();
					}
					}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public case_statement_list(): Case_statement_listContext;
	public case_statement_list(_p: number): Case_statement_listContext;
	// @RuleVersion(0)
	public case_statement_list(_p?: number): Case_statement_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Case_statement_listContext = new Case_statement_listContext(this._ctx, _parentState);
		let _prevctx: Case_statement_listContext = _localctx;
		let _startState: number = 168;
		this.enterRecursionRule(_localctx, 168, GLSLParser.RULE_case_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 878;
			this.case_statement(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 884;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Case_statement_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_case_statement_list);
					this.state = 880;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 881;
					this.case_statement(0);
					}
					}
				}
				this.state = 886;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteration_statement(): Iteration_statementContext {
		let _localctx: Iteration_statementContext = new Iteration_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, GLSLParser.RULE_iteration_statement);
		try {
			this.state = 908;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 887;
				this.match(GLSLParser.WHILE);
				this.state = 888;
				this.match(GLSLParser.LPAREN);
				this.state = 889;
				this.condition();
				this.state = 890;
				this.match(GLSLParser.RPAREN);
				this.state = 891;
				this.statement_no_new_scope();
				}
				break;
			case GLSLParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 893;
				this.match(GLSLParser.DO);
				this.state = 894;
				this.statement();
				this.state = 895;
				this.match(GLSLParser.WHILE);
				this.state = 896;
				this.match(GLSLParser.LPAREN);
				this.state = 897;
				this.expression();
				this.state = 898;
				this.match(GLSLParser.RPAREN);
				this.state = 899;
				this.match(GLSLParser.SEMICOLON);
				}
				break;
			case GLSLParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 901;
				this.match(GLSLParser.FOR);
				this.state = 902;
				this.match(GLSLParser.LPAREN);
				this.state = 903;
				this.for_init_statement();
				this.state = 904;
				this.for_rest_statement();
				this.state = 905;
				this.match(GLSLParser.RPAREN);
				this.state = 906;
				this.statement_no_new_scope();
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
	public for_init_statement(): For_init_statementContext {
		let _localctx: For_init_statementContext = new For_init_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, GLSLParser.RULE_for_init_statement);
		try {
			this.state = 912;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 910;
				this.expression_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 911;
				this.declaration_statement();
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
	public conditionopt(): ConditionoptContext {
		let _localctx: ConditionoptContext = new ConditionoptContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, GLSLParser.RULE_conditionopt);
		try {
			this.state = 916;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.UNIFORM:
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
			case GLSLParser.HIGHP:
			case GLSLParser.MEDIUMP:
			case GLSLParser.LOWP:
			case GLSLParser.INTCONSTANT:
			case GLSLParser.CONST_TOK:
			case GLSLParser.PRECISE:
			case GLSLParser.INVARIANT:
			case GLSLParser.SMOOTH:
			case GLSLParser.FLAT:
			case GLSLParser.NOPERSPECTIVE:
			case GLSLParser.CENTROID:
			case GLSLParser.SAMPLE:
			case GLSLParser.ATTRIBUTE:
			case GLSLParser.COHERENT:
			case GLSLParser.VOLATILE:
			case GLSLParser.RESTRICT:
			case GLSLParser.VARYING:
			case GLSLParser.READONLY:
			case GLSLParser.WRITEONLY:
			case GLSLParser.SHARED:
			case GLSLParser.LAYOUT_TOK:
			case GLSLParser.UINTCONSTANT:
			case GLSLParser.FLOATCONSTANT:
			case GLSLParser.BOOLCONSTANT:
			case GLSLParser.INC_OP:
			case GLSLParser.DEC_OP:
			case GLSLParser.VOID_TOK:
			case GLSLParser.FIELD_SELECTION:
			case GLSLParser.FLOAT_TOK:
			case GLSLParser.INT_TOK:
			case GLSLParser.UINT_TOK:
			case GLSLParser.BOOL_TOK:
			case GLSLParser.SAMPLERCUBE:
			case GLSLParser.SAMPLEREXTERNALOES:
			case GLSLParser.SAMPLERCUBESHADOW:
			case GLSLParser.SAMPLERBUFFER:
			case GLSLParser.SAMPLERCUBEARRAY:
			case GLSLParser.SAMPLERCUBEARRAYSHADOW:
			case GLSLParser.ISAMPLERCUBE:
			case GLSLParser.ISAMPLERBUFFER:
			case GLSLParser.ISAMPLERCUBEARRAY:
			case GLSLParser.USAMPLERCUBE:
			case GLSLParser.USAMPLERBUFFER:
			case GLSLParser.USAMPLERCUBEARRAY:
			case GLSLParser.IMAGECUBE:
			case GLSLParser.IMAGEBUFFER:
			case GLSLParser.IMAGECUBEARRAY:
			case GLSLParser.IIMAGECUBE:
			case GLSLParser.IIMAGEBUFFER:
			case GLSLParser.IIMAGECUBEARRAY:
			case GLSLParser.UIMAGECUBE:
			case GLSLParser.UIMAGEBUFFER:
			case GLSLParser.UIMAGECUBEARRAY:
			case GLSLParser.ATOMIC_UINT:
			case GLSLParser.STRUCT:
			case GLSLParser.VEC2:
			case GLSLParser.VEC3:
			case GLSLParser.VEC4:
			case GLSLParser.BVEC2:
			case GLSLParser.BVEC3:
			case GLSLParser.BVEC4:
			case GLSLParser.IVEC2:
			case GLSLParser.IVEC3:
			case GLSLParser.IVEC4:
			case GLSLParser.UVEC2:
			case GLSLParser.UVEC3:
			case GLSLParser.UVEC4:
			case GLSLParser.MAT2X2:
			case GLSLParser.MAT2X3:
			case GLSLParser.MAT2X4:
			case GLSLParser.MAT3X2:
			case GLSLParser.MAT3X3:
			case GLSLParser.MAT3X4:
			case GLSLParser.MAT4X2:
			case GLSLParser.MAT4X3:
			case GLSLParser.MAT4X4:
			case GLSLParser.IMAGE1D:
			case GLSLParser.IMAGE2D:
			case GLSLParser.IMAGE3D:
			case GLSLParser.UIMAGE1D:
			case GLSLParser.UIMAGE2D:
			case GLSLParser.UIMAGE3D:
			case GLSLParser.IIMAGE1D:
			case GLSLParser.IIMAGE2D:
			case GLSLParser.IIMAGE3D:
			case GLSLParser.SAMPLER1D:
			case GLSLParser.SAMPLER2D:
			case GLSLParser.SAMPLER3D:
			case GLSLParser.SAMPLER2DRECT:
			case GLSLParser.SAMPLER1DSHADOW:
			case GLSLParser.SAMPLER2DSHADOW:
			case GLSLParser.SAMPLER2DRECTSHADOW:
			case GLSLParser.SAMPLER1DARRAY:
			case GLSLParser.SAMPLER2DARRAY:
			case GLSLParser.SAMPLER1DARRAYSHADOW:
			case GLSLParser.SAMPLER2DARRAYSHADOW:
			case GLSLParser.ISAMPLER1D:
			case GLSLParser.ISAMPLER2D:
			case GLSLParser.ISAMPLER2DRECT:
			case GLSLParser.ISAMPLER3D:
			case GLSLParser.ISAMPLER1DARRAY:
			case GLSLParser.ISAMPLER2DARRAY:
			case GLSLParser.USAMPLER1D:
			case GLSLParser.USAMPLER2D:
			case GLSLParser.USAMPLER2DRECT:
			case GLSLParser.USAMPLER3D:
			case GLSLParser.USAMPLER1DARRAY:
			case GLSLParser.USAMPLER2DARRAY:
			case GLSLParser.SAMPLER2DMS:
			case GLSLParser.ISAMPLER2DMS:
			case GLSLParser.USAMPLER2DMS:
			case GLSLParser.SAMPLER2DMSARRAY:
			case GLSLParser.ISAMPLER2DMSARRAY:
			case GLSLParser.USAMPLER2DMSARRAY:
			case GLSLParser.IMAGE2DRECT:
			case GLSLParser.IMAGE1DARRAY:
			case GLSLParser.IMAGE2DARRAY:
			case GLSLParser.IMAGE2DMS:
			case GLSLParser.IMAGE2DMSARRAY:
			case GLSLParser.IIMAGE2DRECT:
			case GLSLParser.IIMAGE1DARRAY:
			case GLSLParser.IIMAGE2DARRAY:
			case GLSLParser.IIMAGE2DMS:
			case GLSLParser.IIMAGE2DMSARRAY:
			case GLSLParser.UIMAGE2DRECT:
			case GLSLParser.UIMAGE1DARRAY:
			case GLSLParser.UIMAGE2DARRAY:
			case GLSLParser.UIMAGE2DMS:
			case GLSLParser.UIMAGE2DMSARRAY:
			case GLSLParser.LPAREN:
			case GLSLParser.PLUS_OP:
			case GLSLParser.MINUS_OP:
			case GLSLParser.NOT_OP:
			case GLSLParser.BNEG_OP:
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 914;
				this.condition();
				}
				break;
			case GLSLParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public for_rest_statement(): For_rest_statementContext {
		let _localctx: For_rest_statementContext = new For_rest_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, GLSLParser.RULE_for_rest_statement);
		try {
			this.state = 925;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.conditionopt();
				this.state = 919;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
				this.conditionopt();
				this.state = 922;
				this.match(GLSLParser.SEMICOLON);
				this.state = 923;
				this.expression();
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
	public jump_statement(): Jump_statementContext {
		let _localctx: Jump_statementContext = new Jump_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, GLSLParser.RULE_jump_statement);
		try {
			this.state = 939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 927;
				this.match(GLSLParser.CONTINUE);
				this.state = 928;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 929;
				this.match(GLSLParser.BREAK);
				this.state = 930;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 931;
				this.match(GLSLParser.RETURN);
				this.state = 932;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 933;
				this.match(GLSLParser.RETURN);
				this.state = 934;
				this.expression();
				this.state = 935;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 937;
				this.match(GLSLParser.DISCARD);
				this.state = 938;
				this.match(GLSLParser.SEMICOLON);
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
	public external_declaration(): External_declarationContext {
		let _localctx: External_declarationContext = new External_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, GLSLParser.RULE_external_declaration);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 941;
				this.function_definition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 943;
				this.pragma_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 944;
				this.layout_defaults();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 945;
				this.preprocessor_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 946;
				this.extension_statement();
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
	public function_definition(): Function_definitionContext {
		let _localctx: Function_definitionContext = new Function_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, GLSLParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			this.function_prototype();
			this.state = 950;
			this.compound_statement_no_new_scope();
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
	public interface_block(): Interface_blockContext {
		let _localctx: Interface_blockContext = new Interface_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, GLSLParser.RULE_interface_block);
		try {
			this.state = 956;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.UNIFORM:
			case GLSLParser.BUFFER:
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 952;
				this.basic_interface_block();
				}
				break;
			case GLSLParser.LAYOUT_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 953;
				this.layout_qualifier();
				this.state = 954;
				this.basic_interface_block();
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
	public basic_interface_block(): Basic_interface_blockContext {
		let _localctx: Basic_interface_blockContext = new Basic_interface_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, GLSLParser.RULE_basic_interface_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
			this.interface_qualifier();
			this.state = 959;
			this.match(GLSLParser.IDENTIFIER);
			this.state = 960;
			this.match(GLSLParser.LBRACE);
			this.state = 961;
			this.member_list(0);
			this.state = 962;
			this.match(GLSLParser.RBRACE);
			this.state = 963;
			this.instance_name_opt();
			this.state = 964;
			this.match(GLSLParser.SEMICOLON);
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
	public interface_qualifier(): Interface_qualifierContext {
		let _localctx: Interface_qualifierContext = new Interface_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, GLSLParser.RULE_interface_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GLSLParser.UNIFORM) | (1 << GLSLParser.BUFFER) | (1 << GLSLParser.IN_TOK) | (1 << GLSLParser.OUT_TOK))) !== 0))) {
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
	// @RuleVersion(0)
	public instance_name_opt(): Instance_name_optContext {
		let _localctx: Instance_name_optContext = new Instance_name_optContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, GLSLParser.RULE_instance_name_opt);
		try {
			this.state = 972;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 969;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 970;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 971;
				this.array_specifier(0);
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
	public layout_defaults(): Layout_defaultsContext {
		let _localctx: Layout_defaultsContext = new Layout_defaultsContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, GLSLParser.RULE_layout_defaults);
		try {
			this.state = 990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 974;
				this.layout_qualifier();
				this.state = 975;
				this.match(GLSLParser.UNIFORM);
				this.state = 976;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 978;
				this.layout_qualifier();
				this.state = 979;
				this.match(GLSLParser.IN_TOK);
				this.state = 980;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 982;
				this.layout_qualifier();
				this.state = 983;
				this.match(GLSLParser.OUT_TOK);
				this.state = 984;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 986;
				this.layout_qualifier();
				this.state = 987;
				this.match(GLSLParser.BUFFER);
				this.state = 988;
				this.match(GLSLParser.SEMICOLON);
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
	public preprocessor_statement(): Preprocessor_statementContext {
		let _localctx: Preprocessor_statementContext = new Preprocessor_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, GLSLParser.RULE_preprocessor_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GLSLParser.PREPROC_DEFINE) | (1 << GLSLParser.PREPROC_IF) | (1 << GLSLParser.PREPROC_IFDEF) | (1 << GLSLParser.PREPROC_IFNDEF) | (1 << GLSLParser.PREPROC_ELIF) | (1 << GLSLParser.PREPROC_UNDEF) | (1 << GLSLParser.PREPROC_ELSE) | (1 << GLSLParser.PREPROC_ENDIF))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex);

		case 9:
			return this.function_call_header_with_parameters_sempred(_localctx as Function_call_header_with_parametersContext, predIndex);

		case 14:
			return this.method_call_header_with_parameters_sempred(_localctx as Method_call_header_with_parametersContext, predIndex);

		case 37:
			return this.function_header_with_parameters_sempred(_localctx as Function_header_with_parametersContext, predIndex);

		case 44:
			return this.init_declarator_list_sempred(_localctx as Init_declarator_listContext, predIndex);

		case 48:
			return this.layout_qualifier_id_list_sempred(_localctx as Layout_qualifier_id_listContext, predIndex);

		case 56:
			return this.array_specifier_sempred(_localctx as Array_specifierContext, predIndex);

		case 62:
			return this.member_list_sempred(_localctx as Member_listContext, predIndex);

		case 64:
			return this.struct_declarator_list_sempred(_localctx as Struct_declarator_listContext, predIndex);

		case 67:
			return this.initializer_list_sempred(_localctx as Initializer_listContext, predIndex);

		case 74:
			return this.statement_list_sempred(_localctx as Statement_listContext, predIndex);

		case 82:
			return this.case_label_list_sempred(_localctx as Case_label_listContext, predIndex);

		case 83:
			return this.case_statement_sempred(_localctx as Case_statementContext, predIndex);

		case 84:
			return this.case_statement_list_sempred(_localctx as Case_statement_listContext, predIndex);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private function_call_header_with_parameters_sempred(_localctx: Function_call_header_with_parametersContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private method_call_header_with_parameters_sempred(_localctx: Method_call_header_with_parametersContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private function_header_with_parameters_sempred(_localctx: Function_header_with_parametersContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private init_declarator_list_sempred(_localctx: Init_declarator_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private layout_qualifier_id_list_sempred(_localctx: Layout_qualifier_id_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private array_specifier_sempred(_localctx: Array_specifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private member_list_sempred(_localctx: Member_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private struct_declarator_list_sempred(_localctx: Struct_declarator_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializer_list_sempred(_localctx: Initializer_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private statement_list_sempred(_localctx: Statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private case_label_list_sempred(_localctx: Case_label_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private case_statement_sempred(_localctx: Case_statementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private case_statement_list_sempred(_localctx: Case_statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xD7\u03E5\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xD1\n\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x06\x04\xDA\n\x04\r\x04\x0E\x04" +
		"\xDB\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xEB\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xF0\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07\u0101\n\x07\f\x07\x0E\x07\u0104\v\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u010E\n\t\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0114\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u011D\n\v" +
		"\f\v\x0E\v\u0120\v\v\x03\f\x03\f\x05\f\u0124\n\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x05\r\u012B\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0133\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0139\n\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0142" +
		"\n\x10\f\x10\x0E\x10\u0145\v\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0152\n\x12\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u015A\n\x14\x03\x14" +
		"\x07\x14\u015D\n\x14\f\x14\x0E\x14\u0160\v\x14\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u0165\n\x15\x03\x15\x07\x15\u0168\n\x15\f\x15\x0E\x15\u016B\v" +
		"\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0170\n\x16\x03\x16\x07\x16\u0173" +
		"\n\x16\f\x16\x0E\x16\u0176\v\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x05\x17\u017D\n\x17\x03\x17\x07\x17\u0180\n\x17\f\x17\x0E\x17\u0183\v" +
		"\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0188\n\x18\x03\x18\x07\x18\u018B" +
		"\n\x18\f\x18\x0E\x18\u018E\v\x18\x03\x19\x03\x19\x03\x19\x07\x19\u0193" +
		"\n\x19\f\x19\x0E\x19\u0196\v\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u019B" +
		"\n\x1A\f\x1A\x0E\x1A\u019E\v\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01A3" +
		"\n\x1B\f\x1B\x0E\x1B\u01A6\v\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u01AB" +
		"\n\x1C\f\x1C\x0E\x1C\u01AE\v\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01B3" +
		"\n\x1D\f\x1D\x0E\x1D\u01B6\v\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01BB" +
		"\n\x1E\f\x1E\x0E\x1E\u01BE\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x07\x1F\u01C6\n\x1F\f\x1F\x0E\x1F\u01C9\v\x1F\x03 \x03 \x03 " +
		"\x03 \x03 \x05 \u01D0\n \x03!\x03!\x03\"\x03\"\x03\"\x07\"\u01D7\n\"\f" +
		"\"\x0E\"\u01DA\v\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x05$\u01EA\n$\x03%\x03%\x03%\x03&\x03&\x05&\u01F1\n&" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01FA\n\'\f\'\x0E\'\u01FD" +
		"\v\'\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u020A" +
		"\n)\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0212\n*\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u021F\n+\x03,\x03,\x03-\x03-\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u023B\n.\f.\x0E.\u023E\v.\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0257\n/\x030\x030\x03" +
		"0\x030\x050\u025D\n0\x031\x031\x031\x031\x031\x032\x032\x032\x032\x03" +
		"2\x032\x072\u026A\n2\f2\x0E2\u026D\v2\x033\x033\x034\x034\x034\x034\x03" +
		"4\x054\u0276\n4\x035\x035\x036\x036\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x057\u0296\n7\x038\x038\x039\x039\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x05:\u02A3\n:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x07:\u02AD\n:\f:\x0E:\u02B0\v:\x03;\x03;\x03;\x03;\x05;\u02B6" +
		"\n;\x03<\x03<\x03<\x05<\u02BB\n<\x03=\x03=\x03>\x03>\x03?\x03?\x05?\u02C3" +
		"\n?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x07@\u02CE\n@\f@\x0E" +
		"@\u02D1\v@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u02DD" +
		"\nB\fB\x0EB\u02E0\vB\x03C\x03C\x03C\x05C\u02E5\nC\x03D\x03D\x03D\x03D" +
		"\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u02F1\nD\x03E\x03E\x03E\x03E\x03E" +
		"\x03E\x07E\u02F9\nE\fE\x0EE\u02FC\vE\x03F\x03F\x03G\x03G\x05G\u0302\n" +
		"G\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u030A\nH\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x05I\u0312\nI\x03J\x03J\x05J\u0316\nJ\x03K\x03K\x03K\x03K\x03K" +
		"\x03K\x05K\u031E\nK\x03L\x03L\x03L\x03L\x03L\x07L\u0325\nL\fL\x0EL\u0328" +
		"\vL\x03M\x03M\x03M\x03M\x05M\u032E\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"O\x03O\x03O\x03O\x03O\x05O\u033B\nO\x03P\x03P\x03P\x03P\x03P\x03P\x05" +
		"P\u0343\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x05R\u0351\nR\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u0359\nS\x03T\x03T" +
		"\x03T\x03T\x03T\x07T\u0360\nT\fT\x0ET\u0363\vT\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x07U\u036B\nU\fU\x0EU\u036E\vU\x03V\x03V\x03V\x03V\x03V\x07V\u0375" +
		"\nV\fV\x0EV\u0378\vV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u038F\n" +
		"W\x03X\x03X\x05X\u0393\nX\x03Y\x03Y\x05Y\u0397\nY\x03Z\x03Z\x03Z\x03Z" +
		"\x03Z\x03Z\x03Z\x05Z\u03A0\nZ\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[" +
		"\x03[\x03[\x03[\x03[\x05[\u03AE\n[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\" +
		"\x05\\\u03B6\n\\\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x05^\u03BF\n^\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03`\x03`\x03a\x03a\x03a\x03a\x05" +
		"a\u03CF\na\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03" +
		"b\x03b\x03b\x03b\x03b\x05b\u03E1\nb\x03c\x03c\x03c\x02\x02\x10\f\x14\x1E" +
		"LZbr~\x82\x88\x96\xA6\xA8\xAAd\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\x02\x0F\x03\x02\xD3\xD3\x03\x02\xC5\xC8\x04\x02" +
		"AJ\xD2\xD2\x03\x02\x15\x17\x04\x02\x1D\x1D//\x03\x0201\x03\x02!#\x03\x02" +
		"$%\x06\x02\x13\x13\x15\x16\x1E\x1E&-\x05\x0266Kdr\xBB\x03\x02\x18\x1A" +
		"\x03\x02\x13\x16\x03\x02\x03\n\x02\u040D\x02\xD0\x03\x02\x02\x02\x04\xD2" +
		"\x03\x02\x02\x02\x06\xD9\x03\x02\x02\x02\b\xDD\x03\x02\x02\x02\n\xEA\x03" +
		"\x02\x02\x02\f\xEF\x03\x02\x02\x02\x0E\u0105\x03\x02\x02\x02\x10\u010D" +
		"\x03\x02\x02\x02\x12\u0113\x03\x02\x02\x02\x14\u0115\x03\x02\x02\x02\x16" +
		"\u0121\x03\x02\x02\x02\x18\u012A\x03\x02\x02\x02\x1A\u0132\x03\x02\x02" +
		"\x02\x1C\u0138\x03\x02\x02\x02\x1E\u013A\x03\x02\x02\x02 \u0146\x03\x02" +
		"\x02\x02\"\u0151\x03\x02\x02\x02$\u0153\x03\x02\x02\x02&\u0155\x03\x02" +
		"\x02\x02(\u0161\x03\x02\x02\x02*\u016C\x03\x02\x02\x02,\u0177\x03\x02" +
		"\x02\x02.\u0184\x03\x02\x02\x020\u018F\x03\x02\x02\x022\u0197\x03\x02" +
		"\x02\x024\u019F\x03\x02\x02\x026\u01A7\x03\x02\x02\x028\u01AF\x03\x02" +
		"\x02\x02:\u01B7\x03\x02\x02\x02<\u01BF\x03\x02\x02\x02>\u01CF\x03\x02" +
		"\x02\x02@\u01D1\x03\x02\x02\x02B\u01D3\x03\x02\x02\x02D\u01DB\x03\x02" +
		"\x02\x02F\u01E9\x03\x02\x02\x02H\u01EB\x03\x02\x02\x02J\u01F0\x03\x02" +
		"\x02\x02L\u01F2\x03\x02\x02\x02N\u01FE\x03\x02\x02\x02P\u0209\x03\x02" +
		"\x02\x02R\u0211\x03\x02\x02\x02T\u021E\x03\x02\x02\x02V\u0220\x03\x02" +
		"\x02\x02X\u0222\x03\x02\x02\x02Z\u0224\x03\x02\x02\x02\\\u0256\x03\x02" +
		"\x02\x02^\u025C\x03\x02\x02\x02`\u025E\x03\x02\x02\x02b\u0263\x03\x02" +
		"\x02\x02d\u026E\x03\x02\x02\x02f\u0275\x03\x02\x02\x02h\u0277\x03\x02" +
		"\x02\x02j\u0279\x03\x02\x02\x02l\u0295\x03\x02\x02\x02n\u0297\x03\x02" +
		"\x02\x02p\u0299\x03\x02\x02\x02r\u02A2\x03\x02\x02\x02t\u02B5\x03\x02" +
		"\x02\x02v\u02BA\x03\x02\x02\x02x\u02BC\x03\x02\x02\x02z\u02BE\x03\x02" +
		"\x02\x02|\u02C0\x03\x02\x02\x02~\u02C8\x03\x02\x02\x02\x80\u02D2\x03\x02" +
		"\x02\x02\x82\u02D6\x03\x02\x02\x02\x84\u02E4\x03\x02\x02\x02\x86\u02F0" +
		"\x03\x02\x02\x02\x88\u02F2\x03\x02\x02\x02\x8A\u02FD\x03\x02\x02\x02\x8C" +
		"\u0301\x03\x02\x02\x02\x8E\u0309\x03\x02\x02\x02\x90\u0311\x03\x02\x02" +
		"\x02\x92\u0315\x03\x02\x02\x02\x94\u031D\x03\x02\x02\x02\x96\u031F\x03" +
		"\x02\x02\x02\x98\u032D\x03\x02\x02\x02\x9A\u032F\x03\x02\x02\x02\x9C\u033A" +
		"\x03\x02\x02\x02\x9E\u0342\x03\x02\x02\x02\xA0\u0344\x03\x02\x02\x02\xA2" +
		"\u0350\x03\x02\x02\x02\xA4\u0358\x03\x02\x02\x02\xA6\u035A\x03\x02\x02" +
		"\x02\xA8\u0364\x03\x02\x02\x02\xAA\u036F\x03\x02\x02\x02\xAC\u038E\x03" +
		"\x02\x02\x02\xAE\u0392\x03\x02\x02\x02\xB0\u0396\x03\x02\x02\x02\xB2\u039F" +
		"\x03\x02\x02\x02\xB4\u03AD\x03\x02\x02\x02\xB6\u03B5\x03\x02\x02\x02\xB8" +
		"\u03B7\x03\x02\x02\x02\xBA\u03BE\x03\x02\x02\x02\xBC\u03C0\x03\x02\x02" +
		"\x02\xBE\u03C8\x03\x02\x02\x02\xC0\u03CE\x03\x02\x02\x02\xC2\u03E0\x03" +
		"\x02\x02\x02\xC4\u03E2\x03\x02\x02\x02\xC6\xC7\x07\f\x02\x02\xC7\xD1\x07" +
		"\xD7\x02\x02\xC8\xC9\x07\r\x02\x02\xC9\xD1\x07\xD7\x02\x02\xCA\xCB\x07" +
		"\x0E\x02\x02\xCB\xD1\x07\xD7\x02\x02\xCC\xCD\x07\x0F\x02\x02\xCD\xD1\x07" +
		"\xD7\x02\x02\xCE\xCF\x07\x10\x02\x02\xCF\xD1\x07\xD7\x02\x02\xD0\xC6\x03" +
		"\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD0\xCA\x03\x02\x02\x02\xD0\xCC\x03" +
		"\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\x03\x03\x02\x02\x02\xD2\xD3\x07" +
		"\x11\x02\x02\xD3\xD4\x07\xD3\x02\x02\xD4\xD5\x07\x12\x02\x02\xD5\xD6\x07" +
		"\xD3\x02\x02\xD6\xD7\x07\xD7\x02\x02\xD7\x05\x03\x02\x02\x02\xD8\xDA\x05" +
		"\xB6\\\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xD9\x03" +
		"\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x07\x03\x02\x02\x02\xDD\xDE\t" +
		"\x02\x02\x02\xDE\t\x03\x02\x02\x02\xDF\xE0\x05\b\x05\x02\xE0\xE1\b\x06" +
		"\x01\x02\xE1\xEB\x03\x02\x02\x02\xE2\xEB\x07\x1D\x02\x02\xE3\xEB\x07/" +
		"\x02\x02\xE4\xEB\x072\x02\x02\xE5\xEB\x073\x02\x02\xE6\xE7\x07\xBC\x02" +
		"\x02\xE7\xE8\x05B\"\x02\xE8\xE9\x07\xBD\x02\x02\xE9\xEB\x03\x02\x02\x02" +
		"\xEA\xDF\x03\x02\x02\x02\xEA\xE2\x03\x02\x02\x02\xEA\xE3\x03\x02\x02\x02" +
		"\xEA\xE4\x03\x02\x02\x02\xEA\xE5\x03\x02\x02\x02\xEA\xE6\x03\x02\x02\x02" +
		"\xEB\v\x03\x02\x02\x02\xEC\xED\b\x07\x01\x02\xED\xF0\x05\n\x06\x02\xEE" +
		"\xF0\x05\x10\t\x02\xEF\xEC\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02\xF0" +
		"\u0102\x03\x02\x02\x02\xF1\xF2\f\b\x02\x02\xF2\xF3\x07\xC1\x02\x02\xF3" +
		"\xF4\x05\x0E\b\x02\xF4\xF5\x07\xC2\x02\x02\xF5\u0101\x03\x02\x02\x02\xF6" +
		"\xF7\f\x07\x02\x02\xF7\xF8\x07\xC4\x02\x02\xF8\u0101\x05\x1A\x0E\x02\xF9" +
		"\xFA\f\x06\x02\x02\xFA\xFB\x07\xC4\x02\x02\xFB\u0101\x07\xD3\x02\x02\xFC" +
		"\xFD\f\x05\x02\x02\xFD\u0101\x074\x02\x02\xFE\xFF\f\x04\x02\x02\xFF\u0101" +
		"\x075\x02\x02\u0100\xF1\x03\x02\x02\x02\u0100\xF6\x03\x02\x02\x02\u0100" +
		"\xF9\x03\x02\x02\x02\u0100\xFC\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
		"\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03" +
		"\x02\x02\x02\u0103\r\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105" +
		"\u0106\x05B\"\x02\u0106\x0F\x03\x02\x02\x02\u0107\u0108\x05\x14\v\x02" +
		"\u0108\u0109\x07\xBD\x02\x02\u0109\u010E\x03\x02\x02\x02\u010A\u010B\x05" +
		"\x12\n\x02\u010B\u010C\x07\xBD\x02\x02\u010C\u010E\x03\x02\x02\x02\u010D" +
		"\u0107\x03\x02\x02\x02\u010D\u010A\x03\x02\x02\x02\u010E\x11\x03\x02\x02" +
		"\x02\u010F\u0110\x05\x16\f\x02\u0110\u0111\x076\x02\x02\u0111\u0114\x03" +
		"\x02\x02\x02\u0112\u0114\x05\x16\f\x02\u0113\u010F\x03\x02\x02\x02\u0113" +
		"\u0112\x03\x02\x02\x02\u0114\x13\x03\x02\x02\x02\u0115\u0116\b\v\x01\x02" +
		"\u0116\u0117\x05\x16\f\x02\u0117\u0118\x05> \x02\u0118\u011E\x03\x02\x02" +
		"\x02\u0119\u011A\f\x03\x02\x02\u011A\u011B\x07\xC3\x02\x02\u011B\u011D" +
		"\x05> \x02\u011C\u0119\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E" +
		"\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\x15\x03\x02\x02" +
		"\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0123\x05\x18\r\x02\u0122\u0124" +
		"\x05r:\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0126\x07\xBC\x02\x02\u0126\x17\x03\x02\x02" +
		"\x02\u0127\u012B\x05x=\x02\u0128\u012B\x05\b\x05\x02\u0129\u012B\x077" +
		"\x02\x02\u012A\u0127\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A" +
		"\u0129\x03\x02\x02\x02\u012B\x19\x03\x02\x02\x02\u012C\u012D\x05\x1E\x10" +
		"\x02\u012D\u012E\x07\xBD\x02\x02\u012E\u0133\x03\x02\x02\x02\u012F\u0130" +
		"\x05\x1C\x0F\x02\u0130\u0131\x07\xBD\x02\x02\u0131\u0133\x03\x02\x02\x02" +
		"\u0132\u012C\x03\x02\x02\x02\u0132\u012F\x03\x02\x02\x02\u0133\x1B\x03" +
		"\x02\x02\x02\u0134\u0135\x05 \x11\x02\u0135\u0136\x076\x02\x02\u0136\u0139" +
		"\x03\x02\x02\x02\u0137\u0139\x05 \x11\x02\u0138\u0134\x03\x02\x02\x02" +
		"\u0138\u0137\x03\x02\x02\x02\u0139\x1D\x03\x02\x02\x02\u013A\u013B\b\x10" +
		"\x01\x02\u013B\u013C\x05 \x11\x02\u013C\u013D\x05> \x02\u013D\u0143\x03" +
		"\x02\x02\x02\u013E\u013F\f\x03\x02\x02\u013F\u0140\x07\xC3\x02\x02\u0140" +
		"\u0142\x05> \x02\u0141\u013E\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02" +
		"\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\x1F\x03" +
		"\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0147\x05\b\x05\x02\u0147" +
		"\u0148\x07\xBC\x02\x02\u0148!\x03\x02\x02\x02\u0149\u0152\x05\f\x07\x02" +
		"\u014A\u014B\x074\x02\x02\u014B\u0152\x05\"\x12\x02\u014C\u014D\x075\x02" +
		"\x02\u014D\u0152\x05\"\x12\x02\u014E\u014F\x05$\x13\x02\u014F\u0150\x05" +
		"\"\x12\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0149\x03\x02\x02\x02\u0151" +
		"\u014A\x03\x02\x02\x02\u0151\u014C\x03\x02\x02\x02\u0151\u014E\x03\x02" +
		"\x02\x02\u0152#\x03\x02\x02\x02\u0153\u0154\t\x03\x02\x02\u0154%\x03\x02" +
		"\x02\x02\u0155\u015E\x05\"\x12\x02\u0156\u015A\x07\xC9\x02\x02\u0157\u015A" +
		"\x07\xCA\x02\x02\u0158\u015A\x07\xCB\x02\x02\u0159\u0156\x03\x02\x02\x02" +
		"\u0159\u0157\x03\x02\x02\x02\u0159\u0158\x03\x02\x02\x02\u015A\u015B\x03" +
		"\x02\x02\x02\u015B\u015D\x05\"\x12\x02\u015C\u0159\x03\x02\x02\x02\u015D" +
		"\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02" +
		"\x02\x02\u015F\'\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0169" +
		"\x05&\x14\x02\u0162\u0165\x07\xC5\x02\x02\u0163\u0165\x07\xC6\x02\x02" +
		"\u0164\u0162\x03\x02\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0166\x03" +
		"\x02\x02\x02\u0166\u0168\x05&\x14\x02\u0167\u0164\x03\x02\x02\x02\u0168" +
		"\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02" +
		"\x02\x02\u016A)\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u0174" +
		"\x05(\x15\x02\u016D\u0170\x078\x02\x02\u016E\u0170\x079\x02\x02\u016F" +
		"\u016D\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02" +
		"\x02\x02\u0171\u0173\x05(\x15\x02\u0172\u016F\x03\x02\x02\x02\u0173\u0176" +
		"\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
		"\u0175+\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u0181\x05*\x16" +
		"\x02\u0178\u017D\x07\xCC\x02\x02\u0179\u017D\x07\xCD\x02\x02\u017A\u017D" +
		"\x07:\x02\x02\u017B\u017D\x07;\x02\x02\u017C\u0178\x03\x02\x02\x02\u017C" +
		"\u0179\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017B\x03\x02" +
		"\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0180\x05*\x16\x02\u017F\u017C" +
		"\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02" +
		"\u0181\u0182\x03\x02\x02\x02\u0182-\x03\x02\x02\x02\u0183\u0181\x03\x02" +
		"\x02\x02\u0184\u018C\x05,\x17\x02\u0185\u0188\x07<\x02\x02\u0186\u0188" +
		"\x07=\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0186\x03\x02\x02\x02" +
		"\u0188\u0189\x03\x02\x02\x02\u0189\u018B\x05,\x17\x02\u018A\u0187\x03" +
		"\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C" +
		"\u018D\x03\x02\x02\x02\u018D/\x03\x02\x02\x02\u018E\u018C\x03\x02\x02" +
		"\x02\u018F\u0194\x05.\x18\x02\u0190\u0191\x07\xCE\x02\x02\u0191\u0193" +
		"\x05.\x18\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02" +
		"\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u01951\x03\x02" +
		"\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u019C\x050\x19\x02\u0198\u0199" +
		"\x07\xD0\x02\x02\u0199\u019B\x050\x19\x02\u019A\u0198\x03\x02\x02\x02" +
		"\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D3\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F" +
		"\u01A4\x052\x1A\x02\u01A0\u01A1\x07\xCF\x02\x02\u01A1\u01A3\x052\x1A\x02" +
		"\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03" +
		"\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A55\x03\x02\x02\x02\u01A6" +
		"\u01A4\x03\x02\x02\x02\u01A7\u01AC\x054\x1B\x02\u01A8\u01A9\x07>\x02\x02" +
		"\u01A9\u01AB\x054\x1B\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AE\x03" +
		"\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD" +
		"7\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B4\x056\x1C\x02" +
		"\u01B0\u01B1\x07?\x02\x02\u01B1\u01B3\x056\x1C\x02\u01B2\u01B0\x03\x02" +
		"\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4" +
		"\u01B5\x03\x02\x02\x02\u01B59\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02" +
		"\x02\u01B7\u01BC\x058\x1D\x02\u01B8\u01B9\x07@\x02\x02\u01B9\u01BB\x05" +
		"8\x1D\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02\u01BC" +
		"\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD;\x03\x02\x02" +
		"\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C7\x05:\x1E\x02\u01C0\u01C1" +
		"\x07\xD1\x02\x02\u01C1\u01C2\x05B\"\x02\u01C2\u01C3\x07\x12\x02\x02\u01C3" +
		"\u01C4\x05> \x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01C0\x03\x02\x02\x02" +
		"\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03" +
		"\x02\x02\x02\u01C8=\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA" +
		"\u01D0\x05<\x1F\x02\u01CB\u01CC\x05\"\x12\x02\u01CC\u01CD\x05@!\x02\u01CD" +
		"\u01CE\x05> \x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01CA\x03\x02\x02\x02" +
		"\u01CF\u01CB\x03\x02\x02\x02\u01D0?\x03\x02\x02\x02\u01D1\u01D2\t\x04" +
		"\x02\x02\u01D2A\x03\x02\x02\x02\u01D3\u01D8\x05> \x02\u01D4\u01D5\x07" +
		"\xC3\x02\x02\u01D5\u01D7\x05> \x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01DA" +
		"\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
		"\u01D9C\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DC\x05<\x1F" +
		"\x02\u01DCE\x03\x02\x02\x02\u01DD\u01DE\x05H%\x02\u01DE\u01DF\x07\xC0" +
		"\x02\x02\u01DF\u01EA\x03\x02\x02\x02\u01E0\u01E1\x05Z.\x02\u01E1\u01E2" +
		"\x07\xC0\x02\x02\u01E2\u01EA\x03\x02\x02\x02\u01E3\u01E4\x07\x1B\x02\x02" +
		"\u01E4\u01E5\x05z";
	private static readonly _serializedATNSegment1: string =
		">\x02\u01E5\u01E6\x05t;\x02\u01E6\u01E7\x07\xC0\x02\x02\u01E7\u01EA\x03" +
		"\x02\x02\x02\u01E8\u01EA\x05\xBA^\x02\u01E9\u01DD\x03\x02\x02\x02\u01E9" +
		"\u01E0\x03\x02\x02\x02\u01E9\u01E3\x03\x02\x02\x02\u01E9\u01E8\x03\x02" +
		"\x02\x02\u01EAG\x03\x02\x02\x02\u01EB\u01EC\x05J&\x02\u01EC\u01ED\x07" +
		"\xBD\x02\x02\u01EDI\x03\x02\x02\x02\u01EE\u01F1\x05N(\x02\u01EF\u01F1" +
		"\x05L\'\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1" +
		"K\x03\x02\x02\x02\u01F2\u01F3\b\'\x01\x02\u01F3\u01F4\x05N(\x02\u01F4" +
		"\u01F5\x05R*\x02\u01F5\u01FB\x03\x02\x02\x02\u01F6\u01F7\f\x03\x02\x02" +
		"\u01F7\u01F8\x07\xC3\x02\x02\u01F8\u01FA\x05R*\x02\u01F9\u01F6\x03\x02" +
		"\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB" +
		"\u01FC\x03\x02\x02\x02\u01FCM\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02" +
		"\x02\u01FE\u01FF\x05^0\x02\u01FF\u0200\x05\b\x05\x02\u0200\u0201\x07\xBC" +
		"\x02\x02\u0201O\x03\x02\x02\x02\u0202\u0203\x05t;\x02\u0203\u0204\x07" +
		"\xD3\x02\x02\u0204\u020A\x03\x02\x02\x02\u0205\u0206\x05t;\x02\u0206\u0207" +
		"\x07\xD3\x02\x02\u0207\u0208\x05r:\x02\u0208\u020A\x03\x02\x02\x02\u0209" +
		"\u0202\x03\x02\x02\x02\u0209\u0205\x03\x02\x02\x02\u020AQ\x03\x02\x02" +
		"\x02\u020B\u020C\x05T+\x02\u020C\u020D\x05P)\x02\u020D\u0212\x03\x02\x02" +
		"\x02\u020E\u020F\x05T+\x02\u020F\u0210\x05X-\x02\u0210\u0212\x03\x02\x02" +
		"\x02\u0211\u020B\x03\x02\x02\x02\u0211\u020E\x03\x02\x02\x02\u0212S\x03" +
		"\x02\x02\x02\u0213\u021F\x03\x02\x02\x02\u0214\u0215\x07\x1E\x02\x02\u0215" +
		"\u021F\x05T+\x02\u0216\u0217\x07\x1F\x02\x02\u0217\u021F\x05T+\x02\u0218" +
		"\u0219\x05V,\x02\u0219\u021A\x05T+\x02\u021A\u021F\x03\x02\x02\x02\u021B" +
		"\u021C\x05z>\x02\u021C\u021D\x05T+\x02\u021D\u021F\x03\x02\x02\x02\u021E" +
		"\u0213\x03\x02\x02\x02\u021E\u0214\x03\x02\x02\x02\u021E\u0216\x03\x02" +
		"\x02\x02\u021E\u0218\x03\x02\x02\x02\u021E\u021B\x03\x02\x02\x02\u021F" +
		"U\x03\x02\x02\x02\u0220\u0221\t\x05\x02\x02\u0221W\x03\x02\x02\x02\u0222" +
		"\u0223\x05t;\x02\u0223Y\x03\x02\x02\x02\u0224\u0225\b.\x01\x02\u0225\u0226" +
		"\x05\\/\x02\u0226\u023C\x03\x02\x02\x02\u0227\u0228\f\x06\x02\x02\u0228" +
		"\u0229\x07\xC3\x02\x02\u0229\u023B\x07\xD3\x02\x02\u022A\u022B\f\x05\x02" +
		"\x02\u022B\u022C\x07\xC3\x02\x02\u022C\u022D\x07\xD3\x02\x02\u022D\u023B" +
		"\x05r:\x02\u022E\u022F\f\x04\x02\x02\u022F\u0230\x07\xC3\x02\x02\u0230" +
		"\u0231\x07\xD3\x02\x02\u0231\u0232\x05r:\x02\u0232\u0233\x07\xD2\x02\x02" +
		"\u0233\u0234\x05\x86D\x02\u0234\u023B\x03\x02\x02\x02\u0235\u0236\f\x03" +
		"\x02\x02\u0236\u0237\x07\xC3\x02\x02\u0237\u0238\x07\xD3\x02\x02\u0238" +
		"\u0239\x07\xD2\x02\x02\u0239\u023B\x05\x86D\x02\u023A\u0227\x03\x02\x02" +
		"\x02\u023A\u022A\x03\x02\x02\x02\u023A\u022E\x03\x02\x02\x02\u023A\u0235" +
		"\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02" +
		"\u023C\u023D\x03\x02\x02\x02\u023D[\x03\x02\x02\x02\u023E\u023C\x03\x02" +
		"\x02\x02\u023F\u0257\x05^0\x02\u0240\u0241\x05^0\x02\u0241\u0242\x07\xD3" +
		"\x02\x02\u0242\u0257\x03\x02\x02\x02\u0243\u0244\x05^0\x02\u0244\u0245" +
		"\x07\xD3\x02\x02\u0245\u0246\x05r:\x02\u0246\u0257\x03\x02\x02\x02\u0247" +
		"\u0248\x05^0\x02\u0248\u0249\x07\xD3\x02\x02\u0249\u024A\x05r:\x02\u024A" +
		"\u024B\x07\xD2\x02\x02\u024B\u024C\x05\x86D\x02\u024C\u0257\x03\x02\x02" +
		"\x02\u024D\u024E\x05^0\x02\u024E\u024F\x07\xD3\x02\x02\u024F\u0250\x07" +
		"\xD2\x02\x02\u0250\u0251\x05\x86D\x02\u0251\u0257\x03\x02\x02\x02\u0252" +
		"\u0253\x07 \x02\x02\u0253\u0257\x05\b\x05\x02\u0254\u0255\x07\x1F\x02" +
		"\x02\u0255\u0257\x05\b\x05\x02\u0256\u023F\x03\x02\x02\x02\u0256\u0240" +
		"\x03\x02\x02\x02\u0256\u0243\x03\x02\x02\x02\u0256\u0247\x03\x02\x02\x02" +
		"\u0256\u024D\x03\x02\x02\x02\u0256\u0252\x03\x02\x02\x02\u0256\u0254\x03" +
		"\x02\x02\x02\u0257]\x03\x02\x02\x02\u0258\u025D\x05t;\x02\u0259\u025A" +
		"\x05l7\x02\u025A\u025B\x05t;\x02\u025B\u025D\x03\x02\x02\x02\u025C\u0258" +
		"\x03\x02\x02\x02\u025C\u0259\x03\x02\x02\x02\u025D_\x03\x02\x02\x02\u025E" +
		"\u025F\x07.\x02\x02\u025F\u0260\x07\xBC\x02\x02\u0260\u0261\x05b2\x02" +
		"\u0261\u0262\x07\xBD\x02\x02\u0262a\x03\x02\x02\x02\u0263\u0264\b2\x01" +
		"\x02\u0264\u0265\x05f4\x02\u0265\u026B\x03\x02\x02\x02\u0266\u0267\f\x03" +
		"\x02\x02\u0267\u0268\x07\xC3\x02\x02\u0268\u026A\x05f4\x02\u0269\u0266" +
		"\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02" +
		"\u026B\u026C\x03\x02\x02\x02\u026Cc\x03\x02\x02\x02\u026D\u026B\x03\x02" +
		"\x02\x02\u026E\u026F\t\x06\x02\x02\u026Fe\x03\x02\x02\x02\u0270\u0276" +
		"\x07\xD3\x02\x02\u0271\u0272\x07\xD3\x02\x02\u0272\u0273\x07\xD2\x02\x02" +
		"\u0273\u0276\x05d3\x02\u0274\u0276\x05h5\x02\u0275\u0270\x03\x02\x02\x02" +
		"\u0275\u0271\x03\x02\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276g\x03\x02" +
		"\x02\x02\u0277\u0278\t\x07\x02\x02\u0278i\x03\x02\x02\x02\u0279\u027A" +
		"\t\b\x02\x02\u027Ak\x03\x02\x02\x02\u027B\u0296\x07 \x02\x02\u027C\u0296" +
		"\x07\x1F\x02\x02\u027D\u0296\x05n8\x02\u027E\u0296\x05p9\x02\u027F\u0296" +
		"\x05j6\x02\u0280\u0296\x05`1\x02\u0281\u0296\x05z>\x02\u0282\u0283\x07" +
		"\x1F\x02\x02\u0283\u0296\x05l7\x02\u0284\u0285\x07 \x02\x02\u0285\u0296" +
		"\x05l7\x02\u0286\u0287\x05j6\x02\u0287\u0288\x05l7\x02\u0288\u0296\x03" +
		"\x02\x02\x02\u0289\u028A\x05`1\x02\u028A\u028B\x05l7\x02\u028B\u0296\x03" +
		"\x02\x02\x02\u028C\u028D\x05n8\x02\u028D\u028E\x05l7\x02\u028E\u0296\x03" +
		"\x02\x02\x02\u028F\u0290\x05p9\x02\u0290\u0291\x05l7\x02\u0291\u0296\x03" +
		"\x02\x02\x02\u0292\u0293\x05z>\x02\u0293\u0294\x05l7\x02\u0294\u0296\x03" +
		"\x02\x02\x02\u0295\u027B\x03\x02\x02\x02\u0295\u027C\x03\x02\x02\x02\u0295" +
		"\u027D\x03\x02\x02\x02\u0295\u027E\x03\x02\x02\x02\u0295\u027F\x03\x02" +
		"\x02\x02\u0295\u0280\x03\x02\x02\x02\u0295\u0281\x03\x02\x02\x02\u0295" +
		"\u0282\x03\x02\x02\x02\u0295\u0284\x03\x02\x02\x02\u0295\u0286\x03\x02" +
		"\x02\x02\u0295\u0289\x03\x02\x02\x02\u0295\u028C\x03\x02\x02\x02\u0295" +
		"\u028F\x03\x02\x02\x02\u0295\u0292\x03\x02\x02\x02\u0296m\x03\x02\x02" +
		"\x02\u0297\u0298\t\t\x02\x02\u0298o\x03\x02\x02\x02\u0299\u029A\t\n\x02" +
		"\x02\u029Aq\x03\x02\x02\x02\u029B\u029C\b:\x01\x02\u029C\u029D\x07\xC1" +
		"\x02\x02\u029D\u02A3\x07\xC2\x02\x02\u029E\u029F\x07\xC1\x02\x02\u029F" +
		"\u02A0\x05D#\x02\u02A0\u02A1\x07\xC2\x02\x02\u02A1\u02A3\x03\x02\x02\x02" +
		"\u02A2\u029B\x03\x02\x02\x02\u02A2\u029E\x03\x02\x02\x02\u02A3\u02AE\x03" +
		"\x02\x02\x02\u02A4\u02A5\f\x04\x02\x02\u02A5\u02A6\x07\xC1\x02\x02\u02A6" +
		"\u02AD\x07\xC2\x02\x02\u02A7\u02A8\f\x03\x02\x02\u02A8\u02A9\x07\xC1\x02" +
		"\x02\u02A9\u02AA\x05D#\x02\u02AA\u02AB\x07\xC2\x02\x02\u02AB\u02AD\x03" +
		"\x02\x02\x02\u02AC\u02A4\x03\x02\x02\x02\u02AC\u02A7\x03\x02\x02\x02\u02AD" +
		"\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02" +
		"\x02\x02\u02AFs\x03\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B6" +
		"\x05v<\x02\u02B2\u02B3\x05v<\x02\u02B3\u02B4\x05r:\x02\u02B4\u02B6\x03" +
		"\x02\x02\x02\u02B5\u02B1\x03\x02\x02\x02\u02B5\u02B2\x03\x02\x02\x02\u02B6" +
		"u\x03\x02\x02\x02\u02B7\u02BB\x05x=\x02\u02B8\u02BB\x05|?\x02\u02B9\u02BB" +
		"\x07\xD3\x02\x02\u02BA\u02B7\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02" +
		"\u02BA\u02B9\x03\x02\x02\x02\u02BBw\x03\x02\x02\x02\u02BC\u02BD\t\v\x02" +
		"\x02\u02BDy\x03\x02\x02\x02\u02BE\u02BF\t\f\x02\x02\u02BF{\x03\x02\x02" +
		"\x02\u02C0\u02C2\x07e\x02\x02\u02C1\u02C3\x07\xD3\x02\x02\u02C2\u02C1" +
		"\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02" +
		"\u02C4\u02C5\x07\xBE\x02\x02\u02C5\u02C6\x05~@\x02\u02C6\u02C7\x07\xBF" +
		"\x02\x02\u02C7}\x03\x02\x02\x02\u02C8\u02C9\b@\x01\x02\u02C9\u02CA\x05" +
		"\x80A\x02\u02CA\u02CF\x03\x02\x02\x02\u02CB\u02CC\f\x03\x02\x02\u02CC" +
		"\u02CE\x05\x80A\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02" +
		"\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\x7F" +
		"\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D3\x05^0\x02\u02D3" +
		"\u02D4\x05\x82B\x02\u02D4\u02D5\x07\xC0\x02\x02\u02D5\x81\x03\x02\x02" +
		"\x02\u02D6\u02D7\bB\x01\x02\u02D7\u02D8\x05\x84C\x02\u02D8\u02DE\x03\x02" +
		"\x02\x02\u02D9\u02DA\f\x03\x02\x02\u02DA\u02DB\x07\xC3\x02\x02\u02DB\u02DD" +
		"\x05\x84C\x02\u02DC\u02D9\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02" +
		"\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\x83\x03" +
		"\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E5\x07\xD3\x02\x02\u02E2" +
		"\u02E3\x07\xD3\x02\x02\u02E3\u02E5\x05r:\x02\u02E4\u02E1\x03\x02\x02\x02" +
		"\u02E4\u02E2\x03\x02\x02\x02\u02E5\x85\x03\x02\x02\x02\u02E6\u02F1\x05" +
		"> \x02\u02E7\u02E8\x07\xBE\x02\x02\u02E8\u02E9\x05\x88E\x02\u02E9\u02EA" +
		"\x07\xBF\x02\x02\u02EA\u02F1\x03\x02\x02\x02\u02EB\u02EC\x07\xBE\x02\x02" +
		"\u02EC\u02ED\x05\x88E\x02\u02ED\u02EE\x07\xC3\x02\x02\u02EE\u02EF\x07" +
		"\xBF\x02\x02\u02EF\u02F1\x03\x02\x02\x02\u02F0\u02E6\x03\x02\x02\x02\u02F0" +
		"\u02E7\x03\x02\x02\x02\u02F0\u02EB\x03\x02\x02\x02\u02F1\x87\x03\x02\x02" +
		"\x02\u02F2\u02F3\bE\x01\x02\u02F3\u02F4\x05\x86D\x02\u02F4\u02FA\x03\x02" +
		"\x02\x02\u02F5\u02F6\f\x03\x02\x02\u02F6\u02F7\x07\xC3\x02\x02\u02F7\u02F9" +
		"\x05\x86D\x02\u02F8\u02F5\x03\x02\x02\x02\u02F9\u02FC\x03\x02\x02\x02" +
		"\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\x89\x03" +
		"\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u02FE\x05F$\x02\u02FE\x8B" +
		"\x03\x02\x02\x02\u02FF\u0302\x05\x90I\x02\u0300\u0302\x05\x8EH\x02\u0301" +
		"\u02FF\x03\x02\x02\x02\u0301\u0300\x03\x02\x02\x02\u0302\x8D\x03\x02\x02" +
		"\x02\u0303\u030A\x05\x98M\x02\u0304\u030A\x05\x8AF\x02\u0305\u030A\x05" +
		"\x9AN\x02\u0306\u030A\x05\xA0Q\x02\u0307\u030A\x05\xACW\x02\u0308\u030A" +
		"\x05\xB4[\x02\u0309\u0303\x03\x02\x02\x02\u0309\u0304\x03\x02\x02\x02" +
		"\u0309\u0305\x03\x02\x02\x02\u0309\u0306\x03\x02\x02\x02\u0309\u0307\x03" +
		"\x02\x02\x02\u0309\u0308\x03\x02\x02\x02\u030A\x8F\x03\x02\x02\x02\u030B" +
		"\u030C\x07\xBE\x02\x02\u030C\u0312\x07\xBF\x02\x02\u030D\u030E\x07\xBE" +
		"\x02\x02\u030E\u030F\x05\x96L\x02\u030F\u0310\x07\xBF\x02\x02\u0310\u0312" +
		"\x03\x02\x02\x02\u0311\u030B\x03\x02\x02\x02\u0311\u030D\x03\x02\x02\x02" +
		"\u0312\x91\x03\x02\x02\x02\u0313\u0316\x05\x94K\x02\u0314\u0316\x05\x8E" +
		"H\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\x93" +
		"\x03\x02\x02\x02\u0317\u0318\x07\xBE\x02\x02\u0318\u031E\x07\xBF\x02\x02" +
		"\u0319\u031A\x07\xBE\x02\x02\u031A\u031B\x05\x96L\x02\u031B\u031C\x07" +
		"\xBF\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D\u0317\x03\x02\x02\x02\u031D" +
		"\u0319\x03\x02\x02\x02\u031E\x95\x03\x02\x02\x02\u031F\u0320\bL\x01\x02" +
		"\u0320\u0321\x05\x8CG\x02\u0321\u0326\x03\x02\x02\x02\u0322\u0323\f\x03" +
		"\x02\x02\u0323\u0325\x05\x8CG\x02\u0324\u0322\x03\x02\x02\x02\u0325\u0328" +
		"\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02" +
		"\u0327\x97\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0329\u032E\x07" +
		"\xC0\x02\x02\u032A\u032B\x05B\"\x02\u032B\u032C\x07\xC0\x02\x02\u032C" +
		"\u032E\x03\x02\x02\x02\u032D\u0329\x03\x02\x02\x02\u032D\u032A\x03\x02" +
		"\x02\x02\u032E\x99\x03\x02\x02\x02\u032F\u0330\x07f\x02\x02\u0330\u0331" +
		"\x07\xBC\x02\x02\u0331\u0332\x05B\"\x02\u0332\u0333\x07\xBD\x02\x02\u0333" +
		"\u0334\x05\x9CO\x02\u0334\x9B\x03\x02\x02\x02\u0335\u0336\x05\x8CG\x02" +
		"\u0336\u0337\x07g\x02\x02\u0337\u0338\x05\x8CG\x02\u0338\u033B\x03\x02" +
		"\x02\x02\u0339\u033B\x05\x8CG\x02\u033A\u0335\x03\x02\x02\x02\u033A\u0339" +
		"\x03\x02\x02\x02\u033B\x9D\x03\x02\x02\x02\u033C\u0343\x05B\"\x02\u033D" +
		"\u033E\x05^0\x02\u033E\u033F\x07\xD3\x02\x02\u033F\u0340\x07\xD2\x02\x02" +
		"\u0340\u0341\x05\x86D\x02\u0341\u0343\x03\x02\x02\x02\u0342\u033C\x03" +
		"\x02\x02\x02\u0342\u033D\x03\x02\x02\x02\u0343\x9F\x03\x02\x02\x02\u0344" +
		"\u0345\x07h\x02\x02\u0345\u0346\x07\xBC\x02\x02\u0346\u0347\x05B\"\x02" +
		"\u0347\u0348\x07\xBD\x02\x02\u0348\u0349\x05\xA2R\x02\u0349\xA1\x03\x02" +
		"\x02\x02\u034A\u034B\x07\xBE\x02\x02\u034B\u0351\x07\xBF\x02\x02\u034C" +
		"\u034D\x07\xBE\x02\x02\u034D\u034E\x05\xAAV\x02\u034E\u034F\x07\xBF\x02" +
		"\x02\u034F\u0351\x03\x02\x02\x02\u0350\u034A\x03\x02\x02\x02\u0350\u034C" +
		"\x03\x02\x02\x02\u0351\xA3\x03\x02\x02\x02\u0352\u0353\x07i\x02\x02\u0353" +
		"\u0354\x05B\"\x02\u0354\u0355\x07\x12\x02\x02\u0355\u0359\x03\x02\x02" +
		"\x02\u0356\u0357\x07j\x02\x02\u0357\u0359\x07\x12\x02\x02\u0358\u0352" +
		"\x03\x02\x02\x02\u0358\u0356\x03\x02\x02\x02\u0359\xA5\x03\x02\x02\x02" +
		"\u035A\u035B\bT\x01\x02\u035B\u035C\x05\xA4S\x02\u035C\u0361\x03\x02\x02" +
		"\x02\u035D\u035E\f\x03\x02\x02\u035E\u0360\x05\xA4S\x02\u035F\u035D\x03" +
		"\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361" +
		"\u0362\x03\x02\x02\x02\u0362\xA7\x03\x02\x02\x02\u0363\u0361\x03\x02\x02" +
		"\x02\u0364\u0365\bU\x01\x02\u0365\u0366\x05\xA6T\x02\u0366\u0367\x05\x8C" +
		"G\x02\u0367\u036C\x03\x02\x02\x02\u0368\u0369\f\x03\x02\x02\u0369\u036B" +
		"\x05\x8CG\x02\u036A\u0368\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02" +
		"\u036C\u036A\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\xA9\x03" +
		"\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0370\bV\x01\x02\u0370" +
		"\u0371\x05\xA8U\x02\u0371\u0376\x03\x02\x02\x02\u0372\u0373\f\x03\x02" +
		"\x02\u0373\u0375\x05\xA8U\x02\u0374\u0372\x03\x02\x02\x02\u0375\u0378" +
		"\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02" +
		"\u0377\xAB\x03\x02\x02\x02\u0378\u0376\x03\x02\x02\x02\u0379\u037A\x07" +
		"k\x02\x02\u037A\u037B\x07\xBC\x02\x02\u037B\u037C\x05\x9EP\x02\u037C\u037D" +
		"\x07\xBD\x02\x02\u037D\u037E\x05\x92J\x02\u037E\u038F\x03\x02\x02\x02" +
		"\u037F\u0380\x07l\x02\x02\u0380\u0381\x05\x8CG\x02\u0381\u0382\x07k\x02" +
		"\x02\u0382\u0383\x07\xBC\x02\x02\u0383\u0384\x05B\"\x02\u0384\u0385\x07" +
		"\xBD\x02\x02\u0385\u0386\x07\xC0\x02\x02\u0386\u038F\x03\x02\x02\x02\u0387" +
		"\u0388\x07m\x02\x02\u0388\u0389\x07\xBC\x02\x02\u0389\u038A\x05\xAEX\x02" +
		"\u038A\u038B\x05\xB2Z\x02\u038B\u038C\x07\xBD\x02\x02\u038C\u038D\x05" +
		"\x92J\x02\u038D\u038F\x03\x02\x02\x02\u038E\u0379\x03\x02\x02\x02\u038E" +
		"\u037F\x03\x02\x02\x02\u038E\u0387\x03\x02\x02\x02\u038F\xAD\x03\x02\x02" +
		"\x02\u0390\u0393\x05\x98M\x02\u0391\u0393\x05\x8AF\x02\u0392\u0390\x03" +
		"\x02\x02\x02\u0392\u0391\x03\x02\x02\x02\u0393\xAF\x03\x02\x02\x02\u0394" +
		"\u0397\x05\x9EP\x02\u0395\u0397\x03\x02\x02\x02\u0396\u0394\x03\x02\x02" +
		"\x02\u0396\u0395\x03\x02\x02\x02\u0397\xB1\x03\x02\x02\x02\u0398\u0399" +
		"\x05\xB0Y\x02\u0399\u039A\x07\xC0\x02\x02\u039A\u03A0\x03\x02\x02\x02" +
		"\u039B\u039C\x05\xB0Y\x02\u039C\u039D\x07\xC0\x02\x02\u039D\u039E\x05" +
		"B\"\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u0398\x03\x02\x02\x02\u039F" +
		"\u039B\x03\x02\x02\x02\u03A0\xB3\x03\x02\x02\x02\u03A1\u03A2\x07n\x02" +
		"\x02\u03A2\u03AE\x07\xC0\x02\x02\u03A3\u03A4\x07o\x02\x02\u03A4\u03AE" +
		"\x07\xC0\x02\x02\u03A5\u03A6\x07p\x02\x02\u03A6\u03AE\x07\xC0\x02\x02" +
		"\u03A7\u03A8\x07p\x02\x02\u03A8\u03A9\x05B\"\x02\u03A9\u03AA\x07\xC0\x02" +
		"\x02\u03AA\u03AE\x03\x02\x02\x02\u03AB\u03AC\x07q\x02\x02\u03AC\u03AE" +
		"\x07\xC0\x02\x02\u03AD\u03A1\x03\x02\x02\x02\u03AD\u03A3\x03\x02\x02\x02" +
		"\u03AD\u03A5\x03\x02\x02\x02\u03AD\u03A7\x03\x02\x02\x02\u03AD\u03AB\x03" +
		"\x02\x02\x02\u03AE\xB5\x03\x02\x02\x02\u03AF\u03B6\x05\xB8]\x02\u03B0" +
		"\u03B6\x05F$\x02\u03B1\u03B6\x05\x02\x02\x02\u03B2\u03B6\x05\xC2b\x02" +
		"\u03B3\u03B6\x05\xC4c\x02\u03B4\u03B6\x05\x04\x03\x02\u03B5\u03AF\x03" +
		"\x02\x02\x02\u03B5\u03B0\x03\x02\x02\x02\u03B5\u03B1\x03\x02\x02\x02\u03B5" +
		"\u03B2\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5\u03B4\x03\x02" +
		"\x02\x02\u03B6\xB7\x03\x02\x02\x02\u03B7\u03B8\x05H%\x02\u03B8\u03B9\x05" +
		"\x94K\x02\u03B9\xB9\x03\x02\x02\x02\u03BA\u03BF\x05\xBC_\x02\u03BB\u03BC" +
		"\x05`1\x02\u03BC\u03BD\x05\xBC_\x02\u03BD\u03BF\x03\x02\x02\x02\u03BE" +
		"\u03BA\x03\x02\x02\x02\u03BE\u03BB\x03\x02\x02\x02\u03BF\xBB\x03\x02\x02" +
		"\x02\u03C0\u03C1\x05\xBE`\x02\u03C1\u03C2\x07\xD3\x02\x02\u03C2\u03C3" +
		"\x07\xBE\x02\x02\u03C3\u03C4\x05~@\x02\u03C4\u03C5\x07\xBF\x02\x02\u03C5" +
		"\u03C6\x05\xC0a\x02\u03C6\u03C7\x07\xC0\x02\x02\u03C7\xBD\x03\x02\x02" +
		"\x02\u03C8\u03C9\t\r\x02\x02\u03C9\xBF\x03\x02\x02\x02\u03CA\u03CF\x03" +
		"\x02\x02\x02\u03CB\u03CF\x07\xD3\x02\x02\u03CC\u03CD\x07\xD3\x02\x02\u03CD" +
		"\u03CF\x05r:\x02\u03CE\u03CA\x03\x02\x02\x02\u03CE\u03CB\x03\x02\x02\x02" +
		"\u03CE\u03CC\x03\x02\x02\x02\u03CF\xC1\x03\x02\x02\x02\u03D0\u03D1\x05" +
		"`1\x02\u03D1\u03D2\x07\x13\x02\x02\u03D2\u03D3\x07\xC0\x02\x02\u03D3\u03E1" +
		"\x03\x02\x02\x02\u03D4\u03D5\x05`1\x02\u03D5\u03D6\x07\x15\x02\x02\u03D6" +
		"\u03D7\x07\xC0\x02\x02\u03D7\u03E1\x03\x02\x02\x02\u03D8\u03D9\x05`1\x02" +
		"\u03D9\u03DA\x07\x16\x02\x02\u03DA\u03DB\x07\xC0\x02\x02\u03DB\u03E1\x03" +
		"\x02\x02\x02\u03DC\u03DD\x05`1\x02\u03DD\u03DE\x07\x14\x02\x02\u03DE\u03DF" +
		"\x07\xC0\x02\x02\u03DF\u03E1\x03\x02\x02\x02\u03E0\u03D0\x03\x02\x02\x02" +
		"\u03E0\u03D4\x03\x02\x02\x02\u03E0\u03D8\x03\x02\x02\x02\u03E0\u03DC\x03" +
		"\x02\x02\x02\u03E1\xC3\x03\x02\x02\x02\u03E2\u03E3\t\x0E\x02\x02\u03E3" +
		"\xC5\x03\x02\x02\x02S\xD0\xDB\xEA\xEF\u0100\u0102\u010D\u0113\u011E\u0123" +
		"\u012A\u0132\u0138\u0143\u0151\u0159\u015E\u0164\u0169\u016F\u0174\u017C" +
		"\u0181\u0187\u018C\u0194\u019C\u01A4\u01AC\u01B4\u01BC\u01C7\u01CF\u01D8" +
		"\u01E9\u01F0\u01FB\u0209\u0211\u021E\u023A\u023C\u0256\u025C\u026B\u0275" +
		"\u0295\u02A2\u02AC\u02AE\u02B5\u02BA\u02C2\u02CF\u02DE\u02E4\u02F0\u02FA" +
		"\u0301\u0309\u0311\u0315\u031D\u0326\u032D\u033A\u0342\u0350\u0358\u0361" +
		"\u036C\u0376\u038E\u0392\u0396\u039F\u03AD\u03B5\u03BE\u03CE\u03E0";
	public static readonly _serializedATN: string = Utils.join(
		[
			GLSLParser._serializedATNSegment0,
			GLSLParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GLSLParser.__ATN) {
			GLSLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GLSLParser._serializedATN));
		}

		return GLSLParser.__ATN;
	}

}

export class Pragma_statementContext extends ParserRuleContext {
	public PRAGMA_DEBUG_ON(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRAGMA_DEBUG_ON, 0); }
	public EOL(): TerminalNode { return this.getToken(GLSLParser.EOL, 0); }
	public PRAGMA_DEBUG_OFF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRAGMA_DEBUG_OFF, 0); }
	public PRAGMA_OPTIMIZE_ON(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRAGMA_OPTIMIZE_ON, 0); }
	public PRAGMA_OPTIMIZE_OFF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRAGMA_OPTIMIZE_OFF, 0); }
	public PRAGMA_INVARIANT_ALL(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRAGMA_INVARIANT_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_pragma_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterPragma_statement) {
			listener.enterPragma_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitPragma_statement) {
			listener.exitPragma_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitPragma_statement) {
			return visitor.visitPragma_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extension_statementContext extends ParserRuleContext {
	public _extension_name: Token;
	public _extension_status: Token;
	public EXTENSION(): TerminalNode { return this.getToken(GLSLParser.EXTENSION, 0); }
	public COLON(): TerminalNode { return this.getToken(GLSLParser.COLON, 0); }
	public EOL(): TerminalNode { return this.getToken(GLSLParser.EOL, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.IDENTIFIER);
		} else {
			return this.getToken(GLSLParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_extension_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterExtension_statement) {
			listener.enterExtension_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitExtension_statement) {
			listener.exitExtension_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitExtension_statement) {
			return visitor.visitExtension_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class External_declaration_listContext extends ParserRuleContext {
	public external_declaration(): External_declarationContext[];
	public external_declaration(i: number): External_declarationContext;
	public external_declaration(i?: number): External_declarationContext | External_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(External_declarationContext);
		} else {
			return this.getRuleContext(i, External_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_external_declaration_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterExternal_declaration_list) {
			listener.enterExternal_declaration_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitExternal_declaration_list) {
			listener.exitExternal_declaration_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitExternal_declaration_list) {
			return visitor.visitExternal_declaration_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_identifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GLSLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_variable_identifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterVariable_identifier) {
			listener.enterVariable_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitVariable_identifier) {
			listener.exitVariable_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitVariable_identifier) {
			return visitor.visitVariable_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public variable_identifier(): Variable_identifierContext | undefined {
		return this.tryGetRuleContext(0, Variable_identifierContext);
	}
	public INTCONSTANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INTCONSTANT, 0); }
	public UINTCONSTANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UINTCONSTANT, 0); }
	public FLOATCONSTANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.FLOATCONSTANT, 0); }
	public BOOLCONSTANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BOOLCONSTANT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_expressionContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public postfix_expression(): Postfix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expressionContext);
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.LBRACKET, 0); }
	public integer_expression(): Integer_expressionContext | undefined {
		return this.tryGetRuleContext(0, Integer_expressionContext);
	}
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.RBRACKET, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.DOT, 0); }
	public method_call_generic(): Method_call_genericContext | undefined {
		return this.tryGetRuleContext(0, Method_call_genericContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	public INC_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INC_OP, 0); }
	public DEC_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.DEC_OP, 0); }
	public function_call_generic(): Function_call_genericContext | undefined {
		return this.tryGetRuleContext(0, Function_call_genericContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_postfix_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterPostfix_expression) {
			listener.enterPostfix_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitPostfix_expression) {
			listener.exitPostfix_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitPostfix_expression) {
			return visitor.visitPostfix_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_integer_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInteger_expression) {
			listener.enterInteger_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInteger_expression) {
			listener.exitInteger_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInteger_expression) {
			return visitor.visitInteger_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_call_genericContext extends ParserRuleContext {
	public function_call_header_with_parameters(): Function_call_header_with_parametersContext | undefined {
		return this.tryGetRuleContext(0, Function_call_header_with_parametersContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(GLSLParser.RPAREN, 0); }
	public function_call_header_no_parameters(): Function_call_header_no_parametersContext | undefined {
		return this.tryGetRuleContext(0, Function_call_header_no_parametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_call_generic; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_call_generic) {
			listener.enterFunction_call_generic(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_call_generic) {
			listener.exitFunction_call_generic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_call_generic) {
			return visitor.visitFunction_call_generic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_call_header_no_parametersContext extends ParserRuleContext {
	public function_call_header(): Function_call_headerContext {
		return this.getRuleContext(0, Function_call_headerContext);
	}
	public VOID_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VOID_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_call_header_no_parameters; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_call_header_no_parameters) {
			listener.enterFunction_call_header_no_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_call_header_no_parameters) {
			listener.exitFunction_call_header_no_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_call_header_no_parameters) {
			return visitor.visitFunction_call_header_no_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_call_header_with_parametersContext extends ParserRuleContext {
	public function_call_header(): Function_call_headerContext | undefined {
		return this.tryGetRuleContext(0, Function_call_headerContext);
	}
	public assignment_expression(): Assignment_expressionContext {
		return this.getRuleContext(0, Assignment_expressionContext);
	}
	public function_call_header_with_parameters(): Function_call_header_with_parametersContext | undefined {
		return this.tryGetRuleContext(0, Function_call_header_with_parametersContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_call_header_with_parameters; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_call_header_with_parameters) {
			listener.enterFunction_call_header_with_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_call_header_with_parameters) {
			listener.exitFunction_call_header_with_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_call_header_with_parameters) {
			return visitor.visitFunction_call_header_with_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_call_headerContext extends ParserRuleContext {
	public function_identifier(): Function_identifierContext {
		return this.getRuleContext(0, Function_identifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(GLSLParser.LPAREN, 0); }
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_call_header; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_call_header) {
			listener.enterFunction_call_header(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_call_header) {
			listener.exitFunction_call_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_call_header) {
			return visitor.visitFunction_call_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_identifierContext extends ParserRuleContext {
	public builtin_type_specifier_nonarray(): Builtin_type_specifier_nonarrayContext | undefined {
		return this.tryGetRuleContext(0, Builtin_type_specifier_nonarrayContext);
	}
	public variable_identifier(): Variable_identifierContext | undefined {
		return this.tryGetRuleContext(0, Variable_identifierContext);
	}
	public FIELD_SELECTION(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.FIELD_SELECTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_identifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_identifier) {
			listener.enterFunction_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_identifier) {
			listener.exitFunction_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_identifier) {
			return visitor.visitFunction_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_call_genericContext extends ParserRuleContext {
	public method_call_header_with_parameters(): Method_call_header_with_parametersContext | undefined {
		return this.tryGetRuleContext(0, Method_call_header_with_parametersContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(GLSLParser.RPAREN, 0); }
	public method_call_header_no_parameters(): Method_call_header_no_parametersContext | undefined {
		return this.tryGetRuleContext(0, Method_call_header_no_parametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_method_call_generic; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterMethod_call_generic) {
			listener.enterMethod_call_generic(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitMethod_call_generic) {
			listener.exitMethod_call_generic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitMethod_call_generic) {
			return visitor.visitMethod_call_generic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_call_header_no_parametersContext extends ParserRuleContext {
	public method_call_header(): Method_call_headerContext {
		return this.getRuleContext(0, Method_call_headerContext);
	}
	public VOID_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VOID_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_method_call_header_no_parameters; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterMethod_call_header_no_parameters) {
			listener.enterMethod_call_header_no_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitMethod_call_header_no_parameters) {
			listener.exitMethod_call_header_no_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitMethod_call_header_no_parameters) {
			return visitor.visitMethod_call_header_no_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_call_header_with_parametersContext extends ParserRuleContext {
	public method_call_header(): Method_call_headerContext | undefined {
		return this.tryGetRuleContext(0, Method_call_headerContext);
	}
	public assignment_expression(): Assignment_expressionContext {
		return this.getRuleContext(0, Assignment_expressionContext);
	}
	public method_call_header_with_parameters(): Method_call_header_with_parametersContext | undefined {
		return this.tryGetRuleContext(0, Method_call_header_with_parametersContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_method_call_header_with_parameters; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterMethod_call_header_with_parameters) {
			listener.enterMethod_call_header_with_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitMethod_call_header_with_parameters) {
			listener.exitMethod_call_header_with_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitMethod_call_header_with_parameters) {
			return visitor.visitMethod_call_header_with_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_call_headerContext extends ParserRuleContext {
	public variable_identifier(): Variable_identifierContext {
		return this.getRuleContext(0, Variable_identifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(GLSLParser.LPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_method_call_header; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterMethod_call_header) {
			listener.enterMethod_call_header(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitMethod_call_header) {
			listener.exitMethod_call_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitMethod_call_header) {
			return visitor.visitMethod_call_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	public postfix_expression(): Postfix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expressionContext);
	}
	public INC_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INC_OP, 0); }
	public unary_expression(): Unary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Unary_expressionContext);
	}
	public DEC_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.DEC_OP, 0); }
	public unary_operator(): Unary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Unary_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_unary_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterUnary_expression) {
			listener.enterUnary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitUnary_expression) {
			listener.exitUnary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitUnary_expression) {
			return visitor.visitUnary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	public PLUS_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PLUS_OP, 0); }
	public MINUS_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MINUS_OP, 0); }
	public NOT_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.NOT_OP, 0); }
	public BNEG_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BNEG_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitUnary_operator) {
			return visitor.visitUnary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	public _unary_expression: Unary_expressionContext;
	public _operands: Unary_expressionContext[] = [];
	public _TIMES_OP: Token;
	public _operators: Token[] = [];
	public _DIV_OP: Token;
	public _MOD_OP: Token;
	public unary_expression(): Unary_expressionContext[];
	public unary_expression(i: number): Unary_expressionContext;
	public unary_expression(i?: number): Unary_expressionContext | Unary_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unary_expressionContext);
		} else {
			return this.getRuleContext(i, Unary_expressionContext);
		}
	}
	public TIMES_OP(): TerminalNode[];
	public TIMES_OP(i: number): TerminalNode;
	public TIMES_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.TIMES_OP);
		} else {
			return this.getToken(GLSLParser.TIMES_OP, i);
		}
	}
	public DIV_OP(): TerminalNode[];
	public DIV_OP(i: number): TerminalNode;
	public DIV_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.DIV_OP);
		} else {
			return this.getToken(GLSLParser.DIV_OP, i);
		}
	}
	public MOD_OP(): TerminalNode[];
	public MOD_OP(i: number): TerminalNode;
	public MOD_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.MOD_OP);
		} else {
			return this.getToken(GLSLParser.MOD_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_multiplicative_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterMultiplicative_expression) {
			listener.enterMultiplicative_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitMultiplicative_expression) {
			listener.exitMultiplicative_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitMultiplicative_expression) {
			return visitor.visitMultiplicative_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	public _multiplicative_expression: Multiplicative_expressionContext;
	public _operands: Multiplicative_expressionContext[] = [];
	public _PLUS_OP: Token;
	public _operators: Token[] = [];
	public _MINUS_OP: Token;
	public multiplicative_expression(): Multiplicative_expressionContext[];
	public multiplicative_expression(i: number): Multiplicative_expressionContext;
	public multiplicative_expression(i?: number): Multiplicative_expressionContext | Multiplicative_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Multiplicative_expressionContext);
		} else {
			return this.getRuleContext(i, Multiplicative_expressionContext);
		}
	}
	public PLUS_OP(): TerminalNode[];
	public PLUS_OP(i: number): TerminalNode;
	public PLUS_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.PLUS_OP);
		} else {
			return this.getToken(GLSLParser.PLUS_OP, i);
		}
	}
	public MINUS_OP(): TerminalNode[];
	public MINUS_OP(i: number): TerminalNode;
	public MINUS_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.MINUS_OP);
		} else {
			return this.getToken(GLSLParser.MINUS_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_additive_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterAdditive_expression) {
			listener.enterAdditive_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitAdditive_expression) {
			listener.exitAdditive_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitAdditive_expression) {
			return visitor.visitAdditive_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_expressionContext extends ParserRuleContext {
	public _additive_expression: Additive_expressionContext;
	public _operands: Additive_expressionContext[] = [];
	public _LEFT_OP: Token;
	public _operators: Token[] = [];
	public _RIGHT_OP: Token;
	public additive_expression(): Additive_expressionContext[];
	public additive_expression(i: number): Additive_expressionContext;
	public additive_expression(i?: number): Additive_expressionContext | Additive_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Additive_expressionContext);
		} else {
			return this.getRuleContext(i, Additive_expressionContext);
		}
	}
	public LEFT_OP(): TerminalNode[];
	public LEFT_OP(i: number): TerminalNode;
	public LEFT_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.LEFT_OP);
		} else {
			return this.getToken(GLSLParser.LEFT_OP, i);
		}
	}
	public RIGHT_OP(): TerminalNode[];
	public RIGHT_OP(i: number): TerminalNode;
	public RIGHT_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.RIGHT_OP);
		} else {
			return this.getToken(GLSLParser.RIGHT_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_shift_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterShift_expression) {
			listener.enterShift_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitShift_expression) {
			listener.exitShift_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitShift_expression) {
			return visitor.visitShift_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	public _shift_expression: Shift_expressionContext;
	public _operands: Shift_expressionContext[] = [];
	public _LT_OP: Token;
	public _operators: Token[] = [];
	public _GT_OP: Token;
	public _LE_OP: Token;
	public _GE_OP: Token;
	public shift_expression(): Shift_expressionContext[];
	public shift_expression(i: number): Shift_expressionContext;
	public shift_expression(i?: number): Shift_expressionContext | Shift_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_expressionContext);
		} else {
			return this.getRuleContext(i, Shift_expressionContext);
		}
	}
	public LT_OP(): TerminalNode[];
	public LT_OP(i: number): TerminalNode;
	public LT_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.LT_OP);
		} else {
			return this.getToken(GLSLParser.LT_OP, i);
		}
	}
	public GT_OP(): TerminalNode[];
	public GT_OP(i: number): TerminalNode;
	public GT_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.GT_OP);
		} else {
			return this.getToken(GLSLParser.GT_OP, i);
		}
	}
	public LE_OP(): TerminalNode[];
	public LE_OP(i: number): TerminalNode;
	public LE_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.LE_OP);
		} else {
			return this.getToken(GLSLParser.LE_OP, i);
		}
	}
	public GE_OP(): TerminalNode[];
	public GE_OP(i: number): TerminalNode;
	public GE_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.GE_OP);
		} else {
			return this.getToken(GLSLParser.GE_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_relational_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterRelational_expression) {
			listener.enterRelational_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitRelational_expression) {
			listener.exitRelational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitRelational_expression) {
			return visitor.visitRelational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	public _relational_expression: Relational_expressionContext;
	public _operands: Relational_expressionContext[] = [];
	public _EQ_OP: Token;
	public _operators: Token[] = [];
	public _NE_OP: Token;
	public relational_expression(): Relational_expressionContext[];
	public relational_expression(i: number): Relational_expressionContext;
	public relational_expression(i?: number): Relational_expressionContext | Relational_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Relational_expressionContext);
		} else {
			return this.getRuleContext(i, Relational_expressionContext);
		}
	}
	public EQ_OP(): TerminalNode[];
	public EQ_OP(i: number): TerminalNode;
	public EQ_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.EQ_OP);
		} else {
			return this.getToken(GLSLParser.EQ_OP, i);
		}
	}
	public NE_OP(): TerminalNode[];
	public NE_OP(i: number): TerminalNode;
	public NE_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.NE_OP);
		} else {
			return this.getToken(GLSLParser.NE_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_equality_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterEquality_expression) {
			listener.enterEquality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitEquality_expression) {
			listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_expressionContext extends ParserRuleContext {
	public _equality_expression: Equality_expressionContext;
	public _operands: Equality_expressionContext[] = [];
	public _BAND_OP: Token;
	public _operators: Token[] = [];
	public equality_expression(): Equality_expressionContext[];
	public equality_expression(i: number): Equality_expressionContext;
	public equality_expression(i?: number): Equality_expressionContext | Equality_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Equality_expressionContext);
		} else {
			return this.getRuleContext(i, Equality_expressionContext);
		}
	}
	public BAND_OP(): TerminalNode[];
	public BAND_OP(i: number): TerminalNode;
	public BAND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.BAND_OP);
		} else {
			return this.getToken(GLSLParser.BAND_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_and_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterAnd_expression) {
			listener.enterAnd_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitAnd_expression) {
			listener.exitAnd_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitAnd_expression) {
			return visitor.visitAnd_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exclusive_or_expressionContext extends ParserRuleContext {
	public _and_expression: And_expressionContext;
	public _operands: And_expressionContext[] = [];
	public _BXOR_OP: Token;
	public _operators: Token[] = [];
	public and_expression(): And_expressionContext[];
	public and_expression(i: number): And_expressionContext;
	public and_expression(i?: number): And_expressionContext | And_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_expressionContext);
		} else {
			return this.getRuleContext(i, And_expressionContext);
		}
	}
	public BXOR_OP(): TerminalNode[];
	public BXOR_OP(i: number): TerminalNode;
	public BXOR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.BXOR_OP);
		} else {
			return this.getToken(GLSLParser.BXOR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_exclusive_or_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterExclusive_or_expression) {
			listener.enterExclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitExclusive_or_expression) {
			listener.exitExclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitExclusive_or_expression) {
			return visitor.visitExclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inclusive_or_expressionContext extends ParserRuleContext {
	public _exclusive_or_expression: Exclusive_or_expressionContext;
	public _operands: Exclusive_or_expressionContext[] = [];
	public _BOR_OP: Token;
	public _operators: Token[] = [];
	public exclusive_or_expression(): Exclusive_or_expressionContext[];
	public exclusive_or_expression(i: number): Exclusive_or_expressionContext;
	public exclusive_or_expression(i?: number): Exclusive_or_expressionContext | Exclusive_or_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Exclusive_or_expressionContext);
		} else {
			return this.getRuleContext(i, Exclusive_or_expressionContext);
		}
	}
	public BOR_OP(): TerminalNode[];
	public BOR_OP(i: number): TerminalNode;
	public BOR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.BOR_OP);
		} else {
			return this.getToken(GLSLParser.BOR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_inclusive_or_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInclusive_or_expression) {
			listener.enterInclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInclusive_or_expression) {
			listener.exitInclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInclusive_or_expression) {
			return visitor.visitInclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_and_expressionContext extends ParserRuleContext {
	public _inclusive_or_expression: Inclusive_or_expressionContext;
	public _operands: Inclusive_or_expressionContext[] = [];
	public _AND_OP: Token;
	public _operators: Token[] = [];
	public inclusive_or_expression(): Inclusive_or_expressionContext[];
	public inclusive_or_expression(i: number): Inclusive_or_expressionContext;
	public inclusive_or_expression(i?: number): Inclusive_or_expressionContext | Inclusive_or_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Inclusive_or_expressionContext);
		} else {
			return this.getRuleContext(i, Inclusive_or_expressionContext);
		}
	}
	public AND_OP(): TerminalNode[];
	public AND_OP(i: number): TerminalNode;
	public AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.AND_OP);
		} else {
			return this.getToken(GLSLParser.AND_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_logical_and_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterLogical_and_expression) {
			listener.enterLogical_and_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitLogical_and_expression) {
			listener.exitLogical_and_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitLogical_and_expression) {
			return visitor.visitLogical_and_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_xor_expressionContext extends ParserRuleContext {
	public _logical_and_expression: Logical_and_expressionContext;
	public _operands: Logical_and_expressionContext[] = [];
	public _XOR_OP: Token;
	public _operators: Token[] = [];
	public logical_and_expression(): Logical_and_expressionContext[];
	public logical_and_expression(i: number): Logical_and_expressionContext;
	public logical_and_expression(i?: number): Logical_and_expressionContext | Logical_and_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Logical_and_expressionContext);
		} else {
			return this.getRuleContext(i, Logical_and_expressionContext);
		}
	}
	public XOR_OP(): TerminalNode[];
	public XOR_OP(i: number): TerminalNode;
	public XOR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.XOR_OP);
		} else {
			return this.getToken(GLSLParser.XOR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_logical_xor_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterLogical_xor_expression) {
			listener.enterLogical_xor_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitLogical_xor_expression) {
			listener.exitLogical_xor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitLogical_xor_expression) {
			return visitor.visitLogical_xor_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_or_expressionContext extends ParserRuleContext {
	public _logical_xor_expression: Logical_xor_expressionContext;
	public _operands: Logical_xor_expressionContext[] = [];
	public _OR_OP: Token;
	public _operators: Token[] = [];
	public logical_xor_expression(): Logical_xor_expressionContext[];
	public logical_xor_expression(i: number): Logical_xor_expressionContext;
	public logical_xor_expression(i?: number): Logical_xor_expressionContext | Logical_xor_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Logical_xor_expressionContext);
		} else {
			return this.getRuleContext(i, Logical_xor_expressionContext);
		}
	}
	public OR_OP(): TerminalNode[];
	public OR_OP(i: number): TerminalNode;
	public OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.OR_OP);
		} else {
			return this.getToken(GLSLParser.OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_logical_or_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterLogical_or_expression) {
			listener.enterLogical_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitLogical_or_expression) {
			listener.exitLogical_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitLogical_or_expression) {
			return visitor.visitLogical_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_expressionContext extends ParserRuleContext {
	public logical_or_expression(): Logical_or_expressionContext {
		return this.getRuleContext(0, Logical_or_expressionContext);
	}
	public QUERY_OP(): TerminalNode[];
	public QUERY_OP(i: number): TerminalNode;
	public QUERY_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.QUERY_OP);
		} else {
			return this.getToken(GLSLParser.QUERY_OP, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.COLON);
		} else {
			return this.getToken(GLSLParser.COLON, i);
		}
	}
	public assignment_expression(): Assignment_expressionContext[];
	public assignment_expression(i: number): Assignment_expressionContext;
	public assignment_expression(i?: number): Assignment_expressionContext | Assignment_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Assignment_expressionContext);
		} else {
			return this.getRuleContext(i, Assignment_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_conditional_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterConditional_expression) {
			listener.enterConditional_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitConditional_expression) {
			listener.exitConditional_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitConditional_expression) {
			return visitor.visitConditional_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_expressionContext extends ParserRuleContext {
	public conditional_expression(): Conditional_expressionContext | undefined {
		return this.tryGetRuleContext(0, Conditional_expressionContext);
	}
	public unary_expression(): Unary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Unary_expressionContext);
	}
	public assignment_operator(): Assignment_operatorContext | undefined {
		return this.tryGetRuleContext(0, Assignment_operatorContext);
	}
	public assignment_expression(): Assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_assignment_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterAssignment_expression) {
			listener.enterAssignment_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitAssignment_expression) {
			listener.exitAssignment_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitAssignment_expression) {
			return visitor.visitAssignment_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ASSIGN_OP, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MOD_ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SUB_ASSIGN, 0); }
	public LEFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.LEFT_ASSIGN, 0); }
	public RIGHT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.RIGHT_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.AND_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.XOR_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.OR_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _assignment_expression: Assignment_expressionContext;
	public _operands: Assignment_expressionContext[] = [];
	public _COMMA: Token;
	public _operators: Token[] = [];
	public assignment_expression(): Assignment_expressionContext[];
	public assignment_expression(i: number): Assignment_expressionContext;
	public assignment_expression(i?: number): Assignment_expressionContext | Assignment_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Assignment_expressionContext);
		} else {
			return this.getRuleContext(i, Assignment_expressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GLSLParser.COMMA);
		} else {
			return this.getToken(GLSLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_expressionContext extends ParserRuleContext {
	public conditional_expression(): Conditional_expressionContext {
		return this.getRuleContext(0, Conditional_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_constant_expression; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterConstant_expression) {
			listener.enterConstant_expression(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitConstant_expression) {
			listener.exitConstant_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitConstant_expression) {
			return visitor.visitConstant_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public function_prototype(): Function_prototypeContext | undefined {
		return this.tryGetRuleContext(0, Function_prototypeContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SEMICOLON, 0); }
	public init_declarator_list(): Init_declarator_listContext | undefined {
		return this.tryGetRuleContext(0, Init_declarator_listContext);
	}
	public PRECISION(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRECISION, 0); }
	public precision_qualifier(): Precision_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Precision_qualifierContext);
	}
	public type_specifier(): Type_specifierContext | undefined {
		return this.tryGetRuleContext(0, Type_specifierContext);
	}
	public interface_block(): Interface_blockContext | undefined {
		return this.tryGetRuleContext(0, Interface_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_declaration; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_prototypeContext extends ParserRuleContext {
	public function_declarator(): Function_declaratorContext {
		return this.getRuleContext(0, Function_declaratorContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(GLSLParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_prototype; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_prototype) {
			listener.enterFunction_prototype(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_prototype) {
			listener.exitFunction_prototype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_prototype) {
			return visitor.visitFunction_prototype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declaratorContext extends ParserRuleContext {
	public function_header(): Function_headerContext | undefined {
		return this.tryGetRuleContext(0, Function_headerContext);
	}
	public function_header_with_parameters(): Function_header_with_parametersContext | undefined {
		return this.tryGetRuleContext(0, Function_header_with_parametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_declarator; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_declarator) {
			listener.enterFunction_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_declarator) {
			listener.exitFunction_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_declarator) {
			return visitor.visitFunction_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_header_with_parametersContext extends ParserRuleContext {
	public function_header(): Function_headerContext | undefined {
		return this.tryGetRuleContext(0, Function_headerContext);
	}
	public parameter_declaration(): Parameter_declarationContext {
		return this.getRuleContext(0, Parameter_declarationContext);
	}
	public function_header_with_parameters(): Function_header_with_parametersContext | undefined {
		return this.tryGetRuleContext(0, Function_header_with_parametersContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_header_with_parameters; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_header_with_parameters) {
			listener.enterFunction_header_with_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_header_with_parameters) {
			listener.exitFunction_header_with_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_header_with_parameters) {
			return visitor.visitFunction_header_with_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_headerContext extends ParserRuleContext {
	public fully_specified_type(): Fully_specified_typeContext {
		return this.getRuleContext(0, Fully_specified_typeContext);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getRuleContext(0, Variable_identifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(GLSLParser.LPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_header; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_header) {
			listener.enterFunction_header(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_header) {
			listener.exitFunction_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_header) {
			return visitor.visitFunction_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_declaratorContext extends ParserRuleContext {
	public type_specifier(): Type_specifierContext {
		return this.getRuleContext(0, Type_specifierContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(GLSLParser.IDENTIFIER, 0); }
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_parameter_declarator; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterParameter_declarator) {
			listener.enterParameter_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitParameter_declarator) {
			listener.exitParameter_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitParameter_declarator) {
			return visitor.visitParameter_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_declarationContext extends ParserRuleContext {
	public parameter_qualifier(): Parameter_qualifierContext {
		return this.getRuleContext(0, Parameter_qualifierContext);
	}
	public parameter_declarator(): Parameter_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Parameter_declaratorContext);
	}
	public parameter_type_specifier(): Parameter_type_specifierContext | undefined {
		return this.tryGetRuleContext(0, Parameter_type_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_parameter_declaration; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterParameter_declaration) {
			listener.enterParameter_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitParameter_declaration) {
			listener.exitParameter_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitParameter_declaration) {
			return visitor.visitParameter_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_qualifierContext extends ParserRuleContext {
	public CONST_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.CONST_TOK, 0); }
	public parameter_qualifier(): Parameter_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Parameter_qualifierContext);
	}
	public PRECISE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRECISE, 0); }
	public parameter_direction_qualifier(): Parameter_direction_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Parameter_direction_qualifierContext);
	}
	public precision_qualifier(): Precision_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Precision_qualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_parameter_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterParameter_qualifier) {
			listener.enterParameter_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitParameter_qualifier) {
			listener.exitParameter_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitParameter_qualifier) {
			return visitor.visitParameter_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_direction_qualifierContext extends ParserRuleContext {
	public IN_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IN_TOK, 0); }
	public OUT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.OUT_TOK, 0); }
	public INOUT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INOUT_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_parameter_direction_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterParameter_direction_qualifier) {
			listener.enterParameter_direction_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitParameter_direction_qualifier) {
			listener.exitParameter_direction_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitParameter_direction_qualifier) {
			return visitor.visitParameter_direction_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_type_specifierContext extends ParserRuleContext {
	public type_specifier(): Type_specifierContext {
		return this.getRuleContext(0, Type_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_parameter_type_specifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterParameter_type_specifier) {
			listener.enterParameter_type_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitParameter_type_specifier) {
			listener.exitParameter_type_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitParameter_type_specifier) {
			return visitor.visitParameter_type_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_declarator_listContext extends ParserRuleContext {
	public single_declaration(): Single_declarationContext | undefined {
		return this.tryGetRuleContext(0, Single_declarationContext);
	}
	public init_declarator_list(): Init_declarator_listContext | undefined {
		return this.tryGetRuleContext(0, Init_declarator_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ASSIGN_OP, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_init_declarator_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInit_declarator_list) {
			listener.enterInit_declarator_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInit_declarator_list) {
			listener.exitInit_declarator_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInit_declarator_list) {
			return visitor.visitInit_declarator_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_declarationContext extends ParserRuleContext {
	public fully_specified_type(): Fully_specified_typeContext | undefined {
		return this.tryGetRuleContext(0, Fully_specified_typeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ASSIGN_OP, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public INVARIANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INVARIANT, 0); }
	public variable_identifier(): Variable_identifierContext | undefined {
		return this.tryGetRuleContext(0, Variable_identifierContext);
	}
	public PRECISE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRECISE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_single_declaration; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterSingle_declaration) {
			listener.enterSingle_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitSingle_declaration) {
			listener.exitSingle_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitSingle_declaration) {
			return visitor.visitSingle_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fully_specified_typeContext extends ParserRuleContext {
	public type_specifier(): Type_specifierContext {
		return this.getRuleContext(0, Type_specifierContext);
	}
	public type_qualifier(): Type_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Type_qualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_fully_specified_type; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFully_specified_type) {
			listener.enterFully_specified_type(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFully_specified_type) {
			listener.exitFully_specified_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFully_specified_type) {
			return visitor.visitFully_specified_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layout_qualifierContext extends ParserRuleContext {
	public LAYOUT_TOK(): TerminalNode { return this.getToken(GLSLParser.LAYOUT_TOK, 0); }
	public LPAREN(): TerminalNode { return this.getToken(GLSLParser.LPAREN, 0); }
	public layout_qualifier_id_list(): Layout_qualifier_id_listContext {
		return this.getRuleContext(0, Layout_qualifier_id_listContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(GLSLParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_layout_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterLayout_qualifier) {
			listener.enterLayout_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitLayout_qualifier) {
			listener.exitLayout_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitLayout_qualifier) {
			return visitor.visitLayout_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layout_qualifier_id_listContext extends ParserRuleContext {
	public layout_qualifier_id(): Layout_qualifier_idContext {
		return this.getRuleContext(0, Layout_qualifier_idContext);
	}
	public layout_qualifier_id_list(): Layout_qualifier_id_listContext | undefined {
		return this.tryGetRuleContext(0, Layout_qualifier_id_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_layout_qualifier_id_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterLayout_qualifier_id_list) {
			listener.enterLayout_qualifier_id_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitLayout_qualifier_id_list) {
			listener.exitLayout_qualifier_id_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitLayout_qualifier_id_list) {
			return visitor.visitLayout_qualifier_id_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_constantContext extends ParserRuleContext {
	public INTCONSTANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INTCONSTANT, 0); }
	public UINTCONSTANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UINTCONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_integer_constant; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInteger_constant) {
			listener.enterInteger_constant(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInteger_constant) {
			listener.exitInteger_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInteger_constant) {
			return visitor.visitInteger_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layout_qualifier_idContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ASSIGN_OP, 0); }
	public integer_constant(): Integer_constantContext | undefined {
		return this.tryGetRuleContext(0, Integer_constantContext);
	}
	public interface_block_layout_qualifier(): Interface_block_layout_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Interface_block_layout_qualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_layout_qualifier_id; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterLayout_qualifier_id) {
			listener.enterLayout_qualifier_id(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitLayout_qualifier_id) {
			listener.exitLayout_qualifier_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitLayout_qualifier_id) {
			return visitor.visitLayout_qualifier_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_block_layout_qualifierContext extends ParserRuleContext {
	public ROW_MAJOR(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ROW_MAJOR, 0); }
	public PACKED_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PACKED_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_interface_block_layout_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInterface_block_layout_qualifier) {
			listener.enterInterface_block_layout_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInterface_block_layout_qualifier) {
			listener.exitInterface_block_layout_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInterface_block_layout_qualifier) {
			return visitor.visitInterface_block_layout_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interpolation_qualifierContext extends ParserRuleContext {
	public SMOOTH(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SMOOTH, 0); }
	public FLAT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.FLAT, 0); }
	public NOPERSPECTIVE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.NOPERSPECTIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_interpolation_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInterpolation_qualifier) {
			listener.enterInterpolation_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInterpolation_qualifier) {
			listener.exitInterpolation_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInterpolation_qualifier) {
			return visitor.visitInterpolation_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_qualifierContext extends ParserRuleContext {
	public INVARIANT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INVARIANT, 0); }
	public PRECISE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PRECISE, 0); }
	public auxiliary_storage_qualifier(): Auxiliary_storage_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Auxiliary_storage_qualifierContext);
	}
	public storage_qualifier(): Storage_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Storage_qualifierContext);
	}
	public interpolation_qualifier(): Interpolation_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Interpolation_qualifierContext);
	}
	public layout_qualifier(): Layout_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Layout_qualifierContext);
	}
	public precision_qualifier(): Precision_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Precision_qualifierContext);
	}
	public type_qualifier(): Type_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Type_qualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_type_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterType_qualifier) {
			listener.enterType_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitType_qualifier) {
			listener.exitType_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitType_qualifier) {
			return visitor.visitType_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Auxiliary_storage_qualifierContext extends ParserRuleContext {
	public CENTROID(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.CENTROID, 0); }
	public SAMPLE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_auxiliary_storage_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterAuxiliary_storage_qualifier) {
			listener.enterAuxiliary_storage_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitAuxiliary_storage_qualifier) {
			listener.exitAuxiliary_storage_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitAuxiliary_storage_qualifier) {
			return visitor.visitAuxiliary_storage_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Storage_qualifierContext extends ParserRuleContext {
	public CONST_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.CONST_TOK, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ATTRIBUTE, 0); }
	public VARYING(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VARYING, 0); }
	public IN_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IN_TOK, 0); }
	public OUT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.OUT_TOK, 0); }
	public UNIFORM(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UNIFORM, 0); }
	public COHERENT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COHERENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VOLATILE, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.RESTRICT, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.READONLY, 0); }
	public WRITEONLY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.WRITEONLY, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SHARED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_storage_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterStorage_qualifier) {
			listener.enterStorage_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitStorage_qualifier) {
			listener.exitStorage_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitStorage_qualifier) {
			return visitor.visitStorage_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_specifierContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(GLSLParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(GLSLParser.RBRACKET, 0); }
	public constant_expression(): Constant_expressionContext | undefined {
		return this.tryGetRuleContext(0, Constant_expressionContext);
	}
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_array_specifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterArray_specifier) {
			listener.enterArray_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitArray_specifier) {
			listener.exitArray_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitArray_specifier) {
			return visitor.visitArray_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_specifierContext extends ParserRuleContext {
	public type_specifier_nonarray(): Type_specifier_nonarrayContext {
		return this.getRuleContext(0, Type_specifier_nonarrayContext);
	}
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_type_specifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterType_specifier) {
			listener.enterType_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitType_specifier) {
			listener.exitType_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitType_specifier) {
			return visitor.visitType_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_specifier_nonarrayContext extends ParserRuleContext {
	public builtin_type_specifier_nonarray(): Builtin_type_specifier_nonarrayContext | undefined {
		return this.tryGetRuleContext(0, Builtin_type_specifier_nonarrayContext);
	}
	public struct_specifier(): Struct_specifierContext | undefined {
		return this.tryGetRuleContext(0, Struct_specifierContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_type_specifier_nonarray; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterType_specifier_nonarray) {
			listener.enterType_specifier_nonarray(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitType_specifier_nonarray) {
			listener.exitType_specifier_nonarray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitType_specifier_nonarray) {
			return visitor.visitType_specifier_nonarray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Builtin_type_specifier_nonarrayContext extends ParserRuleContext {
	public VOID_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VOID_TOK, 0); }
	public FLOAT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.FLOAT_TOK, 0); }
	public INT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.INT_TOK, 0); }
	public UINT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UINT_TOK, 0); }
	public BOOL_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BOOL_TOK, 0); }
	public VEC2(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VEC2, 0); }
	public VEC3(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VEC3, 0); }
	public VEC4(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.VEC4, 0); }
	public BVEC2(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BVEC2, 0); }
	public BVEC3(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BVEC3, 0); }
	public BVEC4(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BVEC4, 0); }
	public IVEC2(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IVEC2, 0); }
	public IVEC3(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IVEC3, 0); }
	public IVEC4(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IVEC4, 0); }
	public UVEC2(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UVEC2, 0); }
	public UVEC3(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UVEC3, 0); }
	public UVEC4(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UVEC4, 0); }
	public MAT2X2(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT2X2, 0); }
	public MAT2X3(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT2X3, 0); }
	public MAT2X4(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT2X4, 0); }
	public MAT3X2(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT3X2, 0); }
	public MAT3X3(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT3X3, 0); }
	public MAT3X4(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT3X4, 0); }
	public MAT4X2(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT4X2, 0); }
	public MAT4X3(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT4X3, 0); }
	public MAT4X4(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MAT4X4, 0); }
	public SAMPLER1D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER1D, 0); }
	public SAMPLER2D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2D, 0); }
	public SAMPLER2DRECT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2DRECT, 0); }
	public SAMPLER3D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER3D, 0); }
	public SAMPLERCUBE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLERCUBE, 0); }
	public SAMPLEREXTERNALOES(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLEREXTERNALOES, 0); }
	public SAMPLER1DSHADOW(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER1DSHADOW, 0); }
	public SAMPLER2DSHADOW(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2DSHADOW, 0); }
	public SAMPLER2DRECTSHADOW(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2DRECTSHADOW, 0); }
	public SAMPLERCUBESHADOW(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLERCUBESHADOW, 0); }
	public SAMPLER1DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER1DARRAY, 0); }
	public SAMPLER2DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2DARRAY, 0); }
	public SAMPLER1DARRAYSHADOW(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER1DARRAYSHADOW, 0); }
	public SAMPLER2DARRAYSHADOW(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2DARRAYSHADOW, 0); }
	public SAMPLERBUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLERBUFFER, 0); }
	public SAMPLERCUBEARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLERCUBEARRAY, 0); }
	public SAMPLERCUBEARRAYSHADOW(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLERCUBEARRAYSHADOW, 0); }
	public ISAMPLER1D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER1D, 0); }
	public ISAMPLER2D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER2D, 0); }
	public ISAMPLER2DRECT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER2DRECT, 0); }
	public ISAMPLER3D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER3D, 0); }
	public ISAMPLERCUBE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLERCUBE, 0); }
	public ISAMPLER1DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER1DARRAY, 0); }
	public ISAMPLER2DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER2DARRAY, 0); }
	public ISAMPLERBUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLERBUFFER, 0); }
	public ISAMPLERCUBEARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLERCUBEARRAY, 0); }
	public USAMPLER1D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER1D, 0); }
	public USAMPLER2D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER2D, 0); }
	public USAMPLER2DRECT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER2DRECT, 0); }
	public USAMPLER3D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER3D, 0); }
	public USAMPLERCUBE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLERCUBE, 0); }
	public USAMPLER1DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER1DARRAY, 0); }
	public USAMPLER2DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER2DARRAY, 0); }
	public USAMPLERBUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLERBUFFER, 0); }
	public USAMPLERCUBEARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLERCUBEARRAY, 0); }
	public SAMPLER2DMS(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2DMS, 0); }
	public ISAMPLER2DMS(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER2DMS, 0); }
	public USAMPLER2DMS(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER2DMS, 0); }
	public SAMPLER2DMSARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SAMPLER2DMSARRAY, 0); }
	public ISAMPLER2DMSARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ISAMPLER2DMSARRAY, 0); }
	public USAMPLER2DMSARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.USAMPLER2DMSARRAY, 0); }
	public IMAGE1D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE1D, 0); }
	public IMAGE2D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE2D, 0); }
	public IMAGE3D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE3D, 0); }
	public IMAGE2DRECT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE2DRECT, 0); }
	public IMAGECUBE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGECUBE, 0); }
	public IMAGEBUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGEBUFFER, 0); }
	public IMAGE1DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE1DARRAY, 0); }
	public IMAGE2DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE2DARRAY, 0); }
	public IMAGECUBEARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGECUBEARRAY, 0); }
	public IMAGE2DMS(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE2DMS, 0); }
	public IMAGE2DMSARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IMAGE2DMSARRAY, 0); }
	public IIMAGE1D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE1D, 0); }
	public IIMAGE2D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE2D, 0); }
	public IIMAGE3D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE3D, 0); }
	public IIMAGE2DRECT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE2DRECT, 0); }
	public IIMAGECUBE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGECUBE, 0); }
	public IIMAGEBUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGEBUFFER, 0); }
	public IIMAGE1DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE1DARRAY, 0); }
	public IIMAGE2DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE2DARRAY, 0); }
	public IIMAGECUBEARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGECUBEARRAY, 0); }
	public IIMAGE2DMS(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE2DMS, 0); }
	public IIMAGE2DMSARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IIMAGE2DMSARRAY, 0); }
	public UIMAGE1D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE1D, 0); }
	public UIMAGE2D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE2D, 0); }
	public UIMAGE3D(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE3D, 0); }
	public UIMAGE2DRECT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE2DRECT, 0); }
	public UIMAGECUBE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGECUBE, 0); }
	public UIMAGEBUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGEBUFFER, 0); }
	public UIMAGE1DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE1DARRAY, 0); }
	public UIMAGE2DARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE2DARRAY, 0); }
	public UIMAGECUBEARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGECUBEARRAY, 0); }
	public UIMAGE2DMS(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE2DMS, 0); }
	public UIMAGE2DMSARRAY(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UIMAGE2DMSARRAY, 0); }
	public ATOMIC_UINT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ATOMIC_UINT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_builtin_type_specifier_nonarray; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterBuiltin_type_specifier_nonarray) {
			listener.enterBuiltin_type_specifier_nonarray(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitBuiltin_type_specifier_nonarray) {
			listener.exitBuiltin_type_specifier_nonarray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitBuiltin_type_specifier_nonarray) {
			return visitor.visitBuiltin_type_specifier_nonarray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Precision_qualifierContext extends ParserRuleContext {
	public HIGHP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.HIGHP, 0); }
	public MEDIUMP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.MEDIUMP, 0); }
	public LOWP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.LOWP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_precision_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterPrecision_qualifier) {
			listener.enterPrecision_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitPrecision_qualifier) {
			listener.exitPrecision_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitPrecision_qualifier) {
			return visitor.visitPrecision_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_specifierContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(GLSLParser.STRUCT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(GLSLParser.LBRACE, 0); }
	public member_list(): Member_listContext {
		return this.getRuleContext(0, Member_listContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(GLSLParser.RBRACE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_struct_specifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterStruct_specifier) {
			listener.enterStruct_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitStruct_specifier) {
			listener.exitStruct_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitStruct_specifier) {
			return visitor.visitStruct_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_listContext extends ParserRuleContext {
	public member_declaration(): Member_declarationContext {
		return this.getRuleContext(0, Member_declarationContext);
	}
	public member_list(): Member_listContext | undefined {
		return this.tryGetRuleContext(0, Member_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_member_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterMember_list) {
			listener.enterMember_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitMember_list) {
			listener.exitMember_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitMember_list) {
			return visitor.visitMember_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_declarationContext extends ParserRuleContext {
	public fully_specified_type(): Fully_specified_typeContext {
		return this.getRuleContext(0, Fully_specified_typeContext);
	}
	public struct_declarator_list(): Struct_declarator_listContext {
		return this.getRuleContext(0, Struct_declarator_listContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(GLSLParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_member_declaration; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterMember_declaration) {
			listener.enterMember_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitMember_declaration) {
			listener.exitMember_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitMember_declaration) {
			return visitor.visitMember_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_declarator_listContext extends ParserRuleContext {
	public struct_declarator(): Struct_declaratorContext {
		return this.getRuleContext(0, Struct_declaratorContext);
	}
	public struct_declarator_list(): Struct_declarator_listContext | undefined {
		return this.tryGetRuleContext(0, Struct_declarator_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_struct_declarator_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterStruct_declarator_list) {
			listener.enterStruct_declarator_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitStruct_declarator_list) {
			listener.exitStruct_declarator_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitStruct_declarator_list) {
			return visitor.visitStruct_declarator_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_declaratorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GLSLParser.IDENTIFIER, 0); }
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_struct_declarator; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterStruct_declarator) {
			listener.enterStruct_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitStruct_declarator) {
			listener.exitStruct_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitStruct_declarator) {
			return visitor.visitStruct_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignment_expression(): Assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expressionContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.LBRACE, 0); }
	public initializer_list(): Initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Initializer_listContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.RBRACE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_initializer; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Initializer_listContext extends ParserRuleContext {
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public initializer_list(): Initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Initializer_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_initializer_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInitializer_list) {
			listener.enterInitializer_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInitializer_list) {
			listener.exitInitializer_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInitializer_list) {
			return visitor.visitInitializer_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_statementContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_declaration_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterDeclaration_statement) {
			listener.enterDeclaration_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitDeclaration_statement) {
			listener.exitDeclaration_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitDeclaration_statement) {
			return visitor.visitDeclaration_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public compound_statement(): Compound_statementContext | undefined {
		return this.tryGetRuleContext(0, Compound_statementContext);
	}
	public simple_statement(): Simple_statementContext | undefined {
		return this.tryGetRuleContext(0, Simple_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_statementContext extends ParserRuleContext {
	public expression_statement(): Expression_statementContext | undefined {
		return this.tryGetRuleContext(0, Expression_statementContext);
	}
	public declaration_statement(): Declaration_statementContext | undefined {
		return this.tryGetRuleContext(0, Declaration_statementContext);
	}
	public selection_statement(): Selection_statementContext | undefined {
		return this.tryGetRuleContext(0, Selection_statementContext);
	}
	public switch_statement(): Switch_statementContext | undefined {
		return this.tryGetRuleContext(0, Switch_statementContext);
	}
	public iteration_statement(): Iteration_statementContext | undefined {
		return this.tryGetRuleContext(0, Iteration_statementContext);
	}
	public jump_statement(): Jump_statementContext | undefined {
		return this.tryGetRuleContext(0, Jump_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_simple_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterSimple_statement) {
			listener.enterSimple_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitSimple_statement) {
			listener.exitSimple_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitSimple_statement) {
			return visitor.visitSimple_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_statementContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(GLSLParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(GLSLParser.RBRACE, 0); }
	public statement_list(): Statement_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_compound_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterCompound_statement) {
			listener.enterCompound_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitCompound_statement) {
			listener.exitCompound_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitCompound_statement) {
			return visitor.visitCompound_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Statement_no_new_scopeContext extends ParserRuleContext {
	public compound_statement_no_new_scope(): Compound_statement_no_new_scopeContext | undefined {
		return this.tryGetRuleContext(0, Compound_statement_no_new_scopeContext);
	}
	public simple_statement(): Simple_statementContext | undefined {
		return this.tryGetRuleContext(0, Simple_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_statement_no_new_scope; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterStatement_no_new_scope) {
			listener.enterStatement_no_new_scope(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitStatement_no_new_scope) {
			listener.exitStatement_no_new_scope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitStatement_no_new_scope) {
			return visitor.visitStatement_no_new_scope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_statement_no_new_scopeContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(GLSLParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(GLSLParser.RBRACE, 0); }
	public statement_list(): Statement_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_compound_statement_no_new_scope; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterCompound_statement_no_new_scope) {
			listener.enterCompound_statement_no_new_scope(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitCompound_statement_no_new_scope) {
			listener.exitCompound_statement_no_new_scope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitCompound_statement_no_new_scope) {
			return visitor.visitCompound_statement_no_new_scope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Statement_listContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public statement_list(): Statement_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_statement_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterStatement_list) {
			listener.enterStatement_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitStatement_list) {
			listener.exitStatement_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitStatement_list) {
			return visitor.visitStatement_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_statementContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(GLSLParser.SEMICOLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_expression_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterExpression_statement) {
			listener.enterExpression_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitExpression_statement) {
			listener.exitExpression_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitExpression_statement) {
			return visitor.visitExpression_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Selection_statementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(GLSLParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(GLSLParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(GLSLParser.RPAREN, 0); }
	public selection_rest_statement(): Selection_rest_statementContext {
		return this.getRuleContext(0, Selection_rest_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_selection_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterSelection_statement) {
			listener.enterSelection_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitSelection_statement) {
			listener.exitSelection_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitSelection_statement) {
			return visitor.visitSelection_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Selection_rest_statementContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_selection_rest_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterSelection_rest_statement) {
			listener.enterSelection_rest_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitSelection_rest_statement) {
			listener.exitSelection_rest_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitSelection_rest_statement) {
			return visitor.visitSelection_rest_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public fully_specified_type(): Fully_specified_typeContext | undefined {
		return this.tryGetRuleContext(0, Fully_specified_typeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.ASSIGN_OP, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_condition; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_statementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(GLSLParser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(GLSLParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(GLSLParser.RPAREN, 0); }
	public switch_body(): Switch_bodyContext {
		return this.getRuleContext(0, Switch_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_switch_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterSwitch_statement) {
			listener.enterSwitch_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitSwitch_statement) {
			listener.exitSwitch_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitSwitch_statement) {
			return visitor.visitSwitch_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_bodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(GLSLParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(GLSLParser.RBRACE, 0); }
	public case_statement_list(): Case_statement_listContext | undefined {
		return this.tryGetRuleContext(0, Case_statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_switch_body; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterSwitch_body) {
			listener.enterSwitch_body(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitSwitch_body) {
			listener.exitSwitch_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitSwitch_body) {
			return visitor.visitSwitch_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_labelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(GLSLParser.COLON, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_case_label; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterCase_label) {
			listener.enterCase_label(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitCase_label) {
			listener.exitCase_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitCase_label) {
			return visitor.visitCase_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_label_listContext extends ParserRuleContext {
	public case_label(): Case_labelContext {
		return this.getRuleContext(0, Case_labelContext);
	}
	public case_label_list(): Case_label_listContext | undefined {
		return this.tryGetRuleContext(0, Case_label_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_case_label_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterCase_label_list) {
			listener.enterCase_label_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitCase_label_list) {
			listener.exitCase_label_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitCase_label_list) {
			return visitor.visitCase_label_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_statementContext extends ParserRuleContext {
	public case_label_list(): Case_label_listContext | undefined {
		return this.tryGetRuleContext(0, Case_label_listContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public case_statement(): Case_statementContext | undefined {
		return this.tryGetRuleContext(0, Case_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_case_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterCase_statement) {
			listener.enterCase_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitCase_statement) {
			listener.exitCase_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitCase_statement) {
			return visitor.visitCase_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_statement_listContext extends ParserRuleContext {
	public case_statement(): Case_statementContext {
		return this.getRuleContext(0, Case_statementContext);
	}
	public case_statement_list(): Case_statement_listContext | undefined {
		return this.tryGetRuleContext(0, Case_statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_case_statement_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterCase_statement_list) {
			listener.enterCase_statement_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitCase_statement_list) {
			listener.exitCase_statement_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitCase_statement_list) {
			return visitor.visitCase_statement_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Iteration_statementContext extends ParserRuleContext {
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(GLSLParser.LPAREN, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(GLSLParser.RPAREN, 0); }
	public statement_no_new_scope(): Statement_no_new_scopeContext | undefined {
		return this.tryGetRuleContext(0, Statement_no_new_scopeContext);
	}
	public DO(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.DO, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.SEMICOLON, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.FOR, 0); }
	public for_init_statement(): For_init_statementContext | undefined {
		return this.tryGetRuleContext(0, For_init_statementContext);
	}
	public for_rest_statement(): For_rest_statementContext | undefined {
		return this.tryGetRuleContext(0, For_rest_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_iteration_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterIteration_statement) {
			listener.enterIteration_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitIteration_statement) {
			listener.exitIteration_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitIteration_statement) {
			return visitor.visitIteration_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_init_statementContext extends ParserRuleContext {
	public expression_statement(): Expression_statementContext | undefined {
		return this.tryGetRuleContext(0, Expression_statementContext);
	}
	public declaration_statement(): Declaration_statementContext | undefined {
		return this.tryGetRuleContext(0, Declaration_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_for_init_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFor_init_statement) {
			listener.enterFor_init_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFor_init_statement) {
			listener.exitFor_init_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFor_init_statement) {
			return visitor.visitFor_init_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionoptContext extends ParserRuleContext {
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_conditionopt; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterConditionopt) {
			listener.enterConditionopt(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitConditionopt) {
			listener.exitConditionopt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitConditionopt) {
			return visitor.visitConditionopt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_rest_statementContext extends ParserRuleContext {
	public conditionopt(): ConditionoptContext {
		return this.getRuleContext(0, ConditionoptContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(GLSLParser.SEMICOLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_for_rest_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFor_rest_statement) {
			listener.enterFor_rest_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFor_rest_statement) {
			listener.exitFor_rest_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFor_rest_statement) {
			return visitor.visitFor_rest_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_statementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.CONTINUE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(GLSLParser.SEMICOLON, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BREAK, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public DISCARD(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.DISCARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_jump_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterJump_statement) {
			listener.enterJump_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitJump_statement) {
			listener.exitJump_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitJump_statement) {
			return visitor.visitJump_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class External_declarationContext extends ParserRuleContext {
	public function_definition(): Function_definitionContext | undefined {
		return this.tryGetRuleContext(0, Function_definitionContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public pragma_statement(): Pragma_statementContext | undefined {
		return this.tryGetRuleContext(0, Pragma_statementContext);
	}
	public layout_defaults(): Layout_defaultsContext | undefined {
		return this.tryGetRuleContext(0, Layout_defaultsContext);
	}
	public preprocessor_statement(): Preprocessor_statementContext | undefined {
		return this.tryGetRuleContext(0, Preprocessor_statementContext);
	}
	public extension_statement(): Extension_statementContext | undefined {
		return this.tryGetRuleContext(0, Extension_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_external_declaration; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterExternal_declaration) {
			listener.enterExternal_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitExternal_declaration) {
			listener.exitExternal_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitExternal_declaration) {
			return visitor.visitExternal_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_definitionContext extends ParserRuleContext {
	public function_prototype(): Function_prototypeContext {
		return this.getRuleContext(0, Function_prototypeContext);
	}
	public compound_statement_no_new_scope(): Compound_statement_no_new_scopeContext {
		return this.getRuleContext(0, Compound_statement_no_new_scopeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_function_definition; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterFunction_definition) {
			listener.enterFunction_definition(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitFunction_definition) {
			listener.exitFunction_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitFunction_definition) {
			return visitor.visitFunction_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_blockContext extends ParserRuleContext {
	public basic_interface_block(): Basic_interface_blockContext {
		return this.getRuleContext(0, Basic_interface_blockContext);
	}
	public layout_qualifier(): Layout_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Layout_qualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_interface_block; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInterface_block) {
			listener.enterInterface_block(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInterface_block) {
			listener.exitInterface_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInterface_block) {
			return visitor.visitInterface_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Basic_interface_blockContext extends ParserRuleContext {
	public interface_qualifier(): Interface_qualifierContext {
		return this.getRuleContext(0, Interface_qualifierContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(GLSLParser.IDENTIFIER, 0); }
	public LBRACE(): TerminalNode { return this.getToken(GLSLParser.LBRACE, 0); }
	public member_list(): Member_listContext {
		return this.getRuleContext(0, Member_listContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(GLSLParser.RBRACE, 0); }
	public instance_name_opt(): Instance_name_optContext {
		return this.getRuleContext(0, Instance_name_optContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(GLSLParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_basic_interface_block; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterBasic_interface_block) {
			listener.enterBasic_interface_block(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitBasic_interface_block) {
			listener.exitBasic_interface_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitBasic_interface_block) {
			return visitor.visitBasic_interface_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_qualifierContext extends ParserRuleContext {
	public IN_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IN_TOK, 0); }
	public OUT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.OUT_TOK, 0); }
	public UNIFORM(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UNIFORM, 0); }
	public BUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BUFFER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_interface_qualifier; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInterface_qualifier) {
			listener.enterInterface_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInterface_qualifier) {
			listener.exitInterface_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInterface_qualifier) {
			return visitor.visitInterface_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instance_name_optContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IDENTIFIER, 0); }
	public array_specifier(): Array_specifierContext | undefined {
		return this.tryGetRuleContext(0, Array_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_instance_name_opt; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterInstance_name_opt) {
			listener.enterInstance_name_opt(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitInstance_name_opt) {
			listener.exitInstance_name_opt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitInstance_name_opt) {
			return visitor.visitInstance_name_opt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layout_defaultsContext extends ParserRuleContext {
	public layout_qualifier(): Layout_qualifierContext {
		return this.getRuleContext(0, Layout_qualifierContext);
	}
	public UNIFORM(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.UNIFORM, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(GLSLParser.SEMICOLON, 0); }
	public IN_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.IN_TOK, 0); }
	public OUT_TOK(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.OUT_TOK, 0); }
	public BUFFER(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.BUFFER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_layout_defaults; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterLayout_defaults) {
			listener.enterLayout_defaults(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitLayout_defaults) {
			listener.exitLayout_defaults(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitLayout_defaults) {
			return visitor.visitLayout_defaults(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Preprocessor_statementContext extends ParserRuleContext {
	public PREPROC_DEFINE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_DEFINE, 0); }
	public PREPROC_IF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_IF, 0); }
	public PREPROC_IFDEF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_IFDEF, 0); }
	public PREPROC_IFNDEF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_IFNDEF, 0); }
	public PREPROC_ELIF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_ELIF, 0); }
	public PREPROC_UNDEF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_UNDEF, 0); }
	public PREPROC_ELSE(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_ELSE, 0); }
	public PREPROC_ENDIF(): TerminalNode | undefined { return this.tryGetToken(GLSLParser.PREPROC_ENDIF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_preprocessor_statement; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterPreprocessor_statement) {
			listener.enterPreprocessor_statement(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitPreprocessor_statement) {
			listener.exitPreprocessor_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitPreprocessor_statement) {
			return visitor.visitPreprocessor_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


