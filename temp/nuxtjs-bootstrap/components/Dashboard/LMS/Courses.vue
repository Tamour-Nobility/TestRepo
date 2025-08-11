<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Courses</h3>
          <select
            class="form-select month-select form-control p-0 h-auto border-0 w-90"
            style="background-position: right 0 center"
            aria-label="Default select example"
          >
            <option selected>All Courses</option>
            <option value="1">UI/UX</option>
            <option value="2">Wordpress</option>
          </select>
        </div>
      </div>

      <div class="default-table-area style-two all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Course Name</th>
                <th scope="col">Category</th>
                <th scope="col">Instructor</th>
                <th scope="col">Enrolled</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 6)" :key="item.id">
                <td class="text-body">{{ item.id }}</td>
                <td>
                  <NuxtLink to="/lms/course-details">
                    {{ item.courseName }}
                  </NuxtLink>
                </td>
                <td>{{ item.category }}</td>
                <td>
                  <NuxtLink
                    to="/lms/instructors"
                    class="d-flex align-items-center"
                  >
                    <div class="flex-shrink-0">
                      <img
                        :src="item.instructor.image"
                        class="wh-34 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-1">
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.instructor.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-body">{{ item.enrolled }}</td>
                <td class="text-body">{{ item.startDate }}</td>
                <td class="text-body">{{ item.endDate }}</td>
                <td>${{ item.price }}</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.view }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.edit }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        {{ item.action.delete }}
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 pt-lg-4">
          <CommonPagination items="6" :total="items.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/user-42.jpg";
import image2 from "~/assets/images/user-43.jpg";
import image3 from "~/assets/images/user-44.jpg";
import image4 from "~/assets/images/user-45.jpg";
import image5 from "~/assets/images/user-46.jpg";
import image6 from "~/assets/images/user-47.jpg";

export default defineComponent({
  name: "Courses",
  data() {
    return {
      items: [
        {
          id: "#854",
          courseName: "Cybersecurity Awareness",
          category: "Technology",
          instructor: {
            image: image1,
            name: "Oliver Khan",
          },
          enrolled: 180,
          startDate: "25 Mar 2024",
          endDate: "25 Apr 2024",
          price: "$49.99",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#853",
          courseName: "Python Programming",
          category: "Science",
          instructor: {
            image: image2,
            name: "Ava Cooper",
          },
          enrolled: 250,
          startDate: "20 Mar 2024",
          endDate: "20 Apr 2024",
          price: "$45.32",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#852",
          courseName: "Big Data Analytics",
          category: "Health and Wellness",
          instructor: {
            image: image3,
            name: "Isabella Evans",
          },
          enrolled: 320,
          startDate: "15 Mar 2024",
          endDate: "15 Apr 2024",
          price: "$99.00",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#851",
          courseName: "Introduction to Blockchain",
          category: "Education",
          instructor: {
            image: image4,
            name: "Mia Hughes",
          },
          enrolled: 135,
          startDate: "10 Mar 2024",
          endDate: "10 Apr 2024",
          price: "$29.75",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#850",
          courseName: "Network Administration",
          category: "Food and Cooking",
          instructor: {
            image: image5,
            name: "Noah Mitchell",
          },
          enrolled: 460,
          startDate: "05 Mar 2024",
          endDate: "05 Apr 2024",
          price: "$56.99",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#849",
          courseName: "Artificial Intelligence",
          category: "Lifestyle and Fashion",
          instructor: {
            image: image6,
            name: "Oliver Khan",
          },
          enrolled: 515,
          startDate: "10 Feb 2024",
          endDate: "10 Mar 2024",
          price: "$78.75",
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
      ],
    };
  },
});
</script>
