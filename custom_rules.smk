"""Custom rules used in the ``snakemake`` pipeline.

This file is included by the pipeline ``Snakefile``.

"""

rule analyze_nipah_RBP_entry:
    """Analyze EFNB2 and EFNB3 entry"""
    input:
        func_scores_E2_file="results/func_effects/averages/CHO_EFNB2_low_func_effects.csv",
        func_scores_E3_file="results/func_effects/averages/CHO_EFNB3_low_func_effects.csv",
        nb="notebooks/nipah_RBP_entry_analysis.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/nipah_RBP_entry_analysis.ipynb",
        filtered_E2_data="results/filtered_data/E2_entry_filtered.csv",
        filtered_E3_data="results/filtered_data/E3_entry_filtered.csv",
        E2_entry_heatmap="results/images/E2_entry_heatmap.html",
        E3_entry_heatmap="results/images/E3_entry_heatmap.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "func_scores_E2_file": input.func_scores_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "filtered_E2_data": output.filtered_E2_data,
                "filtered_E3_data": output.filtered_E3_data,
                "E2_entry_heatmap": output.E2_entry_heatmap,
                "E3_entry_heatmap": output.E3_entry_heatmap,
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
            }
        ),
    log:
        log="results/logs/nipah_RBP_entry_analysis.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule analyze_nipah_RBP_binding:
    """Analyze EFNB2 and EFNB3 binding"""
    input:
        func_scores_E2_file="results/func_effects/averages/CHO_EFNB2_low_func_effects.csv",
        binding_E2_file="results/receptor_affinity/averages/EFNB2_monomeric_mut_effect.csv",
        func_scores_E3_file="results/func_effects/averages/CHO_EFNB3_low_func_effects.csv",
        binding_E3_file="results/receptor_affinity/averages/EFNB3_dimeric_mut_effect.csv",
        nb="notebooks/ephrin_binding.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/ephrin_binding.ipynb",
        filtered_E2_binding_data="results/filtered_data/E2_binding_filtered.csv",
        filtered_E3_binding_data="results/filtered_data/E3_binding_filtered.csv",
        E2_binding_entry="results/images/E2_binding_entry.html",
        E3_binding_entry="results/images/E3_binding_entry.html",
        E2_binding_heatmap="results/images/E2_binding_heatmap.html",
        E3_binding_heatmap="results/images/E3_binding_heatmap.html",
        E2_E3_correlation="results/images/E2_E3_correlation.html",
        E2_E3_correlation_site="results/images/E2_E3_correlation_site.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "func_scores_E2_file": input.func_scores_E2_file,
                "binding_E2_file": input.binding_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "binding_E3_file": input.binding_E3_file,
                "filtered_E2_binding_data": output.filtered_E2_binding_data,
                "filtered_E3_binding_data": output.filtered_E3_binding_data,
                "E2_binding_entry": output.E2_binding_entry,
                "E3_binding_entry": output.E3_binding_entry,
                "E2_binding_heatmap": output.E2_binding_heatmap,
                "E3_binding_heatmap": output.E3_binding_heatmap,
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "E2_E3_correlation": output.E2_E3_correlation,
                "E2_E3_correlation_site": output.E2_E3_correlation_site,
            }
        ),
    log:
        log="results/logs/nipah_RBP_binding_analysis.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule analyze_mab_validation_data:
    """Analyze nAH1.3 validation data"""
    input:
        validation_ic50s_file="data/custom_analyses_data/experimental_data/IC50_antibody_validations.csv",
        escape_file="results/antibody_escape/averages/nAH1.3_mut_effect.csv",
        nb="notebooks/IC50_validations.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/mab_validation.ipynb",
        IC50_validation_plot="results/images/IC50_validation_plot.html"
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "validation_ic50s_file": input.validation_ic50s_file,
                "escape_file": input.escape_file,
                "IC50_validation_plot": output.IC50_validation_plot,
            }
        ),
    log:
        log="results/logs/antibody_validation_IC50.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule cell_entry_validations:
    """Analyze cell entry single mutant validations"""
    input:
        validation_file_E2="data/custom_analyses_data/experimental_data/functional_validations_EFNB2.csv",
        validation_file_E3="data/custom_analyses_data/experimental_data/functional_validations_EFNB3.csv",
        func_scores_E2_file="results/func_effects/averages/CHO_EFNB2_low_func_effects.csv",
        func_scores_E3_file="results/func_effects/averages/CHO_EFNB3_low_func_effects.csv",
        nb="notebooks/cell_entry_validations.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/cell_entry_validations.ipynb",
        func_score_E2_plot="results/images/func_score_E2_validation.html",
        func_score_E3_plot="results/images/func_score_E3_validation.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "validation_file_E2": input.validation_file_E2,
                "validation_file_E3": input.validation_file_E3,
                "func_scores_E2_file": input.func_scores_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "func_score_E2_plot": output.func_score_E2_plot,
                "func_score_E3_plot": output.func_score_E3_plot,
            }
        ),
    log:
        log="results/logs/cell_entry_validations.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"
        
