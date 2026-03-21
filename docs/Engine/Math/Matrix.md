# Matrix Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| static | identity(out) | Sets a matrix to identity. |
| static | multiply(out, a, b) | Multiplies two matrices: out = a * b. |
| static | translate(out, a, v) | Translates a matrix by a vector. |
| static | scale(out, a, v) | Scales a matrix by a vector. |
| static | rotateX(out, a, rad) | Rotates a matrix around the X axis. |
| static | rotateY(out, a, rad) | Rotates a matrix around the Y axis. |
| static | rotateZ(out, a, rad) | Rotates a matrix around the Z axis. |
| static | invert(out, a) | Inverts a matrix. |

## Overview

A centralized collection of matrix operations including creation, transformation,
composition, and inversion. Used throughout the engine for camera view/proj and object transforms.
All operations work with Float32Array matrices in row-major order (16 elements).

## Class Definition

**Namespace:** `Engine.Math`  
**Class:** `Matrix`

## Methods

### identity

`static identity(out)`

Sets the matrix to the identity transformation (no scale, rotation, or translation).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix (will be modified). |

**Returns:**
- `Float32Array`: The identity matrix.

### multiply

`static multiply(out, a, b)`

Multiplies two 4x4 matrices: out = a × b.
Computes the product of two matrices and stores the result in out.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix. |
| a | Float32Array | First matrix. |
| b | Float32Array | Second matrix. |

**Returns:**
- `Float32Array`: The result matrix.

### translate

`static translate(out, a, v)`

Applies a translation transformation to the matrix.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix. |
| a | Float32Array | Input matrix to translate. |
| v | Object/Array | Translation vector ({x,y,z} or [x,y,z]). |

**Returns:**
- `Float32Array`: The translated matrix.

### scale

`static scale(out, a, v)`

Applies a scaling transformation to the matrix.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix. |
| a | Float32Array | Input matrix to scale. |
| v | Object/Array | Scale vector ({x,y,z} or [x,y,z]). |

**Returns:**
- `Float32Array`: The scaled matrix.

### rotateX

`static rotateX(out, a, rad)`

Rotate a matrix around the X axis.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix. |
| a | Float32Array | Input matrix. |
| rad | number | Rotation angle in radians. |

**Returns:**
- `Float32Array`: The rotated matrix.

### rotateY

`static rotateY(out, a, rad)`

Rotate a matrix around the Y axis.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix. |
| a | Float32Array | Input matrix. |
| rad | number | Rotation angle in radians. |

**Returns:**
- `Float32Array`: The rotated matrix.

### rotateZ

`static rotateZ(out, a, rad)`

Rotate a matrix around the Z axis.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix. |
| a | Float32Array | Input matrix. |
| rad | number | Rotation angle in radians. |

**Returns:**
- `Float32Array`: The rotated matrix.

### invert

`static invert(out, a)`

Computes the inverse of a matrix.
Returns null if the matrix is singular (non-invertible).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| out | Float32Array | Output matrix. |
| a | Float32Array | Input matrix to invert. |

**Returns:**
- `Float32Array | null`: The inverted matrix, or null if singular.
