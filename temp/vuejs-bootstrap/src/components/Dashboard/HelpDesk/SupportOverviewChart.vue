<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Support Overview</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>Last 7 Days</option>
          <option value="1">This Month</option>
          <option value="2">This Year</option>
        </select>
      </div>

      <apexchart
        v-if="isClient"
        type="pie"
        height="385"
        :options="supportOverview"
        :series="overview"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SupportOverviewChart",
  setup() {
    const isClient = ref(false);
    const overview = ref([55, 44, 30, 12]);
    const supportOverview = ref({
      chart: {
        height: 385,
        type: "pie",
      },
      labels: ["Solved", "In Progress", "Pending", "Unassigned"],
      colors: ["#37D80A", "#605DFF", "#AD63F6", "#FD5812"],
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
      supportOverview,
    };
  },
});
</script>
