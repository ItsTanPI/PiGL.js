# Profiler Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor() | Creates a new Profiler instance. |
| public | enable() | Enables profiling data collection. |
| public | disable() | Disables profiling and clears collected data. |

## Overview

Profiler collects frame timing and render pipeline metrics.
Tracks frame time, CPU time, per-pass durations, and draw call counts.
Maintains a history of metrics for averaging/analysis. Enable/disable to control collection.

## Class Definition

**Namespace:** `Engine.Profiling`  
**Class:** `Profiler`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| enabled | boolean | Is profiling currently enabled? |
| metrics | Object | Current frame metrics (start, end, frameTime, cpuTime, passes). |
| fps | number | Calculated frames per second. |
| history | number[] | History of CPU times for averaging. |

## Methods

### constructor

`constructor()`

Creates a new Profiler instance.

### enable

`enable()`

Enables profiling data collection.

**Returns:**
- `void`

### disable

`disable()`

Disables profiling and clears collected data.

**Returns:**
- `void`
