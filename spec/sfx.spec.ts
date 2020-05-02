
import fs from 'fs';

import {GLSLTool, GLSLDependencyInfo} from '../src/GLSLTool';
import { GLSLFile, GLSLShaderType, GLSLSegType } from '../src/GLSLFile';

import {SFXCompilationCtx} from '../src/SFXCompilationCtx';
import {SFXFileResolver} from '../src/SFXFileResolver';

describe("sfx",()=>{

    var compileCtx = new SFXCompilationCtx();
    var res = new SFXFileResolver('spec/sfx');
    res.updateCompileCtx(compileCtx);

    it('compile all',async()=>{
        await compileCtx.compile();
    });

});