rule ephrin_neuts:
    """Analyze ephrin neut validations"""
    input:
        ephrin_binding_neuts_file="data/custom_analyses_data/experimental_data/231109_ephrin_neuts.csv",
        ephrin_validation_curves="data/custom_analyses_data/experimental_data/231208_affinity_validations.csv",
        validation_ic50s_file="data/custom_analyses_data/experimental_data/receptor_IC_validations.csv",
        e2_monomeric_binding_file="results/receptor_affinity/averages/EFNB2_monomeric_mut_effect.csv",
        e3_dimeric_binding_file="results/receptor_affinity/averages/EFNB3_dimeric_mut_effect.csv",
        nb="notebooks/ephrin_neut_curves.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/ephrin_neut_curves.ipynb",
        ephrin_curve_plot="results/images/ephrin_neut_curve.html",
        e2_curve_plot="results/images/ephrinB2_neut_curve.html",
        e3_curve_plot="results/images/ephrinB3_neut_curve.html",
        e2_corr_plot="results/images/e2_corr_plot.html",
        e3_corr_plot="results/images/e3_corr_plot.html",

    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "ephrin_binding_neuts_file": input.ephrin_binding_neuts_file,
                "ephrin_validation_curves": input.ephrin_validation_curves,
                "validation_ic50s_file": input.validation_ic50s_file,
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "e2_monomeric_binding_file": input.e2_monomeric_binding_file,
                "e3_dimeric_binding_file": input.e3_dimeric_binding_file,
                "ephrin_curve_plot": output.ephrin_curve_plot,
                "e2_curve_plot": output.e2_curve_plot,
                "e3_curve_plot": output.e3_curve_plot,
                "e2_corr_plot": output.e2_corr_plot,
                "e3_corr_plot": output.e3_corr_plot,
            }
        ),
    log:
        log="results/logs/ephrin_neuts.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

docs["Additional files and charts"] = {
    "Cell Entry": {
        "EFNB2 and EFNB3 entry notebook": rules.analyze_nipah_RBP_entry.output.nb,
        "EFNB2 Entry Heatmap": rules.analyze_nipah_RBP_entry.output.E2_entry_heatmap,
        "EFNB3 Entry Heatmap": rules.analyze_nipah_RBP_entry.output.E3_entry_heatmap,
    },
    "Ephrin Binding": {
        "EFNB2 and EFNB3 binding notebook": rules.analyze_nipah_RBP_binding.output.nb,
        "EFNB2 Binding Vs Entry Post Filter": rules.analyze_nipah_RBP_binding.output.E2_binding_entry,
        "EFNB3 Binding Vs Entry Post Filter": rules.analyze_nipah_RBP_binding.output.E3_binding_entry,
        "EFNB2 Binding Heatmap": rules.analyze_nipah_RBP_binding.output.E2_binding_heatmap,
        "EFNB3 Binding Heatmap": rules.analyze_nipah_RBP_binding.output.E3_binding_heatmap,
        "EFNB2 and EFNB3 Binding Correlations": rules.analyze_nipah_RBP_binding.output.E2_E3_correlation,
        "EFNB2 and EFNB3 Site Level Binding Correlations": rules.analyze_nipah_RBP_binding.output.E2_E3_correlation_site,
    },
    "Antibody Escape Validation": {
        "Antibody validation notebook": rules.analyze_mab_validation_data.output.nb,
        "Antibody validation plot (IC50 vs DMS)": rules.analyze_mab_validation_data.output.IC50_validation_plot,
    },
    "Cell Entry Validations": {
        "Cell entry validation notebook": rules.cell_entry_validations.output.nb,
        "Cell entry validation in CHO-EFNB2 cells": rules.cell_entry_validations.output.func_score_E2_plot,
        "Cell entry validation in CHO-EFNB3 cells": rules.cell_entry_validations.output.func_score_E3_plot,
    },
    "Ephrin Neuts": {
        "Ephrin neutralization notebook": rules.ephrin_neuts.output.nb,
        "Ephrin neutralization curve": rules.ephrin_neuts.output.ephrin_curve_plot,
        "EphrinB2 single mutant neuts": rules.ephrin_neuts.output.e2_curve_plot,
        "EphrinB3 single mutant neuts": rules.ephrin_neuts.output.e3_curve_plot,
        "EphrinB2 correlation plot": rules.ephrin_neuts.output.e2_corr_plot,
        "EphrinB3 correlation plot": rules.ephrin_neuts.output.e3_corr_plot,

    },
}