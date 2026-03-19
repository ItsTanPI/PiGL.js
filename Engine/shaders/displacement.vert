attribute vec4 aVertexPosition;
attribute vec2 aTexCoord;

uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uModelMatrix;

uniform lowp float uTime; 
uniform lowp float uSpeed; 
uniform vec2 uWind;  
uniform float uScale;
uniform float udisplacement;

// New uniforms for Gerstner control
uniform float uSteepness;
uniform float uWavelength;

varying lowp vec2 vTexCoord;
varying lowp float vNoise;
varying vec3 vWorldPos;

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

void main() {
    vec4 worldPos = uModelMatrix * aVertexPosition;
    float time = uTime * uSpeed;
    
    // --- LAYER 1: Gerstner Wave (Structural) ---
    vec2 dir = normalize(uWind);
    float k = 2.0 * 3.14159 / uWavelength;
    float f = k * (dot(dir, worldPos.xz) - time);
    float a = uSteepness / k;

    // Gerstner displacements
    float gX = dir.x * (a * cos(f));
    float gY = a * sin(f);
    float gZ = dir.y * (a * cos(f));

    // --- LAYER 2: Your Gradient Noise (Detail) ---
    vec2 movement = uWind * time;
    vec2 noiseCoord = worldPos.xz * uScale;
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; 
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);
    
    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);
    vNoise = smoothstep(-0.4, 0.4, n);

    // Combine: Gerstner shape + Noise displacement
    worldPos.x += gX;
    worldPos.z += gZ;
    worldPos.y += gY + (vNoise * udisplacement);

    gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
    
    vTexCoord = aTexCoord;
    vWorldPos = worldPos.xyz;
}