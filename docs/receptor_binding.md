# Receptor Binding

To understand how mutations affect binding to ephrin receptors, we performed selections on our pseudovirus libraries with soluble bat ephrin-B2 and ephrin-B3. Neutralization of pseudovirus variants serves as a proxy for receptor binding. Neutralization curves were fit with [`polyclonal`](https://github.com/jbloomlab/polyclonal){target="_self"}.

Pseudoviruses expressing Nipah virus receptor binding and fusion proteins are neutralized by soluble bat ephrins.

<Figure caption="Ephrin neutralization of pseudoviruses expressing unmutated Nipah receptor binding and fusion proteins.">
    <Altair :showShadow="false" :spec-url="'htmls/ephrin_neut_curve.html'"></Altair>
</Figure>


## Individual Receptor Binding Selections
::: details Individual antibody selection model fitting notebooks
<a href="notebooks/fit_escape_receptor_affinity_LibB-231108-bEFNB2-monomeric.html" target="_self">LibB-231108-bEFNB2-monomeric</a>

<a href="notebooks/fit_escape_receptor_affinity_LibA-231112-bEFNB2-monomeric.html" target="_self">LibA-231112-bEFNB2-monomeric</a>

<a href="notebooks/fit_escape_receptor_affinity_LibA-231207-bEFNB2-monomeric.html" target="_self">LibA-231207-bEFNB2-monomeric</a>

<a href="notebooks/fit_escape_receptor_affinity_LibA-231222-bEFNB2-monomeric.html" target="_self">LibA-231222-bEFNB2-monomeric</a>

<a href="notebooks/fit_escape_receptor_affinity_LibB-231222-bEFNB2-monomeric.html" target="_self">LibB-231222-bEFNB2-monomeric</a>

<a href="notebooks/fit_escape_receptor_affinity_LibA-230818-EFNB3-dimeric.html" target="_self">LibA-230818-EFNB3-dimeric</a>

<a href="notebooks/fit_escape_receptor_affinity_LibA-230825-bEFNB3-dimeric.html" target="_self">LibA-230825-bEFNB3-dimeric</a>

<a href="notebooks/fit_escape_receptor_affinity_LibB-230907-bEFNB3-dimeric.html" target="_self">LibB-230907-bEFNB3-dimeric</a>

:::

## Average Receptor Binding
These notebooks average effects of mutations on receptor binding across libraries and replicate selections.

<a href="notebooks/avg_escape_receptor_affinity_bEFNB2_monomeric.html" target="_self">bEFNB2-monomeric</a>

<a href="notebooks/avg_escape_receptor_affinity_bEFNB3_dimeric.html" target="_self">bEFNB3-dimeric</a>

## Comprehensive Receptor Binding Heatmaps
Additional control over filtering parameters. Users can adjust different parameters to filter the heatmap data. These provide more information and control compared to the final filtered heatmaps provided on the [heatmaps](/heatmaps) page.

<a href="htmls/bEFNB2_monomeric_mut_effect.html" target="_self">bEFNB2-monomeric heatmap</a>

<a href="htmls/bEFNB3_dimeric_mut_effect.html" target="_self">bEFNB3-dimeric heatmap</a>






## Binding Correlations

<Figure caption="Effects of mutations on binding to bat ephrin-B2 and bat ephrin-B3, with mutations of interest highlighted">
    <Altair :showShadow="false" :spec-url="'htmls/E2_E3_correlation.html'"></Altair>
</Figure>



## Binding Validations
### Binding Validation by Biolayer Interferometry
To validate our DMS binding measurements, we tested binding affinity by biolayer interferometry. 
<a href="notebooks/plot_BLI_data.html" target="_self">Notebook analyzing biolayer interferometry data and plotting correlations.</a>

<Figure caption="Correlation of biolayer interferometry affinity measurements with deep mutational scanning measurements">
    <Altair :showShadow="false" :spec-url="'htmls/binding_BLI_corr.html'"></Altair>
</Figure>

### Binding Validation by Neutralization
We also tested neutralization of individual mutations expressed on pseudoviruses with soluble bat ephrin-B2 (monomeric) or bat ephrin-B3 (dimeric). Individual mutations affect neutralizing potency by soluble receptor.
<a href="notebooks/ephrin_neut_curves.html" target="_self">Binding validations notebook</a>

<Figure caption="Neutralization of receptor binding protein mutant pseudoviruses and correlation with deep mutational scanning.">
    <Altair :showShadow="true" :spec-url="'htmls/all_ephrin_neut_plots.html'"></Altair>
</Figure>


## Analysis Notebooks
Notebook analyzing receptor binding from filtered data. Make figures for manuscript using python and altair.

<a href="notebooks/ephrin_binding.html" target="_self">Binding analysis notebook</a>

## Raw Data
::: warning These data have not been filtered. They are the raw output from `dms-vep-pipeline-3`. For filtered `.csv` files, [click here](/pipeline_information#filtered-data)
[Individual receptor binding selection files](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/tree/master/results/receptor_affinity/by_selection){target="_self"}

[Averaged effects of RBP mutations on bEFNB2 binding across replicates](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/receptor_affinity/averages/bEFNB2_monomeric_mut_effect.csv){target="_self"}

[Averaged effects of RBP mutations on bEFNB3 binding across replicates](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/receptor_affinity/averages/bEFNB3_dimeric_mut_effect.csv){target="_self"}
:::




