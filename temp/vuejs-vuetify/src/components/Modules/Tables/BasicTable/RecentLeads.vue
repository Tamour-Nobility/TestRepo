<template>
  <v-card
    class="recent-leads-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Leads</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              This Day
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
              <th class="text-start">Customer</th>
              <th class="text-start">Email</th>
              <th class="text-start">Source</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 5)" :key="item.id">
              <td><v-checkbox color="primary"></v-checkbox></td>
              <td class="text-start">
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      class="rounded-circle"
                      :src="item.customer.image"
                      alt="customer"
                    />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.customer.name }}
                  </span>
                </div>
              </td>
              <td>{{ item.email }}</td>
              <td>{{ item.source }}</td>
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
  name: "RecentLeads",
  setup() {
    const items = ref([
      {
        id: "1",
        customer: {
          image: require("@/assets/images/users/user11.jpg"),
          name: "David Brown",
        },
        email: "david@trezo.com",
        source: "Organic",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "2",
        customer: {
          image: require("@/assets/images/users/user12.jpg"),
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "3",
        customer: {
          image: require("@/assets/images/users/user13.jpg"),
          name: "Amanda Clark",
        },
        email: "amanda@trezo.com",
        source: "Paid",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "4",
        customer: {
          image: require("@/assets/images/users/user14.jpg"),
          name: "Jennifer Taylor",
        },
        email: "taylor@trezo.com",
        source: "Others",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "5",
        customer: {
          image: require("@/assets/images/users/user15.jpg"),
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "6",
        customer: {
          image: require("@/assets/images/users/user14.jpg"),
          name: "David Brown",
        },
        email: "david@trezo.com",
        source: "Organic",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "7",
        customer: {
          image: require("@/assets/images/users/user13.jpg"),
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "8",
        customer: {
          image: require("@/assets/images/users/user15.jpg"),
          name: "Amanda Clark",
        },
        email: "amanda@trezo.com",
        source: "Paid",
        status: "In Progress",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "9",
        customer: {
          image: require("@/assets/images/users/user11.jpg"),
          name: "Jennifer Taylor",
        },
        email: "taylor@trezo.com",
        source: "Others",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "10",
        customer: {
          image: require("@/assets/images/users/user12.jpg"),
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "11",
        customer: {
          image: require("@/assets/images/users/user15.jpg"),
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "12",
        customer: {
          image: require("@/assets/images/users/user14.jpg"),
          name: "David Brown",
        },
        email: "david@trezo.com",
        source: "Organic",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "13",
        customer: {
          image: require("@/assets/images/users/user13.jpg"),
          name: "Sarah Miller",
        },
        email: "sara@trezo.com",
        source: "Social",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
    ]);

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
      items,
      computeClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-leads-card {
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
                margin: -28px -30px -30px -7px;
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
              &:first-child {
                padding-left: 25px;
                border-left: none !important;
              }
              &:last-child {
                border-right: none !important;
              }
              .v-checkbox.v-input {
                margin: -26px -30px -30px -7px;
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
