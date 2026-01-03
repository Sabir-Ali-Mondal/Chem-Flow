# ChemFlow - Ultimate Capability Specification

## 1. Structure & Bonding Engine
**Function:** `drawBond(p1, p2, type)`

The rendering engine supports complex stereochemistry and variable bond orders with custom styling.

| Capability | Property Value | Visual Output |
|:---|:---|:---|
| **Single Bond** | `"type": "single"` | Solid line (Standard sigma bond) |
| **Double Bond** | `"type": "double"` | Parallel lines with 3px offset (Pi bond) |
| **Triple Bond** | `"type": "triple"` | Triple parallel lines (Alkynes/Nitriles) |
| **Stereo Wedge** | `"type": "wedge"` | Solid triangle (Stereochemistry OUT) |
| **Stereo Dash** | `"type": "dash"` | Dashed line pattern (Stereochemistry IN) |
| **Wavy Bond** | `"type": "wavy"` | Zig-zag line (Unknown stereochemistry) |
| **Custom Color** | `"color": "#HEX"` | Overrides default black (e.g., for highlighted bonds) |

***

## 2. Atom Intelligence System
**Function:** `drawAtom(atom)`

Handles typography, automatic formatting, and sub-atomic particle visualization.

| Feature | Implementation | Description |
|:---|:---|:---|
| **Smart Subscripts** | `Regex Parsing` | Automatically formats numbers (e.g., `NH2` → `NH₂`). |
| **Formal Charges** | `"charge": "+/-"` | Renders `⊕` (Blue) or `⊖` (Red) at top-right. |
| **Multi-Charges** | `"charge": "+2"` | Renders numeric charges (`+2`, `-2`). |
| **Isotopes** | `"isotope": "13"` | Renders superscript mass number on left (`¹³C`). |
| **Lone Pairs** | `"lonePairs": 1-4` | Renders graphical electron dots around the atom. |
| **Halo Masking** | `.atom-halo` | White stroke behind text to prevent bond overlaps. |

***

## 3. Reaction Arrow Logic
**Function:** `drawReactionArrow(arrow)`

Supports all standard organic chemistry reaction pathways.

| Type | Identifier | Visual | Usage |
|:---|:---|:---|:---|
| **Forward** | `"forward"` | `→` | Standard product formation. |
| **Equilibrium** | `"eq"` | `⇌` | Reversible / Equilibrium steps. |
| **Resonance** | `"resonance"` | `↔` | Electron delocalization visualization. |
| **Retrosynthetic** | `"retro"` | `⇒` | Retrosynthetic analysis planning. |
| **Conditions** | `"text_above"` | Text | Reagents/Solvents centered above arrow. |

***

## 4. Mechanism & Electron Flow
**Function:** `drawMechArrow(mech)`

Bezier-curve based engine for "Curved Arrow Formalism".

*   **Precision Targeting:** Arrows connect from specific `atom.id` to `atom.id`.
*   **Quadratic Curves:** Uses control points to create smooth arcs (`curve` parameter).
*   **Context Aware:** Defaults to **Blue** for electron movement, supports **Red** for bond breaking.
*   **Dynamic Markers:** Generates arrowheads on-the-fly to match any custom color.

***

## 5. Transition State Wrapping
**Function:** `drawDynamicBracket(bracket)`

Replaces legacy fixed-coordinate brackets with intelligent object wrapping.

*   **Targeting:** Accepts a list of molecule IDs (`"targets": ["mol1"]`).
*   **Auto-Bounding:** Calculates the precise `minX, maxX, minY, maxY` of all atoms in the target molecules.
*   **Padding:** Adds standard breathing room around the structures.
*   **Labeling:** Supports the Double Dagger (`‡`) or custom text labels (`TS`).

***

## 6. Smart Layout Engine
**Class:** `LayoutResolver` & `ChemEngine`

The "Brain" of the application that handles positioning when data is missing.

| Feature | Description |
|:---|:---|
| **Auto-Layout** | If `x` and `y` are omitted in JSON, the engine automatically calculates positions using a zig-zag chain algorithm. |
| **Auto-Height** | The canvas automatically expands vertically to fit steps of any size, preventing clipping. |
| **Auto-Width** | The canvas automatically expands horizontally to accommodate long reaction chains or large molecules. |
| **Responsive Grid** | Standardized grid system where `1.0 unit = 45px` for consistent scaling. |

***

## 7. Premium UI/UX Architecture

*   **Custom Scrollbars:** Replaces default browser scrollbars with "Slate" themed, rounded bars.
*   **Toast Notifications:** Non-intrusive pop-ups for success/error states.
*   **Clipboard Integration:** One-click copying of System Prompts.
*   **Intro Animation:** Independent module for branding ("ChemFlow").
*   **SVG-to-Image:** Native HTML5 Canvas conversion to download high-res PNGs.
