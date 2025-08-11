<template>
  <v-card
    class="revenue-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Revenue: $23.91k</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            This Week
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="revenue-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="445"
          :options="revenueChart"
          :series="revenue"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "Orders",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "Earnings",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Refunds",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Conversion Rate",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const revenueChart = ref({
      chart: {
        type: "bar",
        height: 445,
        toolbar: {
          show: true,
        },
      },
      colors: ["#605DFF", "#3584FC", "#AD63F6", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "50%",
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
        width: 5,
        show: true,
        colors: ["transparent"],
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
      revenue,
      revenueChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.revenue-card {
  .revenue-card-content {
    .chart {
      margin: {
        top: -8px;
        left: -13px;
        bottom: -22px;
      }
    }
    apx-chart {
      .apexcharts-tooltip-series-group {
        &.apexcharts-active {
          padding-bottom: 4px;
        }
      }
    }
  }
}
</style>
