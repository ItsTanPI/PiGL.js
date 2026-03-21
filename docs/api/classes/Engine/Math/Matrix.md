# Matrix Utility Class

## Overview

The `Matrix` class provides static methods for common 4x4 matrix operations used in WebGL graphics programming. It extracts and centralizes matrix manipulation logic that was previously duplicated across rendering passes.

## Location

`src/Engine/Math/Matrix.js`

## Features

- **4x4 Matrix Inversion**: Efficient inversion using Cramer's rule with 2x2 minors
- **Singular Matrix Detection**: Returns false for non-invertible matrices
- **Static Methods**: All methods are static, no instantiation needed
- **Graphics-Optimized**: Uses standard techniques for graphics applications

## Usage

### Matrix Inversion

The primary method is `Matrix.invert()`, used to invert 4x4 matrices for screen-space ray reconstruction and other graphics calculations.

```javascript
import { Matrix } from './Engine/Math/Matrix.js';

// Create matrices
const viewProjMatrix = new Float32Array(16);
const invViewProjMatrix = new Float32Array(16);

// Compute some view-projection matrix...
// mat4.multiply(viewProjMatrix, projMatrix, viewMatrix);

// Invert it
if (Matrix.invert(viewProjMatrix, invViewProjMatrix)) {
  // Matrix was successfully inverted
  material.setUniform('uInverseViewProjection', invViewProjMatrix);
} else {
  // Matrix is singular (non-invertible)
  console.error('Cannot invert matrix - determinant is zero');
}
```

### Use Cases

**Deferred Rendering**
- Computing inverse view-projection for lighting passes
- Reconstructing world-space positions from screen coordinates

**Screen-Space Effects**
- Ray direction reconstruction in skybox rendering
- Edge detection in outline passes

**Shadow Mapping**
- Transforming between light and camera spaces
- Computing shadow space matrices

## Integration with Existing Code

### Before Refactoring
Both `LightingPass` and `SkyboxPass` had duplicate `invertMatrix()` methods.

```javascript
// Duplicated in multiple passes
invertMatrix(m, out) {
  // 45 lines of matrix inversion code
  // ...
  return true;
}
```

### After Refactoring
Now both passes use the centralized `Matrix` utility:

```javascript
import { Matrix } from '../../Math/Matrix.js';

// In setMatricesFromCameras()
Matrix.invert(camViewProj, invCamViewProj);
```

## Benefits

✅ **DRY Principle**: Eliminates code duplication  
✅ **Maintainability**: Single source of truth for matrix operations  
✅ **Extensibility**: Easy to add more matrix utilities (transpose, determinant, etc.)  
✅ **Performance**: Static method calls have minimal overhead  
✅ **Documentation**: Centralized documentation and examples  

## API Reference

### `Matrix.invert(m, out)`

**Parameters:**
- `m` (Float32Array): Input 4x4 matrix (16 elements, row-major order)
- `out` (Float32Array): Output array for inverted matrix (will be modified)

**Returns:**
- `true` if matrix was successfully inverted
- `false` if matrix is singular (determinant = 0)

**Algorithm:** Cramer's rule with 2x2 minors
**Time Complexity:** O(1) - constant 45 operations

## Testing

The matrix inversion is tested indirectly through:
- Lighting calculations in deferred rendering
- Skybox ray reconstruction
- Screen-space effect accuracy

## Future Extensions

Potential additions to the Matrix class:
- `transpose()` - Matrix transposition
- `determinant()` - Calculate determinant
- `multiply()` - Matrix multiplication
- `identity()` - Create identity matrix
- `decompose()` - Extract position, rotation, scale
