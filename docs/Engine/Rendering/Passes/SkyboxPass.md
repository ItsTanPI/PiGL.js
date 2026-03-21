# SkyboxPass Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, material, target, name) | Creates a new skybox rendering pass. |
| public | setCamera(camera) | Update camera matrices and position for skybox rendering. |
| public | setLight(direction, sunColor, topColor, bottomColor) | Configure the procedural skybox lighting and colors. |
| public | setInputTexture(depthTex) | Set the depth texture to render sky only where no geometry exists. |
| public | execute(renderer, scene, camera) | Execute the skybox pass. |

## Overview

A screen-space pass that renders a procedural or texture-based skybox.
Typically rendered after opaque geometry but before transparent objects or post-processing.
Uses depth texture to ensure sky is only drawn at infinite depth (where no objects were rendered).

## Class Definition

**Namespace:** `Engine.Rendering.Passes`  
**Class:** `SkyboxPass`  
**Inheritance:** `RenderPass` -> `ScreenRenderPass` -> `SkyboxPass`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| clearColor | null | Set to null to prevent clearing previous passes' color. |
| clearDepth | boolean | Set to false to preserve depth buffer. |

## Methods

### constructor

`constructor(gl, width, height, material, target, name)`

Creates a new skybox rendering pass.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Viewport width in pixels. |
| height | number | Viewport height in pixels. |
| material | Material | Skybox shader material. |
| target | RenderTarget | Optional target to render to. (Default: null) |
| name | string | Descriptive name. (Default: 'Skybox Pass') |

### setCamera

`setCamera(camera)`

Update camera matrices and position for skybox rendering.
Computes inverse view-projection to unproject screen coordinates to world rays for sky lookup.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| camera | Camera | The main camera. |

**Returns:**
- `void`

### setLight

`setLight(direction, sunColor, topColor, bottomColor)`

Configure the procedural skybox lighting and colors.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| direction | Array | Light/Sun direction vector [x, y, z]. |
| sunColor | Array | Color of the sun [r, g, b]. |
| topColor | Array | Color of the sky zenith [r, g, b]. |
| bottomColor | Array | Color of the sky horizon/bottom [r, g, b]. |

**Returns:**
- `void`

### setInputTexture

`setInputTexture(depthTex)`

Set the depth texture to render sky only where no geometry exists.
The skybox shader checks depth; if depth < 1.0 (far plane), it discards the pixel.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| depthTex | WebGLTexture | The scene's depth texture. |

**Returns:**
- `void`

### execute

`execute(renderer, scene, camera)`

Execute the skybox pass.
Updates camera uniforms and renders the full-screen quad.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| renderer | Renderer | The renderer instance. |
| scene | Array \| Object | The scene (unused). |
| camera | Camera | The main camera. |

**Returns:**
- `void`
