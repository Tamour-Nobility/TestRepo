<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Spam</h3>
        <select
          class="form-select month-select form-control"
          aria-label="Default select example"
        >
          <option selected>Today</option>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
          <option value="3">Yearly</option>
        </select>
      </div>

      <div class="default-table-area recent-files">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">File Name</th>
                <th scope="col">Owner</th>
                <th scope="col">Listed Date</th>
                <th scope="col">File Type</th>
                <th scope="col">File Size</th>
                <th scope="col">File Items</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning">
                      folder
                    </i>
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Dashboard Design
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Linda Maddox</td>
                <td>Nov 20, 2024</td>
                <td>.pdf</td>
                <td>1.2 GB</td>
                <td>69</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning">
                      folder
                    </i>
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Important Documents
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Juanita Lavigne</td>
                <td>Nov 18, 2024</td>
                <td>.zip</td>
                <td>2.6 GB</td>
                <td>236</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning"
                      >folder</i
                    >
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Product Design
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Roy Pope</td>
                <td>Nov 17, 2024</td>
                <td>.psd</td>
                <td>3.2 GB</td>
                <td>365</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning"
                      >folder</i
                    >
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Dashboard Design File
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Cecil Jones</td>
                <td>Nov 15, 2024</td>
                <td>.fig</td>
                <td>1 GB</td>
                <td>25</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning"
                      >folder</i
                    >
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Media Files
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Trudy Venegas</td>
                <td>Nov 14, 2024</td>
                <td>.jpg</td>
                <td>1.5 GB</td>
                <td>153</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning"
                      >folder</i
                    >
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Graphic Design File
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Sharilyn Goodall</td>
                <td>Nov 13, 2024</td>
                <td>.png</td>
                <td>1.6 GB</td>
                <td>142</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning"
                      >folder</i
                    >
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Personal Photo
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Annie Carver</td>
                <td>Nov 09, 2024</td>
                <td>.gif</td>
                <td>1.2 GB</td>
                <td>175</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="d-flex align-items-center"
                  >
                    <i class="material-symbols-outlined fs-28 text-warning"
                      >folder</i
                    >
                    <div class="ms-2">
                      <h6 class="fw-medium fs-14 position-relative top-1">
                        Audio File
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>Winona Etzel</td>
                <td>Nov 08, 2024</td>
                <td>.mp3</td>
                <td>1.3 GB</td>
                <td>136</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-warning"
                        >grade</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPagination items="8" total="30" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Spam",
});
</script>
