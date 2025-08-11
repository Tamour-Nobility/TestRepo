<template>
  <v-card
    class="students-progress-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Student's Progress</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
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
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 6)" :key="item.id">
              <td class="text-start">
                <a href="#" class="fw-medium">
                  {{ item.name }}
                </a>
              </td>
              <td class="text-body">{{ item.courseName }}</td>
              <td>
                <v-progress-linear
                  :class="item.status.className"
                  :model-value="item.status.percentage"
                >
                </v-progress-linear>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StudentsProgress",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Olivia Clark",
          courseName: "Web Design",
          status: {
            percentage: 55,
            className: "primary",
          },
        },
        {
          id: 2,
          name: "Alexander Garcia",
          courseName: "Python Dev",
          status: {
            percentage: 80,
            className: "success",
          },
        },
        {
          id: 3,
          name: "Chloe Lewis",
          courseName: "Front-end",
          status: {
            percentage: 25,
            className: "purple",
          },
        },
        {
          id: 4,
          name: "Ava Turner",
          courseName: "Back-end",
          status: {
            percentage: 50,
            className: "orange",
          },
        },
        {
          id: 5,
          name: "Ryan Flores",
          courseName: "Data Analytics",
          status: {
            percentage: 100,
            className: "primary",
          },
        },
        {
          id: 6,
          name: "John Doe",
          courseName: "Plugin Dev",
          status: {
            percentage: 10,
            className: "purple",
          },
        },
        {
          id: 7,
          name: "Ryan Flores",
          courseName: "Data Analytics",
          status: {
            percentage: 100,
            className: "primary",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.students-progress-card {
  .trezo-table-content {
    .trezo-table {
      margin: {
        left: -25px;
        right: -25px;
      }
      .v-table {
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
                padding: 13px 20px;
                &:first-child {
                  border-left-width: 0 !important;
                  padding-left: 25px;
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
}
</style>
