<template>
  <div class="card bg-white border-0 p-4 mb-4 rounded-10">
    <div
      class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-1"
    >
      <span class="d-block mb-1">Ethereum Rate</span>
      <div class="dropdown action-opt text-center">
        <button
          class="btn bg-transparent p-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i data-feather="more-vertical"></i>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow"
        >
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="edit"></i>
              Edit
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="eye"></i>
              View
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="trash"></i>
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="d-flex align-items-center mb-2">
      <h3 class="fs-32 fw-bold text-secondary mb-0">$1,528</h3>
      <span
        class="fw-medium fs-12 text-success bg-success bg-opacity-10 border border-success px-2 rounded-pill ms-2"
      >
        +5.4%
        <i class="ri-arrow-up-line"></i>
      </span>
    </div>

    <span class="fs-12 d-block mb-4">Vs previous 30 days</span>

    <ul
      class="nav nav-tabs justify-content-between ethereum-rate-tabs"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="ethereum1-tab"
          data-bs-toggle="tab"
          data-bs-target="#ethereum1-tab-pane"
          type="button"
          role="tab"
          aria-controls="ethereum1-tab-pane"
          aria-selected="true"
        >
          1D
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="ethereum2-tab"
          data-bs-toggle="tab"
          data-bs-target="#ethereum2-tab-pane"
          type="button"
          role="tab"
          aria-controls="ethereum2-tab-pane"
          aria-selected="false"
        >
          5D
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="ethereum3-tab"
          data-bs-toggle="tab"
          data-bs-target="#ethereum3-tab-pane"
          type="button"
          role="tab"
          aria-controls="ethereum3-tab-pane"
          aria-selected="false"
        >
          1M
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="ethereum4-tab"
          data-bs-toggle="tab"
          data-bs-target="#ethereum4-tab-pane"
          type="button"
          role="tab"
          aria-controls="ethereum4-tab-pane"
          aria-selected="false"
        >
          6M
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="ethereum5-tab"
          data-bs-toggle="tab"
          data-bs-target="#ethereum5-tab-pane"
          type="button"
          role="tab"
          aria-controls="ethereum5-tab-pane"
          aria-selected="false"
        >
          1Y
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="ethereum1-tab-pane"
        role="tabpanel"
        aria-labelledby="ethereum1-tab"
        tabindex="0"
      >
        <div style="margin: -30px -5px 0 -21px">
          <EthereumRateChart />
        </div>
        <ul class="ps-0 mb-0 list-unstyled mt-30">
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,605.08</span>
            <span class="fs-12 fw-medium text-success">+5.4% </span>
          </li>
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">01:20 PM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,615.50</span>
            <span class="fs-12 fw-medium text-danger">-3.21%</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,831.13</span>
            <span class="fs-12 fw-medium text-success">+7.32%</span>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="ethereum2-tab-pane"
        role="tabpanel"
        aria-labelledby="ethereum2-tab"
        tabindex="0"
      >
        <div style="margin: -30px -5px 0 -21px">
          <EthereumRateTwoChart />
        </div>
        <ul class="ps-0 mb-0 list-unstyled mt-30">
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,605.08</span>
            <span class="fs-12 fw-medium text-success">+5.4% </span>
          </li>
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">01:20 PM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,615.50</span>
            <span class="fs-12 fw-medium text-danger">-3.21%</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,831.13</span>
            <span class="fs-12 fw-medium text-success">+7.32%</span>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="ethereum3-tab-pane"
        role="tabpanel"
        aria-labelledby="ethereum3-tab"
        tabindex="0"
      >
        <div style="margin: -30px -5px 0 -21px">
          <EthereumRateThreeChart />
        </div>
        <ul class="ps-0 mb-0 list-unstyled mt-30">
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,605.08</span>
            <span class="fs-12 fw-medium text-success">+5.4% </span>
          </li>
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">01:20 PM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,615.50</span>
            <span class="fs-12 fw-medium text-danger">-3.21%</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,831.13</span>
            <span class="fs-12 fw-medium text-success">+7.32%</span>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="ethereum4-tab-pane"
        role="tabpanel"
        aria-labelledby="ethereum4-tab"
        tabindex="0"
      >
        <div style="margin: -30px -5px 0 -21px">
          <EthereumRateFourChart />
        </div>
        <ul class="ps-0 mb-0 list-unstyled mt-30">
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,605.08</span>
            <span class="fs-12 fw-medium text-success">+5.4% </span>
          </li>
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">01:20 PM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,615.50</span>
            <span class="fs-12 fw-medium text-danger">-3.21%</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,831.13</span>
            <span class="fs-12 fw-medium text-success">+7.32%</span>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="ethereum5-tab-pane"
        role="tabpanel"
        aria-labelledby="ethereum5-tab"
        tabindex="0"
      >
        <div style="margin: -30px -5px 0 -21px">
          <EthereumRateFiveChart />
        </div>
        <ul class="ps-0 mb-0 list-unstyled mt-30">
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,605.08</span>
            <span class="fs-12 fw-medium text-success">+5.4% </span>
          </li>
          <li class="d-flex justify-content-between align-items-center mb-4">
            <span class="fs-12 fw-bold">01:20 PM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,615.50</span>
            <span class="fs-12 fw-medium text-danger">-3.21%</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span class="fs-12 fw-bold">11:30 AM</span>
            <span class="fs-12 fw-semibold text-secondary">$3,831.13</span>
            <span class="fs-12 fw-medium text-success">+7.32%</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

import EthereumRateChart from "./EthereumRateChart.vue";
import EthereumRateTwoChart from "./EthereumRateTwoChart.vue";
import EthereumRateThreeChart from "./EthereumRateThreeChart.vue";
import EthereumRateFourChart from "./EthereumRateFourChart.vue";
import EthereumRateFiveChart from "./EthereumRateFiveChart.vue";

export default defineComponent({
  name: "EthereumRateTab",
  components: {
    EthereumRateChart,
    EthereumRateTwoChart,
    EthereumRateThreeChart,
    EthereumRateFourChart,
    EthereumRateFiveChart,
  },
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>
