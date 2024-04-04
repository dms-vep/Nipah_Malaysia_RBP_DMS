# Antibody Escape

We determined the effects of mutations on neutralization by different anti-RBP antibodies. Antibody selections were performed by incubating pseudovirus libraries with different concentrations of antibody, followed by infection of CHO-bEFNB3 cells to recover barcodes. Neutralization curves were fit on the DMS data with [polyclonal](https://github.com/jbloomlab/polyclonal){target="_self"}.

## Individual Antibody Selections
::: details Individual antibody selection model fitting notebooks
<a href="notebooks/fit_escape_antibody_escape_LibB-230720-m102.4.html" target="_self">LibB-230720-m102.4</a>

<a href="notebooks/fit_escape_antibody_escape_LibA-230725-m102.4.html" target="_self">LibA-230725-m102.4</a>

<a href="notebooks/fit_escape_antibody_escape_LibA-231116-m102.4.html" target="_self">LibA-231116-m102.4</a>

<a href="notebooks/fit_escape_antibody_escape_LibA-230725-nAH1.3.html" target="_self">LibA-230725-nAH1.3</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230630-nAH1.3.html" target="_self">LibB-230630-nAH1.3</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230720-nAH1.3.html" target="_self">LibB-230720-nAH1.3</a>

<a href="notebooks/fit_escape_antibody_escape_LibA-231024-HENV26.html" target="_self">LibA-231024-HENV26</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230815-HENV26.html" target="_self">LibB-230815-HENV26</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230818-HENV26.html" target="_self">LibB-230818-HENV26</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230907-HENV26.html" target="_self">LibB-230907-HENV26</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230704-HENV32.html" target="_self">LibB-230704-HENV32</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230720-HENV32.html" target="_self">LibB-230720-HENV32</a>

<a href="notebooks/fit_escape_antibody_escape_LibA-230725-HENV32.html" target="_self">LibA-230725-HENV32</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230907-HENV32.html" target="_self">LibB-230907-HENV32</a>

<a href="notebooks/fit_escape_antibody_escape_LibA-230815-HENV103.html" target="_self">LibA-230815-HENV103</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230818-HENV103.html" target="_self">LibB-230818-HENV103</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230906-HENV103.html" target="_self">LibB-230906-HENV103</a>

<a href="notebooks/fit_escape_antibody_escape_LibA-230815-HENV117.html" target="_self">LibA-230815-HENV117</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230818-HENV117.html" target="_self">LibB-230818-HENV117</a>

<a href="notebooks/fit_escape_antibody_escape_LibB-230907-HENV117.html" target="_self">LibB-230907-HENV117</a>
:::

## Averaging Antibody Escape
::: details Average antibody escape notebooks
<a href="notebooks/avg_escape_antibody_escape_m102.4.html" target="_self">m102.4</a>

<a href="notebooks/avg_escape_antibody_escape_nAH1.3.html" target="_self">nAH1.3</a>

<a href="notebooks/avg_escape_antibody_escape_HENV26.html" target="_self">HENV-26</a>

<a href="notebooks/avg_escape_antibody_escape_HENV32.html" target="_self">HENV-32</a>

<a href="notebooks/avg_escape_antibody_escape_HENV103.html" target="_self">HENV-103</a>

<a href="notebooks/avg_escape_antibody_escape_HENV117.html" target="_self">HENV-117</a>
:::



## Neutralization Curves
<a href="notebooks/mab_neut_ic50.html" target="_self">Neutralization curves notebook</a>

Neutralization of unmutated Nipah RBP/F pseudovirus by different anti-RBP antibodies.
<Altair :showShadow="false" :spec-url="'htmls/mab_neuts_plot.html'"></Altair>


## Antibody Escape Validations

<a href="notebooks/mab_validation.html" target="_self">Antibody validation notebook</a>

To validate the escape measurements from DMS, we generated single RBP mutant pseudoviruses and tested their neutralization by antibody nAH1.3.
<Altair :showShadow="false" :spec-url="'htmls/combined_ic50_neut_curve_plot.html'"></Altair>

## Miscellaneous Figures
Escape at Nipah and Hendra polymorphisms and differences
<Altair :showShadow="false" :spec-url="'htmls/combined_evol_sites_escape.html'"></Altair>

### Functional Effect of Antibody Escape Mutations
<Altair :showShadow="false" :spec-url="'htmls/escape_bubble_plot.html'"></Altair>

### Escape by Site
<Altair :showShadow="true" :spec-url="'htmls/mab_line_escape_plot.html'"></Altair>


## Antibody Escape Analysis Notebook

<a href="notebooks/analyze_escape_data.html" target="_self">Antibody analysis notebook</a>