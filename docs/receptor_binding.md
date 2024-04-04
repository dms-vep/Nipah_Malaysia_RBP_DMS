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

## Averaging of receptor binding
Notebooks averaging affects of mutations on receptor binding across libraries and replicates.

<a href="notebooks/avg_escape_receptor_affinity_bEFNB2_monomeric.html" target="_self">bEFNB2_monomeric</a>

<a href="notebooks/avg_escape_receptor_affinity_bEFNB3_dimeric.html" target="_self">bEFNB3_dimeric</a>

## Neutralization of Nipah pseudoviruses
Ephrin neutralization curve plot
<Altair :showShadow="false" :spec-url="'htmls/ephrin_neut_curve.html'"></Altair>


## Correlations Between Entry and Binding
Effect of mutations on binding and entry for all mutants
<Altair :showShadow="false" :spec-url="'htmls/entry_binding_combined_corr_plot.html'"></Altair>

## Binding Correlations
Binding to bEFNB2 and bEFNB3 with specific mutations highlighted
<Altair :showShadow="false" :spec-url="'htmls/E2_E3_correlation.html'"></Altair>

Interactive plot of bEFNB2 and bEFNB3 site-averaged binding correlations
<Altair :showShadow="false" :spec-url="'htmls/E2_E3_correlation_site.html'"></Altair>

## Binding Validations
<a href="notebooks/ephrin_neut_curves.html" target="_self">Binding validations notebook</a>

bEFNB2 and bEFNB3 binding validations plots
<Altair :showShadow="false" :spec-url="'htmls/all_ephrin_neut_plots.html'"></Altair>

## Analysis Notebooks
<a href="notebooks/ephrin_binding.html" target="_self">Binding analysis notebook</a>