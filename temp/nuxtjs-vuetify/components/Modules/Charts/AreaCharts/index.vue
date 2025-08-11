<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ModulesChartsAreaChartsBasicAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsAreaChartsSplineAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsAreaChartsDatetimeAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsAreaChartsNegativeValuesAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsAreaChartsStackedAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsAreaChartsMissingNullValuesAreaChart />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AreaCharts",
};
</script>
