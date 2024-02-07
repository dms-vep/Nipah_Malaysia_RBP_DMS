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
        entropy_file="results/entropy/entropy.csv",
        e2_distances_file="results/distances/2vsm_distances.csv",
    output:
        nb="results/notebooks/nipah_RBP_entry_analysis.ipynb",
        filtered_E2_data="results/filtered_data/E2_entry_filtered.csv",
        filtered_E3_data="results/filtered_data/E3_entry_filtered.csv",
        E2_entry_heatmap="results/images/E2_entry_heatmap.html",
        E3_entry_heatmap="results/images/E3_entry_heatmap.html",
        contact_type_plot='results/images/contact_type_plot.html',
        E2_E3_entry_corr_plot="results/images/E2_E3_entry_corr_plot.html",
        E2_E3_entry_all_muts_plot="results/images/E2_E3_entry_all_muts_plot.html",
        entry_boxplot_E2_plot="results/images/E2_entry_boxplot.html",
        entry_boxplot_E3_plot="results/images/E3_entry_boxplot.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "func_scores_E2_file": input.func_scores_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "e2_distances_file": input.e2_distances_file,
                "contact_type_plot": output.contact_type_plot,
                "filtered_E2_data": output.filtered_E2_data,
                "filtered_E3_data": output.filtered_E3_data,
                "E2_entry_heatmap": output.E2_entry_heatmap,
                "E3_entry_heatmap": output.E3_entry_heatmap,
                "E2_E3_entry_corr_plot": output.E2_E3_entry_corr_plot,
                "E2_E3_entry_all_muts_plot": output.E2_E3_entry_all_muts_plot,
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "entropy_file": input.entropy_file,
                "entry_boxplot_E2_plot": output.entry_boxplot_E2_plot,
                "entry_boxplot_E3_plot": output.entry_boxplot_E3_plot,
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
        entropy_file="results/entropy/entropy.csv",
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
                "entropy_file": input.entropy_file,
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

