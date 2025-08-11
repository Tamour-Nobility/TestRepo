<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Enrolled Students</h3>
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

      <div class="default-table-area style-two top-instructors pb-4">
        <div class="table-responsive">
          <table class="table align-middle border-0 w-md-100">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 5)" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
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
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  {{ item.email }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default defineComponent({
  name: "EnrolledStudents",
  setup() {
    const items = ref([
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
        },
        email: "olivia@trezo.com",
      },
      {
        id: "#A1364",
        user: {
          image: image2,
          name: "Ava Turner",
        },
        email: "ava@trezo.com",
      },
      {
        id: "#A-2951",
        user: {
          image: image3,
          name: "Lucas Morgan",
        },
        email: "lucas@trezo.com",
      },
      {
        id: "#A-7342",
        user: {
          image: image4,
          name: "Isabella Cooper",
        },
        email: "isabella@trezo.com",
      },
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
        },
        email: "olivia@trezo.com",
      },
      {
        id: "#A1364",
        user: {
          image: image2,
          name: "Ava Turner",
        },
        email: "ava@trezo.com",
      },
      {
        id: "#A-2951",
        user: {
          image: image3,
          name: "Lucas Morgan",
        },
        email: "lucas@trezo.com",
      },
      {
        id: "#A-7342",
        user: {
          image: image4,
          name: "Isabella Cooper",
        },
        email: "isabella@trezo.com",
      },
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
        },
        email: "olivia@trezo.com",
      },
    ]);

    return {
      items,
    };
  },
});
</script>
