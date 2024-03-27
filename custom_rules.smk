"""Custom rules used in the ``snakemake`` pipeline.

This file is included by the pipeline ``Snakefile``.

"""

rule analyze_nipah_RBP_entry:
    """Analyze CHO-bEFNB2 and CHO-bEFNB3 entry"""
    input:
        nb="notebooks/nipah_RBP_entry_analysis.ipynb",
        altair_config="data/custom_analyses_data/theme.py",
        nipah_config="nipah_config.yaml",

        func_scores_E2_file="results/filtered_data/entry/e2_entry_filtered.csv",
        func_scores_E3_file="results/filtered_data/entry/e3_entry_filtered.csv",
        concat_df_file="results/filtered_data/entry/e2_e3_entry_filter_concat.csv",
        merged_df_file="results/filtered_data/entry/e2_e3_entry_filter_merged.csv",
        e2_distances_file="results/distances/2vsm_distances.csv",
        surface="data/custom_analyses_data/surface_exposure.csv",
    output:
        nb="results/notebooks/nipah_RBP_entry_analysis.ipynb",
        E2_E3_entry_corr_plot="results/images/E2_E3_entry_corr_plot.html",
        E2_E3_entry_all_muts_plot="results/images/E2_E3_entry_all_muts_plot.html",
        entry_region_boxplot_plot="results/images/entry_region_boxplot_plot.html",
        combined_region_barplot_output="results/images/combined_region_barplot_output.html",

    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "func_scores_E2_file": input.func_scores_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "e2_distances_file": input.e2_distances_file,
                "merged_df_file": input.merged_df_file,
                "concat_df_file": input.concat_df_file,
                "E2_E3_entry_corr_plot": output.E2_E3_entry_corr_plot,
                "E2_E3_entry_all_muts_plot": output.E2_E3_entry_all_muts_plot,
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "entry_region_boxplot_plot": output.entry_region_boxplot_plot,
                "surface": input.surface,
                "combined_region_barplot_output": output.combined_region_barplot_output,
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
        binding_E2_file="results/filtered_data/binding/e2_binding_filtered.csv",
        binding_E3_file="results/filtered_data/binding/e3_binding_filtered.csv",
        nb="notebooks/ephrin_binding.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/ephrin_binding.ipynb",
        entry_binding_combined_corr_plot="results/images/entry_binding_combined_corr_plot.html",
        entry_binding_combined_corr_plot_agg="results/images/entry_binding_combined_corr_plot_agg.html",
        E2_E3_correlation="results/images/E2_E3_correlation.html",
        E2_E3_correlation_site="results/images/E2_E3_correlation_site.html",
        binding_by_site_plot="results/images/binding_by_site_plot.html",
        entry_binding_corr_heatmap="results/images/entry_binding_corr_heatmap.html",
        binding_corr_heatmap="results/images/binding_corr_heatmap.html",
        binding_region_bubble_plot="results/images/binding_region_bubble_plot.html",
        combined_contact_ranked_bar_output='results/images/combined_contact_ranked_bar_output.html',
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "binding_E2_file": input.binding_E2_file,
                "binding_E3_file": input.binding_E3_file,
                "entry_binding_combined_corr_plot": output.entry_binding_combined_corr_plot,
                "entry_binding_combined_corr_plot_agg": output.entry_binding_combined_corr_plot_agg,
                "E2_E3_correlation": output.E2_E3_correlation,
                "E2_E3_correlation_site": output.E2_E3_correlation_site,
                "binding_by_site_plot": output.binding_by_site_plot,
                "entry_binding_corr_heatmap": output.entry_binding_corr_heatmap,
                "binding_corr_heatmap": output.binding_corr_heatmap,
                "binding_region_bubble_plot": output.binding_region_bubble_plot,
                "combined_contact_ranked_bar_output": output.combined_contact_ranked_bar_output,
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
        neut="data/custom_analyses_data/experimental_data/nAH1_3_mab_validation_neuts.csv",
        escape_file="results/antibody_escape/averages/nAH1.3_mut_effect.csv",
        nb="notebooks/IC50_validations.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/mab_validation.ipynb",
        nah1_validation_neut_curves="results/images/nah1_validation_neut_curves.html",
        IC50_validation_plot="results/images/IC50_validation_plot.html",
        combined_ic50_neut_curve_plot="results/images/combined_ic50_neut_curve_plot.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "neut": input.neut,
                "escape_file": input.escape_file,
                "nah1_validation_neut_curves": output.nah1_validation_neut_curves,
                "IC50_validation_plot": output.IC50_validation_plot,
                "combined_ic50_neut_curve_plot": output.combined_ic50_neut_curve_plot,
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
        func_scores_E2_file="results/func_effects/averages/CHO_bEFNB2_func_effects.csv",
        func_scores_E3_file="results/func_effects/averages/CHO_bEFNB3_func_effects.csv",
        nb="notebooks/cell_entry_validations.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/theme.py",
    output:
        nb="results/notebooks/cell_entry_validations.ipynb",
        func_score_E2_plot="results/images/func_score_E2_validation.html",
        func_score_E3_plot="results/images/func_score_E3_validation.html",
        corr_plots_combined="results/images/corr_plots_combined.html",
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
                "corr_plots_combined": output.corr_plots_combined,
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
        ephrin_binding_neuts_file="data/custom_analyses_data/experimental_data/bat_ephrin_neuts.csv",
        ephrin_validation_curves="data/custom_analyses_data/experimental_data/binding_single_mutant_validations.csv",
        validation_ic50s_file="data/custom_analyses_data/experimental_data/receptor_IC_validations.csv",
        e2_monomeric_binding_file="results/receptor_affinity/averages/bEFNB2_monomeric_mut_effect.csv",
        e3_dimeric_binding_file="results/receptor_affinity/averages/bEFNB3_dimeric_mut_effect.csv",
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
        EFNB2_neut_corr="results/images/EFNB2_neut_corr.html",
        EFNB3_neut_corr="results/images/EFNB3_neut_corr.html",
        all_ephrin_neut_plots='results/images/all_ephrin_neut_plots.html',


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
                "EFNB2_neut_corr": output.EFNB2_neut_corr,
                "EFNB3_neut_corr": output.EFNB3_neut_corr,
                "all_ephrin_neut_plots": output.all_ephrin_neut_plots,
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
        entry_binding_corr_heatmap_plot="results/images/entry_binding_corr_heatmap_plot.html",
        CHO_EFNB2_indiv_plot_save="results/images/CHO_EFNB2_all_corrs.html",
        CHO_EFNB3_indiv_plot_save="results/images/CHO_EFNB3_all_corrs.html",
        histogram_plot="results/images/variants_histogram.html",
        uniq_barcodes_per_lib_df="results/tables/uniq_barcodes_per_lib_df.csv",

    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "codon_variants_file": input.codon_variants_file,
                "CHO_corr_plot_save": output.CHO_corr_plot_save,
                "entry_binding_corr_heatmap_plot": output.entry_binding_corr_heatmap_plot,
                "CHO_EFNB2_indiv_plot_save": output.CHO_EFNB2_indiv_plot_save,
                "CHO_EFNB3_indiv_plot_save": output.CHO_EFNB3_indiv_plot_save,
                "histogram_plot": output.histogram_plot,
                "uniq_barcodes_per_lib_df": output.uniq_barcodes_per_lib_df,
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
        ephrin_alignment_file="data/custom_analyses_data/alignments/ephrin_E2_E3_sequences.fasta",
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
        nipah_alignment="data/custom_analyses_data/alignments/Nipah_RBP_AA_align.fasta",
    output:
        nb="results/notebooks/henipavirus_conservation.ipynb",
        entropy_output="results/entropy/entropy.csv",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "nipah_alignment": input.nipah_alignment,
                "entropy_output": output.entropy_output,
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
        E2_func_infile="results/filtered_data/entry/e2_entry_filtered.csv",
        E2_binding_infile="results/filtered_data/binding/e2_binding_filtered.csv",
        E3_func_infile="results/filtered_data/entry/e3_entry_filtered.csv",
        E3_binding_infile="results/filtered_data/binding/e3_binding_filtered.csv",
        HENV26_infile='results/filtered_data/escape/HENV26_escape_filtered.csv',
        HENV32_infile='results/filtered_data/escape/HENV32_escape_filtered.csv',
        HENV103_infile='results/filtered_data/escape/HENV103_escape_filtered.csv',
        HENV117_infile='results/filtered_data/escape/HENV117_escape_filtered.csv',
        m1024_infile='results/filtered_data/escape/m102_escape_filtered.csv',
        nAH13_infile='results/filtered_data/escape/nAH1_escape_filtered.csv',
    output:
        nb="results/notebooks/mapping_site_level.ipynb",
        E2_func_output="results/parsed_mapping_data/E2_entry_mean.csv",
        E2_binding_output="results/parsed_mapping_data/E2_binding_mean.csv",
        E3_func_output="results/parsed_mapping_data/E3_entry_mean.csv",
        E3_binding_output="results/parsed_mapping_data/E3_binding_mean.csv",
        HENV26_output='results/parsed_mapping_data/HENV26_escape_mean.csv',
        HENV32_output='results/parsed_mapping_data/HENV32_escape_mean.csv',
        HENV103_output='results/parsed_mapping_data/HENV103_escape_mean.csv',
        HENV117_output='results/parsed_mapping_data/HENV117_escape_mean.csv',
        m1024_output='results/parsed_mapping_data/m102_escape_mean.csv',
        nAH13_output='results/parsed_mapping_data/nAH1_escape_mean.csv',

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

                "HENV26_infile": input.HENV26_infile,
                "HENV32_infile": input.HENV32_infile,
                "HENV103_infile": input.HENV103_infile,
                "HENV117_infile": input.HENV117_infile,
                "m1024_infile": input.m1024_infile,
                "nAH13_infile": input.nAH13_infile,

                "HENV26_output": output.HENV26_output,
                "HENV32_output": output.HENV32_output,
                "HENV103_output": output.HENV103_output,
                "HENV117_output": output.HENV117_output,
                "m1024_output": output.m1024_output,
                "nAH13_output": output.nAH13_output,

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
        nipah_config="nipah_config.yaml",
        mab_neuts="data/custom_analyses_data/experimental_data/NiV_neut_all_mabs.csv",
    output:
        nb="results/notebooks/mab_neut_ic50.ipynb",
        mab_neuts_plot="results/images/mab_neuts_plot.html",
        mAb_neuts_table="results/tables/mAb_neuts_table.csv",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "altair_config": input.altair_config,
                "nipah_config": input.nipah_config,
                "mab_neuts": input.mab_neuts,
                "mab_neuts_plot": output.mab_neuts_plot,
                "mAb_neuts_table": output.mAb_neuts_table,
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


