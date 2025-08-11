<template>
  <div
    class="card border-0 rounded-3 p-4 position-relative mb-4 realtime-for-dark"
    style="background-color: #4936f5 !important"
  >
    <img
      src="~/assets/images/shape-3.png"
      class="position-absolute top-0 end-0"
      alt="shape"
    />
    <span class="fs-16 fw-normal text-border-color d-block mb-1">
      Realtime Active Users
    </span>
    <h2 class="lh-1 fs-36 mb-0 fw-medium text-white mb-5">4,890</h2>
    <span
      class="d-block mb-2 text-white fs-14 fw-normal pb-2"
      style="border-bottom: 1px solid #605dff"
    >
      Page views per second
    </span>

    <div class="text-center" style="margin: -10px -20px -10px -32px">
      <apexchart
        v-if="isClient"
        type="bar"
        height="170"
        :options="realtimeActiveUsers"
        :series="users"
      ></apexchart>
    </div>

    <ul class="ps-0 mb-0 list-unstyled">
      <li class="pb-1 mb-2" style="border-bottom: 1px solid #605dff">
        <span class="fs-14 fw-semibold text-white">Top Active Pages</span>
      </li>
      <li
        class="pb-1 mb-1 d-flex justify-content-between align-items-center"
        style="border-bottom: 1px solid #605dff"
      >
        <p class="fs-14 fw-normal text-white mb-0">
          /monitoring/user-activity
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line text-white fs-16"></i>
          </a>
        </p>
        <span class="fs-14 fw-normal text-white">1520</span>
      </li>
      <li
        class="pb-1 mb-1 d-flex justify-content-between align-items-center"
        style="border-bottom: 1px solid #605dff"
      >
        <p class="fs-14 fw-normal text-white mb-0">
          /monitoring/user-activity
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line text-white fs-16"></i>
          </a>
        </p>
        <span class="fs-14 fw-normal text-white">980</span>
      </li>
      <li
        class="pb-1 mb-1 d-flex justify-content-between align-items-center"
        style="border-bottom: 1px solid #605dff"
      >
        <p class="fs-14 fw-normal text-white mb-0">
          /specific/industry-comparisons
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line text-white fs-16"></i>
          </a>
        </p>
        <span class="fs-14 fw-normal text-white">856</span>
      </li>
      <li
        class="pb-1 mb-1 d-flex justify-content-between align-items-center"
        style="border-bottom: 1px solid #605dff"
      >
        <p class="fs-14 fw-normal text-white mb-0">
          /global-reach-2023/statistics
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line text-white fs-16"></i>
          </a>
        </p>
        <span class="fs-14 fw-normal text-white">735</span>
      </li>
      <li
        class="pb-1 mb-1 d-flex justify-content-between align-items-center"
        style="border-bottom: 1px solid #605dff"
      >
        <p class="fs-14 fw-normal text-white mb-0">
          /security-alerts/2024-update
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line text-white fs-16"></i>
          </a>
        </p>
        <span class="fs-14 fw-normal text-white">520</span>
      </li>
      <li class="d-flex justify-content-end mt-4">
        <a href="#" class="btn btn-outline-primary text-white">
          All Real-Time Report
          <i class="ri-arrow-right-s-line"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RealtimeActiveUsersChart",
  setup() {
    const isClient = ref(false);
    const users = ref([
      {
        name: "Users",
        data: [
          100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100,
          90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100,
        ],
      },
    ]);
    const realtimeActiveUsers = ref({
      chart: {
        type: "bar",
        height: 170,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF"],
      plotOptions: {
        bar: {
          columnWidth: "100%",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
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
        tickAmount: 5,
        max: 100,
        min: 0,
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
      legend: {
        show: false,
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
      users,
      realtimeActiveUsers,
    };
  },
});
</script>
