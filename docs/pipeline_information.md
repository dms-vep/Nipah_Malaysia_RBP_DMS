# Pipeline Information

To link barcodes to specific variants present in each RBP sequence, we performed Pacbio sequencing on variant libraries. Full-length RBP consensus sequences were made to determine which mutations were present in each library. DMS data were analyzed with [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3){target="_self"}. This pipeline utilizes the [alignparse](https://jbloomlab.github.io/alignparse/){target="_self"} package. The general steps are listed below. 

## Build Pacbio Sequences 

<a href="notebooks/build_pacbio_consensus.html" target="_self">PacBio consensus sequences notebook</a>

Builds the Pacbio consensus sequence. Parameters used are:
```
max_minor_sub_frac=0.2
max_minor_indel_frac=0.2
min_support=3
```

These parameters filter consensus sequences generated from Pacbio CCS sequencing and assembly. If a consensus RBP sequence has a mutation or indel in more than 20% of the reads, it will be discarded. Consensus sequences must have at least three reads to be included as variants.


## Analyze PacBio CCS Reads
<a href="notebooks/analyze_pacbio_ccs.html" target="_self">Analyze Pacbio CCS reads notebook</a>

Reports information about CCS read filtering.


## Build Codon Variants Notebook

<a href="notebooks/build_codon_variants.html" target="_self">Build codon variants notebook</a>

Builds the codon-variant table from PacBio consensus sequences that links barcodes and mutations. 


## Illumina Variant Counts
Once the barcodes are linked to mutations in the codon-variant table, all sequencing data is generated with Illumina to obtain the relative frequencies of barcodes in each selection experiment.  

<a href="notebooks/analyze_variant_counts.html" target="_self">Analysis of variant counts notebook</a>

## Filtering Selection Data

<a href="notebooks/filter_data.html" target="_self">Filtering notebook</a>

The final averaged data were filtered based on the following parameters that are contained within the [nipah_config.yaml](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/nipah_config.yaml){target="_self"} file. More information about these parameters are listed in the notebook.

## Raw Filtered Data
::: tip These data have been filtered. For pre-filtered raw .csv files, go to individual pages to view and download.
### Cell Entry
[Individual cell entry .csv files](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/tree/master/results/func_effects/by_selection){target="_self"}

[Average entry in CHO-bEFNB2 cells .csv](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/func_effects/averages/CHO_bEFNB2_func_effects.csv){target="_self"}

[Average entry in CHO-bEFNB3 cells .csv](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/results/func_effects/averages/CHO_bEFNB3_func_effects.csv){target="_self"}
:::


## Miscellaneous Notebooks

<a href="notebooks/make_nipah_phylogeny_baltic.html" target="_self">Notebook for making a Nipah phylogeny</a>

<a href="notebooks/mapping_site_level.html" target="_self">Notebook for mapping filtered scores onto protein structures</a>

<a href="notebooks/receptor_distance.html" target="_self">Calculate atomic distances between residues in a PDB file notebook</a>

<a href="notebooks/henipavirus_conservation.html" target="_self">Find variable sites in Nipah or Henipavirus alignments notebook</a>