rule filter_data:
    """Filter data"""
    input:
        nb="notebooks/filter_data.ipynb",
        nipah_config="nipah_config.yaml",
        
        HENV103_file="results/antibody_escape/averages/HENV103_mut_effect.csv",
        HENV117_file="results/antibody_escape/averages/HENV117_mut_effect.csv",
        HENV26_file="results/antibody_escape/averages/HENV26_mut_effect.csv",
        HENV32_file="results/antibody_escape/averages/HENV32_mut_effect.csv",
        m102_file="results/antibody_escape/averages/m102.4_mut_effect.csv",
        nAH1_file="results/antibody_escape/averages/nAH1.3_mut_effect.csv",
        
        e2_entry_file = 'results/func_effects/averages/CHO_bEFNB2_func_effects.csv',
        e3_entry_file = 'results/func_effects/averages/CHO_bEFNB3_func_effects.csv',

        e2_binding_file = 'results/receptor_affinity/averages/bEFNB2_monomeric_mut_effect.csv',
        e3_binding_file = 'results/receptor_affinity/averages/bEFNB3_dimeric_mut_effect.csv'
    output:
        nb="results/notebooks/filter_data.ipynb",

        e2_entry_filtered = 'results/filtered_data/entry/e2_entry_filtered.csv',
        e3_entry_filtered = 'results/filtered_data/entry/e3_entry_filtered.csv',
        entry_filter_merged = 'results/filtered_data/entry/e2_e3_entry_filter_merged.csv',
        entry_filter_concat = 'results/filtered_data/entry/e2_e3_entry_filter_concat.csv',

        e2_binding_filtered = 'results/filtered_data/binding/e2_binding_filtered.csv',
        e3_binding_filtered = 'results/filtered_data/binding/e3_binding_filtered.csv',
        e2_low_binding_effect_filter = 'results/filtered_data/binding/e2_low_binding_effect_filter.csv',
        e3_low_binding_effect_filter = 'results/filtered_data/binding/e3_low_binding_effect_filter.csv',
            
        HENV103_filtered_path="results/filtered_data/escape/HENV103_escape_filtered.csv",
        HENV117_filtered_path="results/filtered_data/escape/HENV117_escape_filtered.csv",
        HENV26_filtered_path="results/filtered_data/escape/HENV26_escape_filtered.csv",
        m102_filtered_path="results/filtered_data/escape/m102_escape_filtered.csv",
        HENV32_filtered_path="results/filtered_data/escape/HENV32_escape_filtered.csv",
        nAH1_filtered_path="results/filtered_data/escape/nAH1_escape_filtered.csv",
        mab_filter_concat_file = 'results/filtered_data/escape/mab_filter_concat.csv',
        e3_low_mab_effect_filter = 'results/filtered_data/escape/e3_low_mab_effect_filter.csv'

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
                "e2_entry_file": input.e2_entry_file,
                "e3_entry_file": input.e3_entry_file,
                "e2_binding_file": input.e2_binding_file,
                "e3_binding_file": input.e3_binding_file,
                "e2_entry_filtered": output.e2_entry_filtered,
                "e3_entry_filtered": output.e3_entry_filtered,
                "entry_filter_merged": output.entry_filter_merged,
                "entry_filter_concat": output.entry_filter_concat,
                "e2_binding_filtered": output.e2_binding_filtered,
                "e3_binding_filtered": output.e3_binding_filtered,
                "e2_low_binding_effect_filter": output.e2_low_binding_effect_filter,
                "e3_low_binding_effect_filter": output.e3_low_binding_effect_filter,
                "HENV103_filtered_path": output.HENV103_filtered_path,
                "HENV117_filtered_path": output.HENV117_filtered_path,
                "HENV26_filtered_path": output.HENV26_filtered_path,
                "HENV32_filtered_path": output.HENV32_filtered_path,
                "m102_filtered_path": output.m102_filtered_path,
                "nAH1_filtered_path": output.nAH1_filtered_path,
                "e3_low_mab_effect_filter": output.e3_low_mab_effect_filter,
                "mab_filter_concat_file": output.mab_filter_concat_file,
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
        HENV103_filter="results/filtered_data/escape/HENV103_escape_filtered.csv",
        HENV117_filter="results/filtered_data/escape/HENV117_escape_filtered.csv",
        HENV26_filter="results/filtered_data/escape/HENV26_escape_filtered.csv",
        HENV32_filter="results/filtered_data/escape/HENV32_escape_filtered.csv",
        m102_filter="results/filtered_data/escape/m102_escape_filtered.csv",
        nAH1_filter="results/filtered_data/escape/nAH1_escape_filtered.csv",
        func_scores_low_effect_E3_file = "results/filtered_data/escape/e3_low_mab_effect_filter.csv",
        concat_df_file = "results/filtered_data/escape/mab_filter_concat.csv",
        binding_data="results/filtered_data/binding/e2_binding_filtered.csv",
    output:
        nb="results/notebooks/analyze_escape_data.ipynb",
        escape_bubble_plot="results/images/escape_bubble_plot.html",
        overlap_escape_plot="results/images/overlap_escape_plot.html",
        mab_line_escape_plot="results/images/mab_line_escape_plot.html",
        mab_plot_top="results/images/mab_plot_top.html",
        mab_plot_all="results/images/mab_plot_all.html",
        aggregate_mab_and_binding="results/images/aggregate_mab_and_binding.html",
        combined_evol_sites_escape="results/images/combined_evol_sites_escape.html",
        aggregate_mab_and_niv_polymorphism='results/images/aggregate_mab_and_niv_polymorphism.html'
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
                "func_scores_low_effect_E3_file": input.func_scores_low_effect_E3_file,
                "concat_df_file": input.concat_df_file,

                "binding_data": input.binding_data,
                "escape_bubble_plot": output.escape_bubble_plot,
                #"bubble_1_mut_plot": output.bubble_1_mut_plot,
                "overlap_escape_plot": output.overlap_escape_plot,
                "mab_line_escape_plot": output.mab_line_escape_plot,
                "mab_plot_top": output.mab_plot_top,
                "mab_plot_all": output.mab_plot_all,
                "aggregate_mab_and_binding": output.aggregate_mab_and_binding,
                #"binding_vs_escape": output.binding_vs_escape,
                "combined_evol_sites_escape": output.combined_evol_sites_escape,
                "aggregate_mab_and_niv_polymorphism": output.aggregate_mab_and_niv_polymorphism,
            }
        ),
    log:
        log="results/logs/analyze_escape_data.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule make_heatmaps:
    """Make Entry and Binding heatmaps"""
    input:
        nb="notebooks/plot_heatmaps.ipynb",
        nipah_config="nipah_config.yaml",
        altair_config="data/custom_analyses_data/heatmap_theme.py",
        entropy_file="results/entropy/entropy.csv",
        func_scores_E2_file="results/filtered_data/entry/e2_entry_filtered.csv",
        func_scores_E3_file="results/filtered_data/entry/e3_entry_filtered.csv",
        binding_E2_file="results/filtered_data/binding/e2_binding_filtered.csv",
        binding_E3_file="results/filtered_data/binding/e3_binding_filtered.csv",
        e2_low_func_file="results/filtered_data/binding/e2_low_binding_effect_filter.csv",
        e3_low_func_file="results/filtered_data/binding/e3_low_binding_effect_filter.csv",
        
    output:
        nb="results/notebooks/plot_heatmaps.ipynb",
        E2_binding_heatmap="results/images/E2_binding_heatmap.html",
        E3_binding_heatmap="results/images/E3_binding_heatmap.html",
        E2_entry_heatmap="results/images/E2_entry_heatmap.html",
        E3_entry_heatmap="results/images/E3_entry_heatmap.html",
        combined_entry_binding_contact="results/images/combined_entry_binding_contact_heatmaps.html",
        
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "nipah_config": input.nipah_config,
                "altair_config": input.altair_config,
                "entropy_file": input.entropy_file,
                "func_scores_E2_file": input.func_scores_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "binding_E2_file": input.binding_E2_file,
                "binding_E3_file": input.binding_E3_file,
                "e2_low_func_file": input.e2_low_func_file,
                "e3_low_func_file": input.e3_low_func_file,
                "E2_binding_heatmap": output.E2_binding_heatmap,
                "E3_binding_heatmap": output.E3_binding_heatmap,
                "E2_entry_heatmap": output.E2_entry_heatmap,
                "E3_entry_heatmap": output.E3_entry_heatmap,
                "combined_entry_binding_contact": output.combined_entry_binding_contact,
                
            }
        ),
    log:
        log="results/logs/make_heatmaps.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"


