<template>
  <div
    class="border-0 rounded-3 mb-4 for-dark"
    style="background-color: #ebdcd5"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Highlights</h3>
        <span class="fs-12" style="color: #82716f">Last 7 days</span>
      </div>
      <ul class="ps-0 mb-0 list-unstyled">
        <li
          class="d-flex justify-content-between border-bottom pb-3 mb-3"
          style="border-color: #e3d1c9 !important"
        >
          <div class="d-flex align-items-center">
            <i class="ri-star-fill fs-17" style="color: #fd5812"></i>
            <span class="ms-2" style="color: #82716f">
              Average Client Rating
            </span>
          </div>
          <span style="color: #463938">
            <i class="ri-arrow-up-line text-success fs-16"></i> 4.9/5.0
          </span>
        </li>
        <li
          class="d-flex justify-content-between border-bottom pb-3 mb-3"
          style="border-color: #e3d1c9 !important"
        >
          <div class="d-flex align-items-center">
            <i class="ri-instagram-fill fs-17" style="color: #fd5812"></i>
            <span class="ms-2" style="color: #82716f">Instagram Followers</span>
          </div>
          <span style="color: #463938">
            <i class="ri-arrow-down-line text-danger fs-16"></i>
            630K
          </span>
        </li>
        <li
          class="d-flex justify-content-between border-bottom pb-3 mb-3"
          style="border-color: #e3d1c9 !important"
        >
          <div class="d-flex align-items-center">
            <i class="ri-facebook-fill fs-17" style="color: #fd5812"></i>
            <span class="ms-2" style="color: #82716f">Facebook Followers</span>
          </div>
          <span style="color: #463938">
            <i class="ri-arrow-up-line text-success fs-16"></i> 630K
          </span>
        </li>
        <li class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <i class="ri-google-fill fs-17" style="color: #fd5812"></i>
            <span class="ms-2" style="color: #82716f">Google Ads CPC</span>
          </div>
          <span style="color: #463938">
            <i class="ri-arrow-up-line text-success fs-16"></i> $3.58
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HighlightsContent",
});
</script>
