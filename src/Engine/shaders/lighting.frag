precision highp float;

varying vec2 vUv;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;

uniform vec3 uCameraPos; 
uniform float uTime;

uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uAmbient;

uniform float uSpecularStrength;
uniform float uShininess;

uniform vec3 uShadowColor;

void main() {
    vec4 sceneColor = texture2D(uSceneTexture, vUv);
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;
    float depthVal = texture2D(uNormalTexture, vUv).a;
    
    float roughness = texture2D(uSceneTexture, vUv).a;
    
    vec3 N = normalize(normalOrig * 2.0 - 1.0);
    vec3 L = normalize(uLightDir);
    vec3 H = normalize(L);

    // --- TOON DIFFUSE (Preserved) ---
    float d = dot(N, L); 
    float intensity = (d > 0.6) ? 1.0 : (d > 0.1 ? 0.7 : 0.2);

    // --- 2. CONTROLLED TOON SPECULAR ---
    float gloss = (1.0 - roughness);
    float specExponent = uShininess * 10.0 * gloss; 
    
    float specVal = pow(max(dot(N, H), 0.0), specExponent);

    // Use a high threshold for that "clean dot" look
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