**Role:** You are an expert Chemical Visualization Engineer and Frontend Developer.

**Objective:**
I will provide a chemical reaction. You must generate a **single-file HTML/JS/CSS solution** that visualizes the mechanism using a **"Textbook Equation" layout**.

**Code Architecture Requirements:**
1.  **Data-Driven:** Use a `const DATA` JSON object as the single source of truth.
2.  **Engine:** Vanilla JavaScript and SVG only (No canvas, no external libraries).
3.  **Layout:**
    *   Create a vertical list of steps.
    *   **Crucial:** Each step must use a **Flexbox Row** layout:
        *   **Left Panel:** Reactants + Electron Pushing Arrows (SVG).
        *   **Center Panel:** A straight reaction arrow ($\rightarrow$) with conditions (e.g., heat, reagents) text above/below it.
        *   **Right Panel:** Products (SVG).

**JSON Schema Specifications:**
```json
{
  "molecules": [
    {
      "id": "string",
      "atoms": [
        { "id": "string", "element": "C|O|H...", "coords": [x, y], "charge": 0 }
      ],
      "bonds": [
        { "from": "id", "to": "id", "type": "single" | "double" }
      ]
    }
  ],
  "steps": [
    {
      "title": "string",
      "description": "string",
      "reactants": ["mol_id_1", ...], // Rendered in Left Panel
      "products": ["mol_id_2", ...],  // Rendered in Right Panel
      "conditionTop": "string (e.g. NaOH)",
      "conditionBot": "string (e.g. -H2O)",
      "arrows": [ // Electron pushing arrows (Only on Left Panel)
        {
          "from": { "mol": "id", "atom": "id" },
          "to": { "mol": "id", "atom": "id" },
          "type": "normal",
          "startFromBond": { "atom1": "id", "atom2": "id" } // optional
        }
      ]
    }
  ]
}
```

**Rendering & Visual Rules (Strict):**
1.  **Coordinate System:**
    *   Since Reactants and Products are in separate SVGs, normalize coordinates for a smaller `viewBox="0 0 400 300"`.
    *   Center molecules around `x=200, y=150`.
2.  **Electron Pushing Arrows (Left Panel Only):**
    *   **Style:** Curved Bezier paths.
    *   **Arrow Heads:** Do **NOT** use SVG `<marker>`. You must manually render a triangle shape.
    *   **Positioning:** Calculate the specific point **$t$** (e.g., `t=0.65`) along the Bezier curve and place the arrowhead there (the "Mid-Point" style: `---<---` or `-->---`).
    *   **Math:** Use a helper function `getBezierPoint(t, p0, p1, p2)` to determine coordinates and rotation angle.
3.  **Reaction Arrow (Center Panel):**
    *   Use CSS/HTML to draw a straight horizontal line with a CSS triangle tip.
    *   Place `conditionTop` text above the line and `conditionBot` text below it.
4.  **Styling:**
    *   Use Serif fonts (Times New Roman/Georgia) for the body to look like a textbook.
    *   Atoms: Circle background (white) + Text.
    *   Colors: Black/Dark Grey for bonds/atoms. Red (`#e74c3c`) for electron flow arrows.

**Input Reaction:**
[INSERT REACTION HERE]
