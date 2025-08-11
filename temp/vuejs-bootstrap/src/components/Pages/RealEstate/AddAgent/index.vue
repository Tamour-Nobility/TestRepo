<template>
  <div class="card rounded-3 border-0 bg-white mb-4">
    <div class="card-body p-4">
      <h3 class="mb-4">Agent Information</h3>
      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Agent Name</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter agent name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Agency</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter agency name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Phone Number</label>
              <input
                type="number"
                class="form-control h-55"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Email</label>
              <input
                type="email"
                class="form-control h-55"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">License Number</label>
              <input
                type="number"
                class="form-control h-55"
                placeholder="Enter license number"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Years of Experience</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter years of experience"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Specialization</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter areas of expertise"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Office Location</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter office address"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Recent Achievements</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="List recent achievements"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Client Testimonials</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Include client testimonials"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label text-secondary">Additional Notes</label>
              <textarea
                rows="6"
                class="form-control"
                placeholder="Enter any additional information"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group only-file-upload mb-4">
              <label class="label text-secondary">Add Agent Photo</label>
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
                <i class="ri-add-line text-white fw-medium"></i> Add Agent
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
  name: "AddAgent",
});
</script>
