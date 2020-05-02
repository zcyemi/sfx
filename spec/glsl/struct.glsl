struct ScatteringParams
{
    float sunRadius;
	float sunRadiance;

	float mieG;
	float mieHeight;

	float rayleighHeight;

	vec3 waveLambdaMie;
	vec3 waveLambdaOzone;
	vec3 waveLambdaRayleigh;

	float earthRadius;
	float earthAtmTopRadius;
	vec3 earthCenter;
};

vec3 ComputeSphereNormal(vec2 coord, float phiStart, float phiLength, float thetaStart, float thetaLength)
{
	vec3 normal;
	normal.x = -sin(thetaStart + coord.y * thetaLength) * sin(phiStart + coord.x * phiLength);
	normal.y = -cos(thetaStart + coord.y * thetaLength);
	normal.z = -sin(thetaStart + coord.y * thetaLength) * cos(phiStart + coord.x * phiLength);
	return normalize(normal);
}