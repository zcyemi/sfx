// Generated from ../../grammar/GLSL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Pragma_statementContext } from "./GLSLParser";
import { Extension_statementContext } from "./GLSLParser";
import { External_declaration_listContext } from "./GLSLParser";
import { Variable_identifierContext } from "./GLSLParser";
import { Primary_expressionContext } from "./GLSLParser";
import { Postfix_expressionContext } from "./GLSLParser";
import { Integer_expressionContext } from "./GLSLParser";
import { Function_call_genericContext } from "./GLSLParser";
import { Function_call_header_no_parametersContext } from "./GLSLParser";
import { Function_call_header_with_parametersContext } from "./GLSLParser";
import { Function_call_headerContext } from "./GLSLParser";
import { Function_identifierContext } from "./GLSLParser";
import { Method_call_genericContext } from "./GLSLParser";
import { Method_call_header_no_parametersContext } from "./GLSLParser";
import { Method_call_header_with_parametersContext } from "./GLSLParser";
import { Method_call_headerContext } from "./GLSLParser";
import { Unary_expressionContext } from "./GLSLParser";
import { Unary_operatorContext } from "./GLSLParser";
import { Multiplicative_expressionContext } from "./GLSLParser";
import { Additive_expressionContext } from "./GLSLParser";
import { Shift_expressionContext } from "./GLSLParser";
import { Relational_expressionContext } from "./GLSLParser";
import { Equality_expressionContext } from "./GLSLParser";
import { And_expressionContext } from "./GLSLParser";
import { Exclusive_or_expressionContext } from "./GLSLParser";
import { Inclusive_or_expressionContext } from "./GLSLParser";
import { Logical_and_expressionContext } from "./GLSLParser";
import { Logical_xor_expressionContext } from "./GLSLParser";
import { Logical_or_expressionContext } from "./GLSLParser";
import { Conditional_expressionContext } from "./GLSLParser";
import { Assignment_expressionContext } from "./GLSLParser";
import { Assignment_operatorContext } from "./GLSLParser";
import { ExpressionContext } from "./GLSLParser";
import { Constant_expressionContext } from "./GLSLParser";
import { DeclarationContext } from "./GLSLParser";
import { Function_prototypeContext } from "./GLSLParser";
import { Function_declaratorContext } from "./GLSLParser";
import { Function_header_with_parametersContext } from "./GLSLParser";
import { Function_headerContext } from "./GLSLParser";
import { Parameter_declaratorContext } from "./GLSLParser";
import { Parameter_declarationContext } from "./GLSLParser";
import { Parameter_qualifierContext } from "./GLSLParser";
import { Parameter_direction_qualifierContext } from "./GLSLParser";
import { Parameter_type_specifierContext } from "./GLSLParser";
import { Init_declarator_listContext } from "./GLSLParser";
import { Single_declarationContext } from "./GLSLParser";
import { Fully_specified_typeContext } from "./GLSLParser";
import { Layout_qualifierContext } from "./GLSLParser";
import { Layout_qualifier_id_listContext } from "./GLSLParser";
import { Integer_constantContext } from "./GLSLParser";
import { Layout_qualifier_idContext } from "./GLSLParser";
import { Interface_block_layout_qualifierContext } from "./GLSLParser";
import { Interpolation_qualifierContext } from "./GLSLParser";
import { Type_qualifierContext } from "./GLSLParser";
import { Auxiliary_storage_qualifierContext } from "./GLSLParser";
import { Storage_qualifierContext } from "./GLSLParser";
import { Array_specifierContext } from "./GLSLParser";
import { Type_specifierContext } from "./GLSLParser";
import { Type_specifier_nonarrayContext } from "./GLSLParser";
import { Builtin_type_specifier_nonarrayContext } from "./GLSLParser";
import { Precision_qualifierContext } from "./GLSLParser";
import { Struct_specifierContext } from "./GLSLParser";
import { Member_listContext } from "./GLSLParser";
import { Member_declarationContext } from "./GLSLParser";
import { Struct_declarator_listContext } from "./GLSLParser";
import { Struct_declaratorContext } from "./GLSLParser";
import { InitializerContext } from "./GLSLParser";
import { Initializer_listContext } from "./GLSLParser";
import { Declaration_statementContext } from "./GLSLParser";
import { StatementContext } from "./GLSLParser";
import { Simple_statementContext } from "./GLSLParser";
import { Compound_statementContext } from "./GLSLParser";
import { Statement_no_new_scopeContext } from "./GLSLParser";
import { Compound_statement_no_new_scopeContext } from "./GLSLParser";
import { Statement_listContext } from "./GLSLParser";
import { Expression_statementContext } from "./GLSLParser";
import { Selection_statementContext } from "./GLSLParser";
import { Selection_rest_statementContext } from "./GLSLParser";
import { ConditionContext } from "./GLSLParser";
import { Switch_statementContext } from "./GLSLParser";
import { Switch_bodyContext } from "./GLSLParser";
import { Case_labelContext } from "./GLSLParser";
import { Case_label_listContext } from "./GLSLParser";
import { Case_statementContext } from "./GLSLParser";
import { Case_statement_listContext } from "./GLSLParser";
import { Iteration_statementContext } from "./GLSLParser";
import { For_init_statementContext } from "./GLSLParser";
import { ConditionoptContext } from "./GLSLParser";
import { For_rest_statementContext } from "./GLSLParser";
import { Jump_statementContext } from "./GLSLParser";
import { External_declarationContext } from "./GLSLParser";
import { Function_definitionContext } from "./GLSLParser";
import { Interface_blockContext } from "./GLSLParser";
import { Basic_interface_blockContext } from "./GLSLParser";
import { Interface_qualifierContext } from "./GLSLParser";
import { Instance_name_optContext } from "./GLSLParser";
import { Layout_defaultsContext } from "./GLSLParser";
import { Preprocessor_statementContext } from "./GLSLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GLSLParser`.
 */
