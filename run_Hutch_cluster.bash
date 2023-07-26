#!/bin/bash
#
#SBATCH -c 16

snakemake -c 16 --use-conda --rerun-incomplete -s dms-vep-pipeline-3/Snakefile
