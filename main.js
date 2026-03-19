import { Camera } from './Engine/Rendering/Camera.js';
import { Shader } from './Engine/Rendering/Shader.js';
import { Renderer } from './Engine/Rendering/Renderer.js';
import { Material } from './Engine/Rendering/Material.js';
import { RenderTarget } from './Engine/Rendering/RenderTarget.js';
import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';


import { RenderQueue } from './Engine/Rendering/RenderQueue.js';
import { ObjectRenderPass } from './Engine/Rendering/ObjectRenderPass.js';
import { ScreenRenderPass } from './Engine/Rendering/ScreenRenderPass.js';
import { ViewportPass } from './Engine/Rendering/Passes/ViewportPass.js';
import { LightingPass } from './Engine/Rendering/Passes/LightingPass.js';
import { SkyboxPass } from './Engine/Rendering/Passes/SkyboxPass.js';
import { OutlinePass } from './Engine/Rendering/Passes/OutlinePass.js';
import { PixelArtPass } from './Engine/Rendering/Passes/PixelArtPass.js';

import { ProfilerInstrumenter } from './Engine/Profiling/Profiler.js';
import { Editor } from './Editor/Editor.js';
import { CameraController } from './Engine/Input/CameraController.js';

// Assets
import mainVs from './Engine/shaders/quad.vert?raw';
import mainFs from './Engine/shaders/quad.frag?raw';
import screenVs from './Engine/shaders/quad_screen.vert?raw';
import screenFs from './Engine/shaders/quad_screen.frag?raw';
import depthVs from './Engine/shaders/depth.vert?raw';
import depthFs from './Engine/shaders/depth.frag?raw';
import normalVs from './Engine/shaders/normal.vert?raw';
import normalFs from './Engine/shaders/normal.frag?raw';
import outlineFs from './Engine/shaders/outline.frag?raw';
import noiseFs from './Engine/shaders/noise.frag?raw';
import lightingVs from './Engine/shaders/lighting.vert?raw';
import lightingFs from './Engine/shaders/lighting.frag?raw';
import shadowVs from './Engine/shaders/shadow.vert?raw';
import shadowFs from './Engine/shaders/shadow.frag?raw';
import skyboxFs from './Engine/shaders/skybox.frag?raw';
import pixelArtFs from './Engine/shaders/pixelart.frag?raw';
import displacementVs from './Engine/shaders/displacement.vert?raw';
import displacementFs from './Engine/shaders/displacement.frag?raw';



const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
if (!gl) { alert('Unable to initialize WebGL.'); }
gl.getExtension('OES_standard_derivatives');
gl.getExtension('EXT_shader_texture_lod'); // Often useful

gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

let sceneBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, { minFilter: gl.NEAREST, magFilter: gl.NEAREST });
let depthBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, { minFilter: gl.NEAREST, magFilter: gl.NEAREST } );
let normalBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, { minFilter: gl.NEAREST, magFilter: gl.NEAREST });
let outlineBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, { minFilter: gl.NEAREST, magFilter: gl.NEAREST });
let pixelArtBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, { minFilter: gl.NEAREST, magFilter: gl.NEAREST });
let lightingBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, { minFilter: gl.NEAREST, magFilter: gl.NEAREST });
let shadowBuffer = new RenderTarget(gl, 1024, 1024);

const shaderMain = new Shader(gl, mainVs, mainFs);
const shaderScreen = new Shader(gl, screenVs, screenFs);
const shaderDepth = new Shader(gl, depthVs, depthFs);
const shaderShadow = new Shader(gl, shadowVs, shadowFs);
const shaderNormal = new Shader(gl, normalVs, normalFs);
const shaderOutline = new Shader(gl, screenVs, outlineFs);
const shaderNoise = new Shader(gl, mainVs, noiseFs);
const shaderDisplacemet = new Shader(gl, displacementVs, displacementFs);

const shaderLighting = new Shader(gl, lightingVs, lightingFs);
const shaderSkybox = new Shader(gl, screenVs, skyboxFs);
const shaderPixelArt = new Shader(gl, screenVs, pixelArtFs);

const matWhite = new Material(shaderMain, 'White');
const matRed = new Material(shaderMain, 'Red');
const matGrey = new Material(shaderMain, 'Grey');
const matBrown = new Material(shaderMain, 'Brown');



const matNoise = new Material(shaderNoise, 'Noise');
const matDisplacement = new Material(shaderDisplacemet, 'Displacement');

// Custom Depth/Normal Materials for Displacement
const shaderDisplacementDepth = new Shader(gl, displacementVs, depthFs);
const shaderDisplacementNormal = new Shader(gl, displacementVs, normalFs);
const matDisplacementDepth = new Material(shaderDisplacementDepth, 'Displacement Depth');
const matDisplacementNormal = new Material(shaderDisplacementNormal, 'Displacement Normal');

