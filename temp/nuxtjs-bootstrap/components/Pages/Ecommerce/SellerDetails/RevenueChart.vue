<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Revenue: $23.91k</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90 d-sm-none"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">This Month</option>
          <option value="2">This Year</option>
        </select>
      </div>

      <apexchart
        v-if="isClient"
        type="bar"
        height="445"
        :options="revenueChart"
        :series="revenue"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "Orders",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "Earnings",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Refunds",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Conversion Rate",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const revenueChart = ref({
      chart: {
        type: "bar",
        height: 445,
        toolbar: {
          show: true,
        },
      },
      colors: ["#605DFF", "#3584FC", "#AD63F6", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "50%",
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
        width: 5,
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
        tickAmount: 5,
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
      revenue,
      revenueChart,
    };
  },
});
</script>
