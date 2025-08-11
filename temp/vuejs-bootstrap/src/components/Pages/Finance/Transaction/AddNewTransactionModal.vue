<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" style="max-width: 1120px">
      <div class="modal-content p-4 p-md-5">
        <div class="modal-header p-0 border-0">
          <h3 class="mb-0">Add A New Transaction</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0 pt-4">
          <form action="">
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Transaction ID</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Date</label>
                  <input type="date" class="form-control h-55" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Description</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Enter Transaction Description"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Amount</label>
                  <input
                    type="number"
                    class="form-control h-55"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Type</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>Select Type: Income/Expense</option>
                    <option value="1">Income</option>
                    <option value="2">Expense</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Status</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>Select Type: Completed/Pending</option>
                    <option value="1">Completed</option>
                    <option value="2">Pending</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Payment Method</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Enter Payment Method: Bank Transfer, Cash, Card"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Action</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>Select Type: Action</option>
                    <option value="1">View</option>
                    <option value="2">Edit</option>
                    <option value="2">Delete</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="mb-4">
                  <label class="label text-secondary"
                    >Notes
                    <span class="text-body fw-normal"
                      >[Optional Notes]</span
                    ></label
                  >
                  <textarea
                    rows="5"
                    class="form-control"
                    placeholder="Write any additional note here..."
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer border-0 p-0 gap-2">
          <button
            type="button"
            class="btn btn-danger text-white px-3 m-0"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-primary hover-bg px-3 m-0">
            <i class="ri-add-line"></i>
            <span>Add A Transaction</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddNewTransactionModal",
});
</script>
