<template>
  <div class="row justify-content-center">
    <div class="col-xl-4 col-lg-3 col-md-4">
      <AppsEmailSidebar />
    </div>

    <div class="col-xl-8 col-lg-9 col-md-8">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap border-bottom pb-3 mb-4"
          >
            <h3 class="fs-16 fw-semibold mb-0">New Message</h3>
            <div class="d-flex position-relative top-3">
              <button
                class="pe-0 border-0 bg-transparent ms-4 ps-2"
                v-b-tooltip.hover.top="'Archive'"
              >
                <i class="material-symbols-outlined fs-20 text-body hover">
                  archive
                </i>
              </button>
              <button
                class="pe-0 border-0 bg-transparent ms-2"
                v-b-tooltip.hover.top="'Help'"
              >
                <i class="material-symbols-outlined fs-20 text-body hover">
                  help_clinic
                </i>
              </button>
              <button
                class="pe-0 border-0 bg-transparent ms-2"
                v-b-tooltip.hover.top="'Trash'"
              >
                <i class="material-symbols-outlined fs-20 text-body hover">
                  delete
                </i>
              </button>
              <div
                class="dropdown action-opt ms-2 position-relative top-3"
                v-b-tooltip.hover.top="'More_Option'"
              >
                <button
                  class="p-0 border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="material-symbols-outlined fs-20 text-body hover">
                    more_vert
                  </i>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                >
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <EyeIcon class="eye"></EyeIcon>
                      View All
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <Trash2Icon class="trash-2"></Trash2Icon>
                      Delete One
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <LockIcon class="lock"></LockIcon>
                      Block
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary fs-14">To</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>To</option>
                    <option value="1">james@trezo.com</option>
                    <option value="2">andy@trezo.com</option>
                    <option value="3">mateo@trezo.com</option>
                    <option value="4">luca@trezo.com</option>
                    <option value="5">luca@trezo.com</option>
                    <option value="6">tomato@trezo.com</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary fs-14">Cc</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>Cc</option>
                    <option value="1">james@trezo.com</option>
                    <option value="2">andy@trezo.com</option>
                    <option value="3">mateo@trezo.com</option>
                    <option value="4">luca@trezo.com</option>
                    <option value="5">luca@trezo.com</option>
                    <option value="6">tomato@trezo.com</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary fs-14">Bcc</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>Bcc</option>
                    <option value="1">james@trezo.com</option>
                    <option value="2">andy@trezo.com</option>
                    <option value="3">mateo@trezo.com</option>
                    <option value="4">luca@trezo.com</option>
                    <option value="5">luca@trezo.com</option>
                    <option value="6">tomato@trezo.com</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary fs-14">Subject</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Write your subject..."
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label text-secondary fs-14">Description</label>
                  <CommonTextEditor class="text-editor" />
                </div>
              </div>

              <div class="col-lg-12">
                <div class="d-flex flex-wrap gap-3 align-items-center">
                  <button
                    class="btn btn-primary text-white fw-semibold py-2 px-4 me-4"
                    type="submit"
                  >
                    Send
                  </button>
                  <div
                    class="position-relative top-3 d-flex align-items-baseline flex-wrap gap-sm-0"
                  >
                    <button
                      class="p-0 border-0 bg-transparent"
                      v-b-tooltip.hover.top="'Text'"
                    >
                      <i
                        class="material-symbols-outlined fs-20 text-body hover"
                      >
                        text_fields_alt
                      </i>
                    </button>
                    <button
                      class="p-0 border-0 bg-transparent ms-3"
                      v-b-tooltip.hover.top="'File'"
                    >
                      <i
                        class="material-symbols-outlined fs-20 text-body hover"
                      >
                        attach_file
                      </i>
                    </button>
                    <button
                      class="p-0 border-0 bg-transparent ms-3"
                      v-b-tooltip.hover.top="'Link'"
                    >
                      <i
                        class="material-symbols-outlined fs-20 text-body hover"
                      >
                        link
                      </i>
                    </button>
                    <button
                      class="p-0 border-0 bg-transparent ms-3"
                      v-b-tooltip.hover.top="'Mood'"
                    >
                      <i
                        class="material-symbols-outlined fs-20 text-body hover"
                      >
                        mood
                      </i>
                    </button>
                    <button
                      class="p-0 border-0 bg-transparent ms-3"
                      v-b-tooltip.hover.top="'Drive'"
                    >
                      <i
                        class="material-symbols-outlined fs-20 text-body hover"
                      >
                        add_to_drive
                      </i>
                    </button>
                    <button
                      class="p-0 border-0 bg-transparent ms-3"
                      v-b-tooltip.hover.top="'Pen'"
                    >
                      <i
                        class="material-symbols-outlined fs-20 text-body hover"
                      >
                        ink_pen
                      </i>
                    </button>
                    <div
                      class="dropdown action-opt ms-3 position-relative top-2"
                    >
                      <button
                        class="p-0 border-0 bg-transparent"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i
                          class="material-symbols-outlined fs-20 text-body hover"
                        >
                          more_vert
                        </i>
                      </button>

                      <ul
                        class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                        style="bottom: 30px"
                      >
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <EyeIcon class="eye"></EyeIcon>
                            View All
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <Trash2Icon class="trash-2"></Trash2Icon>
                            Delete One
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <LockIcon class="lock"></LockIcon>
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
  name: "Compose",
});
</script>

<style lang="scss" scoped>
.text-editor {
  min-height: 285px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .text-editor {
    min-height: 190px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .text-editor {
    min-height: 200px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .text-editor {
    min-height: 176px;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .text-editor {
    min-height: 176px;
  }
}
</style>
