# Input data

## PacBio full-length variant sequencing
[PacBio_runs.csv](PacBio_runs.csv) contains information on PacBio runs linking the barcodes to the mutations. It has the following columns:
 - `library`: name of the library sequenced  
 - `run`: date of the pacbio library submission  
 - `fastq`: FASTQ file from running CCS  

The amplicons itself is defined in [PacBio_amplicon.gb](PacBio_amplicon.gb), and [PacBio_feature_parse_specs.yaml](PacBio_feature_parse_specs.yaml) specifies how to parse that with [alignparse](https://jbloomlab.github.io/alignparse/).