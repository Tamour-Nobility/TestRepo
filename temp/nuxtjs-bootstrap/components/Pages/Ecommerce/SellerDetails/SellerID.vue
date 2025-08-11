<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="~/assets/images/seller-1.png"
              class="wh-52"
              alt="seller"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              href="#"
              class="text-decoration-none text-secondary fw-medium fs-16 mb-1"
              >Ava Turner</a
            >
            <span class="d-block">turner@trezo.com</span>
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
            <i class="material-symbols-outlined fs-24 text-body hover"
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

      <div class="d-flex align-items-center mb-3">
        <span>Last Sale Date:</span>
        <span class="text-secondary ms-1">25 Nov 2024</span>
      </div>
      <div class="d-flex align-items-center mb-3">
        <span>Item Stock:</span>
        <span class="text-secondary ms-1">50</span>
      </div>
      <div class="d-flex align-items-center mb-3">
        <span>Wallet Balance:</span>
        <span class="text-secondary ms-1">$9,999.50</span>
      </div>
      <div class="d-flex align-items-center mb-3">
        <span>Revenue:</span>
        <span class="text-secondary ms-1">$5,999.50</span>
      </div>
      <div class="d-flex align-items-center mb-4">
        <span>Store:</span>
        <span class="text-secondary ms-1">TechMaster Store</span>
      </div>

      <h4 class="fw-medium fs-15 mb-2">Contact Support</h4>
      <form>
        <textarea
          rows="5"
          class="form-control"
          placeholder="Type here"
        ></textarea>
        <button
          type="submit"
          class="btn btn-primary fw-medium fs-16 py-2 px-4 mt-3"
        >
          <div class="d-flex align-items-center">
            <i class="material-symbols-outlined me-2 text-white">send</i>
            <span class="py-1 d-inline-block text-white">Submit Now</span>
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SellerID",
});
</script>
