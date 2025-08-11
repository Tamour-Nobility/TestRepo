<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Basic Range Area Chart</h5>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="rangeArea"
        height="350"
        :options="basicRangeArea"
        :series="bsic"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicRangeAreaChart",
  setup() {
    const isClient = ref(false);
    const bsic = ref([
      {
        name: "New York Temperature",
        data: [
          { x: "Jan", y: [-2, 4] },
          { x: "Feb", y: [-1, 6] },
          { x: "Mar", y: [3, 10] },
          { x: "Apr", y: [8, 16] },
          { x: "May", y: [13, 22] },
          { x: "Jun", y: [18, 26] },
          { x: "Jul", y: [21, 29] },
          { x: "Aug", y: [21, 28] },
          { x: "Sep", y: [17, 24] },
          { x: "Oct", y: [11, 18] },
          { x: "Nov", y: [6, 12] },
          { x: "Dec", y: [1, 7] },
        ],
      },
    ]);
    const basicRangeArea = ref({
      chart: {
        height: 350,
        type: "rangeArea",
        toolbar: {
          show: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "New York Temperature (all year round)",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      colors: ["#605DFF"],
      markers: {
        hover: {
          sizeOffset: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          show: true,
          formatter: (val: string) => {
            return val + "°C";
          },
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
      bsic,
      basicRangeArea,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -20px !important;
}
</style>
