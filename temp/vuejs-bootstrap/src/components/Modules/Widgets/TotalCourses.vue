<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <span>Total Courses</span>
      <h3 class="mb-0 fs-20">45.6k</h3>
      <div class="py-3">
        <div
          class="wh-77 lh-97 text-center m-auto bg-primary bg-opacity-25 rounded-circle"
        >
          <i class="material-symbols-outlined fs-32 text-primary">
            auto_stories
          </i>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <span class="fs-12">This Month</span>
        <i class="material-symbols-outlined text-success">timeline</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalCourses",
});
</script>
