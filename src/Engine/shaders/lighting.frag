precision highp float;

varying vec2 vUv;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;

// Shadows & Transform
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

void main() {
    vec4 sceneColor = texture2D(uSceneTexture, vUv);
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;
    float depthVal = texture2D(uNormalTexture, vUv).a;
    
    float roughness = texture2D(uSceneTexture, vUv).a;
    
    vec3 worldPos = getWorldPosition(vUv, depthVal);
    vec3 N = normalize(normalOrig * 2.0 - 1.0);
    vec3 L = normalize(uLightDir);
    vec3 V = normalize(uCameraPos - worldPos);
    vec3 H = normalize(L + V);

    // --- TOON DIFFUSE (Preserved) ---
    float d = dot(N, L); 
    float intensity = (d > 0.6) ? 1.0 : (d > 0.1 ? 0.7 : 0.2);

    // --- 2. CONTROLLED TOON SPECULAR ---
    float gloss = (1.0 - roughness);
    float specExponent = uShininess * 10.0 * gloss; 
    
    float specVal = pow(max(dot(N, H), 0.0), specExponent);

    // Use a high threshold for that "clean dot" look
    // We can use uSpecularStrength to influence how easily the highlight appears
    float threshold = 1.0 - (uSpecularStrength * 0.1 * gloss);
    threshold = clamp(threshold, 0.5, 0.99); // Keep it within a sane comic range

    float toonSpecular = step(threshold, specVal) * gloss;
    
    // Final specular color multiplied by uSpecularStrength for brightness
    vec3 finalSpecular = uLightColor * toonSpecular * uSpecularStrength;

    // --- 3. FINAL COMPOSITION ---
    vec3 toonDiffuse = mix(uShadowColor, uLightColor, intensity);

    vec3 radiance = (uAmbient * uLightColor + toonDiffuse) * sceneColor.rgb + finalSpecular;

    gl_FragColor = vec4(radiance, sceneColor.a);
}