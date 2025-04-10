# Heatmaps

Heatmaps represent one of the best ways to explore deep mutational scanning data. This page contains links to various heatmaps, which show the effects of mutations on three different phenotypes: cell entry, receptor binding, and antibody escape. 

::: tip
Hover over the heatmaps to see more information about each mutation. An 'X' represents the amino acid found at that site in the unmutated Nipah Malaysia sequence.
:::

## Entry Heatmaps
Effects of all mutations on entry in CHO cells expressing different bat receptors.

<a href="htmls/E2_entry_heatmap.html" target="_self">Entry with bat ephrin-B2</a>

<a href="htmls/E3_entry_heatmap.html" target="_self">Entry with bat ephrin-B3</a>

## Binding Heatmaps
::: info
Mutations with low cell entry scores are masked in dark gray.
:::
<a href="htmls/E2_binding_heatmap.html" target="_self">Binding to bat ephrin-B2 (monomeric)</a>

<a href="htmls/E3_binding_heatmap.html" target="_self">Binding to bat ephrin-B3 (dimeric) </a>

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


## Heatmaps of Specific Receptor Binding Protein Regions
::: tip
Click arrow in upper right to view full-sized plots
:::

### Contact sites
Effects of mutations on cell entry and binding at receptor contact sites. Receptor contact sites are less constrained for entry in CHO cells expressing bat ephrin-B2 than CHO cells expressing bat ephrin-B3. This is likely due to ~25-fold higher receptor affinity of the receptor binding protein to ephrin-B2 versus ephrin-B3.
<Altair :showShadow="true" :spec-url="'htmls/combined_entry_binding_contact_heatmaps.html'"></Altair>

### Effects of mutations on cell entry and binding at glycosylation sites
Nipah RBP has six sites that are glycosylated. One in the neck (site 159) and five in the head. Here are the effects of mutations on entry and binding.
<Altair :showShadow="false" :spec-url="'htmls/glycan_sites_img_heatmap.html'"></Altair>

### Effects of mutations on cell entry and binding at polymorphic Nipah sites
These sites are polymorphic in Nipah sequences. Most of these sites tolerate multiple mutations. 
<Altair :showShadow="true" :spec-url="'htmls/nipah_poly_sites_img_heatmap.html'"></Altair>

### Effects of mutations on cell entry, organized by type of the unmutated amino acid residue 
The effects of mutations organized by the unmutated amino acid type. Strong preference for certain amino acids can be seen in certain regions. For example, portions of the stalk only tolerate hydrophobic residues (see sites 101-160 below).
<Altair :showShadow="true" :spec-url="'htmls/E3_entry_AA_prop_heatmap.html'"></Altair>

## Notebooks
Notebook that makes all heatmaps from filtered DMS data. Make figures for manuscript using python and altair.

<a href="notebooks/plot_heatmaps.html" target="_self">Heatmap notebook</a>

