<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4 pb-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Leads by Source</h3>
        <select
          class="form-select month-select form-control w-135"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>

      <div style="margin-top: -10px; margin-bottom: 10px">
        <apexchart
          v-if="isClient"
          type="donut"
          height="265"
          :options="leadsBySource"
          :series="source"
        ></apexchart>
      </div>

      <div class="row justify-content-center">
        <div class="col col-lg-4 col-md-2 mb-4">
          <div class="d-flex align-items-center">
            <span class="wh-11 bg-primary rounded-1 me-1"></span>
            <span>Organic</span>
          </div>
          <h4 class="fs-18 fw-medium mb-0 mt-1">320</h4>
        </div>
        <div class="col col-lg-4 col-md-2 mb-4">
          <div class="d-flex align-items-center">
            <span
              class="wh-11 rounded-1 me-1"
              style="background-color: #3584fc"
            ></span>
            <span>Paid</span>
          </div>
          <h4 class="fs-18 fw-medium mb-0 mt-1">60</h4>
        </div>
        <div class="col col-lg-4 col-md-2 mb-4">
          <div class="d-flex align-items-center">
            <span class="wh-11 bg-primary-div rounded-1 me-1"></span>
            <span>Direct</span>
          </div>
          <h4 class="fs-18 fw-medium mb-0 mt-1">30</h4>
        </div>
        <div class="col col-lg-4 col-md-2 mb-4">
          <div class="d-flex align-items-center">
            <span class="wh-11 bg-info rounded-1 me-1"></span>
            <span>Social</span>
          </div>
          <h4 class="fs-18 fw-medium mb-0 mt-1">160</h4>
        </div>
        <div class="col col-lg-4 col-md-2 mb-4">
          <div class="d-flex align-items-center">
            <span class="wh-11 bg-success rounded-1 me-1"></span>
            <span>Referrals</span>
          </div>
          <h4 class="fs-18 fw-medium mb-0 mt-1">279</h4>
        </div>
        <div class="col col-lg-4 col-md-2 mb-4">
          <div class="d-flex align-items-center">
            <span class="wh-11 bg-danger rounded-1 me-1"></span>
            <span>Others</span>
          </div>
          <h4 class="fs-18 fw-medium mb-0 mt-1">19</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LeadsBySourceChart",
  setup() {
    const isClient = ref(false);
    const source = ref([320, 60, 30, 160, 279, 19]);
    const leadsBySource = ref({
      chart: {
        height: 265,
        type: "donut",
      },
      labels: ["Organic", "Paid", "Direct", "Social", "Referrals", "Others"],
      colors: [
        "#605DFF",
        "#3584FC",
        "#AD63F6",
        "#0dcaf0",
        "#25B003",
        "#FD5812",
      ],
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: false,
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "28px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#64748B",
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      source,
      leadsBySource,
    };
  },
});
</script>
