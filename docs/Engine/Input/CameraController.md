# CameraController Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(camera, domElement) | Creates a new camera controller. |
| public | update(dt) | Updates camera transform based on input events. |

## Overview

CameraController provides first-person camera movement using WASD keyboard and right-click mouse look.
Attaches to a Camera and listens for input events to manipulate its transform.
Supports WASD for forward/left/backward/right, Q/E for up/down vertical, and right-mouse drag for look.

## Class Definition

**Namespace:** `Engine.Input`  
**Class:** `CameraController`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| camera | Camera | The camera to control. |
| domElement | HTMLElement | The DOM element to listen for input events. |
| moveSpeed | number | Movement speed multiplier (units per second). |
| mouseSensitivity | number | Mouse look sensitivity (radians per pixel). |
| keys | Object | Tracks pressed keys: w, a, s, d, q, e. |
| mouse | Object | Mouse tracking state. |
| rotation | Object | Current rotation: x (pitch), y (yaw). |

## Methods

### constructor

`constructor(camera, domElement)`

Creates a new camera controller.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| camera | Camera | The camera to control. |
| domElement | HTMLElement | The DOM element to listen for input events (usually canvas). |

### update

`update(dt)`

Updates camera transform based on input events.

Must be called each frame. Applies accumulated key presses and mouse look
to the camera transform. Position changes use Time.deltaTime internally.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| dt | number | Delta time in seconds since last frame. |

**Returns:**
- `void`
