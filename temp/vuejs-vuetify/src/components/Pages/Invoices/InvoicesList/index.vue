<template>
  <v-card
    class="invoices-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search invoice here....."
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
            class="card-header-menu d-inline-block border-radius"
          >
            This Week
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">All</button>
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
              <th class="text-start">Invoice ID</th>
              <th class="text-start">Customer</th>
              <th class="text-start">Email</th>
              <th class="text-start">Issued Date</th>
              <th class="text-start">Total</th>
              <th class="text-start">Quantity</th>
              <th class="text-start">Wallet Balance</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.invoiceID">
              <td>
                {{ item.invoiceID }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img">
                    <v-img
                      class="rounded-circle"
                      :src="item.customer.image"
                      alt="user-image"
                    />
                  </div>
                  <span class="d-block text-black fw-medium">
                    {{ item.customer.name }}
                  </span>
                </div>
              </td>
              <td>
                {{ item.email }}
              </td>
              <td class="text-body">{{ item.issuedDate }}</td>
              <td class="text-body">{{ item.total }}</td>
              <td class="text-body">{{ item.quantity }}</td>
              <td class="text-body">{{ item.walletBalance }}</td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.view }}
                    </i>
                  </button>
                  <button type="button">
                    <i class="material-symbols-outlined">
                      {{ item.action.print }}
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
        <PaginationTwo items="8" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "InvoicesList",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        invoiceID: "#JAN-158",
        customer: {
          image: require("@/assets/images/users/user6.jpg"),
          name: "Marcia Baker",
        },
        email: "marcia@trezo.com",
        total: "$5,000",
        issuedDate: "10 Nov 2024",
        quantity: 6,
        walletBalance: "$2,000",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-325",
        customer: {
          image: require("@/assets/images/users/user7.jpg"),
          name: "Carolyn Barnes",
        },
        email: "barnes@trezo.com",
        total: "$8,750",
        issuedDate: "11 Nov 2024",
        quantity: 10,
        walletBalance: "$4,500",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-286",
        customer: {
          image: require("@/assets/images/users/user8.jpg"),
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        total: "$3,200",
        issuedDate: "12 Nov 2024",
        quantity: 6,
        walletBalance: "$1,550",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-463",
        customer: {
          image: require("@/assets/images/users/user8.jpg"),
          name: "Barbara Cross",
        },
        email: "cross@trezo.com",
        total: "$3,750",
        issuedDate: "13 Nov 2024",
        quantity: 4,
        walletBalance: "$2,490",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-998",
        customer: {
          image: require("@/assets/images/users/user9.jpg"),
          name: "Rebecca Block",
        },
        email: "block@trezo.com",
        total: "$6,000",
        issuedDate: "14 Nov 2024",
        quantity: 2,
        walletBalance: "$3,599",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-436",
        customer: {
          image: require("@/assets/images/users/user10.jpg"),
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        total: "$9,200",
        issuedDate: "13 Nov 2024",
        quantity: 8,
        walletBalance: "$5,800",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-860",
        customer: {
          image: require("@/assets/images/users/user11.jpg"),
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        total: "$2,500",
        issuedDate: "12 Nov 2024",
        quantity: 6,
        walletBalance: "$1,200",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-491",
        customer: {
          image: require("@/assets/images/users/user12.jpg"),
          name: "Marcelino Haddock",
        },
        email: "haddock@trezo.com",
        total: "$7,300",
        issuedDate: "17 Nov 2024",
        quantity: 9,
        walletBalance: "$4,850",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-125",
        customer: {
          image: require("@/assets/images/users/user13.jpg"),
          name: "Thomas Wilson",
        },
        email: "wildon@trezo.com",
        total: "$4,800",
        issuedDate: "18 Nov 2024",
        quantity: 5,
        walletBalance: "$2,300",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
      {
        invoiceID: "#JAN-579",
        customer: {
          image: require("@/assets/images/users/user14.jpg"),
          name: "Nathaniel Hulsey",
        },
        email: "hulsey@trezo.com",
        total: "$6,500",
        issuedDate: "19 Nov 2024",
        quantity: 6,
        walletBalance: "$4,560",
        action: {
          view: "visibility",
          print: "print",
          delete: "delete",
        },
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          invoiceID: string;
          customer: { name: string };
          email: string;
          total: string;
          issuedDate: string;
          walletBalance: string;
        }) =>
          item.invoiceID
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.customer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.total.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.issuedDate
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.walletBalance
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
.invoices-card {
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
