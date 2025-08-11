<template>
  <div class="card bg-primary-div bg-opacity-10 border-0 rounded-3 p-4 mb-4">
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0">
        <img src="~/assets/images/balance-2.png" alt="balance" />
      </div>
      <div class="flex-grow-1 ms-2">
        <span class="mb-1 d-block fw-medium text-body">GROSS EARNINGS</span>
        <div class="d-flex">
          <h3 class="mb-0 fs-20 fw-semibold me-1">$78,350.00</h3>
          <i
            class="material-symbols-outlined fs-16 position-relative top-3 text-success"
          >
            trending_up
          </i>
          <span class="text-success">+2.3%</span>
        </div>
      </div>
    </div>

    <apexchart
      v-if="isClient"
      type="line"
      height="207"
      :options="grossEarnings"
      :series="earnings"
    ></apexchart>

    <div
      class="d-flex justify-content-between pt-4 for-dark-border"
      style="border-top: 1px solid #e9d5ff"
    >
      <div>
        <span class="fs-14 d-block mb-1">Total Balance</span>
        <h3 class="fs-20 fw-medium mb-0">$3,42,890</h3>
      </div>
      <div>
        <span class="fs-14 d-block mb-1">Withdrawals</span>
        <h3 class="fs-20 fw-medium mb-0">$2,35,425</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "GrossEarningsChart",
  setup() {
    const isClient = ref(false);
    const earnings = ref([
      {
        name: "Earnings",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7],
      },
    ]);
    const grossEarnings = ref({
      chart: {
        height: 207,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 4,
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "1W",
          "2W",
          "3W",
          "4W",
          "5W",
          "6W",
          "7W",
          "8W",
          "9W",
          "10W",
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
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      colors: ["#9135E8"],
      yaxis: {
        show: false,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "K";
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      earnings,
      grossEarnings,
    };
  },
});
</script>
