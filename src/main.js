// #region Imports

import { Camera } from './Engine/Rendering/Camera.js';
import { Shader } from './Engine/Rendering/Shader.js';
import { Renderer } from './Engine/Rendering/Renderer.js';
import { Material } from './Engine/Rendering/Material.js';
import { RenderTarget } from './Engine/Rendering/RenderTarget.js';
import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import { Texture } from './Engine/Rendering/Texture.js';
import { RenderQueue } from './Engine/Rendering/RenderQueue.js';
import { ObjectRenderPass } from './Engine/Rendering/ObjectRenderPass.js';
import { ViewportPass } from './Engine/Rendering/Passes/ViewportPass.js';
import { LightingPass } from './Engine/Rendering/Passes/LightingPass.js';
import { SkyboxPass } from './Engine/Rendering/Passes/SkyboxPass.js';
import { PixelArtPass } from './Engine/Rendering/Passes/PixelArtPass.js';
import { WireframePass } from './Engine/Rendering/Passes/WireframePass.js';
import { ProfilerInstrumenter } from './Engine/Profiling/Profiler.js';
import { Editor } from './Editor/Editor.js';
import { CameraController } from './Engine/Input/CameraController.js';
import { FloatingObjectSpawner } from './FloatingObjectSpawner.js';

// Shader imports
import screenVs from './Engine/shaders/quad_screen.vert?raw';
import screenFs from './Engine/shaders/quad_screen.frag?raw';
import lightingVs from './Engine/shaders/lighting.vert?raw';
import lightingFs from './Engine/shaders/lighting.frag?raw';
import skyboxFs from './Engine/shaders/skybox.frag?raw';
import pixelArtFs from './Engine/shaders/pixelart.frag?raw';
import waterVs from './Engine/shaders/Water.vert?raw';
import waterFs from './Engine/shaders/Water.frag?raw';
import BuoyancyVs from './Engine/shaders/Buoyancy.vert?raw';
import masterVs from './Engine/shaders/ShaderLib/Master.vert?raw';
import masterFs from './Engine/shaders/ShaderLib/Master.frag?raw';

// #endregion

// #region Configuration

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// #endregion

// #region WebGL Initialization

const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl');
if (!gl) { alert('Unable to initialize WebGL.'); }

// WebGL state setup
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK);
gl.frontFace(gl.CCW);
gl.getExtension('EXT_color_buffer_float');

// #endregion

// #region Render Targets

// Albedo — 8bit RGBA is enough, no need for float
let sceneBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, {
    format: 'RGBA', precision: '8',
    minFilter: gl.NEAREST, magFilter: gl.NEAREST
});

// Depth — single channel, needs 32f for precision
let Gbuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, {
    format: 'RGBA', precision: '8',
    depth: true,
    minFilter: gl.NEAREST, magFilter: gl.NEAREST
});

// Pixel art pass — 8bit RGBA, plain color output
let pixelArtBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, {
    format: 'RGB', precision: '8',
    depth: false,
    minFilter: gl.NEAREST, magFilter: gl.NEAREST
});

let lightingBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight, {
    format: 'RGB', precision: '8',
    depth: false,
    minFilter: gl.NEAREST, magFilter: gl.NEAREST
});

// #endregion

// #region Shaders

const shaderMain = new Shader(gl, masterVs, masterFs);
const shaderBuoyancy = new Shader(gl, [BuoyancyVs, masterVs], masterFs);
const shaderScreen = new Shader(gl, screenVs, screenFs);
const shaderDisplacemet = new Shader(gl, [waterVs, masterVs], [waterFs, masterFs]);
const shaderLighting = new Shader(gl, lightingVs, lightingFs);
const shaderSkybox = new Shader(gl, screenVs, skyboxFs);
const shaderPixelArt = new Shader(gl, screenVs, pixelArtFs);

// #endregion

// #region Textures

const shipTexture = new Texture(gl, './Assets/Textures/colormap.png');

// #endregion

// #region Materials & Uniforms

const matScene = new Material(shaderMain, 'Scene Mat');
const matBuoyancy = new Material(shaderBuoyancy, 'Ship Mat');
const matWater = new Material(shaderDisplacemet, 'Water');
const matLighting = new Material(shaderLighting, 'PPL Lighting');
const matSkybox = new Material(shaderSkybox, 'Skybox');
const matPixelArt = new Material(shaderPixelArt, 'PixelArt');
const matScreen = new Material(shaderScreen, 'Screen');

