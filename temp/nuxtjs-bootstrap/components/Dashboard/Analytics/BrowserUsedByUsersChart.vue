<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-4"
      >
        <h3 class="mb-0">Browser Used By Users</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 pe-4 w-auto"
          style="background-position: right 0 center; color: #64748b !important"
          aria-label="Default select example"
        >
          <option>Last Week</option>
          <option value="1">Last Month</option>
          <option selected value="2">Last Year</option>
        </select>
      </div>

      <div class="row align-items-center">
        <div class="col-sm-5">
          <apexchart
            v-if="isClient"
            type="pie"
            height="400"
            :options="browserUsedByUsers"
            :series="browserUsed"
          ></apexchart>
        </div>

        <div class="col-sm-7">
          <ul class="ps-0 mb-0 list-unstyled ms-plus-21 border-top pt-1">
            <li
              class="d-flex justify-content-between align-items-center border-bottom pb-1 mb-1"
            >
              <div class="d-flex align-items-center">
                <span
                  class="d-inline-block bg-success rounded-circle"
                  style="width: 10px; height: 10px"
                ></span>
                <div class="ps-3">
                  <span class="fs-12 text-secondary d-block mb-1">Desktop</span>
                  <h4 class="fw-semibold fs-16 mb-0">45.2%</h4>
                </div>
              </div>
              <div class="">
                <span class="text-body d-block mb-1 fs-12">Sessions</span>
                <h4 class="text-body mb-0 fw-semibold">8,732</h4>
              </div>
            </li>
            <li
              class="d-flex justify-content-between align-items-center border-bottom pb-1 mb-1"
            >
              <div class="d-flex align-items-center">
                <span
                  class="d-inline-block bg-primary rounded-circle"
                  style="width: 10px; height: 10px"
                ></span>
                <div class="ps-3">
                  <span class="fs-12 text-secondary d-block mb-1">Mobile</span>
                  <h4 class="fw-semibold fs-16 mb-0">48.7%</h4>
                </div>
              </div>
              <div class="">
                <span class="text-body d-block mb-1 fs-12">Sessions</span>
                <h4 class="text-body mb-0 fw-semibold">9,416</h4>
              </div>
            </li>
            <li
              class="d-flex justify-content-between align-items-center border-bottom pb-1 mb-1"
            >
              <div class="d-flex align-items-center">
                <span
                  class="d-inline-block bg-primary-div rounded-circle"
                  style="width: 10px; height: 10px"
                ></span>
                <div class="ps-3">
                  <span class="fs-12 text-secondary d-block mb-1">Tablet</span>
                  <h4 class="fw-semibold fs-16 mb-0">32.3%</h4>
                </div>
              </div>
              <div class="">
                <span class="text-body d-block mb-1 fs-12">Sessions</span>
                <h4 class="text-body mb-0 fw-semibold">1,042</h4>
              </div>
            </li>
            <li
              class="d-flex justify-content-between align-items-center border-bottom pb-1 mb-1"
            >
              <div class="d-flex align-items-center">
                <span
                  class="d-inline-block bg-danger rounded-circle"
                  style="width: 10px; height: 10px"
                ></span>
                <div class="ps-3">
                  <span class="fs-12 text-secondary d-block mb-1">Other</span>
                  <h4 class="fw-semibold fs-16 mb-0">45.2%</h4>
                </div>
              </div>
              <div class="">
                <span class="text-body d-block mb-1 fs-12">Sessions</span>
                <h4 class="text-body mb-0 fw-semibold">135</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p class="fs-12 lh-16 mt-3 pt-2">
        This data helps you understand which devices are most commonly used and
        how engagement metrics vary between them.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BrowserUsedByUsersChart",
  setup() {
    const isClient = ref(false);
    const browserUsed = ref([55, 44, 30, 12]);
    const browserUsedByUsers = ref({
      chart: {
        height: 400,
        type: "pie",
      },
      labels: ["Desktop", "Mobile", "Tablet", "Other"],
      colors: ["#37D80A", "#605DFF", "#AD63F6", "#FD5812"],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 7,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          radius: 2,
          height: 9,
          offsetX: -2,
          offsetY: -0.1,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      browserUsed,
      browserUsedByUsers,
    };
  },
});
</script>
