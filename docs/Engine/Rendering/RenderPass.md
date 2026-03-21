# RenderPass Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, width, height, name) | Creates a new render pass. |
| public | resize(width, height) | Resize the pass viewport. |
| public | execute(renderer, scene, camera) | Execute the render pass. |

## Overview

Base class for all rendering passes in the engine.
A render pass encapsulates a single rendering operation, such as rendering objects,
applying post-processing effects, or compositing multiple render targets.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `RenderPass`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Viewport width in pixels. |
| height | number | Viewport height in pixels. |
| name | string | Descriptive name for this pass. |
| enabled | boolean | Whether this pass is executed in the pipeline. |
| autoResize | boolean | Whether to automatically resize when canvas dimensions change. |
| drawCount | number | Number of draw calls executed in the last frame. |
| executionTime | number | Execution time of this pass in milliseconds. |

## Methods

### constructor

`constructor(gl, width, height, name)`

Creates a new render pass.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| width | number | Initial viewport width in pixels. |
| height | number | Initial viewport height in pixels. |
| name | string | Descriptive name for debugging and profiling. (Default: 'RenderPass') |

### resize

`resize(width, height)`

Resize the pass viewport.
Called when canvas dimensions change. Subclasses should override to handle
resize of attached render targets or other size-dependent resources.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| width | number | New width in pixels. |
| height | number | New height in pixels. |

**Returns:**
- `void`

### execute

`execute(renderer, scene, camera)`

Execute the render pass.
This is the main method called during the render pipeline. Subclasses must implement
this method to perform their specific rendering operations.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| renderer | Renderer | The renderer instance. |
| scene | Array \| Object | The scene or list of objects to render. |
| camera | Camera | The camera for rendering. |

**Returns:**
- `void`
