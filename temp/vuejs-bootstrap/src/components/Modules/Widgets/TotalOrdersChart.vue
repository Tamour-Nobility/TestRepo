<template>
  <div
    class="card bg-white border-0 rounded-3 mb-4 stats-box position-relative"
  >
    <div class="card-body p-4">
      <div class="d-flex justify-content-between">
        <div class="mb-35">
          <span>Total Orders</span>
          <h3 class="fs-20 mt-1 mb-0">$72,458</h3>
        </div>

        <div class="chart-position">
          <apexchart
            v-if="isClient"
            type="bar"
            height="110"
            :options="totalOrders"
            :series="orders"
          ></apexchart>
        </div>
      </div>
      <div
        class="d-flex justify-content-between flex-wrap gap-2 align-items-center"
      >
        <span class="count up fw-medium ms-0">+25%</span>
        <span class="fs-12">Last 90 days</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalOrdersChart",
  setup() {
    const isClient = ref(false);
    const orders = ref([
      {
        name: "Total Orders",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
    ]);
    const totalOrders = ref({
      chart: {
        type: "bar",
        height: 110,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 2,
        },
      },
      colors: ["#0dcaf0"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val;
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      orders,
      totalOrders,
    };
  },
});
</script>
