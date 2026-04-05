precision highp float;

#define VERTEXREC

uniform vec2 uWind;
uniform float uScale;
uniform float uTime;
uniform float uSpeed;
uniform float udisplacement;
uniform float uBuoyancyRotation;
uniform float uSampleRadius;  // Radius for multi-point wave sampling

uniform vec4 uWaveA;
uniform vec4 uWaveB;
uniform vec4 uWaveC;

varying vec3 vWorldPos;

vec3 GerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {
    float steepness = wave.z;
    float wavelength = wave.w;
    float k = 2.0 * 3.14159 / wavelength;
    float c = sqrt(9.8 / k);
    vec2 d = normalize(wave.xy);
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);
    float a = steepness / k;

    tangent += vec3(
        -d.x * d.x * (steepness * sin(f)),
        d.x * (steepness * cos(f)),
        -d.x * d.y * (steepness * sin(f))
    );
    binormal += vec3(
        -d.x * d.y * (steepness * sin(f)),
        d.y * (steepness * cos(f)),
        -d.y * d.y * (steepness * sin(f))
    );

    return vec3(
        d.x * (a * cos(f)),
        a * sin(f),
        d.y * (a * cos(f))
    );
}

vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float gradientNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    float a = dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));
    float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
    float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
    float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Builds a rotation matrix that rotates vector 'from' to vector 'to'
// Uses Rodrigues' rotation formula — always produces a pure rotation, no scale
mat3 rotationFromTo(vec3 from, vec3 to) {
    from = normalize(from);
    to = normalize(to);
    
    vec3 axis = cross(from, to);
    float axisLen = length(axis);
    
    // Vectors are already aligned — return identity
    if (axisLen < 0.0001) return mat3(1.0);
    
    axis = axis / axisLen;
    float cosA = dot(from, to);
    float sinA = axisLen;
    float t = 1.0 - cosA;
    
    // Rodrigues' rotation matrix
    return mat3(
        t*axis.x*axis.x + cosA,         t*axis.x*axis.y + sinA*axis.z,  t*axis.x*axis.z - sinA*axis.y,
        t*axis.x*axis.y - sinA*axis.z,  t*axis.y*axis.y + cosA,         t*axis.y*axis.z + sinA*axis.x,
        t*axis.x*axis.z + sinA*axis.y,  t*axis.y*axis.z - sinA*axis.x,  t*axis.z*axis.z + cosA
    );
}

void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)
{
    vec3 objectWorldPos = vec3(modelMatrix[3].x, modelMatrix[3].y, modelMatrix[3].z);

    // Sample 8 points around the object center for smooth buoyancy
    // This prevents jerky displacement when the object moves across waves
    vec3 accumulatedDisplacement = vec3(0.0);
    vec3 accumulatedTangent = vec3(0.0);
    vec3 accumulatedBinormal = vec3(0.0);
    
    float samplePoints = 8.0;
    for (int i = 0; i < 8; i++) {
        float angle = (float(i) / samplePoints) * 6.28318;  // 2*PI
        vec2 offset = vec2(cos(angle), sin(angle)) * uSampleRadius;
        vec3 samplePos = objectWorldPos + vec3(offset.x, 0.0, offset.y);
        
        vec3 tangent = vec3(1.0, 0.0, 0.0);
        vec3 binormal = vec3(0.0, 0.0, 1.0);
        
        vec3 waveDisp = vec3(0.0);
        waveDisp += GerstnerWave(uWaveA, samplePos, tangent, binormal);
        waveDisp += GerstnerWave(uWaveB, samplePos, tangent, binormal);
        waveDisp += GerstnerWave(uWaveC, samplePos, tangent, binormal);
        
        accumulatedDisplacement += waveDisp;
        accumulatedTangent += tangent;
        accumulatedBinormal += binormal;
    }
    
    // Average all samples
    accumulatedDisplacement /= 8.0;
    accumulatedTangent /= 8.0;
    accumulatedBinormal /= 8.0;

    // Noise — matching water shader exactly (sample at center only)
    float time = uTime * uSpeed;
    vec2 movement = uWind * time;
    vec2 noiseCoord = objectWorldPos.xz * uScale;

    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5;
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);

    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);
    float noiseDisp = smoothstep(-0.4, 0.4, n);

    float totalYDisplacement = accumulatedDisplacement.y + noiseDisp;

    // Wave surface normal — cross of accumulated tangent/binormal (now averaged)
    // normalize() here is critical: Gerstner accumulation drifts from unit length
    vec3 waveNormal = normalize(cross(accumulatedBinormal, accumulatedTangent));

    // Build rotation from object's rest up (0,1,0) → wave surface normal
    // Rodrigues guarantees orthonormal output — no squash/stretch
    mat3 R = rotationFromTo(vec3(0.0, 1.0, 0.0), waveNormal);

    // Blend rotation strength via uBuoyancyRotation
    // lerp identity → full rotation in matrix space via slerp approximation:
    // mix(identity * localPos, R * localPos, t) == rotate partially
    vec3 rotatedLocalPos = mix(localPos, R * localPos, uBuoyancyRotation);
    localPos = rotatedLocalPos;

    // Vertical offset applied in world space after model matrix (master.vert handles this)
    yDisplacement = vec3(0.0, totalYDisplacement, 0.0);

    // Apply rotation to object's normal to match new orientation
    normal = normalize(R * normal);

    vWorldPos = objectWorldPos;
}