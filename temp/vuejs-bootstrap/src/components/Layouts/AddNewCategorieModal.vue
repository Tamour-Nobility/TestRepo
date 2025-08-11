<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewCategoriesModal"
    aria-labelledby="addNewCategoriesModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="addNewCategoriesModalLabel">
        Add New Categories
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
          <label class="label">Image</label>
          <input type="file" class="form-control text-dark file" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Name</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Name"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Total Products </label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Total Products	"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Slug</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Slug"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Description</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Description"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Status</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>Active</option>
            <option value="1">Deactivate</option>
          </select>
        </div>

        <div class="form-group d-flex gap-3">
          <button
            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line text-white me-1"></i>
              <span>Create New Categories</span>
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
  name: "AddNewCategoriesModal",
});
</script>
