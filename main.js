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
import { ViewportPass } from './Engine/Rendering/Passes/ViewportPass.js';
import { LightingPass } from './Engine/Rendering/Passes/LightingPass.js';
import { SkyboxPass } from './Engine/Rendering/Passes/SkyboxPass.js';
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
import waterVs from './Engine/shaders/Water.vert?raw';
import waterFs from './Engine/shaders/Water.frag?raw';



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
const shaderDisplacemet = new Shader(gl, waterVs, waterFs);

const shaderLighting = new Shader(gl, lightingVs, lightingFs);
const shaderSkybox = new Shader(gl, screenVs, skyboxFs);
const shaderPixelArt = new Shader(gl, screenVs, pixelArtFs);

const matWhite = new Material(shaderMain, 'White');
const matRed = new Material(shaderMain, 'Red');
const matGrey = new Material(shaderMain, 'Grey');
const matBrown = new Material(shaderMain, 'Brown');



const matNoise = new Material(shaderNoise, 'Noise');
const matWater = new Material(shaderDisplacemet, 'Water');

// Custom Depth/Normal Materials for Displacement
const shaderWaterDepth = new Shader(gl, waterVs, depthFs);
const shaderWaterNormal = new Shader(gl, waterVs, normalFs);
const matWaterDepth = new Material(shaderWaterDepth, 'Water Depth');
const matWaterNormal = new Material(shaderWaterNormal, 'Water Normal');

const matLighting = new Material(shaderLighting, 'PPL Lighting');
const matSkybox = new Material(shaderSkybox, 'Skybox');
const matPixelArt = new Material(shaderPixelArt, 'PixelArt');

const matShadow = new Material(shaderShadow, 'ShadowMap');
const matDepth = new Material(shaderDepth, 'Depth'); // Depth material
const matNormal = new Material(shaderNormal, 'Normal'); // Normal material
const matOutline = new Material(shaderOutline, 'Outline'); // Outline Material
const matScreen = new Material(shaderScreen, 'Screen'); // Final Screen Material


matPixelArt.setUniforms({
    'uPixelSize': 2.0,
    'uColorLevels': 128.0,
    'uDepthThreshold': 0.05,
    'uNormalThreshold': 0.2,
    'uSilhouetteDarkening': 0.2,
    'uCreaseDarkening': 0.7
});

// Set Initial Lighting to ensure it's not black
matLighting.setUniforms({
    'uLightDir': [1, 0.2, 10],
    'uLightColor': [1.0, 0.7, 0.4],
    'uAmbient': 0.5,
    'uSpecularStrength': 0.7,
    'uShininess': 32.0,
    'uVolumetricSteps': 20,
    'uVolumetricIntensity': 0.1,
    'uVolumetricScattering': 0.5
});

matSkybox.setUniforms({
    'uTopColor': 	[0.21, 0.31, 0.49],
    'uBottomColor': 	[1.00, 0.51, 0.32],
    'uSunColor': [1.00, 0.33, 0.10],
    'uCloudScale': 5.4,
    'uCloudThreshold': 0.01,
    'uCloudDensity': 0.2,
    'uCloudCoverage': 0.76,
    'uCloudSpeed': 0.02,
    'uCloudMainColor': [1.0, 0.49, 0.37],
    'uCloudShadeColor': [0.9, 0.35, 0.25]
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
    matWater, 
    matWaterDepth, 
    matWaterNormal
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
    'Water' : matWater
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

// 6. Viewport Pass
const viewportPass = new ViewportPass(gl, canvas.width, canvas.height, matScreen);
viewportPass.setBuffer('Final', pixelArtBuffer.texture);
viewportPass.setBuffer('Pixel', pixelArtBuffer.texture);
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

let lighthouseMain = null;
let lighthouseRed = null;
let waterFloor = null;
let sandPlane = null;
let cloudObjects = null;
let lighthouseBrown = null;


// Load Cube
ObjLoader.load(gl, './Assets/3D/LightHouse.obj').then(mesh => {
    lighthouseMain = new GameObject(renderer, matWhite, mesh, 'Lighthouse Main'); 
    lighthouseMain.transform.position.set(0, -7, 0);
    lighthouseMain.transform.scale.set(50, 50, 50);
    scene.push(lighthouseMain);
});

ObjLoader.load(gl, './Assets/3D/LightHouseRed.obj').then(mesh => {
    lighthouseRed = new GameObject(renderer, matRed, mesh, 'Lighthouse Red'); 
    lighthouseRed.transform.position.set(0, -7, 0);
    lighthouseRed.transform.scale.set(50, 50, 50);
    scene.push(lighthouseRed);
});

ObjLoader.load(gl, './Assets/3D/LightHouseBrown.obj').then(mesh => {
    lighthouseBrown = new GameObject(renderer, matBrown, mesh, 'Lighthouse Brown'); 
    lighthouseBrown.transform.position.set(0, -7, 0);
    lighthouseBrown.transform.scale.set(50, 50, 50);
    scene.push(lighthouseBrown);
});


ObjLoader.load(gl, './Assets/3D/Clouds.obj').then(mesh => {
    cloudObjects = new GameObject(renderer, matWhite, mesh, 'Clouds');
    cloudObjects.transform.position.set(0, -7, 25);
    cloudObjects.transform.scale.set(50, 50, 50);
    cloudObjects.transform.rotation.set(0, Math.PI, 0);
    scene.push(cloudObjects);
});

ObjLoader.load(gl, './Assets/3D/DetailedPlaneSand.obj').then(mesh => {
    sandPlane = new GameObject(renderer, matGrey, mesh, 'Sand Plane');
    sandPlane.transform.position.set(0, -7, 0);
    sandPlane.transform.scale.set(50, 50, 50);
    scene.push(sandPlane);
});


ObjLoader.load(gl, './Assets/3D/DetailedPlane.obj').then(mesh => {
    waterFloor = new GameObject(renderer, matWater, mesh, 'Water Floor');
    waterFloor.depthMaterial = matWaterDepth;
    waterFloor.normalMaterial = matWaterNormal;
    waterFloor.transform.position.set(0, -5, 25);
    waterFloor.transform.scale.set(50, 50, 50);
    scene.push(waterFloor);
});


const viewports = [
    { x: 0.0, y: 0.0, w: 1.0, h: 1.0, pass: 'Final' } // Default Fullscreen
];

viewportPass.setViewports(viewports);


const game = {
    gl,
    scene,
    camera,
    lightCamera,
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

    if (lighthouseMain) {
        // logic if any
    }

    // Update noise time
    matWater.setUniforms({ 
        'uTime': Time.time,
    });
    matWaterDepth.setUniforms({ 'uTime': Time.time });
    matWaterNormal.setUniforms({ 'uTime': Time.time });
    matSkybox.setUniforms({ 'uTime': Time.time });


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

    // Re-apply viewport setup every frame to ensure current mode is used
    viewportPass.setViewports(viewports);
    shadowPass.camera = lightCamera;

    // Update Projecton for both cameras in case settings changed in inspector
    camera.updateProjection();
    lightCamera.updateProjection();

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

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

