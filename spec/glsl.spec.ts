
import fs from 'fs';

import {GLSLTool, GLSLDependencyInfo} from '../src/GLSLTool';
import { GLSLFile, GLSLShaderType, GLSLSegType } from '../src/GLSLFile';
import { SFXConfig } from '../src/SFXConfig';

SFXConfig.GLSLANG_PATH = 'tools/glslangValidator.exe';

function loadSource(file:string):string{
    return fs.readFileSync(file,"utf8");
}

function parseSource(fileName:string):Promise<GLSLFile>{
    let glsl = loadSource(fileName);
    return GLSLTool.parseGLSLFile(glsl,fileName);
}

async function validateShader(file:GLSLFile,entry:string,shadertype:GLSLShaderType){

    var depInfo = new GLSLDependencyInfo();
    depInfo.entryFunctions = [entry];
    GLSLTool.resolveDependency(file,depInfo);
    GLSLTool.trimDepsApply(file,depInfo);

    GLSLTool.collapseToShader(file,shadertype,entry);

    let fileName = file.fileName + (shadertype == GLSLShaderType.Vertex? ".vert":".frag");
    let suc = await GLSLTool.glslVerify(fileName,file);
    console.assert(suc);
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
        var file = await GLSLTool.parseGLSLFile(glsl,"sample.glsl");
        await validateShader(file.clone(),'vertex',GLSLShaderType.Vertex);
        await validateShader(file.clone(),'fragment',GLSLShaderType.Fragment);
    });

});
