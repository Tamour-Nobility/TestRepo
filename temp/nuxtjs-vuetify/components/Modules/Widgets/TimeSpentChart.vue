<template>
  <v-card
    class="time-spent-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Time Spent</h5>
      <div class="d-flex align-items-center">
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
    </div>
    <div class="time-spent-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="260"
          :options="timeSpent"
          :series="spent"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TimeSpentChart",
  setup() {
    const isClient = ref(false);
    const spent = ref([
      {
        name: "Time Spent",
        data: [30, 70, 80, 95, 90, 20, 40],
      },
    ]);
    const timeSpent = ref({
      chart: {
        type: "bar",
        height: 260,
        toolbar: {
          show: false,
        },
      },
      colors: ["#AD63F6"],
      plotOptions: {
        bar: {
          columnWidth: "30%",
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
        width: 4,
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
        tickAmount: 4,
        max: 100,
        min: 0,
        labels: {
          // formatter: (val) => {
          //     return val + 'hrs'
          // },
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
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " hours";
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
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      spent,
      timeSpent,
    };
  },
});
</script>

<style lang="scss" scoped>
.time-spent-card {
  .time-spent-card-content {
    .chart {
      margin: {
        top: -20px;
        left: -12px;
        bottom: -20px;
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
