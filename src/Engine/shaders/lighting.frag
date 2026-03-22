precision highp float;

varying vec2 vUv;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uDepthTexture;
uniform sampler2D uRoughnessTexture;


// Shadows & Transform
uniform sampler2D uShadowMap;
uniform mat4 uInverseViewProjection;
uniform mat4 uLightSpaceMatrix;
uniform vec3 uCameraPos; 
uniform float uTime;

uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uAmbient;

uniform float uSpecularStrength;
uniform float uShininess;

// --- COMIC/TOON UNIFORMS ---
uniform vec3 uShadowColor; // Tint for the darkest areas

// --- VOLUMETRIC UNIFORMS ---
uniform float uVolumetricSteps;
uniform float uVolumetricIntensity; 
uniform float uVolumetricScattering; 

const int MAX_VOLUMETRIC_STEPS = 50;

// Preserved: Your shadow check for volumes
float isLit(vec3 pos) {
    vec4 posLightSpace = uLightSpaceMatrix * vec4(pos, 1.0);
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w;
    projCoords = projCoords * 0.5 + 0.5;
    
    if (projCoords.z > 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) 
        return 0.0;

    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; 
    float currentDepth = projCoords.z;
    float bias = 0.01; 
    return currentDepth - bias > closestDepth ? 0.0 : 1.0;
}

// Preserved: Your volumetric logic
vec3 calculateVolumetricLight(vec3 startPos, vec3 endPos) {
    vec3 rayVector = endPos - startPos;
    float rayLength = length(rayVector);
    vec3 rayDir = rayVector / rayLength;
    
    float maxDist = 50.0;
    if(rayLength > maxDist) rayLength = maxDist;
    
    float stepSize = rayLength / uVolumetricSteps;
    vec3 currentPos = startPos;
    
    float dither = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
    currentPos += rayDir * stepSize * dither;

    float accumulation = 0.0;
    for(int i = 0; i < MAX_VOLUMETRIC_STEPS; i++) {
        if(float(i) >= uVolumetricSteps) break;
        accumulation += isLit(currentPos);
        currentPos += rayDir * stepSize;
    }
    
    accumulation /= uVolumetricSteps;
    return uLightColor * accumulation * uVolumetricIntensity;
}

vec3 getWorldPosition(vec2 uv, float depth) {
    float near = 0.1;
    float far = 100.0;
    float linearDepth = depth * far;
    float z_ndc = 1.0; 
    if (linearDepth > 0.0001) {
        z_ndc = (far + near - (2.0 * near * far) / linearDepth) / (far - near);
    }
    vec4 clipSpacePosition = vec4(uv * 2.0 - 1.0, z_ndc, 1.0);
    vec4 worldPosition = uInverseViewProjection * clipSpacePosition;
    return worldPosition.xyz / worldPosition.w;
}

// Updated: Hard-cut shadow for surfaces
float calculateShadow(vec3 worldPos) {
    vec4 posLightSpace = uLightSpaceMatrix * vec4(worldPos, 1.0);
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w * 0.5 + 0.5;
    
    if (projCoords.z > 1.0) return 0.0;

    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; 
    float currentDepth = projCoords.z;
    
    // Hard step for shadow edge
    return (currentDepth - 0.005) > closestDepth ? 1.0 : 0.0;
}

void main() {
    vec4 sceneColor = texture2D(uSceneTexture, vUv);
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;
    float depthVal = texture2D(uDepthTexture, vUv).r;
    
    // 1. Sample Roughness (0.0 = Shiny, 1.0 = Matte)
    float roughness = texture2D(uRoughnessTexture, vUv).r;
    
    vec3 worldPos = getWorldPosition(vUv, depthVal);
    vec3 N = normalize(normalOrig * 2.0 - 1.0);
    vec3 L = normalize(uLightDir);
    vec3 V = normalize(uCameraPos - worldPos);
    vec3 H = normalize(L + V);

    // --- TOON DIFFUSE (Preserved) ---
    float shadow = calculateShadow(worldPos);
    float d = dot(N, L) * (1.0 - shadow); 
    float intensity = (d > 0.6) ? 1.0 : (d > 0.1 ? 0.7 : 0.2);

    // --- 2. CONTROLLED TOON SPECULAR ---
    // Use uShininess to control the "tightness"
    // We combine it with (1.0 - roughness) so the texture can still mute the shine
    float gloss = (1.0 - roughness);
    float specExponent = uShininess * 10.0 * gloss; 
    
    float specVal = pow(max(dot(N, H), 0.0), specExponent);

    // Use a high threshold for that "clean dot" look
    // We can use uSpecularStrength to influence how easily the highlight appears
    float threshold = 1.0 - (uSpecularStrength * 0.1 * gloss);
    threshold = clamp(threshold, 0.5, 0.99); // Keep it within a sane comic range

    float toonSpecular = step(threshold, specVal) * gloss;
    
    // Final specular color multiplied by uSpecularStrength for brightness
    vec3 finalSpecular = uLightColor * toonSpecular * uSpecularStrength * (1.0 - shadow);

    // --- 3. FINAL COMPOSITION ---
    vec3 toonDiffuse = mix(uShadowColor, uLightColor, intensity);
    vec3 volumeLight = calculateVolumetricLight(uCameraPos, worldPos);

    vec3 radiance = (uAmbient * uLightColor + toonDiffuse) * sceneColor.rgb + finalSpecular  + volumeLight;

    gl_FragColor = vec4(radiance, sceneColor.a);
}