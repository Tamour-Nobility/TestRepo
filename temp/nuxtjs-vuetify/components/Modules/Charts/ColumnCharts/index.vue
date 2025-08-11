<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ModulesChartsColumnChartsBasicColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsColumnChartsDataLabelsColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsColumnChartsStackedColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsColumnChartsRangeColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsColumnChartsRotatedLabelsColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <ModulesChartsColumnChartsDistributedColumnChart />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ColumnCharts",
};
</script>
