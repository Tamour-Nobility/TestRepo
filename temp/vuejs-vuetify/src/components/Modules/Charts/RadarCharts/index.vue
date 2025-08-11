<template>
  <v-row>
    <v-col cols="12" xl="4" lg="6">
      <BasicRadarChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <MultipleRadarChart />
    </v-col>
    <v-col cols="12" xl="4" lg="6">
      <PolygonRadarChart />
    </v-col>
  </v-row>
</template>

<script>
import BasicRadarChart from './BasicRadarChart.vue'
import MultipleRadarChart from './MultipleRadarChart.vue'
import PolygonRadarChart from './PolygonRadarChart.vue'

export default {
  name: "RadarCharts",
  components: {
    BasicRadarChart,
    MultipleRadarChart,
    PolygonRadarChart,
  },
};
</script>
