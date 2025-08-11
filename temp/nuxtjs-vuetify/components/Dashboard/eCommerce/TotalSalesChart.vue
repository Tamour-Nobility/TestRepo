<template>
  <v-card class="total-sales-card trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Total Sales</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius"
          >
            Monthly
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Weekly
          </button>
          <button type="button" class="bg-transparent border-none">
            Monthly
          </button>
          <button type="button" class="bg-transparent border-none">
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="chart">
      <apexchart
        v-if="isClient"
        type="area"
        height="365"
        :options="totalSales"
        :series="sales"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalSalesChart",
  setup() {
    const isClient = ref(false);
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
        height: 365,
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
        show: false,
        borderColor: "#ECEEF2",
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
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "K";
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
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

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sales,
      totalSales,
    };
  },
});
</script>

<style lang="scss" scoped>
.total-sales-card {
  .chart {
    margin: {
      bottom: -15px;
      left: -10px;
      top: -5px;
    }
  }
}
</style>