rule get_tables:
    """Copy tables into images directory"""
    input:
        antibody_info="results/tables/antibody_neutralization_table.html",
        library_stats="results/tables/library_stats_table.html",
    output:
        antibody_info_table="results/images/antibody_neutralization_table.html",
        library_stats_table="results/images/library_stats_table.html",
    shell:
        """
        cp {input.antibody_info} {output.antibody_info_table}
        cp {input.library_stats} {output.library_stats_table}
        """

rule make_phylogeny:
    """Make Nipah Phylogeny"""
    input:
        nb="notebooks/make_nipah_phylogeny_baltic.ipynb",
        input_phylo="data/custom_analyses_data/alignments/phylo/nipah_whole_genome_phylo.tre",
    output:
        nb="results/notebooks/make_nipah_phylogeny_baltic.ipynb",
        output_img="results/images/nipah_phylogeny.pdf"
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "input_phylo": input.input_phylo,
                "output_img": output.output_img,
                
            }
        ),
    log:
        log="results/logs/make_phylo.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

rule interactive_figures:
    """Make pretty large interactive figures"""
    input:
        nb="notebooks/interactive_figures.ipynb",
        altair_config="data/custom_analyses_data/interactive_theme.py",
        nipah_config="nipah_config.yaml",
        func_scores_E2_file="results/filtered_data/entry/e2_entry_filtered.csv",
        binding_E2_file="results/filtered_data/binding/e2_binding_filtered.csv",
        func_scores_E3_file="results/filtered_data/entry/e3_entry_filtered.csv",
        binding_E3_file="results/filtered_data/binding/e3_binding_filtered.csv",
        merged_df_file="results/filtered_data/entry/e2_e3_entry_filter_merged.csv",
        concat_df_file="results/filtered_data/entry/e2_e3_entry_filter_concat.csv"
    output:
        nb="results/notebooks/interactive_figures.ipynb",
        output_corr="results/images/corr_heatmap.html",
        entry_binding_corr_plot_E2_output="results/images/entry_binding_corr_plot_E2.html",
        entry_binding_corr_plot_E3_output="results/images/entry_binding_corr_plot_E3.html",
        corr_entry_binding_large_output="results/images/corr_entry_binding_large.html",
        combined_binding_output="results/images/combined_binding.html",
        entry_by_site_plot_e2_output="results/images/entry_by_site_plot_e2.html",
        entry_by_site_plot_e3_output="results/images/entry_by_site_plot_e3.html",
        entry_by_site_plot_e2_bar_plot="results/images/entry_by_site_plot_e2_bar_plot.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "altair_config": input.altair_config,
                "nipah_config": input.nipah_config,
                "func_scores_E2_file": input.func_scores_E2_file,
                "binding_E2_file": input.binding_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "binding_E3_file": input.binding_E3_file,
                "merged_df_file": input.merged_df_file,
                "concat_df_file": input.concat_df_file,
                "output_corr": output.output_corr,
                "entry_binding_corr_plot_E2_output": output.entry_binding_corr_plot_E2_output,
                "entry_binding_corr_plot_E3_output": output.entry_binding_corr_plot_E3_output,
                "corr_entry_binding_large_output": output.corr_entry_binding_large_output,
                "combined_binding_output": output.combined_binding_output,
                "entry_by_site_plot_e2_output": output.entry_by_site_plot_e2_output,
                "entry_by_site_plot_e3_output": output.entry_by_site_plot_e3_output,
                "entry_by_site_plot_e2_bar_plot": output.entry_by_site_plot_e2_bar_plot,
                
            }
        ),
    log:
        log="results/logs/interactive.txt",
    conda:
        "environment.yml",
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"