rule lib_lib_correlations:
    """Analyze correlations between libraries"""
    input:
        nb="notebooks/library_correlations.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
        codon_variants_file="results/variants/codon_variants.csv"
    output:
        nb="results/notebooks/library_correlations.ipynb",
        CHO_corr_plot_save="results/images/CHO_corr_plot_save.html",
        CHO_EFNB2_indiv_plot_save="results/images/CHO_EFNB2_all_corrs.html",
        CHO_EFNB3_indiv_plot_save="results/images/CHO_EFNB3_all_corrs.html",
        histogram_plot="results/images/variants_histogram.html",

    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "codon_variants_file": input.codon_variants_file,
                "CHO_corr_plot_save": output.CHO_corr_plot_save,
                "CHO_EFNB2_indiv_plot_save": output.CHO_EFNB2_indiv_plot_save,
                "CHO_EFNB3_indiv_plot_save": output.CHO_EFNB3_indiv_plot_save,
                "histogram_plot": output.histogram_plot,
            }
        ),
    log:
        log="results/logs/lib_correlations.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule ephrin_alignment:
    """Plot alignment of bat and human ephrin-b2 and -b3"""
    input:
        ephrin_alignment_file="data/custom_analyses_data/alignments/E2_E3_sequences.fasta",
        nb="notebooks/ephrin_alignment.ipynb",
    output:
        nb="results/notebooks/ephrin_alignment.ipynb",
        ephrin_alignment_plot="results/images/svg/ephrin_alignment.svg",

    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "ephrin_alignment_file": input.ephrin_alignment_file,
                "ephrin_alignment_plot": output.ephrin_alignment_plot,
            }
        ),
    log:
        log="results/logs/ephrin_alignment.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule henipavirus_entropy:
    """Analyze henipavirus entropy and nipah polymorphisms"""
    input:
        nb="notebooks/henipavirus_conservation.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
        e2_binding="results/receptor_affinity/averages/EFNB2_monomeric_mut_effect.csv",
        e2_entry="results/func_effects/averages/CHO_EFNB2_low_func_effects.csv",
        e3_binding="results/receptor_affinity/averages/EFNB3_dimeric_mut_effect.csv",
        e3_entry="results/func_effects/averages/CHO_EFNB3_low_func_effects.csv",
        nipah_alignment="data/custom_analyses_data/alignments/Nipah_RBP_alignment_240111.fasta",
    output:
        nb="results/notebooks/henipavirus_conservation.ipynb",
        entropy_output="results/entropy/entropy.csv",
        entry_scores_niv_poly="results/images/niv_polymorphic_entry.html",
        binding_scores_niv_poly="results/images/niv_polymorphic_binding.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "e2_binding": input.e2_binding,
                "e2_entry": input.e2_entry,
                "e3_binding": input.e3_binding,
                "e3_entry": input.e3_entry,
                "nipah_alignment": input.nipah_alignment,
                "entropy_output": output.entropy_output,
                "entry_scores_niv_poly": output.entry_scores_niv_poly,
                "binding_scores_niv_poly": output.binding_scores_niv_poly,
            }
        ),
    log:
        log="results/logs/henipavirus_entropy.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule receptor_distances:
    """calculate how far receptor residues are from RBP amino acids"""
    input:
        nb="notebooks/receptor_distance.ipynb",
        e2_pdb="data/custom_analyses_data/crystal_structures/2vsm.pdb",
        e3_pdb="data/custom_analyses_data/crystal_structures/3d12.pdb",
        rbp_pdb="data/custom_analyses_data/crystal_structures/7txz.pdb",
    output:
        nb="results/notebooks/receptor_distance.ipynb",
        ephrin_b2_close_residues="results/distances/2vsm_close_residues.csv",
        ephrin_b3_close_residues="results/distances/3d12_close_residues.csv",
        ephrin_b2_distance="results/distances/2vsm_distances.csv",
        ephrin_b3_distance="results/distances/3d12_distances.csv",
        dimerization_distance="results/distances/7txz_distances.csv",

    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "e2_pdb": input.e2_pdb,
                "e3_pdb": input.e3_pdb,
                "rbp_pdb": input.rbp_pdb,
                "ephrin_b2_close_residues": output.ephrin_b2_close_residues,
                "ephrin_b3_close_residues": output.ephrin_b3_close_residues,
                "ephrin_b2_distance": output.ephrin_b2_distance,
                "ephrin_b3_distance": output.ephrin_b3_distance,
                "dimerization_distance": output.dimerization_distance
            }
        ),
    log:
        log="results/logs/receptor_distance.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"


rule make_files_for_mapping_structure:
    """calculate site level statistics for mapping in ChimeraX"""
    input:
        nb="notebooks/mapping_site_level.ipynb",
        E2_func_infile="results/filtered_data/E2_entry_filtered.csv",
        E2_binding_infile="results/filtered_data/E2_binding_filtered.csv",
        E3_func_infile="results/filtered_data/E3_entry_filtered.csv",
        E3_binding_infile="results/filtered_data/E3_binding_filtered.csv",
    output:
        nb="results/notebooks/mapping_site_level.ipynb",
        E2_func_output="results/parsed_mapping_data/E2_entry_parsed.csv",
        E2_binding_output="results/parsed_mapping_data/E2_binding_parsed.csv",
        E3_func_output="results/parsed_mapping_data/E3_entry_parsed.csv",
        E3_binding_output="results/parsed_mapping_data/E3_binding_parsed.csv",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "E2_func_infile": input.E2_func_infile,
                "E2_binding_infile": input.E2_binding_infile,
                "E2_func_output": output.E2_func_output,
                "E2_binding_output": output.E2_binding_output,
                
                "E3_func_infile": input.E3_func_infile,
                "E3_binding_infile": input.E3_binding_infile,
                "E3_func_output": output.E3_func_output,
                "E3_binding_output": output.E3_binding_output,
            }
        ),
    log:
        log="results/logs/func_effects_mapping.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule analyze_mab_neuts:
    """Make neut curve figures and estimate IC50 of mAbs"""
    input:
        nb="notebooks/mab_neut_ic50.ipynb",
        altair_config="data/custom_analyses_data/theme.py",
        mab_neuts="data/custom_analyses_data/experimental_data/231220_mAb_all_redo.csv",
    output:
        nb="results/notebooks/mab_neut_ic50.ipynb",
        mab_neuts_plot="results/images/mab_neuts_plot.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "altair_config": input.altair_config,
                "mab_neuts": input.mab_neuts,
                "mab_neuts_plot": output.mab_neuts_plot,
            }
        ),
    log:
        log="results/logs/mab_neut_ic50.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule make_RBP_alignment:
    """Make alignment of henipavirus RBPs"""
    input:
        nb="notebooks/henipavirus_RBP_alignment.ipynb",
        fasta_input_file="results/alignments/temp_sequences.fasta",
    output:
        nb="results/notebooks/henipavirus_RBP_alignment.ipynb",
        henipavirus_alignment="results/images/henipavirus_RBP_alignment.png",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "fasta_input_file": input.fasta_input_file,
                "henipavirus_alignment": output.henipavirus_alignment,
            }
        ),
    log:
        log="results/logs/henipavirus_alignment.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"


