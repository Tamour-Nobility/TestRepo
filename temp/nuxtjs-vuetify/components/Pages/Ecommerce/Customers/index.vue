<template>
  <v-card
    class="customers-list trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search customer here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last Month
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
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Customer</th>
              <th class="text-start">Email</th>
              <th class="text-start">Phone</th>
              <th class="text-start">Last Login</th>
              <th class="text-start">Total Spend</th>
              <th class="text-start">Total Orders</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td class="text-body">
                {{ item.id }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img :src="item.customer.image" alt="customer-image" />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.customer.name }}
                  </span>
                </div>
              </td>
              <td class="text-body">{{ item.email }}</td>
              <td class="text-body">{{ item.phone }}</td>
              <td class="text-body">{{ item.lastLogin }}</td>
              <td class="text-body">{{ item.totalSpend }}</td>
              <td class="text-body">{{ item.totalOrders }}</td>
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
  name: "Customers",
  setup() {
    const items = ref([
      {
        id: "#JAN-854",
        customer: {
          image: image1,
          name: "Oliver Khan",
        },
        email: "oliver@trezo.com",
        phone: "+1 555-123-4567",
        lastLogin: "10 Oct 2024",
        totalSpend: "$6,855.00",
        totalOrders: 125,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-853",
        customer: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        phone: "+1 555-987-6543",
        lastLogin: "11 Sep 2024",
        totalSpend: "$2,800.00",
        totalOrders: 99,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-852",
        customer: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        phone: "+1 555-456-7890",
        lastLogin: "12 Aug 2024",
        totalSpend: "$258.00",
        totalOrders: 145,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-851",
        customer: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        phone: "+1 555-369-7878",
        lastLogin: "13 Jul 2024",
        totalSpend: "$3,890.00",
        totalOrders: 279,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-850",
        customer: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        phone: "+1 555-658-4488",
        lastLogin: "14 Jun 2024",
        totalSpend: "$2,500.00",
        totalOrders: 169,
        status: "Deactive",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-849",
        customer: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        phone: "+1 555-558-9966",
        lastLogin: "15 May 2024",
        totalSpend: "$8,200.00",
        totalOrders: 46,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-848",
        customer: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        phone: "+1 555-357-5888",
        lastLogin: "16 Apr 2024",
        totalSpend: "$640.00",
        totalOrders: 184,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-847",
        customer: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        phone: "+1 555-456-8877",
        lastLogin: "17 Mar 2024",
        totalSpend: "$9,100.00",
        totalOrders: 166,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-846",
        customer: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        phone: "+1 555-622-4488",
        lastLogin: "18 Feb 2024",
        totalSpend: "$7,300.00",
        totalOrders: 75,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-845",
        customer: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        phone: "+1 555-225-4488",
        lastLogin: "19 Jan 2024",
        totalSpend: "$6,600.00",
        totalOrders: 55,
        status: "Deactive",
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
          customer: { name: string };
          email: string;
          phone: string;
          lastLogin: string;
          totalSpend: string;
          status: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.customer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.lastLogin
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.totalSpend
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const wordActive = ref("Active");
    const wordDeactive = ref("Deactive");

    const computeClass = (classValue: string) => {
      return {
        published: wordActive.value === classValue,
        warning: wordDeactive.value === classValue,
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

<style lang="scss" scoped>
.customers-list {
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
