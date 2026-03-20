precision highp float;

varying vec2 vUv;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uDepthTexture;

// Shadows & Transform
uniform sampler2D uShadowMap;
uniform mat4 uInverseViewProjection;
uniform mat4 uLightSpaceMatrix;
uniform vec3 uCameraPos; 
uniform float uTime; // Optional for noise

uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uAmbient;

// --- SPECULAR UNIFORMS ---
uniform float uSpecularStrength;
uniform float uShininess;

// --- VOLUMETRIC UNIFORMS ---
uniform float uVolumetricSteps;
uniform float uVolumetricIntensity; 
uniform float uVolumetricScattering; 

const int MAX_VOLUMETRIC_STEPS = 50; // Hard limit for loop

// Helper for shadow check without bias issues inside volume
float isLit(vec3 pos) {
    vec4 posLightSpace = uLightSpaceMatrix * vec4(pos, 1.0);
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w;
    projCoords = projCoords * 0.5 + 0.5;
    
    if (projCoords.z > 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) 
        return 0.0; // Outside light cone

    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; 
    float currentDepth = projCoords.z;
    
    // Slightly larger bias for volume sampling to avoid self-shadowing acne in air
    float bias = 0.01; 
    
    return currentDepth - bias > closestDepth ? 0.0 : 1.0; // 1.0 = Lit, 0.0 = Shadow
}

vec3 calculateVolumetricLight(vec3 startPos, vec3 endPos) {
    vec3 rayVector = endPos - startPos;
    float rayLength = length(rayVector);
    vec3 rayDir = rayVector / rayLength;
    
    // Max distance for volumetric fog
    float maxDist = 50.0;
    if(rayLength > maxDist) {
        rayLength = maxDist;
    }
    
    float stepSize = rayLength / uVolumetricSteps;
    vec3 currentPos = startPos;
    
    // Simple dither to break banding (using UV)
    float dither = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
    currentPos += rayDir * stepSize * dither;

    float accumulation = 0.0;

    for(int i = 0; i < MAX_VOLUMETRIC_STEPS; i++) {
        if(float(i) >= uVolumetricSteps) break;
        accumulation += isLit(currentPos);
        currentPos += rayDir * stepSize;
    }
    
    accumulation /= uVolumetricSteps;
    
    // Scattering phase function (simple isotropic for now)
    // float phase = 1.0 / (4.0 * 3.14159); 
    
    return uLightColor * accumulation * uVolumetricIntensity; // * phase;
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

float calculateShadow(vec3 worldPos) {
    vec4 posLightSpace = uLightSpaceMatrix * vec4(worldPos, 1.0);
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w;
    projCoords = projCoords * 0.5 + 0.5;
    
    if (projCoords.z > 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) 
        return 0.0;

    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; 
    float currentDepth = projCoords.z;
    float bias = 0.005; 
    
    return currentDepth - bias > closestDepth ? 1.0 : 0.0;
}

void main() {
    vec4 sceneColor = texture2D(uSceneTexture, vUv);
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;
    float depthVal = texture2D(uDepthTexture, vUv).r;
    
    // 1. Reconstruct World Position
    vec3 worldPos = getWorldPosition(vUv, depthVal);

    // 2. Vectors
    vec3 N = normalize(normalOrig * 2.0 - 1.0);
    vec3 L = normalize(uLightDir);
    vec3 V = normalize(uCameraPos - worldPos); // View Direction
    vec3 H = normalize(L + V);                // Halfway Vector (Blinn-Phong)

    // 3. Diffuse Component
    float diff = max(dot(N, L), 0.0);
    
    // 4. Specular Component
    // Only calculate specular if the surface is facing the light (diff > 0)
    float spec = pow(max(dot(N, H), 0.0), uShininess);
    vec3 specular = uSpecularStrength * spec * uLightColor;
    
    // 5. Shadow Calculation
    float shadow = calculateShadow(worldPos);
    
    // 6. Volumetric Lighting
    vec3 volumeLight = calculateVolumetricLight(uCameraPos, worldPos);

    // 7. Final Radiance Calculation
    vec3 ambient = uAmbient * uLightColor;
    vec3 diffuse = diff * uLightColor;
    
    // Shadow affects both Diffuse and Specular, but not Ambient
    vec3 lightContribution = (1.0 - shadow) * (diffuse + specular);
    
    // Add volumetric light (additive blending)
    vec3 radiance = (ambient + lightContribution) * sceneColor.rgb + volumeLight;

    gl_FragColor = vec4(radiance, sceneColor.a);
}