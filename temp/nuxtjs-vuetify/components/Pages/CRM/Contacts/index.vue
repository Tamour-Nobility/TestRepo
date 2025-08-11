<template>
  <v-card
    class="crm-contacts-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search contact here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <PagesCRMContactsAddNewContacts />
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
              <th class="text-start">Phone</th>
              <th class="text-start">Last Contacted</th>
              <th class="text-start">Company</th>
              <th class="text-start">Lead Score</th>
              <th class="text-start">Status</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td><v-checkbox color="primary"></v-checkbox></td>
              <td>
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
              <td>
                {{ item.email }}
              </td>
              <td class="text-body">{{ item.phone }}</td>
              <td class="text-body">{{ item.lastContacted }}</td>
              <td class="text-body">{{ item.company }}</td>
              <td class="text-body">{{ item.leadScore }}</td>
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
                  <!-- <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.edit }}
                    </i>
                  </button> -->
                  <PagesCRMContactsEditContact />
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
  name: "Contacts",
  setup() {
    const items = ref([
      {
        id: "#854",
        user: {
          image: image1,
          name: "Oliver Khan",
        },
        email: "oliver@trezo.com",
        phone: "+1 555-123-4567",
        lastContacted: "Jun 19, 2024",
        company: "ABC Corporation",
        leadScore: 50,
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
        id: "#853",
        user: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        phone: "+1 555-987-6543",
        lastContacted: "Jun 18, 2024",
        company: "XYZ Ltd",
        leadScore: 35,
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
        id: "#852",
        user: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        phone: "+1 555-456-7890",
        lastContacted: "Jun 17, 2024",
        company: "Tech Solutions",
        leadScore: 40,
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
        id: "#851",
        user: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        phone: "+1 555-369-7878",
        lastContacted: "Jun 16, 2024",
        company: "Global Solutions",
        leadScore: 25,
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
        id: "#850",
        user: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        phone: "+1 555-658-4488",
        lastContacted: "Jun 15, 2024",
        company: "Acma Industries",
        leadScore: 27,
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
        id: "#849",
        user: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        phone: "+1 555-558-9966",
        lastContacted: "Jun 14, 2024",
        company: "Synergy Ltd",
        leadScore: 16,
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
        id: "#848",
        user: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        phone: "+1 555-357-5888",
        lastContacted: "Jun 13, 2024",
        company: "Summit Solutions",
        leadScore: 38,
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
        id: "#847",
        user: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        phone: "+1 555-456-8877",
        lastContacted: "Jun 12, 2024",
        company: "Strategies Ltd",
        leadScore: 15,
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
        id: "#846",
        user: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        phone: "+1 555-622-4488",
        lastContacted: "Jun 11, 2024",
        company: "Tech Enterprises",
        leadScore: 41,
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
        id: "#845",
        user: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        phone: "+1 555-225-4488",
        lastContacted: "Jun 10, 2024",
        company: "Synetic Solutions",
        leadScore: 29,
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
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          user: { name: string };
          email: string;
          phone: string;
          lastContacted: string;
          company: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.user.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.lastContacted
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.company.toLowerCase().includes(searchTerm.value.toLowerCase())
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
.crm-contacts-card {
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
                  left: 25px !important;
                  right: 0;
                }
              }
              &:last-child {
                border-top-right-radius: 0;
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
                border-left: 0 !important;
                padding: {
                  left: 25px !important;
                  right: 0;
                }
              }
              &:last-child {
                border-right: 0 !important;
                padding-right: 25px;
                text-align: end;
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
        color: var(--blackColor) !important;
        background-color: transparent !important;
      }
    }
  }
}
</style>
