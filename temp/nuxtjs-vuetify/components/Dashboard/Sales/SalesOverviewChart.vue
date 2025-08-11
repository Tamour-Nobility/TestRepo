<template>
  <v-card
    class="sales-overview-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Sales Overview</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            This Year
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
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
    <div class="sales-overview-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="radar"
          height="340"
          :options="salesOverview"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesOverviewChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sales",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Sales",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Sales",
        data: [30, 70, 80, 15, 45, 10],
      },
    ]);
    const salesOverview = ref({
      chart: {
        height: 340,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      markers: {
        colors: "transparent",
        strokeWidth: 0,
      },
      colors: ["#605DFF", "#37D80A", "#FD5812"],
      yaxis: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val + "%";
          },
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
      sales,
      salesOverview,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-overview-card {
  .sales-overview-card-content {
    .chart {
      margin: {
        top: -10px;
        bottom: -40px;
      }
    }
    .apexcharts-canvas {
      .apexcharts-tooltip-series-group {
        &.apexcharts-active {
          padding-bottom: 5px;

          .apexcharts-tooltip-marker {
            display: none;
          }
        }
      }
    }
  }
}
</style>
