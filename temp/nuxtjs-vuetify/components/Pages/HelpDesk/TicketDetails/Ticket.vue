<template>
  <v-card
    class="all-tickets-card trezo-card border-radius mb-25 d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Ticket</h5>
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
                <NuxtLink to="/dashboard" class="text-body">
                  {{ item.id }}
                </NuxtLink>
              </td>
              <td>
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="project-name fw-medium"
                >
                  {{ item.ticketTitle }}
                </NuxtLink>
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
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Ticket",
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
