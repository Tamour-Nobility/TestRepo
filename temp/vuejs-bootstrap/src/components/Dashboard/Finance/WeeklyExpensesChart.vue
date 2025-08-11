<template>
  <div class="card bg-white border-0 rounded-3 mb-4 stats-box">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between flex-wrap gap-2 mb-3">
        <div>
          <div class="d-flex align-items-center">
            <span>Weekly Expenses</span>
            <span
              class="d-inline-block px-2 bg-danger bg-opacity-10 text-danger border border-danger rounded-pill fs-12 fw-medium ms-2"
            >
              -5.1%
            </span>
          </div>
          <h3 class="fs-20 mt-1 mb-0">$1,200</h3>
        </div>
        <span class="fs-12">Last 7 days</span>
      </div>
      <div style="margin: -25px -11px -28px -2px">
        <apexchart
          v-if="isClient"
          type="area"
          height="130"
          :options="weeklyExpenses"
          :series="expenses"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "WeeklyExpensesChart",
  setup() {
    const isClient = ref(false);
    const expenses = ref([
      {
        name: "Weekly Expenses",
        data: [0, 25, 40, 50, 80, 70, 140],
      },
    ]);
    const weeklyExpenses = ref({
      chart: {
        type: "area",
        height: 130,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#AD63F6", "#605DFF"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight", //straight', 'smooth', 'monotoneCubic', 'stepline
        width: 2,
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
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 140,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        opposite: "right",
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
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      expenses,
      weeklyExpenses,
    };
  },
});
</script>
