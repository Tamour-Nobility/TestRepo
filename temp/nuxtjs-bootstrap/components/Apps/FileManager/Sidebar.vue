<template>
  <div>
    <div
      class="card file-manager-sidebar bg-white border-0 rounded-3 rounded-bottom-0"
    >
      <div class="card-body p-4">
        <form class="position-relative default-src-form mb-4 pb-1">
          <input
            type="text"
            class="form-control rounded-1"
            placeholder="Search"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y fs-18"
          >
            search
          </i>
        </form>

        <ul class="ps-0 mb-0 list-unstyled">
          <li class="mb-4">
            <NuxtLink
              to="/apps/file-manager/my-drive"
              class="d-flex align-items-center text-decoration-none justify-content-between"
            >
              <div class="d-flex align-items-center">
                <i
                  class="material-symbols-outlined fs-18 position-relative top-1 me-2"
                >
                  inbox
                </i>
                <span class="fw-semibold">My Drive</span>
              </div>
              <span>6</span>
            </NuxtLink>
            <ul class="mb-0 list-unstyled file-subdown">
              <li>
                <NuxtLink
                  to="/apps/file-manager/assets"
                  class="text-decoration-none"
                >
                  Assets
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/apps/file-manager/projects"
                  class="text-decoration-none"
                >
                  Projects
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/apps/file-manager/personal"
                  class="text-decoration-none"
                >
                  Personal
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/apps/file-manager/applications"
                  class="text-decoration-none"
                >
                  Applications
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <NuxtLink
              to="/apps/file-manager/documents"
              class="d-flex align-items-center text-decoration-none"
            >
              <i
                class="material-symbols-outlined fs-18 position-relative top-1 me-2 text-success"
              >
                description
              </i>
              <span class="fw-medium">Documents</span>
            </NuxtLink>
          </li>
          <li class="mb-4">
            <NuxtLink
              to="/apps/file-manager/media"
              class="d-flex align-items-center text-decoration-none"
            >
              <i
                class="material-symbols-outlined fs-18 position-relative top-1 me-2 text-info"
              >
                perm_media
              </i>
              <span class="fw-medium">Media</span>
            </NuxtLink>
          </li>
          <li class="mb-4">
            <NuxtLink
              to="/apps/file-manager/recents"
              class="d-flex align-items-center text-decoration-none"
            >
              <i
                class="material-symbols-outlined fs-18 position-relative top-1 me-2 text-primary-div"
              >
                schedule
              </i>
              <span class="fw-medium">Recents</span>
            </NuxtLink>
          </li>
          <li class="mb-4">
            <NuxtLink
              to="/apps/file-manager/important"
              class="d-flex align-items-center text-decoration-none"
            >
              <i
                class="material-symbols-outlined fs-18 position-relative top-1 me-2 text-warning"
              >
                grade
              </i>
              <span class="fw-medium">Important</span>
            </NuxtLink>
          </li>
          <li class="mb-4">
            <NuxtLink
              to="/apps/file-manager/spam"
              class="d-flex align-items-center text-decoration-none justify-content-between"
            >
              <div class="d-flex align-items-center">
                <i
                  class="material-symbols-outlined fs-18 position-relative top-1 me-2 text-primary"
                >
                  report_gmailerrorred
                </i>
                <span class="fw-medium">Spam</span>
              </div>
              <span>10</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/apps/file-manager/trash"
              class="d-flex align-items-center text-decoration-none justify-content-between"
            >
              <div class="d-flex align-items-center">
                <i
                  class="material-symbols-outlined fs-18 position-relative top-1 me-2 text-danger"
                >
                  delete
                </i>
                <span class="fw-medium">Trash</span>
              </div>
              <span>15</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="card bg-white border-0 rounded-3 rounded-top-0 border-top mb-4">
      <div class="card-body p-4">
        <h4 class="fs-15">Storage Status</h4>
        <span class="fs-13 d-block mb-2">% 50 GB used of 100 GB</span>
        <div
          class="progress bg-primary bg-opacity-10"
          style="height: 4px"
          role="progressbar"
          aria-label="Primary example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar bg-primary"
            style="width: 50%; height: 4px"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
});
</script>

<style lang="scss" scoped>
.file-manager-sidebar {
  ul {
    li {
      a {
        &.active,
        &.router-link-active {
          --bs-text-opacity: 1;
          color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
        }
      }
      ul {
        li {
          a {
            &.active,
            &.router-link-active {
              --bs-text-opacity: 1;
              color: rgba(
                var(--bs-primary-rgb),
                var(--bs-text-opacity)
              ) !important;
            }
          }
        }
      }
    }
  }
}
</style>
