<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ModulesChartsMixedChartsLineColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsMixedChartsMultipleYaxisChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsMixedChartsLineAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsMixedChartsLineColumnAreaChart />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MixedCharts",
};
</script>
