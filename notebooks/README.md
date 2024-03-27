# Analysis Notebooks:

This folder contains jupyter notebooks written by Brendan Larsen to filter and analyze Nipah RBP deep mutational scanning data and produce figures for interactivity and publication. All are automatically run via the 'custom_rules.smk' file with snakemake and parameterized by papermill. Outputs are stored in results/.

## Information about specific notebooks

### Main notebooks
* **filter_data.ipynb:** Main filtering script. Takes filtering parameters and makes final filtered .csv files used in all the analysis scripts.

### Main data analysis notebooks
* **nipah_RBP_entry_analysis.ipynb:** Pulls in filtered cell entry data and analyzes and makes figures for paper.

* **ephrin_binding.ipynb:** Analyze filtered Nipah RBP receptor binding data and produce figures

* **analyze_escape_data.ipynb:** Analyze filtered antibody escape data, make logo plots, antibody escape heatmaps, and other figures.

### Validation and neutralization notebooks
* **IC50_validations.ipynb:** Pull in raw neutralization data from nAH1.3 validations, fit neutralization curves with _neutcurve_ and then plot and combine with DMS estimates to show correlation.

* **ephrin_neut_curves.ipynb:** Pull in raw neutralization data for unmutated Nipah RBP/F pseudovirus with soluble bEFNB2 or bEFNB3. Also estimate neutralization curves for the receptor binding neutralization validations and plot correlations with DMS.

* **mab_neut_ic50.ipynb:** Pulls in raw neutralization data of unmutated Nipah RBP/F pseudoviruses in the presence of six monoclonal antibodies.

* **plot_BLI_data.ipynb:** Make figures showing the correlation between DMS and the BLI binding affinity data

* **cell_entry_validations.ipynb:** Pulls in raw experimental data from cell entry validations and plots correlations with DMS.

### Make interactive Altair figures
* **interactive_figures.ipynb**: Make large, web friendly interactive figures of the data using _Altair_

* **plot_heatmaps.ipynb:** Make interactive heatmaps of DMS data using _Altair_

### Analysis helper notebooks
These notebooks calculate different statistics or data used in various analyses.

* **ephrin_alignment.ipynb:**
Make amino acid alignment of bat and human EFNB2 and EFNB3

* **make_nipah_phylogeny_baltic.ipynb:** Visualize a phylogeny of publically available whole genome Nipah sequences using the _baltic_ package.

* **library_correlations.ipynb:** Estimate correlations between entry for LibA and LibB functional selections, and the number of variants in library from PacBio consensus sequences.

* **henipavirus_RBP_alignment.ipynb:** Make an alignment of different RBP amino acid sequences from canonical Henipaviruses and visualize using the _biotite_ package.

* **mapping_site_level.ipynb:** Make files compatible with ChimeraX software for visualizing aggregate site level statistics on protein structure.

* **receptor_distance.ipynb:** Calculates the distance between amino acids from PDB files.

* **contact_type_and_beta_factors.ipynb:** Determines what kind of contact types are present between two proteins, and pull out which sites are in beta sheets from PDB files.

* **henipavirus_conservation.ipynb:** Calculates henipavirus entropy and nipah polymorphism data (which sites are conserved or variable)
