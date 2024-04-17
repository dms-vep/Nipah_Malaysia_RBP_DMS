---
layout: home


hero:
  name: "Nipah virus deep mutational scanning"
  tagline: "Collection of data, figures, and information for the Nipah virus receptor binding protein deep mutational scanning project"
  image: /images/entry_tetramer.png


features:
  - title: Pipeline information and data processing
    details: Analysis of Pacbio and Illumina sequencing data produced from deep mutational scanning experiments 
    link: /pipeline_information

  - title: Cell entry
    details: Analysis of functional selections for assessing how RBP mutations impact cell entry 
    link: /cell_entry
    
  - title: Receptor binding
    details: Analysis of soluble receptor selections for measuring how mutations affect binding to host receptors 
    link: /receptor_binding

  - title: Antibody escape
    details: Analysis of antibody neutralization data for finding sites of escape in the RBP 
    link: /antibody_escape

  - title: Heatmaps
    details: Links to heatmaps showing effects of mutations on cell entry, receptor binding, and antibody escape 
    link: /heatmaps

  - title: Interactive figures
    details: Explore DMS data on Nipah RBP with interactive figures 
    link: /interactive
---

### About

This website contains links and information for the Nipah virus receptor binding protein deep mutational scanning project. Look through Jupyter notebooks used in analyses, explore [interactive charts](/interactive), or download raw [data](/pipeline_information#filtered-data). To view more information on the code used to analyze these data and generate the website, click on the GitHub logo in upper right. Interactive charts made with [Altair](https://altair-viz.github.io){target="_self"}. Embedding of Altair plots was done with custom javascript code from [dms-vep](https://github.com/dms-vep/dms-vep.github.io){target="_self"}. All work was done in the [Bloom Lab](https://research.fredhutch.org/bloom/en.html){target="_self"}, part of [Fred Hutch Cancer Center](https://www.fredhutch.org/en.html){target="_self"}. To access the old version of the homepage built by `dms-vep-pipeline-3`, click [here](/index){target='_self'}. 

### Scientific Details

Deep mutational scanning experiments were performed on the Nipah virus receptor binding protein to measure the effects of mutations on three different phenotypes: cell entry, receptor binding, and antibody escape. We utilized a [recently developed lentivirus-based platform](https://pubmed.ncbi.nlm.nih.gov/36868218/){target='_self'} to measure the effects of all possible mutations. We used a combination of selections on variant libraries and deep sequencing to measure these effects.

The Nipah virus receptor binding protein is responsible for binding to host cell receptors (ephrin-B2 and -B3) and mediating cell entry. Following receptor binding, RBP triggers a different viral protein, the Fusion (F) protein. Once triggered by RBP, F undergoes irreversible conformational changes to fuse the host and viral membranes. Here are the molecular structures of the RBP and F proteins: 

<div style="display: flex; justify-content: center;">
  <video width="640" height="480" controls autoplay>
    <source src="/images/nipah_RBP_F_spinning.m4v?url" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="text-align: center; color: grey;">Nipah virus receptor binding protein on left, fusion protein on right. Colors are individual monomers. </div>

### Biosafety

All experiments were performed with non-replicative lentiviral-based pseudoviruses in a biosafety-level 2 laboratory by trained personel. Rescue of lentiviruses from cells requires co-transfection with multiple different plasmids, limiting the risk of recombination. Ephrin-B2 and ephrin-B3 orthologs from the bat species *Pteropus alecto* were used for cell entry and receptor binding assays to limit information hazards of identifying human-specific adaptive mutations. 



