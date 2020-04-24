
import fs from 'fs';

import {GLSLTool} from '../src/GLSLTool';

function loadSource(file:string):string{
    return fs.readFileSync(file,"utf8");
}

describe("glsl",()=>{
    it("glsl visitor",async ()=>{
        var glsl = loadSource("spec/glsl/sample.glsl");

        var ret = await GLSLTool.parseGLSLFile(glsl,"sample.glsl");

        console.log(ret.segments);
    });
});