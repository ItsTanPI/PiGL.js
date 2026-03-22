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

// --- DYNAMIC & SSS UNIFORMS ---
uniform float uCloudScale;
uniform float uCloudThreshold; 
uniform float uCloudDensity;    
uniform float uCloudCoverage;   
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
            o = 0.5 + 0.5 * sin(uTime * 0.15 + 6.2831 * o);
            vec2 r = g + o - f;
            minDist = min(minDist, dot(r, r));
        }
    }
    return 1.0 - sqrt(minDist);
}

float getCloudNoise(vec2 uv, float t) {
    vec2 warp = vec2(worley(uv * 0.4 + t * 0.02), worley(uv * 0.4 - t * 0.02)) * 0.5;
    vec2 dUV = uv + warp;
    float v = worley(dUV) * 0.6 + worley(dUV * 2.5 + t * 0.1) * 0.3 + worley(dUV * 5.0) * 0.1;
    return v;
}

float speed(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
}

void main() {
    float depth = texture2D(uDepthTexture, vTexCoord).r;
    if (depth < 0.99) discard;

    vec4 clipPos = vec4(vTexCoord * 2.0 - 1.0, 1.0, 1.0);
    vec4 worldPosH = uInverseViewProjection * clipPos;
    vec3 worldPos = worldPosH.xyz / worldPosH.w;
    vec3 dir = normalize(worldPos - uCameraPos);
    vec3 lightDir = normalize(uLightDir);

    float sunDot = max(dot(dir, lightDir), 0.0);
    vec3 skyColor = mix(uBottomColor, uTopColor, smoothstep(-0.1, 0.8, dir.y));

    // Dynamic UVs
    float t = uTime * uCloudSpeed;
    vec2 cloudUV = (dir.xz / (max(dir.y, 0.01) + 0.2)) * uCloudScale + vec2(t, t * 0.1);

    // 1. DENSITY & OCCLUSION
    float density = getCloudNoise(cloudUV, t);
    float mask = smoothstep(1.0 - uCloudCoverage, 1.0 - uCloudCoverage + 0.2, density);
    
    // 2. SUN BLOCKING (Occlusion)
    // As the cloud density increases, the sun disk fades out
    float sunOcclusion = smoothstep(0.4, 0.8, density); 
    float sunVisibility = 1.0 - (sunOcclusion * uCloudDensity);

    // 3. SUBSURFACE SCATTERING (Forward Scattering)
    // Light bleeds through the edges (low density areas) when looking toward the sun
    float sss = pow(sunDot, 8.0) * (1.0 - density) * 2.0;
    
    // 4. BEER'S LAW SHADOWING (Standard Lighting)
    vec2 lightOffset = lightDir.xz * 0.12;
    float lightSample = getCloudNoise(cloudUV + lightOffset, t);
    float shadow = exp(-(density - lightSample) * 3.5);

    // 5. COLOR MIXING
    vec3 cloudBase = mix(uCloudShadeColor, uCloudMainColor, shadow);
    
    // Apply SSS: The edges glow with SunColor when in front of the sun
    vec3 cloudWithSSS = mix(cloudBase, uSunColor, sss * mask);

    // 6. FINAL COMPOSITION
    float alpha = mask * uCloudDensity * smoothstep(0.0, 0.1, dir.y);
    vec3 finalCloud = mix(skyColor, cloudWithSSS, alpha);

    // Render Sun Disk with Occlusion
    float sunDisk = smoothstep(0.998, 0.999, sunDot) * sunVisibility; 
    vec3 finalColor = finalCloud + (uSunColor * sunDisk * 2.0);
    
    gl_FragColor = vec4(finalColor, 1.0);
}