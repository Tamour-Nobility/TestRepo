<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Top Products by Sales</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>

      <ul class="ps-0 mb-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-primary bg-opacity-10 text-primary text-center rounded-1 wh-48 lh-48"
              >
                smartphone
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Samsung Galaxy</h6>
              <span class="fs-12">Samsung</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-secondary">$96,455</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-primary-div bg-opacity-10 text-primary-div text-center rounded-1 wh-48 lh-48"
              >
                tap_and_play
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">iPhone 15 Plus</h6>
              <span class="fs-12">Apple inc.</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-secondary">$89,670</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-danger bg-opacity-10 text-danger text-center rounded-1 wh-48 lh-48"
              >
                edgesensor_low
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Vivo V30</h6>
              <span class="fs-12">Vivo Ltd.</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-secondary">$75,329</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-success bg-opacity-10 text-success text-center rounded-1 wh-48 lh-48"
              >
                watch
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Watch Series 7</h6>
              <span class="fs-12">Apple</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-secondary">$98,256</span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-info bg-opacity-10 text-info text-center rounded-1 wh-48 lh-48"
              >
                headphones
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Sony WF-SP800N</h6>
              <span class="fs-12">Sony</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-secondary">$65,987</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopProductsBySales",
});
</script>

<style lang="scss" scoped>
.bg-opacity-10 {
  --bs-bg-opacity: 0.1 !important;
}
</style>
