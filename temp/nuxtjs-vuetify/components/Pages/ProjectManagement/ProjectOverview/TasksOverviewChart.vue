<template>
  <v-card
    class="projects-analysis-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Tasks Overview</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              Last 7 Days
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
    <div class="analysis-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="pie"
          height="445"
          :options="tasksOverview"
          :series="overview"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TasksOverviewChart",
  setup() {
    const isClient = ref(false);
    const overview = ref([55, 44, 30, 12, 22]);
    const tasksOverview = ref({
      chart: {
        height: 445,
        type: "pie",
      },
      labels: ["Completed", "In Progress", "Pending", "Active", "Cancelled"],
      colors: ["#37D80A", "#605DFF", "#AD63F6", "#3584FC", "#FD5812"],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 7,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          radius: 2,
          height: 9,
          offsetX: -2,
          offsetY: -0.1,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      overview,
      tasksOverview,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects-analysis-card {
  .analysis-card-content {
    .chart {
      margin: {
        top: -5px;
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
