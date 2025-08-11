<template>
  <div class="card border-0 p-4 bg-white rounded-3 mb-4">
    <div class="d-flex flex-wrap gap-2 justify-content-between mb-30 pb-lg-2">
      <div>
        <h3 class="mb-1">Analytics Overview</h3>
        <span>Track, Analyze, and Optimize Performance</span>
      </div>
      <div>
        <ul class="analytics-tabs d-flex list-unstyled ps-0 mb-0">
          <li>
            <button>Day</button>
          </li>
          <li>
            <button class="active">Week</button>
          </li>
          <li>
            <button>Month</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="row align-items-end">
      <div class="col-lg-8 col-md-7">
        <div class="me-plus-27 mb-4 mb-md-0">
          <div style="margin: -23px -9px -27px -17px">
            <apexchart
              v-if="isClient"
              type="bar"
              height="375"
              :options="analyticsOverview"
              :series="analytics"
            ></apexchart>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-5">
        <div class="ms-minus-27">
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2 pb-1">
              <div>
                <span class="fs-12 d-block mb-1 text-secondary">New Users</span>
                <h4 class="fs-16 mb-0">19.5k</h4>
              </div>
              <div class="text-end">
                <span class="fs-12 d-block mb-1">Goal Reached</span>
                <h4 class="fs-16 mb-0 text-body">75%</h4>
              </div>
            </div>
            <div
              class="progress rounded-pill"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary rounded-pill"
                style="width: 75%; height: 4px"
              ></div>
            </div>
          </div>
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2 pb-1">
              <div>
                <span class="fs-12 d-block mb-1 text-secondary">
                  Page Views
                </span>
                <h4 class="fs-16 mb-0">48k</h4>
              </div>
              <div class="text-end">
                <span class="fs-12 d-block mb-1">Goal Reached</span>
                <h4 class="fs-16 mb-0 text-body">45%</h4>
              </div>
            </div>
            <div
              class="progress rounded-pill"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary-div rounded-pill"
                style="width: 45%; height: 4px"
              ></div>
            </div>
          </div>
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2 pb-1">
              <div>
                <span class="fs-12 d-block mb-1 text-secondary">
                  Page Sessions
                </span>
                <h4 class="fs-16 mb-0">33.3k</h4>
              </div>
              <div class="text-end">
                <span class="fs-12 d-block mb-1">Goal Reached</span>
                <h4 class="fs-16 mb-0 text-body">55%</h4>
              </div>
            </div>
            <div
              class="progress rounded-pill"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary rounded-pill"
                style="width: 55%; height: 4px"
              ></div>
            </div>
          </div>

          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2 pb-1">
              <div>
                <span class="fs-12 d-block mb-1 text-secondary">
                  Bounce Rate
                </span>
                <h4 class="fs-16 mb-0">22.45%</h4>
              </div>
              <div class="text-end">
                <span class="fs-12 d-block mb-1">Goal Reached</span>
                <h4 class="fs-16 mb-0 text-body">35%</h4>
              </div>
            </div>
            <div
              class="progress rounded-pill"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger rounded-pill"
                style="width: 30%; height: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AnalyticsOverviewChart",
  setup() {
    const isClient = ref(false);
    const analytics = ref([
      {
        name: "New users",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "Page Views",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Page Sessions",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Bounce Rate",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const analyticsOverview = ref({
      chart: {
        type: "bar",
        height: 374,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#AD63F6", "#3584FC", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "65%",
          borderRadius: 4,
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
        width: 3,
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
      analytics,
      analyticsOverview,
    };
  },
});
</script>
