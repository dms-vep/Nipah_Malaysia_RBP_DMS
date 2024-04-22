<script>

import * as d3 from "d3";

export default {
  data() {
    return {
      currentSite: 0,
      currentWildType: '',
      data: [],
    };
  },
  computed: {
    minSite() {
      return d3.min(this.data, d => Number(d.site));
    },
    maxSite() {
      return d3.max(this.data, d => Number(d.site));
    },
  },
  watch: {
    currentSite() {
      this.drawChart();
    },
  },
  methods: {
    drawChart() {
    d3.select(this.$el).select("svg").remove();
    const filteredData = this.data.filter(d => Number(d.site) === this.currentSite);
    //console.log(this.data);
    const width = 640; 
    const height = 400;
    const marginTop = 50;
    const marginRight = 50;
    const marginBottom = 50;
    const marginLeft = 50;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleBand()
        .domain(d3.groupSort(filteredData, ([d]) => -d.entry_CHO_bEFNB3, (d) => d.mutant))
        .range([marginLeft, width - marginRight])
        .padding(0.1);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
        .domain([-4, 1])
        .range([height - marginBottom, marginTop]);

    // Define the color scale.
    const colorScale = d3.scaleSequential()
        .domain([-4, 4])
        .interpolator(d3.interpolateRdBu);
        

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; font-size:16px;");

    svg.selectAll("rect")
        .data(filteredData)
        .join(
        enter => enter.append("rect") 
            .attr("x", (d) => x(d.mutant)) 
            .attr("y", y(0)) 
            .attr("height", 0) 
            .attr("width", x.bandwidth()) 
            .attr("fill", d => colorScale(d.entry_CHO_bEFNB3)) 
            .attr("stroke", "black") // 
            .attr("stroke-width", 0.25) 
            .call(enter => enter.transition() 
            .duration(1000) // Set the duration of the transition to 1000 milliseconds.
            .attr("y", (d) => d.entry_CHO_bEFNB3 >= 0 ? y(d.entry_CHO_bEFNB3) : y(0)) 
            .attr("height", (d) => Math.abs(y(0) - y(d.entry_CHO_bEFNB3)))), 
        update => update 
            .call(update => update.transition() 
            .duration(1000) 
            .attr("x", (d) => x(d.mutant)) 
            .attr("y", (d) => d.entry_CHO_bEFNB3 >= 0 ? y(d.entry_CHO_bEFNB3) : y(0)) 
            .attr("height", (d) => Math.abs(y(0) - y(d.entry_CHO_bEFNB3))) 
            .attr("width", x.bandwidth()) 
            .attr("fill", d => colorScale(d.entry_CHO_bEFNB3)) 
            .attr("stroke", "black") 
            .attr("stroke-width", 0.25)), 
        exit => exit.remove() 
    );

     
    // Add the x-axis.
    svg.append("g")
        .attr("transform", `translate(0,${height-marginBottom})`)
        .call(d3.axisBottom(x).ticks(width/100).tickSizeOuter(0))
        .call((g) => g.select(".domain").remove())
        .style("font-size", "12px")
        .call((g) => g.append("text")
            .attr("x", width/2)
            .attr("y", marginBottom - 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "middle")
            .text("Amino Acid")
            .style("font-size", "14px"));

    // Add the y-axis.
    const yAxis = svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(height/100).tickSizeOuter(0))
        .style("font-size", "12px")
        .call((g) => g.select(".domain").remove());

    yAxis.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height/2)
        .attr("y", -marginLeft + 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "middle")
        .text("Effect of mutation on entry")
        .style("font-size", "14px");
    
    const currentData = this.data.find(d => Number(d.site) === this.currentSite);
    this.currentWildType = currentData ? currentData.wildtype : '';
    // Append the SVG element.
    this.$el.append(svg.node());
    },
  },
  async mounted() {
    this.data = await d3.csv("https://raw.githubusercontent.com/dms-vep/Nipah_Malaysia_RBP_DMS/master/results/filtered_data/public_filtered/RBP_mutation_effects_cell_entry_CHO-bEFNB3.csv");
    this.currentSite = this.minSite;
    this.drawChart();
  }
}

</script>

<template>
  <div class="centered-div">        
        <h3>Effects of mutations on entry in cells expressing bat ephrin-B3</h3>
        <p>Move slider to see different sites in the receptor binding protein. A simple demonstration of deep mutational scanning data.</p>
        <svg></svg>
        <input type="range" v-model.number="currentSite" :min="minSite" :max="maxSite" style="width: 50%;"></input>
        <p>Site: {{ currentSite }}, Wildtype: {{ currentWildType }}</p>
    </div>
    
</template>

<style scoped>
.centered-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh; 
  width: 75vw; 
  margin: auto; 
}
</style>