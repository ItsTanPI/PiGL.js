precision highp float;

varying vec2 vTexCoord;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uDepthTexture;

uniform float uPixelSize;
uniform float uColorLevels;
uniform vec2 uResolution;

// New Uniform for Edge Control
uniform float uEdgeWidth; // Try values between 1.0 and 3.0

uniform float uDepthThreshold;
uniform float uNormalThreshold;

uniform float uSilhouetteDarkening;
uniform float uCreaseDarkening;

void main() {
    // 1. PIXELATION
    vec2 size = uResolution / uPixelSize;
    vec2 uv = floor(vTexCoord * size) / size;
    vec2 texelSize = 1.0 / size;

    // 2. SAMPLING
    float depthCenter = texture2D(uDepthTexture, uv).r;
    vec3 normalCenter = texture2D(uNormalTexture, uv).rgb * 2.0 - 1.0;
    vec4 sceneColor = texture2D(uSceneTexture, uv);

    vec3 quantizedColor = floor(sceneColor.rgb * uColorLevels) / uColorLevels;

    float depthEdge = 0.0;
    float normalEdge = 0.0;

    // 3. EDGE DETECTION LOOP
    // We multiply the offset by uEdgeWidth to expand the search radius
    vec2 offsets[4];
    offsets[0] = vec2(1.0, 0.0) * uEdgeWidth;
    offsets[1] = vec2(-1.0, 0.0) * uEdgeWidth;
    offsets[2] = vec2(0.0, 1.0) * uEdgeWidth;
    offsets[3] = vec2(0.0, -1.0) * uEdgeWidth;

    for(int i = 0; i < 4; i++) {
        vec2 neighborUV = uv + offsets[i] * texelSize;
        
        float depthNeighbor = texture2D(uDepthTexture, neighborUV).r;
        // Sensitivity usually needs to decrease as width increases
        depthEdge = max(depthEdge, abs(depthCenter - depthNeighbor));

        vec3 normalNeighbor = texture2D(uNormalTexture, neighborUV).rgb * 2.0 - 1.0;
        normalEdge = max(normalEdge, (1.0 - dot(normalCenter, normalNeighbor)));
    }

    // 4. ADAPTIVE COLOR LOGIC
    vec3 finalColor = quantizedColor;

    if (normalEdge > uNormalThreshold) {
        finalColor = quantizedColor * uCreaseDarkening;
    }

    if (depthEdge > (uDepthThreshold / uEdgeWidth)) {
        finalColor = quantizedColor * uSilhouetteDarkening;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}