// Buoyancy material setup
matBuoyancy.setUniforms({ 
    'uColor': [1.0, 1.0, 1.0, 1.0], 
    'uHasTexture': 1.0, 
    'uMainTex': shipTexture.texture, 
    'uRoughness': 1.0,
    'uSampleRadius': 0.25  // Multi-point wave sampling for smooth buoyancy
});

// Scene material setup
matScene.setUniforms({ 
    'uColor': [1.0, 1.0, 1.0, 1.0], 
    'uHasTexture': 1.0, 
    'uMainTex': shipTexture.texture, 
    'uRoughness': 1.0
});

// Pixel art material setup
matPixelArt.setUniforms({
    'uPixelSize': isMobile ? 1 : 3.0,
    'uEdgeWidth': 0.5,
    'uColorLevels': 128.0,
    'uDepthThreshold': 0.025,
    'uNormalThreshold': 0.1,
    'uSilhouetteDarkening': 0.2, // Darker for outer edges
    'uCreaseDarkening': 0.7,     // Lighter for inner corners/color changes
});

// Lighting material setup
matLighting.setUniforms({
    'uLightDir': [1, 0.2, 10],
    'uLightColor': [1.0, 0.8, 0.75],
    'uAmbient': 0.5,
    'uSpecularStrength': 0.3,
    'uShininess': 0.03
});

// Skybox material setup
matSkybox.setUniforms({
    'uTopColor': [0.133, 0.137, 0.251],
    'uMidColor': [0.749, 0.286, 0.369],
    'uBottomColor': [0.996, 0.431, 0.243],
    'uSunColor': [0.894, 0.514, 0.384],
    'uCloudScale': 5.4,
    'uCloudThreshold': 0.01,
    'uCloudDensity': 0.5,
    'uCloudCoverage': 0.8,
    'uCloudSpeed': 0.35,
    'uCloudMainColor': [1.0, 0.49, 0.37],
    'uCloudShadeColor': [0.9, 0.35, 0.25]
});

// Water configuration shared between materials
const waterConfig = {
    'uWind': [1, 1],
    'uSpeed': 0.5,
    'udisplacement': 1.5,
    'uScale': 1,
    'uBuoyancyRotation': 0.3,
    'uColor1': [0.090, 0.271, 0.490], 
    'uColor2': [0.192, 0.404, 0.624],  
    'uColor3': [0.800, 0.800, 1.000],   
    'uColor1Smoothstep': [0, 0.5],   
    'uColor2Smoothstep': [0, 2],   
    'uWaveA': [-0.35, 0.70, 0.13, 3.92],
    'uWaveB': [-0.95, 0.51, 0.10, 2.25],
    'uWaveC': [-0.4, -2, 0.1, 13.5],
    'uColorBands': 3.0,
    'uRoughness': 0.0,
};

matBuoyancy.setUniforms(waterConfig);
matWater.setUniforms(waterConfig);
matBuoyancy.setUniforms({ 'uRoughness': 1.0 });

// Register Materials for Editor
const materials = {
    'Lighting': matLighting,
    'Skybox': matSkybox,
    'PixelArt': matPixelArt,
    'Water': matWater,
    'Buoyancy': matBuoyancy
};

// #endregion

// #region Renderer & Core Systems

const renderer = new Renderer(gl);
const camera = new Camera();
const lightCamera = new Camera();
const scene = [];
const renderQueue = new RenderQueue(gl);

// #endregion

// #region Render Passes

// GBuffer Pass - Depth information
const GbufferPass = new ObjectRenderPass(gl, canvas.width, canvas.height, Gbuffer, 1, 'GBuffer Pass');
GbufferPass.clearColor = [0.5, 0.5, 1.0, 1.0];
GbufferPass.clearDepth = true;
renderQueue.addPass(GbufferPass);

// Albedo Pass
const scenePass = new ObjectRenderPass(gl, canvas.width, canvas.height, sceneBuffer, 0, 'Albedo Pass');
scenePass.clearColor = [0.0, 0.0, 0.0, 1.0];
scenePass.clearDepth = true;
renderQueue.addPass(scenePass);

// Lighting Pass
const lightingPass = new LightingPass(gl, canvas.width, canvas.height, matLighting, lightingBuffer, 'Lighting Pass');
lightingPass.setInputBuffers(sceneBuffer.texture, Gbuffer.texture);
renderQueue.addPass(lightingPass);

