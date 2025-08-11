<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <span
          class="d-inline-block px-3 bg-success bg-opacity-10 text-success border border-success rounded-pill fs-12 fw-medium"
        >
          +15%
        </span>
        <div class="text-end">
          <span class="ms-2 fs-12">Last 30 days</span>
          <span class="fs-12 fw-bold text-primary d-block">+3k</span>
        </div>
      </div>

      <div class="d-flex align-items-end">
        <div class="flex-grow-1">
          <span class="d-block mb-1">Total Customer</span>
          <h4 class="fs-20 mb-0">29,554</h4>
        </div>
        <div class="flex-shrink-0 me-3 me-auto">
          <i
            class="ri-group-line fs-24 text-white bg-primary d-inline-block text-center rounded-circle text-white"
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
  name: "TotalCustomer",
});
</script>
