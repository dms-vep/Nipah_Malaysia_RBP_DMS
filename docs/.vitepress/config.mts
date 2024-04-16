import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config



export default defineConfig({
  lang: "en-US",
  title: "Nipah RBP DMS",
  description: "Information about Nipah RBP DMS experiments",
  base: '/Nipah_Malaysia_RBP_DMS/',

  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Analysis Pipeline', link: '/pipeline_information' },
      { text: 'Cell Entry', link: '/cell_entry' },
      { text: 'Receptor Binding', link: '/receptor_binding' },
      { text: 'Antibody Escape', link: '/antibody_escape' },
      { text: 'Heatmaps', link:'/heatmaps' },
      { text: 'Interactive Figures', link: '/interactive' },
      // { text: 'Appendix', link: '/index', target: '_self' }, // include if you want to include the original docs
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dms-vep/Nipah_Malaysia_RBP_DMS' },

    ],
    footer: {
      message: "Built by Brendan Larsen and Jesse Bloom",
    },
  }
})