// Skybox Pass
const skyboxPass = new SkyboxPass(gl, canvas.width, canvas.height, matSkybox, lightingBuffer, 'Skybox Pass');
skyboxPass.setInputTexture(Gbuffer.texture);
renderQueue.addPass(skyboxPass);

// Pixel Art Pass
const pixelArtPass = new PixelArtPass(gl, canvas.width, canvas.height, matPixelArt, pixelArtBuffer, 'PixelArt Pass');
pixelArtPass.setInputBuffers(lightingBuffer.texture, Gbuffer.texture);
renderQueue.addPass(pixelArtPass);

// Wireframe Pass (Desktop only)
const wireframePass = new WireframePass(gl, canvas.width, canvas.height, pixelArtBuffer, 'Wireframe Pass');
if (!isMobile) {
    wireframePass.setWireColor(0.0, 1.0, 0.0);
    wireframePass.setOpacity(1.0);
    renderQueue.addPass(wireframePass);
}

// Viewport Pass - Final compositing
const viewportPass = new ViewportPass(gl, canvas.width, canvas.height, matScreen);
viewportPass.setBuffer('Final', pixelArtBuffer.texture);
viewportPass.setBuffer('Pixel', pixelArtBuffer.texture);
viewportPass.setBuffer('Lit', lightingBuffer.texture);
viewportPass.setBuffer('Albedo', sceneBuffer.texture);
viewportPass.setBuffer('Gbuffer', Gbuffer.texture);

lightingPass.lightCamera = lightCamera;
renderQueue.addPass(viewportPass);

// #endregion

// #region Window Management

