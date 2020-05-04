precision mediump float;

#define PI 3.1415926
#define PI_2 6.2831852
#define PI_HALF 1.5707963
#define EPSILON 1e-5

uniform UNIFORM_OBJ{
    mat4 _obj2world_;
};
#define MATRIX_M _obj2world_

uniform UNIFORM_BASIS{
    //basic region
    vec4 _screenparam_;//[width,height,1/wdith,1/height]
    highp vec4 _time_;//[Time,deltaTime,sinTime,cosTime]
    //Ambient And Fog
    lowp vec4 _ambientcolor_;
    vec4 _fogcolor_;
    vec4 _fogparam_;
};

uniform UNIFORM_CAMERA{
    vec4 _camera_pos_;
    mat4 _camera_mtx_view_;
    vec4 _camera_projparam_;//[near,far,1/near,1/far]
    mat4 _camera_mtx_proj_;
    mat4 _camera_mtx_invproj_;
};

#define TIME _time_
#define SCREEN _screenparam_

#define AMBIENT_COLOR _ambientcolor_

#define MATRIX_V _camera_mtx_view_
#define MATRIX_P _camera_mtx_proj_
#define MATRIX_VP MATRIX_P * MATRIX_V
#define MATRIX_MV MATRIX_V * MATRIX_M
#define MATRIX_IT_MV transpose(inverse(MATRIX_MV))
#define MATRIX_MVP MATRIX_P * MATRIX_MV
#define MATRIX_INV_P _camera_mtx_invproj_
#define MATRIX_WORLD2OBJ inverse(MATRIX_M)
#define CAMERA_POS _camera_pos_
#define CAMERA_NEAR _camera_projparam_.x
#define CAMERA_FAR _camera_projparam_.y
#define CAMERA_NEAR_INV _camera_projparam_.z
#define CAMERA_FAR_INV _camera_projparam_.w
#define SCREEN_WIDTH _screenparam_.x
#define SCREEN_HEIGHT _screenparam_.y
#define SCREEN_WIDTH_INV _screenparam_.z
#define SCREEN_HEIGHT_INV _screenparam_.w
vec3 ObjToWorldDir(in vec3 dir){
    return normalize(dir * mat3(MATRIX_WORLD2OBJ));
}
float SAMPLE_DEPTH_TEXTURE(sampler2D depthtex,vec2 uv){
    return texture(depthtex,uv).r;
}
float DECODE_VIEWDEPTH(float d){
    return 1.0/ ((CAMERA_NEAR_INV - CAMERA_FAR_INV) * d  - CAMERA_NEAR_INV);
}
vec4 ClipToWorld(in vec4 clippoint){
    return inverse(MATRIX_VP) * clippoint;
}

#define saturate(x) clamp(x,0.0,1.0)


layout (std140) uniform UNIFORM_LIGHT{
    vec4 lightColor0;
    vec4 lightColor1;
    vec4 lightColor2;
    vec4 lightColor3;
    vec4 lightIntensity;
    vec4 lightPosX;
    vec4 lightPosY;
    vec4 lightPosZ;
    vec4 light_ambient;
    vec4 lightPrimePos;
    vec4 lightPrimeColor;
};

#define LIGHT_COLOR0 lightColor0
#define LIGHT_COLOR1 lightColor1
#define LIGHT_COLOR2 lightColor2
#define LIGHT_COLOR3 lightColor3


#define MAIN_LIGHT_POS lightPrimePos
#define MAIN_LIGHT_COLOR lightPrimeColor


#define LIGHT_INTENSITY lightIntensity
#define LIGHT_INTENSITY0 lightIntensity.x
#define LIGHT_INTENSITY1 lightIntensity.y
#define LIGHT_INTENSITY2 lightIntensity.z
#define LIGHT_INTENSITY3 lightIntensity.w


// #options SMCASCADE NONE TWO FOUR
// #options SHADOW ON OFF
precision mediump sampler2DShadow;


uniform UNIFORM_SHADOWMAP{
    mat4 uLightMtx0;
    mat4 uLightMtx1;
    mat4 uLightMtx2;
    mat4 uLightMtx3;
    float uShadowDist;
};

uniform sampler2DShadow uShadowMap;

#define SHADOW_COORD vec4 shadow_coord
#define CAL_SHADOW_COORD(x,pos) x.shadow_coord = uLightMtx0 * vec4(pos.xyz,1.0)

