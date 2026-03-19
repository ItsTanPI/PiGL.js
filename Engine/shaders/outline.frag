precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D uDepthTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uSceneTexture;

uniform vec2 uResolution;

// Tunable Uniforms
uniform float uDepthThreshold;
uniform float uNormalThreshold;
uniform float uThickness;
uniform vec4 uOutlineColor;

void main() {
    // Determine thickness scale
    float thickness = uThickness > 0.0 ? uThickness : 1.0;
    vec2 texelSize = (1.0 / uResolution) * thickness;

    // Default fallbacks if uniform is 0 (optional, but good for safety)
    float dThresh = uDepthThreshold > 0.0 ? uDepthThreshold : 0.5; 
    float nThresh = uNormalThreshold > 0.0 ? uNormalThreshold : 0.4;

    // 1. Sample Center
    float depthCenter = texture2D(uDepthTexture, vTexCoord).r;
    vec3 normalCenter = texture2D(uNormalTexture, vTexCoord).rgb;

    // 2. Sample Neighbors (Top, Right) for finite difference
    vec2 uvTop = vTexCoord + vec2(0.0, texelSize.y);
    vec2 uvRight = vTexCoord + vec2(texelSize.x, 0.0);

    float depthTop = texture2D(uDepthTexture, uvTop).r;
    float depthRight = texture2D(uDepthTexture, uvRight).r;

    vec3 normalTop = texture2D(uNormalTexture, uvTop).rgb;
    vec3 normalRight = texture2D(uNormalTexture, uvRight).rgb;

    // 3. Compute Differences
    // Depth: simple derivative magnitude
    float depthDiff0 = depthCenter - depthTop;
    float depthDiff1 = depthCenter - depthRight;
    // Scale by 100 to make depth differences more significant relative to threshold
    float edgeDepth = sqrt(pow(depthDiff0, 2.0) + pow(depthDiff1, 2.0)) * 100.0;
    
    // Normal: distance between normal vectors
    vec3 normalDiff0 = normalCenter - normalTop;
    vec3 normalDiff1 = normalCenter - normalRight;
    float edgeNormal = sqrt(dot(normalDiff0, normalDiff0) + dot(normalDiff1, normalDiff1));

    // 4. Thresholding
    float edge = 0.0;
    if (edgeDepth > dThresh) { edge = 1.0; }
    if (edgeNormal > nThresh) { edge = 1.0; }

    // 5. Output Outline Only
    // Transparent where no edge
    gl_FragColor = vec4(uOutlineColor.rgb, uOutlineColor.a * edge);
}
