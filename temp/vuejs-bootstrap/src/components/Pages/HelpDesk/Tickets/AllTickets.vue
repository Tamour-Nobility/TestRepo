<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
      >
        <h3 class="mb-0">All Tickets</h3>
        <button
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New Ticket</span>
          </span>
        </button>
      </div>

      <div class="default-table-area all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ticket Title</th>
                <th scope="col">Requester</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Created Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td class="text-body">
                  {{ item.id }}
                </td>
                <td>
                  <RouterLink to="/help-desk/ticket-details" class="fw-medium">
                    {{ item.ticketTitle }}
                  </RouterLink>
                </td>
                <td class="text-secondary">
                  {{ item.requester }}
                </td>
                <td class="text-secondary">
                  {{ item.assignedTo }}
                </td>
                <td class="text-secondary">
                  {{ item.createdDate }}
                </td>
                <td class="text-secondary">
                  {{ item.dueDate }}
                </td>
                <td class="text-secondary">
                  {{ item.priority }}
                </td>
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

        <PaginationTwo items="10" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "AllTickets",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: "#JAN-854",
        ticketTitle: "Network Infrastructure",
        requester: "Walter Frazier",
        assignedTo: "Oliver Clark",
        createdDate: "20 Apr 2024",
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
        id: "#JAN-853",
        ticketTitle: "Cloud Migration",
        requester: "Kimberly Anderson",
        assignedTo: "Ethan Baker",
        createdDate: "21 Apr 2024",
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
        id: "#DEC-852",
        ticketTitle: "Website Revamp",
        requester: "Roscoe Guerrero",
        assignedTo: "Sophia Carter",
        createdDate: "17 Apr 2024",
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
        id: "#DEC-851",
        ticketTitle: "Mobile Application",
        requester: "Robert Stewart",
        assignedTo: "Ava Cooper",
        createdDate: "10 Apr 2024",
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
        id: "#DEC-850",
        ticketTitle: "System Deployment",
        requester: "Dustin Fritch",
        assignedTo: "Isabella Evans",
        createdDate: "05 Apr 2024",
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
        id: "#JAN-849",
        ticketTitle: "Login Issues",
        requester: "Walter Frazier",
        assignedTo: "Oliver Clark",
        createdDate: "20 Apr 2024",
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
        id: "#FEB-848",
        ticketTitle: "Email Configuration",
        requester: "Kimberly Anderson",
        assignedTo: "Ethan Baker",
        createdDate: "21 Apr 2024",
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
        id: "#MAR-847",
        ticketTitle: "Application Error",
        requester: "Roscoe Guerrero",
        assignedTo: "Sophia Carter",
        createdDate: "17 Apr 2024",
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
        id: "#JAN-846",
        ticketTitle: "Software Installation",
        requester: "Robert Stewart",
        assignedTo: "Ava Cooper",
        createdDate: "10 Apr 2024",
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
        id: "#DEC-845",
        ticketTitle: "System Upgrade",
        requester: "Dustin Fritch",
        assignedTo: "Isabella Evans",
        createdDate: "05 Apr 2024",
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

    const wordFinished = ref("Finished");
    const wordPending = ref("Pending");
    const wordInProgress = ref("In Progress");
    const wordCancelled = ref("Cancelled");

    const computeClass = (classValue: string) => {
      return {
        published: wordFinished.value === classValue,
        pending: wordPending.value === classValue,
        inProgress: wordInProgress.value === classValue,
        cancelled: wordCancelled.value === classValue,
      };
    };

    return {
      items,
      computeClass,
    };
  },
});
</script>
