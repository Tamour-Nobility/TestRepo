<template>
  <div class="card border bg-white rounded-3 overflow-hidden mb-4">
    <div class="d-flex align-items-center p-4 pb-3 mb-1">
      <div class="flex-shrink-0">
        <div
          class="wh-55 bg-card-bg-c bg-opacity-25 text-center rounded-2"
          style="line-height: 55px"
        >
          <i
            class="ri-wallet-2-line fs-22 bg-card-bg-c text-white rounded-2 p-2"
          ></i>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h3 class="fs-24 fw-medium mb-0">$80,000</h3>
        <span>Total Profit</span>
      </div>
    </div>
    <div class="d-flex align-items-center p-4 pb-0">
      <span
        class="d-inline-block bg-danger text-danger bg-opacity-10 border border-danger rounded-pill px-2 fw-medium d-flex align-items-center"
      >
        <i class="ri-arrow-down-fill fs-16 lh-1"></i>
        7%
      </span>
      <span class="ms-2 fs-12">from last week</span>
    </div>

    <div style="margin: -45px -11px -31px -15px">
      <apexchart
        v-if="isClient"
        type="area"
        height="120"
        :options="totalProfit"
        :series="profit"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalProfitChart",
  setup() {
    const isClient = ref(false);
    const profit = ref([
      {
        name: "Profit",
        data: [3, 5, 10, 5, 9, 7, 15],
      },
    ]);
    const totalProfit = ref({
      chart: {
        type: "area",
        height: 120,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
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
            return "$" + val + "k";
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      profit,
      totalProfit,
    };
  },
});
</script>