rule filter_mabs_make_logo:
    """Filter escape data and make logo plots"""
    input:
        nb="notebooks/escape_filter_logo.ipynb",
        nipah_config="nipah_config.yaml",
        HENV103_file="results/antibody_escape/averages/HENV103_mut_effect.csv",
        HENV117_file="results/antibody_escape/averages/HENV117_mut_effect.csv",
        HENV26_file="results/antibody_escape/averages/HENV26_mut_effect.csv",
        HENV32_file="results/antibody_escape/averages/HENV32_mut_effect.csv",
        m102_file="results/antibody_escape/averages/m102.4_mut_effect.csv",
        nAH1_file="results/antibody_escape/averages/nAH1.3_mut_effect.csv",
    output:
        nb="results/notebooks/escape_filter_logo.ipynb",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "HENV103_file": input.HENV103_file,
                "HENV117_file": input.HENV117_file,
                "HENV26_file": input.HENV26_file,
                "HENV32_file": input.HENV32_file,
                "m102_file": input.m102_file,
                "nAH1_file": input.nAH1_file,
            }
        ),
    log:
        log="results/logs/escape_filter_logo.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule analyze_escape_data:
    """Analyze_escape_data"""
    input:
        nb="notebooks/analyze_escape_data.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
        HENV103_filter="results/filtered_data/HENV103_escape_filtered.csv",
        HENV117_filter="results/filtered_data/HENV117_escape_filtered.csv",
        HENV26_filter="results/filtered_data/HENV26_escape_filtered.csv",
        HENV32_filter="results/filtered_data/HENV32_escape_filtered.csv",
        m102_filter="results/filtered_data/m102_escape_filtered.csv",
        nAH1_filter="results/filtered_data/nAH1_escape_filtered.csv",
    output:
        nb="results/notebooks/analyze_escape_data.ipynb",
        escape_bubble_plot="results/images/escape_bubble_plot.html",
        bubble_1_mut_plot="results/images/escape_bubble_1_mut_plot.html",
        overlap_escape_plot="results/images/overlap_escape_plot.html",
        mab_line_escape_plot="results/images/mab_line_escape_plot.html",
        mab_plot_top="results/images/mab_plot_top.html",
        mab_plot_all="results/images/mab_plot_all.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "HENV103_filter": input.HENV103_filter,
                "HENV117_filter": input.HENV117_filter,
                "HENV26_filter": input.HENV26_filter,
                "HENV32_filter": input.HENV32_filter,
                "m102_filter": input.m102_filter,
                "nAH1_filter": input.nAH1_filter,
                "escape_bubble_plot": output.escape_bubble_plot,
                "bubble_1_mut_plot": output.bubble_1_mut_plot,
                "overlap_escape_plot": output.overlap_escape_plot,
                "mab_line_escape_plot": output.mab_line_escape_plot,
                "mab_plot_top": output.mab_plot_top,
                "mab_plot_all": output.mab_plot_all,
            }
        ),
    log:
        log="results/logs/analyze_escape_data.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

