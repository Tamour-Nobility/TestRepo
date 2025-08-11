<template>
  <div class="row">
    <div class="col-sm-6 col-xxl-3">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <span class="d-block mb-1">Ad Spend</span>
              <h2 class="text-secondary fs-32">$1,528</h2>
              <span
                class="d-inline-block bg-success bg-opacity-10 border-success border px-2 rounded-pill text-success mb-1 fs-12 fw-medium"
              >
                +5.4%
              </span>
              <p class="fs-12">vs previous 30 days</p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="@/assets/images/ads.gif"
                style="width: 60px"
                alt="ads"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-xxl-3">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <span class="d-block mb-1">Cost Per Thousand</span>
              <h2 class="text-secondary fs-32">$3.95</h2>
              <span
                class="d-inline-block bg-danger bg-opacity-10 border-danger border px-2 rounded-pill text-danger mb-1 fs-12 fw-medium"
              >
                -1.4%
              </span>
              <p class="fs-12">vs previous 30 days</p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="@/assets/images/video-advertising.gif"
                style="width: 60px"
                alt="video-advertising"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-xxl-3">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <span class="d-block mb-1">Cost Per Click</span>
              <h2 class="text-secondary fs-32">$0.15</h2>
              <span
                class="d-inline-block bg-danger bg-opacity-10 border-danger border px-2 rounded-pill text-danger mb-1 fs-12 fw-medium"
              >
                -0.04%
              </span>
              <p class="fs-12">vs previous 30 days</p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="@/assets/images/call-to-action.gif"
                style="width: 60px"
                alt="call-to-action"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-xxl-3">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <span class="d-block mb-1">Click Through Rate</span>
              <h2 class="text-secondary fs-32">$2.95</h2>
              <span
                class="d-inline-block bg-success bg-opacity-10 border-success border px-2 rounded-pill text-success mb-1 fs-12 fw-medium"
              >
                +7%
              </span>
              <p class="fs-12">vs previous 30 days</p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="@/assets/images/banner.gif"
                style="width: 60px"
                alt="banner"
              />
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
  name: "StatusContent",
});
</script>
