# RenderTarget Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, options) | Creates a new render target with color and depth attachments. |
| public | bind() | Bind this render target for rendering. |
| public | unbind() | Unbind this render target. |
| public | resize(width, height) | Resize the framebuffer and its attachments. |

## Overview

A render target encapsulates a complete rendering destination: a framebuffer with
an attached color texture and depth buffer. Used to render scenes to textures for
post-processing, reflections, shadows, and deferred rendering pipelines.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `RenderTarget`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Framebuffer width in pixels. |
| height | number | Framebuffer height in pixels. |
| framebuffer | WebGLFramebuffer | The framebuffer object. |
| texture | WebGLTexture | Color attachment texture. |
| depthBuffer | WebGLRenderbuffer | Depth attachment renderbuffer. |

## Methods

### constructor

`constructor(gl, width, height, options)`

Creates a new render target with color and depth attachments.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Framebuffer width in pixels. |
| height | number | Framebuffer height in pixels. |
| options | Object | Configuration options for texture sampling. (Default: {}) |
| options.minFilter | number | Minification filter. (Default: gl.LINEAR) |
| options.magFilter | number | Magnification filter. (Default: gl.LINEAR) |
| options.wrapS | number | S-axis wrapping. (Default: gl.CLAMP_TO_EDGE) |
| options.wrapT | number | T-axis wrapping. (Default: gl.CLAMP_TO_EDGE) |

### bind

`bind()`

Bind this render target for rendering.
Sets the framebuffer as the rendering destination and configures the viewport.
All subsequent draw calls will render to this target.

**Returns:**
- `void`

### unbind

`unbind()`

Unbind this render target.
Resets rendering to the default framebuffer (screen).

**Returns:**
- `void`

### resize

`resize(width, height)`

Resize the framebuffer and its attachments.
Called when canvas dimensions change or when explicitly resizing the target.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| width | number | New width in pixels. |
| height | number | New height in pixels. |

**Returns:**
- `void`
