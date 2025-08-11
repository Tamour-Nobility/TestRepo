<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-sm-flex justify-content-between align-items-center flex-wrap gap-2"
      >
        <h4 class="fs-16 fw-medium mb-2 mb-sm-0">Filter</h4>

        <form class="default-src-form">
          <div class="d-sm-flex flex-wrap gap-3">
            <div class="position-relative mb-2 mb-sm-0">
              <input
                type="text"
                class="form-control rounded-1"
                placeholder="Search here"
              />
              <i
                class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y fs-18"
              >
                search
              </i>
            </div>
            <div>
              <select
                class="form-select form-control rounded-1 py-0 fs-14 ps-3 bg-transparent pe-5"
                aria-label="Default select example"
              >
                <option selected>Default Shorting</option>
                <option value="1">Apple</option>
                <option value="2">SAMSUNG</option>
                <option value="3">T-Shirts</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsFilter",
});
</script>