docs["Additional files and charts"] = {
    "Cell Entry": {
        "Cell Entry Analysis Notebook": rules.analyze_nipah_RBP_entry.output.nb,
        "Interactive Plot of Entry Scores for Contact Sites": rules.analyze_nipah_RBP_entry.output.contact_type_plot,
        "Entry Heatmaps": {
            "EFNB2 Entry Heatmap": rules.analyze_nipah_RBP_entry.output.E2_entry_heatmap,
            "EFNB3 Entry Heatmap": rules.analyze_nipah_RBP_entry.output.E3_entry_heatmap,
        },
        "Plots of Entry Scores by RBP Region": {
            "EFNB2 Entry by Region": rules.analyze_nipah_RBP_entry.output.entry_boxplot_E2_plot,
            "EFNB3 Entry by Region": rules.analyze_nipah_RBP_entry.output.entry_boxplot_E3_plot,
        },
        "Interactive Plots of Entry Score Correlations": {
            "Aggregate CHO-EFNB2/EFNB3 entry correlation": rules.analyze_nipah_RBP_entry.output.E2_E3_entry_corr_plot,
            "All Mutant CHO-EFNB2/EFNB3 entry correlation": rules.analyze_nipah_RBP_entry.output.E2_E3_entry_all_muts_plot,
        },
        "Filtered Entry CSVs": {
            "EFNB2 entry filtered csv": rules.analyze_nipah_RBP_entry.output.filtered_E2_data,
            "EFNB3 entry filtered csv": rules.analyze_nipah_RBP_entry.output.filtered_E3_data,
        },
        "Cell Entry Validation Notebook": rules.cell_entry_validations.output.nb,
        "Cell Entry Validation Plots": {
            "Cell entry validation in CHO-EFNB2 cells": rules.cell_entry_validations.output.func_score_E2_plot,
            "Cell entry validation in CHO-EFNB3 cells": rules.cell_entry_validations.output.func_score_E3_plot,
        },
    },
    "Ephrin Binding": {
        "EFNB2 and EFNB3 binding notebook": rules.analyze_nipah_RBP_binding.output.nb,
        "Binding vs Entry Plots": {
            "EFNB2 Binding Vs Entry Post Filter": rules.analyze_nipah_RBP_binding.output.E2_binding_entry,
            "EFNB3 Binding Vs Entry Post Filter": rules.analyze_nipah_RBP_binding.output.E3_binding_entry,
        },
        "Ephrin Binding Heatmaps": {
            "EFNB2 Binding Heatmap": rules.analyze_nipah_RBP_binding.output.E2_binding_heatmap,
            "EFNB3 Binding Heatmap": rules.analyze_nipah_RBP_binding.output.E3_binding_heatmap,
        },
        "Filtered Binding CSVs": {
            "Filtered EFNB2 Binding CSV": rules.analyze_nipah_RBP_binding.output.filtered_E2_binding_data,
            "Filtered EFNB3 Binding CSV": rules.analyze_nipah_RBP_binding.output.filtered_E3_binding_data,
        },
        "Interactive Plot of EFNB2 and EFNB3 Binding Correlations": rules.analyze_nipah_RBP_binding.output.E2_E3_correlation,
        "Interactive Plot of EFNB2 and EFNB3 Site Level Binding Correlations": rules.analyze_nipah_RBP_binding.output.E2_E3_correlation_site,
        "Ephrin neutralization notebook": rules.ephrin_neuts.output.nb,
        "Ephrin neutralization curve plot": rules.ephrin_neuts.output.ephrin_curve_plot,
        "Ephrin Binding Validation Neut Curves Plots": {
            "EphrinB2-monomeric single mutant neuts": rules.ephrin_neuts.output.e2_curve_plot,
            "EphrinB3-dimeric single mutant neuts": rules.ephrin_neuts.output.e3_curve_plot,
        },
        "Ephrin Binding Validation Correlation Plots": {
            "EphrinB2-monomeric neutralization correlation plot": rules.ephrin_neuts.output.e2_corr_plot,
            "EphrinB3-dimeric neutralization correlation plot": rules.ephrin_neuts.output.e3_corr_plot,
        },
    },
    "Antibody Escape": {
        "Antibody Escape Filtering and Logo Plot Notebook": rules.filter_mabs_make_logo.output.nb,
        "Antibody Escape Analysis Notebook": rules.analyze_escape_data.output.nb,
        "Neutralization Curves For All Six mAbs Notebook": rules.analyze_mab_neuts.output.nb,
        "Neutralization Curves Plot": rules.analyze_mab_neuts.output.mab_neuts_plot,
        "Antibody validation notebook": rules.analyze_mab_validation_data.output.nb,
        "Antibody validation plot (IC50 vs DMS)": rules.analyze_mab_validation_data.output.IC50_validation_plot,
        "Interactive Plots of Escape Data": {
            "Top Escape Mutants Versus Entry": rules.analyze_escape_data.output.escape_bubble_plot,
            "Top Escape Mutants Versus Entry-One Mutation Away": rules.analyze_escape_data.output.bubble_1_mut_plot,
            "Shared Escape Mutations Between Antibodies": rules.analyze_escape_data.output.overlap_escape_plot,
            "Summed Escape by Site": rules.analyze_escape_data.output.mab_line_escape_plot,
        },
        "Interactive Heatmaps of Escape Data": {
            "Top Escape Sites": rules.analyze_escape_data.output.mab_plot_top,
            "All Sites": rules.analyze_escape_data.output.mab_plot_all,
        },
    },
    "Library Correlations and Stats": {
        "Library Correlations Notebook": rules.lib_lib_correlations.output.nb,
        "Interactive Plot of Library Correlations": rules.lib_lib_correlations.output.CHO_corr_plot_save,
        "Plots of all cell entry score correlations": {
            "Indiv. CHO-EFNB2 cell entry selections": rules.lib_lib_correlations.output.CHO_EFNB2_indiv_plot_save,
            "Indiv. CHO-EFNB3 cell entry selections": rules.lib_lib_correlations.output.CHO_EFNB3_indiv_plot_save,
        },
        "Variants histogram": rules.lib_lib_correlations.output.histogram_plot,
    },
    "Miscellaneous": {
        "Bat and Human Ephrin alignment notebook": rules.ephrin_alignment.output.nb,
        "Henipavirus RBP alignment notebook": rules.make_RBP_alignment.output.nb,
        "Henipavirus entropy notebook": rules.henipavirus_entropy.output.nb,
        "Henipavirus entropy CSV": rules.henipavirus_entropy.output.entropy_output,
        "Receptor Distances Notebook": rules.receptor_distances.output.nb,
        "Amino Acid Distances CSVs": {
            "Ephrin-B2 residues within 4 csv": rules.receptor_distances.output.ephrin_b2_close_residues,
            "Ephrin-B3 residues within 4 csv": rules.receptor_distances.output.ephrin_b3_close_residues,
            "RBP and Ephrin-B2 residue distances csv": rules.receptor_distances.output.ephrin_b2_distance,
            "RBP and Ephrin-B3 residue distances csv": rules.receptor_distances.output.ephrin_b3_distance,
            "RBP dimerization residue distance csv": rules.receptor_distances.output.dimerization_distance,
        },
        "Notebook for mapping filtered scores onto crystal structures": rules.make_files_for_mapping_structure.output.nb,
        "Nipah polymorphic sites cell entry plot": rules.henipavirus_entropy.output.entry_scores_niv_poly,
        "Nipah polymorphic sites binding plot": rules.henipavirus_entropy.output.binding_scores_niv_poly,
    },
}