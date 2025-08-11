<template>
  <div class="card bg-white border rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Sales by Locations</h3>

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
      <div class="text-center mb-0">
        <img src="@/assets/images/map.svg" alt="map" />
      </div>

      <div class="default-table-area style-two sales-locations-table">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent">Country</th>
                <th scope="col" class="text-end bg-transparent">Orders</th>
                <th scope="col" class="text-end bg-transparent">Earnings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="@/assets/images/usa.svg"
                      class="rounded-circle"
                      style="width: 20px"
                      alt="usa"
                    />
                    <span class="ps-2 fw-medium">USA</span>
                  </div>
                </td>
                <td class="text-end fw-medium">22,124</td>
                <td class="text-end fw-medium">$250.4k</td>
              </tr>
              <tr>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="@/assets/images/germany.svg"
                      class="rounded-circle"
                      style="width: 20px"
                      alt="germany"
                    />
                    <span class="ps-2 fw-medium">Germany</span>
                  </div>
                </td>
                <td class="text-end fw-medium">18,320</td>
                <td class="text-end fw-medium">$180.3k</td>
              </tr>
              <tr>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="@/assets/images/united-kingdom.svg"
                      class="rounded-circle"
                      style="width: 20px"
                      alt="united-kingdom"
                    />
                    <span class="ps-2 fw-medium">UK</span>
                  </div>
                </td>
                <td class="text-end fw-medium">12,560</td>
                <td class="text-end fw-medium">$125.6k</td>
              </tr>
              <tr>
                <td class="text-end fw-medium ps-0">
                  <div class="d-flex">
                    <img
                      src="@/assets/images/canada.svg"
                      class="rounded-circle"
                      style="width: 20px"
                      alt="usa"
                    />
                    <span class="ps-2 fw-medium">Canada</span>
                  </div>
                </td>
                <td class="text-end fw-medium">8,720</td>
                <td class="text-end fw-medium">$94.1k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "SalesByLocations",
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>
