<template>
  <div class="card border-0 rounded-3 mb-4" style="background-color: #fff5ed">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Hospital Earnings</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90 bg-transparent"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="hospital-img pt-3 pb-4 text-center">
            <img src="~/assets/images/hospital.png" alt="hospital" />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="row">
            <div class="col-sm-6">
              <div
                class="card bg-white p-4 border-0 rounded-3 mb-4 exchange-for-dark"
              >
                <h2 class="fs-24 fw-medium mb-1">$120,000</h2>
                <p class="fs-12 mb-0">
                  Total Profit
                  <span class="text-danger ms-1">
                    <i class="ri-arrow-down-fill"></i>
                    5%
                  </span>
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div
                class="card bg-white p-4 border-0 rounded-3 mb-4 exchange-for-dark"
              >
                <h2 class="fs-24 fw-medium mb-1">$80,000</h2>
                <p class="fs-12 mb-0">
                  Total Costs
                  <span class="text-success ms-1">
                    <i class="ri-arrow-up-fill"></i>
                    3%
                  </span>
                </p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="position-relative z-1">
                <div
                  class="card bg-white p-4 border-0 rounded-3 mb-0 exchange-for-dark"
                >
                  <div class="row align-items-center">
                    <div class="col-lg-7">
                      <h2 class="fs-24 fw-medium mb-1">$900,000</h2>
                      <p class="fs-12 mb-0">
                        Total Earnings
                        <span class="text-success ms-1">
                          <i class="ri-arrow-up-fill"></i>
                          3%
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-5">
                      <div style="margin: -30px -10px -30px 0">
                        <apexchart
                          v-if="isClient"
                          type="area"
                          height="95"
                          :options="hospitalEarnings"
                          :series="hospital"
                        ></apexchart>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white bg-opacity-75 p-2 p-md-3 mx-3 mx-md-5 rounded-bottom-3 exchange-for-dark"
                ></div>
              </div>
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
  name: "HospitalEarnings",
  setup() {
    const isClient = ref(false);
    const hospital = ref([
      {
        name: "Earnings",
        data: [3, 7, 7, 10, 9, 11, 20],
      },
    ]);
    const hospitalEarnings = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 1,
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
          formatter: (val: string) => {
            return "$" + val + "k";
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
      hospital,
      hospitalEarnings,
    };
  },
});
</script>
