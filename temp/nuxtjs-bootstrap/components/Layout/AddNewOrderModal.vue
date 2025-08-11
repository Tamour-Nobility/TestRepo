<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewOrderModal"
    aria-labelledby="addNewOrderModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="addNewOrderModalLabel">
        Add New Order
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
          <label class="label">Customer</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Customer"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Items</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Items"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Created</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Created"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Total</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Total"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Vendor</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Vendor"
          />
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
              <span>Create New Order</span>
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
  name: "AddNewOrderModal",
});
</script>
