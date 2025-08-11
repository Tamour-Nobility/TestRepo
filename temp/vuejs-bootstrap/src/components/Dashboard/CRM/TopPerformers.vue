<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Top Performer</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>

      <ul class="ps-0 mb-0 list-unstyled border-top pt-3">
        <li
          class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3"
          v-for="item in items.slice(0, 5)"
          :key="item.id"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img
                :src="item.user.image"
                class="wh-44 rounded-circle"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2 position-relative top-2">
              <h6 class="mb-0 fw-medium">
                {{ item.user.name }}
              </h6>
              <span>
                {{ item.user.email }}
              </span>
            </div>
          </div>
          <RouterLink
            to="/my-profile"
            class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
          >
            <i class="ri-arrow-right-up-line fs-18"></i>
          </RouterLink>
        </li>
      </ul>

      <PaginationTwo items="5" total="12" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "../../Common/PaginationTwo.vue";

export default defineComponent({
  name: "TopPerformers",
  components: {
    PaginationTwo,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            image: require("@/assets/images/user-6.jpg"),
            name: "Alex Davis",
            email: "alex@trezo.com",
          },
        },
        {
          id: 2,
          user: {
            image: require("@/assets/images/user-7.jpg"),
            name: "Laura Martinez",
            email: "laura@trezo.com",
          },
        },
        {
          id: 3,
          user: {
            image: require("@/assets/images/user-8.jpg"),
            name: "Mark Thompson",
            email: "mark@trezo.com",
          },
        },
        {
          id: 4,
          user: {
            image: require("@/assets/images/user-9.jpg"),
            name: "Rachel White",
            email: "rachel@trezo.com",
          },
        },
        {
          id: 5,
          user: {
            image: require("@/assets/images/user-10.jpg"),
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
        },
        {
          id: 6,
          user: {
            image: require("@/assets/images/user-7.jpg"),
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
        },
      ],
    };
  },
});
</script>
