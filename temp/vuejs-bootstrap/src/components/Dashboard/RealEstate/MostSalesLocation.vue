<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Most Sales Location</h3>

        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i data-feather="more-horizontal"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="clock"></i>
                Today
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="pie-chart"></i>
                Last 7 Days
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="rotate-cw"></i>
                Last Month
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="calendar"></i>
                Last 1 Year
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="bar-chart"></i>
                All Time
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

      <div class="text-center" style="margin: 33px 0">
        <!-- <div id="most_sales_location"></div> -->
        <img src="@/assets/images/map.svg" alt="map" />
      </div>

      <ul class="ps-0 mb-0 list-unstyled sales_by_locations mt-4">
        <li class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/usa.svg"
              class="wh-30 rounded-circle"
              alt="usa"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="fw-medium d-block mb-2">United States</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar" style="width: 85%">
                <span class="count fw-medium text-body">85%</span>
              </div>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/germany.svg"
              class="wh-30 rounded-circle"
              alt="germany"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="fw-medium d-block mb-2">Germany</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-danger" style="width: 75%">
                <span class="count fw-medium text-body">75%</span>
              </div>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/united-kingdom.svg"
              class="wh-30 rounded-circle"
              alt="united-kingdom"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="fw-medium d-block mb-2">United Kingdom</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-success" style="width: 40%">
                <span class="count fw-medium text-body">40%</span>
              </div>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/canada.svg"
              class="wh-30 rounded-circle"
              alt="canada"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="fw-medium d-block mb-2">Canada</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-primary-div" style="width: 10%">
                <span class="count fw-medium text-body">10%</span>
              </div>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/portugal.svg"
              class="wh-30 rounded-circle"
              alt="portugal"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="fw-medium d-block mb-2">Portugal</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="05"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar" style="width: 05%">
                <span class="count fw-medium text-body">05%</span>
              </div>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/spain.svg"
              class="wh-30 rounded-circle"
              alt="spain"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="fw-medium d-block mb-2">Spain</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-secondary bg-opacity-50"
                style="width: 15%"
              >
                <span class="count fw-medium text-body">15%</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "MostSalesLocation",
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>
