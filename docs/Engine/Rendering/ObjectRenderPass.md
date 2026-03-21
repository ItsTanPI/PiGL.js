# ObjectRenderPass Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, renderTarget, materialOverride, name) | Creates a new object render pass. |
| public | resize(width, height) | Resize the pass and its render target. |
| public | execute(renderer, scene, camera) | Execute the object render pass. |

## Overview

Object Render Pass renders 3D scene objects to a render target or the screen.
This is typically the first pass in a render pipeline, responsible for drawing all visible geometry.
Supports material overrides for special passes (depth, normal, shadow mapping).

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `ObjectRenderPass`  
**Inheritance:** `RenderPass` -> `ObjectRenderPass`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| renderTarget | RenderTarget | Target to render to, or null for screen. |
| materialOverride | Material | Optional material override for all objects. |
| clearColor | number[] | RGBA clear color [r, g, b, a]. |
| clearDepth | boolean | Whether to clear the depth buffer. |
| camera | Camera | Optional camera override for rendering. |

## Methods

### constructor

`constructor(gl, width, height, renderTarget, materialOverride, name)`

Creates a new object render pass.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Viewport width in pixels. |
| height | number | Viewport height in pixels. |
| renderTarget | RenderTarget | Optional target to render to (null = screen). (Default: null) |
| materialOverride | Material | Optional material to override object materials. (Default: null) |
| name | string | Descriptive name for this pass. (Default: 'ObjectPass') |

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

Execute the object render pass.
Renders all scene objects using their materials, or using the material override.
Supports per-object material selection for depth/normal/shadow passes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| renderer | Renderer | The renderer instance. |
| scene | Array \| Object | Scene objects or array of GameObjects. |
| camera | Camera | Camera for rendering. |

**Returns:**
- `void`
