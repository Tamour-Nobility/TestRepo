<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <h3 class="mb-0">Shipment Delivered</h3>
        <span class="fs-12">Last 30 days</span>
      </div>

      <div style="margin: -24px -40px -19px -17px">
        <apexchart
          v-if="isClient"
          type="line"
          height="300"
          :options="shipmentDelivered"
          :series="delivered"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ShipmentDeliveredChart",
  setup() {
    const isClient = ref(false);
    const delivered = ref([
      {
        name: "Ship Cargo",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "Truck Cargo",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "Car Box",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ]);
    const shipmentDelivered = ref({
      chart: {
        height: 300,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      //colors: ['red', 'blue', 'yellow'],
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 0,
      },
      grid: {
        borderColor: "#ECF0FF",
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false,
          },
        },
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
        ],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          formatter: (val: number) => {
            return "" + val / 1 + "%";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "center",
        fontFamily: "Inter",
        offsetY: 10,
        itemMargin: {
          horizontal: 8,
          vertical: 10,
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
          shape: "diamond",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "" + val + "%";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      delivered,
      shipmentDelivered,
    };
  },
});
</script>