const matLighting = new Material(shaderLighting, 'PPL Lighting');
const matSkybox = new Material(shaderSkybox, 'Skybox');
const matPixelArt = new Material(shaderPixelArt, 'PixelArt');

const matShadow = new Material(shaderShadow, 'ShadowMap');
const matDepth = new Material(shaderDepth, 'Depth'); // Depth material
const matNormal = new Material(shaderNormal, 'Normal'); // Normal material
const matOutline = new Material(shaderOutline, 'Outline'); // Outline Material
const matScreen = new Material(shaderScreen, 'Screen'); // Final Screen Material (was just shader)


matPixelArt.setUniforms({
    'uPixelSize': 2.0,
    'uColorLevels': 128.0
});

// Set Initial Lighting to ensure it's not black
matLighting.setUniforms({
    'uLightDir': [1, 0.2, 10],
    'uLightColor': [1.0, 1.0, 0.9],
    'uAmbient': 0.5
});

matSkybox.setUniforms({
    'uTopColor': 	[0.21, 0.31, 0.49],
    'uBottomColor': 	[1.00, 0.51, 0.32],
    'uSunColor': [1.00, 0.84, 0.00]
});


// Default Outline Settings
matOutline.setUniforms({
    'uDepthThreshold': 0.5,
    'uNormalThreshold': 0.01,
    'uThickness': 1.0,
    'uOutlineColor': [1.0, 1.0, 1.0, 1.0]
});

matWhite.setUniforms({ 'uColor': [1.0, 1.0, 1.0, 1.0] });
matRed.setUniforms({ 'uColor': [1.0, 0.0, 0.0, 1.0] });
matGrey.setUniforms({ 'uColor': [0.4, 0.4, 0.4, 1.0] });
matBrown.setUniforms({ 'uColor': [0.804, 0.498, 0.196, 1.0] });


matNoise.setUniforms({ 
    'uColor': [1.0, 1.0, 1.0, 1.0],
    'uWind': [0.1, 0.2],    // Direction of the wind
    'uSpeed': 0.7,          // Adjust this to make the waving faster/slower
    'uScale': 1.0,          // Base density of the grass patches
    
    'uColor1': [0.3, 0.38, 0.2], 
    'uColor2': [0.35, 0.55, 0.15], 
    'uColor3': [0.85, 0.85, 0.85]
});

const waterConfig = {
    // Movement & Shape
    uWind: [0.05, 0.0],
    uSpeed: 5.0,           // Calm speed
    uScale: 0.08,          // Ripple frequency
    udisplacement: 0.75,    // Height of the noise ripples
    uSteepness: 0.2,       // Height of the Gerstner waves
    uWavelength: 25.0,     // Distance between waves
    
    // Natural Water Colors
    uColor1: [0.094, 0.271, 0.494], // Deep Navy (The pits/troughs)
    uColor2: [0.196, 0.404, 0.624],  // Tropical Turquoise (The slopes)
    uColor3: [0.8, 0.8, 1.0],   // Sea Foam White (The crests)
};


// List of all materials that need these exact parameters
const waterMaterials = [
    matDisplacement, 
    matDisplacementDepth, 
    matDisplacementNormal
];

waterMaterials.forEach(mat => {
    mat.setUniforms(waterConfig);
});

// Register Materials for Editor
const materials = {
    'White': matWhite,
    'Red': matRed,
    'Noise': matNoise,
    'Lighting': matLighting,
    'Skybox': matSkybox,
    'PixelArt': matPixelArt,
    'Shadow': matShadow,
    'Depth': matDepth,
    'Normal': matNormal,
    'Outline': matOutline,
    'Screen': matScreen,
    'displacemetn' : matDisplacement
};


const renderer = new Renderer(gl);
const camera = new Camera();
const lightCamera = new Camera(); // Camera for shadow casting

const scene = [];
const renderQueue = new RenderQueue();

// 0. Shadow Pass
const shadowPass = new ObjectRenderPass(gl, shadowBuffer.width, shadowBuffer.height, shadowBuffer, matShadow, 'Shadow Pass');
shadowPass.clearColor = [1.0, 1.0, 1.0, 1.0]; // Set depth to max
shadowPass.autoResize = false; // Fixed resolution
renderQueue.addPass(shadowPass);

// 1. Depth Pass
const depthPass = new ObjectRenderPass(gl, canvas.width, canvas.height, depthBuffer, matDepth, 'Depth Pass');
depthPass.clearColor = [1.0, 1.0, 1.0, 1.0];
renderQueue.addPass(depthPass);

// 2. Normal Pass
const normalPass = new ObjectRenderPass(gl, canvas.width, canvas.height, normalBuffer, matNormal, 'Normal Pass');
normalPass.clearColor = [0.5, 0.5, 1.0, 1.0];
renderQueue.addPass(normalPass);

