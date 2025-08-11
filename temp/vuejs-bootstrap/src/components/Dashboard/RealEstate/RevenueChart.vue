<template>
  <div class="card rounded-3 bg-white border-0 mb-4">
    <div class="card-body p-4">
      <div class="d-flex">
        <div class="flex-grow-1 me-3">
          <div class="d-flex align-items-start">
            <div class="me-4">
              <span class="d-block mb-2">Revenue</span>
              <h3 class="mb-0 fs-20">$194,712</h3>
            </div>
            <span
              class="d-inline-block border-success border bg-success bg-opacity-10 text-success px-2 rounded-pill fs-12 fw-medium position-relative top-4"
            >
              + 60%
            </span>
          </div>
        </div>

        <div class="flex-shrink-0">
          <span class="fs-12">Last 7 days</span>
        </div>
      </div>
      <div style="margin: -26px -23px -25px -22px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="125"
          :options="revenueChart"
          :series="revenue"
        ></apexchart>
      </div>
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
        name: "Income",
        data: [
          {
            x: "2019",
            y: 1292,
            goals: [
              {
                name: "Expenses",
                value: 1400,
                strokeHeight: 5,
                strokeColor: "#FFCEA9",
              },
            ],
          },
          {
            x: "2018",
            y: 4432,
            goals: [
              {
                name: "Expenses",
                value: 5400,
                strokeHeight: 5,
                strokeColor: "#FFCEA9",
              },
            ],
          },
          {
            x: "2020",
            y: 5423,
            goals: [
              {
                name: "Expenses",
                value: 5200,
                strokeHeight: 5,
                strokeColor: "#FFCEA9",
              },
            ],
          },
          {
            x: "2021",
            y: 6653,
            goals: [
              {
                name: "Expenses",
                value: 6500,
                strokeHeight: 5,
                strokeColor: "#FFCEA9",
              },
            ],
          },
          {
            x: "2022",
            y: 8133,
            goals: [
              {
                name: "Expenses",
                value: 6600,
                strokeHeight: 13,
                strokeWidth: 0,
                strokeLineCap: "round",
                strokeColor: "#FFCEA9",
              },
            ],
          },
          {
            x: "2023",
            y: 7132,
            goals: [
              {
                name: "Expenses",
                value: 7500,
                strokeHeight: 5,
                strokeColor: "#FFCEA9",
              },
            ],
          },
          {
            x: "2024",
            y: 7332,
            goals: [
              {
                name: "Expenses",
                value: 8700,
                strokeHeight: 5,
                strokeColor: "#FFCEA9",
              },
            ],
          },
        ],
      },
    ]);
    const revenueChart = ref({
      chart: {
        height: 125,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "60%",
        },
      },
      colors: ["#FD5812"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Income", "Expenses"],
        position: "right",
        fontSize: "12px",
        horizontalAlign: "bottom",
        offsetX: -12,
        offsetY: 51,
        itemMargin: {
          horizontal: 0,
          vertical: 4,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          shape: "diamond",
          offsetX: -1,
          fillColors: ["#FD5812", "#FFCEA9"],
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "K";
          },
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
