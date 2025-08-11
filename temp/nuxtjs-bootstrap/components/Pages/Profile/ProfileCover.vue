<template>
  <div class="position-relative">
    <img
      src="~/assets/images/profile-bg.jpg"
      class="rounded-top-3"
      alt="profile-bg"
    />
    <div
      class="position-absolute for-rtl-position"
      style="bottom: 25px; right: 25px"
    >
      <a href="#" class="btn btn-outline-light text-white hover rounded-2">
        Update Cover Photo
      </a>
    </div>
  </div>

  <div class="card bg-white border-0 rounded-3 mb-4 rounded-top-0">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between flex-wrap gap-3">
        <div class="d-flex align-items-end">
          <div class="flex-shrink-0 position-relative mt-minus-110">
            <img
              src="~/assets/images/user-68.jpg"
              class="rounded-circle border border-2 wh-160"
              alt="user"
            />
            <img
              src="~/assets/images/check.svg"
              class="position-absolute bottom-0 end-0"
              alt="check"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <h4 class="fs-24 mb-1">Alice Johnson</h4>
            <span class="fs-15 fw-medium">Product designer</span>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <a
            href="#"
            class="btn btn-outline-light text-body fw-medium fs-16 px-4 hover hover-bg"
          >
            <i class="ri-edit-line fw-medium fs-18 me-2"></i>
            <span>Edit</span>
          </a>
          <a href="#" class="btn btn-primary fw-medium fs-16 px-4 ms-3">
            <i class="ri-share-fill fw-medium fs-18 me-2"></i>
            <span>Share</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileCover",
});
</script>
