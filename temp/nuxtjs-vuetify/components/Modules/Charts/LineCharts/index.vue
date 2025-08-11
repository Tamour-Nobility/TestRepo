<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ModulesChartsLineChartsBasicLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsLineChartsGradientLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsLineChartsDashedLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsLineChartsSteplineLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsLineChartsBrushLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsLineChartsSyncingLineChart />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LineCharts",
};
</script>
