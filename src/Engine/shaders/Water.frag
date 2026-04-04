precision highp float;

#define FRAGMENT
varying float vNoise;
varying vec3 vWorldPos;

uniform float uTime;
uniform float uSpeed;
uniform vec2 uWind;
uniform float uScale;
uniform float udisplacement;

uniform vec4 uWaveA;
uniform vec4 uWaveB;
uniform vec4 uWaveC;

uniform vec3 uColor1; 
uniform vec3 uColor2; 
uniform vec3 uColor3; 

uniform float uColorBands; 

// --- Helper Functions ---
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

// Function to calculate height at any XZ coordinate
float getFullHeight(vec3 p) {
    float time = uTime * uSpeed;
    
    // 1. Gerstner Heights
    float h = 0.0;
    vec4 waves[3];
    waves[0] = uWaveA; waves[1] = uWaveB; waves[2] = uWaveC;
    
    for(int i = 0; i < 3; i++) {
        float k = 2.0 * 3.14159 / waves[i].w;
        float c = sqrt(9.8 / k);
        vec2 d = normalize(waves[i].xy);
        float f = k * (dot(d, p.xz) - c * time);
        h += (waves[i].z / k) * sin(f);
    }
    
    // 2. Noise Heights
    vec2 movement = uWind * time;
    vec2 noiseCoord = p.xz * uScale;
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);
    float noiseSum = (n1 * 0.2) + (n2 * 0.5);
    
    return h + (smoothstep(-0.4, 0.4, noiseSum) * udisplacement);
}

// This function mimics the vertex logic exactly
vec3 GerstnerWaveFull(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {
    float steepness = wave.z;
    float wavelength = wave.w;
    float k = 2.0 * 3.14159 / wavelength;
    float c = sqrt(9.8 / k);
    vec2 d = normalize(wave.xy);
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);
    float a = steepness / k;

    // The partial derivatives (slopes)
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

void fragment(inout vec4 color, inout vec3 normal, inout float emission)
{
    // 1. SETUP DERIVATIVE VECTORS
    vec3 tangent = vec3(1.0, 0.0, 0.0);
    vec3 binormal = vec3(0.0, 0.0, 1.0);
    vec3 p = vWorldPos; // Use the base world position

    // 2. ACCUMULATE WAVE DISPLACEMENT AND DERIVATIVES
    vec3 displacement = vec3(0.0);
    displacement += GerstnerWaveFull(uWaveA, p, tangent, binormal);
    displacement += GerstnerWaveFull(uWaveB, p, tangent, binormal);
    displacement += GerstnerWaveFull(uWaveC, p, tangent, binormal);

    // 3. NOISE CALCULATION (Exact match to Vertex)
    float time = uTime * uSpeed;
    vec2 movement = uWind * time;
    vec2 noiseCoord = p.xz * uScale;

    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; 
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);

    float noiseVal = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);
    float heightOffset = smoothstep(-0.4, 0.4, noiseVal);

    // 4. GENERATE NORMAL
    // Important: We use the accumulated tangent and binormal from the waves
    // Note: Since noise doesn't have easy analytical derivatives here, 
    // the cross product will be dominated by the Gerstner waves.
    normal = normalize(cross(binormal, tangent));

    // 5. COLORING (Using the same height math)
    float totalY = displacement.y + heightOffset;
    float n = clamp(totalY / udisplacement, 0.0, 1.0);
    float quantizedN = floor(n * uColorBands) / uColorBands;

    float blend1 = smoothstep(0.0, 0.5, quantizedN);
    vec3 waterBase = mix(uColor1, uColor2, blend1);

    float blend2 = smoothstep(0.0, 2.0, quantizedN); // Matches your vertex logic
    vec3 finalColor = mix(waterBase, uColor3, blend2);

    emission = blend2; 
    color = vec4(finalColor, 0.8);
}