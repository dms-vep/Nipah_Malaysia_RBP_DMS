# Receptor Binding

To understand how mutations affect binding to soluble receptor, we performed selections on our pseudovirus libraries with soluble receptor. Neutralization of pseudovirus variants serves as a proxy for receptor binding. Receptor binding selections were fit with [polyclonal](https://github.com/jbloomlab/polyclonal){target="_self"}.


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

<a href="notebooks/fit_escape_receptor_affinity_LibB-231108-EFNB3-monomeric.html" target="_self">LibB-231108-EFNB3-monomeric</a>
:::

## Average Receptor Binding
Averaging receptor binding across libraries and replicate selections.

<a href="notebooks/avg_escape_receptor_affinity_bEFNB2_monomeric.html" target="_self">bEFNB2_monomeric</a>

<a href="notebooks/avg_escape_receptor_affinity_bEFNB3_dimeric.html" target="_self">bEFNB3_dimeric</a>

## Comprehensive Receptor Binding Heatmaps
Additional control over filtering parameters

<a href="htmls/bEFNB2_monomeric_mut_effect.html" target="_self">bEFNB2 monomeric heatmap</a>

<a href="htmls/bEFNB3_dimeric_mut_effect.html" target="_self">bEFNB3 dimeric heatmap</a>



## Neutralization of Nipah pseudoviruses

<Figure caption="Ephrin neutralization of pseudoviruses expressing unmutated Nipah RBP/F">
    <Altair :showShadow="true" :spec-url="'htmls/ephrin_neut_curve.html'"></Altair>
</Figure>


## Correlations Between Entry and Binding

<Figure caption="Effects of mutations on binding and entry">
    <Altair :showShadow="true" :spec-url="'htmls/entry_binding_combined_corr_plot.html'"></Altair>
</Figure>

## Binding Correlations

<Figure caption="Effects of mutations on binding to bEFNB2 and bEFNB3, with mutations of interest highlighted">
    <Altair :showShadow="true" :spec-url="'htmls/E2_E3_correlation.html'"></Altair>
</Figure>

<Figure caption="Interactive plot of bEFNB2 and bEFNB3 site-averaged binding correlations">
    <Altair :showShadow="true" :spec-url="'htmls/E2_E3_correlation_site.html'"></Altair>
</Figure>

## Binding Validations
### Binding Validation by BLI
<a href="notebooks/plot_BLI_data.html" target="_self">BLI validations notebook</a>

<Figure caption="Correlation of biolayer interferometry affinity measurements with DMS">
    <Altair :showShadow="true" :spec-url="'htmls/binding_BLI_corr.html'"></Altair>
</Figure>

### Binding Validation by Neutralization
<a href="notebooks/ephrin_neut_curves.html" target="_self">Binding validations notebook</a>

<Figure caption="Neutralization of single RBP mutant pseudoviruses and correlation with DMS">
    <Altair :showShadow="true" :spec-url="'htmls/all_ephrin_neut_plots.html'"></Altair>
</Figure>


## Analysis Notebooks
<a href="notebooks/ephrin_binding.html" target="_self">Binding analysis notebook</a>

## Raw Data
::: warning These data have not been filtered. For filtered .csv files, go to [Analysis Pipeline](/pipeline_information)
[Individual antibody escape selection .csv files](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/tree/master/results/receptor_affinity/by_selection){target="_self"}

[Average bEFNB2 monomeric binding .csv](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/receptor_affinity/averages/bEFNB2_monomeric_mut_effect.csv){target="_self"}

[Average bEFNB3 dimeric binding .csv](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/receptor_affinity/averages/bEFNB3_dimeric_mut_effect.csv){target="_self"}
:::




