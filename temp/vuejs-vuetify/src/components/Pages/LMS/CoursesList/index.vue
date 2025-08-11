<template>
  <v-card
    class="courses-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search course here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              All Courses
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              This Day
            </button>
            <button type="button" class="bg-transparent border-none">
              This Week
            </button>
            <button type="button" class="bg-transparent border-none">
              This Month
            </button>
            <button type="button" class="bg-transparent border-none">
              This Year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Course Name</th>
              <th class="text-start">Category</th>
              <th class="text-start">Instructor</th>
              <th class="text-start">Enrolled</th>
              <th class="text-start">Start Date</th>
              <th class="text-start">End Date</th>
              <th class="text-start">Price</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td class="text-body">{{ item.id }}</td>
              <td class="text-start">
                <RouterLink to="/dashboard" class="project-name fw-medium">
                  {{ item.courseName }}
                </RouterLink>
              </td>
              <td>{{ item.category }}</td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      :src="item.instructor.image"
                      alt="instructor-image"
                    />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.instructor.name }}
                  </span>
                </div>
              </td>
              <td class="text-body">${{ item.enrolled }}</td>
              <td class="text-body">{{ item.startDate }}</td>
              <td class="text-body">{{ item.endDate }}</td>
              <td>
                {{ item.price }}
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <RouterLink to="/lms/course-details">
                    <i class="material-symbols-outlined">
                      {{ item.action.view }}
                    </i>
                  </RouterLink>
                  <RouterLink to="/lms/edit-course">
                    <i class="material-symbols-outlined">
                      {{ item.action.edit }}
                    </i>
                  </RouterLink>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.delete }}
                    </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <PaginationTwo items="10" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "CoursesList",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: "#854",
        courseName: "Cybersecurity Awareness",
        category: "Technology",
        instructor: {
          image: require("@/assets/images/users/user6.jpg"),
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
          image: require("@/assets/images/users/user7.jpg"),
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
          image: require("@/assets/images/users/user8.jpg"),
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
          image: require("@/assets/images/users/user9.jpg"),
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
          image: require("@/assets/images/users/user10.jpg"),
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
          image: require("@/assets/images/users/user11.jpg"),
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
      {
        id: "#854",
        courseName: "Cybersecurity Awareness",
        category: "Technology",
        instructor: {
          image: require("@/assets/images/users/user6.jpg"),
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
          image: require("@/assets/images/users/user7.jpg"),
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
          image: require("@/assets/images/users/user8.jpg"),
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
          image: require("@/assets/images/users/user9.jpg"),
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
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          courseName: string;
          category: string;
          instructor: { name: string };
          startDate: string;
          endDate: string;
          price: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.courseName
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.category
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.instructor.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.startDate
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.endDate.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.price.toLowerCase().includes(searchTerm.value.toLowerCase())
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

<style lang="scss" scoped>
.courses-card {
  .trezo-table-content {
    .trezo-table {
      margin-left: -25px;
      margin-right: -25px;
      table {
        thead {
          tr {
            th {
              background-color: #ecf0ff !important;

              &:first-child {
                border-top-left-radius: 0 !important;
                padding-left: 25px;
              }
              &:last-child {
                border-top-right-radius: 0 !important;
                padding-right: 25px;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              &:first-child {
                padding-left: 25px;
                border-left-width: 0 !important;
              }
              &:last-child {
                padding-right: 25px;
                border-right-width: 0 !important;
              }
            }
            &:first-child {
              td {
                border-top-width: 0 !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
