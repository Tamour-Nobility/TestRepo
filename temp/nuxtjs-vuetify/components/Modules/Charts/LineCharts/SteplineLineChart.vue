<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Stepline Line Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="steplineLine"
        :series="stepline"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SteplineLineChart",
  setup() {
    const isClient = ref(false);
    const stepline = ref([
      {
        name: "Stepline Series",
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
      },
    ]);
    const steplineLine = ref({
      chart: {
        type: "line",
        height: 345,
      },
      stroke: {
        curve: "stepline",
      },
      colors: ["#605DFF"],
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Stepline Chart",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      stepline,
      steplineLine,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -20px !important;
}
</style>
