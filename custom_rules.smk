"""Custom rules used in the ``snakemake`` pipeline.

This file is included by the pipeline ``Snakefile``.

"""

rule analyze_nipah_RBP_entry:
    """Analyze EFNB2 and EFNB3 entry"""
    input:
        func_scores_E2_file="results/func_effects/averages/CHO_EFNB2_low_func_effects.csv",
        func_scores_E3_file="results/func_effects/averages/CHO_EFNB3_low_func_effects.csv",
        nb="notebooks/nipah_RBP_entry_analysis.ipynb",
    output:
        nb="results/notebooks/nipah_RBP_entry_analysis.ipynb",
        filtered_E2_data="results/filtered_data/E2_entry_filtered.csv",
        filtered_E3_data="results/filtered_data/E3_entry_filtered.csv",
        E2_entry_heatmap="results/entry_analysis/E2_entry_heatmap.html",
        E3_entry_heatmap="results/entry_analysis/E3_entry_heatmap.html",
    params:
        yaml=lambda _, input, output: yaml.round_trip_dump(
            {
                "func_scores_E2_file": input.func_scores_E2_file,
                "func_scores_E3_file": input.func_scores_E3_file,
                "filtered_E2_data": output.filtered_E2_data,
                "filtered_E3_data": output.filtered_E3_data,
                "E2_entry_heatmap": output.E2_entry_heatmap,
                "E3_entry_heatmap": output.E3_entry_heatmap,
            }
        ),
    log:
        log="results/logs/nipah_RBP_entry_analysis.txt",
    conda:
        "environment.yml"
    shell:
        "papermill {input.nb} {output.nb} -y '{params.yaml}' &> {log}"


docs["Additional files and charts"] = {
    "Cell Entry": {
        "EFNB2 and EFNB3 entry analysis": rules.analyze_nipah_RBP_entry.output.nb,
        "EFNB2 Entry Heatmap": rules.analyze_nipah_RBP_entry.output.E2_entry_heatmap,
        "EFNB3 Entry Heatmap": rules.analyze_nipah_RBP_entry.output.E3_entry_heatmap,
    },
}