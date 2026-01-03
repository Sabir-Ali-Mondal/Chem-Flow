#Two Example *JSON*


```json
{
  "title": "SN1 Hydrolysis of tert-Butyl Chloride (Non-Aromatic)",
  "steps": [
    {
      "annotation": "<b>Question</b><br>Show the complete SN1 mechanism for hydrolysis of tert-butyl chloride in aqueous medium",
      "reactants": [
        {
          "id": "mol_tbucl_question",
          "atoms": [
            { "id": "q_c1", "symbol": "C" },
            { "id": "q_c2", "symbol": "CH3" },
            { "id": "q_c3", "symbol": "CH3" },
            { "id": "q_c4", "symbol": "CH3" },
            { "id": "q_cl", "symbol": "Cl", "lonePairs": 3, "color": "#b91c1c" }
          ],
          "bonds": [
            { "from": "q_c1", "to": "q_c2", "type": "single" },
            { "from": "q_c1", "to": "q_c3", "type": "single" },
            { "from": "q_c1", "to": "q_c4", "type": "single" },
            { "from": "q_c1", "to": "q_cl", "type": "single" }
          ]
        }
      ],
      "products": []
    },
    {
      "annotation": "<b>Step 1</b><br>Ionization (Rate Determining Step)",
      "reactants": [
        {
          "id": "mol_tbucl_step1",
          "atoms": [
            { "id": "s1_c1", "symbol": "C" },
            { "id": "s1_c2", "symbol": "CH3" },
            { "id": "s1_c3", "symbol": "CH3" },
            { "id": "s1_c4", "symbol": "CH3" },
            { "id": "s1_cl", "symbol": "Cl", "lonePairs": 3, "color": "#b91c1c" }
          ],
          "bonds": [
            { "from": "s1_c1", "to": "s1_c2", "type": "single" },
            { "from": "s1_c1", "to": "s1_c3", "type": "single" },
            { "from": "s1_c1", "to": "s1_c4", "type": "single" },
            { "from": "s1_c1", "to": "s1_cl", "type": "single" }
          ]
        }
      ],
      "mechanism": [
        { "from": "s1_c1", "to": "s1_cl", "curve": 40, "color": "#ef4444" }
      ],
      "arrow": { "type": "forward", "text_above": "Slow" },
      "products": [
        {
          "id": "mol_tert_butyl_cation",
          "atoms": [
            { "id": "cat_c1", "symbol": "C", "charge": "+", "color": "#2563eb" },
            { "id": "cat_c2", "symbol": "CH3" },
            { "id": "cat_c3", "symbol": "CH3" },
            { "id": "cat_c4", "symbol": "CH3" }
          ],
          "bonds": [
            { "from": "cat_c1", "to": "cat_c2", "type": "single" },
            { "from": "cat_c1", "to": "cat_c3", "type": "single" },
            { "from": "cat_c1", "to": "cat_c4", "type": "single" }
          ]
        },
        {
          "id": "mol_chloride_ion",
          "atoms": [
            { "id": "cl_minus", "symbol": "Cl", "charge": "-", "lonePairs": 4, "color": "#b91c1c" }
          ],
          "bonds": []
        }
      ],
      "brackets": [
        { "targets": ["mol_tert_butyl_cation"], "label": "‡" }
      ]
    },
    {
      "annotation": "<b>Step 2</b><br>Nucleophilic attack by water",
      "reactants": [
        {
          "id": "mol_carbocation_step2",
          "atoms": [
            { "id": "s2_c1", "symbol": "C", "charge": "+", "color": "#2563eb" },
            { "id": "s2_c2", "symbol": "CH3" },
            { "id": "s2_c3", "symbol": "CH3" },
            { "id": "s2_c4", "symbol": "CH3" }
          ],
          "bonds": [
            { "from": "s2_c1", "to": "s2_c2", "type": "single" },
            { "from": "s2_c1", "to": "s2_c3", "type": "single" },
            { "from": "s2_c1", "to": "s2_c4", "type": "single" }
          ]
        },
        {
          "id": "mol_water_nucleophile",
          "atoms": [
            { "id": "w_o", "symbol": "O", "lonePairs": 2, "color": "#3b82f6" },
            { "id": "w_h1", "symbol": "H" },
            { "id": "w_h2", "symbol": "H" }
          ],
          "bonds": [
            { "from": "w_o", "to": "w_h1", "type": "single" },
            { "from": "w_o", "to": "w_h2", "type": "single" }
          ]
        }
      ],
      "mechanism": [
        { "from": "w_o", "to": "s2_c1", "curve": -40, "color": "#3b82f6" }
      ],
      "arrow": { "type": "forward" },
      "products": [
        {
          "id": "mol_protonated_alcohol",
          "atoms": [
            { "id": "p_c1", "symbol": "C" },
            { "id": "p_c2", "symbol": "CH3" },
            { "id": "p_c3", "symbol": "CH3" },
            { "id": "p_c4", "symbol": "CH3" },
            { "id": "p_o", "symbol": "O", "charge": "+", "lonePairs": 1, "color": "#ef4444" },
            { "id": "p_h1", "symbol": "H" },
            { "id": "p_h2", "symbol": "H" }
          ],
          "bonds": [
            { "from": "p_c1", "to": "p_c2", "type": "single" },
            { "from": "p_c1", "to": "p_c3", "type": "single" },
            { "from": "p_c1", "to": "p_c4", "type": "single" },
            { "from": "p_c1", "to": "p_o", "type": "single" },
            { "from": "p_o", "to": "p_h1", "type": "single" },
            { "from": "p_o", "to": "p_h2", "type": "single" }
          ]
        }
      ]
    },
    {
      "annotation": "<b>Step 3</b><br>Deprotonation",
      "reactants": [
        {
          "id": "mol_protonated_alcohol_step3",
          "atoms": [
            { "id": "d_o", "symbol": "O", "charge": "+", "lonePairs": 1, "color": "#ef4444" },
            { "id": "d_h", "symbol": "H" }
          ],
          "bonds": [
            { "from": "d_o", "to": "d_h", "type": "single" }
          ]
        },
        {
          "id": "mol_water_base",
          "atoms": [
            { "id": "b_o", "symbol": "O", "lonePairs": 2, "color": "#3b82f6" },
            { "id": "b_h1", "symbol": "H" },
            { "id": "b_h2", "symbol": "H" }
          ],
          "bonds": [
            { "from": "b_o", "to": "b_h1", "type": "single" },
            { "from": "b_o", "to": "b_h2", "type": "single" }
          ]
        }
      ],
      "mechanism": [
        { "from": "b_o", "to": "d_h", "curve": -30, "color": "#3b82f6" },
        { "from": "d_o", "to": "d_h", "curve": 30, "color": "#ef4444" }
      ],
      "arrow": { "type": "forward" },
      "products": []
    },
    {
      "annotation": "<b>Final Product</b><br>tert-Butyl alcohol formed",
      "reactants": [
        {
          "id": "mol_tert_butanol_final",
          "atoms": [
            { "id": "f_c1", "symbol": "C" },
            { "id": "f_c2", "symbol": "CH3" },
            { "id": "f_c3", "symbol": "CH3" },
            { "id": "f_c4", "symbol": "CH3" },
            { "id": "f_o", "symbol": "O", "lonePairs": 2, "color": "#ef4444" },
            { "id": "f_h", "symbol": "H" }
          ],
          "bonds": [
            { "from": "f_c1", "to": "f_c2", "type": "single" },
            { "from": "f_c1", "to": "f_c3", "type": "single" },
            { "from": "f_c1", "to": "f_c4", "type": "single" },
            { "from": "f_c1", "to": "f_o", "type": "single" },
            { "from": "f_o", "to": "f_h", "type": "single" }
          ]
        }
      ],
      "products": []
    }
  ]
}
```


