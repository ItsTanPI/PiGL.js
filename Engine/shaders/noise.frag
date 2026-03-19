precision highp float;

varying highp vec2 vTexCoord;

uniform highp float uTime; 
uniform highp float uSpeed; 
uniform vec2 uWind;  
uniform float uScale;

uniform vec3 uColor1; 
uniform vec3 uColor2; 
uniform vec3 uColor3; 

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
    float time = uTime * uSpeed;
    vec2 movement = uWind * time;

    // Layer 1: The Macro "Gust" (Very large, slow-moving shadows)
    float n1 = gradientNoise((vTexCoord * uScale * 0.25) + (movement * 0.3));
    
    // Layer 2: The "Tuft" (Medium scale, standard waving)
    float n2 = gradientNoise((vTexCoord * uScale * 1.5) + movement);
    
    // Layer 3: The "Jitter" (High frequency, moves slightly faster)
    // We rotate the wind vector slightly for this layer to create "cross-winds"
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; 
    float n3 = gradientNoise((vTexCoord * uScale * 4.0) + jitterMovement);

    // Combine them with weighted averages
    // 20% big gust, 50% main tuft, 30% jitter detail
    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);
    
    // Smoothstep creates that "hand-painted" clumped look
    // Using a tighter range (e.g. -0.3 to 0.4) makes the grass "edges" sharper
    n = smoothstep(-0.4, 0.4, n);

    vec3 finalColor;
    if (n < 0.5) {
        finalColor = mix(uColor1, uColor2, n * 2.0);
    } else {
        finalColor = mix(uColor2, uColor3, (n - 0.5) * 2.0);
    }

    gl_FragColor = vec4(finalColor, 1.0);
}   