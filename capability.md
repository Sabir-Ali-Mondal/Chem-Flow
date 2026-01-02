# ChemFlow - Complete Capability List
## Visual Output → Function Mapping

This maps the Visual Output directly to the Internal Function Names implemented in your `ChemEngine` class.

***

## 1. Structure & Bonding (`drawBond`)

The single function `drawBond` handles all geometry calculation, normal vectors, and styling switches.

| Capability | Function Call / Parameter | Visual Output |
|:-----------|:--------------------------|:--------------|
| **Single Bond** | `drawBond(p1, p2, "single")` | Solid line |
| **Double Bond** | `drawBond(p1, p2, "double")` | Parallel lines (3px offset) |
| **Triple Bond** | `drawBond(p1, p2, "triple")` | Triple parallel lines |
| **Stereo Wedge** | `drawBond(p1, p2, "wedge")` | Solid triangle (out of page) |
| **Stereo Dash** | `drawBond(p1, p2, "dash")` | Dashed line (into page) |
| **Wavy Bond** | `drawBond(p1, p2, "wavy")` | Zig-zag (unknown stereo) |
| **Custom Color** | `bond.color: "#HEXCODE"` | Any hex color for emphasis |

***

## 2. Atoms & Properties (`drawAtom`, `drawLonePairs`)

Handles typography, masking (halos), and sub-atomic decorations.

| Capability | Function Call / Parameter | Visual Output |
|:-----------|:--------------------------|:--------------|
| **Element Symbol** | `drawAtom(atom, x, y)` | Text (C, N, O, Br, etc.) |
| **Subscripts** | Automatic Regex Parsing | H₂O, CH₃ (Auto-formatted) |
| **Formal Charge** | `atom.charge: "+" or "-"` | ⊕ (Blue) or ⊖ (Red) |
| **Multi Charge** | `atom.charge: "+2" or "-2"` | +2 or -2 displayed |
| **Isotopes** | `atom.isotope: "13"` | Superscript left (¹³C) |
| **Lone Pairs** | `drawLonePairs(g, count)` | Double dots (- -  up to 4 pairs) |
| **Masking** | Internal `.atom-halo` | White outline hides bonds |
| **Custom Color** | `atom.color: "#HEXCODE"` | Any hex color for atom text |

***

## 3. Reaction Arrows (`drawReactionArrow`)

Handles the central arrows separating reactants and products.

| Capability | Function Call / Parameter | Visual Output |
|:-----------|:--------------------------|:--------------|
| **Forward Arrow** | `type: "forward"` | → (standard) |
| **Equilibrium** | `type: "eq"` | ⇌ (double harpoons) |
| **Resonance** | `type: "resonance"` | ↔ (double headed) |
| **Retrosynthetic** | `type: "retro"` | ⇒ (not fully implemented) |
| **Conditions** | `text_above: "Heat"` | Centered text above arrow |
| **Custom Color** | `arrow.color: "#HEXCODE"` | Any hex color for arrow |

***

## 4. Mechanism Mapping (`drawMechArrow`)

Handles the curved "electron pushing" arrows overlaying the structure.

