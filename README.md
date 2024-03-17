## Issue: Modal Overlap with Custom Animation Configs

### Summary

When using the `@gorhom/bottom-sheet` library in a React Native project targeted for iOS, an unexpected behavior occurs involving the presentation of multiple `BottomSheetModal` components. Specifically, when a first modal (Modal A) with multiple snap points is opened to its highest snap point and an attempt is made to open a second modal (Modal B), Modal A does not dismiss as expected. Instead, it collapses to a lower snap point, resulting in both Modal A and B being presented simultaneously. This overlap is contrary to the expected behavior where only one modal should be visible at a time, leading to potential user interface confusion.

### Expected Behavior

Opening Modal B while Modal A is open at its highest snap point should result in Modal A being dismissed, allowing only Modal B to be visible.

### Actual Behavior

Modal A collapses to its smaller snap point instead of being dismissed, and Modal B opens simultaneously. This results in an overlap where both Modal A and B are visible at the same time.

![RocketSim_Recording_iPhone_15_6 1_2024-03-16_20 51 15](https://github.com/jckyeh/gorhom-bottom-sheet-mre/assets/6530117/18bced4b-882b-4587-b9da-56ba692d334e)


### Steps to Reproduce

1. Implement a screen with two `BottomSheetModal` components, A and B, where A has multiple snap points (e.g., `["60%", "80%"]`) and B has a single snap point (e.g., `["50%"]`).
2. Open Modal A to its highest snap point.
3. Attempt to open Modal B while Modal A is still open.

### Platform

This issue has been reproduced on iOS. Other platforms (Android and web) have not been tested for this specific behavior.

### Workaround

A temporary solution involves removing the `animationConfigs={animationConfigs}` prop from the `BottomSheetModal` component. This prevents the overlapping issue but also removes the ability to customize the animations of the bottom sheet modal, limiting the flexibility and visual appeal of modal presentations.

This issue highlights a critical usability concern when managing multiple modals with custom animation configurations and multiple snap points on iOS.
