<template>
  <div
    class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
  >
    <span class="fs-12 fw-medium">
      Showing {{ items }} of {{ total }} Results
    </span>

    <nav aria-label="Page navigation example">
      <ul class="pagination mb-0 justify-content-center">
        <li class="page-item">
          <a class="page-link icon" href="#" aria-label="Previous">
            <i class="material-symbols-outlined">keyboard_arrow_left</i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link active" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link icon" href="#" aria-label="Next">
            <i class="material-symbols-outlined"> keyboard_arrow_right </i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  props: ["items", "total"],
});
</script>
