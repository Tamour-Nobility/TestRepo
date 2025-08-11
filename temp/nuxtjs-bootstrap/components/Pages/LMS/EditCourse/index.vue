<template>
  <div class="row">
    <div class="col-lg-7">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h3 class="mb-4">Add Course</h3>

          <form>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Title</label>
                  <input
                    type="text"
                    class="form-control h-55 text-secondary"
                    value="E.g. Cybersecurity Awareness"
                  />
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label text-secondary fs-14">Your Email</label>

                  <CommonTextEditor />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Price</label>
                  <input
                    type="text"
                    class="form-control h-55 text-secondary"
                    value="E.g. $90"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Start Date</label>
                  <input type="date" class="form-control h-55 text-secondary" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary">End Date</label>
                  <input type="date" class="form-control h-55 text-secondary" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Instructor</label>
                  <select
                    class="form-select form-control text-dark h-55 cursor"
                    aria-label="Default select example"
                  >
                    <option value="0">Select</option>
                    <option selected value="1">Olivia Clark</option>
                    <option value="2">Ava Turner</option>
                    <option value="3">Lucas Morgan</option>
                    <option value="4">Isabella Cooper</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Tags</label>
                  <select
                    class="form-select form-control text-dark h-55 cursor"
                    aria-label="Default select example"
                  >
                    <option selected value="0">Select</option>
                    <option value="1" selected>Technology</option>
                    <option value="2">Science</option>
                    <option value="3">Health & Wellness</option>
                    <option value="4">Education</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="label text-secondary">
                    Project Preview Image
                  </label>
                  <div
                    class="form-control h-100 text-center position-relative p-4 p-lg-5"
                  >
                    <div class="product-upload">
                      <label for="file-upload" class="file-upload mb-0">
                        <i
                          class="ri-folder-image-line bg-primary bg-opacity-10 p-2 rounded-1 text-primary"
                        >
                        </i>
                        <span class="d-block text-body fs-14">
                          Drag and drop an image or
                          <span class="text-primary text-decoration-underline">
                            Browse
                          </span>
                        </span>
                      </label>
                      <input id="file-upload" type="file" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="col-lg-5">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h3 class="mb-4">Add Course</h3>

          <form>
            <div class="form-group mb-4">
              <label class="label text-secondary">Lesson Title</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Write Lesson Title"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label text-secondary">Lesson Time</label>
              <input type="time" class="form-control h-55" />
            </div>
            <div class="form-group mb-4">
              <label class="label text-secondary">Lesson Description</label>
              <textarea
                rows="5"
                class="form-control"
                placeholder="Type here...."
              ></textarea>
            </div>
            <div class="d-flex flex-wrap gap-3 justify-content-between">
              <button
                class="btn btn-danger fs-16 fw-medium text-white py-2 px-4"
              >
                <span class="d-inline-block py-1">Save Course</span>
              </button>
              <button
                class="btn btn-primary fs-16 fw-medium text-white py-2 px-4"
              >
                <i class="ri-add-line text-white fw-medium fs-18"></i>
                <span class="d-inline-block py-1">Add More Field</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditCourse",
});
</script>
