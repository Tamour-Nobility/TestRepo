<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <span>Average Delivery Time</span>
        <span class="fs-12">Per Month</span>
      </div>
      <div style="margin: -24px -22px -26px -18px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="200"
          :options="averageDeliveryTime"
          :series="average"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AverageDeliveryTimeChart",
  setup() {
    const isClient = ref(false);
    const average = ref([
      {
        name: "Average Delivery Time",
        data: [30, 40, 50, 60, 70, 80, 95, 95],
      },
    ]);
    const averageDeliveryTime = ref({
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false,
        },
      },
      colors: ["#BDDCFF"],
      plotOptions: {
        bar: {
          columnWidth: "55%",
        },
      },
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
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
        tickAmount: 4,
        max: 100,
        min: 0,
        labels: {
          style: {
            colors: "#8695AA",
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
      tooltip: {
        y: {
          formatter: (val: string) => {
            return "" + val + "Hours";
          },
        },
      },
      legend: {
        show: true,
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
          shape: "diamond",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.1,
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      average,
      averageDeliveryTime,
    };
  },
});
</script>
