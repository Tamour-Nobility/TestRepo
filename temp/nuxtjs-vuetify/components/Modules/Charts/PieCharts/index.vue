<template>
  <v-row>
    <v-col cols="12" xl="4" lg="6">
      <ModulesChartsPieChartsBasicPieChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <ModulesChartsPieChartsPieDonutChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <ModulesChartsPieChartsPieMonochromeChart />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PieCharts",
};
</script>
