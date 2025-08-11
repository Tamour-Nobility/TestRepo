<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Top Instructors</h3>
          <div class="dropdown action-opt">
            <button
              class="btn bg-transparent p-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MoreHorizontalIcon class="more-horizontal"></MoreHorizontalIcon>
            </button>

            <ul
              class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
            >
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <ClockIcon class="clock"></ClockIcon>
                  Today
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <PieChartIcon class="pie-chart"></PieChartIcon>
                  Last 7 Days
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <RotateCwIcon class="rotate-cw"></RotateCwIcon>
                  Last Month
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <CalendarIcon class="calendar"></CalendarIcon>
                  Last 1 Year
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <BarChartIcon class="bar-chart"></BarChartIcon>
                  All Time
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <EyeIcon class="eye"></EyeIcon>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <TrashIcon class="trash"></TrashIcon>
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
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Courses</th>
                <th scope="col">Ratings</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 4)" :key="item.id">
                <td>
                  <NuxtLink
                    to="/lms/instructors"
                    class="d-flex align-items-center"
                  >
                    <div class="flex-shrink-0">
                      <img
                        :src="item.user.image"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.user.name }}
                      </h6>
                      <span class="fs-12 text-body">
                        {{ item.user.email }}
                      </span>
                    </div>
                  </NuxtLink>
                </td>
                <td>{{ item.courses }}</td>
                <td>
                  <ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
                    <li v-for="rating in item.ratings" :key="rating.id">
                      <i :class="['text-rating-color fs-16', rating.star]"></i>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-4">
        <CommonPaginationTwo items="4" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/user-13.jpg";
import image2 from "~/assets/images/user-16.jpg";
import image3 from "~/assets/images/user-17.jpg";
import image4 from "~/assets/images/user-18.jpg";
import image5 from "~/assets/images/user-15.jpg";

export default defineComponent({
  name: "TopInstructors",
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            image: image1,
            name: "Olivia Clark",
            email: "Big Data",
          },
          courses: 55,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-fill",
            },
          ],
        },
        {
          id: 2,
          user: {
            image: image2,
            name: "Ava Turner",
            email: "UX/UI",
          },
          courses: 120,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-half-fill",
            },
          ],
        },
        {
          id: 3,
          user: {
            image: image3,
            name: "Lucas Morgan",
            email: "Developer",
          },
          courses: 86,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-line",
            },
          ],
        },
        {
          id: 4,
          user: {
            image: image4,
            name: "Isabella Cooper",
            email: "Designer",
          },
          courses: 75,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-half-fill",
            },
          ],
        },
        {
          id: 5,
          user: {
            image: image5,
            name: "Isabella Cooper",
            email: "Designer",
          },
          courses: 75,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-half-fill",
            },
          ],
        },
        {
          id: 6,
          user: {
            image: image1,
            name: "Lucas Morgan",
            email: "Developer",
          },
          courses: 86,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-line",
            },
          ],
        },
        {
          id: 7,
          user: {
            image: image2,
            name: "Ava Turner",
            email: "UX/UI",
          },
          courses: 120,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-half-fill",
            },
          ],
        },
        {
          id: 8,
          user: {
            image: image3,
            name: "Olivia Clark",
            email: "Big Data",
          },
          courses: 55,
          ratings: [
            {
              id: 1,
              star: "ri-star-fill",
            },
            {
              id: 2,
              star: "ri-star-fill",
            },
            {
              id: 3,
              star: "ri-star-fill",
            },
            {
              id: 4,
              star: "ri-star-fill",
            },
            {
              id: 5,
              star: "ri-star-fill",
            },
          ],
        },
      ],
    };
  },
});
</script>
