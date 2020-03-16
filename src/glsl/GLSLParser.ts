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
	public static readonly PRAGMA_DEBUG_ON = 1;
	public static readonly PRAGMA_DEBUG_OFF = 2;
	public static readonly PRAGMA_OPTIMIZE_ON = 3;
	public static readonly PRAGMA_OPTIMIZE_OFF = 4;
	public static readonly PRAGMA_INVARIANT_ALL = 5;
	public static readonly EXTENSION = 6;
	public static readonly COLON = 7;
	public static readonly UNIFORM = 8;
	public static readonly BUFFER = 9;
	public static readonly IN_TOK = 10;
	public static readonly OUT_TOK = 11;
	public static readonly INOUT_TOK = 12;
	public static readonly HIGHP = 13;
	public static readonly MEDIUMP = 14;
	public static readonly LOWP = 15;
	public static readonly PRECISION = 16;
	public static readonly VERSION = 17;
	public static readonly INTCONSTANT = 18;
	public static readonly CONST_TOK = 19;
	public static readonly PRECISE = 20;
	public static readonly INVARIANT = 21;
	public static readonly SMOOTH = 22;
	public static readonly FLAT = 23;
	public static readonly NOPERSPECTIVE = 24;
	public static readonly CENTROID = 25;
	public static readonly SAMPLE = 26;
	public static readonly ATTRIBUTE = 27;
	public static readonly COHERENT = 28;
	public static readonly VOLATILE = 29;
	public static readonly RESTRICT = 30;
	public static readonly VARYING = 31;
	public static readonly READONLY = 32;
	public static readonly WRITEONLY = 33;
	public static readonly SHARED = 34;
	public static readonly LAYOUT_TOK = 35;
	public static readonly UINTCONSTANT = 36;
	public static readonly ROW_MAJOR = 37;
	public static readonly PACKED_TOK = 38;
	public static readonly FLOATCONSTANT = 39;
	public static readonly BOOLCONSTANT = 40;
	public static readonly INC_OP = 41;
	public static readonly DEC_OP = 42;
	public static readonly VOID_TOK = 43;
	public static readonly FIELD_SELECTION = 44;
	public static readonly LEFT_OP = 45;
	public static readonly RIGHT_OP = 46;
	public static readonly LE_OP = 47;
	public static readonly GE_OP = 48;
	public static readonly EQ_OP = 49;
	public static readonly NE_OP = 50;
	public static readonly AND_OP = 51;
	public static readonly XOR_OP = 52;
	public static readonly OR_OP = 53;
	public static readonly MUL_ASSIGN = 54;
	public static readonly DIV_ASSIGN = 55;
	public static readonly MOD_ASSIGN = 56;
	public static readonly ADD_ASSIGN = 57;
	public static readonly SUB_ASSIGN = 58;
	public static readonly LEFT_ASSIGN = 59;
	public static readonly RIGHT_ASSIGN = 60;
	public static readonly AND_ASSIGN = 61;
	public static readonly XOR_ASSIGN = 62;
	public static readonly OR_ASSIGN = 63;
	public static readonly FLOAT_TOK = 64;
	public static readonly INT_TOK = 65;
	public static readonly UINT_TOK = 66;
	public static readonly BOOL_TOK = 67;
	public static readonly SAMPLERCUBE = 68;
	public static readonly SAMPLEREXTERNALOES = 69;
	public static readonly SAMPLERCUBESHADOW = 70;
	public static readonly SAMPLERBUFFER = 71;
	public static readonly SAMPLERCUBEARRAY = 72;
	public static readonly SAMPLERCUBEARRAYSHADOW = 73;
	public static readonly ISAMPLERCUBE = 74;
	public static readonly ISAMPLERBUFFER = 75;
	public static readonly ISAMPLERCUBEARRAY = 76;
	public static readonly USAMPLERCUBE = 77;
	public static readonly USAMPLERBUFFER = 78;
	public static readonly USAMPLERCUBEARRAY = 79;
	public static readonly IMAGECUBE = 80;
	public static readonly IMAGEBUFFER = 81;
	public static readonly IMAGECUBEARRAY = 82;
	public static readonly IIMAGECUBE = 83;
	public static readonly IIMAGEBUFFER = 84;
	public static readonly IIMAGECUBEARRAY = 85;
	public static readonly UIMAGECUBE = 86;
	public static readonly UIMAGEBUFFER = 87;
	public static readonly UIMAGECUBEARRAY = 88;
	public static readonly ATOMIC_UINT = 89;
	public static readonly STRUCT = 90;
	public static readonly IF = 91;
	public static readonly ELSE = 92;
	public static readonly SWITCH = 93;
	public static readonly CASE = 94;
	public static readonly DEFAULT = 95;
	public static readonly WHILE = 96;
	public static readonly DO = 97;
	public static readonly FOR = 98;
	public static readonly CONTINUE = 99;
	public static readonly BREAK = 100;
	public static readonly RETURN = 101;
	public static readonly DISCARD = 102;
	public static readonly VEC2 = 103;
	public static readonly VEC3 = 104;
	public static readonly VEC4 = 105;
	public static readonly BVEC2 = 106;
	public static readonly BVEC3 = 107;
	public static readonly BVEC4 = 108;
	public static readonly IVEC2 = 109;
	public static readonly IVEC3 = 110;
	public static readonly IVEC4 = 111;
	public static readonly UVEC2 = 112;
	public static readonly UVEC3 = 113;
	public static readonly UVEC4 = 114;
	public static readonly MAT2X2 = 115;
	public static readonly MAT2X3 = 116;
	public static readonly MAT2X4 = 117;
	public static readonly MAT3X2 = 118;
	public static readonly MAT3X3 = 119;
	public static readonly MAT3X4 = 120;
	public static readonly MAT4X2 = 121;
	public static readonly MAT4X3 = 122;
	public static readonly MAT4X4 = 123;
	public static readonly IMAGE1D = 124;
	public static readonly IMAGE2D = 125;
	public static readonly IMAGE3D = 126;
	public static readonly UIMAGE1D = 127;
	public static readonly UIMAGE2D = 128;
	public static readonly UIMAGE3D = 129;
	public static readonly IIMAGE1D = 130;
	public static readonly IIMAGE2D = 131;
	public static readonly IIMAGE3D = 132;
	public static readonly SAMPLER1D = 133;
	public static readonly SAMPLER2D = 134;
	public static readonly SAMPLER3D = 135;
	public static readonly SAMPLER2DRECT = 136;
	public static readonly SAMPLER1DSHADOW = 137;
	public static readonly SAMPLER2DSHADOW = 138;
	public static readonly SAMPLER2DRECTSHADOW = 139;
	public static readonly SAMPLER1DARRAY = 140;
	public static readonly SAMPLER2DARRAY = 141;
	public static readonly SAMPLER1DARRAYSHADOW = 142;
	public static readonly SAMPLER2DARRAYSHADOW = 143;
	public static readonly ISAMPLER1D = 144;
	public static readonly ISAMPLER2D = 145;
	public static readonly ISAMPLER2DRECT = 146;
	public static readonly ISAMPLER3D = 147;
	public static readonly ISAMPLER1DARRAY = 148;
	public static readonly ISAMPLER2DARRAY = 149;
	public static readonly USAMPLER1D = 150;
	public static readonly USAMPLER2D = 151;
	public static readonly USAMPLER2DRECT = 152;
	public static readonly USAMPLER3D = 153;
	public static readonly USAMPLER1DARRAY = 154;
	public static readonly USAMPLER2DARRAY = 155;
	public static readonly SAMPLER2DMS = 156;
	public static readonly ISAMPLER2DMS = 157;
	public static readonly USAMPLER2DMS = 158;
	public static readonly SAMPLER2DMSARRAY = 159;
	public static readonly ISAMPLER2DMSARRAY = 160;
	public static readonly USAMPLER2DMSARRAY = 161;
	public static readonly IMAGE2DRECT = 162;
	public static readonly IMAGE1DARRAY = 163;
	public static readonly IMAGE2DARRAY = 164;
	public static readonly IMAGE2DMS = 165;
	public static readonly IMAGE2DMSARRAY = 166;
	public static readonly IIMAGE2DRECT = 167;
	public static readonly IIMAGE1DARRAY = 168;
	public static readonly IIMAGE2DARRAY = 169;
	public static readonly IIMAGE2DMS = 170;
	public static readonly IIMAGE2DMSARRAY = 171;
	public static readonly UIMAGE2DRECT = 172;
	public static readonly UIMAGE1DARRAY = 173;
	public static readonly UIMAGE2DARRAY = 174;
	public static readonly UIMAGE2DMS = 175;
	public static readonly UIMAGE2DMSARRAY = 176;
	public static readonly LPAREN = 177;
	public static readonly RPAREN = 178;
	public static readonly LBRACE = 179;
	public static readonly RBRACE = 180;
	public static readonly SEMICOLON = 181;
	public static readonly LBRACKET = 182;
	public static readonly RBRACKET = 183;
	public static readonly COMMA = 184;
	public static readonly DOT = 185;
	public static readonly PLUS_OP = 186;
	public static readonly MINUS_OP = 187;
	public static readonly NOT_OP = 188;
	public static readonly BNEG_OP = 189;
	public static readonly TIMES_OP = 190;
	public static readonly DIV_OP = 191;
	public static readonly MOD_OP = 192;
	public static readonly LT_OP = 193;
	public static readonly GT_OP = 194;
	public static readonly BAND_OP = 195;
	public static readonly BOR_OP = 196;
	public static readonly BXOR_OP = 197;
	public static readonly QUERY_OP = 198;
	public static readonly ASSIGN_OP = 199;
	public static readonly IDENTIFIER = 200;
	public static readonly COMMENT = 201;
	public static readonly WS = 202;
	public static readonly EOL = 203;
	public static readonly RULE_pragma_statement = 0;
	public static readonly RULE_extension_statement_list = 1;
	public static readonly RULE_extension_statement = 2;
	public static readonly RULE_external_declaration_list = 3;
	public static readonly RULE_variable_identifier = 4;
	public static readonly RULE_primary_expression = 5;
	public static readonly RULE_postfix_expression = 6;
	public static readonly RULE_integer_expression = 7;
	public static readonly RULE_function_call_generic = 8;
	public static readonly RULE_function_call_header_no_parameters = 9;
	public static readonly RULE_function_call_header_with_parameters = 10;
	public static readonly RULE_function_call_header = 11;
	public static readonly RULE_function_identifier = 12;
	public static readonly RULE_method_call_generic = 13;
	public static readonly RULE_method_call_header_no_parameters = 14;
	public static readonly RULE_method_call_header_with_parameters = 15;
	public static readonly RULE_method_call_header = 16;
	public static readonly RULE_unary_expression = 17;
	public static readonly RULE_unary_operator = 18;
	public static readonly RULE_multiplicative_expression = 19;
	public static readonly RULE_additive_expression = 20;
	public static readonly RULE_shift_expression = 21;
	public static readonly RULE_relational_expression = 22;
	public static readonly RULE_equality_expression = 23;
	public static readonly RULE_and_expression = 24;
	public static readonly RULE_exclusive_or_expression = 25;
	public static readonly RULE_inclusive_or_expression = 26;
	public static readonly RULE_logical_and_expression = 27;
	public static readonly RULE_logical_xor_expression = 28;
	public static readonly RULE_logical_or_expression = 29;
	public static readonly RULE_conditional_expression = 30;
	public static readonly RULE_assignment_expression = 31;
	public static readonly RULE_assignment_operator = 32;
	public static readonly RULE_expression = 33;
	public static readonly RULE_constant_expression = 34;
	public static readonly RULE_declaration = 35;
	public static readonly RULE_function_prototype = 36;
	public static readonly RULE_function_declarator = 37;
	public static readonly RULE_function_header_with_parameters = 38;
	public static readonly RULE_function_header = 39;
	public static readonly RULE_parameter_declarator = 40;
	public static readonly RULE_parameter_declaration = 41;
	public static readonly RULE_parameter_qualifier = 42;
	public static readonly RULE_parameter_direction_qualifier = 43;
	public static readonly RULE_parameter_type_specifier = 44;
	public static readonly RULE_init_declarator_list = 45;
	public static readonly RULE_single_declaration = 46;
	public static readonly RULE_fully_specified_type = 47;
	public static readonly RULE_layout_qualifier = 48;
	public static readonly RULE_layout_qualifier_id_list = 49;
	public static readonly RULE_integer_constant = 50;
	public static readonly RULE_layout_qualifier_id = 51;
	public static readonly RULE_interface_block_layout_qualifier = 52;
	public static readonly RULE_interpolation_qualifier = 53;
	public static readonly RULE_type_qualifier = 54;
	public static readonly RULE_auxiliary_storage_qualifier = 55;
	public static readonly RULE_storage_qualifier = 56;
	public static readonly RULE_array_specifier = 57;
	public static readonly RULE_type_specifier = 58;
	public static readonly RULE_type_specifier_nonarray = 59;
	public static readonly RULE_builtin_type_specifier_nonarray = 60;
	public static readonly RULE_precision_qualifier = 61;
	public static readonly RULE_struct_specifier = 62;
	public static readonly RULE_member_list = 63;
	public static readonly RULE_member_declaration = 64;
	public static readonly RULE_struct_declarator_list = 65;
	public static readonly RULE_struct_declarator = 66;
	public static readonly RULE_initializer = 67;
	public static readonly RULE_initializer_list = 68;
	public static readonly RULE_declaration_statement = 69;
	public static readonly RULE_statement = 70;
	public static readonly RULE_simple_statement = 71;
	public static readonly RULE_compound_statement = 72;
	public static readonly RULE_statement_no_new_scope = 73;
	public static readonly RULE_compound_statement_no_new_scope = 74;
	public static readonly RULE_statement_list = 75;
	public static readonly RULE_expression_statement = 76;
	public static readonly RULE_selection_statement = 77;
	public static readonly RULE_selection_rest_statement = 78;
	public static readonly RULE_condition = 79;
	public static readonly RULE_switch_statement = 80;
	public static readonly RULE_switch_body = 81;
	public static readonly RULE_case_label = 82;
	public static readonly RULE_case_label_list = 83;
	public static readonly RULE_case_statement = 84;
	public static readonly RULE_case_statement_list = 85;
	public static readonly RULE_iteration_statement = 86;
	public static readonly RULE_for_init_statement = 87;
	public static readonly RULE_conditionopt = 88;
	public static readonly RULE_for_rest_statement = 89;
	public static readonly RULE_jump_statement = 90;
	public static readonly RULE_external_declaration = 91;
	public static readonly RULE_function_definition = 92;
	public static readonly RULE_interface_block = 93;
	public static readonly RULE_basic_interface_block = 94;
	public static readonly RULE_interface_qualifier = 95;
	public static readonly RULE_instance_name_opt = 96;
	public static readonly RULE_layout_defaults = 97;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"pragma_statement", "extension_statement_list", "extension_statement", 
		"external_declaration_list", "variable_identifier", "primary_expression", 
		"postfix_expression", "integer_expression", "function_call_generic", "function_call_header_no_parameters", 
		"function_call_header_with_parameters", "function_call_header", "function_identifier", 
		"method_call_generic", "method_call_header_no_parameters", "method_call_header_with_parameters", 
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
		"instance_name_opt", "layout_defaults",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"':'", "'uniform'", "'buffer'", "'in'", "'out'", "'inout'", "'highp'", 
		"'mediump'", "'lowp'", "'precision'", undefined, undefined, "'const'", 
		"'precise'", "'invariant'", "'smooth'", "'flat'", "'noperspective'", "'centroid'", 
		"'sample'", "'attribute'", "'coherent'", "'volatile'", "'restrict'", "'varying'", 
		"'readonly'", "'writeonly'", "'shared'", "'layout'", undefined, "'row_major'", 
		"'packed'", undefined, undefined, "'++'", "'--'", "'void'", "'C_TODO'", 
		"'<<'", "'>>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'^^'", "'||'", 
		"'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", 
		"'|='", "'float'", "'int'", "'uint'", "'bool'", "'samplerCube'", "'samplerExternalOES'", 
		"'samplerCubeShadow'", "'samplerBuffer'", "'samplerCubeArray'", "'samplerCubeArrayShadow'", 
		"'isamplerCube'", "'isamplerBuffer'", "'isamplerCubeArray'", "'usamplerCube'", 
		"'usamplerBuffer'", "'usamplerCubeArray'", "'imageCube'", "'imageBuffer'", 
		"'imageCubeArray'", "'iimageCube'", "'iimageBuffer'", "'iimageCubeArray'", 
		"'uimageCube'", "'uimageBuffer'", "'uimageCubeArray'", "'atomic_uint'", 
		"'struct'", "'if'", "'else'", "'switch'", "'case'", "'default'", "'while'", 
		"'do'", "'for'", "'continue'", "'break'", "'return'", "'discard'", "'vec2'", 
		"'vec3'", "'vec4'", "'bvec2'", "'bvec3'", "'bvec4'", "'ivec2'", "'ivec3'", 
		"'ivec4'", "'uvec2'", "'uvec3'", "'uvec4'", undefined, "'mat2x3'", "'mat2x4'", 
		"'mat3x2'", undefined, "'mat3x4'", "'mat4x2'", "'mat4x3'", undefined, 
		"'image1D'", "'image2D'", "'image3D'", "'uimage1D'", "'uimage2D'", "'uimage3D'", 
		"'iimage1D'", "'iimage2D'", "'iimage3D'", "'sampler1D'", "'sampler2D'", 
		"'sampler3D'", "'sampler2DRect'", "'sampler1DShadow'", "'sampler2DShadow'", 
		"'sampler2DRectShadow'", "'sampler1DArray'", "'sampler2DArray'", "'sampler1DArrayShadow'", 
		"'sampler2DArrayShadow'", "'isampler1D'", "'isampler2D'", "'isampler2DRect'", 
		"'isampler3D'", "'isampler1DArray'", "'isampler2DArray'", "'usampler1D'", 
		"'usampler2D'", "'usampler2DRect'", "'usampler3D'", "'usampler1DArray'", 
		"'usampler2DArray'", "'sampler2DMS'", "'isampler2DMS'", "'usampler2DMS'", 
		"'sampler2DMSArray'", "'isampler2DMSArray'", "'usampler2DMSArray'", "'image2DRect'", 
		"'image1DArray'", "'image2DArray'", "'image2DMS'", "'image2DMSArray'", 
		"'iimage2DRect'", "'iimage1DArray'", "'iimage2DArray'", "'iimage2DMS'", 
		"'iimage2DMSArray'", "'uimage2DRect'", "'uimage1DArray'", "'uimage2DArray'", 
		"'uimage2DMS'", "'uimage2DMSArray'", "'('", "')'", "'{'", "'}'", "';'", 
		"'['", "']'", "','", "'.'", "'+'", "'-'", "'!'", "'~'", "'*'", "'/'", 
		"'%'", "'<'", "'>'", "'&'", "'|'", "'^'", "'?'", "'='", undefined, undefined, 
		undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PRAGMA_DEBUG_ON", "PRAGMA_DEBUG_OFF", "PRAGMA_OPTIMIZE_ON", 
		"PRAGMA_OPTIMIZE_OFF", "PRAGMA_INVARIANT_ALL", "EXTENSION", "COLON", "UNIFORM", 
		"BUFFER", "IN_TOK", "OUT_TOK", "INOUT_TOK", "HIGHP", "MEDIUMP", "LOWP", 
		"PRECISION", "VERSION", "INTCONSTANT", "CONST_TOK", "PRECISE", "INVARIANT", 
		"SMOOTH", "FLAT", "NOPERSPECTIVE", "CENTROID", "SAMPLE", "ATTRIBUTE", 
		"COHERENT", "VOLATILE", "RESTRICT", "VARYING", "READONLY", "WRITEONLY", 
		"SHARED", "LAYOUT_TOK", "UINTCONSTANT", "ROW_MAJOR", "PACKED_TOK", "FLOATCONSTANT", 
		"BOOLCONSTANT", "INC_OP", "DEC_OP", "VOID_TOK", "FIELD_SELECTION", "LEFT_OP", 
		"RIGHT_OP", "LE_OP", "GE_OP", "EQ_OP", "NE_OP", "AND_OP", "XOR_OP", "OR_OP", 
		"MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", 
		"LEFT_ASSIGN", "RIGHT_ASSIGN", "AND_ASSIGN", "XOR_ASSIGN", "OR_ASSIGN", 
		"FLOAT_TOK", "INT_TOK", "UINT_TOK", "BOOL_TOK", "SAMPLERCUBE", "SAMPLEREXTERNALOES", 
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
		"IDENTIFIER", "COMMENT", "WS", "EOL",
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

	public extension_statement_list(): Extension_statement_listContext;
	public extension_statement_list(_p: number): Extension_statement_listContext;
	// @RuleVersion(0)
	public extension_statement_list(_p?: number): Extension_statement_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Extension_statement_listContext = new Extension_statement_listContext(this._ctx, _parentState);
		let _prevctx: Extension_statement_listContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, GLSLParser.RULE_extension_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 213;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Extension_statement_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_extension_statement_list);
					this.state = 209;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 210;
					this.extension_statement();
					}
					}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	public extension_statement(): Extension_statementContext {
		let _localctx: Extension_statementContext = new Extension_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GLSLParser.RULE_extension_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(GLSLParser.EXTENSION);
			this.state = 217;
			_localctx._extension_name = this.match(GLSLParser.IDENTIFIER);
			this.state = 218;
			this.match(GLSLParser.COLON);
			this.state = 219;
			_localctx._extension_status = this.match(GLSLParser.IDENTIFIER);
			this.state = 220;
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

	public external_declaration_list(): External_declaration_listContext;
	public external_declaration_list(_p: number): External_declaration_listContext;
	// @RuleVersion(0)
	public external_declaration_list(_p?: number): External_declaration_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: External_declaration_listContext = new External_declaration_listContext(this._ctx, _parentState);
		let _prevctx: External_declaration_listContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, GLSLParser.RULE_external_declaration_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 223;
			_localctx._single = this.external_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 231;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 229;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new External_declaration_listContext(_parentctx, _parentState);
						_localctx._prefix = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_external_declaration_list);
						this.state = 225;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 226;
						_localctx._lastDecl = this.external_declaration();
						}
						break;

					case 2:
						{
						_localctx = new External_declaration_listContext(_parentctx, _parentState);
						_localctx._prefix = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_external_declaration_list);
						this.state = 227;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 228;
						_localctx._lastExtension = this.extension_statement();
						}
						break;
					}
					}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	public variable_identifier(): Variable_identifierContext {
		let _localctx: Variable_identifierContext = new Variable_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GLSLParser.RULE_variable_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
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
		this.enterRule(_localctx, 10, GLSLParser.RULE_primary_expression);
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 236;
				this.variable_identifier();

				      // NEW VARIABLE DECLARATION
				   
				}
				break;
			case GLSLParser.INTCONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				this.match(GLSLParser.INTCONSTANT);
				}
				break;
			case GLSLParser.UINTCONSTANT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 240;
				this.match(GLSLParser.UINTCONSTANT);
				}
				break;
			case GLSLParser.FLOATCONSTANT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 241;
				this.match(GLSLParser.FLOATCONSTANT);
				}
				break;
			case GLSLParser.BOOLCONSTANT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 242;
				this.match(GLSLParser.BOOLCONSTANT);
				}
				break;
			case GLSLParser.LPAREN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 243;
				this.match(GLSLParser.LPAREN);
				this.state = 244;
				this.expression();
				this.state = 245;
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
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, GLSLParser.RULE_postfix_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 250;
				this.primary_expression();
				}
				break;

			case 2:
				{
				this.state = 251;
				this.function_call_generic();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 271;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 269;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 254;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 255;
						this.match(GLSLParser.LBRACKET);
						this.state = 256;
						this.integer_expression();
						this.state = 257;
						this.match(GLSLParser.RBRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 259;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 260;
						this.match(GLSLParser.DOT);
						this.state = 261;
						this.method_call_generic();
						}
						break;

					case 3:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 262;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 263;
						this.match(GLSLParser.DOT);
						this.state = 264;
						this.match(GLSLParser.IDENTIFIER);
						}
						break;

					case 4:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 265;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 266;
						this.match(GLSLParser.INC_OP);
						}
						break;

					case 5:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_postfix_expression);
						this.state = 267;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 268;
						this.match(GLSLParser.DEC_OP);
						}
						break;
					}
					}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
		this.enterRule(_localctx, 14, GLSLParser.RULE_integer_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
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
		this.enterRule(_localctx, 16, GLSLParser.RULE_function_call_generic);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.function_call_header_with_parameters(0);
				this.state = 277;
				this.match(GLSLParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.function_call_header_no_parameters();
				this.state = 280;
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
		this.enterRule(_localctx, 18, GLSLParser.RULE_function_call_header_no_parameters);
		try {
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 284;
				this.function_call_header();
				this.state = 285;
				this.match(GLSLParser.VOID_TOK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, GLSLParser.RULE_function_call_header_with_parameters, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 291;
			this.function_call_header();
			this.state = 292;
			this.assignment_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
					this.state = 294;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 295;
					this.match(GLSLParser.COMMA);
					this.state = 296;
					this.assignment_expression();
					}
					}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
		this.enterRule(_localctx, 22, GLSLParser.RULE_function_call_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.function_identifier();
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GLSLParser.LBRACKET) {
				{
				this.state = 303;
				this.array_specifier(0);
				}
			}

			this.state = 306;
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
		this.enterRule(_localctx, 24, GLSLParser.RULE_function_identifier);
		try {
			this.state = 311;
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
				this.state = 308;
				this.builtin_type_specifier_nonarray();
				}
				break;
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 309;
				this.variable_identifier();
				}
				break;
			case GLSLParser.FIELD_SELECTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 310;
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
		this.enterRule(_localctx, 26, GLSLParser.RULE_method_call_generic);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.method_call_header_with_parameters(0);
				this.state = 314;
				this.match(GLSLParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 316;
				this.method_call_header_no_parameters();
				this.state = 317;
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
		this.enterRule(_localctx, 28, GLSLParser.RULE_method_call_header_no_parameters);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.method_call_header();
				this.state = 322;
				this.match(GLSLParser.VOID_TOK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 324;
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
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, GLSLParser.RULE_method_call_header_with_parameters, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 328;
			this.method_call_header();
			this.state = 329;
			this.assignment_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 336;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
					this.state = 331;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 332;
					this.match(GLSLParser.COMMA);
					this.state = 333;
					this.assignment_expression();
					}
					}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
		this.enterRule(_localctx, 32, GLSLParser.RULE_method_call_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.variable_identifier();
			this.state = 340;
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
		this.enterRule(_localctx, 34, GLSLParser.RULE_unary_expression);
		try {
			this.state = 350;
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
				this.state = 342;
				this.postfix_expression(0);
				}
				break;
			case GLSLParser.INC_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.match(GLSLParser.INC_OP);
				this.state = 344;
				this.unary_expression();
				}
				break;
			case GLSLParser.DEC_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 345;
				this.match(GLSLParser.DEC_OP);
				this.state = 346;
				this.unary_expression();
				}
				break;
			case GLSLParser.PLUS_OP:
			case GLSLParser.MINUS_OP:
			case GLSLParser.NOT_OP:
			case GLSLParser.BNEG_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 347;
				this.unary_operator();
				this.state = 348;
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
		this.enterRule(_localctx, 36, GLSLParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if (!(((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (GLSLParser.PLUS_OP - 186)) | (1 << (GLSLParser.MINUS_OP - 186)) | (1 << (GLSLParser.NOT_OP - 186)) | (1 << (GLSLParser.BNEG_OP - 186)))) !== 0))) {
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
		this.enterRule(_localctx, 38, GLSLParser.RULE_multiplicative_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			_localctx._unary_expression = this.unary_expression();
			_localctx._operands.push(_localctx._unary_expression);
			this.state = 363;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 358;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.TIMES_OP:
						{
						this.state = 355;
						_localctx._TIMES_OP = this.match(GLSLParser.TIMES_OP);
						_localctx._operators.push(_localctx._TIMES_OP);
						}
						break;
					case GLSLParser.DIV_OP:
						{
						this.state = 356;
						_localctx._DIV_OP = this.match(GLSLParser.DIV_OP);
						_localctx._operators.push(_localctx._DIV_OP);
						}
						break;
					case GLSLParser.MOD_OP:
						{
						this.state = 357;
						_localctx._MOD_OP = this.match(GLSLParser.MOD_OP);
						_localctx._operators.push(_localctx._MOD_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 360;
					_localctx._unary_expression = this.unary_expression();
					_localctx._operands.push(_localctx._unary_expression);
					}
					}
				}
				this.state = 365;
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
	public additive_expression(): Additive_expressionContext {
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, GLSLParser.RULE_additive_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			_localctx._multiplicative_expression = this.multiplicative_expression();
			_localctx._operands.push(_localctx._multiplicative_expression);
			this.state = 374;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 369;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.PLUS_OP:
						{
						this.state = 367;
						_localctx._PLUS_OP = this.match(GLSLParser.PLUS_OP);
						_localctx._operators.push(_localctx._PLUS_OP);
						}
						break;
					case GLSLParser.MINUS_OP:
						{
						this.state = 368;
						_localctx._MINUS_OP = this.match(GLSLParser.MINUS_OP);
						_localctx._operators.push(_localctx._MINUS_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 371;
					_localctx._multiplicative_expression = this.multiplicative_expression();
					_localctx._operands.push(_localctx._multiplicative_expression);
					}
					}
				}
				this.state = 376;
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
	public shift_expression(): Shift_expressionContext {
		let _localctx: Shift_expressionContext = new Shift_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, GLSLParser.RULE_shift_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			_localctx._additive_expression = this.additive_expression();
			_localctx._operands.push(_localctx._additive_expression);
			this.state = 385;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 380;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.LEFT_OP:
						{
						this.state = 378;
						_localctx._LEFT_OP = this.match(GLSLParser.LEFT_OP);
						_localctx._operators.push(_localctx._LEFT_OP);
						}
						break;
					case GLSLParser.RIGHT_OP:
						{
						this.state = 379;
						_localctx._RIGHT_OP = this.match(GLSLParser.RIGHT_OP);
						_localctx._operators.push(_localctx._RIGHT_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 382;
					_localctx._additive_expression = this.additive_expression();
					_localctx._operands.push(_localctx._additive_expression);
					}
					}
				}
				this.state = 387;
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
	public relational_expression(): Relational_expressionContext {
		let _localctx: Relational_expressionContext = new Relational_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, GLSLParser.RULE_relational_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			_localctx._shift_expression = this.shift_expression();
			_localctx._operands.push(_localctx._shift_expression);
			this.state = 398;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 393;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.LT_OP:
						{
						this.state = 389;
						_localctx._LT_OP = this.match(GLSLParser.LT_OP);
						_localctx._operators.push(_localctx._LT_OP);
						}
						break;
					case GLSLParser.GT_OP:
						{
						this.state = 390;
						_localctx._GT_OP = this.match(GLSLParser.GT_OP);
						_localctx._operators.push(_localctx._GT_OP);
						}
						break;
					case GLSLParser.LE_OP:
						{
						this.state = 391;
						_localctx._LE_OP = this.match(GLSLParser.LE_OP);
						_localctx._operators.push(_localctx._LE_OP);
						}
						break;
					case GLSLParser.GE_OP:
						{
						this.state = 392;
						_localctx._GE_OP = this.match(GLSLParser.GE_OP);
						_localctx._operators.push(_localctx._GE_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 395;
					_localctx._shift_expression = this.shift_expression();
					_localctx._operands.push(_localctx._shift_expression);
					}
					}
				}
				this.state = 400;
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
	public equality_expression(): Equality_expressionContext {
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, GLSLParser.RULE_equality_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			_localctx._relational_expression = this.relational_expression();
			_localctx._operands.push(_localctx._relational_expression);
			this.state = 409;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 404;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GLSLParser.EQ_OP:
						{
						this.state = 402;
						_localctx._EQ_OP = this.match(GLSLParser.EQ_OP);
						_localctx._operators.push(_localctx._EQ_OP);
						}
						break;
					case GLSLParser.NE_OP:
						{
						this.state = 403;
						_localctx._NE_OP = this.match(GLSLParser.NE_OP);
						_localctx._operators.push(_localctx._NE_OP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 406;
					_localctx._relational_expression = this.relational_expression();
					_localctx._operands.push(_localctx._relational_expression);
					}
					}
				}
				this.state = 411;
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
	public and_expression(): And_expressionContext {
		let _localctx: And_expressionContext = new And_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, GLSLParser.RULE_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			_localctx._equality_expression = this.equality_expression();
			_localctx._operands.push(_localctx._equality_expression);
			this.state = 417;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 413;
					_localctx._BAND_OP = this.match(GLSLParser.BAND_OP);
					_localctx._operators.push(_localctx._BAND_OP);
					this.state = 414;
					_localctx._equality_expression = this.equality_expression();
					_localctx._operands.push(_localctx._equality_expression);
					}
					}
				}
				this.state = 419;
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
	public exclusive_or_expression(): Exclusive_or_expressionContext {
		let _localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, GLSLParser.RULE_exclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			_localctx._and_expression = this.and_expression();
			_localctx._operands.push(_localctx._and_expression);
			this.state = 425;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 421;
					_localctx._BXOR_OP = this.match(GLSLParser.BXOR_OP);
					_localctx._operators.push(_localctx._BXOR_OP);
					this.state = 422;
					_localctx._and_expression = this.and_expression();
					_localctx._operands.push(_localctx._and_expression);
					}
					}
				}
				this.state = 427;
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
	public inclusive_or_expression(): Inclusive_or_expressionContext {
		let _localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, GLSLParser.RULE_inclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			_localctx._exclusive_or_expression = this.exclusive_or_expression();
			_localctx._operands.push(_localctx._exclusive_or_expression);
			this.state = 433;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 429;
					_localctx._BOR_OP = this.match(GLSLParser.BOR_OP);
					_localctx._operators.push(_localctx._BOR_OP);
					this.state = 430;
					_localctx._exclusive_or_expression = this.exclusive_or_expression();
					_localctx._operands.push(_localctx._exclusive_or_expression);
					}
					}
				}
				this.state = 435;
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
	public logical_and_expression(): Logical_and_expressionContext {
		let _localctx: Logical_and_expressionContext = new Logical_and_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, GLSLParser.RULE_logical_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			_localctx._inclusive_or_expression = this.inclusive_or_expression();
			_localctx._operands.push(_localctx._inclusive_or_expression);
			this.state = 441;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 437;
					_localctx._AND_OP = this.match(GLSLParser.AND_OP);
					_localctx._operators.push(_localctx._AND_OP);
					this.state = 438;
					_localctx._inclusive_or_expression = this.inclusive_or_expression();
					_localctx._operands.push(_localctx._inclusive_or_expression);
					}
					}
				}
				this.state = 443;
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
	public logical_xor_expression(): Logical_xor_expressionContext {
		let _localctx: Logical_xor_expressionContext = new Logical_xor_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, GLSLParser.RULE_logical_xor_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			_localctx._logical_and_expression = this.logical_and_expression();
			_localctx._operands.push(_localctx._logical_and_expression);
			this.state = 449;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 445;
					_localctx._XOR_OP = this.match(GLSLParser.XOR_OP);
					_localctx._operators.push(_localctx._XOR_OP);
					this.state = 446;
					_localctx._logical_and_expression = this.logical_and_expression();
					_localctx._operands.push(_localctx._logical_and_expression);
					}
					}
				}
				this.state = 451;
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
	public logical_or_expression(): Logical_or_expressionContext {
		let _localctx: Logical_or_expressionContext = new Logical_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, GLSLParser.RULE_logical_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			_localctx._logical_xor_expression = this.logical_xor_expression();
			_localctx._operands.push(_localctx._logical_xor_expression);
			this.state = 457;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 453;
					_localctx._OR_OP = this.match(GLSLParser.OR_OP);
					_localctx._operators.push(_localctx._OR_OP);
					this.state = 454;
					_localctx._logical_xor_expression = this.logical_xor_expression();
					_localctx._operands.push(_localctx._logical_xor_expression);
					}
					}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
		this.enterRule(_localctx, 60, GLSLParser.RULE_conditional_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.logical_or_expression();
			this.state = 468;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 461;
					this.match(GLSLParser.QUERY_OP);
					this.state = 462;
					this.expression();
					this.state = 463;
					this.match(GLSLParser.COLON);
					this.state = 464;
					this.assignment_expression();
					}
					}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
		this.enterRule(_localctx, 62, GLSLParser.RULE_assignment_expression);
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.conditional_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
				this.unary_expression();
				this.state = 473;
				this.assignment_operator();
				this.state = 474;
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
		this.enterRule(_localctx, 64, GLSLParser.RULE_assignment_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			_la = this._input.LA(1);
			if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (GLSLParser.MUL_ASSIGN - 54)) | (1 << (GLSLParser.DIV_ASSIGN - 54)) | (1 << (GLSLParser.MOD_ASSIGN - 54)) | (1 << (GLSLParser.ADD_ASSIGN - 54)) | (1 << (GLSLParser.SUB_ASSIGN - 54)) | (1 << (GLSLParser.LEFT_ASSIGN - 54)) | (1 << (GLSLParser.RIGHT_ASSIGN - 54)) | (1 << (GLSLParser.AND_ASSIGN - 54)) | (1 << (GLSLParser.XOR_ASSIGN - 54)) | (1 << (GLSLParser.OR_ASSIGN - 54)))) !== 0) || _la === GLSLParser.ASSIGN_OP)) {
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
		this.enterRule(_localctx, 66, GLSLParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			_localctx._assignment_expression = this.assignment_expression();
			_localctx._operands.push(_localctx._assignment_expression);
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GLSLParser.COMMA) {
				{
				{
				this.state = 481;
				_localctx._COMMA = this.match(GLSLParser.COMMA);
				_localctx._operators.push(_localctx._COMMA);
				this.state = 482;
				_localctx._assignment_expression = this.assignment_expression();
				_localctx._operands.push(_localctx._assignment_expression);
				}
				}
				this.state = 487;
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
		this.enterRule(_localctx, 68, GLSLParser.RULE_constant_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
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
		this.enterRule(_localctx, 70, GLSLParser.RULE_declaration);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 490;
				this.function_prototype();
				this.state = 491;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 493;
				this.init_declarator_list(0);
				this.state = 494;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 496;
				this.match(GLSLParser.PRECISION);
				this.state = 497;
				this.precision_qualifier();
				this.state = 498;
				this.type_specifier();
				this.state = 499;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 501;
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
		this.enterRule(_localctx, 72, GLSLParser.RULE_function_prototype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.function_declarator();
			this.state = 505;
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
		this.enterRule(_localctx, 74, GLSLParser.RULE_function_declarator);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.function_header();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
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
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, GLSLParser.RULE_function_header_with_parameters, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 512;
			this.function_header();
			this.state = 513;
			this.parameter_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 520;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
					this.state = 515;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 516;
					this.match(GLSLParser.COMMA);
					this.state = 517;
					this.parameter_declaration();
					}
					}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
		this.enterRule(_localctx, 78, GLSLParser.RULE_function_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.fully_specified_type();
			this.state = 524;
			this.variable_identifier();
			this.state = 525;
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
		this.enterRule(_localctx, 80, GLSLParser.RULE_parameter_declarator);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 527;
				this.type_specifier();
				this.state = 528;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 530;
				this.type_specifier();
				this.state = 531;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 532;
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
		this.enterRule(_localctx, 82, GLSLParser.RULE_parameter_declaration);
		try {
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 536;
				this.parameter_qualifier();
				this.state = 537;
				this.parameter_declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 539;
				this.parameter_qualifier();
				this.state = 540;
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
		this.enterRule(_localctx, 84, GLSLParser.RULE_parameter_qualifier);
		try {
			this.state = 555;
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
				this.state = 545;
				this.match(GLSLParser.CONST_TOK);
				this.state = 546;
				this.parameter_qualifier();
				}
				break;
			case GLSLParser.PRECISE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 547;
				this.match(GLSLParser.PRECISE);
				this.state = 548;
				this.parameter_qualifier();
				}
				break;
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
			case GLSLParser.INOUT_TOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 549;
				this.parameter_direction_qualifier();
				this.state = 550;
				this.parameter_qualifier();
				}
				break;
			case GLSLParser.HIGHP:
			case GLSLParser.MEDIUMP:
			case GLSLParser.LOWP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 552;
				this.precision_qualifier();
				this.state = 553;
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
		this.enterRule(_localctx, 86, GLSLParser.RULE_parameter_direction_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
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
		this.enterRule(_localctx, 88, GLSLParser.RULE_parameter_type_specifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
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
		let _startState: number = 90;
		this.enterRecursionRule(_localctx, 90, GLSLParser.RULE_init_declarator_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 562;
			this.single_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 585;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 583;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 564;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 565;
						this.match(GLSLParser.COMMA);
						this.state = 566;
						this.match(GLSLParser.IDENTIFIER);
						}
						break;

					case 2:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 567;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 568;
						this.match(GLSLParser.COMMA);
						this.state = 569;
						this.match(GLSLParser.IDENTIFIER);
						this.state = 570;
						this.array_specifier(0);
						}
						break;

					case 3:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 571;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 572;
						this.match(GLSLParser.COMMA);
						this.state = 573;
						this.match(GLSLParser.IDENTIFIER);
						this.state = 574;
						this.array_specifier(0);
						this.state = 575;
						this.match(GLSLParser.ASSIGN_OP);
						this.state = 576;
						this.initializer();
						}
						break;

					case 4:
						{
						_localctx = new Init_declarator_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_init_declarator_list);
						this.state = 578;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 579;
						this.match(GLSLParser.COMMA);
						this.state = 580;
						this.match(GLSLParser.IDENTIFIER);
						this.state = 581;
						this.match(GLSLParser.ASSIGN_OP);
						this.state = 582;
						this.initializer();
						}
						break;
					}
					}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
		this.enterRule(_localctx, 92, GLSLParser.RULE_single_declaration);
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 588;
				this.fully_specified_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 589;
				this.fully_specified_type();
				this.state = 590;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 592;
				this.fully_specified_type();
				this.state = 593;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 594;
				this.array_specifier(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 596;
				this.fully_specified_type();
				this.state = 597;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 598;
				this.array_specifier(0);
				this.state = 599;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 600;
				this.initializer();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 602;
				this.fully_specified_type();
				this.state = 603;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 604;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 605;
				this.initializer();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 607;
				this.match(GLSLParser.INVARIANT);
				this.state = 608;
				this.variable_identifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 609;
				this.match(GLSLParser.PRECISE);
				this.state = 610;
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
		this.enterRule(_localctx, 94, GLSLParser.RULE_fully_specified_type);
		try {
			this.state = 617;
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
				this.state = 613;
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
				this.state = 614;
				this.type_qualifier();
				this.state = 615;
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
		this.enterRule(_localctx, 96, GLSLParser.RULE_layout_qualifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.match(GLSLParser.LAYOUT_TOK);
			this.state = 620;
			this.match(GLSLParser.LPAREN);
			this.state = 621;
			this.layout_qualifier_id_list(0);
			this.state = 622;
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
		let _startState: number = 98;
		this.enterRecursionRule(_localctx, 98, GLSLParser.RULE_layout_qualifier_id_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 625;
			this.layout_qualifier_id();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 632;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
					this.state = 627;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 628;
					this.match(GLSLParser.COMMA);
					this.state = 629;
					this.layout_qualifier_id();
					}
					}
				}
				this.state = 634;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
		this.enterRule(_localctx, 100, GLSLParser.RULE_integer_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
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
		this.enterRule(_localctx, 102, GLSLParser.RULE_layout_qualifier_id);
		try {
			this.state = 642;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 637;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 638;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 639;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 640;
				this.integer_constant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 641;
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
		this.enterRule(_localctx, 104, GLSLParser.RULE_interface_block_layout_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
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
		this.enterRule(_localctx, 106, GLSLParser.RULE_interpolation_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GLSLParser.SMOOTH) | (1 << GLSLParser.FLAT) | (1 << GLSLParser.NOPERSPECTIVE))) !== 0))) {
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
		this.enterRule(_localctx, 108, GLSLParser.RULE_type_qualifier);
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 648;
				this.match(GLSLParser.INVARIANT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 649;
				this.match(GLSLParser.PRECISE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 650;
				this.auxiliary_storage_qualifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 651;
				this.storage_qualifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 652;
				this.interpolation_qualifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 653;
				this.layout_qualifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 654;
				this.precision_qualifier();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 655;
				this.match(GLSLParser.PRECISE);
				this.state = 656;
				this.type_qualifier();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 657;
				this.match(GLSLParser.INVARIANT);
				this.state = 658;
				this.type_qualifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 659;
				this.interpolation_qualifier();
				this.state = 660;
				this.type_qualifier();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 662;
				this.layout_qualifier();
				this.state = 663;
				this.type_qualifier();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 665;
				this.auxiliary_storage_qualifier();
				this.state = 666;
				this.type_qualifier();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 668;
				this.storage_qualifier();
				this.state = 669;
				this.type_qualifier();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 671;
				this.precision_qualifier();
				this.state = 672;
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
		this.enterRule(_localctx, 110, GLSLParser.RULE_auxiliary_storage_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
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
		this.enterRule(_localctx, 112, GLSLParser.RULE_storage_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			_la = this._input.LA(1);
			if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (GLSLParser.UNIFORM - 8)) | (1 << (GLSLParser.IN_TOK - 8)) | (1 << (GLSLParser.OUT_TOK - 8)) | (1 << (GLSLParser.CONST_TOK - 8)) | (1 << (GLSLParser.ATTRIBUTE - 8)) | (1 << (GLSLParser.COHERENT - 8)) | (1 << (GLSLParser.VOLATILE - 8)) | (1 << (GLSLParser.RESTRICT - 8)) | (1 << (GLSLParser.VARYING - 8)) | (1 << (GLSLParser.READONLY - 8)) | (1 << (GLSLParser.WRITEONLY - 8)) | (1 << (GLSLParser.SHARED - 8)))) !== 0))) {
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
		let _startState: number = 114;
		this.enterRecursionRule(_localctx, 114, GLSLParser.RULE_array_specifier, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 681;
				this.match(GLSLParser.LBRACKET);
				this.state = 682;
				this.match(GLSLParser.RBRACKET);
				}
				break;

			case 2:
				{
				this.state = 683;
				this.match(GLSLParser.LBRACKET);
				this.state = 684;
				this.constant_expression();
				this.state = 685;
				this.match(GLSLParser.RBRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 699;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 697;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
					case 1:
						{
						_localctx = new Array_specifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_array_specifier);
						this.state = 689;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 690;
						this.match(GLSLParser.LBRACKET);
						this.state = 691;
						this.match(GLSLParser.RBRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Array_specifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_array_specifier);
						this.state = 692;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 693;
						this.match(GLSLParser.LBRACKET);
						this.state = 694;
						this.constant_expression();
						this.state = 695;
						this.match(GLSLParser.RBRACKET);
						}
						break;
					}
					}
				}
				this.state = 701;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
		this.enterRule(_localctx, 116, GLSLParser.RULE_type_specifier);
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				this.type_specifier_nonarray();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 703;
				this.type_specifier_nonarray();
				this.state = 704;
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
		this.enterRule(_localctx, 118, GLSLParser.RULE_type_specifier_nonarray);
		try {
			this.state = 711;
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
				this.state = 708;
				this.builtin_type_specifier_nonarray();
				}
				break;
			case GLSLParser.STRUCT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 709;
				this.struct_specifier();
				}
				break;
			case GLSLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 710;
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
		this.enterRule(_localctx, 120, GLSLParser.RULE_builtin_type_specifier_nonarray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			_la = this._input.LA(1);
			if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (GLSLParser.VOID_TOK - 43)) | (1 << (GLSLParser.FLOAT_TOK - 43)) | (1 << (GLSLParser.INT_TOK - 43)) | (1 << (GLSLParser.UINT_TOK - 43)) | (1 << (GLSLParser.BOOL_TOK - 43)) | (1 << (GLSLParser.SAMPLERCUBE - 43)) | (1 << (GLSLParser.SAMPLEREXTERNALOES - 43)) | (1 << (GLSLParser.SAMPLERCUBESHADOW - 43)) | (1 << (GLSLParser.SAMPLERBUFFER - 43)) | (1 << (GLSLParser.SAMPLERCUBEARRAY - 43)) | (1 << (GLSLParser.SAMPLERCUBEARRAYSHADOW - 43)) | (1 << (GLSLParser.ISAMPLERCUBE - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (GLSLParser.ISAMPLERBUFFER - 75)) | (1 << (GLSLParser.ISAMPLERCUBEARRAY - 75)) | (1 << (GLSLParser.USAMPLERCUBE - 75)) | (1 << (GLSLParser.USAMPLERBUFFER - 75)) | (1 << (GLSLParser.USAMPLERCUBEARRAY - 75)) | (1 << (GLSLParser.IMAGECUBE - 75)) | (1 << (GLSLParser.IMAGEBUFFER - 75)) | (1 << (GLSLParser.IMAGECUBEARRAY - 75)) | (1 << (GLSLParser.IIMAGECUBE - 75)) | (1 << (GLSLParser.IIMAGEBUFFER - 75)) | (1 << (GLSLParser.IIMAGECUBEARRAY - 75)) | (1 << (GLSLParser.UIMAGECUBE - 75)) | (1 << (GLSLParser.UIMAGEBUFFER - 75)) | (1 << (GLSLParser.UIMAGECUBEARRAY - 75)) | (1 << (GLSLParser.ATOMIC_UINT - 75)) | (1 << (GLSLParser.VEC2 - 75)) | (1 << (GLSLParser.VEC3 - 75)) | (1 << (GLSLParser.VEC4 - 75)) | (1 << (GLSLParser.BVEC2 - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (GLSLParser.BVEC3 - 107)) | (1 << (GLSLParser.BVEC4 - 107)) | (1 << (GLSLParser.IVEC2 - 107)) | (1 << (GLSLParser.IVEC3 - 107)) | (1 << (GLSLParser.IVEC4 - 107)) | (1 << (GLSLParser.UVEC2 - 107)) | (1 << (GLSLParser.UVEC3 - 107)) | (1 << (GLSLParser.UVEC4 - 107)) | (1 << (GLSLParser.MAT2X2 - 107)) | (1 << (GLSLParser.MAT2X3 - 107)) | (1 << (GLSLParser.MAT2X4 - 107)) | (1 << (GLSLParser.MAT3X2 - 107)) | (1 << (GLSLParser.MAT3X3 - 107)) | (1 << (GLSLParser.MAT3X4 - 107)) | (1 << (GLSLParser.MAT4X2 - 107)) | (1 << (GLSLParser.MAT4X3 - 107)) | (1 << (GLSLParser.MAT4X4 - 107)) | (1 << (GLSLParser.IMAGE1D - 107)) | (1 << (GLSLParser.IMAGE2D - 107)) | (1 << (GLSLParser.IMAGE3D - 107)) | (1 << (GLSLParser.UIMAGE1D - 107)) | (1 << (GLSLParser.UIMAGE2D - 107)) | (1 << (GLSLParser.UIMAGE3D - 107)) | (1 << (GLSLParser.IIMAGE1D - 107)) | (1 << (GLSLParser.IIMAGE2D - 107)) | (1 << (GLSLParser.IIMAGE3D - 107)) | (1 << (GLSLParser.SAMPLER1D - 107)) | (1 << (GLSLParser.SAMPLER2D - 107)) | (1 << (GLSLParser.SAMPLER3D - 107)) | (1 << (GLSLParser.SAMPLER2DRECT - 107)) | (1 << (GLSLParser.SAMPLER1DSHADOW - 107)) | (1 << (GLSLParser.SAMPLER2DSHADOW - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (GLSLParser.SAMPLER2DRECTSHADOW - 139)) | (1 << (GLSLParser.SAMPLER1DARRAY - 139)) | (1 << (GLSLParser.SAMPLER2DARRAY - 139)) | (1 << (GLSLParser.SAMPLER1DARRAYSHADOW - 139)) | (1 << (GLSLParser.SAMPLER2DARRAYSHADOW - 139)) | (1 << (GLSLParser.ISAMPLER1D - 139)) | (1 << (GLSLParser.ISAMPLER2D - 139)) | (1 << (GLSLParser.ISAMPLER2DRECT - 139)) | (1 << (GLSLParser.ISAMPLER3D - 139)) | (1 << (GLSLParser.ISAMPLER1DARRAY - 139)) | (1 << (GLSLParser.ISAMPLER2DARRAY - 139)) | (1 << (GLSLParser.USAMPLER1D - 139)) | (1 << (GLSLParser.USAMPLER2D - 139)) | (1 << (GLSLParser.USAMPLER2DRECT - 139)) | (1 << (GLSLParser.USAMPLER3D - 139)) | (1 << (GLSLParser.USAMPLER1DARRAY - 139)) | (1 << (GLSLParser.USAMPLER2DARRAY - 139)) | (1 << (GLSLParser.SAMPLER2DMS - 139)) | (1 << (GLSLParser.ISAMPLER2DMS - 139)) | (1 << (GLSLParser.USAMPLER2DMS - 139)) | (1 << (GLSLParser.SAMPLER2DMSARRAY - 139)) | (1 << (GLSLParser.ISAMPLER2DMSARRAY - 139)) | (1 << (GLSLParser.USAMPLER2DMSARRAY - 139)) | (1 << (GLSLParser.IMAGE2DRECT - 139)) | (1 << (GLSLParser.IMAGE1DARRAY - 139)) | (1 << (GLSLParser.IMAGE2DARRAY - 139)) | (1 << (GLSLParser.IMAGE2DMS - 139)) | (1 << (GLSLParser.IMAGE2DMSARRAY - 139)) | (1 << (GLSLParser.IIMAGE2DRECT - 139)) | (1 << (GLSLParser.IIMAGE1DARRAY - 139)) | (1 << (GLSLParser.IIMAGE2DARRAY - 139)) | (1 << (GLSLParser.IIMAGE2DMS - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (GLSLParser.IIMAGE2DMSARRAY - 171)) | (1 << (GLSLParser.UIMAGE2DRECT - 171)) | (1 << (GLSLParser.UIMAGE1DARRAY - 171)) | (1 << (GLSLParser.UIMAGE2DARRAY - 171)) | (1 << (GLSLParser.UIMAGE2DMS - 171)) | (1 << (GLSLParser.UIMAGE2DMSARRAY - 171)))) !== 0))) {
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
		this.enterRule(_localctx, 122, GLSLParser.RULE_precision_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
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
		this.enterRule(_localctx, 124, GLSLParser.RULE_struct_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.match(GLSLParser.STRUCT);
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GLSLParser.IDENTIFIER) {
				{
				this.state = 718;
				this.match(GLSLParser.IDENTIFIER);
				}
			}

			this.state = 721;
			this.match(GLSLParser.LBRACE);
			this.state = 722;
			this.member_list(0);
			this.state = 723;
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
		let _startState: number = 126;
		this.enterRecursionRule(_localctx, 126, GLSLParser.RULE_member_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 726;
			this.member_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 732;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
					this.state = 728;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 729;
					this.member_declaration();
					}
					}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
		this.enterRule(_localctx, 128, GLSLParser.RULE_member_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.fully_specified_type();
			this.state = 736;
			this.struct_declarator_list(0);
			this.state = 737;
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
		let _startState: number = 130;
		this.enterRecursionRule(_localctx, 130, GLSLParser.RULE_struct_declarator_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 740;
			this.struct_declarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 747;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
					this.state = 742;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 743;
					this.match(GLSLParser.COMMA);
					this.state = 744;
					this.struct_declarator();
					}
					}
				}
				this.state = 749;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
		this.enterRule(_localctx, 132, GLSLParser.RULE_struct_declarator);
		try {
			this.state = 753;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 750;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 751;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 752;
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
		this.enterRule(_localctx, 134, GLSLParser.RULE_initializer);
		try {
			this.state = 765;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.assignment_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.match(GLSLParser.LBRACE);
				this.state = 757;
				this.initializer_list(0);
				this.state = 758;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 760;
				this.match(GLSLParser.LBRACE);
				this.state = 761;
				this.initializer_list(0);
				this.state = 762;
				this.match(GLSLParser.COMMA);
				this.state = 763;
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
		let _startState: number = 136;
		this.enterRecursionRule(_localctx, 136, GLSLParser.RULE_initializer_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 768;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 775;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
					this.state = 770;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 771;
					this.match(GLSLParser.COMMA);
					this.state = 772;
					this.initializer();
					}
					}
				}
				this.state = 777;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
		this.enterRule(_localctx, 138, GLSLParser.RULE_declaration_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
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
		this.enterRule(_localctx, 140, GLSLParser.RULE_statement);
		try {
			this.state = 782;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 780;
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
				this.state = 781;
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
		this.enterRule(_localctx, 142, GLSLParser.RULE_simple_statement);
		try {
			this.state = 790;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 784;
				this.expression_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 785;
				this.declaration_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 786;
				this.selection_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 787;
				this.switch_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 788;
				this.iteration_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 789;
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
		this.enterRule(_localctx, 144, GLSLParser.RULE_compound_statement);
		try {
			this.state = 798;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 792;
				this.match(GLSLParser.LBRACE);
				this.state = 793;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 794;
				this.match(GLSLParser.LBRACE);
				this.state = 795;
				this.statement_list(0);
				this.state = 796;
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
		this.enterRule(_localctx, 146, GLSLParser.RULE_statement_no_new_scope);
		try {
			this.state = 802;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 800;
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
				this.state = 801;
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
		this.enterRule(_localctx, 148, GLSLParser.RULE_compound_statement_no_new_scope);
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 804;
				this.match(GLSLParser.LBRACE);
				this.state = 805;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 806;
				this.match(GLSLParser.LBRACE);
				this.state = 807;
				this.statement_list(0);
				this.state = 808;
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
		let _startState: number = 150;
		this.enterRecursionRule(_localctx, 150, GLSLParser.RULE_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 813;
			this.statement();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 819;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
					this.state = 815;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 816;
					this.statement();
					}
					}
				}
				this.state = 821;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
		this.enterRule(_localctx, 152, GLSLParser.RULE_expression_statement);
		try {
			this.state = 826;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 822;
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
				this.state = 823;
				this.expression();
				this.state = 824;
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
		this.enterRule(_localctx, 154, GLSLParser.RULE_selection_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.match(GLSLParser.IF);
			this.state = 829;
			this.match(GLSLParser.LPAREN);
			this.state = 830;
			this.expression();
			this.state = 831;
			this.match(GLSLParser.RPAREN);
			this.state = 832;
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
		this.enterRule(_localctx, 156, GLSLParser.RULE_selection_rest_statement);
		try {
			this.state = 839;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 834;
				this.statement();
				this.state = 835;
				this.match(GLSLParser.ELSE);
				this.state = 836;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 838;
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
		this.enterRule(_localctx, 158, GLSLParser.RULE_condition);
		try {
			this.state = 847;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 841;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 842;
				this.fully_specified_type();
				this.state = 843;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 844;
				this.match(GLSLParser.ASSIGN_OP);
				this.state = 845;
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
		this.enterRule(_localctx, 160, GLSLParser.RULE_switch_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.match(GLSLParser.SWITCH);
			this.state = 850;
			this.match(GLSLParser.LPAREN);
			this.state = 851;
			this.expression();
			this.state = 852;
			this.match(GLSLParser.RPAREN);
			this.state = 853;
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
		this.enterRule(_localctx, 162, GLSLParser.RULE_switch_body);
		try {
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 855;
				this.match(GLSLParser.LBRACE);
				this.state = 856;
				this.match(GLSLParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 857;
				this.match(GLSLParser.LBRACE);
				this.state = 858;
				this.case_statement_list(0);
				this.state = 859;
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
		this.enterRule(_localctx, 164, GLSLParser.RULE_case_label);
		try {
			this.state = 869;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 863;
				this.match(GLSLParser.CASE);
				this.state = 864;
				this.expression();
				this.state = 865;
				this.match(GLSLParser.COLON);
				}
				break;
			case GLSLParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 867;
				this.match(GLSLParser.DEFAULT);
				this.state = 868;
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
		let _startState: number = 166;
		this.enterRecursionRule(_localctx, 166, GLSLParser.RULE_case_label_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 872;
			this.case_label();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 878;
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
					_localctx = new Case_label_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GLSLParser.RULE_case_label_list);
					this.state = 874;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 875;
					this.case_label();
					}
					}
				}
				this.state = 880;
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
		let _startState: number = 168;
		this.enterRecursionRule(_localctx, 168, GLSLParser.RULE_case_statement, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 882;
			this.case_label_list(0);
			this.state = 883;
			this.statement();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 889;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
					this.state = 885;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 886;
					this.statement();
					}
					}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
		let _startState: number = 170;
		this.enterRecursionRule(_localctx, 170, GLSLParser.RULE_case_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 893;
			this.case_statement(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 899;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
					this.state = 895;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 896;
					this.case_statement(0);
					}
					}
				}
				this.state = 901;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
		this.enterRule(_localctx, 172, GLSLParser.RULE_iteration_statement);
		try {
			this.state = 923;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 902;
				this.match(GLSLParser.WHILE);
				this.state = 903;
				this.match(GLSLParser.LPAREN);
				this.state = 904;
				this.condition();
				this.state = 905;
				this.match(GLSLParser.RPAREN);
				this.state = 906;
				this.statement_no_new_scope();
				}
				break;
			case GLSLParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 908;
				this.match(GLSLParser.DO);
				this.state = 909;
				this.statement();
				this.state = 910;
				this.match(GLSLParser.WHILE);
				this.state = 911;
				this.match(GLSLParser.LPAREN);
				this.state = 912;
				this.expression();
				this.state = 913;
				this.match(GLSLParser.RPAREN);
				this.state = 914;
				this.match(GLSLParser.SEMICOLON);
				}
				break;
			case GLSLParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 916;
				this.match(GLSLParser.FOR);
				this.state = 917;
				this.match(GLSLParser.LPAREN);
				this.state = 918;
				this.for_init_statement();
				this.state = 919;
				this.for_rest_statement();
				this.state = 920;
				this.match(GLSLParser.RPAREN);
				this.state = 921;
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
		this.enterRule(_localctx, 174, GLSLParser.RULE_for_init_statement);
		try {
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 925;
				this.expression_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 926;
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
		this.enterRule(_localctx, 176, GLSLParser.RULE_conditionopt);
		try {
			this.state = 931;
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
				this.state = 929;
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
		this.enterRule(_localctx, 178, GLSLParser.RULE_for_rest_statement);
		try {
			this.state = 940;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 933;
				this.conditionopt();
				this.state = 934;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 936;
				this.conditionopt();
				this.state = 937;
				this.match(GLSLParser.SEMICOLON);
				this.state = 938;
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
		this.enterRule(_localctx, 180, GLSLParser.RULE_jump_statement);
		try {
			this.state = 954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 942;
				this.match(GLSLParser.CONTINUE);
				this.state = 943;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 944;
				this.match(GLSLParser.BREAK);
				this.state = 945;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 946;
				this.match(GLSLParser.RETURN);
				this.state = 947;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 948;
				this.match(GLSLParser.RETURN);
				this.state = 949;
				this.expression();
				this.state = 950;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 952;
				this.match(GLSLParser.DISCARD);
				this.state = 953;
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
		this.enterRule(_localctx, 182, GLSLParser.RULE_external_declaration);
		try {
			this.state = 960;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 956;
				this.function_definition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 957;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 958;
				this.pragma_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 959;
				this.layout_defaults();
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
		this.enterRule(_localctx, 184, GLSLParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
			this.function_prototype();
			this.state = 963;
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
		this.enterRule(_localctx, 186, GLSLParser.RULE_interface_block);
		try {
			this.state = 969;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GLSLParser.UNIFORM:
			case GLSLParser.BUFFER:
			case GLSLParser.IN_TOK:
			case GLSLParser.OUT_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 965;
				this.basic_interface_block();
				}
				break;
			case GLSLParser.LAYOUT_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 966;
				this.layout_qualifier();
				this.state = 967;
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
		this.enterRule(_localctx, 188, GLSLParser.RULE_basic_interface_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.interface_qualifier();
			this.state = 972;
			this.match(GLSLParser.IDENTIFIER);
			this.state = 973;
			this.match(GLSLParser.LBRACE);
			this.state = 974;
			this.member_list(0);
			this.state = 975;
			this.match(GLSLParser.RBRACE);
			this.state = 976;
			this.instance_name_opt();
			this.state = 977;
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
		this.enterRule(_localctx, 190, GLSLParser.RULE_interface_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
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
		this.enterRule(_localctx, 192, GLSLParser.RULE_instance_name_opt);
		try {
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 982;
				this.match(GLSLParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 983;
				this.match(GLSLParser.IDENTIFIER);
				this.state = 984;
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
		this.enterRule(_localctx, 194, GLSLParser.RULE_layout_defaults);
		try {
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 987;
				this.layout_qualifier();
				this.state = 988;
				this.match(GLSLParser.UNIFORM);
				this.state = 989;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 991;
				this.layout_qualifier();
				this.state = 992;
				this.match(GLSLParser.IN_TOK);
				this.state = 993;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 995;
				this.layout_qualifier();
				this.state = 996;
				this.match(GLSLParser.OUT_TOK);
				this.state = 997;
				this.match(GLSLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 999;
				this.layout_qualifier();
				this.state = 1000;
				this.match(GLSLParser.BUFFER);
				this.state = 1001;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.extension_statement_list_sempred(_localctx as Extension_statement_listContext, predIndex);

		case 3:
			return this.external_declaration_list_sempred(_localctx as External_declaration_listContext, predIndex);

		case 6:
			return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex);

		case 10:
			return this.function_call_header_with_parameters_sempred(_localctx as Function_call_header_with_parametersContext, predIndex);

		case 15:
			return this.method_call_header_with_parameters_sempred(_localctx as Method_call_header_with_parametersContext, predIndex);

		case 38:
			return this.function_header_with_parameters_sempred(_localctx as Function_header_with_parametersContext, predIndex);

		case 45:
			return this.init_declarator_list_sempred(_localctx as Init_declarator_listContext, predIndex);

		case 49:
			return this.layout_qualifier_id_list_sempred(_localctx as Layout_qualifier_id_listContext, predIndex);

		case 57:
			return this.array_specifier_sempred(_localctx as Array_specifierContext, predIndex);

		case 63:
			return this.member_list_sempred(_localctx as Member_listContext, predIndex);

		case 65:
			return this.struct_declarator_list_sempred(_localctx as Struct_declarator_listContext, predIndex);

		case 68:
			return this.initializer_list_sempred(_localctx as Initializer_listContext, predIndex);

		case 75:
			return this.statement_list_sempred(_localctx as Statement_listContext, predIndex);

		case 83:
			return this.case_label_list_sempred(_localctx as Case_label_listContext, predIndex);

		case 84:
			return this.case_statement_sempred(_localctx as Case_statementContext, predIndex);

		case 85:
			return this.case_statement_list_sempred(_localctx as Case_statement_listContext, predIndex);
		}
		return true;
	}
	private extension_statement_list_sempred(_localctx: Extension_statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private external_declaration_list_sempred(_localctx: External_declaration_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private function_call_header_with_parameters_sempred(_localctx: Function_call_header_with_parametersContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private method_call_header_with_parameters_sempred(_localctx: Method_call_header_with_parametersContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private function_header_with_parameters_sempred(_localctx: Function_header_with_parametersContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private init_declarator_list_sempred(_localctx: Init_declarator_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private layout_qualifier_id_list_sempred(_localctx: Layout_qualifier_id_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private array_specifier_sempred(_localctx: Array_specifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 2);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private member_list_sempred(_localctx: Member_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private struct_declarator_list_sempred(_localctx: Struct_declarator_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializer_list_sempred(_localctx: Initializer_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private statement_list_sempred(_localctx: Statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private case_label_list_sempred(_localctx: Case_label_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private case_statement_sempred(_localctx: Case_statementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private case_statement_list_sempred(_localctx: Case_statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xCD\u03F0\x04" +
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
		"\x03\x03\x07\x03\xD6\n\x03\f\x03\x0E\x03\xD9\v\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05\xE8\n\x05\f\x05\x0E\x05\xEB\v\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\xFA\n\x07\x03\b\x03\b\x03\b\x05\b\xFF\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\b\u0110\n\b\f\b\x0E\b\u0113\v\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\u011D\n\n\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u0123\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u012C\n\f" +
		"\f\f\x0E\f\u012F\v\f\x03\r\x03\r\x05\r\u0133\n\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u013A\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u0142\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0148" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u0151\n\x11\f\x11\x0E\x11\u0154\v\x11\x03\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0161" +
		"\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0169\n" +
		"\x15\x03\x15\x07\x15\u016C\n\x15\f\x15\x0E\x15\u016F\v\x15\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u0174\n\x16\x03\x16\x07\x16\u0177\n\x16\f\x16\x0E" +
		"\x16\u017A\v\x16\x03\x17\x03\x17\x03\x17\x05\x17\u017F\n\x17\x03\x17\x07" +
		"\x17\u0182\n\x17\f\x17\x0E\x17\u0185\v\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u018C\n\x18\x03\x18\x07\x18\u018F\n\x18\f\x18\x0E" +
		"\x18\u0192\v\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0197\n\x19\x03\x19\x07" +
		"\x19\u019A\n\x19\f\x19\x0E\x19\u019D\v\x19\x03\x1A\x03\x1A\x03\x1A\x07" +
		"\x1A\u01A2\n\x1A\f\x1A\x0E\x1A\u01A5\v\x1A\x03\x1B\x03\x1B\x03\x1B\x07" +
		"\x1B\u01AA\n\x1B\f\x1B\x0E\x1B\u01AD\v\x1B\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u01B2\n\x1C\f\x1C\x0E\x1C\u01B5\v\x1C\x03\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\u01BA\n\x1D\f\x1D\x0E\x1D\u01BD\v\x1D\x03\x1E\x03\x1E\x03\x1E\x07" +
		"\x1E\u01C2\n\x1E\f\x1E\x0E\x1E\u01C5\v\x1E\x03\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\u01CA\n\x1F\f\x1F\x0E\x1F\u01CD\v\x1F\x03 \x03 \x03 \x03 \x03 \x03" +
		" \x07 \u01D5\n \f \x0E \u01D8\v \x03!\x03!\x03!\x03!\x03!\x05!\u01DF\n" +
		"!\x03\"\x03\"\x03#\x03#\x03#\x07#\u01E6\n#\f#\x0E#\u01E9\v#\x03$\x03$" +
		"\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01F9" +
		"\n%\x03&\x03&\x03&\x03\'\x03\'\x05\'\u0200\n\'\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x07(\u0209\n(\f(\x0E(\u020C\v(\x03)\x03)\x03)\x03)\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x05*\u0219\n*\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x05+\u0221\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x05,\u022E\n,\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x07/\u024A\n/\f/\x0E/\u024D\v/\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x050\u0266\n0\x031\x031\x031\x031\x051\u026C\n1\x032\x032" +
		"\x032\x032\x032\x033\x033\x033\x033\x033\x033\x073\u0279\n3\f3\x0E3\u027C" +
		"\v3\x034\x034\x035\x035\x035\x035\x035\x055\u0285\n5\x036\x036\x037\x03" +
		"7\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x058\u02A5" +
		"\n8\x039\x039\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u02B2" +
		"\n;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u02BC\n;\f;\x0E;\u02BF" +
		"\v;\x03<\x03<\x03<\x03<\x05<\u02C5\n<\x03=\x03=\x03=\x05=\u02CA\n=\x03" +
		">\x03>\x03?\x03?\x03@\x03@\x05@\u02D2\n@\x03@\x03@\x03@\x03@\x03A\x03" +
		"A\x03A\x03A\x03A\x07A\u02DD\nA\fA\x0EA\u02E0\vA\x03B\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x07C\u02EC\nC\fC\x0EC\u02EF\vC\x03D\x03D\x03" +
		"D\x05D\u02F4\nD\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05" +
		"E\u0300\nE\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u0308\nF\fF\x0EF\u030B\v" +
		"F\x03G\x03G\x03H\x03H\x05H\u0311\nH\x03I\x03I\x03I\x03I\x03I\x03I\x05" +
		"I\u0319\nI\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0321\nJ\x03K\x03K\x05K" +
		"\u0325\nK\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u032D\nL\x03M\x03M\x03M\x03" +
		"M\x03M\x07M\u0334\nM\fM\x0EM\u0337\vM\x03N\x03N\x03N\x03N\x05N\u033D\n" +
		"N\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x05P\u034A\n" +
		"P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0352\nQ\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u0360\nS\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x05T\u0368\nT\x03U\x03U\x03U\x03U\x03U\x07U\u036F\nU\fU\x0E" +
		"U\u0372\vU\x03V\x03V\x03V\x03V\x03V\x03V\x07V\u037A\nV\fV\x0EV\u037D\v" +
		"V\x03W\x03W\x03W\x03W\x03W\x07W\u0384\nW\fW\x0EW\u0387\vW\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x05X\u039E\nX\x03Y\x03Y\x05Y\u03A2\nY\x03Z\x03Z" +
		"\x05Z\u03A6\nZ\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u03AF\n[\x03\\" +
		"\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05" +
		"\\\u03BD\n\\\x03]\x03]\x03]\x03]\x05]\u03C3\n]\x03^\x03^\x03^\x03_\x03" +
		"_\x03_\x03_\x05_\u03CC\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
		"a\x03a\x03b\x03b\x03b\x03b\x05b\u03DC\nb\x03c\x03c\x03c\x03c\x03c\x03" +
		"c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u03EE\nc\x03" +
		"c\x02\x02\x12\x04\b\x0E\x16 N\\dt\x80\x84\x8A\x98\xA8\xAA\xACd\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\x02\x0E\x03" +
		"\x02\xCA\xCA\x03\x02\xBC\xBF\x04\x028A\xC9\xC9\x03\x02\f\x0E\x04\x02\x14" +
		"\x14&&\x03\x02\'(\x03\x02\x18\x1A\x03\x02\x1B\x1C\x06\x02\n\n\f\r\x15" +
		"\x15\x1D$\x05\x02--B[i\xB2\x03\x02\x0F\x11\x03\x02\n\r\x02\u0418\x02\xD0" +
		"\x03\x02\x02\x02\x04\xD2\x03\x02\x02\x02\x06\xDA\x03\x02\x02\x02\b\xE0" +
		"\x03\x02\x02\x02\n\xEC\x03\x02\x02\x02\f\xF9\x03\x02\x02\x02\x0E\xFE\x03" +
		"\x02\x02\x02\x10\u0114\x03\x02\x02\x02\x12\u011C\x03\x02\x02\x02\x14\u0122" +
		"\x03\x02\x02\x02\x16\u0124\x03\x02\x02\x02\x18\u0130\x03\x02\x02\x02\x1A" +
		"\u0139\x03\x02\x02\x02\x1C\u0141\x03\x02\x02\x02\x1E\u0147\x03\x02\x02" +
		"\x02 \u0149\x03\x02\x02\x02\"\u0155\x03\x02\x02\x02$\u0160\x03\x02\x02" +
		"\x02&\u0162\x03\x02\x02\x02(\u0164\x03\x02\x02\x02*\u0170\x03\x02\x02" +
		"\x02,\u017B\x03\x02\x02\x02.\u0186\x03\x02\x02\x020\u0193\x03\x02\x02" +
		"\x022\u019E\x03\x02\x02\x024\u01A6\x03\x02\x02\x026\u01AE\x03\x02\x02" +
		"\x028\u01B6\x03\x02\x02\x02:\u01BE\x03\x02\x02\x02<\u01C6\x03\x02\x02" +
		"\x02>\u01CE\x03\x02\x02\x02@\u01DE\x03\x02\x02\x02B\u01E0\x03\x02\x02" +
		"\x02D\u01E2\x03\x02\x02\x02F\u01EA\x03\x02\x02\x02H\u01F8\x03\x02\x02" +
		"\x02J\u01FA\x03\x02\x02\x02L\u01FF\x03\x02\x02\x02N\u0201\x03\x02\x02" +
		"\x02P\u020D\x03\x02\x02\x02R\u0218\x03\x02\x02\x02T\u0220\x03\x02\x02" +
		"\x02V\u022D\x03\x02\x02\x02X\u022F\x03\x02\x02\x02Z\u0231\x03\x02\x02" +
		"\x02\\\u0233\x03\x02\x02\x02^\u0265\x03\x02\x02\x02`\u026B\x03\x02\x02" +
		"\x02b\u026D\x03\x02\x02\x02d\u0272\x03\x02\x02\x02f\u027D\x03\x02\x02" +
		"\x02h\u0284\x03\x02\x02\x02j\u0286\x03\x02\x02\x02l\u0288\x03\x02\x02" +
		"\x02n\u02A4\x03\x02\x02\x02p\u02A6\x03\x02\x02\x02r\u02A8\x03\x02\x02" +
		"\x02t\u02B1\x03\x02\x02\x02v\u02C4\x03\x02\x02\x02x\u02C9\x03\x02\x02" +
		"\x02z\u02CB\x03\x02\x02\x02|\u02CD\x03\x02\x02\x02~\u02CF\x03\x02\x02" +
		"\x02\x80\u02D7\x03\x02\x02\x02\x82\u02E1\x03\x02\x02\x02\x84\u02E5\x03" +
		"\x02\x02\x02\x86\u02F3\x03\x02\x02\x02\x88\u02FF\x03\x02\x02\x02\x8A\u0301" +
		"\x03\x02\x02\x02\x8C\u030C\x03\x02\x02\x02\x8E\u0310\x03\x02\x02\x02\x90" +
		"\u0318\x03\x02\x02\x02\x92\u0320\x03\x02\x02\x02\x94\u0324\x03\x02\x02" +
		"\x02\x96\u032C\x03\x02\x02\x02\x98\u032E\x03\x02\x02\x02\x9A\u033C\x03" +
		"\x02\x02\x02\x9C\u033E\x03\x02\x02\x02\x9E\u0349\x03\x02\x02\x02\xA0\u0351" +
		"\x03\x02\x02\x02\xA2\u0353\x03\x02\x02\x02\xA4\u035F\x03\x02\x02\x02\xA6" +
		"\u0367\x03\x02\x02\x02\xA8\u0369\x03\x02\x02\x02\xAA\u0373\x03\x02\x02" +
		"\x02\xAC\u037E\x03\x02\x02\x02\xAE\u039D\x03\x02\x02\x02\xB0\u03A1\x03" +
		"\x02\x02\x02\xB2\u03A5\x03\x02\x02\x02\xB4\u03AE\x03\x02\x02\x02\xB6\u03BC" +
		"\x03\x02\x02\x02\xB8\u03C2\x03\x02\x02\x02\xBA\u03C4\x03\x02\x02\x02\xBC" +
		"\u03CB\x03\x02\x02\x02\xBE\u03CD\x03\x02\x02\x02\xC0\u03D5\x03\x02\x02" +
		"\x02\xC2\u03DB\x03\x02\x02\x02\xC4\u03ED\x03\x02\x02\x02\xC6\xC7\x07\x03" +
		"\x02\x02\xC7\xD1\x07\xCD\x02\x02\xC8\xC9\x07\x04\x02\x02\xC9\xD1\x07\xCD" +
		"\x02\x02\xCA\xCB\x07\x05\x02\x02\xCB\xD1\x07\xCD\x02\x02\xCC\xCD\x07\x06" +
		"\x02\x02\xCD\xD1\x07\xCD\x02\x02\xCE\xCF\x07\x07\x02\x02\xCF\xD1\x07\xCD" +
		"\x02\x02\xD0\xC6\x03\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD0\xCA\x03\x02" +
		"\x02\x02\xD0\xCC\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\x03\x03\x02" +
		"\x02\x02\xD2\xD7\b\x03\x01\x02\xD3\xD4\f\x03\x02\x02\xD4\xD6\x05\x06\x04" +
		"\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02" +
		"\x02\xD7\xD8\x03\x02\x02\x02\xD8\x05\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
		"\x02\xDA\xDB\x07\b\x02\x02\xDB\xDC\x07\xCA\x02\x02\xDC\xDD\x07\t\x02\x02" +
		"\xDD\xDE\x07\xCA\x02\x02\xDE\xDF\x07\xCD\x02\x02\xDF\x07\x03\x02\x02\x02" +
		"\xE0\xE1\b\x05\x01\x02\xE1\xE2\x05\xB8]\x02\xE2\xE9\x03\x02\x02\x02\xE3" +
		"\xE4\f\x04\x02\x02\xE4\xE8\x05\xB8]\x02\xE5\xE6\f\x03\x02\x02\xE6\xE8" +
		"\x05\x06\x04\x02\xE7\xE3\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEB" +
		"\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\t" +
		"\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xED\t\x02\x02\x02\xED\v\x03" +
		"\x02\x02\x02\xEE\xEF\x05\n\x06\x02\xEF\xF0\b\x07\x01\x02\xF0\xFA\x03\x02" +
		"\x02\x02\xF1\xFA\x07\x14\x02\x02\xF2\xFA\x07&\x02\x02\xF3\xFA\x07)\x02" +
		"\x02\xF4\xFA\x07*\x02\x02\xF5\xF6\x07\xB3\x02\x02\xF6\xF7\x05D#\x02\xF7" +
		"\xF8\x07\xB4\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xEE\x03\x02\x02\x02\xF9" +
		"\xF1\x03\x02\x02\x02\xF9\xF2\x03\x02\x02\x02\xF9\xF3\x03\x02\x02\x02\xF9" +
		"\xF4\x03\x02\x02\x02\xF9\xF5\x03\x02\x02\x02\xFA\r\x03\x02\x02\x02\xFB" +
		"\xFC\b\b\x01\x02\xFC\xFF\x05\f\x07\x02\xFD\xFF\x05\x12\n\x02\xFE\xFB\x03" +
		"\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0111\x03\x02\x02\x02\u0100\u0101" +
		"\f\b\x02\x02\u0101\u0102\x07\xB8\x02\x02\u0102\u0103\x05\x10\t\x02\u0103" +
		"\u0104\x07\xB9\x02\x02\u0104\u0110\x03\x02\x02\x02\u0105\u0106\f\x07\x02" +
		"\x02\u0106\u0107\x07\xBB\x02\x02\u0107\u0110\x05\x1C\x0F\x02\u0108\u0109" +
		"\f\x06\x02\x02\u0109\u010A\x07\xBB\x02\x02\u010A\u0110\x07\xCA\x02\x02" +
		"\u010B\u010C\f\x05\x02\x02\u010C\u0110\x07+\x02\x02\u010D\u010E\f\x04" +
		"\x02\x02\u010E\u0110\x07,\x02\x02\u010F\u0100\x03\x02\x02\x02\u010F\u0105" +
		"\x03\x02\x02\x02\u010F\u0108\x03\x02\x02\x02\u010F\u010B\x03\x02\x02\x02" +
		"\u010F\u010D\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03" +
		"\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\x0F\x03\x02\x02\x02\u0113" +
		"\u0111\x03\x02\x02\x02\u0114\u0115\x05D#\x02\u0115\x11\x03\x02\x02\x02" +
		"\u0116\u0117\x05\x16\f\x02\u0117\u0118\x07\xB4\x02\x02\u0118\u011D\x03" +
		"\x02\x02\x02\u0119\u011A\x05\x14\v\x02\u011A\u011B\x07\xB4\x02\x02\u011B" +
		"\u011D\x03\x02\x02\x02\u011C\u0116\x03\x02\x02\x02\u011C\u0119\x03\x02" +
		"\x02\x02\u011D\x13\x03\x02\x02\x02\u011E\u011F\x05\x18\r\x02\u011F\u0120" +
		"\x07-\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u0123\x05\x18\r\x02\u0122" +
		"\u011E\x03\x02\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123\x15\x03\x02\x02" +
		"\x02\u0124\u0125\b\f\x01\x02\u0125\u0126\x05\x18\r\x02\u0126\u0127\x05" +
		"@!\x02\u0127\u012D\x03\x02\x02\x02\u0128\u0129\f\x03\x02\x02\u0129\u012A" +
		"\x07\xBA\x02\x02\u012A\u012C\x05@!\x02\u012B\u0128\x03\x02\x02\x02\u012C" +
		"\u012F\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\x17\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0132" +
		"\x05\x1A\x0E\x02\u0131\u0133\x05t;\x02\u0132\u0131\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07\xB3" +
		"\x02\x02\u0135\x19\x03\x02\x02\x02\u0136\u013A\x05z>\x02\u0137\u013A\x05" +
		"\n\x06\x02\u0138\u013A\x07.\x02\x02\u0139\u0136\x03\x02\x02\x02\u0139" +
		"\u0137\x03\x02\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A\x1B\x03\x02\x02" +
		"\x02\u013B\u013C\x05 \x11\x02\u013C\u013D\x07\xB4\x02\x02\u013D\u0142" +
		"\x03\x02\x02\x02\u013E\u013F\x05\x1E\x10\x02\u013F\u0140\x07\xB4\x02\x02" +
		"\u0140\u0142\x03\x02\x02\x02\u0141\u013B\x03\x02\x02\x02\u0141\u013E\x03" +
		"\x02\x02\x02\u0142\x1D\x03\x02\x02\x02\u0143\u0144\x05\"\x12\x02\u0144" +
		"\u0145\x07-\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0148\x05\"\x12" +
		"\x02\u0147\u0143\x03\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148\x1F" +
		"\x03\x02\x02\x02\u0149\u014A\b\x11\x01\x02\u014A\u014B\x05\"\x12\x02\u014B" +
		"\u014C\x05@!\x02\u014C\u0152\x03\x02\x02\x02\u014D\u014E\f\x03\x02\x02" +
		"\u014E\u014F\x07\xBA\x02\x02\u014F\u0151\x05@!\x02\u0150\u014D\x03\x02" +
		"\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152" +
		"\u0153\x03\x02\x02\x02\u0153!\x03\x02\x02\x02\u0154\u0152\x03\x02\x02" +
		"\x02\u0155\u0156\x05\n\x06\x02\u0156\u0157\x07\xB3\x02\x02\u0157#\x03" +
		"\x02\x02\x02\u0158\u0161\x05\x0E\b\x02\u0159\u015A\x07+\x02\x02\u015A" +
		"\u0161\x05$\x13\x02\u015B\u015C\x07,\x02\x02\u015C\u0161\x05$\x13\x02" +
		"\u015D\u015E\x05&\x14\x02\u015E\u015F\x05$\x13\x02\u015F\u0161\x03\x02" +
		"\x02\x02\u0160\u0158\x03\x02\x02\x02\u0160\u0159\x03\x02\x02\x02\u0160" +
		"\u015B\x03\x02\x02\x02\u0160\u015D\x03\x02\x02\x02\u0161%\x03\x02\x02" +
		"\x02\u0162\u0163\t\x03\x02\x02\u0163\'\x03\x02\x02\x02\u0164\u016D\x05" +
		"$\x13\x02\u0165\u0169\x07\xC0\x02\x02\u0166\u0169\x07\xC1\x02\x02\u0167" +
		"\u0169\x07\xC2\x02\x02\u0168\u0165\x03\x02\x02\x02\u0168\u0166\x03\x02" +
		"\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
		"\u016C\x05$\x13\x02\u016B\u0168\x03\x02\x02\x02\u016C\u016F\x03\x02\x02" +
		"\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E)\x03" +
		"\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0178\x05(\x15\x02\u0171" +
		"\u0174\x07\xBC\x02\x02\u0172\u0174\x07\xBD\x02\x02\u0173\u0171\x03\x02" +
		"\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175" +
		"\u0177\x05(\x15\x02\u0176\u0173\x03\x02\x02\x02\u0177\u017A\x03\x02\x02" +
		"\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179+\x03" +
		"\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u0183\x05*\x16\x02\u017C" +
		"\u017F\x07/\x02\x02\u017D\u017F\x070\x02\x02\u017E\u017C\x03\x02\x02\x02" +
		"\u017E\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x05" +
		"*\x16\x02\u0181\u017E\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183" +
		"\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184-\x03\x02\x02" +
		"\x02\u0185\u0183\x03\x02\x02\x02\u0186\u0190\x05,\x17\x02\u0187\u018C" +
		"\x07\xC3\x02\x02\u0188\u018C\x07\xC4\x02\x02\u0189\u018C\x071\x02\x02" +
		"\u018A\u018C\x072\x02\x02\u018B\u0187\x03\x02\x02\x02\u018B\u0188\x03" +
		"\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C" +
		"\u018D\x03\x02\x02\x02\u018D\u018F\x05,\x17\x02\u018E\u018B\x03\x02\x02" +
		"\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191" +
		"\x03\x02\x02\x02\u0191/\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193" +
		"\u019B\x05.\x18\x02\u0194\u0197\x073\x02\x02\u0195\u0197\x074\x02\x02" +
		"\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197\u0198\x03" +
		"\x02\x02\x02\u0198\u019A\x05.\x18\x02\u0199\u0196\x03\x02\x02\x02\u019A" +
		"\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02" +
		"\x02\x02\u019C1\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E\u01A3" +
		"\x050\x19\x02\u019F\u01A0\x07\xC5\x02\x02\u01A0\u01A2\x050\x19\x02\u01A1" +
		"\u019F\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02" +
		"\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A43\x03\x02\x02\x02\u01A5\u01A3" +
		"\x03\x02\x02\x02\u01A6\u01AB\x052\x1A\x02\u01A7\u01A8\x07\xC7\x02\x02" +
		"\u01A8\u01AA\x052\x1A\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AD\x03" +
		"\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
		"5\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01B3\x054\x1B\x02" +
		"\u01AF\u01B0\x07\xC6\x02\x02\u01B0\u01B2\x054\x1B\x02\u01B1\u01AF\x03" +
		"\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3" +
		"\u01B4\x03\x02\x02\x02\u01B47\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02" +
		"\x02\u01B6\u01BB\x056\x1C\x02\u01B7\u01B8\x075\x02\x02\u01B8\u01BA\x05" +
		"6\x1C\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB" +
		"\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC9\x03\x02\x02" +
		"\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01C3\x058\x1D\x02\u01BF\u01C0" +
		"\x076\x02\x02\u01C0\u01C2\x058\x1D\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2" +
		"\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02" +
		"\x02\x02\u01C4;\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01CB" +
		"\x05:\x1E\x02\u01C7\u01C8\x077\x02\x02\u01C8\u01CA\x05:\x1E\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02" +
		"\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC=\x03\x02\x02\x02\u01CD\u01CB" +
		"\x03\x02\x02\x02\u01CE\u01D6\x05<\x1F\x02\u01CF\u01D0\x07\xC8\x02\x02" +
		"\u01D0\u01D1\x05D#\x02\u01D1\u01D2\x07\t\x02\x02\u01D2\u01D3\x05@!\x02" +
		"\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01CF\x03\x02\x02\x02\u01D5\u01D8\x03" +
		"\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7" +
		"?\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DF\x05> \x02\u01DA" +
		"\u01DB\x05$\x13\x02\u01DB\u01DC\x05B\"\x02\u01DC\u01DD\x05@!\x02\u01DD" +
		"\u01DF\x03\x02\x02\x02\u01DE\u01D9\x03\x02\x02\x02\u01DE\u01DA\x03\x02" +
		"\x02\x02\u01DFA\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01E0\u01E1\t\x04\x02\x02\u01E1C\x03\x02\x02\x02\u01E2\u01E7\x05@!\x02" +
		"\u01E3\u01E4\x07\xBA\x02\x02\u01E4\u01E6\x05@!\x02\u01E5\u01E3\x03\x02" +
		"\x02\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7" +
		"\u01E8\x03\x02\x02\x02\u01E8E\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02" +
		"\x02\u01EA\u01EB\x05> \x02\u01EBG\x03\x02\x02\x02\u01EC\u01ED\x05J&\x02" +
		"\u01ED\u01EE\x07\xB7\x02\x02\u01EE\u01F9\x03\x02\x02\x02\u01EF\u01F0\x05" +
		"\\/\x02\u01F0\u01F1\x07\xB7\x02\x02\u01F1\u01F9\x03\x02\x02\x02\u01F2" +
		"\u01F3\x07\x12\x02\x02\u01F3\u01F4\x05|?\x02\u01F4\u01F5\x05v<\x02\u01F5" +
		"\u01F6\x07\xB7\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F9\x05\xBC" +
		"_\x02\u01F8\u01EC\x03\x02\x02\x02\u01F8\u01EF\x03\x02\x02\x02\u01F8\u01F2" +
		"\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9I\x03\x02\x02\x02\u01FA" +
		"\u01FB\x05L\'\x02\u01FB\u01FC\x07\xB4\x02\x02\u01FCK\x03\x02\x02\x02\u01FD" +
		"\u0200\x05P)\x02\u01FE\u0200\x05N(\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF" +
		"\u01FE\x03\x02\x02\x02\u0200M\x03\x02\x02\x02\u0201\u0202\b(\x01\x02\u0202" +
		"\u0203\x05P)\x02\u0203\u0204\x05T+\x02\u0204\u020A\x03\x02\x02\x02\u0205" +
		"\u0206\f\x03\x02\x02\u0206\u0207\x07\xBA\x02\x02\u0207\u0209\x05T+\x02" +
		"\u0208\u0205\x03\x02\x02\x02\u0209\u020C\x03\x02\x02\x02\u020A\u0208\x03" +
		"\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020BO\x03\x02\x02\x02\u020C" +
		"\u020A\x03\x02\x02\x02\u020D\u020E\x05`1\x02\u020E\u020F\x05\n\x06\x02" +
		"\u020F\u0210\x07\xB3\x02\x02\u0210Q\x03\x02\x02\x02\u0211\u0212\x05v<" +
		"\x02\u0212\u0213\x07\xCA\x02\x02\u0213\u0219\x03\x02\x02\x02\u0214\u0215" +
		"\x05v<\x02\u0215\u0216\x07\xCA\x02\x02\u0216\u0217\x05t;\x02\u0217\u0219" +
		"\x03\x02\x02\x02\u0218\u0211\x03\x02\x02\x02\u0218\u0214\x03\x02\x02\x02" +
		"\u0219S\x03\x02\x02\x02\u021A\u021B\x05V,\x02\u021B\u021C\x05R*\x02\u021C" +
		"\u0221\x03\x02\x02\x02\u021D\u021E\x05V,\x02\u021E\u021F\x05Z.\x02\u021F" +
		"\u0221\x03\x02\x02\x02\u0220\u021A\x03\x02\x02\x02\u0220\u021D\x03\x02" +
		"\x02\x02\u0221U\x03\x02\x02\x02\u0222\u022E\x03\x02\x02\x02\u0223\u0224" +
		"\x07\x15\x02\x02\u0224\u022E\x05V,\x02\u0225\u0226\x07\x16\x02\x02\u0226" +
		"\u022E\x05V,\x02\u0227\u0228\x05X-\x02\u0228\u0229\x05V,\x02\u0229\u022E" +
		"\x03\x02\x02\x02\u022A\u022B\x05|?\x02\u022B\u022C\x05V,\x02\u022C\u022E" +
		"\x03\x02\x02\x02\u022D\u0222\x03\x02\x02\x02\u022D\u0223\x03\x02\x02\x02" +
		"\u022D\u0225\x03\x02\x02\x02\u022D\u0227\x03\x02\x02\x02\u022D\u022A\x03" +
		"\x02\x02\x02\u022EW\x03\x02\x02\x02\u022F\u0230\t\x05\x02\x02\u0230Y\x03" +
		"\x02\x02\x02\u0231\u0232\x05v<\x02\u0232[\x03\x02\x02\x02\u0233\u0234" +
		"\b/\x01\x02\u0234\u0235\x05^0\x02\u0235\u024B\x03\x02\x02\x02\u0236\u0237" +
		"\f\x06\x02\x02\u0237\u0238\x07\xBA\x02\x02\u0238\u024A\x07\xCA\x02\x02" +
		"\u0239\u023A\f\x05\x02\x02\u023A\u023B\x07\xBA\x02\x02\u023B\u023C\x07" +
		"\xCA\x02\x02\u023C\u024A\x05t;\x02\u023D\u023E\f\x04\x02\x02\u023E\u023F" +
		"\x07\xBA\x02\x02\u023F\u0240\x07\xCA\x02\x02\u0240\u0241\x05t;\x02\u0241" +
		"\u0242\x07\xC9\x02\x02\u0242\u0243\x05\x88E\x02\u0243\u024A\x03\x02\x02" +
		"\x02\u0244\u0245\f\x03\x02\x02\u0245\u0246\x07\xBA\x02\x02\u0246\u0247" +
		"\x07\xCA\x02\x02\u0247\u0248\x07\xC9\x02\x02\u0248\u024A\x05\x88E\x02" +
		"\u0249\u0236\x03\x02\x02\x02\u0249\u0239\x03\x02\x02\x02\u0249\u023D\x03" +
		"\x02\x02\x02\u0249\u0244\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B" +
		"\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C]\x03\x02\x02" +
		"\x02\u024D\u024B\x03\x02\x02\x02\u024E\u0266\x05`1\x02\u024F\u0250\x05" +
		"`1\x02\u0250\u0251\x07\xCA\x02\x02\u0251\u0266\x03\x02\x02\x02\u0252\u0253" +
		"\x05`1\x02\u0253\u0254\x07\xCA\x02\x02\u0254\u0255\x05t;\x02\u0255\u0266" +
		"\x03\x02\x02\x02\u0256\u0257\x05`1\x02\u0257\u0258\x07\xCA\x02\x02\u0258" +
		"\u0259\x05t;\x02\u0259\u025A\x07\xC9\x02\x02\u025A\u025B\x05\x88E\x02" +
		"\u025B\u0266\x03\x02\x02\x02\u025C\u025D\x05`1\x02\u025D\u025E\x07\xCA" +
		"\x02\x02\u025E\u025F\x07\xC9\x02\x02\u025F\u0260\x05\x88E\x02\u0260\u0266" +
		"\x03\x02\x02\x02\u0261\u0262\x07\x17\x02\x02\u0262\u0266\x05\n\x06\x02" +
		"\u0263\u0264\x07\x16\x02\x02\u0264\u0266\x05\n\x06\x02\u0265\u024E\x03" +
		"\x02\x02\x02\u0265\u024F\x03\x02\x02\x02\u0265\u0252\x03\x02\x02\x02\u0265" +
		"\u0256\x03\x02\x02\x02\u0265\u025C\x03\x02\x02\x02\u0265\u0261\x03\x02" +
		"\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266_\x03\x02\x02\x02\u0267\u026C" +
		"\x05v<\x02\u0268\u0269\x05n8\x02\u0269\u026A\x05v<\x02\u026A\u026C\x03" +
		"\x02\x02\x02\u026B\u0267\x03\x02\x02\x02\u026B\u0268\x03\x02\x02\x02\u026C" +
		"a\x03\x02\x02\x02\u026D\u026E\x07%\x02\x02\u026E\u026F\x07\xB3\x02\x02" +
		"\u026F\u0270\x05d3\x02\u0270\u0271\x07\xB4\x02\x02\u0271c\x03\x02\x02" +
		"\x02\u0272\u0273\b3\x01\x02\u0273\u0274\x05h5\x02\u0274\u027A\x03\x02" +
		"\x02\x02\u0275\u0276\f\x03\x02\x02\u0276\u0277\x07\xBA\x02\x02\u0277\u0279" +
		"\x05h5\x02\u0278\u0275\x03\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A" +
		"\u0278\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027Be\x03\x02\x02" +
		"\x02\u027C\u027A\x03\x02\x02\x02\u027D\u027E\t\x06\x02\x02\u027Eg\x03" +
		"\x02\x02\x02\u027F\u0285\x07\xCA\x02\x02\u0280\u0281\x07\xCA\x02\x02\u0281" +
		"\u0282\x07\xC9\x02\x02\u0282\u0285\x05f4\x02\u0283\u0285\x05j6\x02\u0284" +
		"\u027F\x03\x02\x02\x02\u0284\u0280\x03\x02\x02\x02\u0284\u0283\x03\x02" +
		"\x02\x02\u0285i\x03\x02\x02\x02\u0286\u0287\t\x07\x02\x02\u0287k\x03\x02" +
		"\x02\x02\u0288\u0289\t\b\x02\x02\u0289m\x03\x02\x02\x02\u028A\u02A5\x07" +
		"\x17\x02\x02\u028B\u02A5\x07\x16\x02\x02\u028C\u02A5\x05p9\x02\u028D\u02A5" +
		"\x05r:\x02\u028E\u02A5\x05l7\x02\u028F\u02A5\x05b2\x02\u0290\u02A5\x05" +
		"|?\x02\u0291\u0292\x07\x16\x02\x02\u0292\u02A5\x05n8\x02\u0293\u0294\x07" +
		"\x17\x02\x02\u0294\u02A5\x05n8\x02\u0295\u0296\x05l7\x02\u0296\u0297\x05" +
		"n8\x02\u0297\u02A5\x03\x02\x02\x02\u0298\u0299\x05b2\x02\u0299\u029A\x05" +
		"n8\x02\u029A\u02A5\x03\x02\x02\x02\u029B\u029C\x05p9\x02\u029C\u029D\x05" +
		"n8\x02\u029D\u02A5\x03\x02\x02\x02\u029E\u029F\x05r:\x02\u029F\u02A0\x05" +
		"n8\x02\u02A0\u02A5\x03\x02\x02\x02\u02A1\u02A2\x05|?\x02\u02A2\u02A3\x05" +
		"n8\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u028A\x03\x02\x02\x02\u02A4\u028B" +
		"\x03\x02\x02\x02\u02A4\u028C\x03\x02\x02\x02\u02A4\u028D\x03\x02\x02\x02" +
		"\u02A4\u028E\x03\x02\x02\x02\u02A4\u028F\x03\x02\x02\x02\u02A4\u0290\x03" +
		"\x02\x02\x02\u02A4\u0291\x03\x02\x02\x02\u02A4\u0293\x03\x02\x02\x02\u02A4" +
		"\u0295\x03\x02\x02\x02\u02A4\u0298\x03\x02\x02\x02\u02A4\u029B\x03\x02" +
		"\x02\x02\u02A4\u029E\x03\x02\x02\x02\u02A4\u02A1\x03\x02\x02\x02\u02A5" +
		"o\x03\x02\x02\x02\u02A6\u02A7\t\t\x02\x02\u02A7q\x03\x02\x02\x02\u02A8" +
		"\u02A9\t\n\x02\x02\u02A9s\x03\x02\x02\x02\u02AA\u02AB\b;\x01\x02\u02AB" +
		"\u02AC\x07\xB8\x02\x02\u02AC\u02B2\x07\xB9\x02\x02\u02AD\u02AE\x07\xB8" +
		"\x02\x02\u02AE\u02AF\x05F$\x02\u02AF\u02B0\x07\xB9\x02\x02\u02B0\u02B2" +
		"\x03\x02\x02\x02\u02B1\u02AA\x03\x02\x02\x02\u02B1\u02AD\x03\x02\x02\x02" +
		"\u02B2\u02BD\x03\x02\x02\x02\u02B3\u02B4\f\x04\x02\x02\u02B4\u02B5\x07" +
		"\xB8\x02\x02\u02B5\u02BC\x07\xB9\x02\x02\u02B6\u02B7\f\x03\x02\x02\u02B7" +
		"\u02B8\x07\xB8\x02\x02\u02B8\u02B9\x05F$\x02\u02B9\u02BA\x07\xB9\x02\x02" +
		"\u02BA\u02BC\x03\x02\x02\x02\u02BB\u02B3\x03\x02\x02\x02\u02BB\u02B6\x03" +
		"\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD" +
		"\u02BE\x03\x02\x02\x02\u02BEu\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02" +
		"\x02\u02C0\u02C5\x05x=\x02\u02C1\u02C2\x05x=\x02\u02C2\u02C3\x05t;\x02" +
		"\u02C3\u02C5\x03\x02\x02\x02\u02C4\u02C0\x03\x02\x02\x02\u02C4\u02C1\x03" +
		"\x02\x02\x02\u02C5w\x03\x02\x02\x02\u02C6\u02CA\x05z>\x02\u02C7\u02CA" +
		"\x05~@\x02\u02C8\u02CA\x07\xCA\x02\x02\u02C9\u02C6\x03\x02\x02\x02\u02C9" +
		"\u02C7\x03\x02\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02CAy\x03\x02\x02" +
		"\x02\u02CB\u02CC\t\v\x02\x02\u02CC{\x03\x02\x02\x02\u02CD\u02CE\t\f\x02" +
		"\x02\u02CE}\x03\x02\x02\x02\u02CF\u02D1\x07\\\x02\x02\u02D0\u02D2\x07" +
		"\xCA\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2" +
		"\u02D3\x03\x02\x02\x02\u02D3\u02D4\x07\xB5\x02\x02\u02D4\u02D5\x05\x80" +
		"A\x02\u02D5\u02D6\x07\xB6\x02\x02\u02D6\x7F\x03\x02\x02\x02\u02D7\u02D8" +
		"\bA\x01\x02\u02D8\u02D9\x05\x82B\x02\u02D9\u02DE\x03\x02\x02\x02\u02DA" +
		"\u02DB\f\x03\x02\x02\u02DB\u02DD\x05\x82B\x02\u02DC\u02DA\x03\x02\x02" +
		"\x02\u02DD\u02E0\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF" +
		"\x03\x02\x02\x02\u02DF\x81\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02" +
		"\u02E1\u02E2\x05`1\x02\u02E2\u02E3\x05\x84C\x02\u02E3\u02E4\x07\xB7\x02" +
		"\x02\u02E4\x83\x03\x02\x02\x02\u02E5\u02E6\bC\x01\x02\u02E6\u02E7\x05" +
		"\x86D\x02\u02E7\u02ED\x03\x02\x02\x02\u02E8\u02E9\f\x03\x02\x02\u02E9" +
		"\u02EA\x07\xBA\x02\x02\u02EA\u02EC\x05\x86D\x02\u02EB\u02E8\x03\x02\x02" +
		"\x02\u02EC\u02EF\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE" +
		"\x03\x02\x02\x02\u02EE\x85\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02" +
		"\u02F0\u02F4\x07\xCA\x02\x02\u02F1\u02F2\x07\xCA\x02\x02\u02F2\u02F4\x05" +
		"t;\x02\u02F3\u02F0\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\x87" +
		"\x03\x02\x02\x02\u02F5\u0300\x05@!\x02\u02F6\u02F7\x07\xB5\x02\x02\u02F7" +
		"\u02F8\x05\x8AF\x02\u02F8\u02F9\x07\xB6\x02\x02\u02F9\u0300\x03\x02\x02" +
		"\x02\u02FA\u02FB\x07\xB5\x02\x02\u02FB\u02FC\x05\x8AF\x02\u02FC\u02FD" +
		"\x07\xBA\x02\x02\u02FD\u02FE\x07\xB6\x02\x02\u02FE\u0300\x03\x02\x02\x02" +
		"\u02FF\u02F5\x03\x02\x02\x02\u02FF\u02F6\x03\x02\x02\x02\u02FF\u02FA\x03" +
		"\x02\x02\x02\u0300\x89\x03\x02\x02\x02\u0301\u0302\bF\x01\x02\u0302\u0303" +
		"\x05\x88E\x02\u0303\u0309\x03\x02\x02\x02\u0304\u0305\f\x03\x02\x02\u0305" +
		"\u0306\x07\xBA\x02\x02\u0306\u0308\x05\x88E\x02\u0307\u0304\x03\x02\x02" +
		"\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309\u030A" +
		"\x03\x02\x02\x02\u030A\x8B\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02" +
		"\u030C\u030D\x05H%\x02\u030D\x8D\x03\x02\x02\x02\u030E\u0311\x05\x92J" +
		"\x02\u030F\u0311\x05\x90I\x02\u0310\u030E\x03\x02\x02\x02\u0310\u030F" +
		"\x03\x02\x02\x02\u0311\x8F\x03\x02\x02\x02\u0312\u0319\x05\x9AN\x02\u0313" +
		"\u0319\x05\x8CG\x02\u0314\u0319\x05\x9CO\x02\u0315\u0319\x05\xA2R\x02" +
		"\u0316\u0319\x05\xAEX\x02\u0317\u0319\x05\xB6\\\x02\u0318\u0312\x03\x02" +
		"\x02\x02\u0318\u0313\x03\x02\x02\x02\u0318\u0314\x03\x02\x02\x02\u0318" +
		"\u0315\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0317\x03\x02" +
		"\x02\x02\u0319\x91\x03\x02\x02\x02\u031A\u031B\x07\xB5\x02\x02\u031B\u0321" +
		"\x07\xB6\x02\x02\u031C\u031D\x07\xB5\x02\x02\u031D\u031E\x05\x98M\x02" +
		"\u031E\u031F\x07\xB6\x02\x02\u031F\u0321\x03\x02\x02\x02\u0320\u031A\x03" +
		"\x02\x02\x02\u0320\u031C\x03\x02\x02\x02\u0321\x93\x03\x02\x02\x02\u0322" +
		"\u0325\x05\x96L\x02\u0323\u0325\x05\x90I\x02\u0324\u0322\x03\x02\x02\x02" +
		"\u0324\u0323\x03\x02\x02\x02\u0325\x95\x03\x02\x02\x02\u0326\u0327\x07" +
		"\xB5\x02\x02\u0327\u032D\x07\xB6\x02\x02\u0328\u0329\x07\xB5\x02\x02\u0329" +
		"\u032A\x05\x98M\x02\u032A\u032B\x07\xB6\x02\x02\u032B\u032D\x03\x02\x02" +
		"\x02\u032C\u0326\x03\x02\x02\x02\u032C\u0328\x03\x02\x02\x02\u032D\x97" +
		"\x03\x02\x02\x02\u032E\u032F\bM\x01\x02\u032F\u0330\x05\x8EH\x02\u0330" +
		"\u0335\x03\x02\x02\x02\u0331\u0332\f\x03\x02\x02\u0332\u0334\x05\x8EH" +
		"\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335\u0333" +
		"\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\x99\x03\x02\x02\x02" +
		"\u0337\u0335\x03\x02\x02\x02\u0338\u033D\x07\xB7\x02\x02\u0339\u033A\x05" +
		"D#\x02\u033A\u033B\x07\xB7\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C\u0338" +
		"\x03\x02\x02\x02\u033C\u0339\x03\x02\x02\x02\u033D\x9B\x03\x02\x02\x02" +
		"\u033E\u033F\x07]\x02\x02\u033F\u0340\x07\xB3\x02\x02\u0340\u0341\x05" +
		"D#\x02\u0341\u0342\x07\xB4\x02\x02\u0342\u0343\x05\x9EP\x02\u0343\x9D" +
		"\x03\x02\x02\x02\u0344\u0345\x05\x8EH\x02\u0345\u0346\x07^\x02\x02\u0346" +
		"\u0347\x05\x8EH\x02\u0347\u034A\x03\x02\x02\x02\u0348\u034A\x05\x8EH\x02" +
		"\u0349\u0344\x03\x02\x02\x02\u0349\u0348\x03\x02\x02\x02\u034A\x9F\x03" +
		"\x02\x02\x02\u034B\u0352\x05D#\x02\u034C\u034D\x05`1\x02\u034D\u034E\x07" +
		"\xCA\x02\x02\u034E\u034F\x07\xC9\x02\x02\u034F\u0350\x05\x88E\x02\u0350" +
		"\u0352\x03\x02\x02\x02\u0351\u034B\x03\x02\x02\x02\u0351\u034C\x03\x02" +
		"\x02\x02\u0352\xA1\x03\x02\x02\x02\u0353\u0354\x07_\x02\x02\u0354\u0355" +
		"\x07\xB3\x02\x02\u0355\u0356\x05D#\x02\u0356\u0357\x07\xB4\x02\x02\u0357" +
		"\u0358\x05\xA4S\x02\u0358\xA3\x03\x02\x02\x02\u0359\u035A\x07\xB5\x02" +
		"\x02\u035A\u0360\x07\xB6\x02\x02\u035B\u035C\x07\xB5\x02\x02\u035C\u035D" +
		"\x05\xACW\x02\u035D\u035E\x07\xB6\x02\x02\u035E\u0360\x03\x02\x02\x02" +
		"\u035F\u0359\x03\x02\x02\x02\u035F\u035B\x03\x02\x02\x02\u0360\xA5\x03" +
		"\x02\x02\x02\u0361\u0362\x07`\x02\x02\u0362\u0363\x05D#\x02\u0363\u0364" +
		"\x07\t\x02\x02\u0364\u0368\x03\x02\x02\x02\u0365\u0366\x07a\x02\x02\u0366" +
		"\u0368\x07\t\x02\x02\u0367\u0361\x03\x02\x02\x02\u0367\u0365\x03\x02\x02" +
		"\x02\u0368\xA7\x03\x02\x02\x02\u0369\u036A\bU\x01\x02\u036A\u036B\x05" +
		"\xA6T\x02\u036B\u0370\x03\x02\x02\x02\u036C\u036D\f\x03\x02\x02\u036D" +
		"\u036F\x05\xA6T\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0372\x03\x02\x02" +
		"\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\xA9" +
		"\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373\u0374\bV\x01\x02\u0374" +
		"\u0375\x05\xA8U\x02\u0375\u0376\x05\x8EH\x02\u0376\u037B\x03\x02\x02\x02" +
		"\u0377\u0378\f\x03\x02\x02\u0378\u037A\x05\x8EH\x02\u0379\u0377\x03\x02" +
		"\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037B" +
		"\u037C\x03\x02\x02\x02\u037C\xAB\x03\x02\x02\x02\u037D\u037B\x03\x02\x02" +
		"\x02\u037E\u037F\bW\x01\x02\u037F\u0380\x05\xAAV\x02\u0380\u0385\x03\x02" +
		"\x02\x02\u0381\u0382\f\x03\x02\x02\u0382\u0384\x05\xAAV\x02\u0383\u0381" +
		"\x03\x02\x02\x02\u0384\u0387\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02" +
		"\u0385\u0386\x03\x02\x02\x02\u0386\xAD\x03\x02\x02\x02\u0387\u0385\x03" +
		"\x02\x02\x02\u0388\u0389\x07b\x02\x02\u0389\u038A\x07\xB3\x02\x02\u038A" +
		"\u038B\x05\xA0Q\x02\u038B\u038C\x07\xB4\x02\x02\u038C\u038D\x05\x94K\x02" +
		"\u038D\u039E\x03\x02\x02\x02\u038E\u038F\x07c\x02\x02\u038F\u0390\x05" +
		"\x8EH\x02\u0390\u0391\x07b\x02\x02\u0391\u0392\x07\xB3\x02\x02\u0392\u0393" +
		"\x05D#\x02\u0393\u0394\x07\xB4\x02\x02\u0394\u0395\x07\xB7\x02\x02\u0395" +
		"\u039E\x03\x02\x02\x02\u0396\u0397\x07d\x02\x02\u0397\u0398\x07\xB3\x02" +
		"\x02\u0398\u0399\x05\xB0Y\x02\u0399\u039A\x05\xB4[\x02\u039A\u039B\x07" +
		"\xB4\x02\x02\u039B\u039C\x05\x94K\x02\u039C\u039E\x03\x02\x02\x02\u039D" +
		"\u0388\x03\x02\x02\x02\u039D\u038E\x03\x02\x02\x02\u039D\u0396\x03\x02" +
		"\x02\x02\u039E\xAF\x03\x02\x02\x02\u039F\u03A2\x05\x9AN\x02\u03A0\u03A2" +
		"\x05\x8CG\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A0\x03\x02\x02\x02" +
		"\u03A2\xB1\x03\x02\x02\x02\u03A3\u03A6\x05\xA0Q\x02\u03A4\u03A6\x03\x02" +
		"\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6" +
		"\xB3\x03\x02\x02\x02\u03A7\u03A8\x05\xB2Z\x02\u03A8\u03A9\x07\xB7\x02" +
		"\x02\u03A9\u03AF\x03\x02\x02\x02\u03AA\u03AB\x05\xB2Z\x02\u03AB\u03AC" +
		"\x07\xB7\x02\x02\u03AC\u03AD\x05D#\x02\u03AD\u03AF\x03\x02\x02\x02\u03AE" +
		"\u03A7\x03\x02\x02\x02\u03AE\u03AA\x03\x02\x02\x02\u03AF\xB5\x03\x02\x02" +
		"\x02\u03B0\u03B1\x07e\x02\x02\u03B1\u03BD\x07\xB7\x02\x02\u03B2\u03B3" +
		"\x07f\x02\x02\u03B3\u03BD\x07\xB7\x02\x02\u03B4\u03B5\x07g\x02\x02\u03B5" +
		"\u03BD\x07\xB7\x02\x02\u03B6\u03B7\x07g\x02\x02\u03B7\u03B8\x05D#\x02" +
		"\u03B8\u03B9\x07\xB7\x02\x02\u03B9\u03BD\x03\x02\x02\x02\u03BA\u03BB\x07" +
		"h\x02\x02\u03BB\u03BD\x07\xB7\x02\x02\u03BC\u03B0\x03\x02\x02\x02\u03BC" +
		"\u03B2\x03\x02\x02\x02\u03BC\u03B4\x03\x02\x02\x02\u03BC\u03B6\x03\x02" +
		"\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD\xB7\x03\x02\x02\x02\u03BE\u03C3" +
		"\x05\xBA^\x02\u03BF\u03C3\x05H%\x02\u03C0\u03C3\x05\x02\x02\x02\u03C1" +
		"\u03C3\x05\xC4c\x02\u03C2\u03BE\x03\x02\x02\x02\u03C2\u03BF\x03\x02\x02" +
		"\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C3\xB9" +
		"\x03\x02\x02\x02\u03C4\u03C5\x05J&\x02\u03C5\u03C6\x05\x96L\x02\u03C6" +
		"\xBB\x03\x02\x02\x02\u03C7\u03CC\x05\xBE`\x02\u03C8\u03C9\x05b2\x02\u03C9" +
		"\u03CA\x05\xBE`\x02\u03CA\u03CC\x03\x02\x02\x02\u03CB\u03C7\x03\x02\x02" +
		"\x02\u03CB\u03C8\x03\x02\x02\x02\u03CC\xBD\x03\x02\x02\x02\u03CD\u03CE" +
		"\x05\xC0a\x02\u03CE\u03CF\x07\xCA\x02\x02\u03CF\u03D0\x07\xB5\x02\x02" +
		"\u03D0\u03D1\x05\x80A\x02\u03D1\u03D2\x07\xB6\x02\x02\u03D2\u03D3\x05" +
		"\xC2b\x02\u03D3\u03D4\x07\xB7\x02\x02\u03D4\xBF\x03\x02\x02\x02\u03D5" +
		"\u03D6\t\r\x02\x02\u03D6\xC1\x03\x02\x02\x02\u03D7\u03DC\x03\x02\x02\x02" +
		"\u03D8\u03DC\x07\xCA\x02\x02\u03D9\u03DA\x07\xCA\x02\x02\u03DA\u03DC\x05" +
		"t;\x02\u03DB\u03D7\x03\x02\x02\x02\u03DB\u03D8\x03\x02\x02\x02\u03DB\u03D9" +
		"\x03\x02\x02\x02\u03DC\xC3\x03\x02\x02\x02\u03DD\u03DE\x05b2\x02\u03DE" +
		"\u03DF\x07\n\x02\x02\u03DF\u03E0\x07\xB7\x02\x02\u03E0\u03EE\x03\x02\x02" +
		"\x02\u03E1\u03E2\x05b2\x02\u03E2\u03E3\x07\f\x02\x02\u03E3\u03E4\x07\xB7" +
		"\x02\x02\u03E4\u03EE\x03\x02\x02\x02\u03E5\u03E6\x05b2\x02\u03E6\u03E7" +
		"\x07\r\x02\x02\u03E7\u03E8\x07\xB7\x02\x02\u03E8\u03EE\x03\x02\x02\x02" +
		"\u03E9\u03EA\x05b2\x02\u03EA\u03EB\x07\v\x02\x02\u03EB\u03EC\x07\xB7\x02" +
		"\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03DD\x03\x02\x02\x02\u03ED\u03E1" +
		"\x03\x02\x02\x02\u03ED\u03E5\x03\x02\x02\x02\u03ED\u03E9\x03\x02\x02\x02" +
		"\u03EE\xC5\x03\x02\x02\x02U\xD0\xD7\xE7\xE9\xF9\xFE\u010F\u0111\u011C" +
		"\u0122\u012D\u0132\u0139\u0141\u0147\u0152\u0160\u0168\u016D\u0173\u0178" +
		"\u017E\u0183\u018B\u0190\u0196\u019B\u01A3\u01AB\u01B3\u01BB\u01C3\u01CB" +
		"\u01D6\u01DE\u01E7\u01F8\u01FF\u020A\u0218\u0220\u022D\u0249\u024B\u0265" +
		"\u026B\u027A\u0284\u02A4\u02B1\u02BB\u02BD\u02C4\u02C9\u02D1\u02DE\u02ED" +
		"\u02F3\u02FF\u0309\u0310\u0318\u0320\u0324\u032C\u0335\u033C\u0349\u0351" +
		"\u035F\u0367\u0370\u037B\u0385\u039D\u03A1\u03A5\u03AE\u03BC\u03C2\u03CB" +
		"\u03DB\u03ED";
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


export class Extension_statement_listContext extends ParserRuleContext {
	public extension_statement_list(): Extension_statement_listContext | undefined {
		return this.tryGetRuleContext(0, Extension_statement_listContext);
	}
	public extension_statement(): Extension_statementContext | undefined {
		return this.tryGetRuleContext(0, Extension_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GLSLParser.RULE_extension_statement_list; }
	// @Override
	public enterRule(listener: GLSLListener): void {
		if (listener.enterExtension_statement_list) {
			listener.enterExtension_statement_list(this);
		}
	}
	// @Override
	public exitRule(listener: GLSLListener): void {
		if (listener.exitExtension_statement_list) {
			listener.exitExtension_statement_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GLSLVisitor<Result>): Result {
		if (visitor.visitExtension_statement_list) {
			return visitor.visitExtension_statement_list(this);
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
	public _prefix: External_declaration_listContext;
	public _single: External_declarationContext;
	public _lastDecl: External_declarationContext;
	public _lastExtension: Extension_statementContext;
	public external_declaration(): External_declarationContext | undefined {
		return this.tryGetRuleContext(0, External_declarationContext);
	}
	public external_declaration_list(): External_declaration_listContext | undefined {
		return this.tryGetRuleContext(0, External_declaration_listContext);
	}
	public extension_statement(): Extension_statementContext | undefined {
		return this.tryGetRuleContext(0, Extension_statementContext);
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


