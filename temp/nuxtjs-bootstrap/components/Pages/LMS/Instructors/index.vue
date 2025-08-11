<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
      >
        <form class="position-relative table-src-form me-0" @submit.prevent>
          <input
            type="text"
            class="form-control"
            placeholder="Search here"
            v-model="searchTerm"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
        <button
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          data-bs-toggle="offcanvas"
          data-bs-target="#addNewInstructorsModal"
          aria-controls="addNewInstructorsModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New Instructors</span>
          </span>
        </button>
      </div>

      <div class="default-table-area style-two all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Courses</th>
                <th scope="col">Total Earnings</th>
                <th scope="col">Email</th>
                <th scope="col">Ratings</th>
                <th scope="col">Status</th>
                <th scope="col" class="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td class="text-body">
                  {{ item.id }}
                </td>
                <td>
                  <a href="#" class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="item.user.image"
                        class="wh-44 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-2">
                      <h6 class="mb-0 fs-14 fw-medium text-secondary">
                        {{ item.user.name }}
                      </h6>
                      <span class="fs-13 text-body">
                        {{ item.user.designation }}
                      </span>
                    </div>
                  </a>
                </td>
                <td class="text-body">
                  {{ item.courses }}
                </td>
                <td class="text-body">
                  {{ item.totalEarnings }}
                </td>
                <td class="text-body">
                  {{ item.email }}
                </td>
                <td class="text-body">
                  <ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
                    <li v-for="(stars, index) of item.ratings" :key="index">
                      <i
                        :class="stars.star"
                        class="text-rating-color fs-16"
                      ></i>
                    </li>
                  </ul>
                </td>
                <td>
                  <span
                    class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                    v-if="item.status.active"
                  >
                    Active
                  </span>
                  <span
                    class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                    v-if="item.status.deactive"
                    >Deactive</span
                  >
                </td>
                <td>
                  <div
                    class="d-flex justify-content-end align-items-center gap-1"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 pt-lg-4">
          <CommonPagination items="10" total="30" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/user-13.jpg";
import image2 from "~/assets/images/user-16.jpg";
import image3 from "~/assets/images/user-17.jpg";
import image4 from "~/assets/images/user-18.jpg";

export default defineComponent({
  name: "Instructors",
  setup() {
    const items = ref([
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
          designation: "Big Data",
        },
        courses: 55,
        totalEarnings: "$6,855.00",
        email: "olivia@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1364",
        user: {
          image: image2,
          name: "Ava Turner",
          designation: "UX/UI",
        },
        courses: 120,
        totalEarnings: "$258.00",
        email: "ava@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: false,
          deactive: true,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-2951",
        user: {
          image: image3,
          name: "Lucas Morgan",
          designation: "Developer",
        },
        courses: 86,
        totalEarnings: "$3890.00",
        email: "lucas@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-line",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-7342",
        user: {
          image: image4,
          name: "Isabella Cooper",
          designation: "Designer",
        },
        courses: 75,
        totalEarnings: "$2500.00",
        email: "isabella@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
          designation: "Big Data",
        },
        courses: 55,
        totalEarnings: "$6,855.00",
        email: "olivia@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1364",
        user: {
          image: image2,
          name: "Ava Turner",
          designation: "UX/UI",
        },
        courses: 120,
        totalEarnings: "$258.00",
        email: "ava@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: false,
          deactive: true,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-2951",
        user: {
          image: image3,
          name: "Lucas Morgan",
          designation: "Developer",
        },
        courses: 86,
        totalEarnings: "$3890.00",
        email: "lucas@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-line",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-7342",
        user: {
          image: image4,
          name: "Isabella Cooper",
          designation: "Designer",
        },
        courses: 75,
        totalEarnings: "$2500.00",
        email: "isabella@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1217",
        user: {
          image: image1,
          name: "Olivia Clark",
          designation: "Big Data",
        },
        courses: 55,
        totalEarnings: "$6,855.00",
        email: "olivia@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
        ],
        status: {
          active: true,
          deactive: false,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
      {
        id: "#A-1364",
        user: {
          image: image2,
          name: "Ava Turner",
          designation: "UX/UI",
        },
        courses: 120,
        totalEarnings: "$258.00",
        email: "ava@trezo.com",
        ratings: [
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-fill",
          },
          {
            star: "ri-star-half-fill",
          },
        ],
        status: {
          active: false,
          deactive: true,
        },
        action: {
          // view: 'visibility',
          // edit: 'edit',
          delete: "delete",
        },
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          user: { name: string; designation: string };
          totalEarnings: string;
          email: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.user.designation
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.totalEarnings
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    return {
      items,
      searchTerm,
      filteredItems,
    };
  },
});
</script>
