<template>
  <div class="card bg-white border-0 rounded-3 overflow-hidden mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <h3 class="mb-0">Response Time</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-99"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>Last 30 Days</option>
          <option value="1">Last 40 Days</option>
          <option value="2">Last 50 Days</option>
          <option value="3">Last 60 Days</option>
          <option value="4">Last 90 Days</option>
        </select>
      </div>

      <div class="position-relative" style="height: 136px">
        <p class="d-flex align-items-center mb-0 justify-content-center gap-1">
          <span class="fs-18 fw-bold text-body">1</span> hrs
          <span class="fs-18 fw-bold text-body">:22</span> mins
        </p>
      </div>

      <div
        style="
          left: 0;
          right: 0;
          bottom: -41px;
          position: absolute;
          margin-left: -12px;
          margin-right: -10px;
        "
      >
        <apexchart
          v-if="isClient"
          type="area"
          height="205"
          :options="responseTime"
          :series="time"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ResponseTimeChart",
  setup() {
    const isClient = ref(false);
    const time = ref([
      {
        name: "Response Time",
        data: [
          100, 130, 115, 170, 110, 120, 85, 140, 150, 100, 110, 90, 160, 125,
          105, 130, 145, 120, 150, 155, 220, 165,
        ],
      },
    ]);
    const responseTime = ref({
      chart: {
        type: "area",
        height: 205,
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
      colors: ["#FFB264"],
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
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
          "13 Jan",
          "14 Jan",
          "15 Jan",
          "16 Jan",
          "17 Jan",
          "18 Jan",
          "19 Jan",
          "20 Jan",
          "21 Jan",
          "22 Jan",
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
        max: 250,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
          formatter: (val: string) => {
            return val + " mins";
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
      time,
      responseTime,
    };
  },
});
</script>
