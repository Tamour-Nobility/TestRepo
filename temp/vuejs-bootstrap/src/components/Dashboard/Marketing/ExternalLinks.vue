<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="mb-4">
        <h3 style="margin-bottom: -2px">External Links</h3>
      </div>

      <ul class="ps-0 mb-0 list-unstyled">
        <li
          class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
        >
          <div class="d-flex justify-content-between align-items-center">
            <img
              src="@/assets/images/google3.svg"
              style="width: 18px"
              alt="google3"
            />
            <span class="text-primary fw-medium ms-2">Google Ad Analytics</span>
          </div>
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line fs-20"></i>
          </a>
        </li>
        <li
          class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
        >
          <div class="d-flex justify-content-between align-items-center">
            <img
              src="@/assets/images/instagram2.svg"
              style="width: 18px"
              alt="google3"
            />
            <span class="text-primary fw-medium ms-2">Instagram Ads</span>
          </div>
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line fs-20"></i>
          </a>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-between align-items-center">
            <img
              src="@/assets/images/facebook4.svg"
              style="width: 18px"
              alt="google3"
            />
            <span class="text-primary fw-medium ms-2">Facebook Ads</span>
          </div>
          <a href="#" class="text-decoration-none">
            <i class="ri-external-link-line fs-20"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExternalLinks",
});
</script>
