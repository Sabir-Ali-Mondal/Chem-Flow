````json
{
  "steps": [
    {
      "annotation": "<b>Question: E1 Elimination with Rearrangement</b><br>2-chloro-3,3-dimethylbutane undergoes elimination in the presence of ethanol. <em>Predict the major product and show the complete mechanism.</em>",
      "reactants": [
        {
          "id": "substrate",
          "atoms": [
            { "id": "c1", "symbol": "C", "x": 0, "y": 0 },
            { "id": "c2", "symbol": "C", "x": 1.5, "y": 0, "isotope": "13" },
            { "id": "h2", "symbol": "H", "x": 1.5, "y": 1, "color": "#94a3b8" },
            { "id": "cl", "symbol": "Cl", "x": 2.5, "y": -0.5, "lonePairs": 3, "color": "#b91c1c" },
            { "id": "c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "h3a", "symbol": "H", "x": -1.5, "y": 1 },
            { "id": "h3b", "symbol": "H", "x": -2.5, "y": -0.5 },
            { "id": "c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "c5", "symbol": "CH₃", "x": 0.8, "y": -2.3 },
            { "id": "c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "c1", "to": "c2", "type": "single" },
            { "from": "c2", "to": "h2", "type": "dash" },
            { "from": "c2", "to": "cl", "type": "single", "color": "#b91c1c" },
            { "from": "c1", "to": "c3", "type": "single" },
            { "from": "c3", "to": "h3a", "type": "single" },
            { "from": "c3", "to": "h3b", "type": "wedge" },
            { "from": "c1", "to": "c4", "type": "single" },
            { "from": "c4", "to": "c5", "type": "single" },
            { "from": "c4", "to": "c6", "type": "single" }
          ]
        },
        {
          "id": "ethanol",
          "atoms": [
            { "id": "eth_c1", "symbol": "CH₃", "x": 5, "y": 0 },
            { "id": "eth_c2", "symbol": "CH₂", "x": 6.5, "y": 0 },
            { "id": "eth_o", "symbol": "O", "x": 8, "y": 0, "lonePairs": 2, "color": "#ef4444" },
            { "id": "eth_h", "symbol": "H", "x": 8.5, "y": -0.5 }
          ],
          "bonds": [
            { "from": "eth_c1", "to": "eth_c2", "type": "single" },
            { "from": "eth_c2", "to": "eth_o", "type": "single" },
            { "from": "eth_o", "to": "eth_h", "type": "single" }
          ]
        }
      ],
      "arrow": {
        "type": "forward",
        "text_above": "Heat",
        "color": "#0f172a"
      },
      "products": [
        {
          "id": "question_mark",
          "atoms": [
            { "id": "qm", "symbol": "?", "x": 0, "y": 0, "color": "#2563eb" }
          ],
          "bonds": []
        }
      ]
    },
    {
      "annotation": "<b>Step 1: Ionization (Slow)</b><br>The C-Cl bond breaks heterolytically. Chlorine takes both electrons, forming chloride ion and a secondary carbocation.",
      "reactants": [
        {
          "id": "substrate_s1",
          "atoms": [
            { "id": "s1_c1", "symbol": "C", "x": 0, "y": 0 },
            { "id": "s1_c2", "symbol": "C", "x": 1.5, "y": 0, "isotope": "13", "color": "#64748b" },
            { "id": "s1_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "s1_cl", "symbol": "Cl", "x": 2.5, "y": -0.5, "lonePairs": 3, "color": "#b91c1c" },
            { "id": "s1_c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "s1_h3a", "symbol": "H", "x": -1.5, "y": 1, "color": "#d97706" },
            { "id": "s1_c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "s1_c5", "symbol": "CH₃", "x": 0.8, "y": -2.3 },
            { "id": "s1_c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "s1_c1", "to": "s1_c2", "type": "single" },
            { "from": "s1_c2", "to": "s1_h2", "type": "single" },
            { "from": "s1_c2", "to": "s1_cl", "type": "single", "color": "#ef4444" },
            { "from": "s1_c1", "to": "s1_c3", "type": "single" },
            { "from": "s1_c3", "to": "s1_h3a", "type": "single", "color": "#d97706" },
            { "from": "s1_c1", "to": "s1_c4", "type": "single" },
            { "from": "s1_c4", "to": "s1_c5", "type": "single" },
            { "from": "s1_c4", "to": "s1_c6", "type": "single" }
          ]
        }
      ],
      "mechanism": [
        { "from": "s1_c2", "to": "s1_cl", "curve": 40, "color": "#ef4444" }
      ],
      "arrow": {
        "type": "forward",
        "text_above": "Slow",
        "color": "#ef4444"
      },
      "products": [
        {
          "id": "carbocation_2deg",
          "atoms": [
            { "id": "p1_c1", "symbol": "C", "x": 0, "y": 0 },
            { "id": "p1_c2", "symbol": "C", "x": 1.5, "y": 0, "charge": "+", "isotope": "13", "color": "#2563eb" },
            { "id": "p1_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "p1_c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "p1_h3a", "symbol": "H", "x": -1.5, "y": 1, "color": "#d97706" },
            { "id": "p1_c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "p1_c5", "symbol": "CH₃", "x": 0.8, "y": -2.3 },
            { "id": "p1_c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "p1_c1", "to": "p1_c2", "type": "single" },
            { "from": "p1_c2", "to": "p1_h2", "type": "single" },
            { "from": "p1_c1", "to": "p1_c3", "type": "single" },
            { "from": "p1_c3", "to": "p1_h3a", "type": "single", "color": "#d97706" },
            { "from": "p1_c1", "to": "p1_c4", "type": "single" },
            { "from": "p1_c4", "to": "p1_c5", "type": "single" },
            { "from": "p1_c4", "to": "p1_c6", "type": "single" }
          ]
        },
        {
          "id": "chloride",
          "atoms": [
            { "id": "p1_cl", "symbol": "Cl", "x": 4, "y": 0, "charge": "-", "lonePairs": 4, "color": "#b91c1c" }
          ],
          "bonds": []
        }
      ],
      "brackets": [
        { "targets": ["carbocation_2deg"], "label": "2° Carbocation", "color": "#64748b" }
      ]
    },
    {
      "annotation": "<b>Step 2: Methyl Shift (Rearrangement)</b><br>A methyl group migrates from C4 to C2 with its bonding electrons, forming a more stable tertiary carbocation. <em>This is a 1,2-methyl shift.</em>",
      "reactants": [
        {
          "id": "carb_before_shift",
          "atoms": [
            { "id": "r2_c1", "symbol": "C", "x": 0, "y": 0 },
            { "id": "r2_c2", "symbol": "C", "x": 1.5, "y": 0, "charge": "+", "isotope": "13", "color": "#2563eb" },
            { "id": "r2_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "r2_c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "r2_h3a", "symbol": "H", "x": -1.5, "y": 1 },
            { "id": "r2_c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "r2_c5", "symbol": "CH₃", "x": 0.8, "y": -2.3, "color": "#8b5cf6" },
            { "id": "r2_c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "r2_c1", "to": "r2_c2", "type": "single" },
            { "from": "r2_c2", "to": "r2_h2", "type": "single" },
            { "from": "r2_c1", "to": "r2_c3", "type": "single" },
            { "from": "r2_c3", "to": "r2_h3a", "type": "single" },
            { "from": "r2_c1", "to": "r2_c4", "type": "single" },
            { "from": "r2_c4", "to": "r2_c5", "type": "single", "color": "#8b5cf6" },
            { "from": "r2_c4", "to": "r2_c6", "type": "single" }
          ]
        }
      ],
      "mechanism": [
        { "from": "r2_c5", "to": "r2_c2", "curve": 50, "color": "#8b5cf6" }
      ],
      "arrow": {
        "type": "forward",
        "text_above": "1,2-shift",
        "color": "#8b5cf6"
      },
      "products": [
        {
          "id": "carbocation_3deg",
          "atoms": [
            { "id": "p2_c1", "symbol": "C", "x": 0, "y": 0, "charge": "+", "color": "#2563eb" },
            { "id": "p2_c2", "symbol": "C", "x": 1.5, "y": 0, "isotope": "13" },
            { "id": "p2_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "p2_c5", "symbol": "CH₃", "x": 2.5, "y": -0.5, "color": "#8b5cf6" },
            { "id": "p2_c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "p2_h3a", "symbol": "H", "x": -1.5, "y": 1 },
            { "id": "p2_c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "p2_c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "p2_c1", "to": "p2_c2", "type": "single" },
            { "from": "p2_c2", "to": "p2_h2", "type": "single" },
            { "from": "p2_c2", "to": "p2_c5", "type": "single", "color": "#16a34a" },
            { "from": "p2_c1", "to": "p2_c3", "type": "single" },
            { "from": "p2_c3", "to": "p2_h3a", "type": "single" },
            { "from": "p2_c1", "to": "p2_c4", "type": "single" },
            { "from": "p2_c4", "to": "p2_c6", "type": "single" }
          ]
        }
      ],
      "brackets": [
        { "targets": ["carbocation_3deg"], "label": "‡", "color": "#8b5cf6" }
      ]
    },
    {
      "annotation": "<b>Step 3: Deprotonation (Fast)</b><br>Ethanol acts as a base, abstracting a β-hydrogen. The C-H bond electrons form the π bond. <em>Zaitsev's rule applies: most substituted alkene forms.</em>",
      "reactants": [
        {
          "id": "carb_final",
          "atoms": [
            { "id": "r3_c1", "symbol": "C", "x": 0, "y": 0, "charge": "+", "color": "#2563eb" },
            { "id": "r3_c2", "symbol": "C", "x": 1.5, "y": 0, "isotope": "13", "color": "#64748b" },
            { "id": "r3_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "r3_c5", "symbol": "CH₃", "x": 2.5, "y": -0.5 },
            { "id": "r3_c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "r3_h3a", "symbol": "H", "x": -1.5, "y": 1, "color": "#10b981" },
            { "id": "r3_c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "r3_c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "r3_c1", "to": "r3_c2", "type": "single", "color": "#64748b" },
            { "from": "r3_c2", "to": "r3_h2", "type": "single" },
            { "from": "r3_c2", "to": "r3_c5", "type": "single" },
            { "from": "r3_c1", "to": "r3_c3", "type": "single" },
            { "from": "r3_c3", "to": "r3_h3a", "type": "single", "color": "#10b981" },
            { "from": "r3_c1", "to": "r3_c4", "type": "single" },
            { "from": "r3_c4", "to": "r3_c6", "type": "single" }
          ]
        },
        {
          "id": "ethanol_base",
          "atoms": [
            { "id": "r3_eth_c1", "symbol": "CH₃", "x": -4, "y": 1 },
            { "id": "r3_eth_c2", "symbol": "CH₂", "x": -5.5, "y": 1 },
            { "id": "r3_eth_o", "symbol": "O", "x": -7, "y": 1, "lonePairs": 2, "color": "#3b82f6" },
            { "id": "r3_eth_h", "symbol": "H", "x": -7.5, "y": 0.5 }
          ],
          "bonds": [
            { "from": "r3_eth_c1", "to": "r3_eth_c2", "type": "single" },
            { "from": "r3_eth_c2", "to": "r3_eth_o", "type": "single" },
            { "from": "r3_eth_o", "to": "r3_eth_h", "type": "single" }
          ]
        }
      ],
      "mechanism": [
        { "from": "r3_eth_o", "to": "r3_h3a", "curve": -50, "color": "#3b82f6" },
        { "from": "r3_c3", "to": "r3_c1", "curve": 30, "color": "#10b981" }
      ],
      "arrow": {
        "type": "forward",
        "text_above": "Fast",
        "color": "#10b981"
      },
      "products": [
        {
          "id": "alkene_intermediate",
          "atoms": [
            { "id": "p3_c1", "symbol": "C", "x": 0, "y": 0, "color": "#16a34a" },
            { "id": "p3_c2", "symbol": "C", "x": 1.5, "y": 0, "isotope": "13", "color": "#16a34a" },
            { "id": "p3_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "p3_c5", "symbol": "CH₃", "x": 2.5, "y": -0.5 },
            { "id": "p3_c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "p3_c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "p3_c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "p3_c1", "to": "p3_c2", "type": "double", "color": "#16a34a" },
            { "from": "p3_c2", "to": "p3_h2", "type": "single" },
            { "from": "p3_c2", "to": "p3_c5", "type": "single" },
            { "from": "p3_c1", "to": "p3_c3", "type": "single" },
            { "from": "p3_c1", "to": "p3_c4", "type": "single" },
            { "from": "p3_c4", "to": "p3_c6", "type": "single" }
          ]
        },
        {
          "id": "ethanol_protonated",
          "atoms": [
            { "id": "p3_eth_c1", "symbol": "CH₃", "x": 5, "y": 0 },
            { "id": "p3_eth_c2", "symbol": "CH₂", "x": 6.5, "y": 0 },
            { "id": "p3_eth_o", "symbol": "O", "x": 8, "y": 0, "charge": "+", "color": "#ef4444" },
            { "id": "p3_eth_h1", "symbol": "H", "x": 8.5, "y": -0.5 },
            { "id": "p3_eth_h2", "symbol": "H", "x": 8.5, "y": 0.5, "color": "#10b981" }
          ],
          "bonds": [
            { "from": "p3_eth_c1", "to": "p3_eth_c2", "type": "single" },
            { "from": "p3_eth_c2", "to": "p3_eth_o", "type": "single" },
            { "from": "p3_eth_o", "to": "p3_eth_h1", "type": "single" },
            { "from": "p3_eth_o", "to": "p3_eth_h2", "type": "single", "color": "#16a34a" }
          ]
        }
      ]
    },
    {
      "annotation": "<b>Step 4: Equilibrium (Acid-Base)</b><br>Protonated ethanol (oxonium ion) is in equilibrium with ethanol. The system reaches equilibrium with neutral products.",
      "reactants": [
        {
          "id": "oxonium_eq",
          "atoms": [
            { "id": "r4_eth_c1", "symbol": "CH₃", "x": 0, "y": 0 },
            { "id": "r4_eth_c2", "symbol": "CH₂", "x": 1.5, "y": 0 },
            { "id": "r4_eth_o", "symbol": "O", "x": 3, "y": 0, "charge": "+", "color": "#ef4444" },
            { "id": "r4_eth_h1", "symbol": "H", "x": 3.5, "y": -0.5 },
            { "id": "r4_eth_h2", "symbol": "H", "x": 3.5, "y": 0.5, "color": "#10b981" }
          ],
          "bonds": [
            { "from": "r4_eth_c1", "to": "r4_eth_c2", "type": "single" },
            { "from": "r4_eth_c2", "to": "r4_eth_o", "type": "single" },
            { "from": "r4_eth_o", "to": "r4_eth_h1", "type": "single" },
            { "from": "r4_eth_o", "to": "r4_eth_h2", "type": "single", "color": "#10b981" }
          ]
        },
        {
          "id": "ethanol_neutral_base",
          "atoms": [
            { "id": "r4_eth2_c1", "symbol": "CH₃", "x": 6, "y": 0 },
            { "id": "r4_eth2_c2", "symbol": "CH₂", "x": 7.5, "y": 0 },
            { "id": "r4_eth2_o", "symbol": "O", "x": 9, "y": 0, "lonePairs": 2, "color": "#3b82f6" },
            { "id": "r4_eth2_h", "symbol": "H", "x": 9.5, "y": -0.5 }
          ],
          "bonds": [
            { "from": "r4_eth2_c1", "to": "r4_eth2_c2", "type": "single" },
            { "from": "r4_eth2_c2", "to": "r4_eth2_o", "type": "single" },
            { "from": "r4_eth2_o", "to": "r4_eth2_h", "type": "single" }
          ]
        }
      ],
      "mechanism": [
        { "from": "r4_eth2_o", "to": "r4_eth_h2", "curve": -40, "color": "#3b82f6" }
      ],
      "arrow": {
        "type": "eq",
        "text_above": "Equilibrium",
        "color": "#3b82f6"
      },
      "products": [
        {
          "id": "two_ethanol",
          "atoms": [
            { "id": "p4_eth_c1", "symbol": "CH₃", "x": 0, "y": 0 },
            { "id": "p4_eth_c2", "symbol": "CH₂", "x": 1.5, "y": 0 },
            { "id": "p4_eth_o", "symbol": "O", "x": 3, "y": 0, "lonePairs": 2, "color": "#3b82f6" },
            { "id": "p4_eth_h", "symbol": "H", "x": 3.5, "y": -0.5 }
          ],
          "bonds": [
            { "from": "p4_eth_c1", "to": "p4_eth_c2", "type": "single" },
            { "from": "p4_eth_c2", "to": "p4_eth_o", "type": "single" },
            { "from": "p4_eth_o", "to": "p4_eth_h", "type": "single" }
          ]
        },
        {
          "id": "ethanol_protonated_eq",
          "atoms": [
            { "id": "p4_eth2_c1", "symbol": "CH₃", "x": 6, "y": 0 },
            { "id": "p4_eth2_c2", "symbol": "CH₂", "x": 7.5, "y": 0 },
            { "id": "p4_eth2_o", "symbol": "O", "x": 9, "y": 0, "charge": "+", "color": "#ef4444" },
            { "id": "p4_eth2_h1", "symbol": "H", "x": 9.5, "y": -0.5 },
            { "id": "p4_eth2_h2", "symbol": "H", "x": 9.5, "y": 0.5 }
          ],
          "bonds": [
            { "from": "p4_eth2_c1", "to": "p4_eth2_c2", "type": "single" },
            { "from": "p4_eth2_c2", "to": "p4_eth2_o", "type": "single" },
            { "from": "p4_eth2_o", "to": "p4_eth2_h1", "type": "single" },
            { "from": "p4_eth2_o", "to": "p4_eth2_h2", "type": "single" }
          ]
        }
      ]
    },
    {
      "annotation": "<b>Final Product: 3,3-dimethyl-1-butene</b><br>The major product is the tri-substituted alkene formed after carbocation rearrangement. <em>Zaitsev product via E1 mechanism with 1,2-methyl shift.</em>",
      "reactants": [
        {
          "id": "final_alkene",
          "atoms": [
            { "id": "f_c1", "symbol": "C", "x": 0, "y": 0 },
            { "id": "f_c2", "symbol": "C", "x": 1.5, "y": 0, "isotope": "13" },
            { "id": "f_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "f_c5", "symbol": "CH₃", "x": 2.5, "y": -0.5 },
            { "id": "f_c3", "symbol": "C", "x": -1.5, "y": 0 },
            { "id": "f_c4", "symbol": "C", "x": 0, "y": -1.5 },
            { "id": "f_c6", "symbol": "CH₃", "x": -0.8, "y": -2.3 }
          ],
          "bonds": [
            { "from": "f_c1", "to": "f_c2", "type": "double" },
            { "from": "f_c2", "to": "f_h2", "type": "single" },
            { "from": "f_c2", "to": "f_c5", "type": "single" },
            { "from": "f_c1", "to": "f_c3", "type": "single" },
            { "from": "f_c1", "to": "f_c4", "type": "single" },
            { "from": "f_c4", "to": "f_c6", "type": "single" }
          ]
        }
      ],
      "arrow": {
        "type": "resonance",
        "text_above": "Major Product",
        "color": "#16a34a"
      },
      "products": [
        {
          "id": "final_structure",
          "atoms": [
            { "id": "pf_c1", "symbol": "C", "x": 0, "y": 0 },
            { "id": "pf_c2", "symbol": "C", "x": 1.5, "y": 0, "isotope": "13" },
            { "id": "pf_h2", "symbol": "H", "x": 1.5, "y": 1 },
            { "id": "pf_c5", "symbol": "CH₃", "x": 2.5, "y": -0.5 },
            { "id": "pf_c3", "symbol": "CH₃", "x": -1.5, "y": 0.5 },
            { "id": "pf_c4", "symbol": "C", "x": -0.5, "y": -1.3 },
            { "id": "pf_c6", "symbol": "CH₃", "x": 0.3, "y": -2.1 },
            { "id": "pf_c7", "symbol": "CH₃", "x": -1.3, "y": -2.1 }
          ],
          "bonds": [
            { "from": "pf_c1", "to": "pf_c2", "type": "double" },
            { "from": "pf_c2", "to": "pf_h2", "type": "single" },
            { "from": "pf_c2", "to": "pf_c5", "type": "single" },
            { "from": "pf_c1", "to": "pf_c3", "type": "single" },
            { "from": "pf_c1", "to": "pf_c4", "type": "single" },
            { "from": "pf_c4", "to": "pf_c6", "type": "single" },
            { "from": "pf_c4", "to": "pf_c7", "type": "single" }
          ]
        }
      ]
    }
  ]
}
````
