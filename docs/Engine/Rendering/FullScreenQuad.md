# FullScreenQuad Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl) | Creates a full-screen quad geometry. |
| public | draw(shaderOrMaterial, uniforms, target) | Draw the full-screen quad with a given material or shader. |

## Overview

Utility for rendering full-screen post-processing effects. Provides a simple quad
that covers the entire screen, typically used with screen-space shaders.
The full-screen quad is essential for implementing post-processing effects,
lighting/deferred rendering passes, and tone mapping.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `FullScreenQuad`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| buffer | WebGLBuffer | Vertex buffer containing quad geometry. |

## Methods

### constructor

`constructor(gl)`

Creates a full-screen quad geometry.
Sets up a simple 2-triangle quad that covers the entire viewport.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |

### draw

`draw(shaderOrMaterial, uniforms, target)`

Draw the full-screen quad with a given material or shader.
Renders the quad geometry to the currently bound framebuffer or to a specified target.
Used to apply screen-space shaders and post-processing effects.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| shaderOrMaterial | Shader \| Material | Material containing the shader, or raw Shader object. |
| uniforms | Object \| RenderTarget | Key-value uniforms for Shader (if first arg is Shader), or RenderTarget (if first arg is Material). (Default: {}) |
| target | RenderTarget | Optional render target to draw to (null = screen). (Default: null) |

**Returns:**
- `void`
