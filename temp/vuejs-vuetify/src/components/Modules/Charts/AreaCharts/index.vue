<template>
  <v-row>
    <v-col cols="12" lg="6">
      <BasicAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <SplineAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <DatetimeAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <NegativeValuesAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <StackedAreaChart />
    </v-col>
    <v-col cols="12" lg="6">
      <MissingNullValuesAreaChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicAreaChart from "./BasicAreaChart.vue";
import SplineAreaChart from "./SplineAreaChart.vue";
import DatetimeAreaChart from "./DatetimeAreaChart.vue";
import NegativeValuesAreaChart from "./NegativeValuesAreaChart.vue";
import StackedAreaChart from "./StackedAreaChart.vue";
import MissingNullValuesAreaChart from "./MissingNullValuesAreaChart.vue";

export default {
  name: "AreaCharts",
  components: {
    BasicAreaChart,
    SplineAreaChart,
    DatetimeAreaChart,
    NegativeValuesAreaChart,
    StackedAreaChart,
    MissingNullValuesAreaChart,
  },
};
</script>
