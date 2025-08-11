<template>
  <div class="card rounded-3 border-0 bg-white mb-4">
    <div class="card-body p-4">
      <h3 class="mb-4">Property Information</h3>
      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Property Type</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Property name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Property Status</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Select Property Status</option>
                <option value="1">Sale</option>
                <option value="2">Rent</option>
                <option value="3">Sold</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Property Price</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="$18,000"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Property Categories</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Multi family"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Beds</label>
              <input type="number" class="form-control h-55" placeholder="6" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Baths</label>
              <input type="number" class="form-control h-55" placeholder="5" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Area</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="1800 sqft"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Address</label>
              <input
                type="number"
                class="form-control h-55"
                placeholder="Enter address"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label text-secondary">Description</label>
              <textarea
                rows="6"
                class="form-control"
                placeholder="Enter description"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group only-file-upload mb-4">
              <label class="label text-secondary">Add Property Photo</label>
              <div
                class="form-control h-100 text-center position-relative p-4 p-lg-5"
              >
                <div class="product-upload">
                  <label for="file-upload" class="file-upload mb-0">
                    <i
                      class="ri-folder-image-line bg-primary bg-opacity-10 p-2 rounded-1 text-primary"
                    ></i>
                    <span class="d-block text-body fs-14">
                      Drag and drop an image or
                      <span class="text-primary text-decoration-underline">
                        Browse
                      </span>
                    </span>
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
          <div class="col-lg-12">
            <div class="d-flex flex-wrap gap-3 justify-content-end">
              <button
                type="submit"
                class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-primary py-2 px-4 fw-medium fs-16"
              >
                <i class="ri-add-line text-white fw-medium"></i> Add Property
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddProperty",
});
</script>
