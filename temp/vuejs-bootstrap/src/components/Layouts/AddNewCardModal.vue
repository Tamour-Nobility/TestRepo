<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewCardModal"
    aria-labelledby="addNewCardModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="addNewCardModalLabel">
        Add New Card
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
          <label class="label">Project Name</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Project Name"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Select User</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>Alex</option>
            <option value="1">Staven</option>
            <option value="2">Juhon</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label class="label">User Image</label>
          <input type="file" class="file form-control" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Deadline</label>
          <input type="date" class="form-control" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Description</label>
          <textarea
            class="form-control"
            rows="3"
            placeholder="Write Here"
          ></textarea>
        </div>

        <div class="form-group d-flex gap-3">
          <button
            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line text-white me-1"></i>
              <span>Create Card</span>
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
  name: "AddNewCardModal",
});
</script>
