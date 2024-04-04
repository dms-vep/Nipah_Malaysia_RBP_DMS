# Heatmaps

Heatmaps represent one of the best ways to explore deep mutational scanning data. This page contains links to heatmaps which show the effects of mutations on three different phenotypes: cell entry, receptor binding, and antibody escape. 

::: tip
Hover over the heatmaps to see more information about each mutation
:::

## Entry Heatmaps
<a href="htmls/E2_entry_heatmap.html" target="_self">Cell Entry in CHO-bEFNB2 Cells</a>

<a href="htmls/E3_entry_heatmap.html" target="_self">Cell Entry in CHO-bEFNB3 Cells</a>

## Binding Heatmaps
::: info
Mutations with low cell entry scores are masked in dark gray.
:::
<a href="htmls/E2_binding_heatmap.html" target="_self">bEFNB2 binding Heatmap</a>

<a href="htmls/E3_binding_heatmap.html" target="_self">bEFNB3 Binding Heatmap</a>

## Antibody Escape Heatmaps
::: info
Mutations with low cell entry scores are masked in dark gray.
If protein structure is available, distance in angstroms to the closest antibody residue is shown.
:::
<a href="htmls/m102_heatmap_plot.html" target="_self">m102.4 Antibody Escape</a>

<a href="htmls/HENV117_heatmap_plot.html" target="_self">HENV-117 Antibody Escape</a>

<a href="htmls/HENV26_heatmap_plot.html" target="_self">HENV-26 Antibody Escape</a>

<a href="htmls/HENV103_heatmap_plot.html" target="_self">HENV-103 Antibody Escape</a>

<a href="htmls/HENV32_heatmap_plot.html" target="_self">HENV-32 Antibody Escape</a>

<a href="htmls/nAH1_heatmap_plot.html" target="_self">nAH1.3 Antibody Escape</a>


## Heatmaps of Specific RBP Regions
::: tip
Click arrow in upper right to view full-sized plots
:::
Effects of mutations on cell entry and binding at receptor contact sites
<Altair :showShadow="true" :spec-url="'htmls/combined_entry_binding_contact_heatmaps.html'"></Altair>

### Effects of mutations on cell entry and binding at glycosylation sites
<Altair :showShadow="false" :spec-url="'htmls/glycan_sites_img_heatmap.html'"></Altair>

### Effects of mutations on cell entry and binding at polymorphic Nipah sites
<Altair :showShadow="true" :spec-url="'htmls/nipah_poly_sites_img_heatmap.html'"></Altair>

### Effects of mutations on cell entry, organized by type of the unmutated amino acid residue 
The effects of mutations organized by the unmutated amino acid type. Strong preference for certain amino acids can be seen in certain regions. For example, portions of the stalk only tolerate hydrophobic residues (see sites 101-160 below).
<Altair :showShadow="true" :spec-url="'htmls/E3_entry_AA_prop_heatmap.html'"></Altair>

## Notebooks

<a href="notebooks/plot_heatmaps.html" target="_self">Heatmap notebook</a>

