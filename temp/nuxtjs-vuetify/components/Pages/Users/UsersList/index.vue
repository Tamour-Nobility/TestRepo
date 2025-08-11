<template>
  <v-card
    class="users-list-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search user here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <NuxtLink class="add-btn" to="/users/add-user">
        <i class="material-symbols-outlined"> add </i>
        Add New User
      </NuxtLink>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">User ID</th>
              <th class="text-start">User</th>
              <th class="text-start">Email</th>
              <th class="text-start">Location</th>
              <th class="text-start">Phone</th>
              <th class="text-start">Projects</th>
              <th class="text-start">Join Date</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.userID">
              <td>
                {{ item.userID }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      class="rounded-circle"
                      :src="item.user.image"
                      alt="user-image"
                    />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.user.name }}
                  </span>
                </div>
              </td>
              <td>
                {{ item.email }}
              </td>
              <td>{{ item.location }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.projects }}</td>
              <td>{{ item.joinDate }}</td>
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
        <CommonPaginationTwo items="10" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/users/user6.jpg";
import image2 from "~/assets/images/users/user7.jpg";
import image3 from "~/assets/images/users/user8.jpg";
import image4 from "~/assets/images/users/user9.jpg";
import image5 from "~/assets/images/users/user10.jpg";
import image6 from "~/assets/images/users/user11.jpg";
import image7 from "~/assets/images/users/user12.jpg";
import image8 from "~/assets/images/users/user13.jpg";
import image9 from "~/assets/images/users/user14.jpg";
import image10 from "~/assets/images/users/user15.jpg";

export default defineComponent({
  name: "UsersList",
  setup() {
    const items = ref([
      {
        userID: "#JAN-158",
        user: {
          image: image1,
          name: "Marcia Baker",
        },
        email: "marcia@trezo.com",
        location: "Washington D.C",
        phone: "+1 555-445-4455",
        projects: 6,
        joinDate: "01 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-325",
        user: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "barnes@trezo.com",
        location: "Chicago",
        phone: "+1 555-455-9966",
        projects: 10,
        joinDate: "02 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-286",
        user: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        location: "Oklahoma City",
        phone: "+1 555-555-9922",
        projects: 6,
        joinDate: "03 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-463",
        user: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "cross@trezo.com",
        location: "San Diego",
        phone: "+1 555-445-7788",
        projects: 4,
        joinDate: "04 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-491",
        user: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "block@trezo.com",
        location: "Los Angeles",
        phone: "+1 555-333-2288",
        projects: 2,
        joinDate: "05 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-860",
        user: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        location: "Las Vegas",
        phone: "+1 555-445-4455",
        projects: 8,
        joinDate: "06 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-431",
        user: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        location: "San Francisco",
        phone: "+1 555-555-9922",
        projects: 6,
        joinDate: "07 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-998",
        user: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "haddock@trezo.com",
        location: "Washington D.C",
        phone: "+1 555-455-9966",
        projects: 9,
        joinDate: "08 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-436",
        user: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "wildon@trezo.com",
        location: "San Diego",
        phone: "+1 555-333-2288",
        projects: 5,
        joinDate: "10 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-125",
        user: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "hulsey@trezo.com",
        location: "Chicago",
        phone: "+1 555-445-7788",
        projects: 6,
        joinDate: "11 Dec 2024",
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
          userID: string;
          user: { name: string };
          email: string;
          location: string;
          phone: string;
          joinDate: string;
        }) =>
          item.userID.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.location
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.joinDate.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    return {
      items,
      searchTerm,
      filteredItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.users-list-card {
  padding-bottom: 8px !important;
  .trezo-table-content {
    .trezo-table {
      margin-left: -25px;
      margin-right: -25px;
      table {
        thead {
          tr {
            th {
              background-color: #ecf0ff !important;
              padding: {
                top: 13px;
                bottom: 13px;
              }
              &:first-child {
                border-top-left-radius: 0 !important;
                padding: {
                  left: 25px;
                  right: 0;
                }
              }
              &:last-child {
                border-top-right-radius: 0 !important;
                padding-right: 25px;
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
              padding: {
                top: 17px !important;
                bottom: 17px !important;
              }
              &:first-child {
                border-left-width: 0 !important;
                padding: {
                  left: 25px;
                  right: 0;
                }
              }
              &:last-child {
                padding-right: 25px;
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
            &:last-child {
              td {
                border-bottom-width: 0;
              }
            }
            &:first-child {
              td {
                border-top-width: 0;
              }
            }
          }
        }
      }
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        border-radius: 0 0 7px 7px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
        border-top: 1px solid #eceef2;
      }
    }
  }
}
</style>
