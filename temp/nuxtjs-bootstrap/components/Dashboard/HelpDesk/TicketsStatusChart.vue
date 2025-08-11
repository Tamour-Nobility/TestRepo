<template>
  <div class="row mb-4">
    <div class="col-lg-12 col-xxl-8 col-sm-8 pe-sm-0 custom-p1 custom-xxxl-10">
      <div
        class="card bg-white border-0 rounded-3 rounded-end-0 position-relative"
      >
        <div class="card-body p-4">
          <div
            class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
          >
            <h3 class="mb-0">Tickets Status</h3>
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

          <div
            style="margin-top: -20px; margin-left: -15px; margin-bottom: -22px"
          >
            <apexchart
              v-if="isClient"
              type="bar"
              height="395"
              :options="ticketsStatus"
              :series="status"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12 col-xxl-4 col-sm-4 ps-sm-0 custom-p2 custom-xxxl-2">
      <div
        class="card bg-white border-0 rounded-3 rounded-start-0 position-relative border-start h-100"
      >
        <div class="card-body p-4">
          <div class="d-flex justify-content-end mb-3 mb-lg-4 d-none d-sm-flex">
            <select
              class="form-select month-select form-control p-0 h-auto border-0 w-90"
              style="background-position: right 0 center"
              aria-label="Default select example"
            >
              <option selected>This Week</option>
              <option value="1">This Month</option>
              <option value="2">This Year</option>
            </select>
          </div>
          <h4 class="fw-normal fs-18 mb-1">Avg. 1.5k</h4>
          <p class="mb-4">Tickets Weekly Solved</p>

          <div
            class="d-flex d-sm-block d-lg-flex d-xxl-block justify-content-between flex-wrap gap-2"
          >
            <div class="mb-3 pb-md-1">
              <div class="mb-1">
                <span
                  class="wh-11 bg-primary rounded-1 d-inline-block position-relative top-1 me-1"
                ></span>
                <span>Solved</span>
              </div>
              <h4 class="fw-medium fs-18 mb-1">1.5k</h4>
            </div>
            <div class="mb-3 pb-md-1">
              <div class="mb-1">
                <span
                  class="wh-11 bg-primary rounded-1 d-inline-block position-relative top-1 me-1"
                ></span>
                <span>In Progress</span>
              </div>
              <h4 class="fw-medium fs-18 mb-1">4.7k</h4>
            </div>
            <div class="mb-3 pb-md-1">
              <div class="mb-1">
                <span
                  class="wh-11 bg-primary-div rounded-1 d-inline-block position-relative top-1 me-1"
                ></span>
                <span>Pending</span>
              </div>
              <h4 class="fw-medium fs-18 mb-1">780</h4>
            </div>
            <div>
              <div class="mb-1">
                <span
                  class="wh-11 bg-danger rounded-1 d-inline-block position-relative top-1 me-1"
                ></span>
                <span>Others</span>
              </div>
              <h4 class="fw-medium fs-18 mb-1">320</h4>
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
  name: "TicketsStatusChart",
  setup() {
    const isClient = ref(false);
    const status = ref([
      {
        name: "Solved",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "In Progress",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Pending",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Others",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const ticketsStatus = ref({
      chart: {
        type: "bar",
        height: 395,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#3584FC", "#AD63F6", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "65%",
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + " Tickets";
          },
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
      status,
      ticketsStatus,
    };
  },
});
</script>
