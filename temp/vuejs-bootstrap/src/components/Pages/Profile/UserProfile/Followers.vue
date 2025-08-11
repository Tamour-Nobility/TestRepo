<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Followers</h3>
          <div class="dropdown action-opt">
            <button
              class="btn bg-transparent p-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i data-feather="more-horizontal"></i>
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
            >
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="clock"></i>
                  Today
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="pie-chart"></i>
                  Last 7 Days
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="rotate-cw"></i>
                  Last Month
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="calendar"></i>
                  Last 1 Year
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="bar-chart"></i>
                  All Time
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="eye"></i>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <i data-feather="trash"></i>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="default-table-area style-two top-instructors">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <tbody>
              <tr>
                <td class="pt-1">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-6.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Alex Davis</h6>
                      <span class="fs-12 text-body">alex@trezo.com</span>
                    </div>
                  </div>
                </td>
                <td class="text-end pt-1">
                  <RouterLink
                    to="/my-profile"
                    class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i class="ri-arrow-right-up-line fs-18"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-7.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Laura Martinez</h6>
                      <span class="fs-12 text-body">laura@trezo.com</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <RouterLink
                    to="/my-profile"
                    class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i class="ri-arrow-right-up-line fs-18"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-8.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Mark Thompson</h6>
                      <span class="fs-12 text-body">mark@trezo.com</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <RouterLink
                    to="/my-profile"
                    class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i class="ri-arrow-right-up-line fs-18"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-9.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Rachel White</h6>
                      <span class="fs-12 text-body">rachel@trezo.com</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <RouterLink
                    to="/my-profile"
                    class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i class="ri-arrow-right-up-line fs-18"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-10.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Kevin Lee</h6>
                      <span class="fs-12 text-body">kevin@trezo.com</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <RouterLink
                    to="/my-profile"
                    class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i class="ri-arrow-right-up-line fs-18"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        src="@/assets/images/user-11.jpg"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">Anne Dew</h6>
                      <span class="fs-12 text-body">anne@trezo.com</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <RouterLink
                    to="/my-profile"
                    class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i class="ri-arrow-right-up-line fs-18"></i>
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-4">
        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
        >
          <span class="fs-12 fw-medium">Items per pages: 6</span>

          <div class="d-flex align-items-center">
            <span class="fs-12 fw-medium me-2">1 - 6 of 12</span>
            <nav aria-label="Page navigation example">
              <ul class="pagination mb-0 justify-content-center">
                <li class="page-item">
                  <a class="page-link icon" href="#" aria-label="Previous">
                    <i class="material-symbols-outlined">keyboard_arrow_left</i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link icon" href="#" aria-label="Next">
                    <i class="material-symbols-outlined">
                      keyboard_arrow_right
                    </i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Followers",
});
</script>
