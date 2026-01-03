# ChemFlow - Complete Drawing Capability Reference

## 🔗 STRUCTURAL FEATURES

### Bonds
| Feature | JSON Property | Values | Visual Output |
|---------|---------------|--------|---------------|
| Single Bond | `"type"` | `"single"` | ─ |
| Double Bond | `"type"` | `"double"` | ═ |
| Triple Bond | `"type"` | `"triple"` | ≡ |
| Wedge Bond | `"type"` | `"wedge"` | ▶ (Solid triangle) |
| Dashed Bond | `"type"` | `"dash"` | - - - (Dashed line) |
| Wavy Bond | `"type"` | `"wavy"` | ～～～ (Unknown stereo) |
| Dotted Bond | `"style"` | `"dotted"` | ··· (H-bonds/TS) |
| Bold Bond | `"style"` | `"bold"` | ━ (Emphasis) |

### Ring Detection
| Feature | Function | Description |
|---------|----------|-------------|
| Auto Hexagon | `findCycle()` | Detects 6-membered rings, arranges as hexagon |
| Auto Pentagon | `findCycle()` | Detects 5-membered rings |
| Auto Layout | `LayoutResolver` | Calculates x,y for non-positioned atoms |

---

## ⚛️ ATOM PROPERTIES

### Basic Properties
| Feature | JSON Property | Example Values | Description |
|---------|---------------|----------------|-------------|
| Element Symbol | `"symbol"` | `"C"`, `"O"`, `"N"` | Any element |
| Functional Group | `"symbol"` | `"Ph"`, `"CH3"`, `"Et"` | Common groups |
| Isotope Label | `"isotope"` | `"13"`, `"2"` | Superscript number |
| Atom Color | `"color"` | `"#ef4444"` | Custom hex color |

### Electronic Properties
| Feature | JSON Property | Values | Visual |
|---------|---------------|--------|--------|
| Formal Charge | `"charge"` | `"+"`, `"-"`, `"+2"` | ⊕ (blue) / ⊖ (red) |
| Partial Charge | `"partialCharge"` | `"+"`, `"-"` | δ⁺ / δ⁻ |
| Lone Pairs | `"lonePairs"` | `0-4` | •• (dot pairs) |
| Radical Electron | `"radical"` | `true` | • (single dot) |

### Advanced Text
| Feature | JSON Property | Example | Output |
|---------|---------------|---------|--------|
| Subscripts | `"symbol"` | `"H_{2}O"` | H₂O |
| Superscripts | `"symbol"` | `"M^{2+}"` | M²⁺ |
| Greek Letters | `"symbol"` | `"C_{\\alpha}"` | Cα |

---

## 🔄 ELECTRON MOVEMENT

### Mechanism Arrows (Curved)
| Feature | JSON Property | Values | Purpose |
|---------|---------------|--------|---------|
| 2-Electron Arrow | `"type"` | `"curved"` (default) | Standard mechanism |
| 1-Electron Arrow | `"type"` | `"fishhook"` | Radical reactions |
| Arrow Curvature | `"curve"` | `-40` to `+40` | Arc height control |
| Arrow Color | `"color"` | `"#3b82f6"` | Custom coloring |

### Reaction Arrows
| Feature | JSON `"type"` | Symbol | Meaning |
|---------|---------------|--------|---------|
| Forward | `"forward"` | → | Reaction progress |
| Equilibrium | `"eq"` | ⇌ | Reversible reaction |
| Resonance | `"resonance"` | ↔ | Resonance structures |
| Retrosynthetic | `"retro"` | ⇒ | Retrosynthesis |

### Conditions on Arrows
| Feature | JSON Property | Example | Position |
|---------|---------------|---------|----------|
| Reagents | `"text_above"` | `"H2SO4"` | Above arrow |
| Conditions | `"text_below"` | `"heat"`, `"h\\nu"` | Below arrow |

---

## 🧬 ORBITALS & QUANTUM

| Feature | JSON Array | Properties | Description |
|---------|-----------|------------|-------------|
| p-Orbital | `"orbitals"` | `"type": "p"` | Teardrop lobes with phase |
| sp³-Orbital | `"orbitals"` | `"type": "sp3"` | Hybridized orbital |
| Angle Control | - | `"angle": 90` | Rotation in degrees |
| Transparency | - | `"color": "rgba(0,0,255,0.3)"` | Overlap visibility |

---

## 📦 BRACKETS & ENCLOSURES

| Feature | JSON Property | Example | Purpose |
|---------|---------------|---------|---------|
| Transition State | `"brackets"` | `"label": "‡"` | TS indicator |
| Dynamic Wrap | `"targets"` | `["mol1", "mol2"]` | Auto-wraps molecules |
| Custom Label | `"label"` | `"TS1"` | Custom text |

---

## 📝 ANNOTATIONS

| Feature | Implementation | Supports |
|---------|----------------|----------|
| Step Annotations | `"annotation"` | HTML markup (`<b>`, `<br>`) |
| Rich Text | Auto-parser | Sub/superscripts, Greek |

---

## 🎨 COLOR PALETTE (Recommended)

| Element Type | Hex Code | Usage |
|--------------|----------|-------|
| Oxygen/Electrophiles | `#ef4444` | Red |
| Nitrogen/Nucleophiles | `#3b82f6` | Blue |
| Leaving Groups | `#b91c1c` | Dark Red |
| Carbocations | `#2563eb` | Bright Blue |
| Radicals | `#f97316` | Orange |
