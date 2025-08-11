<template>
  <div
    class="pagination-content d-flex justify-space-between align-items-center text-center flex-wrap gap-2 showing-wrap"
  >
    <span class="fw-medium">Items per pages: {{ items }}</span>

    <div class="d-flex align-items-center">
      <span class="fw-medium me-2">1 - {{ items }} of 20</span>
      <ul class="pagination mb-0 justify-content-center">
        <li class="page-item">
          <a class="page-link icon" href="#">
            <i class="material-symbols-outlined">keyboard_arrow_left</i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link icon" href="#">
            <i class="material-symbols-outlined">keyboard_arrow_right</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationTwo",
  props: ["items"],
});
</script>

<style lang="scss" scoped>
.pagination-content {
  margin-top: 15px;
  span {
    font-size: 13px;
    color: var(--bodyColor);
  }
  .pagination {
    .page-item {
      margin-right: 7px;
      list-style-type: none;
      display: inline-block;

      .page-link {
        border-radius: 4px;
        border: 1px solid #eceef2;
        background: var(--whiteColor);
        transition: var(--transition);
        font-weight: 500;
        color: var(--bodyColor);
        position: relative;
        width: 30px;
        height: 30px;
        display: inline-block;
        &:focus {
          box-shadow: none;
        }
        &.icon {
          i {
            padding: 0;
            text-align: center;
            position: relative;
            top: 2px;
          }
        }
        &.active {
          background-color: var(--primaryColor);
          color: var(--whiteColor);
          z-index: 0 !important;
        }
        &:hover {
          background-color: var(--primaryColor);
          color: var(--whiteColor);
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
