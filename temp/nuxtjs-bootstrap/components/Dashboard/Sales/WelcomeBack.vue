<template>
  <div
    class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
  >
    <h3 class="fs-24 fw-normal mb-0">
      Welcome Back, <span class="text-primary">Olivia!</span>
      <img src="~/assets/images/dog.svg" alt="dog" />
    </h3>
    <div class="d-flex flex-wrap gap-3 align-items-center">
      <select
        class="form-select month-select form-control h-auto pe-5 w-auto"
        style="background-position: right 15px center; color: #64748b"
        aria-label="Default select example"
      >
        <option>July 01 - July 31, 2024</option>
        <option value="1">August 01 - August 31, 2024</option>
        <option selected value="2">September 01 - September 31, 2024</option>
      </select>
      <button class="btn btn-primary py-1 px-3 rounded-3">
        <span class="d-inline-block py-1">
          <i class="ri-download-2-line text-white fs-16 me-1"></i>
          Export CSV
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeBack",
});
</script>
