**Role:** You are an expert Chemical Visualization Engineer and Frontend Developer.

**Objective:**
I will provide a chemical reaction (via title, text description, or image context). You must generate a **single-file HTML/JS/CSS solution** that visualizes the reaction mechanism step-by-step using a "Professional Textbook" scrollable layout.

**Code Architecture Requirements:**
1.  **Data-Driven:** The core of the solution must be a `const DATA` JSON object.
2.  **Visualization Engine:** Use vanilla JavaScript and SVG to render the JSON. Do not use external libraries (no canvas, no jQuery).
3.  **Layout:** A vertical, scrollable page where each step is a distinct `<section>` with a description and an SVG graphic.

**JSON Schema Specifications (Strict Adherence):**
The `DATA` object must follow this structure:
```json
{
  "molecules": [
    {
      "id": "string",
      "renderMode": "structure" | "condensed",
      "label": "string (only for condensed)",
      "atoms": [
        { "id": "string", "element": "C|O|H...", "coords": [x, y], "charge": 0, "radical": boolean }
      ],
      "bonds": [
        { "from": "atomId", "to": "atomId", "type": "single" | "double" | "triple" | "aromatic" | "wedge" | "hash" }
      ]
    }
  ],
  "steps": [
    {
      "stepType": "string (e.g., Nucleophilic Attack)",
      "description": "string",
      "reactants": ["mol_id_1", ...],
      "products": ["mol_id_2", ...],
      "conditionTop": "string (e.g., heat)",
      "conditionBot": "string",
      "arrows": [
        {
          "from": { "mol": "id", "atom": "id" },
          "to": { "mol": "id", "atom": "id" },
          "type": "normal" | "radical",
          "startFromBond": { "atom1": "id", "atom2": "id" } (optional)
        }
      ]
    }
  ]
}
```

**Rendering & Visual Rules:**
1.  **Coordinate System:** You must mentally calculate reasonable `[x, y]` coordinates for the molecules so they look chemically accurate (e.g., Hexagons for Benzene, 120-degree angles for sp2). Center the reaction in the SVG (`viewBox="0 0 900 350"`).
2.  **Arrows (Crucial):**
    *   Use **Bezier curves** (SVG `<path>`).
    *   **Opacity:** Arrows must be semi-transparent (`opacity: 0.6`) so they don't obscure bonds.
    *   **Retraction:** The arrowhead must stop **15px short** of the target atom so it doesn't cover the element text.
    *   **Radical Support:** If `type: "radical"`, use a "Fishhook" (half-arrow) marker.
3.  **Bond Styles:**
    *   Support `wedge` (solid polygon), `hash` (dashed line), and `aromatic` (solid lines).
4.  **Styling:**
    *   Use a clean, academic CSS (Serif fonts for text, Sans-serif for headers).
    *   Colors: Dark Blue/Grey for structure, Red (`#e74c3c`) for electron movement, Purple (`#8e44ad`) for radicals.

**Input Reaction:**
[INSERT YOUR REACTION TITLE OR DESCRIPTION HERE]
