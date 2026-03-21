# LightingPass Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, material, target, name) | Creates a new lighting pass. |
| public | setInputBuffers(sceneTex, normalTex, depthTex, shadowTex) | Set the input G-buffers for lighting computation. |
| public | execute(renderer, scene, camera) | Execute the lighting pass. |
| public | setMatricesFromCameras(camera, lightCamera) | Compute matrices from main and light cameras. |
| public | setMatrices(invViewProj, lightSpaceParams) | Manually set inverse view-proj and light space matrices. |
| public | setLight(direction, color, ambient) | Set global directional light parameters. |

## Overview

Deferred lighting pass that computes lighting from scene, normal, depth, and shadow information.
Combines multiple render target textures to produce final lit output.
This pass performs deferred rendering by taking input buffers (scene color, normal map, depth, shadow map),
computing light space and view-projection matrices, and applying lighting calculations via a full-screen shader.

## Class Definition

**Namespace:** `Engine.Rendering.Passes`  
**Class:** `LightingPass`  
**Inheritance:** `RenderPass` -> `ScreenRenderPass` -> `LightingPass`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| lightCamera | Camera | Optional light camera for shadow/lighting calculations. |

## Methods

### constructor

`constructor(gl, width, height, material, target, name)`

Creates a new lighting pass.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Viewport width in pixels. |
| height | number | Viewport height in pixels. |
| material | Material | Lighting shader material. |
| target | RenderTarget | Optional target to render to. (Default: null) |
| name | string | Descriptive name. (Default: 'Lighting Pass') |

### setInputBuffers

`setInputBuffers(sceneTex, normalTex, depthTex, shadowTex)`

Set the input G-buffers for lighting computation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| sceneTex | WebGLTexture | Scene color/albedo texture. |
| normalTex | WebGLTexture | Per-pixel normal vectors. |
| depthTex | WebGLTexture | Per-pixel depth values. |
| shadowTex | WebGLTexture | Shadow map depth comparison texture. |

**Returns:**
- `void`

### execute

`execute(renderer, scene, camera)`

Execute the lighting pass.
Computes light matrices if light camera is set, then performs deferred lighting.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| renderer | Renderer | The renderer instance. |
| scene | Array \| Object | The scene (usually unused). |
| camera | Camera | Main camera for view projection. |

**Returns:**
- `void`

### setMatricesFromCameras

`setMatricesFromCameras(camera, lightCamera)`

Compute matrices from main and light cameras.
Calculates `uLightSpaceMatrix` and `uInverseViewProjection` needed for unprojecting depth to world space.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| camera | Camera | The main view camera. |
| lightCamera | Camera | The light's view/projection camera. |

**Returns:**
- `void`

### setMatrices

`setMatrices(invViewProj, lightSpaceParams)`

Manually set inverse view-proj and light space matrices.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| invViewProj | Float32Array | Inverse View-Projection Matrix (16 floats). |
| lightSpaceParams | Float32Array | Light Space Matrix (16 floats). |

**Returns:**
- `void`

### setLight

`setLight(direction, color, ambient)`

Set global directional light parameters.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| direction | Array | Light direction vector [x, y, z]. |
| color | Array | Light color [r, g, b]. |
| ambient | Array | Ambient light color [r, g, b]. |

**Returns:**
- `void`
