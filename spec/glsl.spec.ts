
import fs from 'fs';

import {GLSLTool} from '../src/GLSLTool';

function loadSource(file:string):string{
    return fs.readFileSync(file,"utf8");
}

describe("primitive",()=>{
    it("defines",async()=>{
        var glsl = loadSource("spec/glsl/defines.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"defines.glsl");
    })

    it("struct",async()=>{
        var glsl = loadSource("spec/glsl/struct.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"struct.glsl");
    })

    it("uniform",async()=>{
        var glsl = loadSource("spec/glsl/uniform.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"uniform.glsl");
    })
});

describe("glsl",()=>{
    it("glsl visitor",async ()=>{
        var glsl = loadSource("spec/glsl/sample.glsl");

        var ret = await GLSLTool.parseGLSLFile(glsl,"sample.glsl");

        console.log(ret.segments);
    });
});
