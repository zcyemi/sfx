
import fs from 'fs';

import {GLSLTool, GLSLDependencyInfo} from '../src/GLSLTool';

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
    });
});

describe('glsl-trim',()=>{
    it("analysis-dep",async ()=>{
        var glsl = loadSource("spec/glsl/sample.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"sample.glsl");

        var depInfo = new GLSLDependencyInfo();
        depInfo.entryFunctions = ["vertex","fragment"];
        GLSLTool.resolveDependency(ret,depInfo);
    });

});
