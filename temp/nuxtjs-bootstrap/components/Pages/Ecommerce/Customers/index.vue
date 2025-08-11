<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
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
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block"></i>
            <span>Add New Customer</span>
          </span>
        </button>
      </div>

      <div class="default-table-area style-two default-table-width">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input position-relative top-1"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault7"
                    />
                    <label
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault7"
                    >
                      ID
                    </label>
                  </div>
                </th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Last Login</th>
                <th scope="col">Received</th>
                <th scope="col">Due</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id">
                <td class="text-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault12"
                    />
                    <label
                      class="position-relative top-2 ms-1"
                      for="flexCheckDefault12"
                    >
                      {{ item.id }}
                    </label>
                  </div>
                </td>
                <td>
                  <NuxtLink
                    to="/ecommerce/orders"
                    class="d-flex align-items-center"
                  >
                    <div class="flex-shrink-0">
                      <img
                        :src="item.customer.image"
                        class="wh-34 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-1">
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.customer.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>{{ item.email }}</td>
                <td class="text-body">{{ item.phone }}</td>
                <td class="text-body">{{ item.lastLogin }}</td>
                <td class="text-body">${{ item.totalSpend }}</td>
                <td class="text-body">${{ item.totalOrders }}</td>
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

        <div class="p-4 pt-lg-4">
          <CommonPagination items="10" :total="items.length" />
        </div>
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
  name: "Customers",
  setup() {
    const items = ref([
      {
        id: "#854",
        customer: {
          image: image1,
          name: "Oliver Khan",
        },
        email: "oliver@trezo.com",
        phone: "+1 555-123-4567",
        lastLogin: "10 Oct 2024",
        totalSpend: "6,855.00",
        totalOrders: 125,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#853",
        customer: {
          image: image2,
          name: "Carolyn Barnes",
        },
        email: "carolyn@trezo.com",
        phone: "+1 555-987-6543",
        lastLogin: "11 Sep 2024",
        totalSpend: "2,800.00",
        totalOrders: 99,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#852",
        customer: {
          image: image3,
          name: "Donna Miller",
        },
        email: "donna@trezo.com",
        phone: "+1 555-456-7890",
        lastLogin: "12 Aug 2024",
        totalSpend: "258.00",
        totalOrders: 145,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#851",
        customer: {
          image: image4,
          name: "Barbara Cross",
        },
        email: "barbara@trezo.com",
        phone: "+1 555-369-7878",
        lastLogin: "13 Jul 2024",
        totalSpend: "3,890.00",
        totalOrders: 279,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#850",
        customer: {
          image: image5,
          name: "Rebecca Block",
        },
        email: "rebecca@trezo.com",
        phone: "+1 555-658-4488",
        lastLogin: "14 Jun 2024",
        totalSpend: "2,500.00",
        totalOrders: 169,
        status: "Deactive",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#849",
        customer: {
          image: image6,
          name: "Ramiro McCarty",
        },
        email: "ramiro@trezo.com",
        phone: "+1 555-558-9966",
        lastLogin: "15 May 2024",
        totalSpend: "8,200.00",
        totalOrders: 46,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#848",
        customer: {
          image: image7,
          name: "Robert Fairweather",
        },
        email: "robert@trezo.com",
        phone: "+1 555-357-5888",
        lastLogin: "16 Apr 2024",
        totalSpend: "640.00",
        totalOrders: 184,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#847",
        customer: {
          image: image8,
          name: "Marcelino Haddock",
        },
        email: "marcelino@trezo.com",
        phone: "+1 555-456-8877",
        lastLogin: "17 Mar 2024",
        totalSpend: "9,100.00",
        totalOrders: 166,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#846",
        customer: {
          image: image9,
          name: "Thomas Wilson",
        },
        email: "thomas@trezo.com",
        phone: "+1 555-622-4488",
        lastLogin: "18 Feb 2024",
        totalSpend: "7,300.00",
        totalOrders: 75,
        status: "Active",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#845",
        customer: {
          image: image10,
          name: "Nathaniel Hulsey",
        },
        email: "nathaniel@trezo.com",
        phone: "+1 555-225-4488",
        lastLogin: "19 Jan 2024",
        totalSpend: "6,600.00",
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
        deactive: wordDeactive.value === classValue,
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
