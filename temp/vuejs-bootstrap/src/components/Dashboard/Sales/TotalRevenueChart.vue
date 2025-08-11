<template>
  <div class="card border bg-white rounded-3 overflow-hidden mb-4">
    <div class="d-flex align-items-center p-4 pb-3 mb-1">
      <div class="flex-shrink-0">
        <div
          class="wh-55 bg-danger bg-opacity-25 text-center rounded-2"
          style="line-height: 55px"
        >
          <i
            class="ri-money-dollar-circle-line fs-22 bg-danger text-white rounded-2 p-2"
          ></i>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h3 class="fs-24 fw-medium mb-0">$250,000</h3>
        <span>Total Revenue</span>
      </div>
    </div>
    <div class="d-flex align-items-center p-4 pb-0">
      <span
        class="d-inline-block bg-success text-success bg-opacity-10 border border-success rounded-pill px-2 fw-medium d-flex align-items-center"
      >
        <i class="ri-arrow-up-fill fs-16 lh-1"></i>
        12%
      </span>
      <span class="ms-2 fs-12">from last week</span>
    </div>

    <div style="margin: -45px -11px -31px -15px">
      <apexchart
        v-if="isClient"
        type="line"
        height="120"
        :options="totalRevenue"
        :series="revenue"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalRevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "Revenue",
        data: [0, 35, 25, 45, 30, 45, 25, 45, 70],
      },
    ]);
    const totalRevenue = ref({
      chart: {
        height: 120,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FD5812"],
      stroke: {
        width: 2,
        curve: "straight",
      },
      markers: {
        size: 3,
        strokeWidth: 0,
        hover: {
          size: 5,
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
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
        horizontalAlign: "center",
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
      revenue,
      totalRevenue,
    };
  },
});
</script>
