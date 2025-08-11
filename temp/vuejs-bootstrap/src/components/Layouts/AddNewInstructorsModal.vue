<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewInstructorsModal"
    aria-labelledby="addNewInstructorsModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="addNewInstructorsModalLabel">
        Add New Instructors
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
          <label class="label">ID No</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="ID No"
          />
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
          <label class="label">Courses</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Courses"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Total Earnings</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Total Earnings"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Email</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Ratings</label>
          <select
            class="form-select form-control text-dark cursor"
            aria-label="Default select example"
          >
            <option selected>1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label class="label">Status</label>
          <select
            class="form-select form-control text-dark cursor"
            aria-label="Default select example"
          >
            <option selected>Active</option>
            <option value="1">Deactive</option>
          </select>
        </div>

        <div class="form-group d-flex gap-3">
          <button
            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line text-white me-1"></i>
              <span>Create New Instructors</span>
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
  name: "AddNewInstructorsModal",
});
</script>
