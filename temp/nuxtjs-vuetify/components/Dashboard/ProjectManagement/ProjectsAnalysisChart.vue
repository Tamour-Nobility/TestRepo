<template>
  <v-card
    class="projects-analysis-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Projects Analysis</h5>
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
          type="bar"
          height="408"
          :options="projectsAnalysis"
          :series="analysis"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ProjectsAnalysisChart",
  setup() {
    const isClient = ref(false);
    const analysis = ref([
      {
        name: "Budgets",
        data: [40, 60, 55, 30, 60, 130, 63],
      },
      {
        name: "Expenses",
        data: [15, 65, 100, 40, 90, 90, 91],
      },
      {
        name: "Revenue",
        data: [55, 70, 30, 50, 110, 60, 52],
      },
    ]);
    const projectsAnalysis = ref({
      chart: {
        type: "bar",
        height: 408,
        toolbar: {
          show: true,
        },
      },
      colors: ["#605DFF", "#AD63F6", "#3584FC"],
      plotOptions: {
        bar: {
          columnWidth: "60%",
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
        tickAmount: 6,
        max: 150,
        min: 0,
        labels: {
          // formatter: (val) => {
          //     return '$' + val + 'k'
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
          formatter: function (val: string) {
            return "$" + val + "k";
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      analysis,
      projectsAnalysis,
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
