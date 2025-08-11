<template>
  <v-row>
    <v-col cols="12" xl="4" lg="6">
      <BasicPieChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <PieDonutChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <PieMonochromeChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicPieChart from "./BasicPieChart.vue";
import PieDonutChart from "./PieDonutChart.vue";
import PieMonochromeChart from "./PieMonochromeChart.vue";

export default {
  name: "PieCharts",
  components: {
    BasicPieChart,
    PieDonutChart,
    PieMonochromeChart,
  },
};
</script>
