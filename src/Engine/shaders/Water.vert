precision highp float;

#define VERTEX

uniform vec2 uWind;
uniform float uScale;
uniform float uTime;
uniform float uSpeed; 
uniform float udisplacement; // Overall amplitude multiplier

varying float vNoise; // Re-using this to pass wave height to fragment
varying vec3 vWorldPos; // Pass world position to fragment for wave calculations

uniform vec4 uWaveA; 
uniform vec4 uWaveB;
uniform vec4 uWaveC;

vec3 GerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {
    float steepness = wave.z;
    float wavelength = wave.w;
    float k = 2.0 * 3.14159 / wavelength;
    float c = sqrt(9.8 / k); // Phase speed
    vec2 d = normalize(wave.xy);
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);
    float a = steepness / k;

    // Tangent and Binormal partial derivatives for Normal calculation
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

void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)
{
    
    vec3 gridPoint = worldPos;
    vec3 tangent = vec3(1.0, 0.0, 0.0);
    vec3 binormal = vec3(0.0, 0.0, 1.0);
    vec3 p = gridPoint;

    // Sum multiple waves for complexity
    p += GerstnerWave(uWaveA, gridPoint, tangent, binormal);
    p += GerstnerWave(uWaveB, gridPoint, tangent, binormal);
    p += GerstnerWave(uWaveC, gridPoint, tangent, binormal);


    float time = uTime * uSpeed;

    vec2 movement = uWind * time;

    // Use World Position XZ for noise so displacement is seamless across objects
    vec2 noiseCoord = worldPos.xz * uScale;

    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; 
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);

    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);
    p.y += smoothstep(-0.4, 0.4, n);
    // Update normal using the cross product of the accumulated derivatives
    normal = normalize(cross(binormal, tangent));
    
    // Output final position
    vNoise = ((p.y-worldPos.y)/udisplacement);
    vWorldPos = worldPos; // Pass original world position to fragment

    worldPos = p;
}