<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Top Property</h3>

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

      <div class="d-flex align-items-center mb-4">
        <div class="flex-shrink-0">
          <img
            src="@/assets/images/property-1.png"
            class="rounded-3"
            style="width: 40px; height: 40px"
            alt="property"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <h4 class="fs-16 mb-0">Industrial</h4>
          <span>36 Clay Street Indianapolis</span>
        </div>
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="flex-shrink-0">
          <img
            src="@/assets/images/property-2.png"
            class="rounded-3"
            style="width: 40px; height: 40px"
            alt="property"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <h4 class="fs-16 mb-0">Office</h4>
          <span>07 Maple Street Los Angeles</span>
        </div>
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="flex-shrink-0">
          <img
            src="@/assets/images/property-3.png"
            class="rounded-3"
            style="width: 40px; height: 40px"
            alt="property"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <h4 class="fs-16 mb-0">Multi-Family</h4>
          <span>94 Brooke Street Houston</span>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img
            src="@/assets/images/property-4.png"
            class="rounded-3"
            style="width: 40px; height: 40px"
            alt="property"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <h4 class="fs-16 mb-0">Retail</h4>
          <span>84 Pick Street Centennial</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopProperty",
});
</script>
