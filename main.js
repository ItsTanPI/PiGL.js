import { Camera } from './Engine/Rendering/Camera.js';
import { Shader } from './Engine/Rendering/Shader.js';
import { Renderer } from './Engine/Rendering/Renderer.js';
import { Material } from './Engine/Rendering/Material.js';
import { RenderTarget } from './Engine/Rendering/RenderTarget.js';
import { FullScreenQuad } from './Engine/Rendering/FullScreenQuad.js';
import { Texture } from './Engine/Rendering/Texture.js';
import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';

// Assets
import spriteVs from './Engine/shaders/sprite.vert?raw';
import spriteFs from './Engine/shaders/sprite.frag?raw';
import solidFs from './Engine/shaders/solid_color.frag?raw';
import radialFs from './Engine/shaders/radial_blur.frag?raw'; 
import quadVs from './Engine/shaders/quad_screen.vert?raw';

const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
if (!gl) { alert('Unable to initialize WebGL.'); }

// Setup GL
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

// --------------------------------------------------------------------------------
// 1. RENDER TARGETS
// --------------------------------------------------------------------------------
// sceneBuffer: Stores the beautiful full-color scene
let sceneBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight);
// occlusionBuffer: Stores the black/white mask for the god rays
let occlusionBuffer = new RenderTarget(gl, window.innerWidth / 2, window.innerHeight / 2); // Half res for verify/blur
// godrayBuffer: Stores the blurred rays themselves
let godrayBuffer = new RenderTarget(gl, window.innerWidth / 2, window.innerHeight / 2);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    sceneBuffer.resize(canvas.width, canvas.height);
    occlusionBuffer.resize(canvas.width / 2, canvas.height / 2);
    godrayBuffer.resize(canvas.width / 2, canvas.height / 2);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// --------------------------------------------------------------------------------
// 2. SHADERS AND MATERIALS
// --------------------------------------------------------------------------------
// Shaders
// Note: We reuse spriteVs for objects because they have position/uv logic.
// We use quadVs for fullscreen passes.

const shaderSprite = new Shader(gl, spriteVs, spriteFs);       // Normal Textured Sprite
const shaderSolid = new Shader(gl, spriteVs, solidFs);         // Solid Color (White/Black)
const shaderRadialBlur = new Shader(gl, quadVs, radialFs);     // God Ray Effect
const shaderCopy = new Shader(gl, quadVs, spriteFs);           // Reuse Sprite Frag for Quad Copy (Texture->Screen)

// Textures
// Ensure you have these files or the code will error on texture load if not handled. 
// Assuming create_file worked for sun.svg/mountain.svg
const texSun = new Texture(gl, './assets/sun.svg');
const texMtn = new Texture(gl, './assets/mountain.svg');

// Materials for Color Pass (Scene)
const matSunColor = new Material(shaderSprite);
matSunColor.setUniform('uMainTex', texSun.texture, '1i');
matSunColor.setVec4('uColor', 1.0, 0.9, 0.4, 1.0); // Bright Yellow/Orange

const matMtnColor = new Material(shaderSprite);
matMtnColor.setUniform('uMainTex', texMtn.texture, '1i');
matMtnColor.setVec4('uColor', 0.4, 0.4, 0.5, 1.0); // Slate Grey

// Materials for Occlusion Pass (Mask)
const matSunMask = new Material(shaderSolid);
matSunMask.setVec4('uColor', 1.0, 1.0, 1.0, 1.0); // Sun -> Pure White
matSunMask.setUniform('uMainTex', texSun.texture, '1i');

const matMtnMask = new Material(shaderSolid);
matMtnMask.setVec4('uColor', 0.0, 0.0, 0.0, 1.0); // Mountain -> Pure Black
matMtnMask.setUniform('uMainTex', texMtn.texture, '1i');

// --------------------------------------------------------------------------------
// 3. OBJECT SETUP
// --------------------------------------------------------------------------------
const renderer = new Renderer(gl);
const screenPass = new FullScreenQuad(gl);
const camera = new Camera();

// Sun
const sun = new GameObject(renderer, matSunColor);
sun.transform.scale.set(1.5, 1.5, 1.0);
sun.transform.position.z = -5.0; 
sun.transform.position.y = 1.0; 

// Mountain (Occluder)
const mountain = new GameObject(renderer, matMtnColor);
mountain.transform.scale.set(2.0, 2.0, 2.0);
mountain.transform.position.z = -4.0; // Closer than sun
mountain.transform.position.y = .5;
mountain.transform.rotation.set(0, 0, Math.PI); 




// --------------------------------------------------------------------------------
// 4. RENDER LOOP
// --------------------------------------------------------------------------------
function draw(now) {
    Time.update(now);

    // Animate Sun Position
    
    sun.transform.position.x = Math.sin(Time.time * 0.5) * 2.5;
    // sun.transform.position.y = Math.cos(Time.time * 0.3) * 1.0 + 0.5;

    camera.updateView();
    const aspect = canvas.width / canvas.height;
    camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);

    // Calculate Sun's Screen UV for the Radial Blur Center
    const sunScreenUV = camera.getScreenPosition(sun);


    // --- PASS 1: OCCLUSION MASK (Black & White) ---
    // Goal: OcclusionTexture -> White Sun, Black Everything Else
    occlusionBuffer.bind();
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Default background Black
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Render Objects with Mask Materials
    sun.render(camera, occlusionBuffer, matSunMask);        // White
    mountain.render(camera, occlusionBuffer, matMtnMask);   // Black (Occluding White)
    
    occlusionBuffer.unbind();


    // --- PASS 2: RADIAL BLUR (God Rays) ---
    // Goal: GodRayTexture -> Blurring the Occlusion Pass outwards from Sun Center
    godrayBuffer.bind();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Clear before drawing (optional but good practice)
    
    screenPass.draw(shaderRadialBlur, {
        'uTexture': occlusionBuffer.texture,
        'uLightPosition': sunScreenUV, // Pass calculated center
        'uExposure': 0.1,
        'uDecay': 0.95,
        'uDensity': 1.0,
        'uWeight': 0.5
    }, godrayBuffer); // Output to godrayBuffer
    
    godrayBuffer.unbind();


    // --- PASS 3: COLOR SCENE ---
    // Goal: SceneTexture -> Normal Rendering
    sceneBuffer.bind();
    gl.clearColor(0.2, 0.3, 0.4, 1.0); // Nice Blue Sky
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    sun.render(camera, sceneBuffer, matSunColor);     // Draw actual sun color
    mountain.render(camera, sceneBuffer, matMtnColor); // Draw actual mountain color

    sceneBuffer.unbind();


    // --- PASS 4: COMPOSITE TO SCREEN ---
    // Goal: Screen -> Scene + GodRays
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 1. Draw Scene (Opaque)
    gl.disable(gl.BLEND);
    screenPass.draw(shaderCopy, { 
        'uMainTex': sceneBuffer.texture, 
        'uColor': [1,1,1,1] 
    }, null);

    // 2. Draw God Rays (Additive Blend)
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE); // Additive Blending for light
    screenPass.draw(shaderCopy, { 
        'uMainTex': godrayBuffer.texture, 
        'uColor': [1.0, 0.9, 0.6, 1.0] // Tint rays slightly golden
    }, null);

    // Reset Blending for next loop
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
