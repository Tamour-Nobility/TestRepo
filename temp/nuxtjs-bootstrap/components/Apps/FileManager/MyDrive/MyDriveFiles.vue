<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4 pb-0">
      <h3 class="mb-4">My Drive</h3>

      <div class="row justify-content-center">
        <div class="col-xxl-3 col-xl-6 col-sm-6">
          <div
            class="card bg-primary bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark"
          >
            <div class="card-body p-4">
              <div class="d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input p-0"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault1"
                  />
                </div>
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
                    <i
                      class="material-symbols-outlined fs-24 fw-bold text-body hover"
                    >
                      more_horiz
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
                        <EditIcon class="edit"></EditIcon>
                        Edit
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

              <div class="d-flex align-items-center py-4 my-3">
                <i class="material-symbols-outlined fs-45 text-primary">
                  folder_open
                </i>
                <span
                  class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
                >
                  Assets
                </span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="fs-13 text-secondary">387 Files</span>
                <span class="fs-13 text-secondary">4.5 GB</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-sm-6">
          <div
            class="card bg-danger bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark"
          >
            <div class="card-body p-4">
              <div class="d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input p-0"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault2"
                  />
                </div>
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
                    <i
                      class="material-symbols-outlined fs-24 fw-bold text-body hover"
                    >
                      more_horiz
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
                        <EditIcon class="edit"></EditIcon>
                        Edit
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
              <div class="d-flex align-items-center py-4 my-3">
                <i class="material-symbols-outlined fs-45 text-danger">news</i>
                <span
                  class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
                >
                  Projects
                </span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="fs-13 text-secondary">123 Files</span>
                <span class="fs-13 text-secondary">1.4 GB</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-sm-6">
          <div
            class="card bg-success bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark"
          >
            <div class="card-body p-4">
              <div class="d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input p-0"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault3"
                  />
                </div>
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
                    <i
                      class="material-symbols-outlined fs-24 fw-bold text-body hover"
                      >more_horiz</i
                    >
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
                        <EditIcon class="edit"></EditIcon>
                        Edit
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
              <div class="d-flex align-items-center py-4 my-3">
                <i class="material-symbols-outlined fs-45 text-success"
                  >folder</i
                >
                <span
                  class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
                  >Personal</span
                >
              </div>
              <div class="d-flex justify-content-between">
                <span class="fs-13 text-secondary">435 Files</span>
                <span class="fs-13 text-secondary">5.2 GB</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-sm-6">
          <div
            class="card bg-primary-div bg-opacity-10 border-0 rounded-3 mb-4 file-for-dark"
          >
            <div class="card-body p-4">
              <div class="d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input p-0"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault4"
                  />
                </div>
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
                    <i
                      class="material-symbols-outlined fs-24 fw-bold text-body hover"
                      >more_horiz</i
                    >
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
                        <EditIcon class="edit"></EditIcon>
                        Edit
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
              <div class="d-flex align-items-center py-4 my-3">
                <i class="material-symbols-outlined fs-45 text-primary-div"
                  >folder_open</i
                >
                <span
                  class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
                >
                  Templates
                </span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="fs-13 text-secondary">431 Files</span>
                <span class="fs-13 text-secondary">1.3 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyDriveFiles",
});
</script>
