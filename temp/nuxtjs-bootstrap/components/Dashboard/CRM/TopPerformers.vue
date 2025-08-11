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
          <NuxtLink
            to="/my-profile"
            class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
          >
            <i class="ri-arrow-right-up-line fs-18"></i>
          </NuxtLink>
        </li>
      </ul>

      <CommonPaginationTwo items="5" total="12" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/user-6.jpg";
import image2 from "~/assets/images/user-7.jpg";
import image3 from "~/assets/images/user-8.jpg";
import image4 from "~/assets/images/user-9.jpg";
import image5 from "~/assets/images/user-10.jpg";

export default defineComponent({
  name: "TopPerformers",
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            image: image1,
            name: "Alex Davis",
            email: "alex@trezo.com",
          },
        },
        {
          id: 2,
          user: {
            image: image2,
            name: "Laura Martinez",
            email: "laura@trezo.com",
          },
        },
        {
          id: 3,
          user: {
            image: image3,
            name: "Mark Thompson",
            email: "mark@trezo.com",
          },
        },
        {
          id: 4,
          user: {
            image: image4,
            name: "Rachel White",
            email: "rachel@trezo.com",
          },
        },
        {
          id: 5,
          user: {
            image: image5,
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
        },
        {
          id: 6,
          user: {
            image: image2,
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
        },
      ],
    };
  },
});
</script>
