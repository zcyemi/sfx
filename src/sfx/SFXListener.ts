// Generated from ../../grammar/SFX.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SFXParser`.
 */
export interface SFXListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SFXParser.file_name`.
	 * @param ctx the parse tree
	 */
	enterFile_name?: (ctx: File_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.file_name`.
	 * @param ctx the parse tree
	 */
	exitFile_name?: (ctx: File_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.file_folder`.
	 * @param ctx the parse tree
	 */
	enterFile_folder?: (ctx: File_folderContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.file_folder`.
	 * @param ctx the parse tree
	 */
	exitFile_folder?: (ctx: File_folderContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.file_path`.
	 * @param ctx the parse tree
	 */
	enterFile_path?: (ctx: File_pathContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.file_path`.
	 * @param ctx the parse tree
	 */
	exitFile_path?: (ctx: File_pathContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.stat_file`.
	 * @param ctx the parse tree
	 */
	enterStat_file?: (ctx: Stat_fileContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.stat_file`.
	 * @param ctx the parse tree
	 */
	exitStat_file?: (ctx: Stat_fileContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.stat_include_base`.
	 * @param ctx the parse tree
	 */
	enterStat_include_base?: (ctx: Stat_include_baseContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.stat_include_base`.
	 * @param ctx the parse tree
	 */
	exitStat_include_base?: (ctx: Stat_include_baseContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.stat_include_lib`.
	 * @param ctx the parse tree
	 */
	enterStat_include_lib?: (ctx: Stat_include_libContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.stat_include_lib`.
	 * @param ctx the parse tree
	 */
	exitStat_include_lib?: (ctx: Stat_include_libContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.stat_include`.
	 * @param ctx the parse tree
	 */
	enterStat_include?: (ctx: Stat_includeContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.stat_include`.
	 * @param ctx the parse tree
	 */
	exitStat_include?: (ctx: Stat_includeContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.stat_includes`.
	 * @param ctx the parse tree
	 */
	enterStat_includes?: (ctx: Stat_includesContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.stat_includes`.
	 * @param ctx the parse tree
	 */
	exitStat_includes?: (ctx: Stat_includesContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_stat_vs`.
	 * @param ctx the parse tree
	 */
	enterTeq_stat_vs?: (ctx: Teq_stat_vsContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_stat_vs`.
	 * @param ctx the parse tree
	 */
	exitTeq_stat_vs?: (ctx: Teq_stat_vsContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_stat_ps`.
	 * @param ctx the parse tree
	 */
	enterTeq_stat_ps?: (ctx: Teq_stat_psContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_stat_ps`.
	 * @param ctx the parse tree
	 */
	exitTeq_stat_ps?: (ctx: Teq_stat_psContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.pipe_expr`.
	 * @param ctx the parse tree
	 */
	enterPipe_expr?: (ctx: Pipe_exprContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.pipe_expr`.
	 * @param ctx the parse tree
	 */
	exitPipe_expr?: (ctx: Pipe_exprContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.pipe_exprs`.
	 * @param ctx the parse tree
	 */
	enterPipe_exprs?: (ctx: Pipe_exprsContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.pipe_exprs`.
	 * @param ctx the parse tree
	 */
	exitPipe_exprs?: (ctx: Pipe_exprsContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.pipe_stat`.
	 * @param ctx the parse tree
	 */
	enterPipe_stat?: (ctx: Pipe_statContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.pipe_stat`.
	 * @param ctx the parse tree
	 */
	exitPipe_stat?: (ctx: Pipe_statContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.pipe_body`.
	 * @param ctx the parse tree
	 */
	enterPipe_body?: (ctx: Pipe_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.pipe_body`.
	 * @param ctx the parse tree
	 */
	exitPipe_body?: (ctx: Pipe_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_stat_pipeline`.
	 * @param ctx the parse tree
	 */
	enterTeq_stat_pipeline?: (ctx: Teq_stat_pipelineContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_stat_pipeline`.
	 * @param ctx the parse tree
	 */
	exitTeq_stat_pipeline?: (ctx: Teq_stat_pipelineContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.prop_dec`.
	 * @param ctx the parse tree
	 */
	enterProp_dec?: (ctx: Prop_decContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.prop_dec`.
	 * @param ctx the parse tree
	 */
	exitProp_dec?: (ctx: Prop_decContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.prop_body`.
	 * @param ctx the parse tree
	 */
	enterProp_body?: (ctx: Prop_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.prop_body`.
	 * @param ctx the parse tree
	 */
	exitProp_body?: (ctx: Prop_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_stat_prop`.
	 * @param ctx the parse tree
	 */
	enterTeq_stat_prop?: (ctx: Teq_stat_propContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_stat_prop`.
	 * @param ctx the parse tree
	 */
	exitTeq_stat_prop?: (ctx: Teq_stat_propContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_stat`.
	 * @param ctx the parse tree
	 */
	enterTeq_stat?: (ctx: Teq_statContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_stat`.
	 * @param ctx the parse tree
	 */
	exitTeq_stat?: (ctx: Teq_statContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_body`.
	 * @param ctx the parse tree
	 */
	enterTeq_body?: (ctx: Teq_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_body`.
	 * @param ctx the parse tree
	 */
	exitTeq_body?: (ctx: Teq_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_def`.
	 * @param ctx the parse tree
	 */
	enterTeq_def?: (ctx: Teq_defContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_def`.
	 * @param ctx the parse tree
	 */
	exitTeq_def?: (ctx: Teq_defContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.teq_defines`.
	 * @param ctx the parse tree
	 */
	enterTeq_defines?: (ctx: Teq_definesContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.teq_defines`.
	 * @param ctx the parse tree
	 */
	exitTeq_defines?: (ctx: Teq_definesContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.program_stat`.
	 * @param ctx the parse tree
	 */
	enterProgram_stat?: (ctx: Program_statContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.program_stat`.
	 * @param ctx the parse tree
	 */
	exitProgram_stat?: (ctx: Program_statContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.program_stats`.
	 * @param ctx the parse tree
	 */
	enterProgram_stats?: (ctx: Program_statsContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.program_stats`.
	 * @param ctx the parse tree
	 */
	exitProgram_stats?: (ctx: Program_statsContext) => void;

	/**
	 * Enter a parse tree produced by `SFXParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SFXParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
}

