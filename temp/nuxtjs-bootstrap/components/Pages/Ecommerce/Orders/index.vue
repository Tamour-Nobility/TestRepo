<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
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
        <button
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          data-bs-toggle="offcanvas"
          data-bs-target="#addNewOrderModal"
          aria-controls="addNewOrderModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New Customer</span>
          </span>
        </button>
      </div>

      <div class="default-table-area recent-orders">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Items</th>
                <th scope="col">Created</th>
                <th scope="col">Total</th>
                <th scope="col">Vendor</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.orderID">
                <td>{{ item.orderID }}</td>
                <td>
                  <NuxtLink to="/my-profile" class="d-flex align-items-center">
                    <img
                      :src="item.customer.image"
                      class="wh-40 rounded-3"
                      alt="user"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14">
                        {{ item.customer.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>{{ item.items }}</td>
                <td>{{ item.created }}</td>
                <td>${{ item.total }}</td>
                <td>{{ item.vendor }}</td>
                <td>
                  <span
                    class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                    :class="computeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
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
                        {{ item.action.edit }}
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

import image1 from "~/assets/images/user-1.jpg";
import image2 from "~/assets/images/user-2.jpg";
import image3 from "~/assets/images/user-3.jpg";
import image4 from "~/assets/images/user-4.jpg";
import image5 from "~/assets/images/user-5.jpg";

export default defineComponent({
  name: "Orders",
  setup() {
    const items = ref([
      {
        orderID: "#JAN-2345",
        customer: {
          image: image1,
          name: "Sarah Johnson",
        },
        items: 120,
        created: "12 Jun 2024",
        total: "10,490",
        vendor: "Dennis Matthews",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: image2,
          name: "Michael Smith",
        },
        items: 62,
        created: "11 Jun 2024",
        total: "6,575",
        vendor: "Kathryn Turner",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: image3,
          name: "Emily Brown",
        },
        items: 49,
        created: "10 Jun 2024",
        total: "12,870",
        vendor: "John Valdez",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: image4,
          name: "Jason Lee",
        },
        items: 25,
        created: "09 Jun 2024",
        total: "7,895",
        vendor: "Douglas Harvey",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: image5,
          name: "Ashley Davis",
        },
        items: 82,
        created: "08 Jun 2024",
        total: "4,680",
        vendor: "Susan Rader",
        status: "Rejected",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#JAN-2345",
        customer: {
          image: image1,
          name: "Sarah Johnson",
        },
        items: 120,
        created: "12 Jun 2024",
        total: "10,490",
        vendor: "Dennis Matthews",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: image2,
          name: "Michael Smith",
        },
        items: 62,
        created: "11 Jun 2024",
        total: "6,575",
        vendor: "Kathryn Turner",
        status: "Confirmed",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: image3,
          name: "Emily Brown",
        },
        items: 49,
        created: "10 Jun 2024",
        total: "12,870",
        vendor: "John Valdez",
        status: "Pending",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: image4,
          name: "Jason Lee",
        },
        items: 25,
        created: "09 Jun 2024",
        total: "7,895",
        vendor: "Douglas Harvey",
        status: "Shipped",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: image5,
          name: "Ashley Davis",
        },
        items: 82,
        created: "08 Jun 2024",
        total: "4,680",
        vendor: "Susan Rader",
        status: "Rejected",
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
          orderID: string;
          customer: { name: string };
          items: { toString: () => string | any[] };
          created: string;
          total: string;
          vendor: string;
          status: string;
        }) =>
          item.orderID.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.customer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.items.toString().includes(searchTerm.value.toLowerCase()) ||
          item.created.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.total.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.vendor.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const wordConfirmed = ref("Confirmed");
    const wordShipped = ref("Shipped");
    const wordInPending = ref("Pending");
    const wordRejected = ref("Rejected");

    const computeClass = (classValue: string) => {
      return {
        confirmed: wordConfirmed.value === classValue,
        inProgress: wordShipped.value === classValue,
        pending: wordInPending.value === classValue,
        rejected: wordRejected.value === classValue,
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
