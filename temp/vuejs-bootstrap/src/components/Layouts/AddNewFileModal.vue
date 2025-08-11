<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="offcanvasRightLabel">
        Add New File
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
          <label class="label">File Name</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Label Name"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Owner</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Owner Name"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Listed Date</label>
          <input type="date" class="form-control text-dark" />
        </div>
        <div class="form-group mb-4">
          <label class="label">File Type</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>.pdf</option>
            <option value="1">.zip</option>
            <option value="2">.psd</option>
            <option value="2">.file</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label class="label">File Size</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>1.5GB</option>
            <option value="1">2.5GB</option>
            <option value="2">3.5GB</option>
            <option value="2">4.5GB</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label class="label">File Items</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>100</option>
            <option value="1">150</option>
            <option value="2">200</option>
            <option value="2">250</option>
          </select>
        </div>

        <div class="form-group d-flex gap-3">
          <button
            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line text-white me-1"></i>
              <span>Create New File</span>
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
  name: "AddNewFileModal",
});
</script>
