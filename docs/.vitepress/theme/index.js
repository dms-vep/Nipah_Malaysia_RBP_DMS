import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Altair from "./Altair.vue";
import Figure from "./Figure.vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import BarChart from './BarChart.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {

    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Altair", Altair);
    app.component("Figure", Figure);
    app.component('BarChart', BarChart)
  },
};