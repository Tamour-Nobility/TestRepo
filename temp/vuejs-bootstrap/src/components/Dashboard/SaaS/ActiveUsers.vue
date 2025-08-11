<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 border-bottom pb-4"
      >
        <h3 class="mb-0">Active Users</h3>
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

      <div class="d-flex align-items-center border-bottom pb-3 mb-3">
        <div class="flex-shrink-0">
          <div class="position-relative">
            <img
              src="@/assets/images/user-92.png"
              class="rounded-circle"
              style="width: 33px; height: 33px"
              alt="user"
            />
            <div
              class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-semibold mb-0">Johhna Loren</h4>
          <span class="fs-12">Admin</span>
        </div>
      </div>
      <div class="d-flex align-items-center border-bottom pb-3 mb-3">
        <div class="flex-shrink-0">
          <div class="position-relative">
            <img
              src="@/assets/images/user-93.png"
              class="rounded-circle"
              style="width: 33px; height: 33px"
              alt="user"
            />
            <div
              class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-semibold mb-0">Zinia Watson Loren</h4>
          <span class="fs-12">Moderator</span>
        </div>
      </div>
      <div class="d-flex align-items-center border-bottom pb-3 mb-3">
        <div class="flex-shrink-0">
          <div class="position-relative">
            <img
              src="@/assets/images/user-94.png"
              class="rounded-circle"
              style="width: 33px; height: 33px"
              alt="user"
            />
            <div
              class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-semibold mb-0">Angela Carter</h4>
          <span class="fs-12">Editor</span>
        </div>
      </div>
      <div class="d-flex align-items-center border-bottom pb-3 mb-3">
        <div class="flex-shrink-0">
          <div class="position-relative">
            <img
              src="@/assets/images/user-95.png"
              class="rounded-circle"
              style="width: 33px; height: 33px"
              alt="user"
            />
            <div
              class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2 bottom-0"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-semibold mb-0">Skyler White</h4>
          <span class="fs-12">Admin</span>
        </div>
      </div>
      <div class="d-flex align-items-center border-bottom pb-3 mb-3">
        <div class="flex-shrink-0">
          <div class="position-relative">
            <img
              src="@/assets/images/user-96.png"
              class="rounded-circle"
              style="width: 33px; height: 33px"
              alt="user"
            />
            <div
              class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-semibold mb-0">Jane Ronan</h4>
          <span class="fs-12">Editor</span>
        </div>
      </div>
      <div class="d-flex align-items-center border-bottom pb-3">
        <div class="flex-shrink-0">
          <div class="position-relative">
            <img
              src="@/assets/images/user-97.png"
              class="rounded-circle"
              style="width: 33px; height: 33px"
              alt="user"
            />
            <div
              class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2 bottom-0"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-semibold mb-0">Viktor James</h4>
          <span class="fs-12">Editor</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "ActiveUsers",
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>
