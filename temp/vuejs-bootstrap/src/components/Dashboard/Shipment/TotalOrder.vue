<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <span
          class="d-inline-block px-3 bg-danger bg-opacity-10 text-danger border border-danger rounded-pill fs-12 fw-medium"
        >
          -2.5%
        </span>
        <div class="text-end">
          <span class="ms-2 fs-12">Last 30 days</span>
          <span class="fs-12 fw-bold text-danger d-block">-140</span>
        </div>
      </div>

      <div class="d-flex align-items-end">
        <div class="flex-grow-1">
          <span class="d-block mb-1">Total Order</span>
          <h4 class="fs-20 mb-0">49,120</h4>
        </div>
        <div class="flex-shrink-0 me-3 me-auto">
          <i
            class="ri-box-3-line fs-24 text-white bg-danger d-inline-block text-center rounded-circle text-white"
            style="width: 60px; height: 60px; line-height: 60px"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalOrder",
});
</script>
