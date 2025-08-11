<template>
  <div class="card border bg-white rounded-3 overflow-hidden mb-4">
    <div class="d-flex align-items-center p-4 pb-3 mb-1">
      <div class="flex-shrink-0">
        <div
          class="wh-55 bg-primary-div bg-opacity-25 text-center rounded-2"
          style="line-height: 55px"
        >
          <i
            class="ri-shopping-bag-3-line fs-22 bg-primary-div text-white rounded-2 p-2"
          ></i>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h3 class="fs-24 fw-medium mb-0">1,250</h3>
        <span>Total Orders</span>
      </div>
    </div>
    <div class="d-flex align-items-center p-4 pb-0">
      <span
        class="d-inline-block bg-success text-success bg-opacity-10 border border-success rounded-pill px-2 fw-medium d-flex align-items-center"
      >
        <i class="ri-arrow-up-fill fs-16 lh-1"></i>
        8%
      </span>
      <span class="ms-2 fs-12">from last month</span>
    </div>

    <div style="margin: -45px 0 -31px -9px">
      <apexchart
        v-if="isClient"
        type="bar"
        height="120"
        :options="totalOrders"
        :series="orders"
      ></apexchart>
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
        name: "Orders",
        data: [60, 50, 40, 50, 45, 30, 50, 35, 60, 45, 30, 60],
      },
    ]);
    const totalOrders = ref({
      chart: {
        type: "bar",
        height: 120,
        toolbar: {
          show: false,
        },
      },
      colors: ["#AD63F6"],
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "9px",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Sep",
        ],
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
      yaxis: {
        labels: {
          show: false,
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
      fill: {
        opacity: 1,
      },
      legend: {
        show: true,
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
      orders,
      totalOrders,
    };
  },
});
</script>
