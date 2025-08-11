<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4 pb-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3"
      >
        <h3 class="mb-0">Users by Country</h3>
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
      <div class="map text-center my-5">
        <img src="~/assets/images/map-2.png" alt="map" />
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="d-flex mb-4">
            <div class="flex-shrink-0 position-relative top-1">
              <img
                src="~/assets/images/united-states-2.png"
                class="rounded-circle"
                style="width: 20px; height: 20px"
                alt="united-states"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12 fw-medium d-block mb-1">United States</span>
              <h4 class="mb-0 fs-16 fw-semibold">
                12,800 <span class="text-body fs-12">35.6%</span>
              </h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex mb-4">
            <div class="flex-shrink-0 position-relative top-1">
              <img
                src="~/assets/images/united-kingdom-2.png"
                class="rounded-circle"
                style="width: 20px; height: 20px"
                alt="united-states"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12 fw-medium d-block mb-1">United Kingdom</span>
              <h4 class="mb-0 fs-16 fw-semibold">
                6,750 <span class="text-body fs-12">18.7%</span>
              </h4>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="border-bottom mb-4"></div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex mb-4">
            <div class="flex-shrink-0 position-relative top-1">
              <img
                src="~/assets/images/canada-2.png"
                class="rounded-circle"
                style="width: 20px; height: 20px"
                alt="canada"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12 fw-medium d-block mb-1">Canada</span>
              <h4 class="mb-0 fs-16 fw-semibold">
                2,500 <span class="text-body fs-12">6.3%</span>
              </h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex mb-4">
            <div class="flex-shrink-0 position-relative top-1">
              <img
                src="~/assets/images/australia.png"
                class="rounded-circle"
                style="width: 20px; height: 20px"
                alt="australia"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12 fw-medium d-block mb-1">Australia</span>
              <h4 class="mb-0 fs-16 fw-semibold">
                2,200 <span class="text-body fs-12">5.4%</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsersByCountry",
});
</script>
