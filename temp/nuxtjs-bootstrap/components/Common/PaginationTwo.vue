<template>
  <div
    class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
  >
    <span class="fs-12 fw-medium">Items per pages: {{ items }}</span>

    <div class="d-flex align-items-center">
      <span class="fs-12 fw-medium me-2">1 - {{ items }} of {{ total }}</span>
      <nav aria-label="Page navigation example">
        <ul class="pagination mb-0 justify-content-center">
          <li class="page-item">
            <a class="page-link icon" href="#" aria-label="Previous">
              <i class="material-symbols-outlined">keyboard_arrow_left</i>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link icon" href="#" aria-label="Next">
              <i class="material-symbols-outlined">keyboard_arrow_right</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationTwo",
  props: ["items", "total"],
});
</script>