| Capability | Function Call / Parameter | Visual Output |
|:-----------|:--------------------------|:--------------|
| **Electron Move** | `drawMechArrow(mech)` | Cubic Bézier Curve |
| **Curvature Control** | `curve: -40 or 40` | Arc height & direction |
| **Auto Targeting** | `from: "id", to: "id"` | Auto-calculates atom path |
| **Custom Color** | `mech.color: "#HEXCODE"` | Any hex color (default blue) |
| **Default Color** | No color specified | Blue (#2563eb) |

***

## 5. Transition States & Brackets (`drawBracket`, `drawDynamicBracket`)

Used to denote unstable intermediates or transition states.

| Capability | Function Call / Parameter | Visual Output |
|:-----------|:--------------------------|:--------------|
| **Legacy Brackets** | `drawBracket(b, x, y)` | Fixed position [ ] |
| **Dynamic Brackets** | `drawDynamicBracket(b, bounds)` | Auto-wrapping [ ] (NEW) |
| **Target-based** | `b.targets: ["mol_id"]` | Wraps specific molecules |
| **TS Symbol** | `b.label: "‡"` | Double dagger (‡) |
| **Custom Label** | `b.label: "TS" or "[Int]"` | Any text label |
| **Custom Color** | `b.color: "#HEXCODE"` | Any hex color for brackets |

***

## 6. Layout & Annotation (`drawText`, `drawDivider`, `drawAnnotationBox`)

Functions that manage the "notebook" look of the application.

| Capability | Function Call | Description |
|:-----------|:--------------|:------------|
| **Step Labels** | `drawText(..., "label-text")` | "STEP 1", "STEP 2" labels |
| **Divider Lines** | `drawDivider(x1, y1, x2, y2)` | Vertical grey separator |
| **Annotations** | `drawAnnotationBox(text, x, y)` | HTML formatted text box |
| **HTML Support** | HTML in annotation string | `<b>`, `<em>`, `<br>` tags |

***

## 7. Auto-Layout System (`LayoutResolver`)

Automatic positioning of atoms when coordinates are omitted.

| Capability | Implementation | Description |
|:-----------|:---------------|:------------|
| **Chain Layout** | `layoutChain(mol, graph)` | Linear atom arrangement |
| **Ring Detection** | `detectRings(graph)` | Finds cyclic structures |
| **Graph Building** | `buildGraph(mol)` | Neighbor connectivity map |
| **Path Finding** | `findLongestPath(graph)` | Main chain identification |
| **Coordinate Omit** | Omit x,y in atom definition | Triggers auto-layout |

***

## 8. Dynamic Height System (NEW - v2.1)

Automatic spacing calculation based on actual molecule height.

| Capability | Implementation | Description |
|:-----------|:---------------|:------------|
| **Bounds Calculation** | Pre-calculates minY, maxY | Scans all atoms per step |
| **Dynamic Padding** | `totalPadding = 180px` | Minimal safe spacing |
| **Minimum Height** | `Math.max(350, calculated)` | Ensures consistency |
| **Vertical Centering** | verticalOffset calculation | Centers molecules in space |
| **Per-Step Height** | `stepInfo.totalHeight` | Each step sized uniquely |

***

## 9. Marker System (`createMarker`, `getMarker`)

SVG arrowhead management for arrows.

| Capability | Implementation | Description |
|:-----------|:---------------|:------------|
| **Arrow Markers** | `createMarker(id, color)` | Creates SVG marker defs |
| **Dynamic Colors** | `getMarker(color)` | On-demand colored markers |
| **Reusable Markers** | Caches by color hash | Performance optimization |

***

## 10. Color System (Throughout All Functions)

Custom coloring support across all visual elements.

| Element | Color Property | Default if Omitted |
|:--------|:---------------|:-------------------|
| **Atoms** | `atom.color: "#HEXCODE"` | #0f172a (black) |
| **Bonds** | `bond.color: "#HEXCODE"` | #0f172a (black) |
| **Mechanism Arrows** | `mechanism.color: "#HEXCODE"` | #2563eb (blue) |
| **Reaction Arrows** | `arrow.color: "#HEXCODE"` | #0f172a (black) |
| **Brackets** | `bracket.color: "#HEXCODE"` | #0f172a (black) |

### Recommended Color Palette (built into AI prompt):
- Oxygen/Electrophiles: `#ef4444` (Red)
- Nitrogen/Nucleophiles: `#3b82f6` (Blue)
- Halogens/Leaving Groups: `#b91c1c` (Dark Red)
- Carbocations: `#2563eb` (Bright Blue)
- Carbanions: `#16a34a` (Green)
- Radicals: `#a855f7` (Purple)
- Breaking bonds: `#ef4444` (Red)
- Forming bonds: `#16a34a` (Green)

***

## 11. SVG Rendering System (`initSVG`, `render`)

Core rendering engine that orchestrates all drawing functions.

| Capability | Implementation | Description |
|:-----------|:---------------|:------------|
| **SVG Initialization** | `initSVG(width, height)` | Creates canvas + defs |
| **Layering** | `layerMain` group element | Proper z-order rendering |
| **Coordinate System** | scale = 45px per grid unit | 1.0 grid = 45px |
| **Dynamic Width** | Fixed at 2500px | Horizontal scrolling |
| **Dynamic Height** | Calculated from stepBounds | Adapts to content |

***

## 12. Utility Functions

| Function | Purpose |
|:---------|:--------|
| `pasteFromClipboard` | Smart paste with clipboard API fallback |
| `copyPrompt` | Copies AI prompt to clipboard |
| `loadComplexDemo` | Loads example mechanism (SN1 with rearrangement) |
| `parseAndRender` | JSON parser + error handling + engine trigger |
| `openModal` | Bootstrap modal initialization |
| `showNotification` | Toast notification system (success/error/info) |

***

## Summary of Capabilities

- **Total Visual Elements:** 40+ distinct capabilities
- **Core Functions:** 15 drawing functions
- **Color Support:** 6 element types (atoms, bonds, arrows, etc.)
- **Bond Types:** 6 (single, double, triple, wedge, dash, wavy)
- **Arrow Types:** 4 (3 reaction + 1 mechanism)
- **Auto Features:** 2 (layout + height calculation)
- **Special Effects:** 4 (isotopes, charges, lone pairs, subscripts)

***

## New Features in v2.1

✅ Dynamic Height Calculation (no overflow!)  
✅ Per-step height adjustment  
✅ Vertical centering of molecules  
✅ Minimal padding (180px instead of 450px)  
✅ Smooth scaling from small to huge reactions

***

