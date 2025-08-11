<template>
  <v-card
    class="users-card trezo-card border-radius d-block bg-white border-0 shadow-none"
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
      <PagesProjectManagementUsersAddNewUsers />
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
              <th class="text-start">User</th>
              <th class="text-start">Email</th>
              <th class="text-start">Role</th>
              <th class="text-start">Project Access</th>
              <th class="text-start">Status</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td><v-checkbox color="primary"></v-checkbox></td>
              <td class="text-body">
                {{ item.id }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.user.image" alt="user-image" />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.user.name }}
                  </span>
                </div>
              </td>
              <td class="text-body">{{ item.email }}</td>
              <td class="text-body">{{ item.role }}</td>
              <td class="text-body">{{ item.projectAccess }}</td>
              <td>
                <span class="trezo-status-badge" v-if="item.status.active">
                  Active
                </span>
                <span
                  class="trezo-status-badge cancelled"
                  v-if="item.status.deactive"
                >
                  Deactive
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
  name: "Users",
  setup() {
    const items = ref([
      {
        id: "#999",
        user: {
          image: image1,
          name: "Sarah Johnson",
        },
        email: "sarah@trezo.com",
        role: "Project Manager",
        projectAccess: "Hotel Management System, Python Upgrade",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#998",
        user: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        role: "Developer",
        projectAccess: "Project Monitoring, Project Alpho",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#997",
        user: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        role: "Business Analyst",
        projectAccess: "Aegis Accounting Service, Beja Banking Finance",
        status: {
          active: false,
          deactive: true,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#996",
        user: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        role: "UI/UX Designer",
        projectAccess: "Aoriv AI Design, Vaxo App Design",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#995",
        user: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        role: "QA Tester",
        projectAccess: "Product Development, Trezo Dashboard Design",
        status: {
          active: false,
          deactive: true,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#994",
        user: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        role: "Admin",
        projectAccess: "Hotel Management System, Python Upgrade",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#993",
        user: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        role: "Editor",
        projectAccess: "Project Monitoring, Project Alpho",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#992",
        user: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        role: "Project Manager",
        projectAccess: "Aegis Accounting Service, Beja Banking Finance",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#991",
        user: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        role: "UI/UX Designer",
        projectAccess: "Aoriv AI Design, Vaxo App Design",
        status: {
          active: true,
          deactive: false,
        },
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#990",
        user: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        role: "Web Developer",
        projectAccess: "Product Development, Trezo Dashboard Design",
        status: {
          active: false,
          deactive: true,
        },
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
          user: { name: string };
          email: string;
          role: string;
          projectAccess: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.role.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.projectAccess
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase())
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
.users-card {
  .trezo-table-content {
    .trezo-table {
      table {
        thead {
          tr {
            th {
              &:first-child {
                padding-right: 0;
              }
              &:nth-child(2) {
                padding-left: 15px;
              }
              &:last-child {
                text-align: end;
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
              &:first-child {
                padding-right: 0;
              }
              &:nth-child(2) {
                padding-left: 15px;
              }
              .action-buttons.d-flex.align-items-center {
                justify-content: end;
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
        border-left: 1px solid #eceef2;
        border-right: 1px solid #eceef2;
        border-bottom: 1px solid #eceef2;
      }
    }
  }
}
</style>
