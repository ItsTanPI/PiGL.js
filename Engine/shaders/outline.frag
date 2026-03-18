precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D uDepthTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uSceneTexture;

uniform vec2 uResolution;

void main() {
    vec2 texelSize = 1.0 / uResolution;

    float depthThreshold = 0.7; // Sensitivity for depth
    float normalThreshold = 0.2; // Sensitivity for normals

    // Robert's Cross Operator or simple Neighbor difference
    
    // Sample Center
    float depthCenter = texture2D(uDepthTexture, vTexCoord).r;
    vec3 normalCenter = texture2D(uNormalTexture, vTexCoord).rgb; // [0,1]

    // Neighbors: Top, Right
    vec2 uvTop = vTexCoord + vec2(0.0, texelSize.y);
    vec2 uvRight = vTexCoord + vec2(texelSize.x, 0.0);

    float depthTop = texture2D(uDepthTexture, uvTop).r;
    float depthRight = texture2D(uDepthTexture, uvRight).r;

    vec3 normalTop = texture2D(uNormalTexture, uvTop).rgb;
    vec3 normalRight = texture2D(uNormalTexture, uvRight).rgb;

    // Depth Difference
    float depthFiniteDiff0 = depthCenter - depthTop;
    float depthFiniteDiff1 = depthCenter - depthRight;
    float edgeDepth = sqrt(pow(depthFiniteDiff0, 2.0) + pow(depthFiniteDiff1, 2.0)) * 100.0;
    
    // Normal Difference
    vec3 normalFiniteDiff0 = normalCenter - normalTop;
    vec3 normalFiniteDiff1 = normalCenter - normalRight;
    float edgeNormal = sqrt(dot(normalFiniteDiff0, normalFiniteDiff0) + dot(normalFiniteDiff1, normalFiniteDiff1));

    float edge = 0.0;
    if (edgeDepth > depthThreshold) { edge = 1.0; }
    if (edgeNormal > normalThreshold) { edge = 1.0; }

    // Output white edge on black background
    gl_FragColor = vec4(vec3(edge), 1.0) + texture2D(uSceneTexture, vTexCoord);
}
