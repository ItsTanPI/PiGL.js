precision highp float;

varying vec2 vUv;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uDepthTexture;

// Shadows
uniform sampler2D uShadowMap;
uniform mat4 uInverseViewProjection;
uniform mat4 uLightSpaceMatrix;

uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uAmbient;

// Reconstruct World Position from NDC Depth
vec3 getWorldPosition(vec2 uv, float depth) {
    // Current Depth is 0..1 (from linear depth tex)
    
    // We need to un-linearize to get View Space Depth or NDC Z
    // depth = linearDepth / far
    // linearDepth = depth * far
    // linearDepth = (2 * near * far) / (far + near - z_ndc * (far - near))
    
    // Solve for z_ndc:
    // far + near - z_ndc * (far - near) = (2 * near * far) / linearDepth
    // z_ndc * (far - near) = far + near - (2 * near * far) / linearDepth
    // z_ndc = (far + near - (2 * near * far) / linearDepth) / (far - near)
    
    float near = 0.1;
    float far = 100.0;
    
    float linearDepth = depth * far;
    
    // Avoid division by zero if depth is 0
    float z_ndc = 1.0; 
    if (linearDepth > 0.0001) {
        z_ndc = (far + near - (2.0 * near * far) / linearDepth) / (far - near);
    }
    
    vec4 clipSpacePosition = vec4(uv * 2.0 - 1.0, z_ndc, 1.0);
    vec4 worldPosition = uInverseViewProjection * clipSpacePosition;
    
    return worldPosition.xyz / worldPosition.w;
}

float calculateShadow(vec3 worldPos) {
    // Transform World Position to Light Space
    vec4 posLightSpace = uLightSpaceMatrix * vec4(worldPos, 1.0);
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w;
    
    // Transform to [0,1] range for texture lookup
    projCoords = projCoords * 0.5 + 0.5;
    
    // Check if outside light frustum
    if (projCoords.z > 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) 
        return 0.0;

    // Get closest depth from light's perspective (0..1)
    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; 
    
    // Current depth value
    float currentDepth = projCoords.z;
    
    // Bias to prevent shadow acne
    // Simple constant bias for now
    float bias = 0.005; 
    
    float shadow = currentDepth - bias > closestDepth ? 1.0 : 0.0;
    
    return shadow;
}

void main() {
    vec4 sceneColor = texture2D(uSceneTexture, vUv);
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;
    float depthVal = texture2D(uDepthTexture, vUv).r;
    
    // 1. Reconstruct World Position
    vec3 worldPos = getWorldPosition(vUv, depthVal);

    // 2. Decode Normal
    vec3 N = normalize(normalOrig * 2.0 - 1.0);
    
    // 3. Lighting Vectors
    vec3 L = normalize(uLightDir);

    // 4. Diffuse Component
    float diff = max(dot(N, L), 0.0);
    
    // 5. Shadow Calculation
    float shadow = calculateShadow(worldPos);
    
    // 6. Final Color: (Ambient + (1.0 - shadow) * Diffuse) * Albedo
    // Only apply shadow to diffuse light
    vec3 ambient = uAmbient * uLightColor;
    vec3 diffuse = diff * uLightColor;
    
    vec3 radiance = (ambient + (1.0 - shadow) * diffuse) * sceneColor.rgb;

    gl_FragColor = vec4(radiance, sceneColor.a);
}