docs["Additional files and charts"] = {
    "Cell Entry": {
        "Cell Entry Analysis Notebook": rules.analyze_nipah_RBP_entry.output.nb,
        "Ranked bar plots by region": rules.analyze_nipah_RBP_entry.output.combined_region_barplot_output,
        "Entry Heatmaps": {
            "EFNB2 Entry Heatmap": rules.make_heatmaps.output.E2_entry_heatmap,
            "EFNB3 Entry Heatmap": rules.make_heatmaps.output.E3_entry_heatmap,
        },
        "Plots of Entry Scores by RBP Region": rules.analyze_nipah_RBP_entry.output.entry_region_boxplot_plot,
        "Entry Correlations for CHO-bEFNB2 and CHO-bEFNB3": {
            "Aggregate CHO-EFNB2/EFNB3 entry correlation": rules.analyze_nipah_RBP_entry.output.E2_E3_entry_corr_plot,
            "All Mutant CHO-EFNB2/EFNB3 entry correlation": rules.analyze_nipah_RBP_entry.output.E2_E3_entry_all_muts_plot,
        },
        #"Filtered Entry CSVs": {
            #"EFNB2 entry filtered csv": rules.analyze_nipah_RBP_entry.output.filtered_E2_data,
            #"EFNB3 entry filtered csv": rules.analyze_nipah_RBP_entry.output.filtered_E3_data,
        #},
        "Cell Entry Validation Notebook": rules.cell_entry_validations.output.nb,
        "Cell Entry Validation Plots": {
            "Cell entry validation in CHO-EFNB2 cells": rules.cell_entry_validations.output.func_score_E2_plot,
            "Cell entry validation in CHO-EFNB3 cells": rules.cell_entry_validations.output.func_score_E3_plot,
            "Combined cell entry validation plots": rules.cell_entry_validations.output.corr_plots_combined,
        },
    },
    "Ephrin Binding": {
        "EFNB2 and EFNB3 binding notebook": rules.analyze_nipah_RBP_binding.output.nb,
        "Binding vs Entry Plots": {
            "Binding vs Entry for all mutants": rules.analyze_nipah_RBP_binding.output.entry_binding_combined_corr_plot,
            "Aggregated Binding vs Entry": rules.analyze_nipah_RBP_binding.output.entry_binding_combined_corr_plot_agg,
            "Binding vs Entry Heatmap": rules.analyze_nipah_RBP_binding.output.entry_binding_corr_heatmap,
        },
        "Ephrin Binding Heatmaps": {
            "EFNB2 Binding Heatmap": rules.make_heatmaps.output.E2_binding_heatmap,
            "EFNB3 Binding Heatmap": rules.make_heatmaps.output.E3_binding_heatmap,
        },
        "EFNB2 and EFNB3 Binding Correlations" : {
            "Interactive Plot of EFNB2 and EFNB3 Binding Correlations": rules.analyze_nipah_RBP_binding.output.E2_E3_correlation,
            "Interactive Plot of EFNB2 and EFNB3 Site Level Binding Correlations": rules.analyze_nipah_RBP_binding.output.E2_E3_correlation_site,
            "E2 and E3 binding correlations heatmap": rules.analyze_nipah_RBP_binding.output.binding_corr_heatmap,
        },
        
        "Interactive Plot of Median Binding by Site": rules.analyze_nipah_RBP_binding.output.binding_by_site_plot,
        "Bubbleplot of binding scores by region": rules.analyze_nipah_RBP_binding.output.binding_region_bubble_plot,
        "Contact ranked sites": rules.analyze_nipah_RBP_binding.output.combined_contact_ranked_bar_output,
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
        "Combined Neut and Correlation Neut Curves": {
            "EFNB2_neut_corr": rules.ephrin_neuts.output.EFNB2_neut_corr,
            "EFNB3_neut_corr": rules.ephrin_neuts.output.EFNB3_neut_corr,
            "Everything combined": rules.ephrin_neuts.output.all_ephrin_neut_plots,
        },
    },
    "Antibody Escape": {
        "Antibody Escape Analysis Notebook": rules.analyze_escape_data.output.nb,
        "Neutralization Curves For All Six mAbs Notebook": rules.analyze_mab_neuts.output.nb,
        "Neutralization Curves Plot": rules.analyze_mab_neuts.output.mab_neuts_plot,
        "Antibody Validations": {
            "Antibody validation notebook": rules.analyze_mab_validation_data.output.nb,
            "Antibody validation neut curves": rules.analyze_mab_validation_data.output.nah1_validation_neut_curves,
            "Antibody validation correlation plot (IC50 vs DMS)": rules.analyze_mab_validation_data.output.IC50_validation_plot,
            "Combined Neut Curve and IC50": rules.analyze_mab_validation_data.output.combined_ic50_neut_curve_plot,
        },
        "Interactive Plots of Escape Data": {
            "Top Escape Mutants Versus Entry": rules.analyze_escape_data.output.escape_bubble_plot,
            "Shared Escape Mutations Between Antibodies": rules.analyze_escape_data.output.overlap_escape_plot,
            "Summed Escape by Site": rules.analyze_escape_data.output.mab_line_escape_plot,
        },
        "Interactive Heatmaps of Escape Data": {
            "Top Escape Sites": rules.analyze_escape_data.output.mab_plot_top,
            "All Sites": rules.analyze_escape_data.output.mab_plot_all,
            "Aggregate Escape and Ephrin-B2 Binding": rules.analyze_escape_data.output.aggregate_mab_and_binding,
            "Aggregate Escape and NiV Polymorphisms": rules.analyze_escape_data.output.aggregate_mab_and_niv_polymorphism,
        },
        "Escape at Nipah and Hendra polymorphisms and differences": rules.analyze_escape_data.output.combined_evol_sites_escape,
    },
    "Library Correlations and Stats": {
        "Library Correlations Notebook": rules.lib_lib_correlations.output.nb,
        "Interactive Plot of Library Correlations": rules.lib_lib_correlations.output.CHO_corr_plot_save,
        "Heatmap Plot of Library Correlations": rules.lib_lib_correlations.output.entry_binding_corr_heatmap_plot,
        "Plots of all cell entry score correlations": {
            "Indiv. CHO-EFNB2 cell entry selections": rules.lib_lib_correlations.output.CHO_EFNB2_indiv_plot_save,
            "Indiv. CHO-EFNB3 cell entry selections": rules.lib_lib_correlations.output.CHO_EFNB3_indiv_plot_save,
        },
        "Variants histogram": rules.lib_lib_correlations.output.histogram_plot,
    },
    "Miscellaneous": {
        "Data filtering notebook": rules.filter_data.output.nb,
        "Bat and Human Ephrin alignment notebook": rules.ephrin_alignment.output.nb,
        "Henipavirus RBP alignment notebook": rules.make_RBP_alignment.output.nb,
        "Henipavirus and Nipah RBP entropy notebook": rules.henipavirus_entropy.output.nb,
        "Receptor Distances Notebook": rules.receptor_distances.output.nb,
        "Amino Acid Distances CSVs": {
            "Ephrin-B2 residues within 4 csv": rules.receptor_distances.output.ephrin_b2_close_residues,
            "Ephrin-B3 residues within 4 csv": rules.receptor_distances.output.ephrin_b3_close_residues,
            "RBP and Ephrin-B2 residue distances csv": rules.receptor_distances.output.ephrin_b2_distance,
            "RBP and Ephrin-B3 residue distances csv": rules.receptor_distances.output.ephrin_b3_distance,
            "RBP dimerization residue distance csv": rules.receptor_distances.output.dimerization_distance,
        },
        "Notebook for mapping filtered scores onto crystal structures": rules.make_files_for_mapping_structure.output.nb,
        "Notebook for making heatmaps": rules.make_heatmaps.output.nb,
        "Antibody Info Table": rules.get_tables.output.antibody_info_table,
        "Library Stats Table": rules.get_tables.output.library_stats_table,
        "Notebook for making phylogeny": rules.make_phylogeny.output.nb,
        "Combined Entry and Binding Heatmaps at Contact Sites": rules.make_heatmaps.output.combined_entry_binding_contact,
    },
    "Large web friendly interactive figures": {
        "Interactive figures notebook": rules.interactive_figures.output.nb,
        "Entry correlations": rules.interactive_figures.output.output_corr,
        "E2 entry binding correlations": rules.interactive_figures.output.entry_binding_corr_plot_E2_output,
        "E3 entry binding correlations": rules.interactive_figures.output.entry_binding_corr_plot_E3_output,
        "Correlation entry binding large": rules.interactive_figures.output.corr_entry_binding_large_output,
        "Combined binding plots": rules.interactive_figures.output.combined_binding_output,
        "E2 entry by site": rules.interactive_figures.output.entry_by_site_plot_e2_output,
        "E3 entry by site": rules.interactive_figures.output.entry_by_site_plot_e3_output,
        "E2 entry by site barplot": rules.interactive_figures.output.entry_by_site_plot_e2_bar_plot,

    }
}