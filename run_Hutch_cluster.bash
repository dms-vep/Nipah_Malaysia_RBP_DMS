#!/bin/bash
#
#SBATCH -c 4

snakemake -c 4 --use-conda --latency-wait 30 --rerun-incomplete -s dms-vep-pipeline-3/Snakefile