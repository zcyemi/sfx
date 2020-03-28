import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from "fs";
import { GLSLLexer } from './glsl/GLSLLexer';
import { GLSLParser } from './glsl/GLSLParser';
import { GLSLFormatter } from './GLSLFormatter';
import { SFXLexer } from './sfx/SFXLexer';
import { SFXParser } from './sfx/SFXParser';
import { SFXSourceVisotor } from './SFXSourceVisotor';
import { GLSLSourceVisitor } from './GLSLSourceVisitor';
import { GLSLProcessor } from './GLSLProcessor';


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

    let glslprocessor = new GLSLProcessor(parser);

    glslprocessor.analysis();


    glslprocessor.trimFunctions(["vertex"]);
    

}



glslTest();
