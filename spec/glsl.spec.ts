
import fs from 'fs';

import { expect} from 'chai';

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

    it("const",async()=>{
        var glsl = loadSource("spec/glsl/const.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"const.glsl");
    });

    it("function_struct_param",async()=>{
        var glsl = loadSource('spec/glsl/function_struct_param.glsl');
        var ret = await GLSLTool.parseGLSLFile(glsl,'function_struct_param.glsl');
    })

    it("struct",async()=>{
        var glsl = loadSource("spec/glsl/struct.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"struct.glsl");
    })

    it("uniform",async()=>{
        var glsl = loadSource("spec/glsl/uniform.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"uniform.glsl");
    })

    it("nested-preprocessor-dep",async ()=>{
        var glsl = loadSource("spec/glsl/nested_dep.glsl");
        var ret = await GLSLTool.parseGLSLFile(glsl,"nested_dep.glsl");

        var dep = new GLSLDependencyInfo();
        dep.entryFunctions = ['vertex'];
        GLSLTool.resolveDependency(ret,dep);

        let seg = ret.defineFunc.get('CAL_SHADOW_COORD');
        
        expect(seg.variableRef.indexOf('uLightMtx0')).to.gte(0);
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



describe('glsl-expr',()=>{
    var verifyExpr = function(item:string,text:string,funtionRef:string[],variableRef:string[]){
        it(item,()=>{
            let resultFunc = [];
            let resultVari = [];
            GLSLTool.ParseExpr(text,resultFunc,resultVari);
    
            resultFunc = resultFunc.sort();
            resultVari = resultVari.sort();
            funtionRef = funtionRef.sort();
            variableRef = variableRef.sort();
    
            expect(JSON.stringify(resultFunc)).to.equal(JSON.stringify(funtionRef),`function not match: ${text}`);
            expect(JSON.stringify(resultVari)).to.equal(JSON.stringify(variableRef),`variable not match: ${text}`);
        })
    }

    verifyExpr('variable-mul','MATRIX_P*MATRIX_MV',[],['MATRIX_P','MATRIX_MV']);
    verifyExpr('simple-func','TEST_FUNC(a,b,c)',['TEST_FUNC'],['a','b','c']);
    verifyExpr('complex1','x.shadow_coord=uLightMtx0*vec4(pos.xyz,1.0)',['vec4'],['x','uLightMtx0','pos'])
});