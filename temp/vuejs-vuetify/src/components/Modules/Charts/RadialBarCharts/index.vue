<template>
  <v-row>
    <v-col cols="12" xl="4" lg="6">
      <BasicRadialBarChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <MultipleRadialBarChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <CustomAngleCircleRadialBarChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <GradientRadialBarChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <StrockedCircularGaugeRadialBarChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <SemiCircularGaugeRadialBarChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicRadialBarChart from "./BasicRadialBarChart.vue";
import MultipleRadialBarChart from "./MultipleRadialBarChart.vue";
import CustomAngleCircleRadialBarChart from "./CustomAngleCircleRadialBarChart.vue";
import GradientRadialBarChart from "./GradientRadialBarChart.vue";
import StrockedCircularGaugeRadialBarChart from "./StrockedCircularGaugeRadialBarChart.vue";
import SemiCircularGaugeRadialBarChart from "./SemiCircularGaugeRadialBarChart.vue";

export default {
  name: "RadialBarCharts",
  components: {
    BasicRadialBarChart,
    MultipleRadialBarChart,
    CustomAngleCircleRadialBarChart,
    GradientRadialBarChart,
    StrockedCircularGaugeRadialBarChart,
    SemiCircularGaugeRadialBarChart,
  },
};
</script>
