---
layout: home


hero:
  name: "Nipah RBP DMS"
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
    details: Analysis of antibody neutralization data for finding sites of escape in RBP
    link: /antibody_escape

  - title: Heatmaps
    details: Links to heatmaps showing effects of mutations on cell entry, receptor binding, and antibody escape
    link: /heatmaps

  - title: Interactive figures
    details: Explore DMS data on Nipah RBP with interactive figures
    link: /interactive
---

### About

This website contains links and information for the Nipah virus receptor binding protein deep mutational scanning project. Look through Jupyter notebooks used in analyses, explore interactive charts, or download raw data. To view more information on the code used to analyze these data and generate the website, click on the GitHub logo in upper right. Interactive charts made with [Altair](https://altair-viz.github.io){target="_self"}. Embedding of Altair plots was done with custom javascript code from [dms-vep](https://github.com/dms-vep/dms-vep.github.io){target="_self"}. Work done in [Bloom Lab](https://research.fredhutch.org/bloom/en.html){target="_self"}, part of [Fred Hutch Cancer Center](https://www.fredhutch.org/en.html){target="_self"}.

All experiments were performed with non-replicative lentiviral-based pseudoviruses. Ephrin-B2 and Ephrin-B3 orthologs from the bat species *Pteropus alecto* were used for cell entry and receptor binding assays.


<Figure style="max-width:50%; border:0; margin: 0 auto; display: block; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
;" imageSrc="images/metal_efnb3_sheen_atoms2.png" caption="Nipah RBP (spheres) bound to Ephrin-B2 (metal cartoon). RBP sites colored by the average effect of mutations on bEFNB2 binding"/>

