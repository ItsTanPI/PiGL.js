# Vector3 Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(x, y, z) | Creates a new Vector3. |
| public | set(x, y, z) | Sets all components. |
| public | copy(v) | Copies values from another Vector3. |
| public | toArray() | Converts to a plain array [x, y, z]. |

## Overview

Vector3 is a lightweight wrapper around a Float32Array for 3D vectors.
Provides x, y, z components with getters/setters and common operations.
Used throughout the engine for positions, scales, rotations, and other 3D calculations.

## Class Definition

**Namespace:** `Engine.Math`  
**Class:** `Vector3`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| x | number | X component of the vector. |
| y | number | Y component of the vector. |
| z | number | Z component of the vector. |
| data | Float32Array | Internal storage; access via x,y,z getters/setters. |

## Methods

### constructor

`constructor(x, y, z)`

Creates a new Vector3.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| x | number | X component. (Optional, default 0) |
| y | number | Y component. (Optional, default 0) |
| z | number | Z component. (Optional, default 0) |

### set

`set(x, y, z)`

Sets all components.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| x | number | New X value. |
| y | number | New Y value. |
| z | number | New Z value. |

**Returns:**
- `Vector3`: This vector for chaining.

### copy

`copy(v)`

Copies values from another Vector3.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| v | Vector3 | Source vector. |

**Returns:**
- `Vector3`: This vector for chaining.

### toArray

`toArray()`

Converts to a plain array [x, y, z].

**Returns:**
- `number[]`: Plain array [x, y, z].
