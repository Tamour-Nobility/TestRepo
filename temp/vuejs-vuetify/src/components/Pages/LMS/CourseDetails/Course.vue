<template>
  <v-card
    class="courses-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Course</h5>
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
            <tr v-for="item in items" :key="item.id">
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
                  <RouterLink to="/lms/edit-course">
                    <i class="material-symbols-outlined">
                      {{ item.action.edit }}
                    </i>
                  </RouterLink>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Course",
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
          edit: "edit",
        },
      },
    ]);
    return {
      items,
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
