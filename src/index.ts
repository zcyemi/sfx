import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from "fs";
import { SFXLexer } from './sfx/SFXLexer';
import { SFXParser } from './sfx/SFXParser';
import { SFXSourceVisotor } from './SFXSourceVisotor';
import { GLSLLexer } from './glsl/GLSLLexer';
import { GLSLParser } from './glsl/GLSLParser';
import { GLSLSourceVisitor } from './GLSLSourceVisitor';


function sfxTest() {
    var file = fs.readFileSync('tests/basic.sfx', "utf8");
    let inputstream = new ANTLRInputStream(file);
    let lexer = new SFXLexer(inputstream);
    let tokenstream = new CommonTokenStream(lexer);

    let parser = new SFXParser(tokenstream);

    var program = parser.program();

    var visitor = new SFXSourceVisotor();
    var source = visitor.visit(program);
}

function glslTest() {
    var file = fs.readFileSync('tests/test.glsl', "utf8");
    let inputstream = new ANTLRInputStream(file);
    let lexer = new GLSLLexer(inputstream);
    let tokenstream = new CommonTokenStream(lexer);

    let parser = new GLSLParser(tokenstream);

    let program = parser.external_declaration_list();

    var visitor = new GLSLSourceVisitor();
    visitor.visit(program);
}

glslTest();