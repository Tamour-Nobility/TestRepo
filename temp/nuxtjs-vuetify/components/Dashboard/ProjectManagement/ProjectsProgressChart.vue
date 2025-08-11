<template>
  <v-card
    class="projects-progress-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Projects Progress</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last 6 Months
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
    <div class="progress-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="line"
          height="330"
          :options="projectsProgress"
          :series="progress"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ProjectsProgressChart",
  setup() {
    const isClient = ref(false);
    const progress = ref([
      {
        name: "Completed",
        data: [70, 23, 45, 30, 62, 70],
      },
      {
        name: "In Progress",
        data: [15, 40, 37, 38, 80, 45],
      },
      {
        name: "Not Start Yet",
        data: [50, 11, 60, 15, 31, 30],
      },
      {
        name: "Cancelled",
        data: [30, 60, 25, 22, 50, 15],
      },
    ]);
    const projectsProgress = ref({
      chart: {
        height: 330,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF", "#FE7A36", "#AD63F6", "#D71C00"],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      markers: {
        size: 4,
        strokeWidth: 0,
        shape: ["circle", "square", "circle", "square"],
        hover: {
          size: 5,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
            return val + "%";
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
          width: 9,
          height: 9,
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
      progress,
      projectsProgress,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects-progress-card {
  .progress-card-content {
    .chart {
      margin: {
        bottom: -20px;
        left: -13px;
        top: -8px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
