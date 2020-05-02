
import fs from 'fs';
import { SFXCompilationCtx } from '../src/SFXCompilationCtx';
import { SFXFileResolver } from '../src/SFXFileResolver';

import { expect} from 'chai';
import { SFXConfig } from '../src/SFXConfig';

SFXConfig.GLSLANG_PATH = 'tools/glslangValidator.exe';

function loadSource(file:string):string{
    return fs.readFileSync(file,"utf8");
}

describe("sfx",()=>{

    it('compile all',async()=>{
        var compileCtx = new SFXCompilationCtx();
        var res = new SFXFileResolver('spec/sfx');
        res.updateCompileCtx(compileCtx);
        let result = await compileCtx.compile();
        expect(result.success).to.equal(true);
    });

    //sfx source has syntax error
    it("sfx_parse_err",async()=>{
        var compileCtx = new SFXCompilationCtx();
        compileCtx.updateSource('test.sfx',loadSource('spec/sfx_err/sfx_err.sfx'));
        let result = await compileCtx.compile();
        expect(result.success).to.equal(false);
        expect(result.data.length).to.equal(1);
    });

    //source code missing include and can not pass validator 
    it("sfx_glsl_err",async()=>{
        var compileCtx = new SFXCompilationCtx();
        compileCtx.updateSource('test.sfx',loadSource('spec/sfx_err/sfx_glsl_err.sfx'));
        let result = await compileCtx.compile();
        expect(result.success).to.equal(false);
        expect(result.data.length).to.equal(1);
    })

});