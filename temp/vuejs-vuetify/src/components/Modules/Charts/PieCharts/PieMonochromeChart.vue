<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Pie Monochrome Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="pie"
        height="360"
        :options="pieMonochrome"
        :series="monochrome"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PieMonochromeChart",
  setup() {
    const isClient = ref(false);
    const monochrome = ref([25, 15, 44, 55, 41, 17]);
    const pieMonochrome = ref({
      chart: {
        type: "pie",
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      legend: {
        show: true,
        offsetY: 0,
        fontSize: "12px",
        labels: {
          colors: "#64748B",
        },
        itemMargin: {
          horizontal: 0,
          vertical: 5,
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
        },
      },
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      monochrome,
      pieMonochrome,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-top: -9px;
}
</style>
