<template>
  <v-row>
    <v-col cols="12" lg="6">
      <BasicPolarChart />
    </v-col>
    <v-col cols="12" lg="6">
      <MonochromePolarChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicPolarChart from "./BasicPolarChart.vue";
import MonochromePolarChart from "./MonochromePolarChart.vue";

export default {
  name: "PolarCharts",
  components: {
    BasicPolarChart,
    MonochromePolarChart,
  },
};
</script>
