<template>
  <v-row>
    <v-col cols="12" lg="6">
      <LineColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <MultipleYaxisChart />
    </v-col>
    <v-col cols="12" lg="6">
      <LineAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <LineColumnAreaChart />
    </v-col>
  </v-row>
</template>

<script>
import LineColumnChart from "./LineColumnChart.vue";
import MultipleYaxisChart from "./MultipleYaxisChart.vue";
import LineAreaChart from "./LineAreaChart.vue";
import LineColumnAreaChart from "./LineColumnAreaChart.vue";

export default {
  name: "MixedCharts",
  components: {
    LineColumnChart,
    MultipleYaxisChart,
    LineAreaChart,
    LineColumnAreaChart,
  },
};
</script>
