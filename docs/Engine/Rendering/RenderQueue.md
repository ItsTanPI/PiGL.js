# RenderQueue Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor() | Creates a new render queue. |
| public | addPass(pass) | Add a render pass to the queue. |
| public | removePass(pass) | Remove a render pass from the queue. |
| public | execute(renderer, scene, camera) | Execute all enabled passes in the queue. |
| public | resize(width, height) | Resize all passes in the queue. |

## Overview

Manages an ordered collection of render passes that are executed sequentially
to produce the final rendered image. The queue handles pass execution,
conditional enabling/disabling, and viewport resizing.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `RenderQueue`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| passes | RenderPass[] | Array of render passes to execute. |

## Methods

### constructor

`constructor()`

Creates a new render queue.

**Returns:**
- `RenderQueue`

### addPass

`addPass(pass)`

Add a render pass to the queue.
Passes are executed in the order they are added.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| pass | RenderPass | The render pass to add. |

**Returns:**
- `void`

### removePass

`removePass(pass)`

Remove a render pass from the queue.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| pass | RenderPass | The render pass to remove. |

**Returns:**
- `boolean`: True if the pass was found and removed, false otherwise.

### execute

`execute(renderer, scene, camera)`

Execute all enabled passes in the queue.
Each pass's execute() method is called in order, allowing for multi-stage rendering.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| renderer | Renderer | The renderer instance. |
| scene | Array \| Object | The scene or objects to render. |
| camera | Camera | The camera for rendering. |

**Returns:**
- `void`

### resize

`resize(width, height)`

Resize all passes in the queue.
Propagates resize event to all passes that have autoResize enabled.
Called when the canvas/viewport dimensions change.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| width | number | New viewport width in pixels. |
| height | number | New viewport height in pixels. |

**Returns:**
- `void`
