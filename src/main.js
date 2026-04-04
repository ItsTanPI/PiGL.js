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

import { ProfilerInstrumenter } from './Engine/Profiling/Profiler.js';
import { Editor } from './Editor/Editor.js';
import { CameraController } from './Engine/Input/CameraController.js';

// Assets
import screenVs from './Engine/shaders/quad_screen.vert?raw';
import screenFs from './Engine/shaders/quad_screen.frag?raw';

import lightingVs from './Engine/shaders/lighting.vert?raw';
import lightingFs from './Engine/shaders/lighting.frag?raw';
import skyboxFs from './Engine/shaders/skybox.frag?raw';
import pixelArtFs from './Engine/shaders/pixelart.frag?raw';
import waterVs from './Engine/shaders/Water.vert?raw';
import waterFs from './Engine/shaders/Water.frag?raw';

import masterVs from './Engine/shaders/ShaderLib/Master.vert?raw';
import masterFs from './Engine/shaders/ShaderLib/Master.frag?raw';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl');
if (!gl) { alert('Unable to initialize WebGL.'); }

// gl.disable(gl.BLEND);
// gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK);
gl.frontFace(gl.CCW);

gl.getExtension('EXT_color_buffer_float');

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



const shaderMain = new Shader(gl, masterVs, masterFs);
const shaderScreen = new Shader(gl, screenVs, screenFs);
const shaderDisplacemet = new Shader(gl, [waterVs, masterVs], [waterFs, masterFs]);
const shaderLighting = new Shader(gl, lightingVs, lightingFs);
const shaderSkybox = new Shader(gl, screenVs, skyboxFs);
const shaderPixelArt = new Shader(gl, screenVs, pixelArtFs);

const shipTexture = new Texture(gl, './Assets/Textures/colormap.png');
const matScene = new Material(shaderMain, 'Ship Mat');
const matWater = new Material(shaderDisplacemet, 'Water');
const matLighting = new Material(shaderLighting, 'PPL Lighting');
const matSkybox = new Material(shaderSkybox, 'Skybox');
const matPixelArt = new Material(shaderPixelArt, 'PixelArt');
const matScreen = new Material(shaderScreen, 'Screen'); 

matScene.setUniforms({ 
    'uColor': [1.0, 1.0, 1.0, 1.0], 
    'uHasTexture': 1.0, 
    'uMainTex': shipTexture.texture, 
    'uRoughness':1.0
});

matPixelArt.setUniforms({
    'uPixelSize': 4.0,
    'uEdgeWidth':0.5,
    'uColorLevels': 128.0,
    'uDepthThreshold': 0.025,
    'uNormalThreshold': 0.1,
    'uSilhouetteDarkening': 0.2, // Darker for outer edges
    'uCreaseDarkening': 0.7,     // Lighter for inner corners/color changes
});;

// Set Initial Lighting to ensure it's not black
matLighting.setUniforms({
    'uLightDir': [1, 0.2, 10],//'uLightDir': [1, 1, 1],
    'uLightColor': [1.0, 0.8, 0.75],//'uLightColor': [0.9, 0.9, 0.9],
    'uAmbient': 0.5,
    'uSpecularStrength': 0.3,
    'uShininess': 0.03
});

