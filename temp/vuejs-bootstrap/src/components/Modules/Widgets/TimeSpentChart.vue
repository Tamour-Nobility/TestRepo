<template>
  <div class="card bg-white border-0 rounded-3 mb-4 overflow-hidden">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Time Spent</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">This Month</option>
          <option value="2">This Year</option>
        </select>
      </div>

      <div style="margin-top: -20px; margin-left: -12px; margin-bottom: -20px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="255"
          :options="timeSpent"
          :series="spent"
        ></apexchart>
      </div>
    </div>
  </div>
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
        height: 255,
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
