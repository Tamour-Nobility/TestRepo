<template>
  <v-card
    class="my-tasks-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">My Tasks</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              This Today
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
              <th class="text-start">
                <v-checkbox color="primary"></v-checkbox>
              </th>
              <th class="text-start">Project Name</th>
              <th class="text-start">Deadline</th>
              <th class="text-start">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 4)" :key="item.id">
              <td><v-checkbox color="primary"></v-checkbox></td>
              <td class="text-start">
                <NuxtLink to="/dashboard" class="fw-medium">
                  {{ item.projectName }}
                </NuxtLink>
              </td>
              <td>{{ item.deadline }}</td>
              <td>
                <span
                  class="trezo-status-badge"
                  :class="computeClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <CommonPaginationTwo items="4" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MyTasks",
  data() {
    return {
      items: [
        {
          id: "1",
          projectName: "Web Development",
          deadline: "10 Jan 2024",
          status: "Completed",
        },
        {
          id: "2",
          projectName: "UX/UI Design",
          deadline: "05 Feb 2024",
          status: "In Progress",
        },
        {
          id: "3",
          projectName: "React Development",
          deadline: "28 Mar 2024",
          status: "Cancelled",
        },
        {
          id: "4",
          projectName: "Python Research",
          deadline: "09 Mar 2024",
          status: "Pending",
        },
        {
          id: "5",
          projectName: "Python Research",
          deadline: "09 Mar 2024",
          status: "Confirmed",
        },
      ],
    };
  },
  setup() {
    const wordConfirmed = ref("Confirmed");
    const wordInProgress = ref("In Progress");
    const wordPending = ref("Pending");
    const wordRejected = ref("Rejected");

    const computeClass = (classValue: string) => {
      return {
        confirmed: wordConfirmed.value === classValue,
        inProgress: wordInProgress.value === classValue,
        pending: wordPending.value === classValue,
        rejected: wordRejected.value === classValue,
      };
    };

    return {
      computeClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-tasks-card {
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
                padding-right: 0;
              }
              .v-checkbox.v-input {
                margin: -18px -9px -40px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: 10px 20px !important;
              &:first-child {
                padding-left: 25px !important;
              }
              .v-checkbox.v-input {
                margin: -10px -30px -32px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
