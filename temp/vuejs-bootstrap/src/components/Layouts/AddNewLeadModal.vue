<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewLeadModal"
    aria-labelledby="addNewLeadModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="addNewLeadModalLabel">
        Add New Lead
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
          <label class="label">User Name</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="User Name"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Email</label>
          <input
            type="email"
            class="form-control text-dark"
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Phone</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Phone"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Created Date</label>
          <input type="date" class="form-control text-dark" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Company</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Company"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Lead Source</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Lead Source"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Status</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>Confirmed</option>
            <option value="1">In Progress</option>
            <option value="2">Pending</option>
            <option value="3">Rejected</option>
          </select>
        </div>

        <div class="form-group d-flex gap-3">
          <button
            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line text-white me-1"></i>
              <span>Create New Lead</span>
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
  name: "AddNewLeadModal",
});
</script>
