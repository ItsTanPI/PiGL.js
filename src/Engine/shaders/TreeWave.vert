precision highp float;
#define VERTEXREC

uniform float uTime;
uniform float uWaveSpeed;
uniform float uWaveStrength;
uniform float uWaveFrequency;
uniform float uWaveHeight;
uniform vec2 uWindDir;

vec2 grad(vec2 p) {
    float h = fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    float angle = h * 6.2831853;
    return vec2(cos(angle), sin(angle));
}

float perlin2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(dot(grad(i + vec2(0,0)), f - vec2(0,0)),
            dot(grad(i + vec2(1,0)), f - vec2(1,0)), u.x),
        mix(dot(grad(i + vec2(0,1)), f - vec2(0,1)),
            dot(grad(i + vec2(1,1)), f - vec2(1,1)), u.x),
        u.y
    );
}

void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement,
            inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)
{
    // Root pinning — vertices near y=0 don't move
    float heightMask = smoothstep(0.0, uWaveHeight, localPos.y);


    vec3 worldOrigin = modelMatrix[3].xyz;
    // hard coded for leaf 
    if((texCoord.x >= 0.125 && texCoord.x <= 0.25 && texCoord.y >=0.25 && texCoord.y <= 0.5) ) worldOrigin = worldPos;
    vec2 samplePos = worldOrigin.xz * uWaveFrequency + normalize(uWindDir) * uTime * uWaveSpeed;

    float primary   = perlin2D(samplePos);
    float secondary = perlin2D(samplePos * 2.3 + vec2(5.7, 9.3)) * 0.35;
    float wind = (primary + secondary) * uWaveStrength;

    vec3 worldDisp = vec3(normalize(uWindDir), 0.0).xzy * wind * heightMask;
    vec3 localDisp = transpose(mat3(modelMatrix)) * worldDisp;

    localPos += localDisp;
    localPos.y -= abs(wind * heightMask) * 0.15;
}