<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Enrolled by Countries</h3>

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

      <div class="text-center pt-4 mb-4 pb-1">
        <img src="@/assets/images/map.svg" alt="map" />
      </div>

      <ul class="ps-0 mb-0 list-unstyled sales_by_locations mt-4">
        <li
          class="d-flex align-items-center"
          v-for="(country, index) in countries"
          :key="index"
        >
          <div class="flex-shrink-0">
            <img
              :src="country.image"
              class="wh-30 rounded-circle"
              :alt="country.name"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="fw-medium d-block mb-2">{{ country.name }}</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              :aria-valuenow="country.progress"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar"
                :style="{ width: country.progress + '%' }"
              >
                <span class="count fw-medium text-body">
                  {{ country.progress }}%
                </span>
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
  name: "EnrolledByCountries",
  setup() {
    const countries = [
      {
        name: "United States",
        image: require("@/assets/images/usa.svg"),
        progress: 85,
      },
      {
        name: "Germany",
        image: require("@/assets/images/germany.svg"),
        progress: 75,
      },
      {
        name: "United Kingdom",
        image: require("@/assets/images/united-kingdom.svg"),
        progress: 40,
      },
      {
        name: "Canada",
        image: require("@/assets/images/canada.svg"),
        progress: 10,
      },
    ];
    onMounted(() => {
      feather.replace();
    });
    return {
      countries,
    };
  },
});
</script>
