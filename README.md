# Deep mutational scanning of the Nipah Receptor Binding Protein using a barcoded lentiviral vector
Study by Brendan Larsen and Jesse Bloom.

For documentation of the analysis, see [https://dms-vep.github.io/Nipah_Malaysia_RBP_DMS/](https://dms-vep.github.io/Nipah_Malaysia_RBP_DMS/).

## Organization of this repo


## Overview
This repository contains a [snakemake](https://snakemake.readthedocs.io/) pipeline for analysis of deep mutational scanning of barcoded viral entry proteins.

Note that this is version 3 of the pipeline (see the [CHANGELOG](CHANGELOG.md) for details); older versions are hosted on the no-longer maintained [https://github.com/dms-vep/dms-vep-pipeline](https://github.com/dms-vep/dms-vep-pipeline) repo.

In order to use the pipeline, you can include this repository as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) in your own repo
Your own repo containing this submodule will have the project-specific data and code.

In other words, if the repository for your specific deep mutational scanning project is called `<my_dms_repo>`, you would add [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3) as a submodule to that.
The master [Snakefile](Snakefile) for the entire analysis is then located in `dms-vep-pipeline-3/Snakefile`.
The configuration file (`config.yaml`), custom rules (`custom_rules.smk`), input data (`./data/`), results (`./results/`), and HTML documentation of results (`./docs/`) are n the top-level repo.
In other words, the directory structure would look like this:

```
<my_dms_repo>
├── dms-vep-pipeline-3 [added as git submodule]
│   ├── Snakefile [Snakefile that runs entire pipeline]
│   └── ... [other contents of dms-vep-pipeline-3]
├── README.md [README for main project]
├── custom_rules.smk [any custom rules that are adding to the pipeline]
├── config.yaml [configuration for Snakefile]
├── data [subdirectory with input data]
├── results [subdirectory with results created by pipeline]
├── docs [sphinx summary of results created by pipeline]
└── <other files / subdirectories that are part of project>
```

For this to work, the top-level `config.yaml` needs specify details for your project (see more below).


## Running the pipeline
You can run the pipeline from the top-level directory using:

    snakemake -j <n_jobs> --use-conda -s dms-vep-pipeline-3/Snakefile

Note that the `-s dms-vep-pipeline-3/Snakefile` flag specifies to use the Snakefile in the pipeline submodule.

If have already built the `dms-vep-pipeline-3` [conda](https://docs.conda.io/) environment in [environment.yml](environment.yml), you can also just activate that environment and then run the above command without the `--use-conda` command.

Note that if the environment is updated, all rules will re-run.
If you do not want to re-run rules if the environment is updated, specify `--rerun-triggers mtime params input code`---although if you do this, you are responsible for manually deleting any output that should be changed by the environment update.

Running the pipeline will put results in `./results/` and the HTML documentation in `./docs/`.
To display the HTML documentation via GitHub pages, set up your repo to serve documentation via GitHub pages from the `/docs` folder of the main (or master) branch [as described here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
The documentation will then be at `https://dms-vep.github.io/<my_dms_repo>` (assuming you are using the [https://github.com/dms-vep](https://github.com/dms-vep) organization; otherwise replace `dms-vep` with whatever account contains your repo).

## Configuring and customizing the pipeline
The main configuration for the analysis is in the `config.yaml` file that you place in your-top level repository.
An example of this configuration file is at [test_example/config.yaml](test_example/config.yaml).
Note in order for things to work properly you need to correctly set the `pipeline_path`, `docs`, `github_repo_url`, `github_blob_url`, `description`, `year`, and `authors` keys in the `config.yaml` file.

The `config.yaml` must then contain additional keys as explained in [test_example/config.yaml](test_example/config.yaml).
The pipeline can in principle perform many types of analyses, including building codon-variant tables from PacBio sequencing, counting barcodes from experiments,  analyzing the functional effects of mutations, analyzing antibody escape, etc. Each of these steps is included in a separate file (eg, [build_variants.smk](build_variants.smk), [count_variants.smk](count_variants.smk), etc) that are included in the main [Snakefile](Snakefile).
As detailed in [config.yaml](config.yaml), you do not have to perform all of these depending on how you structure the configuration.
Analyses other than the codon-variant building and barcode counting each have their own YAML configuration which you should place in your `./data/` subdirectory.
For examples, see [test_example/data/func_effects_config.yml](test_example/data/func_effects_config.yml), [test_example/data/antibody_escape_config.yml](test_example/data/antibody_escape_config.yml), etc.
Note that these files will be easier to understand if you first familiarize yourself with the YAML language including the merge (`<<`), alias (`&`), and anchor (`*`) operators.

If you want to add custom Snakemake rules, create a file called `custom_rules.smk` in your top-level repo, and [Snakefile](Snakefile) in the `dms-vep-pipeline-3` will automatically include and run it.
For an example, see [test_example/custom_rules.smk](test_example/custom_rules.smk).
The snakemake pipeline in [Snakefile](Snakefile) defines a nested dictionary named `docs` which is used to build the HTML documentation that goes into [./docs/](docs) for rendering on GitHub pages.
So if you want other files or outputs for any of your custom rules to be rendered in these docs, add them to the nested dict `docs` as illustrated in [test_example/custom_rules.smk](test_example/custom_rules.smk).

Your top-level repo also needs to have an appropriate `.gitignore` file that specifies which results to include and which not to include (we don't include them all or it would be too much to track).
A template `.gitignore` file is at [test_example/.gitignore](test_example/.gitignore).


## Details on setup of this pipeline repository

### Other details about pipeline

### `conda` environment
The [conda](https://docs.conda.io/) environment for the pipeline is in [environment.yml](environment.yml).

