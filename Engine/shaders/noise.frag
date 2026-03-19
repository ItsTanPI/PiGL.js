precision lowp float;

varying lowp vec2 vTexCoord;

uniform lowp vec4 uColor;
uniform lowp float uTime; 

// New Uniforms
uniform vec2 uWind;   // x = horizontal speed, y = vertical speed
uniform float uScale; // controls the density/size of the noise

vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), 
             dot(p, vec2(269.5, 183.3)));
    // We keep the sine-based hash stable so the grid doesn't "jitter"
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

    return mix(mix(a, b, u.x), 
               mix(c, d, u.x), u.y);
}

void main() {
    // 1. Calculate offset based on wind direction and time
    vec2 windOffset = uWind * uTime;
    
    // 2. Apply scale and offset to the texture coordinates
    // This "moves" the world relative to the viewer
    vec2 uv = (vTexCoord * uScale) + windOffset;
    
    float n = gradientNoise(uv);

    // Map noise from [-1.0, 1.0] to [0.0, 1.0]
    n = n * 0.5 + 0.5;

    gl_FragColor = vec4(uColor.rgb * n, uColor.a);
}