// 3. Albedo Pass 
const scenePass = new ObjectRenderPass(gl, canvas.width, canvas.height, sceneBuffer, null, 'Albedo Pass');
scenePass.clearColor = [0.0, 0.0, 0.0, 1.0];
renderQueue.addPass(scenePass);

// 4. Lighting Pass
const lightingPass = new LightingPass(gl, canvas.width, canvas.height, matLighting, lightingBuffer, 'Lighting Pass');
lightingPass.setInputBuffers(sceneBuffer.texture, normalBuffer.texture, depthBuffer.texture, shadowBuffer.texture);
renderQueue.addPass(lightingPass);

// 4b. Skybox Pass (Draws on top of lighting where depth is far)
const skyboxPass = new SkyboxPass(gl, canvas.width, canvas.height, matSkybox, lightingBuffer, 'Skybox Pass');
skyboxPass.setInputTexture(depthBuffer.texture);
renderQueue.addPass(skyboxPass);

// 5. Pixel Art Pass
const pixelArtPass = new PixelArtPass(gl, canvas.width, canvas.height, matPixelArt, pixelArtBuffer, 'PixelArt Pass');
pixelArtPass.setInputBuffers(lightingBuffer.texture, depthBuffer.texture, normalBuffer.texture);
renderQueue.addPass(pixelArtPass);

// 6. Outline Pass (Post-Processing)
// const outlinePass = new OutlinePass(gl, canvas.width, canvas.height, matOutline, outlineBuffer, 'Outline Pass');
// outlinePass.setInputBuffers(depthBuffer.texture, normalBuffer.texture);
// outlinePass.clearColor = [0.0   , 0.0, 0.0, 0.0];
// renderQueue.addPass(outlinePass);

// 6. Viewport Pass
const viewportPass = new ViewportPass(gl, canvas.width, canvas.height, matScreen);
viewportPass.setBuffer('Final', pixelArtBuffer.texture);
viewportPass.setBuffer('Pixel', pixelArtBuffer.texture);
// viewportPass.setBuffer('Outline', outlineBuffer.texture);
viewportPass.setBuffer('Lit', lightingBuffer.texture);
viewportPass.setBuffer('Albedo', sceneBuffer.texture);
viewportPass.setBuffer('Normal', normalBuffer.texture);
viewportPass.setBuffer('Depth', depthBuffer.texture);
viewportPass.setBuffer('Shadow', shadowBuffer.texture);
// Assign critical camera overrides for pipeline automatization
shadowPass.camera = lightCamera;
lightingPass.lightCamera = lightCamera;
renderQueue.addPass(viewportPass);


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    // Resize buffers
    sceneBuffer.resize(canvas.width, canvas.height);
    depthBuffer.resize(canvas.width, canvas.height);
    normalBuffer.resize(canvas.width, canvas.height);
    outlineBuffer.resize(canvas.width, canvas.height);
    lightingBuffer.resize(canvas.width, canvas.height);
    pixelArtBuffer.resize(canvas.width, canvas.height);
    // shadowBuffer is fixed size for now or could be dynamic
    
    // Resize passes
    renderQueue.resize(canvas.width, canvas.height);

    // Update Camera Aspect Ratio
    const aspect = canvas.width / canvas.height;
    camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial call

// Perspective setup
const aspect = canvas.width / canvas.height;
camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);
camera.transform.position.set(-8.04, -0.21, -18.09);
camera.transform.rotation.set(-0.01, -9.35, 0.00);
// camera.transform.rotation.y = Math.PI / 4; 
// camera.transform.rotation.x = -Math.asin(1 / Math.sqrt(3));

let meshObj = null;
let waterObj = null
let floorObj = null;
let sandObj = null;
let Clouds = null;


// Load Cube
ObjLoader.load(gl, './Assets/3D/LightHouse.obj').then(mesh => {
    meshObj = new GameObject(renderer, matWhite, mesh, 'Cube'); 
    // meshObj.transform.position.set(0, 2, 0);
    meshObj.transform.position.set(0, -7, 0);
    meshObj.transform.scale.set(50, 50, 50);
    scene.push(meshObj);

});

ObjLoader.load(gl, './Assets/3D/LightHouseRed.obj').then(mesh => {
    waterObj = new GameObject(renderer, matRed, mesh, 'Water'); 
    waterObj.transform.position.set(0, -7, 0);
    waterObj.transform.scale.set(50, 50, 50);
    scene.push(waterObj);
});

