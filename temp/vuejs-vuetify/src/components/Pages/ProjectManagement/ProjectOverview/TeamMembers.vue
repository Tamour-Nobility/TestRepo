<template>
  <v-card
    class="team-members-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Team Members</h5>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tasks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 5)" :key="item.id">
              <td class="text-start">
                <div class="user-info d-flex align-items-center">
                  <div class="image">
                    <v-img :src="item.user.image" alt="user-image" />
                  </div>
                  <div class="info">
                    <span class="fw-medium d-block">
                      {{ item.user.name }}
                    </span>
                    <span class="email d-block text-body">
                      {{ item.user.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="text-body">{{ item.tasks }}</td>
              <td>
                <v-progress-linear
                  :class="item.status.class"
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
  name: "TeamMembers",
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            image: require("@/assets/images/users/user6.jpg"),
            name: "Alex Davis",
            email: "alex@trezo.com",
          },
          tasks: 55,
          status: {
            percentage: 55,
            class: "primary",
          },
        },
        {
          id: 2,
          user: {
            image: require("@/assets/images/users/user7.jpg"),
            name: "Laura Martinez",
            email: "laura@trezo.com",
          },
          tasks: 125,
          status: {
            percentage: 70,
            class: "success",
          },
        },
        {
          id: 3,
          user: {
            image: require("@/assets/images/users/user8.jpg"),
            name: "Mark Thompson",
            email: "mark@trezo.com",
          },
          tasks: 78,
          status: {
            percentage: 30,
            class: "purple",
          },
        },
        {
          id: 4,
          user: {
            image: require("@/assets/images/users/user9.jpg"),
            name: "Rachel White",
            email: "rachel@trezo.com",
          },
          tasks: 95,
          status: {
            percentage: 90,
            class: "orange",
          },
        },
        {
          id: 5,
          user: {
            image: require("@/assets/images/users/user10.jpg"),
            name: "Kevin Lee",
            email: "kevin@trezo.com",
          },
          tasks: 134,
          status: {
            percentage: 50,
            class: "primary",
          },
        },
        {
          id: 6,
          user: {
            image: require("@/assets/images/users/user6.jpg"),
            name: "Alex Davis",
            email: "alex@trezo.com",
          },
          tasks: 70,
          status: {
            percentage: 70,
            class: "purple",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.team-members-card {
  padding-bottom: 4px !important;
  .trezo-table-content {
    .trezo-table {
      margin-left: -25px;
      margin-right: -25px;
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
                border-bottom-width: 0;
                padding: {
                  top: 10px;
                  bottom: 10px;
                }
                &:first-child {
                  border-left-width: 0 !important;
                  padding-left: 25px;
                }
                &:last-child {
                  padding-right: 25px;
                  border-right-width: 0 !important;
                }
                .user-info {
                  .image {
                    width: 44px;
                    height: 44px;
                    margin-right: 12px;
                  }
                }
              }
              &:first-child {
                td {
                  border-top-width: 0 !important;
                }
              }
              &:last-child {
                td {
                  border-bottom-width: 0 !important;
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