float computeShadow(vec4 vLightPos,sampler2DShadow shadowsampler){
    vec3 clipspace = vLightPos.xyz / vLightPos.w;
    clipspace = clipspace *0.5 + 0.5;
    float shadowDep = texture(shadowsampler,vec3(clipspace.x,clipspace.y,0.0));
    
    //fix shadowmpa edge clamp
    vec2 border = step(clipspace.xy,vec2(0.002,0.002));
    border += step(vec2(0.998),clipspace.xy);
    shadowDep += (border.x + border.y);

    return step(clipspace.z- 0.01,shadowDep);
}

float computeShadow(vec4 vLightPos,sampler2D shadowsampler){
    vec3 clipspace = vLightPos.xyz / vLightPos.w;
    clipspace = clipspace *0.5 + 0.5;
    float shadowDep = texture(shadowsampler,vec2(clipspace.xy)).x;
    
    //fix shadowmpa edge clamp
    vec2 border = step(clipspace.xy,vec2(0.002));
    border += step(vec2(0.998),clipspace.xy);
    shadowDep += (border.x + border.y);

    return step(clipspace.z- 0.01,shadowDep);
}

float computeShadowPoisson(vec4 vLightPos,sampler2D shadowsampler){
    vec3 clipspace = vLightPos.xyz / vLightPos.w;
    clipspace = clipspace *0.5 + 0.5;

    vec2 coord = clipspace.xy;
    float curdepth = clipspace.z - 0.01;
    float visibility = 1.0;

    float mapsize = 1.0/1024.0;

    vec2 poissonDisk[4];
        poissonDisk[0] = vec2(-0.94201624, -0.39906216);
        poissonDisk[1] = vec2(0.94558609, -0.76890725);
        poissonDisk[2] = vec2(-0.094184101, -0.92938870);
        poissonDisk[3] = vec2(0.34495938, 0.29387760);

    if(texture(shadowsampler,coord + poissonDisk[0] * mapsize).r <curdepth) visibility -=0.25;
    if(texture(shadowsampler,coord + poissonDisk[1] * mapsize).r <curdepth) visibility -=0.25;
    if(texture(shadowsampler,coord + poissonDisk[2] * mapsize).r <curdepth) visibility -=0.25;
    if(texture(shadowsampler,coord + poissonDisk[3] * mapsize).r <curdepth) visibility -=0.25;
    return visibility;
}

float computeShadowPCF3(vec4 vLightPos,sampler2DShadow shadowsampler){
    vec3 clipspace = vLightPos.xyz / vLightPos.w;
    clipspace = clipspace *0.5 + 0.5;

    vec2 shadowMapSizeInv = vec2(1024.0,1.0/1024.0);

    float curdepth = clipspace.z;

    vec2 uv = clipspace.xy *shadowMapSizeInv.x;
    uv += 0.5;
    vec2 st = fract(uv);
    vec2 base_uv = floor(uv) - 0.5;
    base_uv *= shadowMapSizeInv.y;

    vec2 uvw0 = 3. - 2. * st;
    vec2 uvw1 = 1. + 2. * st;
    vec2 u = vec2((2. - st.x) / uvw0.x - 1., st.x / uvw1.x + 1.) * shadowMapSizeInv.y;
    vec2 v = vec2((2. - st.y) / uvw0.y - 1., st.y / uvw1.y + 1.) * shadowMapSizeInv.y;
    curdepth -=0.001;

    float shadow = 0.;
    shadow += uvw0.x * uvw0.y * texture(shadowsampler, vec3(base_uv.xy + vec2(u[0], v[0]), curdepth));
    shadow += uvw1.x * uvw0.y * texture(shadowsampler, vec3(base_uv.xy + vec2(u[1], v[0]), curdepth));
    shadow += uvw0.x * uvw1.y * texture(shadowsampler, vec3(base_uv.xy + vec2(u[0], v[1]), curdepth));
    shadow += uvw1.x * uvw1.y * texture(shadowsampler, vec3(base_uv.xy + vec2(u[1], v[1]), curdepth));
    shadow = shadow / 16.;
    return shadow;
}

precision mediump float;

struct V2F{
    vec3 pos;
    vec3 normal;
    vec3 wpos;
    vec4 shadow_coord;
};

inout V2F v2f;

in vec4 aPosition;
in vec2 aUV;
in vec4 aNormal;

void vertex(){
    vec4 wpos = MATRIX_M * aPosition;
    v2f.pos = wpos.xyz;
    vec4 pos = MATRIX_VP * wpos;
    gl_Position = pos;
    v2f.normal = ObjToWorldDir(aNormal.xyz);
    v2f.wpos = wpos.xyz;

    CAL_SHADOW_COORD(v2f,wpos);
}

out lowp vec4 fragColor;
void fragment(){
    float depth = computeShadowPCF3(v2f.shadow_coord,uShadowMap);
    fragColor = vec4(depth,depth,depth,1.0);
}
