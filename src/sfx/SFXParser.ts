// Generated from ../../grammar/SFX.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { SFXListener } from "./SFXListener";
import { SFXVisitor } from "./SFXVisitor";


export class SFXParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly GLSL = 8;
	public static readonly SFX_FILE = 9;
	public static readonly SFX_INCLUDE = 10;
	public static readonly SFX_TECHNIQUE = 11;
	public static readonly SFX_LBRACE = 12;
	public static readonly SFX_RBRACE = 13;
	public static readonly SFX_VS = 14;
	public static readonly SFX_PS = 15;
	public static readonly SFX_PIPELINE = 16;
	public static readonly SFX_PROPERTY = 17;
	public static readonly SFX_PIPE_PROP = 18;
	public static readonly SFX_SEMANTIC_TYPE = 19;
	public static readonly SFX_EXT = 20;
	public static readonly SFX_SEMANTIC = 21;
	public static readonly SFX_IDENTIFIER = 22;
	public static readonly COMMENT = 23;
	public static readonly WS = 24;
	public static readonly EOL = 25;
	public static readonly RULE_file_name = 0;
	public static readonly RULE_file_folder = 1;
	public static readonly RULE_file_path = 2;
	public static readonly RULE_stat_file = 3;
	public static readonly RULE_stat_include_base = 4;
	public static readonly RULE_stat_include_lib = 5;
	public static readonly RULE_stat_include = 6;
	public static readonly RULE_stat_includes = 7;
	public static readonly RULE_teq_stat_vs = 8;
	public static readonly RULE_teq_stat_ps = 9;
	public static readonly RULE_pipe_expr = 10;
	public static readonly RULE_pipe_exprs = 11;
	public static readonly RULE_pipe_stat = 12;
	public static readonly RULE_pipe_body = 13;
	public static readonly RULE_teq_stat_pipeline = 14;
	public static readonly RULE_prop_dec = 15;
	public static readonly RULE_prop_body = 16;
	public static readonly RULE_teq_stat_prop = 17;
	public static readonly RULE_teq_stat = 18;
	public static readonly RULE_teq_body = 19;
	public static readonly RULE_teq_def = 20;
	public static readonly RULE_teq_defines = 21;
	public static readonly RULE_program_stat = 22;
	public static readonly RULE_program_stats = 23;
	public static readonly RULE_program = 24;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file_name", "file_folder", "file_path", "stat_file", "stat_include_base", 
		"stat_include_lib", "stat_include", "stat_includes", "teq_stat_vs", "teq_stat_ps", 
		"pipe_expr", "pipe_exprs", "pipe_stat", "pipe_body", "teq_stat_pipeline", 
		"prop_dec", "prop_body", "teq_stat_prop", "teq_stat", "teq_body", "teq_def", 
		"teq_defines", "program_stat", "program_stats", "program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'/'", "'\"'", "'<'", "'>'", "':'", "';'", "','", undefined, 
		"'#file'", "'#include'", "'technique'", "'{'", "'}'", "'vs'", "'ps'", 
		"'pipeline'", "'property'", undefined, undefined, "'.sfx'", undefined, 
		undefined, undefined, undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "GLSL", "SFX_FILE", "SFX_INCLUDE", "SFX_TECHNIQUE", "SFX_LBRACE", 
		"SFX_RBRACE", "SFX_VS", "SFX_PS", "SFX_PIPELINE", "SFX_PROPERTY", "SFX_PIPE_PROP", 
		"SFX_SEMANTIC_TYPE", "SFX_EXT", "SFX_SEMANTIC", "SFX_IDENTIFIER", "COMMENT", 
		"WS", "EOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SFXParser._LITERAL_NAMES, SFXParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SFXParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SFX.g4"; }

	// @Override
	public get ruleNames(): string[] { return SFXParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SFXParser._serializedATN; }


	   ignoreNewLine:boolean = true;

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SFXParser._ATN, this);
	}
	// @RuleVersion(0)
	public file_name(): File_nameContext {
		let _localctx: File_nameContext = new File_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SFXParser.RULE_file_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(SFXParser.SFX_IDENTIFIER);
			this.state = 51;
			this.match(SFXParser.SFX_EXT);
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
	public file_folder(): File_folderContext {
		let _localctx: File_folderContext = new File_folderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SFXParser.RULE_file_folder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(SFXParser.SFX_IDENTIFIER);
			this.state = 54;
			this.match(SFXParser.T__0);
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
	public file_path(): File_pathContext {
		let _localctx: File_pathContext = new File_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SFXParser.RULE_file_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 56;
					this.file_folder();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 61;
			this.file_name();
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
	public stat_file(): Stat_fileContext {
		let _localctx: Stat_fileContext = new Stat_fileContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SFXParser.RULE_stat_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			 this.ignoreNewLine = false; 
			this.state = 64;
			this.match(SFXParser.SFX_FILE);
			this.state = 65;
			this.file_name();
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
	public stat_include_base(): Stat_include_baseContext {
		let _localctx: Stat_include_baseContext = new Stat_include_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SFXParser.RULE_stat_include_base);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			 this.ignoreNewLine = false; 
			this.state = 68;
			this.match(SFXParser.SFX_INCLUDE);
			this.state = 69;
			this.match(SFXParser.T__1);
			this.state = 70;
			this.file_name();
			this.state = 71;
			this.match(SFXParser.T__1);
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
	public stat_include_lib(): Stat_include_libContext {
		let _localctx: Stat_include_libContext = new Stat_include_libContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SFXParser.RULE_stat_include_lib);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			 this.ignoreNewLine = false; 
			this.state = 74;
			this.match(SFXParser.SFX_INCLUDE);
			this.state = 75;
			this.match(SFXParser.T__2);
			this.state = 76;
			this.file_path();
			this.state = 77;
			this.match(SFXParser.T__3);
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
	public stat_include(): Stat_includeContext {
		let _localctx: Stat_includeContext = new Stat_includeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SFXParser.RULE_stat_include);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.stat_include_lib();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.stat_include_base();
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
	public stat_includes(): Stat_includesContext {
		let _localctx: Stat_includesContext = new Stat_includesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SFXParser.RULE_stat_includes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 83;
					this.stat_include();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public teq_stat_vs(): Teq_stat_vsContext {
		let _localctx: Teq_stat_vsContext = new Teq_stat_vsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SFXParser.RULE_teq_stat_vs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			 this.ignoreNewLine = false;
			this.state = 89;
			this.match(SFXParser.SFX_VS);
			this.state = 90;
			this.match(SFXParser.T__4);
			this.state = 91;
			this.match(SFXParser.SFX_IDENTIFIER);
			this.state = 92;
			this.match(SFXParser.T__5);
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
	public teq_stat_ps(): Teq_stat_psContext {
		let _localctx: Teq_stat_psContext = new Teq_stat_psContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SFXParser.RULE_teq_stat_ps);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			 this.ignoreNewLine = false;
			this.state = 95;
			this.match(SFXParser.SFX_PS);
			this.state = 96;
			this.match(SFXParser.T__4);
			this.state = 97;
			this.match(SFXParser.SFX_IDENTIFIER);
			this.state = 98;
			this.match(SFXParser.T__5);
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
	public pipe_expr(): Pipe_exprContext {
		let _localctx: Pipe_exprContext = new Pipe_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SFXParser.RULE_pipe_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(SFXParser.SFX_IDENTIFIER);
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
	public pipe_exprs(): Pipe_exprsContext {
		let _localctx: Pipe_exprsContext = new Pipe_exprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SFXParser.RULE_pipe_exprs);
		try {
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.pipe_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.pipe_expr();
				this.state = 104;
				this.match(SFXParser.T__6);
				this.state = 105;
				this.pipe_exprs();
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
	public pipe_stat(): Pipe_statContext {
		let _localctx: Pipe_statContext = new Pipe_statContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SFXParser.RULE_pipe_stat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(SFXParser.SFX_PIPE_PROP);
			this.state = 110;
			this.match(SFXParser.T__4);
			this.state = 111;
			this.pipe_exprs();
			this.state = 112;
			this.match(SFXParser.T__5);
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
	public pipe_body(): Pipe_bodyContext {
		let _localctx: Pipe_bodyContext = new Pipe_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SFXParser.RULE_pipe_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 114;
				this.pipe_stat();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SFXParser.SFX_PIPE_PROP);
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
	public teq_stat_pipeline(): Teq_stat_pipelineContext {
		let _localctx: Teq_stat_pipelineContext = new Teq_stat_pipelineContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SFXParser.RULE_teq_stat_pipeline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(SFXParser.SFX_PIPELINE);
			this.state = 120;
			this.match(SFXParser.T__4);
			this.state = 121;
			this.match(SFXParser.SFX_LBRACE);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SFXParser.SFX_PIPE_PROP) {
				{
				this.state = 122;
				this.pipe_body();
				}
			}

			this.state = 125;
			this.match(SFXParser.SFX_RBRACE);
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
	public prop_dec(): Prop_decContext {
		let _localctx: Prop_decContext = new Prop_decContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SFXParser.RULE_prop_dec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(SFXParser.SFX_SEMANTIC);
			this.state = 128;
			this.match(SFXParser.T__4);
			this.state = 129;
			this.match(SFXParser.SFX_IDENTIFIER);
			this.state = 130;
			this.match(SFXParser.T__5);
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
	public prop_body(): Prop_bodyContext {
		let _localctx: Prop_bodyContext = new Prop_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SFXParser.RULE_prop_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 132;
				this.prop_dec();
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SFXParser.SFX_SEMANTIC);
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
	public teq_stat_prop(): Teq_stat_propContext {
		let _localctx: Teq_stat_propContext = new Teq_stat_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SFXParser.RULE_teq_stat_prop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(SFXParser.SFX_PROPERTY);
			this.state = 138;
			this.match(SFXParser.T__4);
			this.state = 139;
			this.match(SFXParser.SFX_LBRACE);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SFXParser.SFX_SEMANTIC) {
				{
				this.state = 140;
				this.prop_body();
				}
			}

			this.state = 143;
			this.match(SFXParser.SFX_RBRACE);
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
	public teq_stat(): Teq_statContext {
		let _localctx: Teq_statContext = new Teq_statContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SFXParser.RULE_teq_stat);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SFXParser.SFX_VS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				this.teq_stat_vs();
				}
				break;
			case SFXParser.SFX_PS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 146;
				this.teq_stat_ps();
				}
				break;
			case SFXParser.SFX_PIPELINE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 147;
				this.teq_stat_pipeline();
				}
				break;
			case SFXParser.SFX_PROPERTY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 148;
				this.teq_stat_prop();
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
	public teq_body(): Teq_bodyContext {
		let _localctx: Teq_bodyContext = new Teq_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SFXParser.RULE_teq_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 151;
				this.teq_stat();
				}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SFXParser.SFX_VS) | (1 << SFXParser.SFX_PS) | (1 << SFXParser.SFX_PIPELINE) | (1 << SFXParser.SFX_PROPERTY))) !== 0));
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
	public teq_def(): Teq_defContext {
		let _localctx: Teq_defContext = new Teq_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SFXParser.RULE_teq_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(SFXParser.SFX_TECHNIQUE);
			this.state = 157;
			this.match(SFXParser.SFX_IDENTIFIER);
			this.state = 158;
			this.match(SFXParser.SFX_LBRACE);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SFXParser.SFX_VS) | (1 << SFXParser.SFX_PS) | (1 << SFXParser.SFX_PIPELINE) | (1 << SFXParser.SFX_PROPERTY))) !== 0)) {
				{
				this.state = 159;
				this.teq_body();
				}
			}

			this.state = 162;
			this.match(SFXParser.SFX_RBRACE);
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
	public teq_defines(): Teq_definesContext {
		let _localctx: Teq_definesContext = new Teq_definesContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SFXParser.RULE_teq_defines);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 164;
					this.teq_def();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public program_stat(): Program_statContext {
		let _localctx: Program_statContext = new Program_statContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SFXParser.RULE_program_stat);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SFXParser.SFX_INCLUDE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.stat_includes();
				}
				break;
			case SFXParser.SFX_TECHNIQUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.teq_defines();
				}
				break;
			case SFXParser.GLSL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
				this.match(SFXParser.GLSL);
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
	public program_stats(): Program_statsContext {
		let _localctx: Program_statsContext = new Program_statsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SFXParser.RULE_program_stats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SFXParser.GLSL) | (1 << SFXParser.SFX_INCLUDE) | (1 << SFXParser.SFX_TECHNIQUE))) !== 0)) {
				{
				{
				this.state = 174;
				this.program_stat();
				}
				}
				this.state = 179;
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
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SFXParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.stat_file();
			this.state = 181;
			this.program_stats();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\xBA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x06\x04<\n\x04\r\x04\x0E\x04=\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05" +
		"\bT\n\b\x03\t\x06\tW\n\t\r\t\x0E\tX\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\rn\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x06" +
		"\x0Fv\n\x0F\r\x0F\x0E\x0Fw\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10~\n" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x06" +
		"\x12\x88\n\x12\r\x12\x0E\x12\x89\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\x90\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\x98" +
		"\n\x14\x03\x15\x06\x15\x9B\n\x15\r\x15\x0E\x15\x9C\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\xA3\n\x16\x03\x16\x03\x16\x03\x17\x06\x17\xA8\n\x17" +
		"\r\x17\x0E\x17\xA9\x03\x18\x03\x18\x03\x18\x05\x18\xAF\n\x18\x03\x19\x07" +
		"\x19\xB2\n\x19\f\x19\x0E\x19\xB5\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x02\x02\x02\x1B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02\x02\x02\x02\xB1\x024\x03\x02" +
		"\x02\x02\x047\x03\x02\x02\x02\x06;\x03\x02\x02\x02\bA\x03\x02\x02\x02" +
		"\nE\x03\x02\x02\x02\fK\x03\x02\x02\x02\x0ES\x03\x02\x02\x02\x10V\x03\x02" +
		"\x02\x02\x12Z\x03\x02\x02\x02\x14`\x03\x02\x02\x02\x16f\x03\x02\x02\x02" +
		"\x18m\x03\x02\x02\x02\x1Ao\x03\x02\x02\x02\x1Cu\x03\x02\x02\x02\x1Ey\x03" +
		"\x02\x02\x02 \x81\x03\x02\x02\x02\"\x87\x03\x02\x02\x02$\x8B\x03\x02\x02" +
		"\x02&\x97\x03\x02\x02\x02(\x9A\x03\x02\x02\x02*\x9E\x03\x02\x02\x02,\xA7" +
		"\x03\x02\x02\x02.\xAE\x03\x02\x02\x020\xB3\x03\x02\x02\x022\xB6\x03\x02" +
		"\x02\x0245\x07\x18\x02\x0256\x07\x16\x02\x026\x03\x03\x02\x02\x0278\x07" +
		"\x18\x02\x0289\x07\x03\x02\x029\x05\x03\x02\x02\x02:<\x05\x04\x03\x02" +
		";:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02" +
		">?\x03\x02\x02\x02?@\x05\x02\x02\x02@\x07\x03\x02\x02\x02AB\b\x05\x01" +
		"\x02BC\x07\v\x02\x02CD\x05\x02\x02\x02D\t\x03\x02\x02\x02EF\b\x06\x01" +
		"\x02FG\x07\f\x02\x02GH\x07\x04\x02\x02HI\x05\x02\x02\x02IJ\x07\x04\x02" +
		"\x02J\v\x03\x02\x02\x02KL\b\x07\x01\x02LM\x07\f\x02\x02MN\x07\x05\x02" +
		"\x02NO\x05\x06\x04\x02OP\x07\x06\x02\x02P\r\x03\x02\x02\x02QT\x05\f\x07" +
		"\x02RT\x05\n\x06\x02SQ\x03\x02\x02\x02SR\x03\x02\x02\x02T\x0F\x03\x02" +
		"\x02\x02UW\x05\x0E\b\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02" +
		"\x02\x02XY\x03\x02\x02\x02Y\x11\x03\x02\x02\x02Z[\b\n\x01\x02[\\\x07\x10" +
		"\x02\x02\\]\x07\x07\x02\x02]^\x07\x18\x02\x02^_\x07\b\x02\x02_\x13\x03" +
		"\x02\x02\x02`a\b\v\x01\x02ab\x07\x11\x02\x02bc\x07\x07\x02\x02cd\x07\x18" +
		"\x02\x02de\x07\b\x02\x02e\x15\x03\x02\x02\x02fg\x07\x18\x02\x02g\x17\x03" +
		"\x02\x02\x02hn\x05\x16\f\x02ij\x05\x16\f\x02jk\x07\t\x02\x02kl\x05\x18" +
		"\r\x02ln\x03\x02\x02\x02mh\x03\x02\x02\x02mi\x03\x02\x02\x02n\x19\x03" +
		"\x02\x02\x02op\x07\x14\x02\x02pq\x07\x07\x02\x02qr\x05\x18\r\x02rs\x07" +
		"\b\x02\x02s\x1B\x03\x02\x02\x02tv\x05\x1A\x0E\x02ut\x03\x02\x02\x02vw" +
		"\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\x1D\x03\x02\x02" +
		"\x02yz\x07\x12\x02\x02z{\x07\x07\x02\x02{}\x07\x0E\x02\x02|~\x05\x1C\x0F" +
		"\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80" +
		"\x07\x0F\x02\x02\x80\x1F\x03\x02\x02\x02\x81\x82\x07\x17\x02\x02\x82\x83" +
		"\x07\x07\x02\x02\x83\x84\x07\x18\x02\x02\x84\x85\x07\b\x02\x02\x85!\x03" +
		"\x02\x02\x02\x86\x88\x05 \x11\x02\x87\x86\x03\x02\x02\x02\x88\x89\x03" +
		"\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A#\x03" +
		"\x02\x02\x02\x8B\x8C\x07\x13\x02\x02\x8C\x8D\x07\x07\x02\x02\x8D\x8F\x07" +
		"\x0E\x02\x02\x8E\x90\x05\"\x12\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03" +
		"\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x07\x0F\x02\x02\x92%\x03" +
		"\x02\x02\x02\x93\x98\x05\x12\n\x02\x94\x98\x05\x14\v\x02\x95\x98\x05\x1E" +
		"\x10\x02\x96\x98\x05$\x13\x02\x97\x93\x03\x02\x02\x02\x97\x94\x03\x02" +
		"\x02\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98\'\x03\x02" +
		"\x02\x02\x99\x9B\x05&\x14\x02\x9A\x99\x03\x02\x02\x02\x9B\x9C\x03\x02" +
		"\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D)\x03\x02" +
		"\x02\x02\x9E\x9F\x07\r\x02\x02\x9F\xA0\x07\x18\x02\x02\xA0\xA2\x07\x0E" +
		"\x02\x02\xA1\xA3\x05(\x15\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\x0F\x02\x02\xA5+\x03\x02" +
		"\x02\x02\xA6\xA8\x05*\x16\x02\xA7\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02" +
		"\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA-\x03\x02" +
		"\x02\x02\xAB\xAF\x05\x10\t\x02\xAC\xAF\x05,\x17\x02\xAD\xAF\x07\n\x02" +
		"\x02\xAE\xAB\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAD\x03\x02\x02" +
		"\x02\xAF/\x03\x02\x02\x02\xB0\xB2\x05.\x18\x02\xB1\xB0\x03\x02\x02\x02" +
		"\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02" +
		"\xB41\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB7\x05\b\x05\x02\xB7" +
		"\xB8\x050\x19\x02\xB83\x03\x02\x02\x02\x10=SXmw}\x89\x8F\x97\x9C\xA2\xA9" +
		"\xAE\xB3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SFXParser.__ATN) {
			SFXParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SFXParser._serializedATN));
		}

		return SFXParser.__ATN;
	}

}

