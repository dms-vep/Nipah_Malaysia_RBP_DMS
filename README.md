# Deep mutational scanning of the Nipah virus receptor binding protein (RBP) using a barcoded lentiviral vector
Study by Brendan Larsen, Teagan McMahon and Jesse Bloom.

For Jupyter notebooks used in analyses and interactive Altair plots, see [https://dms-vep.github.io/Nipah_Malaysia_RBP_DMS/](https://dms-vep.github.io/Nipah_Malaysia_RBP_DMS/).


This repo contains data and analyses from deep mutational scanning experiments on the Nipah virus RBP. All experiments were performed on the reference Nipah genome sequenced during the original outbreak in Malaysia [NC_002728.1](https://www.ncbi.nlm.nih.gov/nuccore/NC_002728.1). Thirty two amino acids were removed from the cytoplasmic tail to improve lentivirus titers, and all residues between RBP reference sites 71 and 602 contain every possible single missense mutation. Stop codons were designed to occur at every other position from positions 71 to 234.

## Details of repo
The analysis is mostly run by [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3), which is included as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

To run the analysis, create the `conda` environment in [dms-vep-pipeline-3/environment.yml](dms-vep-pipeline-3/environment.yml), activate it, and run the `snakemake` pipeline in [dms-vep-pipeline-3/Snakefile](dms-vep-pipeline-3/Snakefile) with:
    conda activate dms-vep-pipeline-3
    snakemake -s dms-vep-pipeline-3/Snakefile -j <n_jobs>
    
On the Hutch cluster, you can also run with the `slurm` script [run_Hutch_cluster.bash](run_Hutch_cluster.bash) with:
sbatch run_Hutch_cluster.bash

The configuration for the analysis is in [config.yaml](config.yaml), and additional input data are in [./data/](data).
Additional input data are in [./data/](data).

Raw experimental and computational data, along with supplemental data for paper are in [./data/custom_analyses_data](/data/custom_analyses_data)

The results of running the pipeline are placed in [./results/](results), only some of which are tracked per the [.gitignore](.gitignore) file.
HTML documentation is created by the pipeline and placed in [./docs/](docs), where it is rendered via GitHub Pages at [https://dms-vep.github.io/Nipah_Malaysia_RBP_DMS/](https://dms-vep.github.io/Nipah_Malaysia_RBP_DMS/)

Snakemake file running custom analyses with jupyter notebooks is in [custom_rules.smk](custom_rules.smk).

Yaml file containing project specific configurations is [nipah_config.yaml](nipah_config.yaml)

## Hosting website with Vitepress

The [website](https://dms-vep.github.io/Nipah_Malaysia_RBP_DMS/) hosting the notebooks and interactive plots was built by [Vitepress](https://vitepress.dev). To modify the directory to serve docs hosted by GitHub Pages, the following steps were taken.

- ```package.json``` in root directory contains information about packages needed by vitepress. 
- In ```docs/```:
    - Contains the markdown files for separate pages. 
    - ```/public``` contains the raw .html files for the altair plots, jupyter notebooks, and images.
    - ```.vitepress``` holds things like website themes and CSS.  
    - The file ```config.mts``` was modified with ```base: '/Nipah_Malaysia_RBP_DMS/```', to correctly build static website by GitHub Pages. 
    - To make sure files are correctly uploaded to GitHub, ```.gitignore``` has: 
        - ```node_modules/*```
        - ```!docs/.vitepress/*```
        - ```!docs/public*```
    - Added GitHub pages script to ```.github/workflows/deploy.yml```
        - Note: ```working-directory: docs``` must be added in two spots in script to make sure the correct directory is built.
    - Modified ```config.yaml``` to save all html files to ```docs/public/``` that are built by snakemake pipeline.

To serve the website, run ```npm run docs:build``` in root (make sure you have ```nodejs``` running in conda environment). Then simply add and push changes to remote repo.