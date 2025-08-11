<template>
  <div
    class="card bg-white border-0 rounded-3 mb-4 stats-box position-relative"
  >
    <div class="card-body p-4">
      <div class="row">
        <div class="col-lg-6">
          <span>Clicks</span>
          <div class="d-flex align-items-center mb-4">
            <h3 class="fs-20 mt-1 mb-0">4,500</h3>
            <span
              class="d-inline-block bg-success text-success bg-opacity-25 px-2 rounded-1 fs-12 fw-medium d-flex align-items-center ms-2"
            >
              <i class="ri-arrow-up-s-fill fs-20 lh-1 me-1"></i> 37.5%
            </span>
          </div>
          <span class="fs-12">Last 30 days</span>
        </div>

        <div class="col-lg-6">
          <div class="chart-position" style="max-width: 160px">
            <apexchart
              v-if="isClient"
              type="area"
              height="150"
              :options="clicksChart"
              :series="clicks"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ClicksChart",
  setup() {
    const isClient = ref(false);
    const clicks = ref([
      {
        name: "Clicks",
        data: [
          100, 130, 115, 170, 110, 120, 85, 140, 150, 100, 110, 90, 160, 125,
          105, 130, 145, 120, 150, 155, 220, 165,
        ],
      },
    ]);
    const clicksChart = ref({
      chart: {
        type: "area",
        height: 150,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#605DFF"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.9,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
          "13 Jan",
          "14 Jan",
          "15 Jan",
          "16 Jan",
          "17 Jan",
          "18 Jan",
          "19 Jan",
          "20 Jan",
          "21 Jan",
          "22 Jan",
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
        tickAmount: 5,
        show: false,
        max: 250,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      clicks,
      clicksChart,
    };
  },
});
</script>
