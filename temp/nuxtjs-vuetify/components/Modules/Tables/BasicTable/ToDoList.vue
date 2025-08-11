<template>
  <v-card
    class="to-do-list-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">To Do List</h5>
      <div class="d-flex align-items-center">
        <form class="search-box position-relative" @submit.prevent>
          <input
            type="text"
            class="input-search d-block"
            placeholder="Search here.."
            v-model="searchTerm"
          />
          <button type="submit">
            <i class="material-symbols-outlined">search</i>
          </button>
        </form>
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
              <th class="text-start">ID</th>
              <th class="text-start">Ticket Title</th>
              <th class="text-start">Assigned To</th>
              <th class="text-start">Due Date</th>
              <th class="text-start">Priority</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems.slice(0, 5)" :key="item.orderID">
              <td><v-checkbox color="primary"></v-checkbox></td>
              <td class="text-start">
                <NuxtLink to="/dashboard" class="fw-medium">
                  {{ item.id }}
                </NuxtLink>
              </td>
              <td>
                <span class="d-block fw-medium text-body">
                  {{ item.taskTitle }}
                </span>
              </td>
              <td>{{ item.assignedTo }}</td>
              <td>{{ item.dueDate }}</td>
              <td>{{ item.priority }}</td>
              <td>
                <span
                  class="trezo-status-badge"
                  :class="computeClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.view }}
                    </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.edit }}
                    </i>
                  </button>
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
    </div>
    <div class="text-end">
      <!-- <button class="add-new-task-btn" type="button">
        <i class="material-symbols-outlined"> add </i>
        Add New Task
      </button> -->
      <ModulesTablesBasicTableAddNewTask />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "ToDoList",
  setup() {
    const items = ref([
      {
        id: "#854",
        taskTitle: "Network Infrastructure",
        assignedTo: "Oliver Clark",
        dueDate: "30 Apr 2024",
        priority: "High",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        taskTitle: "Cloud Migration",
        assignedTo: "Ethan Baker",
        dueDate: "25 Apr 2024",
        priority: "Low",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#852",
        taskTitle: "Website Revamp",
        assignedTo: "Sophia Carter",
        dueDate: "20 Apr 2024",
        priority: "Medium",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#851",
        taskTitle: "Mobile Application",
        assignedTo: "Ava Cooper",
        dueDate: "15 Apr 2024",
        priority: "High",
        status: "Finished",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#850",
        taskTitle: "System Deployment",
        assignedTo: "Isabella Evans",
        dueDate: "10 Apr 2024",
        priority: "Low",
        status: "Cancelled",
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
          taskTitle: string;
          assignedTo: string;
          dueDate: string;
          priority: string;
          status: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.taskTitle
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.assignedTo
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.dueDate.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.priority
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const wordConfirmed = ref("Finished");
    const wordPending = ref("Pending");
    const wordInProgress = ref("In Progress");
    const wordRejected = ref("Cancelled");

    const computeClass = (classValue: string) => {
      return {
        confirmed: wordConfirmed.value === classValue,
        inProgress: wordInProgress.value === classValue,
        pending: wordPending.value === classValue,
        rejected: wordRejected.value === classValue,
      };
    };

    return {
      items,
      searchTerm,
      filteredItems,
      computeClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.to-do-list-card {
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
                border-left-width: 0 !important;
              }
              &:last-child {
                border-right-width: 0 !important;
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
  .add-new-task-btn {
    height: auto;
    min-width: auto;
    font-weight: 500;
    padding: 5px 13px;
    border-radius: 7px;
    display: inline-block;
    color: var(--primaryColor);
    border: 1px solid var(--primaryColor);
    position: relative;
    padding-left: 30px;
    margin: {
      top: 15px;
    }
    i {
      top: 50%;
      left: 7px;
      font-size: 22px;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}
</style>
