#!/bin/bash
#
#SBATCH -c 8

snakemake -c 8 --use-conda --latency-wait 30 --rerun-incomplete -s dms-vep-pipeline-3/Snakefile