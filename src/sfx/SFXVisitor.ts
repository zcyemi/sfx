// Generated from ../../grammar/SFX.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { File_nameContext } from "./SFXParser";
import { File_folderContext } from "./SFXParser";
import { File_pathContext } from "./SFXParser";
import { Stat_fileContext } from "./SFXParser";
import { Stat_include_baseContext } from "./SFXParser";
import { Stat_include_libContext } from "./SFXParser";
import { Stat_includeContext } from "./SFXParser";
import { Stat_includesContext } from "./SFXParser";
import { Teq_stat_vsContext } from "./SFXParser";
import { Teq_stat_psContext } from "./SFXParser";
import { Pipe_exprContext } from "./SFXParser";
import { Pipe_exprsContext } from "./SFXParser";
import { Pipe_statContext } from "./SFXParser";
import { Pipe_bodyContext } from "./SFXParser";
import { Teq_stat_pipelineContext } from "./SFXParser";
import { Prop_decContext } from "./SFXParser";
import { Prop_bodyContext } from "./SFXParser";
import { Teq_stat_propContext } from "./SFXParser";
import { Teq_statContext } from "./SFXParser";
import { Teq_bodyContext } from "./SFXParser";
import { Teq_defContext } from "./SFXParser";
import { Teq_definesContext } from "./SFXParser";
import { Program_statContext } from "./SFXParser";
import { Program_statsContext } from "./SFXParser";
import { ProgramContext } from "./SFXParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SFXParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SFXVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SFXParser.file_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_name?: (ctx: File_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.file_folder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_folder?: (ctx: File_folderContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.file_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_path?: (ctx: File_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.stat_file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_file?: (ctx: Stat_fileContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.stat_include_base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_include_base?: (ctx: Stat_include_baseContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.stat_include_lib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_include_lib?: (ctx: Stat_include_libContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.stat_include`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_include?: (ctx: Stat_includeContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.stat_includes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_includes?: (ctx: Stat_includesContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_stat_vs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_stat_vs?: (ctx: Teq_stat_vsContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_stat_ps`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_stat_ps?: (ctx: Teq_stat_psContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.pipe_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipe_expr?: (ctx: Pipe_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.pipe_exprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipe_exprs?: (ctx: Pipe_exprsContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.pipe_stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipe_stat?: (ctx: Pipe_statContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.pipe_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipe_body?: (ctx: Pipe_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_stat_pipeline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_stat_pipeline?: (ctx: Teq_stat_pipelineContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.prop_dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProp_dec?: (ctx: Prop_decContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.prop_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProp_body?: (ctx: Prop_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_stat_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_stat_prop?: (ctx: Teq_stat_propContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_stat?: (ctx: Teq_statContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_body?: (ctx: Teq_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_def?: (ctx: Teq_defContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.teq_defines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeq_defines?: (ctx: Teq_definesContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.program_stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram_stat?: (ctx: Program_statContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.program_stats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram_stats?: (ctx: Program_statsContext) => Result;

	/**
	 * Visit a parse tree produced by `SFXParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
}

