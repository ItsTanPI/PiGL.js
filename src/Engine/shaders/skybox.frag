precision highp float;

varying vec2 vTexCoord;

uniform sampler2D uDepthTexture;
uniform mat4 uInverseViewProjection;
uniform vec3 uCameraPos;
uniform vec3 uLightDir;
uniform float uTime;

uniform vec3 uTopColor;
uniform vec3 uMidColor;
uniform vec3 uBottomColor;
uniform vec3 uSunColor;

uniform float uCloudScale;
uniform float uCloudThreshold;
uniform float uCloudDensity;
uniform float uCloudCoverage;
uniform float uCloudSpeed;
uniform vec3  uCloudMainColor;
uniform vec3  uCloudShadeColor;

// Cheap hash - single dot product instead of two
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// Cheap value noise - replaces Worley entirely
// Worley needs 9 cell lookups, value noise needs 4
float valueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    // Smooth interpolation
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    // Only 4 lookups instead of 9
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// 2 octaves only instead of 3 Worley calls
float getCloudNoise(vec2 uv, vec2 maskUV) {
    float base = valueNoise(uv) * 0.65
               + valueNoise(uv * 2.1) * 0.35;

    float mask = valueNoise(maskUV * 0.8) * 0.6
               + valueNoise(maskUV * 1.7 + vec2(3.1, 7.4)) * 0.4;

    return base * mask;
}

void main() {
    float depth = texture2D(uDepthTexture, vTexCoord).a;
    if (depth < 0.99) discard;

    vec4 clipPos = vec4(vTexCoord * 2.0 - 1.0, 1.0, 1.0);
    vec4 worldPosH = uInverseViewProjection * clipPos;
    vec3 worldPos = worldPosH.xyz / worldPosH.w;
    vec3 dir = normalize(worldPos - uCameraPos);
    vec3 lightDir = normalize(uLightDir);

    float sunDot = max(dot(dir, lightDir), 0.0);
    
    // Three-color gradient: bottom (horizon) -> mid (sky) -> top (zenith)
    vec3 skyColor;
    if (dir.y < 0.5) {
        // Bottom half: blend from bottom to mid color
        skyColor = mix(uBottomColor, uMidColor, smoothstep(-0.1, 0.5, dir.y));
    } else {
        // Top half: blend from mid to top color
        skyColor = mix(uMidColor, uTopColor, smoothstep(0.5, 0.8, dir.y));
    }

    float t = uTime * uCloudSpeed;
    vec2 cloudUV = (dir.xz / (max(dir.y, 0.01) + 0.2)) * uCloudScale;
    vec2 baseUV  = cloudUV + vec2(t * 0.5, t * 0.1);   // slow, different angle
    vec2 maskUV  = cloudUV + vec2(t * 0.08, -t * 0.5);   // faster, opposite drift

    float density = getCloudNoise(baseUV, maskUV);
    
    float mask = smoothstep(1.0 - uCloudCoverage, 1.0 - uCloudCoverage + 0.2, density);

    // Sun occlusion
    float sunOcclusion = smoothstep(0.4, 0.8, density);
    float sunVisibility = 1.0 - (sunOcclusion * uCloudDensity);

    // Cheap SSS approximation - no second noise sample
    float sss = pow(sunDot, 8.0) * (1.0 - density) * 2.0;

    // Fake shadow using density alone - removes second getCloudNoise call
    float shadow = 1.0 - density * 0.5;

    // Color mixing - unchanged, same look
    vec3 cloudBase = mix(uCloudShadeColor, uCloudMainColor, shadow);
    vec3 cloudWithSSS = mix(cloudBase, uSunColor, sss * mask);

    float alpha = mask * uCloudDensity * smoothstep(0.0, 0.1, dir.y);
    vec3 finalCloud = mix(skyColor, cloudWithSSS, alpha);

    float sunDisk = smoothstep(0.998, 0.999, sunDot) * sunVisibility;
    vec3 finalColor = finalCloud + (uSunColor * sunDisk * 2.0);

    gl_FragColor = vec4(finalColor, 1.0);
}