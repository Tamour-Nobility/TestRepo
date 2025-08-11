<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewLabelModal"
    aria-labelledby="addNewLabelModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="offcanvasRightLabel">
        Add New Label
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div class="offcanvas-body p-4">
      <form>
        <div class="form-group mb-4">
          <label class="label">Label Name</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Label Name"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Select Icon</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>Home Icon</option>
            <option value="1">Start Icon</option>
            <option value="2">Trash Icon</option>
          </select>
        </div>

        <div class="form-group d-flex gap-3">
          <button
            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line text-white me-1"></i>
              <span>Create Label</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddNewLabelModal",
});
</script>
