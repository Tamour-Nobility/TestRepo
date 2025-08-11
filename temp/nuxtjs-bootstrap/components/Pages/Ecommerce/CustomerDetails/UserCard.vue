<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center mb-3 mb-lg-4"
      >
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="~/assets/images/user-60.jpg"
              class="wh-65 rounded-circle border border-2"
              alt="user"
            />
          </div>
          <div class="flex-grow-1 ms-2 position-relative top-2">
            <h4 class="fs-16 fw-semibold mb-1">Ava Turner</h4>
            <span>Team Leader</span>
          </div>
        </div>

        <div
          class="dropdown action-opt ms-2 position-relative top-3"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="More Option"
        >
          <button
            class="p-0 border-0 bg-transparent"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-symbols-outlined fs-20 fw-bold text-body hover">
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
      <div class="mb-3">
        <span>Account ID:</span>
        <span class="d-block fw-medium text-secondary mt-1"> ID-12174123 </span>
      </div>
      <div class="mb-3">
        <span>Billing Email:</span>
        <span class="d-block fw-medium text-secondary mt-1">
          ava@trezo.com
        </span>
      </div>
      <div class="mb-3">
        <span>Delivery Address:</span>
        <span class="d-block fw-medium text-secondary mt-1">
          715 Maple St, Hamletville, England
        </span>
      </div>
      <div class="mb-3">
        <span>Language:</span>
        <span class="d-block fw-medium text-secondary mt-1">
          English, Spanish
        </span>
      </div>
      <div>
        <span>Latest Transaction:</span>
        <span class="d-block fw-medium text-secondary mt-1">#JAN-121</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserCard",
});
</script>
