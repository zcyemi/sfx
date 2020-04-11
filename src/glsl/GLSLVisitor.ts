// Generated from ../../grammar/GLSL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GLSLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GLSLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GLSLParser.pragma_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPragma_statement?: (ctx: Pragma_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.extension_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtension_statement?: (ctx: Extension_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.external_declaration_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternal_declaration_list?: (ctx: External_declaration_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.variable_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_identifier?: (ctx: Variable_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_expression?: (ctx: Postfix_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.integer_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_expression?: (ctx: Integer_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_call_generic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_generic?: (ctx: Function_call_genericContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_call_header_no_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_header_no_parameters?: (ctx: Function_call_header_no_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_call_header_with_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_header_with_parameters?: (ctx: Function_call_header_with_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_call_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_header?: (ctx: Function_call_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_identifier?: (ctx: Function_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.method_call_generic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call_generic?: (ctx: Method_call_genericContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.method_call_header_no_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call_header_no_parameters?: (ctx: Method_call_header_no_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.method_call_header_with_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call_header_with_parameters?: (ctx: Method_call_header_with_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.method_call_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call_header?: (ctx: Method_call_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.shift_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expression?: (ctx: Shift_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expression?: (ctx: And_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.logical_and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_and_expression?: (ctx: Logical_and_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.logical_xor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_xor_expression?: (ctx: Logical_xor_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.logical_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_or_expression?: (ctx: Logical_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.assignment_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_expression?: (ctx: Assignment_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_expression?: (ctx: Constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_prototype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_prototype?: (ctx: Function_prototypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declarator?: (ctx: Function_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_header_with_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_header_with_parameters?: (ctx: Function_header_with_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_header?: (ctx: Function_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.parameter_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declarator?: (ctx: Parameter_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.parameter_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declaration?: (ctx: Parameter_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.parameter_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_qualifier?: (ctx: Parameter_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.parameter_direction_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_direction_qualifier?: (ctx: Parameter_direction_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.parameter_type_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_type_specifier?: (ctx: Parameter_type_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.init_declarator_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_declarator_list?: (ctx: Init_declarator_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.single_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_declaration?: (ctx: Single_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.fully_specified_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFully_specified_type?: (ctx: Fully_specified_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.layout_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayout_qualifier?: (ctx: Layout_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.layout_qualifier_id_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayout_qualifier_id_list?: (ctx: Layout_qualifier_id_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.integer_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_constant?: (ctx: Integer_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.layout_qualifier_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayout_qualifier_id?: (ctx: Layout_qualifier_idContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.interface_block_layout_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_block_layout_qualifier?: (ctx: Interface_block_layout_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.interpolation_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolation_qualifier?: (ctx: Interpolation_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.type_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_qualifier?: (ctx: Type_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.auxiliary_storage_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuxiliary_storage_qualifier?: (ctx: Auxiliary_storage_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.storage_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorage_qualifier?: (ctx: Storage_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.array_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_specifier?: (ctx: Array_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.type_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_specifier?: (ctx: Type_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.type_specifier_nonarray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_specifier_nonarray?: (ctx: Type_specifier_nonarrayContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.builtin_type_specifier_nonarray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltin_type_specifier_nonarray?: (ctx: Builtin_type_specifier_nonarrayContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.precision_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecision_qualifier?: (ctx: Precision_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.struct_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_specifier?: (ctx: Struct_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.member_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_list?: (ctx: Member_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_declaration?: (ctx: Member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.struct_declarator_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_declarator_list?: (ctx: Struct_declarator_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.struct_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_declarator?: (ctx: Struct_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.initializer_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_list?: (ctx: Initializer_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.declaration_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_statement?: (ctx: Declaration_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.simple_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_statement?: (ctx: Simple_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.compound_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_statement?: (ctx: Compound_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.statement_no_new_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_no_new_scope?: (ctx: Statement_no_new_scopeContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.compound_statement_no_new_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_statement_no_new_scope?: (ctx: Compound_statement_no_new_scopeContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.statement_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_list?: (ctx: Statement_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.expression_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_statement?: (ctx: Expression_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.selection_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelection_statement?: (ctx: Selection_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.selection_rest_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelection_rest_statement?: (ctx: Selection_rest_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.switch_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_statement?: (ctx: Switch_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.switch_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_body?: (ctx: Switch_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.case_label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_label?: (ctx: Case_labelContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.case_label_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_label_list?: (ctx: Case_label_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.case_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_statement?: (ctx: Case_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.case_statement_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_statement_list?: (ctx: Case_statement_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.iteration_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIteration_statement?: (ctx: Iteration_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.for_init_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_init_statement?: (ctx: For_init_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.conditionopt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionopt?: (ctx: ConditionoptContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.for_rest_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_rest_statement?: (ctx: For_rest_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.jump_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_statement?: (ctx: Jump_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.external_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternal_declaration?: (ctx: External_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.function_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition?: (ctx: Function_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.interface_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_block?: (ctx: Interface_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.basic_interface_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasic_interface_block?: (ctx: Basic_interface_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.interface_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_qualifier?: (ctx: Interface_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.instance_name_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstance_name_opt?: (ctx: Instance_name_optContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.layout_defaults`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayout_defaults?: (ctx: Layout_defaultsContext) => Result;

	/**
	 * Visit a parse tree produced by `GLSLParser.preprocessor_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessor_statement?: (ctx: Preprocessor_statementContext) => Result;
}

