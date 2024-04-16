# Cell Entry

To measure the effects of mutations on RBP-mediated cell entry, we performed 'functional selections' where the frequencies of barcodes were compared between pseudoviruses expressing either Nipah RBP/F or VSV-G. Notebooks below contain information about each step.



## Global Epistasis Fitting
Individual cell entry selections were fit with [`multidms`](https://github.com/matsengrp/multidms){target="_self"} to decompose the effects of individual mutations using a global epistasis model.

::: details Individual functional selection global epistasis model fitting notebooks
<a href="notebooks/func_effects_global_epistasis_LibA-230725-CHO-bEFNB3.html" target="_self">LibA-230725-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-230815-CHO-bEFNB3.html" target="_self">LibA-230815-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-230818-CHO-bEFNB3.html" target="_self">LibA-230818-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-230825-CHO-bEFNB3.html" target="_self">LibA-230825-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-230916-CHO-bEFNB3.html" target="_self">LibA-230916-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231006-CHO-bEFNB3.html" target="_self">LibA-231006-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231019-CHO-bEFNB3_1.html" target="_self">LibA-231019-CHO-bEFNB3_1</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231019-CHO-bEFNB3_2.html" target="_self">LibA-231019-CHO-bEFNB3_2</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231019-CHO-bEFNB2_1.html" target="_self">LibA-231019-CHO-bEFNB2_1</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231024-CHO-bEFNB3.html" target="_self">LibA-231024-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231024-CHO-bEFNB2.html" target="_self">LibA-231024-CHO-bEFNB2</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231112-CHO-bEFNB3_1.html" target="_self">LibA-231112-CHO-bEFNB3_1</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231112-CHO-bEFNB3_2.html" target="_self">LibA-231112-CHO-bEFNB3_2</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231112-CHO-bEFNB2.html" target="_self">LibA-231112-CHO-bEFNB2</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231207-CHO-bEFNB2_1.html" target="_self">LibA-231207-CHO-bEFNB2_1</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231207-CHO-bEFNB2_2.html" target="_self">LibA-231207-CHO-bEFNB2_2</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231207-CHO-bEFNB2_3.html" target="_self">LibA-231207-CHO-bEFNB2_3</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231207-CHO-bEFNB2_4.html" target="_self">LibA-231207-CHO-bEFNB2_4</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231207-CHO-bEFNB2_5.html" target="_self">LibA-231207-CHO-bEFNB2_5</a>

<a href="notebooks/func_effects_global_epistasis_LibA-231222-CHO-bEFNB2.html" target="_self">LibA-231222-CHO-bEFNB2</a>

<a href="notebooks/func_effects_global_epistasis_LibB-230630-CHO-C6-nac.html" target="_self">LibB-230630-CHO-C6-nac</a>

<a href="notebooks/func_effects_global_epistasis_LibB-230720-CHO-bEFNB3.html" target="_self">LibB-230720-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibB-230731-CHO-BA6-nac.html" target="_self">LibB-230731-CHO-BA6-nac</a>

<a href="notebooks/func_effects_global_epistasis_LibB-230815-CHO-bEFNB3.html" target="_self">LibB-230815-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibB-230818-CHO-bEFNB3.html" target="_self">LibB-230818-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibB-230906-CHO-EFNB3-C6_diffVSV.html" target="_self">LibB-230906-CHO-EFNB3-C6_diffVSV</a>

<a href="notebooks/func_effects_global_epistasis_LibB-230907-CHO-EFNB3-C6-nac_diffVSV.html" target="_self">LibB-230907-CHO-EFNB3-C6-nac_diffVSV</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231105-CHO-EFNB2-BA6-nac_diffVSV.html" target="_self">LibB-231105-CHO-EFNB2-BA6-nac_diffVSV</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231108-CHO-EFNB2-BA6-nac_diff_VSV.html" target="_self">LibB-231108-CHO-EFNB2-BA6-nac_diff_VSV</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231108-CHO-EFNB3-C6-nac_diff_VSV.html" target="_self">LibB-231108-CHO-EFNB3-C6-nac_diff_VSV</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231112-CHO-bEFNB2.html" target="_self">LibB-231112-CHO-bEFNB2</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231112-CHO-EFNB2-BA6-1.html" target="_self">LibB-231112-CHO-EFNB2-BA6-1</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231112-CHO-EFNB2-BA6-2.html" target="_self">LibB-231112-CHO-EFNB2-BA6-2</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231112-CHO-EFNB3-C6-1.html" target="_self">LibB-231112-CHO-EFNB3-C6-1</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231112-CHO-EFNB3-C6-2.html" target="_self">LibB-231112-CHO-EFNB3-C6-2</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231116-CHO-bEFNB3.html" target="_self">LibB-231116-CHO-bEFNB3</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231116-CHO-bEFNB2.html" target="_self">LibB-231116-CHO-bEFNB2</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231116-CHO-BA6_nac_diff_VSV.html" target="_self">LibB-231116-CHO-BA6_nac_diff_VSV</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231222-CHO-EFNB2-BA6_diffVSV.html" target="_self">LibB-231222-CHO-EFNB2-BA6_diffVSV</a>

<a href="notebooks/func_effects_global_epistasis_LibB-231222-CHO-EFNB2-BA6-nac_diffVSV.html" target="_self">LibB-231222-CHO-EFNB2-BA6-nac_diffVSV</a>
:::

## Averaging Cell Entry
Individual functional selections were averaged between libraries and replicates below.

<a href="notebooks/avg_func_effects_CHO_bEFNB2.html" target="_self">Notebook averaging the effects of cell entry in CHO-bEFNB2 cells</a>

<a href="notebooks/avg_func_effects_CHO_bEFNB3.html" target="_self">Notebook averaging the effects of cell entry in CHO-bEFNB3 cells</a>

## Comprehensive Cell Entry Heatmaps
Additional control over filtering parameters. Users can adjust different parameters to filter the heatmap data. These provide more information and control compared to the final filtered heatmaps provided on the [heatmaps](/heatmaps) page.

<a href="htmls/CHO_bEFNB2_func_effects.html" target="_self">CHO-bEFNB2 cell entry heatmap</a>

<a href="htmls/CHO_bEFNB3_func_effects.html" target="_self">CHO-bEFNB3 cell entry heatmap</a>


## Functional Scores
Notebook analyzing the distribution of functional scores for all individual selections.

<a href="notebooks/analyze_func_scores.html" target="_self">Functional scores notebook</a>

## Analyze Data
Notebook analyzing cell entry from filtered data. Make figures for manuscript using python and altair.

<a href="notebooks/nipah_RBP_entry_analysis.html" target="_self">Cell entry analysis notebook</a>

## Cell Entry Figures
::: tip
Plots below are interactive. Hover over points to see more information.
Click arrow box to view altair plots in separate page.
:::


<Figure caption="Cell entry of different RBP regions">
    <Altair :showShadow="true" :spec-url="'htmls/entry_region_boxplot_plot.html'"></Altair>
</Figure>

### Site-averaged Effects of Mutations on Cell Entry

<Figure caption="Sites in RBP neck and contact sites (ranked from least constrained to most)">
    <Altair :showShadow="true" :spec-url="'htmls/combined_region_barplot_output.html'"></Altair>
</Figure>

### Cell Entry Correlations

<Figure caption="Correlation between site-averaged effects of mutations on cell entry">
    <Altair :showShadow="true" :spec-url="'htmls/E2_E3_entry_corr_plot.html'"></Altair>
</Figure>


<Figure caption="Correlation between effects of all mutations on cell entry">
    <Altair :showShadow="true" :spec-url="'htmls/E2_E3_entry_all_muts_plot.html'"></Altair>
</Figure>

### Cell Entry Validations

<a href="notebooks/cell_entry_validations.html" target="_self">Cell entry validation notebook</a>


<Figure caption="We validated the DMS cell entry measurements by making individual RBP mutants, expressing them on pseudovirus particles, and measuring luciferase following infection.">
    <Altair :showShadow="true" :spec-url="'htmls/corr_plots_combined.html'"></Altair>
</Figure>

## Raw Data
::: warning These data have not been filtered. They are the raw output from `dms-vep-pipeline-3`. For filtered `.csv` files, [click here](/pipeline_information#filtered-data)
[Individual cell entry files](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/tree/master/results/func_effects/by_selection){target="_self"}

[Averaged effects of RBP mutations on entry in CHO-bEFNB2 cells across replicates](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/func_effects/averages/CHO_bEFNB2_func_effects.csv){target="_self"}

[Averaged effects of RBP mutations on entry in CHO-bEFNB3 cells across replicates](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/func_effects/averages/CHO_bEFNB3_func_effects.csv){target="_self"}
:::



