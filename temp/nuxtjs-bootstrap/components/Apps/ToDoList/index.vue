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
          data-bs-target="#toDoListModal"
          aria-controls="toDoListModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New Task</span>
          </span>
        </button>
      </div>

      <div class="default-table-area style-two default-table-width">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault7"
                    />
                    <label
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault7"
                    >
                      ID
                    </label>
                  </div>
                </th>
                <th scope="col">Task Title</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Due Date</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td class="text-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault12"
                    />
                    <label
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault12"
                    >
                      {{ item.id }}
                    </label>
                  </div>
                </td>
                <td>
                  <NuxtLink
                    to="/project-management/project-overview"
                    class="text-body"
                  >
                    {{ item.taskTitle }}
                  </NuxtLink>
                </td>
                <td>{{ item.assignedTo }}</td>
                <td class="text-body">{{ item.dueDate }}</td>
                <td class="text-body">{{ item.priority }}</td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </td>

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
          <CommonPagination :items="5" :total="items.length" />
        </div>
      </div>
    </div>
  </div>
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
      {
        id: "#849",
        taskTitle: "Hotel Management System",
        assignedTo: "Shawn Kennedy",
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
        id: "#848",
        taskTitle: "Send Proposal to APR Ltd",
        assignedTo: "Roberto Cruz",
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
        id: "#847",
        taskTitle: "Python Upgrade",
        assignedTo: "Juli Johnson",
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
        id: "#846",
        taskTitle: "Schedule meeting with Trezo",
        assignedTo: "Catalina Engles",
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
        id: "#845",
        taskTitle: "Engineering Lite Touch",
        assignedTo: "Louis Nagle",
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
