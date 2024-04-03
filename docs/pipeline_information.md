# Pipeline Information

To link barcodes to specific variants present in each RBP sequence, we did Pacbio sequencing on RBP variant libraries. Full-length RBP consensus sequences were made to determine which mutations were present in each library. DMS data was analyzed with [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3){target="_self"}. This pipeline utilizes the [alignparse](https://jbloomlab.github.io/alignparse/){target="_self"} python package. The general steps are listed below. 

## Build Pacbio Sequences 

<a href="notebooks/build_pacbio_consensus.html" target="_self">Build PacBio consensus sequences notebook</a>

Builds the pacbio consensus sequence. Paramaters used are:
```
max_minor_sub_frac=0.2
max_minor_indel_frac=0.2
min_support=3
```

These parameters filter consensus sequences made from pacbio CCS sequencing. If a consensus RBP sequence has a mutation or indel at greater than 20% frequency of the reads, it will be discarded. Consensus sequences must have at least three reads to be included.


## Analyze PacBio CCS Reads
<a href="notebooks/analyze_pacbio_ccs.html" target="_self">Analyze Pacbio CCS reads notebook</a>

Reports stats on how many CCS reads were filtered out or aligned to the unmutated reference sequence. 


## Build Codon Variants Notebook

<a href="notebooks/build_codon_variants.html" target="_self">Build codon variants notebook</a>

Builds the codon-variant table that links barcodes and mutations. 


## Illumina Variant Counts
Once the barcodes are linked to mutations in the codon-variant table, all sequencing data is generated with Illumina to get the relative frequencies of barcodes in each experiment.  

<a href="notebooks/analyze_variant_counts.html" target="_self">Analysis of variant counts notebook</a>

## Filtering Selection Data

<a href="notebooks/filter_data.html" target="_self">Filtering notebook</a>

The final averaged data were filtered based on the following parameters that are contained within the [nipah_config.yaml](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS/blob/master/nipah_config.yaml){target="_self"} file. More information about these parameters are listed below.

**Cell Entry**
``` 
func_times_seen_cutoff=2 A mutation must be observed in at least two separate barcodes (the average times_seen in the averaged effects) to be included.
func_std_cutoff=1 The standard deviation of the effect of the mutation must be below 1.
percent_selections=0.5 A mutation must be present in at least 50% of the individual selections to be included.
```

**Receptor Binding**
``` 
min_times_seen_binding=2.5 A mutation must be observed in at least 2.5 separate barcodes to be included.
max_binding_std=2 The standard deviation of the effect of the mutation must be below 2.
min_func_effect_for_binding=-1.5 A mutation must have a cell entry score of greater than -1.5 to be included in the receptor binding analyses.
```

**Antibody Escape**
``` 
min_times_seen_ab=2.5 A mutation must be observed in at least 2.5 separate barcodes to be included.
max_ab_std=2 The standard deviation of the effect of the mutation must be below 2.
frac_models=0.5 A mutation must be present in at least 50% of the individual selections
min_func_effect_for_ab=-2 A mutation must have a cell entry score of at least -2 to be included in the antibody escape analyses.
```

## Miscellaneous Notebooks

<a href="notebooks/make_nipah_phylogeny_baltic.html" target="_self">Notebook for making a Nipah phylogeny</a>

<a href="notebooks/mapping_site_level.html" target="_self">Notebook for mapping filtered scores onto protein structures</a>

<a href="notebooks/receptor_distance.html" target="_self">Calculate atomic distances between residues in a PDB file notebook</a>

<a href="notebooks/henipavirus_conservation.html" target="_self">Find variable sites in Nipah or Henipavirus alignments notebook</a>