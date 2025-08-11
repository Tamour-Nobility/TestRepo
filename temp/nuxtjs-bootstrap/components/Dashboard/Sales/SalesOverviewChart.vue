<template>
  <div class="card bg-white border-0 rounded-3 p-4 mb-4">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
    >
      <h3 class="mb-0">Sales Overview</h3>

      <select
        class="form-select month-select form-control p-0 h-auto border-0 w-90"
        style="background-position: right 0 center"
        aria-label="Default select example"
      >
        <option selected>This Year</option>
        <option value="1">Last Year</option>
        <option value="2">Last 2 Year</option>
      </select>
    </div>

    <div style="margin: -32px 0 -30px 0">
      <apexchart
        v-if="isClient"
        type="radar"
        height="340"
        :options="salesOverview"
        :series="overview"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesOverviewChart",
  setup() {
    const isClient = ref(false);
    const overview = ref([
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
          formatter: function (val: string) {
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
      overview,
      salesOverview,
    };
  },
});
</script>
