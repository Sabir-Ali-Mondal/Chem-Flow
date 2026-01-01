This maps the **Visual Output** directly to the **Internal Function Names** implemented in your `ChemEngine` class.

### 1. Structure & Bonding (`drawBond`)
The single function `drawBond` handles all geometry calculation, normal vectors, and styling switches.

| Capability | Function Call / Parameter | Visual Output |
| :--- | :--- | :--- |
| **Single Bond** | `drawBond(p1, p2, "single")` | Solid line |
| **Double Bond** | `drawBond(p1, p2, "double")` | Double parallel lines (offset) |
| **Triple Bond** | `drawBond(p1, p2, "triple")` | Triple parallel lines |
| **Stereo Wedge** | `drawBond(p1, p2, "wedge")` | Solid triangle (Projection) |
| **Stereo Hash** | `drawBond(p1, p2, "dash")` | Dashed line (Receding) |
| **Wavy Bond** | `drawBond(p1, p2, "wavy")` | Zig-zag/Sine wave (Unknown stereo) |

---

### 2. Atoms & Properties (`drawAtom`)
Handles typography, masking (halos), and sub-atomic decorations.

| Capability | Function Call / Parameter | Visual Output |
| :--- | :--- | :--- |
| **Element Symbol** | `drawAtom(atom, x, y)` | Text (C, N, O, etc.) |
| **Subscripts** | *Automatic Regex Parsing* | $H_2O$, $CH_3$ (Auto-formatted) |
| **Formal Charge** | `atom.charge: "+" or "-"` | ⊕ (Blue) or ⊖ (Red) |
| **Isotopes** | `atom.isotope: "13"` | Superscript left ($^{13}C$) |
| **Lone Pairs** | `drawLonePairs(g, count)` | Double dots above atom ($\cdot\cdot$) |
| **Masking** | *Internal `.atom-halo`* | White outline to hide bonds behind text |

---

### 3. Reaction Arrows (`drawReactionArrow`)
Handles the central arrows separating reactants and products.

| Capability | Function Call / Parameter | Visual Output |
| :--- | :--- | :--- |
| **Forward** | `type: "fwd"` | $\longrightarrow$ |
| **Equilibrium** | `type: "eq"` | $\rightleftharpoons$ (Harpoons) |
| **Retrosynthetic** | `type: "retro"` | $\Rightarrow$ (Open double head) |
| **Resonance** | `type: "resonance"` | $\longleftrightarrow$ (Double headed) |
| **Conditions** | `text_above: "Heat"` | Centered text above arrow |

---

### 4. Mechanism Mapping (`drawMechArrow`)
Handles the curved "electron pushing" arrows overlaying the structure.

| Capability | Function Call / Parameter | Visual Output |
| :--- | :--- | :--- |
| **Electron Move** | `drawMechArrow(mech)` | Blue Cubic Bézier Curve |
| **Curvature** | `curve: -40` or `40` | Controls arc height & direction |
| **Targeting** | `from: id`, `to: id` | Auto-calculates path between atoms |

---

### 5. Transition States (`drawBracket`)
Used to denote unstable intermediates or transition states.

| Capability | Function Call / Parameter | Visual Output |
| :--- | :--- | :--- |
| **Brackets** | `drawBracket(b, x, y)` | Large corners: $\left[ \quad \right]$ |
| **TS Symbol** | `b.label: "‡"` | Double dagger symbol ($\ddagger$) |

---

### 6. Layout & Annotation
Functions that manage the "notebook" look of the application.

| Capability | Function Call | Description |
| :--- | :--- | :--- |
| **Step Labels** | `drawText(..., "label-text")` | Uppercase "STEP 1" labels |
| **Annotations** | `drawText(..., "desc-text")` | Italicized descriptions on left |
| **Divider** | `drawDivider(x1, y1, x2, y2)` | Vertical grey line separating UI |
