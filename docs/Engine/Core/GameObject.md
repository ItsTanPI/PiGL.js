# GameObject Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(renderer, material, mesh, name) | Creates a new GameObject. |
| public | render(camera, target, material) | Renders this GameObject to a target or the screen. |

## Overview

A GameObject is the fundamental building block of scenes. It groups a Transform,
Mesh (geometry), and Material (shader + uniforms) together. Render passes and the Renderer
iterate GameObjects in a scene to produce the final image.

## Class Definition

**Namespace:** `Engine.Core`  
**Class:** `GameObject`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Friendly name for debugging/editor. |
| transform | Transform | The object's transform component used for position, rotation, and scale. |
| renderer | Renderer | The Renderer instance to use for drawing. |
| material | Material | The Material (shader + uniforms) to render with. |
| mesh | Mesh | The geometry mesh; if null, Renderer provides a default quad. |

## Methods

### constructor

`constructor(renderer, material, mesh, name)`

Creates a new GameObject.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| renderer | Renderer | The Renderer instance to use for drawing. |
| material | Material | The Material (shader + uniforms) to render with. |
| mesh | Mesh | Optional Mesh geometry; if null, Renderer provides a default quad. |
| name | string | Friendly name for debugging/editor. Default is "GameObject". |

### render

`render(camera, target, material)`

Renders this GameObject to a target or the screen.

Updates the world matrix before delegating to the Renderer.  
The Renderer handles texture binding, uniform setting, and draw calls.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| camera | Camera | Camera providing view and projection matrices. |
| target | RenderTarget | Optional render target to draw to; if undefined, renders to screen. |
| material | Material | Optional material override; if null, uses this.material. |

**Returns:**
- `void`
