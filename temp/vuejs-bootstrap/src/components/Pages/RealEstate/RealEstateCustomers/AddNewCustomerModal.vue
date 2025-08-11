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
          <h3 class="mb-0">Add A New Customer</h3>
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
                  <label class="label text-secondary">Customer ID</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="#TRE0015"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Customer Name</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Customer Address</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Enter location"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Join Date</label>
                  <input type="date" class="form-control h-55" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Customer Phone</label>
                  <input
                    type="number"
                    class="form-control h-55"
                    placeholder="Enter phone"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Customer Email</label>
                  <input
                    type="email"
                    class="form-control h-55"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Customer Type</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>Select Type:</option>
                    <option value="1">Buyer</option>
                    <option value="2">Seller</option>
                    <option value="3">Commercial</option>
                    <option value="4">Investor</option>
                  </select>
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
              <div class="col-lg-12">
                <div class="form-group mb-4 only-file-upload">
                  <label class="label text-secondary">Add Customer Photo</label>
                  <div
                    class="form-control h-100 text-center position-relative p-4 p-lg-5"
                  >
                    <div class="product-upload">
                      <label for="file-upload" class="file-upload mb-0">
                        <i
                          class="ri-folder-image-line bg-primary bg-opacity-10 p-2 rounded-1 text-primary"
                        ></i>
                        <span class="d-block text-body fs-14"
                          >Drag and drop an image or
                          <span class="text-primary text-decoration-underline"
                            >Browse</span
                          ></span
                        >
                      </label>
                      <label
                        class="position-absolute top-0 bottom-0 start-0 end-0 cursor"
                        id="upload-container"
                      >
                        <input
                          class="form__file bottom-0"
                          id="upload-files"
                          type="file"
                        />
                      </label>
                    </div>
                  </div>
                  <div id="files-list-container"></div>
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
            <span>Add A Customer</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddNewCustomerModal",
});
</script>
