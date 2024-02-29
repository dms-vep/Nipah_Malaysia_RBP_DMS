# Custom data
This subdirectory contains input data used by custom analyses jupyter notebooks

[theme.py](theme.py): 
* File for setting custom altair themes, used by all notebooks for plotting

[surface_exposure.csv](surface_exposure.csv): 
* This file contains information about the relative surface exposure of NiV RBP residues

[./alignments](alignments): 
* **ephrin_E2_E3_sequences.fasta** Amino acid alignment of Human and Pteropus alecto EFNB2 and EFNB3
* **Nipah_RBP_AA_align.fasta** Alignment of Nipah RBP sequences downloaded from GenBank
* **wild_type_seq.fasta** wildtype sequence (non codon-optimized) of NiV-M RBP
* **Nipah-B_MK673572.1.fasta** wildtype sequence of NiV-B RBP

[./alignments/phylo](phylogenetics)
* **country_genbank_ids.csv** Country of origin of genbank sequences
* **nipah_whole_genome_alignment.fasta** Alignment of whole genome nipah sequences
* **nipah_whole_genome_genbank_accession_ids.txt** Accession IDs from genbank
* **nipah_whole_genome_phylo.tre** Phylogeny of whole genome nipah sequences inferred from IQ-TREE

[./crystal_structures](crystal_structures):
**PDB files of:**
* **2vsm.pdb** (Nipah RBP bound to Ephrin-B2)
* **3d12.pdb** (Nipah RBP bound to Ephrin-B3)
* **6cmg.pdb** (Hendra RBP bound to mAb m102.3)
* **6vy4.pdb** (Nipah RBP bound to mAb HENV-32)
* **6vy5.pdb** (Nipah RBP bound to mAb HENV-26)
* **7txz.pdb** (Partial Nipah RBP bound to mAb nAH1.3)

[./experimental_data](experimental_data): **Raw experimental data of relative light units (RLUs) or fraction infectivity neutralization experiments. Also includes mAb, binding, and cell entry validation data.**

* **bat_ephrin_neuts.csv** Neutralization of Nipah pseudovirus by bat ephrin-B2 or -B3 for monomeric and dimeric versions. Concentration in micromolar

* **binding_single_mutant_validations.csv** Fraction infectivity of different single RBP mutant pseudoviruses. Concentration in ug/mL

* **NiV_neut_all_mabs.csv** Fraction infectivity of WT NiV RBP pseudovirus with different mAbs. Concentration in ug/mL.

* **functional_validations_EFNB2.csv, functional_validations_EFNB3.csv**
Luciferase values of different single mutant RBP pseudoviruses (RLU/uL)

* **receptor_IC_validations.csv** IC50 and IC90 of single mutant RBP pseudoviruses with bat ephrin-B2 and -B3

* **nAH1_3_mab_validation_neuts.csv** Fraction infectivity of mutant viruses with mAb nAH1.3 for antibody validation experiments