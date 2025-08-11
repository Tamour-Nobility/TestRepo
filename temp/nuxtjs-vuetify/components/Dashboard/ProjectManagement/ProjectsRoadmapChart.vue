<template>
  <v-card
    class="projects-roadmap-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Projects Roadmap</h5>
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
    <div class="roadmap-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="340"
          :options="projectsRoadmap"
          :series="roadmap"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ProjectsRoadmapChart",
  setup() {
    const isClient = ref(false);
    const roadmap = ref([
      {
        name: "Projects",
        data: [400, 550, 600, 700, 1000, 1100, 1200],
      },
    ]);
    const projectsRoadmap = ref({
      chart: {
        type: "bar",
        height: 340,
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Project Planning",
          "Research",
          "Design",
          "Front-end",
          "Development",
          "Review & QA",
          "Launch",
        ],
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
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
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      roadmap,
      projectsRoadmap,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects-roadmap-card {
  .roadmap-card-content {
    .chart {
      margin: {
        top: -25px;
        left: -10px;
        bottom: -25px;
      }
    }
  }
}
</style>
