<template>
  <div
    class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
  >
    <h3 class="mb-0">Apex Line Charts</h3>

    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb align-items-center mb-0 lh-1">
        <li class="breadcrumb-item">
          <a href="#" class="d-flex align-items-center text-decoration-none">
            <i class="ri-home-4-line fs-18 text-primary me-1"></i>
            <span class="text-secondary fw-medium hover">Dashboard</span>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="fw-medium">Apex Charts</span>
        </li>
      </ol>
    </nav>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-6">
      <BasicLineChart />
    </div>
    <div class="col-lg-6">
      <LineWithDataLabelsChart />
    </div>
    <div class="col-lg-6">
      <SteplineChart />
    </div>
    <div class="col-lg-6">
      <DashedChart />
    </div>
    <div class="col-lg-12">
      <div class="text-center mb-4">
        <a
          href="https://apexcharts.com/javascript-chart-demos/line-charts/"
          target="_blank"
          class="btn btn-primary py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Line Charts
        </a>
        <a
          href="https://apexcharts.com/javascript-chart-demos/"
          target="_blank"
          class="btn btn-success text-white py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Charts
        </a>
      </div>
    </div>
  </div>

  <div
    class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
  >
    <h3 class="mb-0">Apex Area Charts</h3>

    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb align-items-center mb-0 lh-1">
        <li class="breadcrumb-item">
          <a href="#" class="d-flex align-items-center text-decoration-none">
            <i class="ri-home-4-line fs-18 text-primary me-1"></i>
            <span class="text-secondary fw-medium hover">Dashboard</span>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="fw-medium">Apex Charts</span>
        </li>
      </ol>
    </nav>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-6">
      <SplineAreaChart />
    </div>
    <div class="col-lg-6">
      <NegativeAreaChart />
    </div>
    <div class="col-lg-12">
      <div class="text-center mb-4">
        <a
          href="https://apexcharts.com/javascript-chart-demos/area-charts/"
          target="_blank"
          class="btn btn-primary py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Area Charts
        </a>
        <a
          href="https://apexcharts.com/javascript-chart-demos/"
          target="_blank"
          class="btn btn-success text-white py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Charts
        </a>
      </div>
    </div>
  </div>

  <div
    class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
  >
    <h3 class="mb-0">Apex BRB Charts</h3>

    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb align-items-center mb-0 lh-1">
        <li class="breadcrumb-item">
          <a href="#" class="d-flex align-items-center text-decoration-none">
            <i class="ri-home-4-line fs-18 text-primary me-1"></i>
            <span class="text-secondary fw-medium hover">Dashboard</span>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="fw-medium">Apex Charts</span>
        </li>
      </ol>
    </nav>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-6">
      <BasicBarAreaChart />
    </div>
    <div class="col-lg-6">
      <GroupedChart />
    </div>
    <div class="col-lg-12">
      <div class="text-center mb-4">
        <a
          href="https://apexcharts.com/javascript-chart-demos/bar-charts/"
          target="_blank"
          class="btn btn-primary py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Bar Charts
        </a>
        <a
          href="https://apexcharts.com/javascript-chart-demos/"
          target="_blank"
          class="btn btn-success text-white py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Charts
        </a>
      </div>
    </div>
  </div>

  <div
    class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
  >
    <h3 class="mb-0">Apex Column Charts</h3>

    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb align-items-center mb-0 lh-1">
        <li class="breadcrumb-item">
          <a href="#" class="d-flex align-items-center text-decoration-none">
            <i class="ri-home-4-line fs-18 text-primary me-1"></i>
            <span class="text-secondary fw-medium hover">Dashboard</span>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="fw-medium">Apex Charts</span>
        </li>
      </ol>
    </nav>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-6">
      <BasicColumnAreaChart />
    </div>
    <div class="col-lg-6">
      <ColumnWithDataLabelsChart />
    </div>
    <div class="col-lg-12">
      <div class="text-center mb-4">
        <a
          href="https://apexcharts.com/javascript-chart-demos/column-charts/"
          target="_blank"
          class="btn btn-primary py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Column Charts
        </a>
        <a
          href="https://apexcharts.com/javascript-chart-demos/"
          target="_blank"
          class="btn btn-success text-white py-3 px-4 me-1 fs-16 fw-medium text-decoration-none d-inline-block"
        >
          View All Charts
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicLineChart from "./BasicLineChart.vue";
import LineWithDataLabelsChart from "./LineWithDataLabelsChart.vue";
import SteplineChart from "./SteplineChart.vue";
import DashedChart from "./DashedChart.vue";
import SplineAreaChart from "./SplineAreaChart.vue";
import NegativeAreaChart from "./NegativeAreaChart.vue";
import BasicBarAreaChart from "./BasicBarAreaChart.vue";
import GroupedChart from "./GroupedChart.vue";
import BasicColumnAreaChart from "./BasicColumnAreaChart.vue";
import ColumnWithDataLabelsChart from "./ColumnWithDataLabelsChart.vue";

export default defineComponent({
  name: "ApexCharts",
  components: {
    BasicLineChart,
    LineWithDataLabelsChart,
    SteplineChart,
    DashedChart,
    SplineAreaChart,
    NegativeAreaChart,
    BasicBarAreaChart,
    GroupedChart,
    BasicColumnAreaChart,
    ColumnWithDataLabelsChart,
  },
});
</script>
