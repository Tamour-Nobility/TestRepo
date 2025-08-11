<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center position-relative"
      >
        <div class="flex-grow-1 me-3">
          <span class="d-block mb-2">Revenue</span>
          <h3 class="fs-24 fw-bold">$1.2M</h3>
          <span
            class="bg-danger bg-opacity-10 border border-danger rounded-pill text-danger px-2 fs-12 fw-medium d-inline-block"
          >
            -3.2%
          </span>
        </div>
        <div
          class="position-absolute top-50 end-0 translate-middle-y saas-chart-position"
        >
          <apexchart
            v-if="isClient"
            style="width: 130px"
            type="area"
            height="130"
            :options="revenueChart"
            :series="revenue"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "Revenue",
        data: [30, 70, 50, 80, 60, 100],
      },
    ]);
    const revenueChart = ref({
      chart: {
        type: "area",
        height: 130,
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
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#868DFF"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.9,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
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
        tickAmount: 5,
        show: false,
        max: 100,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      legend: {
        show: true,
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
      revenueChart,
    };
  },
});
</script>
