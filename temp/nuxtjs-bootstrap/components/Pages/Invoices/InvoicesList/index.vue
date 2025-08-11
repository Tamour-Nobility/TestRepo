<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-lg-4 mb-3"
      >
        <form class="position-relative table-src-form me-0" @submit.prevent>
          <input
            type="text"
            class="form-control"
            placeholder="Search here"
            v-model="searchTerm"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-90"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">Last Year</option>
        </select>
      </div>

      <div class="default-table-area all-products">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Invoice ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Email</th>
                <th scope="col">Issued Date</th>
                <th scope="col">Total</th>
                <th scope="col">Quantity</th>
                <th scope="col">Wallet Balance</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="item in filteredItems.slice(0, 10)"
                :key="item.invoiceID"
              >
                <td class="text-body">
                  {{ item.invoiceID }}
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      :src="item.customer.image"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">
                        {{ item.customer.name }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td class="text-secondary">
                  {{ item.email }}
                </td>
                <td class="text-secondary">
                  {{ item.issuedDate }}
                </td>
                <td class="text-secondary">
                  {{ item.total }}
                </td>
                <td class="text-secondary">
                  {{ item.quantity }}
                </td>
                <td class="text-secondary">
                  {{ item.walletBalance }}
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.view }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.print }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        {{ item.action.delete }}
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CommonPaginationTwo items="10" :total="items.length" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/user-6.jpg";
import image2 from "~/assets/images/user-7.jpg";
import image3 from "~/assets/images/user-8.jpg";
import image4 from "~/assets/images/user-9.jpg";
import image5 from "~/assets/images/user-10.jpg";
import image6 from "~/assets/images/user-11.jpg";
import image7 from "~/assets/images/user-12.jpg";
import image8 from "~/assets/images/user-13.jpg";
import image9 from "~/assets/images/user-14.jpg";
import image10 from "~/assets/images/user-15.jpg";

export default defineComponent({
  name: "InvoicesList",
  setup() {
    const items = ref([
      {
        invoiceID: "#JAN-158",
        customer: {
          image: image1,
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
          image: image2,
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
          image: image3,
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
          image: image4,
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
          image: image5,
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
          image: image6,
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
          image: image7,
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
          image: image8,
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
          image: image9,
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
          image: image10,
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
      {
        invoiceID: "#JAN-158",
        customer: {
          image: image1,
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
          image: image2,
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
          image: image3,
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
          image: image4,
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
          image: image5,
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
          image: image6,
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
          image: image7,
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
          image: image8,
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
          image: image9,
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
          image: image10,
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
