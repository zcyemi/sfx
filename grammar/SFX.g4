grammar SFX;

@lexer::members {
   ignoreNewLine:boolean = true;
}

@parser::members{
   ignoreNewLine:boolean = true;
}

file_name: SFX_IDENTIFIER SFX_EXT;

file_folder: SFX_IDENTIFIER '/';
file_path: file_folder+ file_name;

stat_file: { this.ignoreNewLine = false; } SFX_FILE file_name;
stat_include_base:  { this.ignoreNewLine = false; } SFX_INCLUDE '"' file_name '"';
stat_include_lib: { this.ignoreNewLine = false; } SFX_INCLUDE '<' file_path '>';
stat_include: stat_include_lib | stat_include_base;

stat_includes: stat_include+;

teq_stat_vs: { this.ignoreNewLine = false;} SFX_VS ':' SFX_IDENTIFIER ';';
teq_stat_ps: { this.ignoreNewLine = false;} SFX_PS ':' SFX_IDENTIFIER ';';

pipe_expr: SFX_IDENTIFIER;
pipe_exprs: pipe_expr
    | pipe_expr ',' pipe_exprs
    ;
pipe_stat:  SFX_PIPE_PROP ':' pipe_exprs ';';
pipe_body: pipe_stat+;


teq_stat_pipeline: SFX_PIPELINE ':' SFX_LBRACE pipe_body? SFX_RBRACE;

prop_dec: SFX_SEMANTIC ':' SFX_IDENTIFIER ';';

prop_body: prop_dec+;
teq_stat_prop: SFX_PROPERTY ':' SFX_LBRACE prop_body? SFX_RBRACE;

teq_stat:
    teq_stat_vs
    | teq_stat_ps
    | teq_stat_pipeline
    | teq_stat_prop
    ;

teq_body: teq_stat+;

teq_def: SFX_TECHNIQUE SFX_IDENTIFIER SFX_LBRACE teq_body? SFX_RBRACE;

teq_defines: teq_def+;

program_stat:
    stat_includes
    | teq_defines
    | GLSL
    ;

program_stats: program_stat*;

program: stat_file program_stats;


fragment SFX_GLSL_CODE: (.)*?;
GLSL: '#GLSL' SFX_GLSL_CODE '#END';


SFX_FILE: '#file';
SFX_INCLUDE: '#include';
SFX_TECHNIQUE:'technique';
SFX_LBRACE:'{';
SFX_RBRACE:'}';

SFX_VS: 'vs';
SFX_PS: 'ps';
SFX_PIPELINE: 'pipeline';
SFX_PROPERTY: 'property';
SFX_PIPE_PROP: 'queue' | 'zwrite' | 'ztest' | 'blend' | 'cull';
SFX_SEMANTIC_TYPE: 'TEXCOORD' | 'COLOR' | 'POSITION' | 'NORMAL' | 'TARGET';

SFX_EXT: '.sfx';

fragment DIGIT  : '0'..'9';

SFX_SEMANTIC: SFX_SEMANTIC_TYPE '_' DIGIT | 'MAIN_TEXTURE';

SFX_IDENTIFIER: ('a'..'z' | 'A'..'Z' | '_') (DIGIT | 'a'..'z' | 'A'..'Z' | '_')*;

COMMENT: ('//' ~('\n'|'\r')* '\r'? '\n' |   '/*' (.)*? '*/') -> skip ;
WS: [\t\r\u000C ]+ { this.skip(); } ;
EOL: '\n' { if(this.ignoreNewLine) { this.skip(); } this.ignoreNewLine = true; } ;

