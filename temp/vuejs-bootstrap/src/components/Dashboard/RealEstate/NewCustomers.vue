<template>
  <div
    class="bg-white rounded-3 mb-4"
    style="background: linear-gradient(73deg, #23272e 0%, #343a46 100%)"
  >
    <div class="card-body p-4">
      <div class="mb-3 pb-2">
        <span class="d-block mb-2" style="color: #8695aa">
          New Customers This Month
        </span>
        <h3 class="text-white mb-0 fs-20">4,712</h3>
      </div>

      <span class="d-block mb-2" style="color: #8695aa">Join Today</span>

      <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
        <li>
          <RouterLink to="/my-profile">
            <img
              src="@/assets/images/user-63.jpg"
              style="width: 40px; height: 40px"
              class="rounded-circle border border-1 border-color-white"
              alt="user"
            />
          </RouterLink>
        </li>
        <li class="ms-m-15">
          <RouterLink to="/my-profile">
            <img
              src="@/assets/images/user-64.jpg"
              style="width: 40px; height: 40px"
              class="rounded-circle border border-1 border-color-white"
              alt="user"
            />
          </RouterLink>
        </li>
        <li class="ms-m-15">
          <RouterLink to="/my-profile">
            <img
              src="@/assets/images/user-65.jpg"
              style="width: 40px; height: 40px"
              class="rounded-circle border border-1 border-color-white"
              alt="user"
            />
          </RouterLink>
        </li>
        <li class="ms-m-15">
          <RouterLink to="/my-profile">
            <img
              src="@/assets/images/user-66.jpg"
              style="width: 40px; height: 40px"
              class="rounded-circle border border-1 border-color-white"
              alt="user"
            />
          </RouterLink>
        </li>
        <li class="ms-m-15">
          <RouterLink
            to="/users/users-list"
            class="rounded-circle d-block text-center text-decoration-none text-white fs-14 fw-bold border border-1 border-color-white"
            style="
              background-color: #fe7a36;
              width: 40px;
              height: 40px;
              line-height: 40px;
            "
          >
            59
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewCustomers",
});
</script>