matSkybox.setUniforms({
    // 'uTopColor': 	[0.12, 0.45, 0.85],
    // 'uBottomColor': 	[0.70, 0.85, 0.95],
    // 'uSunColor': 	[1.00, 1.00, 1.00],
    'uTopColor': [0.063, 0.188, 0.820],
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

const waterConfig = {
    // Movement & Shape
    'uWind': [1, 0.0],
    'uSpeed': 0.5,
    'udisplacement': 1.5,
    'uScale': 0.2,          // Ripple frequency
    
    'uColor1': [0.094, 0.271, 0.494], // Deep Navy (The pits/troughs)
    'uColor2': [0.196, 0.404, 0.624],  // Tropical Turquoise (The slopes)
    'uColor3': [0.8, 0.8, 1.0],   // Sea Foam White (The crests)
    'uWaveA': [-0.35, 0.70, 0.13, 3.92],
    'uWaveB': [-0.95, 0.51, 0.10, 2.25],
    'uWaveC': [1.0, -4.66, 0.10, 20.57],
    'uColorBands' : 3.0,
    'uRoughness':0.0
};


matWater.setUniforms(waterConfig);

// Register Materials for Editor
const materials = {
    'Lighting': matLighting,
    'Skybox': matSkybox,
    'PixelArt': matPixelArt,
    'Water' : matWater,
    'Ship' : matScene
};


const renderer = new Renderer(gl);
const camera = new Camera();
const lightCamera = new Camera(); // Camera for shadow casting

const scene = [];
const renderQueue = new RenderQueue(gl);


// 1. Depth Pass
const GbufferPass = new ObjectRenderPass(gl, canvas.width, canvas.height, Gbuffer, 1, 'GBuffer Pass');
GbufferPass.clearColor = [0.5, 0.5, 1.0, 1.0];
GbufferPass.clearDepth = true;
renderQueue.addPass(GbufferPass);

// 4. Albedo Pass 
const scenePass = new ObjectRenderPass(gl, canvas.width, canvas.height, sceneBuffer, 0, 'Albedo Pass');
scenePass.clearColor = [0.0, 0.0, 0.0, 1.0];
scenePass.clearDepth = true;
renderQueue.addPass(scenePass);

// 4. Lighting Pass
const lightingPass = new LightingPass(gl, canvas.width, canvas.height, matLighting, lightingBuffer, 'Lighting Pass');
lightingPass.setInputBuffers(sceneBuffer.texture, Gbuffer.texture);
renderQueue.addPass(lightingPass);

// 5. Skybox Pass (Draws on top of lighting where depth is far)
const skyboxPass = new SkyboxPass(gl, canvas.width, canvas.height, matSkybox, lightingBuffer, 'Skybox Pass');
skyboxPass.setInputTexture(Gbuffer.texture);
renderQueue.addPass(skyboxPass);

// 6. Pixel Art Pass
const pixelArtPass = new PixelArtPass(gl, canvas.width, canvas.height, matPixelArt, pixelArtBuffer, 'PixelArt Pass');
pixelArtPass.setInputBuffers(lightingBuffer.texture, Gbuffer.texture);
renderQueue.addPass(pixelArtPass);

// 7. Viewport Pass
const viewportPass = new ViewportPass(gl, canvas.width, canvas.height, matScreen);
viewportPass.setBuffer('Final', pixelArtBuffer.texture);
viewportPass.setBuffer('Pixel', pixelArtBuffer.texture);
viewportPass.setBuffer('Lit', lightingBuffer.texture);
viewportPass.setBuffer('Albedo', sceneBuffer.texture);
viewportPass.setBuffer('Normal', Gbuffer.texture);

lightingPass.lightCamera = lightCamera;
renderQueue.addPass(viewportPass);


function resizeCanvas() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    // Resize buffers
    sceneBuffer.resize(canvas.width, canvas.height);
    Gbuffer.resize(canvas.width, canvas.height);
    lightingBuffer.resize(canvas.width, canvas.height);
    pixelArtBuffer.resize(canvas.width, canvas.height);
    // shadowBuffer is fixed size for now or could be dynamic
    
    // Resize passes
    renderQueue.resize(canvas.width, canvas.height);

    // Update Camera Aspect Ratio
    const aspect = canvas.width / canvas.height;
    camera.setPerspective(0.8, aspect, 0.1, 1000.0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial call

// Perspective setup
const aspect = canvas.width / canvas.height;
camera.setPerspective(0.8, aspect, 0.1, 1000.0);
camera.transform.position.set(-16.2, 1.8, -47);
camera.transform.rotation.set( 0.0, isMobile ? 3.24: 3.22, 0);

ObjLoader.load(gl, './Assets/3D/scene.obj').then(mesh => {
    var obj = new GameObject(renderer, matScene, mesh, 'Scene');
    obj.transform.position.set(-15, -6, 10);
    obj.transform.scale.set(1, 1, 1);
    scene.push(obj);
});


ObjLoader.load(gl, './Assets/3D/DetailedPlane.obj').then(mesh => {
    const offset = 100;
    const yPos = -6.5;
    const scale = 50;

    if(isMobile)
    {
        var obj = new GameObject(renderer, matWater, mesh, `Water Floor `);
            
        obj.transform.position.set(0 * offset, yPos, 0 * offset);
            
            obj.transform.scale.set(scale, scale, scale);
            
            scene.push(obj);
    }
    else
    {
        
        for (let x = -2; x <= 2; x++) 
        {
            for (let z =  -1; z <= 3; z++) {
        
                var obj = new GameObject(renderer, matWater, mesh, `Water Floor [${x},${z}]`);
        
                obj.transform.position.set(x * offset, yPos, z * offset);
        
                obj.transform.scale.set(scale, scale, scale);
        
                scene.push(obj);
            }
        }
    }
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
    viewportPass,
    textures: {
        ship: shipTexture
    }
};

game.setViewports = (mode) => {
    viewports[0].pass = mode; 
};

let profiler = null;

if (!isMobile) {
    const editor = new Editor(game);
    profiler = ProfilerInstrumenter.attach(renderQueue, renderer, game);
    profiler.enable();
    profiler.devToolsEnabled = true;
    game.profiler = profiler;
}

const cameraController = new CameraController(camera, canvas);



const size = 30.0;
lightCamera.setOrthographic(-size, size, -size, size, 1.0, 100.0);

function loop(now) 
{    
    Time.update(now);
    game.deltaTime = Time.deltaTime;

    cameraController.update(Time.deltaTime);

    matWater.setUniforms({ 
        'uTime': Time.time,
    });
    matSkybox.setUniforms({ 'uTime': Time.time });


    let lightDir = [0.5, 0.8, 0.2];
    if (matLighting.uniforms['uLightDir'] && matLighting.uniforms['uLightDir'].value) {
        const v = matLighting.uniforms['uLightDir'].value;
        const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
        if (len > 0.001) {
            lightDir = [v[0]/len, v[1]/len, v[2]/len];
        } else {
             lightDir = [v[0], v[1], v[2]];
        }
    }

    camera.updateView();

    viewportPass.setViewports(viewports);

    camera.updateProjection();
    lightCamera.updateProjection();

    if (matSkybox.uniforms['uSunColor']) {
        skyboxPass.setLight(lightDir, 
            matSkybox.uniforms['uSunColor'].value, 
            matSkybox.uniforms['uTopColor'].value, 
            matSkybox.uniforms['uBottomColor'].value
        );
    }

    renderQueue.execute(renderer, scene, camera);
    
    const hud = document.getElementById('hud');
    if (hud) {
        // Current FPS: Pad to 3 digits (e.g., "060")
        const fpsValue = Time.unscaledDeltaTime > 0 ? Math.round(1.0 / Time.unscaledDeltaTime) : 0;
        const fps = fpsValue.toString().padStart(3, '0');

        let avgStr = "";
        if (profiler && profiler.fpsHistory && profiler.fpsHistory.length > 0) {
            let sumFps = 0;
            let histLen = profiler.fpsHistory.length;
            let countFps = Math.min(histLen, 60);
            for (let i = histLen - countFps; i < histLen; i++) {
                sumFps += profiler.fpsHistory[i];
            }
            // Avg FPS: Pad to 3 digits
            const avgVal = Math.round(sumFps / countFps).toString().padStart(3, '0');
            avgStr = ` <br> Avg FPS: ${avgVal}`;
        }

        // Delta Time: Pad to 3 whole digits and 2 decimals (e.g., "016.67")
        const deltaMs = (Time.deltaTime * 1000).toFixed(2).padStart(6, '0');

        hud.innerHTML = `FPS: ${fps}${avgStr}<br>Δ: ${deltaMs} ms`;
    }

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

