# Material Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(shader, name) | Creates a new Material. |
| public | setUniforms(obj) | Batch-sets multiple uniforms from an object. |
| public | setFloat(name, value) | Sets a float (1f) uniform. |
| public | setVec2(name, x, y) | Sets a vec2 (2fv) uniform. |
| public | setVec3(name, x, y, z) | Sets a vec3 (3fv) uniform. |
| public | setVec4(name, x, y, z, w) | Sets a vec4 (4fv) uniform. |
| public | setMat4(name, value) | Sets a mat4 (Matrix4fv) uniform. |
| public | setUniform(name, value, type) | Sets a uniform directly with an explicit type. |

## Overview

Material pairs a Shader with a set of named uniforms (values and textures).
Stores uniform values (floats, vectors, matrices, textures) that are passed
to the shader during rendering. Multiple GameObjects can share the same Material.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `Material`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| shader | Shader | The shader program. |
| uniforms | Object | Uniform values; structure: `{type: '1f'|'3fv'|..., value: ...}`. |
| name | string | Material name. |

## Methods

### constructor

`constructor(shader, name)`

Creates a new Material.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| shader | Shader | The shader program to use for rendering with this material. |
| name | string | Friendly name for debugging/editor. (Default: 'Material') |

### setUniforms

`setUniforms(obj)`

Batch-sets multiple uniforms from an object; auto-detects types.

Auto-detects type from value:
- number → setFloat
- 2-element array → setVec2
- 3-element array → setVec3
- 4-element array → setVec4
- 16-element array → setMat4
- WebGLTexture → stored as 'Texture' type

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| obj | Object | Object mapping uniform names to values. |

**Returns:**
- `Material`: This material for chaining.

### setFloat

`setFloat(name, value)`

Sets a float (1f) uniform.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform name. |
| value | number | Float value. |

**Returns:**
- `void`

### setVec2

`setVec2(name, x, y)`

Sets a vec2 (2fv) uniform.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform name. |
| x | number | X component. |
| y | number | Y component. |

**Returns:**
- `void`

### setVec3

`setVec3(name, x, y, z)`

Sets a vec3 (3fv) uniform.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform name. |
| x | number | X component. |
| y | number | Y component. |
| z | number | Z component. |

**Returns:**
- `void`

### setVec4

`setVec4(name, x, y, z, w)`

Sets a vec4 (4fv) uniform.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform name. |
| x | number | X component. |
| y | number | Y component. |
| z | number | Z component. |
| w | number | W component. |

**Returns:**
- `void`

### setMat4

`setMat4(name, value)`

Sets a mat4 (Matrix4fv) uniform.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform name. |
| value | Float32Array | 4x4 matrix (16 elements). |

**Returns:**
- `void`

### setUniform

`setUniform(name, value, type)`

Sets a uniform directly with an explicit type.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform name. |
| value | any | The value (number, array, Float32Array, WebGLTexture, etc.). |
| type | string | Type string: '1f', '1i', '2fv', '3fv', '4fv', 'Matrix4fv', 'Texture', etc. |

**Returns:**
- `void`
