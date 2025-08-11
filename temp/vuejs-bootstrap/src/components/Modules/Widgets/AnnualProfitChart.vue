<template>
  <div
    class="card bg-white border-0 rounded-3 mb-4 stats-box position-relative"
  >
    <div class="card-body p-4">
      <div class="d-flex justify-content-between">
        <div class="mb-35">
          <span>Annual Profit</span>
          <h3 class="fs-20 mt-1 mb-0">$879.6k</h3>
        </div>
        <div class="chart-position">
          <apexchart
            v-if="isClient"
            type="area"
            height="95"
            :options="annualProfit"
            :series="profit"
          ></apexchart>
        </div>
      </div>
      <div
        class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
      >
        <span class="count up fw-medium ms-0">+30%</span>
        <span class="fs-12">Last 12 months</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AnnualProfitChart",
  setup() {
    const isClient = ref(false);
    const profit = ref([
      {
        name: "Annual Profit",
        data: [3, 12, 8, 10, 15, 10, 7],
      },
    ]);
    const annualProfit = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#C52B09"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          formatter: (val: string) => {
            return val + "%";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          radius: 2,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      profit,
      annualProfit,
    };
  },
});
</script>
