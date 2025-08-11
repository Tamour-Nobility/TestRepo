<template>
  <v-row>
    <v-col cols="12" lg="6">
      <BasicRangeAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BasicTimelineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BasicCandlestickChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BasicBoxplotChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BasicBubbleChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BasicScatterChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BasicHeatmapChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BasicTreemapChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicRangeAreaChart from "./BasicRangeAreaChart.vue";
import BasicTimelineChart from "./BasicTimelineChart.vue";
import BasicCandlestickChart from "./BasicCandlestickChart.vue";
import BasicBoxplotChart from "./BasicBoxplotChart.vue";
import BasicBubbleChart from "./BasicBubbleChart.vue";
import BasicScatterChart from "./BasicScatterChart.vue";
import BasicHeatmapChart from "./BasicHeatmapChart.vue";
import BasicTreemapChart from "./BasicTreemapChart.vue";

export default {
  name: "MoreCharts",
  components: {
    BasicRangeAreaChart,
    BasicTimelineChart,
    BasicCandlestickChart,
    BasicBoxplotChart,
    BasicBubbleChart,
    BasicScatterChart,
    BasicHeatmapChart,
    BasicTreemapChart,
  },
};
</script>