function resizeCanvas() {
    // 1. Physical Canvas size (the display size on screen)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 2. Calculate the internal "Render Resolution"
    const scale = isMobile ? 0.5 : 1.0;
    const renderW = Math.floor(canvas.width * scale);
    const renderH = Math.floor(canvas.height * scale);

    // 3. Set the Viewport to match the Render Resolution
    gl.viewport(0, 0, renderW, renderH);
    
    // 4. Resize your Buffers to the Render Resolution, NOT the window size
    // This is where the actual performance gain happens
    sceneBuffer.resize(renderW, renderH);
    Gbuffer.resize(renderW, renderH);
    lightingBuffer.resize(renderW, renderH);
    pixelArtBuffer.resize(renderW, renderH);
    
    renderQueue.resize(renderW, renderH);

    // 5. Camera aspect ratio should still use the visual aspect
    const aspect = canvas.width / canvas.height;
    camera.setPerspective(0.8, aspect, 0.1, 1000.0);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// #endregion

// #region Camera Setup

const aspect = canvas.width / canvas.height;
camera.setPerspective(0.8, aspect, 0.1, 1000.0);
camera.transform.position.set(-39.2, 1.8, -47);
camera.transform.rotation.set(0.0, isMobile ? 3.24 : 3.22, 0);

const size = 30.0;
lightCamera.setOrthographic(-size, size, -size, size, 1.0, 100.0);

// #endregion

// #region Scene Objects Loading

ObjLoader.load(gl, './Assets/3D/scene.obj').then(mesh => {
    const obj = new GameObject(renderer, matScene, mesh, 'Scene');
    obj.transform.position.set(-15, -6.1, 10);
    obj.transform.scale.set(1, 1, 1);
    scene.push(obj);
});

// #endregion

// #region Floating Objects Configuration

const floatingSpawner = new FloatingObjectSpawner(gl, renderer, matBuoyancy, scene);

const oceanConfig = {
    direction: { x: 0.207, y: 0, z: -0.707 },
    speed: 0.0
};

const floatingSpawnConfig = {
    enabled: isMobile ? false : true,
    count: 50,
    seed: 68,
    bounds: {
        minX: -70,
        maxX: 50,
        minZ: -55,
        maxZ: 100
    },
    yFixed: -6.5
};

let floatingObjects = [];

if (floatingSpawnConfig.enabled) {
    floatingSpawner.setSeed(floatingSpawnConfig.seed);
    floatingSpawner.spawnMany(
        floatingSpawnConfig.count,
        floatingSpawnConfig.bounds,
        floatingSpawnConfig.yFixed
    ).then(spawned => {
        floatingObjects = spawned;
        console.log(`Spawned ${spawned.length} floating objects with seed ${floatingSpawnConfig.seed}`);
    });
}

// #endregion

// #region Additional Scene Objects

// Load Mobile Ships

if (isMobile) 
{
    floatingSpawner.setSeed(3);
    ObjLoader.load(gl, './Assets/3D/Floating/ship-pirate-small.obj').then(mesh => {
        for (let i = 0; i < 3; i++) {
            const obj = new GameObject(renderer, matBuoyancy, mesh, 'Barrel');
            obj.transform.position.set(
                -25 + (floatingSpawner.seededRandom()-0.5) * 45, 
                -6.5, 
                80 + (floatingSpawner.seededRandom()-0.5) * 45
        );
        obj.transform.rotation.set(
            0, 
            (floatingSpawner.seededRandom()-0.5) * 3.14*2, 
            0
        );
        obj.transform.scale.set(1, 1, 1);
        scene.push(obj);
    }
});
}

// #endregion

// #region Water LOD System

let CenterLOD = null;

Promise.all([
    ObjLoader.load(gl, './Assets/3D/LOD1.obj'),
    ObjLoader.load(gl, './Assets/3D/LOD2.obj'),
    ObjLoader.load(gl, './Assets/3D/LOD3.obj')
]).then(([meshLOD1, meshLOD2, meshLOD3]) => {
    const offset = 80;
    const yPos = -6.5;
    const scale = 50;
    const radius = 5;

    // Mobile: LOD2 center, LOD3 everything else
    // Desktop: LOD1 center, LOD2 mid ring, LOD3 outer
    const LOD1_RADIUS = isMobile ? 1.0 : 0.0;
    const LOD2_RADIUS = isMobile ? -1 : 2.0;

    const centerMesh = isMobile ? meshLOD2 : meshLOD1;
    const centerLabel = isMobile ? 'LOD2' : 'LOD1';

    // Center water mesh
    const centerObj = new GameObject(renderer, matWater, centerMesh, `Water Floor [0,0] ${centerLabel}`);
    centerObj.transform.position.set(0, yPos, 0);
    centerObj.transform.scale.set(scale, scale, scale);
    scene.push(centerObj);
    CenterLOD = centerObj;

    if (isMobile) {
        // Triangle/FOV shape for mobile
        for (let z = 0; z <= radius; z++) {
            for (let x = -z; x <= z; x++) {
                if (x === 0 && z === 0) continue;

                const obj = new GameObject(renderer, matWater, meshLOD3, `Water Floor [${x},${z}] LOD3`);
                centerObj.transform.add(obj.transform);
                obj.transform.setGlobalPosition(x * offset, yPos, z * offset);
            }
        }
    } else {
        // Full grid for desktop
        for (let x = -radius; x <= radius; x++) {
            for (let z = -radius; z <= radius; z++) {
                if (x === 0 && z === 0) continue;

                const dist = Math.sqrt(x * x + z * z);
                const mesh = dist <= LOD1_RADIUS ? meshLOD1 
                    : dist <= LOD2_RADIUS ? meshLOD2 
                    : meshLOD3;
                const lodLevel = dist <= LOD1_RADIUS ? 1 
                    : dist <= LOD2_RADIUS ? 2 
                    : 3;

                const obj = new GameObject(renderer, matWater, mesh, `Water Floor [${x},${z}] LOD${lodLevel}`);
                centerObj.transform.add(obj.transform);
                obj.transform.setGlobalPosition(x * offset, yPos, z * offset);
            }
        }
    }
});

// #endregion

// #region Viewport Configuration

const viewports = [
    { x: 0.0, y: 0.0, w: 1.0, h: 1.0, pass: 'Final' }
];
viewportPass.setViewports(viewports);

// #endregion

// #region Game

const game = {
    gl,
    scene,
    camera,
    lightCamera,
    renderer,
    renderQueue,
    materials,
    viewportPass,
    wireframePass,
    floatingSpawner,
    floatingSpawnConfig,
    textures: {
        ship: shipTexture
    }
};

// #endregion

// #region Game API

game.setViewports = (mode) => {
    viewports[0].pass = mode; 
};

// Floating object spawner control
game.spawnFloatingObjects = async (count) => {
    const spawned = await floatingSpawner.spawnMany(
        count,
        floatingSpawnConfig.bounds,
        floatingSpawnConfig.yFixed
    );
    console.log(`Spawned ${spawned.length} additional floating objects`);
    return spawned;
};

// Seed-based spawning control
game.respawnWithSeed = async (seed) => {
    // Keep only non-floating objects (water LOD tiles)
    // Filter out anything with "[Floating]" in the name
    const waterObjects = scene.filter(obj => !obj.name || !obj.name.includes('[Floating]'));
    scene.length = 0;
    scene.push(...waterObjects);
    
    // Set new seed and spawn
    floatingSpawner.setSeed(seed);
    floatingSpawnConfig.seed = seed;
    const spawned = await floatingSpawner.spawnMany(
        floatingSpawnConfig.count,
        floatingSpawnConfig.bounds,
        floatingSpawnConfig.yFixed
    );
    console.log(`✓ Respawned with seed ${seed}: ${spawned.length} objects`);
    return spawned;
};

let profiler = null;

if (!isMobile) {
    const editor = new Editor(game);
    profiler = ProfilerInstrumenter.attach(renderQueue, renderer, game);
    game.profiler = profiler;
}

// Expose game object globally for console access
window.game = game;
window.floatingSpawner = floatingSpawner;
window.oceanConfig = oceanConfig;
window.floatingObjects = floatingObjects;
window.floatingSpawnConfig = floatingSpawnConfig;

const cameraController = new CameraController(camera, canvas);

// #endregion

// #region Input & Debugging

window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't') {
        wireframePass.toggle();
    }
});