export interface GLSLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GLSLParser.pragma_statement`.
	 * @param ctx the parse tree
	 */
	enterPragma_statement?: (ctx: Pragma_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.pragma_statement`.
	 * @param ctx the parse tree
	 */
	exitPragma_statement?: (ctx: Pragma_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.extension_statement`.
	 * @param ctx the parse tree
	 */
	enterExtension_statement?: (ctx: Extension_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.extension_statement`.
	 * @param ctx the parse tree
	 */
	exitExtension_statement?: (ctx: Extension_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.external_declaration_list`.
	 * @param ctx the parse tree
	 */
	enterExternal_declaration_list?: (ctx: External_declaration_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.external_declaration_list`.
	 * @param ctx the parse tree
	 */
	exitExternal_declaration_list?: (ctx: External_declaration_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterVariable_identifier?: (ctx: Variable_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitVariable_identifier?: (ctx: Variable_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_expression?: (ctx: Postfix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_expression?: (ctx: Postfix_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.integer_expression`.
	 * @param ctx the parse tree
	 */
	enterInteger_expression?: (ctx: Integer_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.integer_expression`.
	 * @param ctx the parse tree
	 */
	exitInteger_expression?: (ctx: Integer_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_call_generic`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_generic?: (ctx: Function_call_genericContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_call_generic`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_generic?: (ctx: Function_call_genericContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_call_header_no_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_header_no_parameters?: (ctx: Function_call_header_no_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_call_header_no_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_header_no_parameters?: (ctx: Function_call_header_no_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_call_header_with_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_header_with_parameters?: (ctx: Function_call_header_with_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_call_header_with_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_header_with_parameters?: (ctx: Function_call_header_with_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_call_header`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_header?: (ctx: Function_call_headerContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_call_header`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_header?: (ctx: Function_call_headerContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_identifier`.
	 * @param ctx the parse tree
	 */
	enterFunction_identifier?: (ctx: Function_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_identifier`.
	 * @param ctx the parse tree
	 */
	exitFunction_identifier?: (ctx: Function_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.method_call_generic`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_generic?: (ctx: Method_call_genericContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.method_call_generic`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_generic?: (ctx: Method_call_genericContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.method_call_header_no_parameters`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_header_no_parameters?: (ctx: Method_call_header_no_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.method_call_header_no_parameters`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_header_no_parameters?: (ctx: Method_call_header_no_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.method_call_header_with_parameters`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_header_with_parameters?: (ctx: Method_call_header_with_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.method_call_header_with_parameters`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_header_with_parameters?: (ctx: Method_call_header_with_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.method_call_header`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_header?: (ctx: Method_call_headerContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.method_call_header`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_header?: (ctx: Method_call_headerContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	enterShift_expression?: (ctx: Shift_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	exitShift_expression?: (ctx: Shift_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.and_expression`.
	 * @param ctx the parse tree
	 */
	enterAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.and_expression`.
	 * @param ctx the parse tree
	 */
	exitAnd_expression?: (ctx: And_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.logical_and_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.logical_and_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.logical_xor_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_xor_expression?: (ctx: Logical_xor_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.logical_xor_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_xor_expression?: (ctx: Logical_xor_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.logical_or_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.logical_or_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	enterAssignment_expression?: (ctx: Assignment_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	exitAssignment_expression?: (ctx: Assignment_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	enterFunction_prototype?: (ctx: Function_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	exitFunction_prototype?: (ctx: Function_prototypeContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_declarator`.
	 * @param ctx the parse tree
	 */
	enterFunction_declarator?: (ctx: Function_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_declarator`.
	 * @param ctx the parse tree
	 */
	exitFunction_declarator?: (ctx: Function_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_header_with_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_header_with_parameters?: (ctx: Function_header_with_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_header_with_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_header_with_parameters?: (ctx: Function_header_with_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_header`.
	 * @param ctx the parse tree
	 */
	enterFunction_header?: (ctx: Function_headerContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_header`.
	 * @param ctx the parse tree
	 */
	exitFunction_header?: (ctx: Function_headerContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.parameter_declarator`.
	 * @param ctx the parse tree
	 */
	enterParameter_declarator?: (ctx: Parameter_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.parameter_declarator`.
	 * @param ctx the parse tree
	 */
	exitParameter_declarator?: (ctx: Parameter_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?: (ctx: Parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?: (ctx: Parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.parameter_qualifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_qualifier?: (ctx: Parameter_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.parameter_qualifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_qualifier?: (ctx: Parameter_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.parameter_direction_qualifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_direction_qualifier?: (ctx: Parameter_direction_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.parameter_direction_qualifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_direction_qualifier?: (ctx: Parameter_direction_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.parameter_type_specifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_type_specifier?: (ctx: Parameter_type_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.parameter_type_specifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_type_specifier?: (ctx: Parameter_type_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.init_declarator_list`.
	 * @param ctx the parse tree
	 */
	enterInit_declarator_list?: (ctx: Init_declarator_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.init_declarator_list`.
	 * @param ctx the parse tree
	 */
	exitInit_declarator_list?: (ctx: Init_declarator_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.single_declaration`.
	 * @param ctx the parse tree
	 */
	enterSingle_declaration?: (ctx: Single_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.single_declaration`.
	 * @param ctx the parse tree
	 */
	exitSingle_declaration?: (ctx: Single_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.fully_specified_type`.
	 * @param ctx the parse tree
	 */
	enterFully_specified_type?: (ctx: Fully_specified_typeContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.fully_specified_type`.
	 * @param ctx the parse tree
	 */
	exitFully_specified_type?: (ctx: Fully_specified_typeContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.layout_qualifier`.
	 * @param ctx the parse tree
	 */
	enterLayout_qualifier?: (ctx: Layout_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.layout_qualifier`.
	 * @param ctx the parse tree
	 */
	exitLayout_qualifier?: (ctx: Layout_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.layout_qualifier_id_list`.
	 * @param ctx the parse tree
	 */
	enterLayout_qualifier_id_list?: (ctx: Layout_qualifier_id_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.layout_qualifier_id_list`.
	 * @param ctx the parse tree
	 */
	exitLayout_qualifier_id_list?: (ctx: Layout_qualifier_id_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.integer_constant`.
	 * @param ctx the parse tree
	 */
	enterInteger_constant?: (ctx: Integer_constantContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.integer_constant`.
	 * @param ctx the parse tree
	 */
	exitInteger_constant?: (ctx: Integer_constantContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.layout_qualifier_id`.
	 * @param ctx the parse tree
	 */
	enterLayout_qualifier_id?: (ctx: Layout_qualifier_idContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.layout_qualifier_id`.
	 * @param ctx the parse tree
	 */
	exitLayout_qualifier_id?: (ctx: Layout_qualifier_idContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.interface_block_layout_qualifier`.
	 * @param ctx the parse tree
	 */
	enterInterface_block_layout_qualifier?: (ctx: Interface_block_layout_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.interface_block_layout_qualifier`.
	 * @param ctx the parse tree
	 */
	exitInterface_block_layout_qualifier?: (ctx: Interface_block_layout_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.interpolation_qualifier`.
	 * @param ctx the parse tree
	 */
	enterInterpolation_qualifier?: (ctx: Interpolation_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.interpolation_qualifier`.
	 * @param ctx the parse tree
	 */
	exitInterpolation_qualifier?: (ctx: Interpolation_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.type_qualifier`.
	 * @param ctx the parse tree
	 */
	enterType_qualifier?: (ctx: Type_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.type_qualifier`.
	 * @param ctx the parse tree
	 */
	exitType_qualifier?: (ctx: Type_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.auxiliary_storage_qualifier`.
	 * @param ctx the parse tree
	 */
	enterAuxiliary_storage_qualifier?: (ctx: Auxiliary_storage_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.auxiliary_storage_qualifier`.
	 * @param ctx the parse tree
	 */
	exitAuxiliary_storage_qualifier?: (ctx: Auxiliary_storage_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.storage_qualifier`.
	 * @param ctx the parse tree
	 */
	enterStorage_qualifier?: (ctx: Storage_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.storage_qualifier`.
	 * @param ctx the parse tree
	 */
	exitStorage_qualifier?: (ctx: Storage_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.array_specifier`.
	 * @param ctx the parse tree
	 */
	enterArray_specifier?: (ctx: Array_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.array_specifier`.
	 * @param ctx the parse tree
	 */
	exitArray_specifier?: (ctx: Array_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	enterType_specifier?: (ctx: Type_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	exitType_specifier?: (ctx: Type_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.type_specifier_nonarray`.
	 * @param ctx the parse tree
	 */
	enterType_specifier_nonarray?: (ctx: Type_specifier_nonarrayContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.type_specifier_nonarray`.
	 * @param ctx the parse tree
	 */
	exitType_specifier_nonarray?: (ctx: Type_specifier_nonarrayContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.builtin_type_specifier_nonarray`.
	 * @param ctx the parse tree
	 */
	enterBuiltin_type_specifier_nonarray?: (ctx: Builtin_type_specifier_nonarrayContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.builtin_type_specifier_nonarray`.
	 * @param ctx the parse tree
	 */
	exitBuiltin_type_specifier_nonarray?: (ctx: Builtin_type_specifier_nonarrayContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.precision_qualifier`.
	 * @param ctx the parse tree
	 */
	enterPrecision_qualifier?: (ctx: Precision_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.precision_qualifier`.
	 * @param ctx the parse tree
	 */
	exitPrecision_qualifier?: (ctx: Precision_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.struct_specifier`.
	 * @param ctx the parse tree
	 */
	enterStruct_specifier?: (ctx: Struct_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.struct_specifier`.
	 * @param ctx the parse tree
	 */
	exitStruct_specifier?: (ctx: Struct_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.member_list`.
	 * @param ctx the parse tree
	 */
	enterMember_list?: (ctx: Member_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.member_list`.
	 * @param ctx the parse tree
	 */
	exitMember_list?: (ctx: Member_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.member_declaration`.
	 * @param ctx the parse tree
	 */
	enterMember_declaration?: (ctx: Member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.member_declaration`.
	 * @param ctx the parse tree
	 */
	exitMember_declaration?: (ctx: Member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.struct_declarator_list`.
	 * @param ctx the parse tree
	 */
	enterStruct_declarator_list?: (ctx: Struct_declarator_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.struct_declarator_list`.
	 * @param ctx the parse tree
	 */
	exitStruct_declarator_list?: (ctx: Struct_declarator_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.struct_declarator`.
	 * @param ctx the parse tree
	 */
	enterStruct_declarator?: (ctx: Struct_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.struct_declarator`.
	 * @param ctx the parse tree
	 */
	exitStruct_declarator?: (ctx: Struct_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.initializer_list`.
	 * @param ctx the parse tree
	 */
	enterInitializer_list?: (ctx: Initializer_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.initializer_list`.
	 * @param ctx the parse tree
	 */
	exitInitializer_list?: (ctx: Initializer_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.declaration_statement`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_statement?: (ctx: Declaration_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.declaration_statement`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_statement?: (ctx: Declaration_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.simple_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_statement?: (ctx: Simple_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.simple_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_statement?: (ctx: Simple_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement?: (ctx: Compound_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement?: (ctx: Compound_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.statement_no_new_scope`.
	 * @param ctx the parse tree
	 */
	enterStatement_no_new_scope?: (ctx: Statement_no_new_scopeContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.statement_no_new_scope`.
	 * @param ctx the parse tree
	 */
	exitStatement_no_new_scope?: (ctx: Statement_no_new_scopeContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.compound_statement_no_new_scope`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement_no_new_scope?: (ctx: Compound_statement_no_new_scopeContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.compound_statement_no_new_scope`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement_no_new_scope?: (ctx: Compound_statement_no_new_scopeContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.statement_list`.
	 * @param ctx the parse tree
	 */
	enterStatement_list?: (ctx: Statement_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.statement_list`.
	 * @param ctx the parse tree
	 */
	exitStatement_list?: (ctx: Statement_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	enterExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	exitExpression_statement?: (ctx: Expression_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	enterSelection_statement?: (ctx: Selection_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	exitSelection_statement?: (ctx: Selection_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.selection_rest_statement`.
	 * @param ctx the parse tree
	 */
	enterSelection_rest_statement?: (ctx: Selection_rest_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.selection_rest_statement`.
	 * @param ctx the parse tree
	 */
	exitSelection_rest_statement?: (ctx: Selection_rest_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.switch_statement`.
	 * @param ctx the parse tree
	 */
	enterSwitch_statement?: (ctx: Switch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.switch_statement`.
	 * @param ctx the parse tree
	 */
	exitSwitch_statement?: (ctx: Switch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.switch_body`.
	 * @param ctx the parse tree
	 */
	enterSwitch_body?: (ctx: Switch_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.switch_body`.
	 * @param ctx the parse tree
	 */
	exitSwitch_body?: (ctx: Switch_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.case_label`.
	 * @param ctx the parse tree
	 */
	enterCase_label?: (ctx: Case_labelContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.case_label`.
	 * @param ctx the parse tree
	 */
	exitCase_label?: (ctx: Case_labelContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.case_label_list`.
	 * @param ctx the parse tree
	 */
	enterCase_label_list?: (ctx: Case_label_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.case_label_list`.
	 * @param ctx the parse tree
	 */
	exitCase_label_list?: (ctx: Case_label_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?: (ctx: Case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?: (ctx: Case_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.case_statement_list`.
	 * @param ctx the parse tree
	 */
	enterCase_statement_list?: (ctx: Case_statement_listContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.case_statement_list`.
	 * @param ctx the parse tree
	 */
	exitCase_statement_list?: (ctx: Case_statement_listContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	enterIteration_statement?: (ctx: Iteration_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	exitIteration_statement?: (ctx: Iteration_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.for_init_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_init_statement?: (ctx: For_init_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.for_init_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_init_statement?: (ctx: For_init_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.conditionopt`.
	 * @param ctx the parse tree
	 */
	enterConditionopt?: (ctx: ConditionoptContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.conditionopt`.
	 * @param ctx the parse tree
	 */
	exitConditionopt?: (ctx: ConditionoptContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.for_rest_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_rest_statement?: (ctx: For_rest_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.for_rest_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_rest_statement?: (ctx: For_rest_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	enterJump_statement?: (ctx: Jump_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	exitJump_statement?: (ctx: Jump_statementContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.external_declaration`.
	 * @param ctx the parse tree
	 */
	enterExternal_declaration?: (ctx: External_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.external_declaration`.
	 * @param ctx the parse tree
	 */
	exitExternal_declaration?: (ctx: External_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.function_definition`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition?: (ctx: Function_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.function_definition`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition?: (ctx: Function_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.interface_block`.
	 * @param ctx the parse tree
	 */
	enterInterface_block?: (ctx: Interface_blockContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.interface_block`.
	 * @param ctx the parse tree
	 */
	exitInterface_block?: (ctx: Interface_blockContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.basic_interface_block`.
	 * @param ctx the parse tree
	 */
	enterBasic_interface_block?: (ctx: Basic_interface_blockContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.basic_interface_block`.
	 * @param ctx the parse tree
	 */
	exitBasic_interface_block?: (ctx: Basic_interface_blockContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.interface_qualifier`.
	 * @param ctx the parse tree
	 */
	enterInterface_qualifier?: (ctx: Interface_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.interface_qualifier`.
	 * @param ctx the parse tree
	 */
	exitInterface_qualifier?: (ctx: Interface_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.instance_name_opt`.
	 * @param ctx the parse tree
	 */
	enterInstance_name_opt?: (ctx: Instance_name_optContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.instance_name_opt`.
	 * @param ctx the parse tree
	 */
	exitInstance_name_opt?: (ctx: Instance_name_optContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.layout_defaults`.
	 * @param ctx the parse tree
	 */
	enterLayout_defaults?: (ctx: Layout_defaultsContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.layout_defaults`.
	 * @param ctx the parse tree
	 */
	exitLayout_defaults?: (ctx: Layout_defaultsContext) => void;

	/**
	 * Enter a parse tree produced by `GLSLParser.preprocessor_statement`.
	 * @param ctx the parse tree
	 */
	enterPreprocessor_statement?: (ctx: Preprocessor_statementContext) => void;
	/**
	 * Exit a parse tree produced by `GLSLParser.preprocessor_statement`.
	 * @param ctx the parse tree
	 */
	exitPreprocessor_statement?: (ctx: Preprocessor_statementContext) => void;
}

