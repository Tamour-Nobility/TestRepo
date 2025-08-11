<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewUserModal"
    aria-labelledby="addNewUserModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="addNewUserModalLabel">
        Add New User
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
          <label class="label">ID</label>
          <input type="text" class="form-control text-dark" placeholder="ID" />
        </div>
        <div class="form-group mb-4">
          <label class="label">User</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="User Name"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">User Image</label>
          <input type="file" class="file form-control" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Email</label>
          <input
            type="email"
            class="form-control text-dark"
            placeholder="User Email"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Role</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>Project Manager</option>
            <option value="1">Developer</option>
            <option value="2">Business Analys</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label class="label">Project Access</label>
          <textarea
            rows="2"
            class="form-control"
            placeholder="Project Access"
          ></textarea>
        </div>
        <div class="form-group mb-4">
          <label class="label">Status</label>
          <select
            class="form-select form-control text-dark"
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
              <span>Create User</span>
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
  name: "AddNewUserModal",
});
</script>
