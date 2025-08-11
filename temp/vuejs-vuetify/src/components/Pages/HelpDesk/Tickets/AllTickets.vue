<template>
  <v-card
    class="all-tickets-card trezo-card border-radius mt-25 d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">All Tickets</h5>
      <AddNewTicket />
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Ticket Title</th>
              <th class="text-start">Requester</th>
              <th class="text-start">Assigned To</th>
              <th class="text-start">Created Date</th>
              <th class="text-start">Due Date</th>
              <th class="text-start">Priority</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="text-start">
                <RouterLink to="/dashboard" class="text-body">
                  {{ item.id }}
                </RouterLink>
              </td>
              <td>
                <RouterLink
                  to="/help-desk/ticket-details"
                  class="project-name fw-medium"
                >
                  {{ item.ticketTitle }}
                </RouterLink>
              </td>
              <td>{{ item.requester }}</td>
              <td>{{ item.assignedTo }}</td>
              <td class="text-body">{{ item.createdDate }}</td>
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
        <PaginationTwo items="10" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AddNewTicket from "./AddNewTicket.vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "AllTickets",
  components: {
    AddNewTicket,
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

    // const wordFinished = ref("Finished");
    const wordPending = ref("Pending");
    const wordInProgress = ref("In Progress");
    const wordCancelled = ref("Cancelled");

    const computeClass = (classValue: string) => {
      return {
        // finished: wordFinished.value === classValue,
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

<style lang="scss" scoped>
.all-tickets-card {
  .trezo-table-content {
    .trezo-table {
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        border-radius: 0 0 7px 7px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
        border-left: 1px solid #eceef2;
        border-right: 1px solid #eceef2;
        border-bottom: 1px solid #eceef2;
      }
    }
  }
}
</style>
