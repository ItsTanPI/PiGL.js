# Transform Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor() | Creates a new Transform. |
| public | add(child) | Attaches a child transform to this transform. |
| public | remove(child) | Detaches a child transform from this transform. |
| public | updateLocalMatrix() | Recomputes the local matrix from position, rotation, and scale. |
| public | updateWorldMatrix() | Recomputes the world matrix combining this and parent transforms. |

## Overview

Transform manages local/world space position, rotation, scale and hierarchy.
Stores 3D transformation (position, rotation in Euler angles, scale)
and computes local and world matrices. Supports parent-child hierarchy for
skeletal/rigged objects.

## Class Definition

**Namespace:** `Engine.Math`  
**Class:** `Transform`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| position | Vector3 | Local position relative to parent. |
| rotation | Vector3 | Local rotation in radians (Euler: X, Y, Z). |
| scale | Vector3 | Local scale. Default [1, 1, 1]. |
| localMatrix | Float32Array | Local transformation matrix (4x4). |
| worldMatrix | Float32Array | World transformation matrix (4x4). |
| parent | Transform | Parent transform; null if root. |
| children | Array&lt;Transform&gt; | Direct children. |

## Methods

### constructor

`constructor()`

Creates a new Transform.

### add

`add(child)`

Attaches a child transform to this transform.
If the child already has a parent, it is removed from the old parent first.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| child | Transform | The child transform to attach. |

**Returns:**
- `void`

### remove

`remove(child)`

Detaches a child transform from this transform.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| child | Transform | The child to detach. |

**Returns:**
- `void`

### updateLocalMatrix

`updateLocalMatrix()`

Recomputes the local matrix from position, rotation, and scale.
Builds the local matrix as: Translate × RotateY × RotateX × RotateZ × Scale.
Rotation order is YXZ (Euler).

**Returns:**
- `void`

### updateWorldMatrix

`updateWorldMatrix()`

Recomputes the world matrix combining this and parent transforms, recursively updates children.
Combines parent world matrix with local matrix. Then recursively updates all children.
Call at least once per frame on root nodes before rendering.

**Returns:**
- `void`
