<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Projects Progress</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-110"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>Last 6 Month</option>
          <option value="1">Last 8 Month</option>
          <option value="2">Last 12 Month</option>
        </select>
      </div>

      <div style="margin-bottom: -20px; margin-left: -13px; margin-top: -8px">
        <apexchart
          v-if="isClient"
          type="line"
          height="366"
          :options="projectsProgress"
          :series="progress"
        ></apexchart>
      </div>
    </div>
  </div>
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
        height: 366,
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
