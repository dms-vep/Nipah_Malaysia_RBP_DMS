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
    details: Analysis of functional selections for assessing how mutations to the receptor binding protein impact cell entry 
    link: /cell_entry
    
  - title: Receptor binding
    details: Analysis of soluble receptor selections for measuring how mutations affect binding to host receptors 
    link: /receptor_binding

  - title: Antibody escape
    details: Analysis of antibody neutralization data for finding sites of escape in the receptor binding protein. 
    link: /antibody_escape

  - title: Heatmaps
    details: Links to heatmaps showing effects of mutations on cell entry, receptor binding, and antibody escape 
    link: /heatmaps

  - title: Interactive figures
    details: Explore deep mutational scanning data on the Nipah virus receptor binding protein with interactive figures 
    link: /interactive
---

### About
<div style="clear: right; float: right; margin-left: 1em; ">
  <a href="/images/metal_efnb3_sheen_atoms.png" target="_base">
    <img src="/images/metal_efnb3_sheen_atoms.png" alt="Nipah virus receptor binding protein" width="100%" style="max-width: 300px;">
  </a>
  <p style="text-align: center; color: grey; font-size: smaller;">Receptor binding protein bound to ephrin-B2.</p>
</div>

This website contains links and information for the Nipah virus receptor binding protein deep mutational scanning project. Look through Jupyter notebooks used in analyses, explore [interactive charts](/interactive), or download raw [data](/pipeline_information#filtered-data). To view more information on the code used to analyze these data and generate the website, check out our [GitHub repo](https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS){target="_self"}. Interactive charts made with [Altair](https://altair-viz.github.io){target="_self"}. Embedding of Altair plots was done with custom javascript code from [dms-vep](https://github.com/dms-vep/dms-vep.github.io){target="_self"}. All work was done in the [Bloom Lab](https://research.fredhutch.org/bloom/en.html){target="_self"}, part of [Fred Hutch Cancer Center](https://www.fredhutch.org/en.html){target="_self"}. To access the old version of the homepage built by `dms-vep-pipeline-3`, click [here](/index){target='_self'}. 



### Scientific Details

Nipah virus is a bat-borne paramyxovirus that occassionally spills over into humans in SE Asia, causing fatal infections. Nipah virus relies on the coordination of two different viral entry proteins to enter cells: the receptor binding and fusion protein. The Nipah virus receptor binding protein is responsible for binding to host receptors (ephrin-B2 and -B3) on the cell surface. Following receptor binding, the receptor binding protein triggers the fusion protein, which undergoes irreversible conformational changes to fuse the host and viral membranes. Here are the molecular structures of the receptor binding and fusion proteins: 

<div style="display: flex; justify-content: center;">
  <video width="640" height="480" controls autoplay loop playsinline>
    <source src="/images/nipah_RBP_F_spinning.m4v?url" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="text-align: center; color: grey; font-size: smaller">Nipah virus receptor binding protein on left, fusion protein on right. Colors show individual monomers. </div>

Given the spillover risk posed by Nipah, we sought to understand how mutations affect different phenotypes of the receptor binding protein. Specifically, we measured the effects of mutations on three different phenotypes: cell entry, receptor binding, and antibody escape. We utilized a [recently developed lentivirus-based platform](https://pubmed.ncbi.nlm.nih.gov/36868218/){target='_self'} to perform the deep mutational scanning experiments. By applying different selection conditions on pseudovirus libraries, followed by deep sequencing to recover barcode frequencies, we were able to map the effects of thousands of mutations on the Nipah virus receptor binding protein. These data will help us understand functional constraints, and the possibility of escape from neutralizing antibodies.



### Biosafety

All experiments were performed with non-replicative lentiviral-based pseudoviruses in a biosafety-level 2 laboratory by trained personnel. Pseudotyping is a method where viral entry proteins are expressed in combination with a viral vector from a different virus. By only expressing the Nipah receptor binding and fusion proteins on the surface of lentiviral particles, we can safely perform deep mutational scanning experiments without modifying authentic virus. Essential lentiviral genes, such as gag/pol, rev, and tat, are not encoded by the lentiviral vector. These genes are instead introduced by transfecting cells with three separate plasmids. This ensures the pseudotyped lentiviruses cannot replicate outside of a cell culture system where these plasmids are co-transfected. Finally, to limit the information hazards associated with identifying human-specific adaptive mutations, we used ephrin-B2 and ephrin-B3 orthologs from the bat species *Pteropus alecto* for all assays.