```json
{
  "title": "ChemFlow Ultimate Full Capability Stress Test (Aromatic + Aliphatic)",
  "steps": [
    {
      "annotation": "<b>Step 1</b><br>Electrophile generation (Equilibrium)",
      "reactants": [
        {
          "id": "mol_hno3",
          "atoms": [
            { "id": "hno3_n", "symbol": "N", "charge": "+", "color": "#3b82f6" },
            { "id": "hno3_o1", "symbol": "O", "lonePairs": 2, "color": "#ef4444" },
            { "id": "hno3_o2", "symbol": "O", "lonePairs": 2, "color": "#ef4444" },
            { "id": "hno3_o3", "symbol": "O", "charge": "-", "lonePairs": 3, "color": "#ef4444" }
          ],
          "bonds": [
            { "from": "hno3_n", "to": "hno3_o1", "type": "double" },
            { "from": "hno3_n", "to": "hno3_o2", "type": "single" },
            { "from": "hno3_n", "to": "hno3_o3", "type": "single" }
          ]
        }
      ],
      "arrow": { "type": "eq", "text_above": "H2SO4" },
      "products": [
        {
          "id": "mol_no2plus",
          "atoms": [
            { "id": "no2_n", "symbol": "N", "charge": "+", "color": "#3b82f6" },
            { "id": "no2_o1", "symbol": "O", "lonePairs": 2, "color": "#ef4444" },
            { "id": "no2_o2", "symbol": "O", "lonePairs": 2, "color": "#ef4444" }
          ],
          "bonds": [
            { "from": "no2_n", "to": "no2_o1", "type": "double" },
            { "from": "no2_n", "to": "no2_o2", "type": "double" }
          ]
        }
      ]
    },
    {
      "annotation": "<b>Step 2</b><br>Electrophilic substitution on benzene",
      "reactants": [
        {
          "id": "mol_benzene",
          "atoms": [
            { "id": "bz_c1", "symbol": "C" },
            { "id": "bz_c2", "symbol": "C" },
            { "id": "bz_c3", "symbol": "C" },
            { "id": "bz_c4", "symbol": "C" },
            { "id": "bz_c5", "symbol": "C" },
            { "id": "bz_c6", "symbol": "C" }
          ],
          "bonds": [
            { "from": "bz_c1", "to": "bz_c2", "type": "double" },
            { "from": "bz_c2", "to": "bz_c3", "type": "single" },
            { "from": "bz_c3", "to": "bz_c4", "type": "double" },
            { "from": "bz_c4", "to": "bz_c5", "type": "single" },
            { "from": "bz_c5", "to": "bz_c6", "type": "double" },
            { "from": "bz_c6", "to": "bz_c1", "type": "single" }
          ]
        },
        {
          "id": "mol_no2plus_attack",
          "atoms": [
            { "id": "no2p_n", "symbol": "N", "charge": "+", "color": "#3b82f6" }
          ],
          "bonds": []
        }
      ],
      "arrow": { "type": "forward" },
      "mechanism": [
        { "from": "bz_c1", "to": "no2p_n", "curve": -40, "color": "#3b82f6" }
      ],
      "brackets": [
        { "targets": ["mol_benzene"], "label": "‡" }
      ],
      "products": [
        {
          "id": "mol_nitrobenzene",
          "atoms": [
            { "id": "nb_c1", "symbol": "C" },
            { "id": "nb_c2", "symbol": "C" },
            { "id": "nb_c3", "symbol": "C" },
            { "id": "nb_c4", "symbol": "C" },
            { "id": "nb_c5", "symbol": "C" },
            { "id": "nb_c6", "symbol": "C" },
            { "id": "nb_n", "symbol": "N", "color": "#3b82f6" },
            { "id": "nb_o1", "symbol": "O", "lonePairs": 2, "color": "#ef4444" },
            { "id": "nb_o2", "symbol": "O", "lonePairs": 2, "color": "#ef4444" }
          ],
          "bonds": [
            { "from": "nb_c1", "to": "nb_c2", "type": "double" },
            { "from": "nb_c2", "to": "nb_c3", "type": "single" },
            { "from": "nb_c3", "to": "nb_c4", "type": "double" },
            { "from": "nb_c4", "to": "nb_c5", "type": "single" },
            { "from": "nb_c5", "to": "nb_c6", "type": "double" },
            { "from": "nb_c6", "to": "nb_c1", "type": "single" },
            { "from": "nb_c1", "to": "nb_n", "type": "single" },
            { "from": "nb_n", "to": "nb_o1", "type": "double" },
            { "from": "nb_n", "to": "nb_o2", "type": "double" }
          ]
        }
      ]
    },
    {
      "annotation": "<b>Step 3</b><br>SN1 ionization of tert-butanol (Non-aromatic)",
      "reactants": [
        {
          "id": "mol_tBuOH",
          "atoms": [
            { "id": "tbu_c1", "symbol": "C" },
            { "id": "tbu_c2", "symbol": "C" },
            { "id": "tbu_c3", "symbol": "C" },
            { "id": "tbu_c4", "symbol": "C" },
            { "id": "tbu_o", "symbol": "O", "lonePairs": 2, "color": "#ef4444" }
          ],
          "bonds": [
            { "from": "tbu_c1", "to": "tbu_c2", "type": "single" },
            { "from": "tbu_c1", "to": "tbu_c3", "type": "single" },
            { "from": "tbu_c1", "to": "tbu_c4", "type": "single" },
            { "from": "tbu_c1", "to": "tbu_o", "type": "single" }
          ]
        }
      ],
      "arrow": { "type": "forward", "text_above": "H+" },
      "mechanism": [
        { "from": "tbu_o", "to": "tbu_c1", "curve": 35, "color": "#ef4444" }
      ],
      "products": [
        {
          "id": "mol_tBu_carbocation",
          "atoms": [
            { "id": "tbu_cat_c", "symbol": "C", "charge": "+", "color": "#2563eb" }
          ],
          "bonds": []
        }
      ]
    },
    {
      "annotation": "<b>Step 4</b><br>Nucleophilic attack by bromide (SN1 completion)",
      "reactants": [
        {
          "id": "mol_br_minus",
          "atoms": [
            { "id": "br_1", "symbol": "Br", "charge": "-", "lonePairs": 4, "color": "#b91c1c" }
          ],
          "bonds": []
        },
        {
          "id": "mol_tBu_carbocation_2",
          "atoms": [
            { "id": "tbu_cat2_c", "symbol": "C", "charge": "+", "color": "#2563eb" }
          ],
          "bonds": []
        }
      ],
      "arrow": { "type": "forward" },
      "mechanism": [
        { "from": "br_1", "to": "tbu_cat2_c", "curve": -30, "color": "#3b82f6" }
      ],
      "products": [
        {
          "id": "mol_tBuBr",
          "atoms": [
            { "id": "tbr_c", "symbol": "C" },
            { "id": "tbr_br", "symbol": "Br", "lonePairs": 3, "color": "#b91c1c" }
          ],
          "bonds": [
            { "from": "tbr_c", "to": "tbr_br", "type": "single" }
          ]
        }
      ]
    }
  ]
}
```
