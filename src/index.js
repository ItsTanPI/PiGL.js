// PiGL.js Library Entry Point
// Engine Core
export { GameObject } from './Engine/Core/GameObject.js';
export { Time } from './Engine/Core/TimeManager.js';

// Input
export { CameraController } from './Engine/Input/CameraController.js';

// Loaders
export { ObjLoader } from './Engine/Loaders/ObjLoader.js';

// Math
export { Transform } from './Engine/Math/Transform.js';
export { Vector3 } from './Engine/Math/Vector3.js';
export { Matrix } from './Engine/Math/Matrix.js';

// Profiling
export { ProfilerInstrumenter } from './Engine/Profiling/Profiler.js';

// Rendering
export { Camera } from './Engine/Rendering/Camera.js';
export { FullScreenQuad } from './Engine/Rendering/FullScreenQuad.js';
export { Material } from './Engine/Rendering/Material.js';
export { Mesh } from './Engine/Rendering/Mesh.js';
export { Renderer } from './Engine/Rendering/Renderer.js';
export { RenderTarget } from './Engine/Rendering/RenderTarget.js';
export { Shader } from './Engine/Rendering/Shader.js';
export { Texture } from './Engine/Rendering/Texture.js';


export { RenderQueue } from './Engine/Rendering/RenderQueue.js';
export { RenderPass } from './Engine/Rendering/RenderPass.js';
export { ScreenRenderPass } from './Engine/Rendering/ScreenRenderPass.js';
export { ObjectRenderPass } from './Engine/Rendering/ObjectRenderPass.js';
export { ViewportPass } from './Engine/Rendering/Passes/ViewportPass.js';
export { LightingPass } from './Engine/Rendering/Passes/LightingPass.js';
export { SkyboxPass } from './Engine/Rendering/Passes/SkyboxPass.js';
export { OutlinePass } from './Engine/Rendering/Passes/OutlinePass.js';
export { PixelArtPass } from './Engine/Rendering/Passes/PixelArtPass.js';

// Editor
export { Editor } from './Editor/Editor.js';
export { WindowManager } from './Editor/Core/WindowManager.js';
export { HierarchyWindow } from './Editor/Windows/HierarchyWindow.js';
export { InspectorWindow } from './Editor/Windows/InspectorWindow.js';
export { MaterialWindow } from './Editor/Windows/MaterialWindow.js';
export { RenderPassWindow } from './Editor/Windows/RenderPassWindow.js';
export { ProfilerWindow } from './Editor/Windows/ProfilerWindow.js';

// Shaders (raw imports for library consumers)
import quadVert from './Engine/shaders/quad.vert?raw';
import quadFrag from './Engine/shaders/quad.frag?raw';
import quadScreenVert from './Engine/shaders/quad_screen.vert?raw';
import quadScreenFrag from './Engine/shaders/quad_screen.frag?raw';
import depthVert from './Engine/shaders/depth.vert?raw';
import depthFrag from './Engine/shaders/depth.frag?raw';
import normalVert from './Engine/shaders/normal.vert?raw';
import normalFrag from './Engine/shaders/normal.frag?raw';
import outlineFrag from './Engine/shaders/outline.frag?raw';
import noiseFrag from './Engine/shaders/noise.frag?raw';
import lightingVert from './Engine/shaders/lighting.vert?raw';
import lightingFrag from './Engine/shaders/lighting.frag?raw';
import shadowVert from './Engine/shaders/shadow.vert?raw';
import shadowFrag from './Engine/shaders/shadow.frag?raw';
import skyboxFrag from './Engine/shaders/skybox.frag?raw';
import pixelArtFrag from './Engine/shaders/pixelart.frag?raw';
import waterVert from './Engine/shaders/Water.vert?raw';
import waterFrag from './Engine/shaders/Water.frag?raw';

export const Shaders = {
  quadVert,
  quadFrag,
  quadScreenVert,
  quadScreenFrag,
  depthVert,
  depthFrag,
  normalVert,
  normalFrag,
  outlineFrag,
  noiseFrag,
  lightingVert,
  lightingFrag,
  shadowVert,
  shadowFrag,
  skyboxFrag,
  pixelArtFrag,
  waterVert,
  waterFrag,
};
