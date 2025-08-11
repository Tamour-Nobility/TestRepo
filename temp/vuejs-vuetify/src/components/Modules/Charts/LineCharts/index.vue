<template>
  <v-row>
    <v-col cols="12" lg="6">
      <BasicLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <GradientLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <DashedLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <SteplineLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <BrushLineChart />
    </v-col>
    <v-col cols="12" lg="6">
      <SyncingLineChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicLineChart from "./BasicLineChart.vue";
import GradientLineChart from "./GradientLineChart.vue";
import DashedLineChart from "./DashedLineChart.vue";
import SteplineLineChart from "./SteplineLineChart.vue";
import BrushLineChart from "./BrushLineChart.vue";
import SyncingLineChart from "./SyncingLineChart.vue";

export default {
  name: "LineCharts",
  components: {
    BasicLineChart,
    GradientLineChart,
    DashedLineChart,
    SteplineLineChart,
    BrushLineChart,
    SyncingLineChart,
  },
};
</script>
