precision highp float;

varying vec2 vUv;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uDepthTexture;

uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uAmbient;

void main() {
    vec4 sceneColor = texture2D(uSceneTexture, vUv);
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;
    
    // Normals encoded as 0..1 in NormalPass (normal * 0.5 + 0.5)
    // Decode to -1..1
    vec3 N = normalize(normalOrig * 2.0 - 1.0);
    vec3 L = normalize(uLightDir);

    // Diffuse
    float diff = max(dot(N, L), 0.0);
    
    // Simple Lighting Model: (Ambient + Diffuse) * Albedo
    vec3 finalColor = sceneColor.rgb * (uLightColor * diff + uAmbient);

    gl_FragColor = vec4(finalColor, sceneColor.a);
}
