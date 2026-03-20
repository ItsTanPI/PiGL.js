precision highp float;

varying vec2 vTexCoord;

uniform sampler2D uDepthTexture;
uniform mat4 uInverseViewProjection;
uniform vec3 uCameraPos;
uniform vec3 uLightDir;
uniform float uTime;

uniform vec3 uTopColor;
uniform vec3 uBottomColor;
uniform vec3 uSunColor;

// --- STYLIZED UNIFORMS ---
uniform float uCloudScale;
uniform float uCloudThreshold; 
uniform float uCloudDensity;    // Global Opacity (0.0 to 1.0)
uniform float uCloudCoverage;   // Higher = more clusters appear
uniform float uCloudSpeed;
uniform vec3  uCloudMainColor;
uniform vec3  uCloudShadeColor; 

vec2 hash22(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453123);
}

float worley(vec2 p) {
    vec2 n = floor(p);
    vec2 f = fract(p);
    float minDist = 1.0;
    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 g = vec2(float(x), float(y));
            vec2 o = hash22(n + g);
            o = 0.5 + 0.5 * sin(uTime * uCloudSpeed + 6.2831 * o);
            vec2 r = g + o - f;
            float d = dot(r, r);
            minDist = min(minDist, d);
        }
    }
    return 1.0 - sqrt(minDist);
}

void main() {
    float depth = texture2D(uDepthTexture, vTexCoord).r;
    if (depth < 0.99) discard;

    vec4 clipPos = vec4(vTexCoord * 2.0 - 1.0, 1.0, 1.0);
    vec4 worldPosH = uInverseViewProjection * clipPos;
    vec3 worldPos = worldPosH.xyz / worldPosH.w;
    vec3 dir = normalize(worldPos - uCameraPos);

    // 1. Sky Gradient
    vec3 skyColor = mix(uBottomColor, uTopColor, smoothstep(-0.1, 0.8, dir.y));

    // 2. Spherical Cloud Logic
    vec2 cloudUV = dir.xz / (max(dir.y, 0.01) + 0.2); 
    vec2 wind = vec2(uTime * uCloudSpeed);
    
    float n = worley((cloudUV + wind) * uCloudScale);
    
    // --- DENSITY CONTROL ---
    // Subtracting coverage from the noise value determines "how many" spheres survive
    float baseMask = n - (1.0 - uCloudCoverage);
    float cloudMask = smoothstep(uCloudThreshold, uCloudThreshold + 0.02, baseMask);
    
    // Fade out at horizon and apply global density/opacity
    cloudMask *= smoothstep(0.0, 0.15, dir.y);
    float finalOpacity = cloudMask * uCloudDensity;

    // 3. Cel-Shaded Volume
    float shadowMask = smoothstep(uCloudThreshold + 0.1, uCloudThreshold + 0.12, baseMask);
    
    // 4. Directional Rim Light
    float lightN = worley((cloudUV + wind + normalize(uLightDir.xz) * 0.1) * uCloudScale) - (1.0 - uCloudCoverage);
    float rimLight = smoothstep(uCloudThreshold, uCloudThreshold + 0.05, lightN);
    
    vec3 cloudCol = mix(uCloudShadeColor, uCloudMainColor, shadowMask);
    
    float sunDot = max(dot(dir, normalize(uLightDir)), 0.0);
    cloudCol += uSunColor * pow(sunDot, 15.0) * rimLight * 0.5;


    // 5. Final Composition using the Opacity factor
    vec3 color = mix(skyColor, cloudCol, finalOpacity);

    // Stylized Sun
    float sunDisk = smoothstep(0.998, 0.999, sunDot); 
    color += uSunColor * sunDisk * 1.5;
    
    gl_FragColor = vec4(color, 1.0);
}