export class File_nameContext extends ParserRuleContext {
	public SFX_IDENTIFIER(): TerminalNode { return this.getToken(SFXParser.SFX_IDENTIFIER, 0); }
	public SFX_EXT(): TerminalNode { return this.getToken(SFXParser.SFX_EXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_file_name; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterFile_name) {
			listener.enterFile_name(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitFile_name) {
			listener.exitFile_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitFile_name) {
			return visitor.visitFile_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_folderContext extends ParserRuleContext {
	public SFX_IDENTIFIER(): TerminalNode { return this.getToken(SFXParser.SFX_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_file_folder; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterFile_folder) {
			listener.enterFile_folder(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitFile_folder) {
			listener.exitFile_folder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitFile_folder) {
			return visitor.visitFile_folder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_pathContext extends ParserRuleContext {
	public file_name(): File_nameContext {
		return this.getRuleContext(0, File_nameContext);
	}
	public file_folder(): File_folderContext[];
	public file_folder(i: number): File_folderContext;
	public file_folder(i?: number): File_folderContext | File_folderContext[] {
		if (i === undefined) {
			return this.getRuleContexts(File_folderContext);
		} else {
			return this.getRuleContext(i, File_folderContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_file_path; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterFile_path) {
			listener.enterFile_path(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitFile_path) {
			listener.exitFile_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitFile_path) {
			return visitor.visitFile_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stat_fileContext extends ParserRuleContext {
	public SFX_FILE(): TerminalNode { return this.getToken(SFXParser.SFX_FILE, 0); }
	public file_name(): File_nameContext {
		return this.getRuleContext(0, File_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_stat_file; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterStat_file) {
			listener.enterStat_file(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitStat_file) {
			listener.exitStat_file(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitStat_file) {
			return visitor.visitStat_file(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stat_include_baseContext extends ParserRuleContext {
	public SFX_INCLUDE(): TerminalNode { return this.getToken(SFXParser.SFX_INCLUDE, 0); }
	public file_name(): File_nameContext {
		return this.getRuleContext(0, File_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_stat_include_base; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterStat_include_base) {
			listener.enterStat_include_base(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitStat_include_base) {
			listener.exitStat_include_base(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitStat_include_base) {
			return visitor.visitStat_include_base(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stat_include_libContext extends ParserRuleContext {
	public SFX_INCLUDE(): TerminalNode { return this.getToken(SFXParser.SFX_INCLUDE, 0); }
	public file_path(): File_pathContext {
		return this.getRuleContext(0, File_pathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_stat_include_lib; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterStat_include_lib) {
			listener.enterStat_include_lib(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitStat_include_lib) {
			listener.exitStat_include_lib(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitStat_include_lib) {
			return visitor.visitStat_include_lib(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stat_includeContext extends ParserRuleContext {
	public stat_include_lib(): Stat_include_libContext | undefined {
		return this.tryGetRuleContext(0, Stat_include_libContext);
	}
	public stat_include_base(): Stat_include_baseContext | undefined {
		return this.tryGetRuleContext(0, Stat_include_baseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_stat_include; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterStat_include) {
			listener.enterStat_include(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitStat_include) {
			listener.exitStat_include(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitStat_include) {
			return visitor.visitStat_include(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stat_includesContext extends ParserRuleContext {
	public stat_include(): Stat_includeContext[];
	public stat_include(i: number): Stat_includeContext;
	public stat_include(i?: number): Stat_includeContext | Stat_includeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Stat_includeContext);
		} else {
			return this.getRuleContext(i, Stat_includeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_stat_includes; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterStat_includes) {
			listener.enterStat_includes(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitStat_includes) {
			listener.exitStat_includes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitStat_includes) {
			return visitor.visitStat_includes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_stat_vsContext extends ParserRuleContext {
	public SFX_VS(): TerminalNode { return this.getToken(SFXParser.SFX_VS, 0); }
	public SFX_IDENTIFIER(): TerminalNode { return this.getToken(SFXParser.SFX_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_stat_vs; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_stat_vs) {
			listener.enterTeq_stat_vs(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_stat_vs) {
			listener.exitTeq_stat_vs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_stat_vs) {
			return visitor.visitTeq_stat_vs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_stat_psContext extends ParserRuleContext {
	public SFX_PS(): TerminalNode { return this.getToken(SFXParser.SFX_PS, 0); }
	public SFX_IDENTIFIER(): TerminalNode { return this.getToken(SFXParser.SFX_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_stat_ps; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_stat_ps) {
			listener.enterTeq_stat_ps(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_stat_ps) {
			listener.exitTeq_stat_ps(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_stat_ps) {
			return visitor.visitTeq_stat_ps(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pipe_exprContext extends ParserRuleContext {
	public SFX_IDENTIFIER(): TerminalNode { return this.getToken(SFXParser.SFX_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_pipe_expr; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterPipe_expr) {
			listener.enterPipe_expr(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitPipe_expr) {
			listener.exitPipe_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitPipe_expr) {
			return visitor.visitPipe_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pipe_exprsContext extends ParserRuleContext {
	public pipe_expr(): Pipe_exprContext {
		return this.getRuleContext(0, Pipe_exprContext);
	}
	public pipe_exprs(): Pipe_exprsContext | undefined {
		return this.tryGetRuleContext(0, Pipe_exprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_pipe_exprs; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterPipe_exprs) {
			listener.enterPipe_exprs(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitPipe_exprs) {
			listener.exitPipe_exprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitPipe_exprs) {
			return visitor.visitPipe_exprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pipe_statContext extends ParserRuleContext {
	public SFX_PIPE_PROP(): TerminalNode { return this.getToken(SFXParser.SFX_PIPE_PROP, 0); }
	public pipe_exprs(): Pipe_exprsContext {
		return this.getRuleContext(0, Pipe_exprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_pipe_stat; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterPipe_stat) {
			listener.enterPipe_stat(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitPipe_stat) {
			listener.exitPipe_stat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitPipe_stat) {
			return visitor.visitPipe_stat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pipe_bodyContext extends ParserRuleContext {
	public pipe_stat(): Pipe_statContext[];
	public pipe_stat(i: number): Pipe_statContext;
	public pipe_stat(i?: number): Pipe_statContext | Pipe_statContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pipe_statContext);
		} else {
			return this.getRuleContext(i, Pipe_statContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_pipe_body; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterPipe_body) {
			listener.enterPipe_body(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitPipe_body) {
			listener.exitPipe_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitPipe_body) {
			return visitor.visitPipe_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_stat_pipelineContext extends ParserRuleContext {
	public SFX_PIPELINE(): TerminalNode { return this.getToken(SFXParser.SFX_PIPELINE, 0); }
	public SFX_LBRACE(): TerminalNode { return this.getToken(SFXParser.SFX_LBRACE, 0); }
	public SFX_RBRACE(): TerminalNode { return this.getToken(SFXParser.SFX_RBRACE, 0); }
	public pipe_body(): Pipe_bodyContext | undefined {
		return this.tryGetRuleContext(0, Pipe_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_stat_pipeline; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_stat_pipeline) {
			listener.enterTeq_stat_pipeline(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_stat_pipeline) {
			listener.exitTeq_stat_pipeline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_stat_pipeline) {
			return visitor.visitTeq_stat_pipeline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prop_decContext extends ParserRuleContext {
	public SFX_SEMANTIC(): TerminalNode { return this.getToken(SFXParser.SFX_SEMANTIC, 0); }
	public SFX_IDENTIFIER(): TerminalNode { return this.getToken(SFXParser.SFX_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_prop_dec; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterProp_dec) {
			listener.enterProp_dec(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitProp_dec) {
			listener.exitProp_dec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitProp_dec) {
			return visitor.visitProp_dec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prop_bodyContext extends ParserRuleContext {
	public prop_dec(): Prop_decContext[];
	public prop_dec(i: number): Prop_decContext;
	public prop_dec(i?: number): Prop_decContext | Prop_decContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Prop_decContext);
		} else {
			return this.getRuleContext(i, Prop_decContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_prop_body; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterProp_body) {
			listener.enterProp_body(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitProp_body) {
			listener.exitProp_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitProp_body) {
			return visitor.visitProp_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_stat_propContext extends ParserRuleContext {
	public SFX_PROPERTY(): TerminalNode { return this.getToken(SFXParser.SFX_PROPERTY, 0); }
	public SFX_LBRACE(): TerminalNode { return this.getToken(SFXParser.SFX_LBRACE, 0); }
	public SFX_RBRACE(): TerminalNode { return this.getToken(SFXParser.SFX_RBRACE, 0); }
	public prop_body(): Prop_bodyContext | undefined {
		return this.tryGetRuleContext(0, Prop_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_stat_prop; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_stat_prop) {
			listener.enterTeq_stat_prop(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_stat_prop) {
			listener.exitTeq_stat_prop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_stat_prop) {
			return visitor.visitTeq_stat_prop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_statContext extends ParserRuleContext {
	public teq_stat_vs(): Teq_stat_vsContext | undefined {
		return this.tryGetRuleContext(0, Teq_stat_vsContext);
	}
	public teq_stat_ps(): Teq_stat_psContext | undefined {
		return this.tryGetRuleContext(0, Teq_stat_psContext);
	}
	public teq_stat_pipeline(): Teq_stat_pipelineContext | undefined {
		return this.tryGetRuleContext(0, Teq_stat_pipelineContext);
	}
	public teq_stat_prop(): Teq_stat_propContext | undefined {
		return this.tryGetRuleContext(0, Teq_stat_propContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_stat; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_stat) {
			listener.enterTeq_stat(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_stat) {
			listener.exitTeq_stat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_stat) {
			return visitor.visitTeq_stat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_bodyContext extends ParserRuleContext {
	public teq_stat(): Teq_statContext[];
	public teq_stat(i: number): Teq_statContext;
	public teq_stat(i?: number): Teq_statContext | Teq_statContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Teq_statContext);
		} else {
			return this.getRuleContext(i, Teq_statContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_body; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_body) {
			listener.enterTeq_body(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_body) {
			listener.exitTeq_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_body) {
			return visitor.visitTeq_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_defContext extends ParserRuleContext {
	public SFX_TECHNIQUE(): TerminalNode { return this.getToken(SFXParser.SFX_TECHNIQUE, 0); }
	public SFX_IDENTIFIER(): TerminalNode { return this.getToken(SFXParser.SFX_IDENTIFIER, 0); }
	public SFX_LBRACE(): TerminalNode { return this.getToken(SFXParser.SFX_LBRACE, 0); }
	public SFX_RBRACE(): TerminalNode { return this.getToken(SFXParser.SFX_RBRACE, 0); }
	public teq_body(): Teq_bodyContext | undefined {
		return this.tryGetRuleContext(0, Teq_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_def; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_def) {
			listener.enterTeq_def(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_def) {
			listener.exitTeq_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_def) {
			return visitor.visitTeq_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Teq_definesContext extends ParserRuleContext {
	public teq_def(): Teq_defContext[];
	public teq_def(i: number): Teq_defContext;
	public teq_def(i?: number): Teq_defContext | Teq_defContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Teq_defContext);
		} else {
			return this.getRuleContext(i, Teq_defContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_teq_defines; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterTeq_defines) {
			listener.enterTeq_defines(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitTeq_defines) {
			listener.exitTeq_defines(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitTeq_defines) {
			return visitor.visitTeq_defines(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Program_statContext extends ParserRuleContext {
	public stat_includes(): Stat_includesContext | undefined {
		return this.tryGetRuleContext(0, Stat_includesContext);
	}
	public teq_defines(): Teq_definesContext | undefined {
		return this.tryGetRuleContext(0, Teq_definesContext);
	}
	public GLSL(): TerminalNode | undefined { return this.tryGetToken(SFXParser.GLSL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_program_stat; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterProgram_stat) {
			listener.enterProgram_stat(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitProgram_stat) {
			listener.exitProgram_stat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitProgram_stat) {
			return visitor.visitProgram_stat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Program_statsContext extends ParserRuleContext {
	public program_stat(): Program_statContext[];
	public program_stat(i: number): Program_statContext;
	public program_stat(i?: number): Program_statContext | Program_statContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Program_statContext);
		} else {
			return this.getRuleContext(i, Program_statContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_program_stats; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterProgram_stats) {
			listener.enterProgram_stats(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitProgram_stats) {
			listener.exitProgram_stats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitProgram_stats) {
			return visitor.visitProgram_stats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public stat_file(): Stat_fileContext {
		return this.getRuleContext(0, Stat_fileContext);
	}
	public program_stats(): Program_statsContext {
		return this.getRuleContext(0, Program_statsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SFXParser.RULE_program; }
	// @Override
	public enterRule(listener: SFXListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: SFXListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SFXVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