// #endregion

// #region Animation Loop Setup

const lightDir = [0.5, 0.8, 0.2];
let hudUpdateCounter = 0;
let lastHudContent = '';

// #endregion

// #region Main Animation Loop

function loop(now) {
    Time.update(now);
    game.deltaTime = Time.deltaTime;

    cameraController.update(Time.deltaTime);
    
    // Update material uniforms with time
    matWater.setUniforms({ 'uTime': Time.time });
    matBuoyancy.setUniforms({ 'uTime': Time.time });
    matSkybox.setUniforms({ 'uTime': Time.time });
    
    // Update light direction
    if (matLighting.uniforms['uLightDir'] && matLighting.uniforms['uLightDir'].value) {
        const v = matLighting.uniforms['uLightDir'].value;
        const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
        if (len > 0.001) {
            lightDir[0] = v[0] / len;
            lightDir[1] = v[1] / len;
            lightDir[2] = v[2] / len;
        } else {
            lightDir[0] = v[0];
            lightDir[1] = v[1];
            lightDir[2] = v[2];
        }
    }

    camera.updateView();
    viewportPass.setViewports(viewports);
    camera.updateProjection();
    lightCamera.updateProjection();

    // Update skybox lighting
    if (matSkybox.uniforms['uSunColor']) {
        skyboxPass.setLight(lightDir, 
            matSkybox.uniforms['uSunColor'].value, 
            matSkybox.uniforms['uTopColor'].value,
            matSkybox.uniforms['uMidColor'].value,
            matSkybox.uniforms['uBottomColor'].value
        );
    }

    renderQueue.execute(renderer, scene, camera);
    gl.flush()
    gl.finish() 
    // Update HUD with performance metrics
    const hud = document.getElementById('hud');
    if (hud) {
        hudUpdateCounter++;
        if (hudUpdateCounter >= 6) {
            hudUpdateCounter = 0;
            
            const fpsValue = Time.unscaledDeltaTime > 0 ? Math.round(1.0 / Time.unscaledDeltaTime) : 0;
            const fps = fpsValue.toString().padStart(3, '0');

            let avgStr = "";
            if (profiler && profiler.fpsHistory && profiler.fpsHistory.length > 0) {
                let sumFps = 0;
                const histLen = profiler.fpsHistory.length;
                const countFps = Math.min(histLen, 60);
                for (let i = histLen - countFps; i < histLen; i++) {
                    sumFps += profiler.fpsHistory[i];
                }
                const avgVal = Math.round(sumFps / countFps).toString().padStart(3, '0');
                avgStr = ` <br> Avg FPS: ${avgVal}`;
            }

            const deltaMs = (Time.deltaTime * 1000).toFixed(2).padStart(6, '0');
            lastHudContent = `FPS: ${fps}${avgStr}<br>Δ: ${deltaMs} ms`;
            hud.innerHTML = lastHudContent;
        }
    }

    requestAnimationFrame(loop);
}

// #endregion

requestAnimationFrame(loop);

