# ScreenRenderPass Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, material, renderTarget, name) | Creates a new screen render pass. |
| public | setTexture(name, texture) | Set an input texture for the screen-space shader. |
| public | resize(width, height) | Resize the pass and its render target. |
| public | execute(renderer, scene, camera) | Execute the screen render pass. |

## Overview

Base class for full-screen shader-based effects. Renders to the screen using
a full-screen quad and a material. Used for post-processing, lighting calculations,
and other screen-space operations.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `ScreenRenderPass`  
**Inheritance:** `RenderPass` -> `ScreenRenderPass`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| material | Material | The material/shader for this pass. |
| renderTarget | RenderTarget | Optional target to render to. |
| fullScreenQuad | FullScreenQuad | Quad for rendering. |
| inputs | Object | Input textures mapped by uniform name. |
| clearColor | number[] | Optional RGBA clear color, or null to skip clearing. |

## Methods

### constructor

`constructor(gl, width, height, material, renderTarget, name)`

Creates a new screen render pass.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Viewport width in pixels. |
| height | number | Viewport height in pixels. |
| material | Material | Material with the screen-space shader. |
| renderTarget | RenderTarget | Optional target to render to (null = screen). (Default: null) |
| name | string | Descriptive name for this pass. (Default: 'ScreenPass') |

### setTexture

`setTexture(name, texture)`

Set an input texture for the screen-space shader.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform variable name in the shader. |
| texture | WebGLTexture | The texture to bind. |

**Returns:**
- `void`

### resize

`resize(width, height)`

Resize the pass and its render target.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| width | number | New width in pixels. |
| height | number | New height in pixels. |

**Returns:**
- `void`

### execute

`execute(renderer, scene, camera)`

Execute the screen render pass.
Binds input textures and renders a full-screen quad with the material.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| renderer | Renderer | The renderer instance. |
| scene | Array \| Object | Scene (usually unused for screen passes). |
| camera | Camera | Camera (usually unused for screen passes). |

**Returns:**
- `void`
