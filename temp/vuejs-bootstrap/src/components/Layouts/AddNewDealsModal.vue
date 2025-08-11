<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="addNewDealsModal"
    aria-labelledby="addNewDealsModalLabel"
  >
    <div class="offcanvas-header border-bottom p-4">
      <h5 class="offcanvas-title fs-18 mb-0" id="addNewDealsModalLabel">
        Add New Deals
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
          <label class="label">Company</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Company"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Contact Person</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Contact Person"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Amount</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Amount"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Stage</label>
          <select
            class="form-select form-control text-dark"
            aria-label="Default select example"
          >
            <option selected>Proposal</option>
            <option value="1">Presentation</option>
            <option value="2">Negotiation</option>
            <option value="3">Discovery</option>
            <option value="4">Contract Sent</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label class="label">Probability</label>
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Probability"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Created Date</label>
          <input type="date" class="form-control text-dark" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Created Time</label>
          <input type="time" class="form-control text-dark" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Close Date</label>
          <input type="date" class="form-control text-dark" />
        </div>
        <div class="form-group d-flex gap-3">
          <button
            class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line text-white me-1"></i>
              <span>Create New Deals</span>
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
  name: "AddNewDealsModal",
});
</script>
