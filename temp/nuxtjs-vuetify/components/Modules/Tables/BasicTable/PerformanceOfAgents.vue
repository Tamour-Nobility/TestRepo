<template>
  <v-card
    class="performance-of-agents-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Performance of Agents</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              Last 30 Days
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
              <th class="text-start">Agent Name</th>
              <th class="text-start">Total Tickets</th>
              <th class="text-start">Open Tickets</th>
              <th class="text-start">Resolved Tickets</th>
              <th class="text-start">Avg. Resolution Time</th>
              <th class="text-start">Satisfaction Rate</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 6)" :key="item.id">
              <td class="text-body">{{ item.id }}</td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.agentName.image" alt="instructor-image" />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.agentName.name }}
                  </span>
                </div>
              </td>
              <td class="text-body">
                {{ item.totalTickets }}
              </td>
              <td class="text-body">{{ item.openTickets }}</td>
              <td class="text-body">{{ item.resolvedTickets }}</td>
              <td class="text-body">{{ item.avgResolutionTime }}</td>
              <td>
                <v-progress-circular
                  :color="item.satisfactionRate.className"
                  :model-value="item.satisfactionRate.percentage"
                  :size="40"
                >
                  {{ item.satisfactionRate.percentage }}%
                </v-progress-circular>
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
import { defineComponent } from "vue";

import image1 from "~/assets/images/users/user12.jpg";
import image2 from "~/assets/images/users/user13.jpg";
import image3 from "~/assets/images/users/user14.jpg";
import image4 from "~/assets/images/users/user15.jpg";
import image5 from "~/assets/images/users/user16.jpg";
import image6 from "~/assets/images/users/user17.jpg";

export default defineComponent({
  name: "PerformanceOfAgents",
  data() {
    return {
      items: [
        {
          id: "#854",
          agentName: {
            image: image1,
            name: "Oliver Khan",
          },
          totalTickets: 230,
          openTickets: 20,
          resolvedTickets: 75,
          avgResolutionTime: "2.5 hours",
          satisfactionRate: {
            percentage: 80,
            className: "primary",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#853",
          agentName: {
            image: image2,
            name: "Ava Cooper",
          },
          totalTickets: 180,
          openTickets: 16,
          resolvedTickets: 35,
          avgResolutionTime: "1.4 hours",
          satisfactionRate: {
            percentage: 75,
            className: "purple",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#852",
          agentName: {
            image: image3,
            name: "Isabella Evans",
          },
          totalTickets: 150,
          openTickets: 35,
          resolvedTickets: 45,
          avgResolutionTime: "3.2 hours",
          satisfactionRate: {
            percentage: 80,
            className: "success",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#851",
          agentName: {
            image: image4,
            name: "Mia Hughes",
          },
          totalTickets: 75,
          openTickets: 86,
          resolvedTickets: 25,
          avgResolutionTime: "4.5 hours",
          satisfactionRate: {
            percentage: 100,
            className: "secondary",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#850",
          agentName: {
            image: image5,
            name: "Noah Mitchell",
          },
          totalTickets: 320,
          openTickets: 90,
          resolvedTickets: 10,
          avgResolutionTime: "3.8 hours",
          satisfactionRate: {
            percentage: 80,
            className: "danger",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#849",
          agentName: {
            image: image6,
            name: "Sophia Carter",
          },
          totalTickets: 120,
          openTickets: 55,
          resolvedTickets: 20,
          avgResolutionTime: "5.3 hours",
          satisfactionRate: {
            percentage: 60,
            className: "primary",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.performance-of-agents-card {
  .trezo-table-content {
    .trezo-table {
      margin: {
        left: -25px;
        right: -25px;
      }
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
