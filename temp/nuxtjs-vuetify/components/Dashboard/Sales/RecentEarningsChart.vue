<template>
  <v-card
    class="recent-earnings-card trezo-card mb-25 border-radius d-block bg-white shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Earnings</h5>
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
    <div class="recent-earnings-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="386"
          :options="deviceSessions"
          :series="sessions"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RecentEarningsChart",
  setup() {
    const isClient = ref(false);
    const sessions = ref([
      {
        name: "Gross Earnings",
        data: [44, 60, 41, 67, 22, 43],
      },
      {
        name: "Tax Withheld",
        data: [13, 30, 20, 8, 13, 27],
      },
      {
        name: "Net Earnings",
        data: [11, 20, 15, 15, 21, 14],
      },
    ]);
    const deviceSessions = ref({
      chart: {
        type: "bar",
        height: 386,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: "28px",
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF", "#9CAAFF", "#DDE4FF"],
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
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
        max: 125,
        min: 0,
        labels: {
          formatter: (val: any) => {
            return "$" + val + "K";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
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
      fill: {
        opacity: 1,
      },
      grid: {
        show: true,
        strokeDashArray: 10,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sessions,
      deviceSessions,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-earnings-card {
  border: 1px solid var(--borderColor) !important;

  .recent-earnings-card-content {
    .chart {
      margin: {
        top: -5px;
        left: -16px;
        bottom: -27px;
      }
    }
  }
}
.recent-earnings-card {
  .apexcharts-canvas {
    .apexcharts-tooltip-series-group {
      &.apexcharts-active {
        padding-bottom: 4px;
      }
    }
  }
}
</style>
