<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <span>Live Shipment Status</span>
        <span class="fs-12">Last 7 days</span>
      </div>
      <div style="margin: -24px -6px -25px -17px">
        <apexchart
          v-if="isClient"
          type="line"
          height="200"
          :options="liveShipmentStatus"
          :series="status"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LiveShipmentStatusChart",
  setup() {
    const isClient = ref(false);
    const status = ref([
      {
        name: "In Transit",
        data: [70, 60, 40, 35, 30, 30, 40],
      },
      {
        name: "Delivered",
        data: [40, 45, 50, 55, 60, 65, 65],
      },
      {
        name: "Delayed",
        data: [15, 20, 25, 30, 25, 20, 15],
      },
      {
        name: "Canceled",
        data: [5, 10, 15, 20, 15, 10, 5],
      },
    ]);
    const liveShipmentStatus = ref({
      chart: {
        height: 200,
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
      colors: ["#3584FC", "#37D80A", "#FD5812", "#EE3E08"],
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        borderColor: "#EEF1FF",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        size: 3,
        // strokeWidth: 0,
        shape: ["circle", "circle"],
        strokeDashArray: 0,
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
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
        tickAmount: 6,
        min: 0,
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: true,
        position: "left",
        fontSize: "12px",
        horizontalAlign: "bottom",
        offsetX: -12,
        offsetY: 0,
        itemMargin: {
          horizontal: 0,
          vertical: 4,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          shape: "diamond",
          offsetX: -1,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      status,
      liveShipmentStatus,
    };
  },
});
</script>
