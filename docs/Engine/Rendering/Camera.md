# Camera Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor() | Creates a new Camera. |
| public | setPerspective(fov, aspect, near, far) | Sets up perspective projection. |
| public | setOrthographic(left, right, bottom, top, near, far) | Sets up orthographic projection. |
| public | updateProjection() | Rebuilds projection matrix from current settings. |
| public | updateView() | Computes the view matrix from the camera's world transform. |
| public | getScreenPosition(gameObject) | Projects a GameObject's world position to screen coordinates. |

## Overview

Camera extends GameObject to provide projection and view matrices for rendering.
Supports both perspective and orthographic projections. The camera itself is a GameObject
so it has a Transform and can be positioned/rotated in the scene. Updated each frame and passed to
render passes to define what is visible.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `Camera`  
**Inheritance:** `GameObject` -> `Camera`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| projectionMatrix | Float32Array | 4x4 projection matrix. |
| viewMatrix | Float32Array | 4x4 view matrix. |
| fov | number | Field of view in radians. |
| aspect | number | Aspect ratio (width/height). |
| near | number | Near clipping plane distance. |
| far | number | Far clipping plane distance. |
| orthographic | boolean | Is orthographic projection active? |
| orthoSize | number | Size for orthographic projection (half-height). |

## Methods

### constructor

`constructor()`

Creates a new Camera with default perspective settings.

### setPerspective

`setPerspective(fov, aspect, near, far)`

Sets up perspective projection (standard 3D view).
Updates internal projection matrix. Call `updateProjection()` to rebuild if settings change.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| fov | number | Field of view in radians. |
| aspect | number | Aspect ratio. |
| near | number | Near clipping plane. |
| far | number | Far clipping plane. |

**Returns:**
- `void`

### setOrthographic

`setOrthographic(left, right, bottom, top, near, far)`

Sets up orthographic projection (2D/isometric view).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| left | number | Left clip boundary. |
| right | number | Right clip boundary. |
| bottom | number | Bottom clip boundary. |
| top | number | Top clip boundary. |
| near | number | Near clipping plane. |
| far | number | Far clipping plane. |

**Returns:**
- `void`

### updateProjection

`updateProjection()`

Rebuilds projection matrix from current settings.
Call after changing `fov`, `aspect`, `near`, `far`, or `orthographic` mode.

**Returns:**
- `void`

### updateView

`updateView()`

Computes the view matrix from the camera's world transform.
The view matrix is the inverse of the camera's world matrix.
Call once per frame before rendering.

**Returns:**
- `void`

### getScreenPosition

`getScreenPosition(gameObject)`

Projects a GameObject's world position to normalized screen coordinates (0–1).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gameObject | GameObject | Object to project. |

**Returns:**
- `number[]`: Array [screenX, screenY] in normalized device coords (0=left/bottom, 1=right/top).