//LightHouseBrown.obj
let waterObj1 = null
ObjLoader.load(gl, './Assets/3D/LightHouseBrown.obj').then(mesh => {
    waterObj1 = new GameObject(renderer, matBrown, mesh, 'Water'); 
    waterObj1.transform.position.set(0, -7, 0);
    waterObj1.transform.scale.set(50, 50, 50);
    scene.push(waterObj1);
});


ObjLoader.load(gl, './Assets/3D/Clouds.obj').then(mesh => {
    Clouds = new GameObject(renderer, matWhite, mesh, 'Clouds');
    Clouds.transform.position.set(0, -7, 0);
    Clouds.transform.scale.set(50, 50, 50);
    scene.push(Clouds);

});

ObjLoader.load(gl, './Assets/3D/DetailedPlaneSand.obj').then(mesh => {
    sandObj = new GameObject(renderer, matGrey, mesh, 'Sand');
    sandObj.transform.position.set(0, -7, 0);
    sandObj.transform.scale.set(50, 50, 50);
    scene.push(sandObj);

});


ObjLoader.load(gl, './Assets/3D/DetailedPlane.obj').then(mesh => {
    floorObj = new GameObject(renderer, matDisplacement, mesh, 'Floor');
    floorObj.depthMaterial = matDisplacementDepth;
    floorObj.normalMaterial = matDisplacementNormal;
    floorObj.transform.position.set(0, -5, 0);
    floorObj.transform.scale.set(50, 50, 50);
    scene.push(floorObj);

});


const viewports = [
    { x: 0.0, y: 0.0, w: 1.0, h: 1.0, pass: 'Final' } // Default Fullscreen
];

viewportPass.setViewports(viewports);


const game = {
    gl,
    scene,
    camera,
    renderer,
    renderQueue,
    materials, 
    viewportPass
};

game.setViewports = (mode) => {
    viewports[0].pass = mode; 
};

const editor = new Editor(game);

const cameraController = new CameraController(camera, canvas);

const profiler = ProfilerInstrumenter.attach(renderQueue, renderer);

function loop(now) {
    Time.update(now);
    game.deltaTime = Time.deltaTime; // Expose to editor for profiler
    
    // Update Camera (WASD + Right Mouse)
    cameraController.update(Time.deltaTime);

    if (meshObj) {
        // Spin the cube
        // meshObj.transform.rotation.x += 1.0 * Time.deltaTime;
        // meshObj.transform.rotation.y += 1.0 * Time.deltaTime;
    }

    // Update noise time
    matDisplacement.setUniforms({ 
        'uTime': Time.time,
    });
    matDisplacementDepth.setUniforms({ 'uTime': Time.time });
    matDisplacementNormal.setUniforms({ 'uTime': Time.time });

    // --- Update Lights & Shadow Camera ---
    // Read directly from material so editor changes reflect instantly
    let lightDir = [0.5, 0.8, 0.2]; // Default
    if (matLighting.uniforms['uLightDir'] && matLighting.uniforms['uLightDir'].value) {
        const v = matLighting.uniforms['uLightDir'].value;
        // Normalize for safe camera math
        const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
        if (len > 0.001) {
            lightDir = [v[0]/len, v[1]/len, v[2]/len];
        } else {
             lightDir = [v[0], v[1], v[2]];
        }
    }

    // Keep the shadow camera static at the global origin (0,0,0) - NOT following the main camera
    const lightTarget = [0, 0, 0];
    const dist = 50.0;
    
    lightCamera.transform.position.set(
        lightTarget[0] + lightDir[0] * dist,
        lightTarget[1] + lightDir[1] * dist,
        lightTarget[2] + lightDir[2] * dist
    );
    
    const size = 30.0;
    lightCamera.setOrthographic(-size, size, -size, size, 1.0, 100.0);
    
    lightCamera.transform.rotation.x = -Math.asin(lightDir[1]); 
    lightCamera.transform.rotation.y = Math.atan2(lightDir[0], lightDir[2]); 

    lightCamera.updateView();


    camera.updateView();

    viewportPass.setViewports(viewports);
    shadowPass.camera = lightCamera;

    // Update Skybox Uniforms
    if (matSkybox.uniforms['uSunColor']) {
        skyboxPass.setLight(lightDir, 
            matSkybox.uniforms['uSunColor'].value, 
            matSkybox.uniforms['uTopColor'].value, 
            matSkybox.uniforms['uBottomColor'].value
        );
    }

    renderQueue.execute(renderer, scene, camera);
    
    // Debugging - Manual is replaced by queue
    // shadowPass.execute(renderer, scene, lightCamera);

    // depthPass.execute(renderer, scene, camera);
    // normalPass.execute(renderer, scene, camera);
    // scenePass.execute(renderer, scene, camera);

    // lightingPass.setMatricesFromCameras(camera, lightCamera);
    // lightingPass.execute(renderer, scene, camera);
    // viewportPass.execute(renderer, scene, camera);
    
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

