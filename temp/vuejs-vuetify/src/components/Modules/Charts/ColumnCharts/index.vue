<template>
  <v-row>
    <v-col cols="12" lg="6">
      <BasicColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <DataLabelsColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <StackedColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <RangeColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <RotatedLabelsColumnChart />
    </v-col>
    <v-col cols="12" lg="6">
      <DistributedColumnChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicColumnChart from "./BasicColumnChart.vue";
import DataLabelsColumnChart from "./DataLabelsColumnChart.vue";
import StackedColumnChart from "./StackedColumnChart.vue";
import RangeColumnChart from "./RangeColumnChart.vue";
import RotatedLabelsColumnChart from "./RotatedLabelsColumnChart.vue";
import DistributedColumnChart from "./DistributedColumnChart.vue";

export default {
  name: "ColumnCharts",
  components: {
    BasicColumnChart,
    DataLabelsColumnChart,
    StackedColumnChart,
    RangeColumnChart,
    RotatedLabelsColumnChart,
    DistributedColumnChart,
  },
};
</script>
