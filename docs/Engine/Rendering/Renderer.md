# Renderer Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl) | Creates a new Renderer. |
| public | draw(gameObject, camera, target, material) | Renders a single GameObject. |
| public | resetDrawCalls() | Returns and resets the draw call counter. |

## Overview

Renderer performs low-level WebGL draw operations: binding shaders/meshes, setting uniforms,
and issuing draw calls.
Acts as a graphics driver that handles the details of rendering GameObjects.
It manages texture binding, uniform updates, and draw call metrics/profiling.
Typically called by render passes or directly when rendering individual GameObjects.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `Renderer`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| drawCalls | number | Total draw calls issued this frame. |
| currentPassDrawCalls | number[] | Draw call counts per pass (if profiling). |
| drawCallDetails | Array | Detailed draw call information (for profiler). |
| defaultMesh | Mesh | A default quad mesh used if GameObject has no mesh. |

## Methods

### constructor

`constructor(gl)`

Creates a new Renderer with a default quad mesh.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |

### draw

`draw(gameObject, camera, target, material)`

Renders a single GameObject to a target or the screen.

Handles all WebGL state setup:
- Activates shader program
- Binds mesh vertex buffers and attributes
- Sets standard uniforms (projection, view, model matrices)
- Binds material textures to texture units
- Sets material uniforms
- Issues draw call

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gameObject | GameObject | The object to render; must have transform, material, and optional mesh. |
| camera | Camera | The camera providing projection and view matrices. |
| target | RenderTarget | Optional render target; null = screen, undefined = no change. (Default: undefined) |
| material | Material | Optional material override; if null, uses gameObject.material. (Default: null) |

**Returns:**
- `void`

### resetDrawCalls

`resetDrawCalls()`

Returns and resets the draw call counter.

Call once per frame after all rendering to get metrics and reset for next frame.

**Returns:**
- `{count: number, details: Array}`: Object with `count` and `details` array for profiling.
