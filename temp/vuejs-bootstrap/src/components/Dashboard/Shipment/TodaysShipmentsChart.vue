<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-start mb-4"
      >
        <div class="">
          <span class="fs-14 d-block mb-1">Todays Shipments</span>
          <h3 class="fs-18 mb-0">9,120 Ton</h3>
        </div>
        <span
          class="fs-12 fw-medium text-success bg-success bg-opacity-10 border border-success d-inline-block px-2 rounded-pill"
        >
          +5%
        </span>
      </div>
      <div style="margin: -24px -10px -26px -18px">
        <apexchart
          v-if="isClient"
          type="line"
          height="175"
          :options="todaysShipments"
          :series="shipments"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TodaysShipmentsChart",
  setup() {
    const isClient = ref(false);
    const shipments = ref([
      {
        name: "Todays Shipments",
        data: [10, 31, 25, 40, 50, 50, 100],
      },
    ]);
    const todaysShipments = ref({
      chart: {
        height: 175,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 0,
        strokeWidth: 0,
        hover: {
          size: 0,
        },
      },
      colors: ["#5C61F2"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        borderColor: "#ECF0FF",
        row: {
          colors: ["#F6F7F9", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
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
        tickAmount: 3,
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        y: {
          formatter: (val: string) => {
            return "" + val + "Ton";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      shipments,
      todaysShipments,
    };
  },
});
</script>
