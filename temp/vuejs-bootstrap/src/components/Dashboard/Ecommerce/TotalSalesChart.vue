<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Total Sales</h3>
        <select
          class="form-select month-select form-control"
          aria-label="Default select example"
          v-model="selectedTimeFrame"
          @change="changeSalesData"
        >
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Today">Today</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div style="margin-bottom: -15px; margin-left: -10px; margin-top: -5px">
        <apexchart
          v-if="isClient"
          type="area"
          height="365"
          :options="totalSales"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalSalesChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeFrame = ref("Monthly");

    const sales = ref([
      {
        name: "Current Sale",
        data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40, 95, 80],
      },
      {
        name: "Last Year Sale",
        data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53, 70, 70],
      },
    ]);

    const totalSales = ref({
      chart: {
        type: "area",
        height: 366,
        zoom: {
          enabled: false,
        },
      },
      colors: ["#605DFF", "#DDE4FF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [2, 2, 0],
        dashArray: [0, 6, 0],
      },
      grid: {
        borderColor: "#ffffff",
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.5,
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
          "Dec",
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
            return "$" + val / 1 + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
    });

    const changeSalesData = () => {
      switch (selectedTimeFrame.value) {
        case "Weekly":
          sales.value = [
            { name: "Current Sale", data: [10, 20, 30, 40, 50, 60, 70] },
            { name: "Last Year Sale", data: [15, 25, 35, 45, 55, 65, 75] },
          ];
          break;
        case "Today":
          sales.value = [
            { name: "Current Sale", data: [5, 10, 15, 20, 25] },
            { name: "Last Year Sale", data: [3, 8, 12, 18, 22] },
          ];
          break;
        case "Yearly":
          sales.value = [
            { name: "Current Sale", data: [90, 99, 80, 70, 99, 75, 95] },
            {
              name: "Last Year Sale",
              data: [99, 70, 85, 90, 75, 90, 80],
            },
          ];
          break;
        default:
          // Monthly
          sales.value = [
            {
              name: "Current Sale",
              data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40, 95, 80],
            },
            {
              name: "Last Year Sale",
              data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53, 70, 70],
            },
          ];
      }
    };

    onMounted(() => {
      isClient.value = true;
      changeSalesData(); // Set initial data based on default selectedTimeFrame
    });

    return {
      isClient,
      sales,
      totalSales,
      selectedTimeFrame,
      changeSalesData,
    };
  },
});
</script>
