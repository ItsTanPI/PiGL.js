# PixelArtPass Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, material, target, name) | Creates a new pixel art/pixelation effect pass. |
| public | setInputBuffers(sceneTex, depthTex, normalTex) | Set the input buffers for pixelation effect. |
| public | resize(width, height) | Resize the pass and update resolution uniform. |

## Overview

Post-processing pass that creates a pixelated/pixel art effect.
Down-samples and up-samples the scene to create blocky, retro aesthetics.
Features configurable pixel block size and works with G-buffers (depth, normal)
to optionally preserve detail in discontinuities.

## Class Definition

**Namespace:** `Engine.Rendering.Passes`  
**Class:** `PixelArtPass`  
**Inheritance:** `RenderPass` -> `ScreenRenderPass` -> `PixelArtPass`

## Properties

*Inherits properties from ScreenRenderPass.*

## Methods

### constructor

`constructor(gl, width, height, material, target, name)`

Creates a new pixel art/pixelation effect pass.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Viewport width in pixels. |
| height | number | Viewport height in pixels. |
| material | Material | Pixel art shader material. |
| target | RenderTarget | Optional target to render to. (Default: null) |
| name | string | Descriptive name. (Default: 'PixelArt Pass') |

### setInputBuffers

`setInputBuffers(sceneTex, depthTex, normalTex)`

Set the input buffers for pixelation effect.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| sceneTex | WebGLTexture | Scene color texture. |
| depthTex | WebGLTexture | Depth texture for edge preservation. |
| normalTex | WebGLTexture | Normal texture for edge preservation. |

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
