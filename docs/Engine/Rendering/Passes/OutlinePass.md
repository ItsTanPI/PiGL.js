# OutlinePass Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, material, target, name) | Creates a new outline/edge detection pass. |
| public | setInputBuffers(depthTex, normalTex) | Set the input buffers for edge detection. |
| public | resize(width, height) | Resize the pass and update resolution uniform. |

## Overview

Edge detection pass using depth and normal discontinuities to create outlines.
Commonly used for cel shading, toon rendering, or stylized graphics effects.
Features depth-based and normal-based edge detection, combined for robust outlines
with configurable resolution for edge sharpness.

## Class Definition

**Namespace:** `Engine.Rendering.Passes`  
**Class:** `OutlinePass`  
**Inheritance:** `RenderPass` -> `ScreenRenderPass` -> `OutlinePass`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| clearColor | number[] | RGBA clear color - transparent by default for layering ([0,0,0,0]). |

## Methods

### constructor

`constructor(gl, width, height, material, target, name)`

Creates a new outline/edge detection pass.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Viewport width in pixels. |
| height | number | Viewport height in pixels. |
| material | Material | Edge detection shader material. |
| target | RenderTarget | Optional target to render to. (Default: null) |
| name | string | Descriptive name. (Default: 'Outline Pass') |

### setInputBuffers

`setInputBuffers(depthTex, normalTex)`

Set the input buffers for edge detection.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| depthTex | WebGLTexture | Depth texture for depth-based edges. |
| normalTex | WebGLTexture | Normal texture for discontinuity detection. |

**Returns:**
- `void`

### resize

`resize(width, height)`

Resize the pass and update resolution uniform.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| width | number | New width in pixels. |
| height | number | New height in pixels. |

**Returns:**
- `void`
