<template>
  <div class="card bg-white border-0 rounded-3 p-4 mb-4">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
    >
      <h3 class="mb-0">Real-Time Sales</h3>

      <select
        class="form-select month-select form-control p-0 h-auto border-0 w-90"
        style="background-position: right 0 center"
        aria-label="Default select example"
      >
        <option selected>Today</option>
        <option value="1">Last Week</option>
        <option value="2">Last Month</option>
      </select>
    </div>

    <div style="margin-top: -30px">
      <apexchart
        v-if="isClient"
        type="bar"
        height="240"
        :options="realTimeSales"
        :series="sales"
      ></apexchart>
    </div>

    <div class="d-flex justify-content-between border-top pt-4">
      <div>
        <span class="fs-12 d-block mb-1">Total Sales</span>
        <h3 class="fs-18 fw-medium mb-0">
          $150.7k
          <span class="text-success fs-12">
            <i class="ri-arrow-up-fill"></i>
            12%
          </span>
        </h3>
      </div>
      <div>
        <span class="fs-12 d-block mb-1">Avg. Sales Per Day</span>
        <h3 class="fs-18 fw-medium mb-0">
          $19.2k
          <span class="text-danger fs-12">
            <i class="ri-arrow-down-fill"></i>
            7%
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RealTimeSalesChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sales",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3],
      },
    ]);
    const realTimeSales = ref({
      chart: {
        height: 240,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: "22px",
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "all",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "10px",
          colors: ["#64748B"],
        },
      },
      xaxis: {
        show: false,
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      colors: ["#3584FC"],
      yaxis: {
        tickAmount: 5,
        show: false,
        max: 11,
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
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sales,
      realTimeSales,
    };
  },
});
</script>
