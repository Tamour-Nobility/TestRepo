<template>
  <div class="row">
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/figma.svg" alt="figma" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
            >
              ET Template
            </span>
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">159 Files</span>
            <span class="fs-13 text-secondary">4.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/dribbble.svg" alt="dribbble" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >React Template</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">522 Files</span>
            <span class="fs-13 text-secondary">5.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/spotify.svg" alt="spotify" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >Material UI</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">995 Files</span>
            <span class="fs-13 text-secondary">7.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/github.svg" alt="github" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >WP Themes</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">39 Files</span>
            <span class="fs-13 text-secondary">3.8 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input p-0"
                type="checkbox"
                value=""
                id="flexCheckDefault5"
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/gdrive.svg" alt="gdrive" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >Personal Photos</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">159 Files</span>
            <span class="fs-13 text-secondary">4.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input p-0"
                type="checkbox"
                value=""
                id="flexCheckDefault6"
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/trello.svg" alt="trello" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >Mobile Apps</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">357 Files</span>
            <span class="fs-13 text-secondary">8.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input p-0"
                type="checkbox"
                value=""
                id="flexCheckDefault7"
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/slak.svg" alt="slak" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >Important Files</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">159 Files</span>
            <span class="fs-13 text-secondary">4.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input p-0"
                type="checkbox"
                value=""
                id="flexCheckDefault8"
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/pinterest.svg" alt="pinterest" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >Angular Template</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">522 Files</span>
            <span class="fs-13 text-secondary">5.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input p-0"
                type="checkbox"
                value=""
                id="flexCheckDefault9"
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/facebook.svg" alt="facebook" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
              >Projects</span
            >
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">995 Files</span>
            <span class="fs-13 text-secondary">7.5 GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input p-0"
                type="checkbox"
                value=""
                id="flexCheckDefault10"
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
                  <a class="dropdown-item" href="javascript:;">
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
            <img src="~/assets/images/linkedin.svg" alt="linkedin" />
            <span
              class="fs-15 fw-bold text-secondary ms-2 position-relative top-2"
            >
              Documents
            </span>
          </div>
          <div class="d-flex justify-content-between">
            <span class="fs-13 text-secondary">39 Files</span>
            <span class="fs-13 text-secondary">3.8 GB</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Applications",
});
</script>
