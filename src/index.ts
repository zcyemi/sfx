import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from "fs";
import { SFXLexer } from './sfx/SFXLexer';
import { SFXParser } from './sfx/SFXParser';


function test(){
    var file =fs.readFileSync('tests/basic.sfx',"utf8");
let inputstream = new ANTLRInputStream(file);
let lexer = new SFXLexer(inputstream);
let tokenstream = new CommonTokenStream(lexer);

let parser = new SFXParser(tokenstream);

var program = parser.program();

}

test();