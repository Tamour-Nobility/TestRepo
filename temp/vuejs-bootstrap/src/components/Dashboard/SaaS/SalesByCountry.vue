<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <h3 class="mb-0">Sales By Country</h3>
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

      <div class="text-center" style="margin: 50px 0">
        <!-- <div id="sales_by_country_map"></div> -->
        <img src="@/assets/images/map.svg" alt="map" />
      </div>

      <ul class="ps-0 mb-0 list-unstyled">
        <li class="mb-3 pb-3 border-bottom">
          <div class="d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/images/united-states-3.png"
                  style="width: 24px"
                  alt="facebook"
                />
                <div class="ms-3">
                  <h4 class="mb-0 fs-12 fw-semibold lh-1">United States</h4>
                </div>
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <div class="d-flex align-items-center justify-content-end">
                <div class="progress-responsive" style="width: 120px">
                  <div
                    class="progress rounded-pill"
                    style="height: 8px; background-color: #ecf0ff"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar rounded-pill"
                      style="width: 85%; height: 8px; background-color: #757dff"
                    ></div>
                  </div>
                </div>
                <span class="count text-body ms-3 fs-14 fw-medium">85%</span>
              </div>
            </div>
          </div>
        </li>
        <li class="mb-3 pb-3 border-bottom">
          <div class="d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/images/japan.png"
                  style="width: 24px"
                  alt="japan"
                />
                <div class="ms-3">
                  <h4 class="mb-0 fs-12 fw-semibold lh-1">Japan</h4>
                </div>
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <div class="d-flex align-items-center justify-content-end">
                <div class="progress-responsive" style="width: 120px">
                  <div
                    class="progress rounded-pill"
                    style="height: 8px; background-color: #ecf0ff"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar rounded-pill"
                      style="width: 65%; height: 8px; background-color: #0f79f3"
                    ></div>
                  </div>
                </div>
                <span class="count text-body ms-3 fs-14 fw-medium">65%</span>
              </div>
            </div>
          </div>
        </li>
        <li class="mb-3 pb-3 border-bottom">
          <div class="d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/images/australia-2.png"
                  style="width: 24px"
                  alt="australia"
                />
                <div class="ms-3">
                  <h4 class="mb-0 fs-12 fw-semibold lh-1">Australia</h4>
                </div>
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <div class="d-flex align-items-center justify-content-end">
                <div class="progress-responsive" style="width: 120px">
                  <div
                    class="progress rounded-pill"
                    style="height: 8px; background-color: #ecf0ff"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar rounded-pill"
                      style="width: 45%; height: 8px; background-color: #9135e8"
                    ></div>
                  </div>
                </div>
                <span class="count text-body ms-3 fs-14 fw-medium">45%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/images/germany-2.png"
                  style="width: 24px"
                  alt="germany"
                />
                <div class="ms-3">
                  <h4 class="mb-0 fs-12 fw-semibold lh-1">Germany</h4>
                </div>
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <div class="d-flex align-items-center justify-content-end">
                <div class="progress-responsive" style="width: 120px">
                  <div
                    class="progress rounded-pill"
                    style="height: 8px; background-color: #ecf0ff"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar rounded-pill"
                      style="width: 75%; height: 8px; background-color: #25b003"
                    ></div>
                  </div>
                </div>
                <span class="count text-body ms-3 fs-14 fw-medium">75%</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SalesByCountry",
});
</script>
