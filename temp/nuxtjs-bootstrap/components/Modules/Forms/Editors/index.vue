<template>
  <div class="row justify-content-center">
    <div class="col-lg-12">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Editors</h4>

          <form>
            <div class="form-group mb-4">
              <label class="label text-secondary fs-14">Description</label>
              <CommonTextEditor />
            </div>
            <div class="form-group">
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
                  <button class="p-0 border-0 bg-transparent">
                    <i class="material-symbols-outlined fs-20 text-body hover">
                      text_fields_alt
                    </i>
                  </button>
                  <button class="p-0 border-0 bg-transparent ms-3">
                    <i class="material-symbols-outlined fs-20 text-body hover">
                      attach_file
                    </i>
                  </button>
                  <button class="p-0 border-0 bg-transparent ms-3">
                    <i class="material-symbols-outlined fs-20 text-body hover">
                      link
                    </i>
                  </button>
                  <button class="p-0 border-0 bg-transparent ms-3">
                    <i class="material-symbols-outlined fs-20 text-body hover">
                      mood
                    </i>
                  </button>
                  <button class="p-0 border-0 bg-transparent ms-3">
                    <i class="material-symbols-outlined fs-20 text-body hover">
                      add_to_drive
                    </i>
                  </button>
                  <button class="p-0 border-0 bg-transparent ms-3">
                    <i class="material-symbols-outlined fs-20 text-body hover">
                      ink_pen
                    </i>
                  </button>
                  <div class="dropdown action-opt ms-3 position-relative top-2">
                    <button
                      class="p-0 border-0 bg-transparent"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i
                        class="material-symbols-outlined fs-20 fw-bold text-body hover"
                      >
                        more_vert
                      </i>
                    </button>
                    <ul
                      class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                    >
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);">
                          <EyeIcon class="eye"></EyeIcon>
                          View All
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);">
                          <Trash2Icon class="trash-2"></Trash2Icon>
                          Delete One
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);">
                          <LockIcon class="lock"></LockIcon>
                          Block
                        </a>
                      </li>
                    </ul>
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
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "Editors",
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });
  },
});
</script>
