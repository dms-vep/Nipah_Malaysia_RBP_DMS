# Experimental data
This subdirectory contains raw experimental data in paper. Column names have specific requirement in package _neutcurve_. This explains what each is.


### **bat_ephrin_neuts.csv** 
#### Neutralization of Nipah pseudovirus by bat ephrin-B2 or -B3 for monomeric and dimeric versions. 

**Data columns:**
1. _serum: 'Target cells'_
2. _virus: 'Soluble Receptor'_
3. _replicate: 'Replicate'_
4. _concentration: 'Concentration in micromolar of soluble receptor'_
5. _fraction infectivity: 'Fraction infectivity of pseudovirus at that concentration of soluble receptor'_  

### **binding_single_mutant_validations.csv** 
#### Fraction infectivity of different single RBP mutant pseudoviruses. 

**Data columns:**
1. _serum: 'Soluble receptor'_
2. _virus: 'Mutant pseudovirus'_
3. _replicate: 'Replicate'_
4. _concentration: 'Concentration in microgram per mL of soluble receptor'_
5. _fraction infectivity: 'Fraction infectivity of pseudovirus at that concentration of soluble receptor'_  

### **NiV_neut_all_mabs.csv** 
#### Fraction infectivity of unmutated Nipah RBP/F pseudovirus with different mAbs in CHO-bEFNB3 target cells. 

**Data columns:**
1. _serum: 'Antibody'_
2. _virus: 'Pseudovirus used'_
3. _replicate: 'Replicate'_
4. _concentration: 'Concentration in microgram per mL of antibody'_
5. _fraction infectivity: 'Fraction infectivity of pseudovirus at that concentration of antibody'_  

### **functional_validations_EFNB2.csv, functional_validations_EFNB3.csv**
#### Luciferase values of different single mutant RBP pseudoviruses (RLU/uL)

**Data columns:**
1. _mutation_: 'RBP variant'_
2. _mean_luciferase: 'Mean luciferase values from two replicates in relative light units per microliter (RLU/uL)'_


### **receptor_IC_validations.csv** 
#### IC50 and IC90 of single mutant RBP pseudoviruses with soluble bat ephrin-B2 and -B3

**Data columns:**
1. _antibody: 'Soluble receptor'_
2. _mutation: 'Pseudovirus variant used'_
3. _measured IC50: 'IC50 estimated with neutcurve. Values in microgram per mL'_
4. _measured IC90: 'IC90 estimated with neutcurve. Values in microgram per mL'_


### **nAH1_3_mab_validation_neuts.csv** 
#### Fraction infectivity of mutant viruses with mAb nAH1.3 for antibody validation experiments

**Data columns:**
1. _serum: 'Antibody'_
2. _virus: 'Pseudovirus variant used'_
3. _replicate: 'Replicate'_
4. _concentration: 'Concentration in microgram per mL of antibody'_
5. _fraction infectivity: 'Fraction infectivity of pseudovirus at that concentration of antibody'_  

### **BLI_data.csv** 
#### Bio-layer interferometry data for different Nipah RBP variants and their respective DMS values

**Data columns:**
1. _Mutant: 'Nipah RBP variant'_
2. _B2_1: 'Area under curve (AUC) difference to unmutated RBP (%) for BLI binding to bEFNB2 replicate 1'_
3. _B2_2: 'Area under curve (AUC) difference to unmutated RBP (%) for BLI binding to bEFNB2 replicate 2'_
4. _B3_1: 'Max response difference to unmutated RBP (%) for BLI binding to bEFNB3 replicate 1'_
5. _B3_2: 'Max response difference to unmutated RBP (%) for BLI binding to bEFNB3 replicate 2'_
6. _E2_DMS: 'DMS binding for that Nipah RBP variant with monomeric-bEFNB2'_
7. _E3_DMS: 'DMS binding for that Nipah RBP variant with dimeric-bEFNB3'_