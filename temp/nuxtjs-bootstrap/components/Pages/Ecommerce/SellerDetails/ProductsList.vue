<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <ul
        class="nav nav-tabs border-0 gap-3 mb-lg-4 mb-3 seller-tabs"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border-0 bg-body-bg text-secondary fw-medium fs-16 rounded-3 py- px-md-5 px-4 active"
            id="all-tab"
            data-bs-toggle="tab"
            data-bs-target="#all-tab-pane"
            type="button"
            role="tab"
            aria-controls="all-tab-pane"
            aria-selected="true"
          >
            <span class="d-inline-block py-1">All Products</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border-0 bg-body-bg text-secondary fw-medium fs-16 rounded-3 py- px-md-5 px-4"
            id="published-tab"
            data-bs-toggle="tab"
            data-bs-target="#published-tab-pane"
            type="button"
            role="tab"
            aria-controls="published-tab-pane"
            aria-selected="false"
          >
            <span class="d-inline-block py-1">Published Products</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border-0 bg-body-bg text-secondary fw-medium fs-16 rounded-3 py- px-md-5 px-4"
            id="draft-tab"
            data-bs-toggle="tab"
            data-bs-target="#draft-tab-pane"
            type="button"
            role="tab"
            aria-controls="draft-tab-pane"
            aria-selected="false"
          >
            <span class="d-inline-block py-1">Draft Products</span>
          </button>
        </li>
      </ul>

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

        <NuxtLink
          to="/ecommerce/create-product"
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block fs-18 me-1"></i>
            <span>Add New Product</span>
          </span>
        </NuxtLink>
      </div>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="all-tab-pane"
          role="tabpanel"
          aria-labelledby="all-tab"
          tabindex="0"
        >
          <div class="default-table-area all-products">
            <div class="table-responsive">
              <table class="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Order</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in filteredItems" :key="item.id">
                    <td class="text-body">
                      {{ item.id }}
                    </td>
                    <td>
                      <NuxtLink
                        to="/ecommerce/product-details"
                        class="d-flex align-items-center"
                      >
                        <img
                          :src="item.product.image"
                          class="wh-40 rounded-3"
                          alt="product-1"
                        />
                        <div class="ms-2 ps-1">
                          <h6 class="fw-medium fs-14">
                            {{ item.product.title }}
                          </h6>
                          <span class="fs-12 text-body">
                            {{ item.product.date }}
                          </span>
                        </div>
                      </NuxtLink>
                    </td>
                    <td class="text-secondary">
                      {{ item.category }}
                    </td>
                    <td class="text-secondary">${{ item.price }}</td>
                    <td class="text-secondary">
                      {{ item.order }}
                    </td>
                    <td class="text-secondary">
                      {{ item.stock.count }}
                    </td>
                    <td class="text-secondary">${{ item.amount }}</td>
                    <td class="text-secondary">
                      {{ item.rating }}
                    </td>
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
                          <i
                            class="material-symbols-outlined fs-16 text-primary"
                          >
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
                          <i
                            class="material-symbols-outlined fs-16 text-danger"
                          >
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
        <div
          class="tab-pane fade"
          id="published-tab-pane"
          role="tabpanel"
          aria-labelledby="published-tab"
          tabindex="0"
        >
          <div class="default-table-area all-products">
            <div class="table-responsive">
              <table class="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Order</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in publishedItems" :key="item.id">
                    <td class="text-body">
                      {{ item.id }}
                    </td>
                    <td>
                      <NuxtLink
                        to="/ecommerce/product-details"
                        class="d-flex align-items-center"
                      >
                        <img
                          :src="item.product.image"
                          class="wh-40 rounded-3"
                          alt="product-1"
                        />
                        <div class="ms-2 ps-1">
                          <h6 class="fw-medium fs-14">
                            {{ item.product.title }}
                          </h6>
                          <span class="fs-12 text-body">
                            {{ item.product.date }}
                          </span>
                        </div>
                      </NuxtLink>
                    </td>
                    <td class="text-secondary">
                      {{ item.category }}
                    </td>
                    <td class="text-secondary">${{ item.price }}</td>
                    <td class="text-secondary">
                      {{ item.order }}
                    </td>
                    <td class="text-secondary">
                      {{ item.stock.count }}
                    </td>
                    <td class="text-secondary">${{ item.amount }}</td>
                    <td class="text-secondary">
                      {{ item.rating }}
                    </td>
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
                          <i
                            class="material-symbols-outlined fs-16 text-primary"
                          >
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
                          <i
                            class="material-symbols-outlined fs-16 text-danger"
                          >
                            {{ item.action.delete }}
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CommonPaginationTwo items="10" :total="publishedItems.length" />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="draft-tab-pane"
          role="tabpanel"
          aria-labelledby="draft-tab"
          tabindex="0"
        >
          <div class="default-table-area all-products">
            <div class="table-responsive">
              <table class="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Order</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in draftItems" :key="item.id">
                    <td class="text-body">
                      {{ item.id }}
                    </td>
                    <td>
                      <NuxtLink
                        to="/ecommerce/product-details"
                        class="d-flex align-items-center"
                      >
                        <img
                          :src="item.product.image"
                          class="wh-40 rounded-3"
                          alt="product-1"
                        />
                        <div class="ms-2 ps-1">
                          <h6 class="fw-medium fs-14">
                            {{ item.product.title }}
                          </h6>
                          <span class="fs-12 text-body">
                            {{ item.product.date }}
                          </span>
                        </div>
                      </NuxtLink>
                    </td>
                    <td class="text-secondary">
                      {{ item.category }}
                    </td>
                    <td class="text-secondary">${{ item.price }}</td>
                    <td class="text-secondary">
                      {{ item.order }}
                    </td>
                    <td class="text-secondary">
                      {{ item.stock.count }}
                    </td>
                    <td class="text-secondary">${{ item.amount }}</td>
                    <td class="text-secondary">
                      {{ item.rating }}
                    </td>
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
                          <i
                            class="material-symbols-outlined fs-16 text-primary"
                          >
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
                          <i
                            class="material-symbols-outlined fs-16 text-danger"
                          >
                            {{ item.action.delete }}
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CommonPaginationTwo items="10" total="30" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "~/assets/images/product-1.jpg";
import image2 from "~/assets/images/product-2.jpg";
import image3 from "~/assets/images/product-3.jpg";
import image4 from "~/assets/images/product-4.jpg";
import image5 from "~/assets/images/product-5.jpg";

export default defineComponent({
  name: "ProductsList",
  setup() {
    const items = ref([
      {
        id: "#JAN-999",
        product: {
          image: image1,
          title: "Smart Band",
          date: "08 Jun 2024",
        },
        category: "Watch",
        price: "35.00",
        order: 75,
        stock: {
          count: "750",
          className: false,
        },
        amount: "2,625",
        rating: "5.00 (141 reviews)",
        status: "Published",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-998",
        product: {
          image: image2,
          title: "Headphone",
          date: "07 Jun 2024",
        },
        category: "Electronics",
        price: "49.00",
        order: 25,
        stock: {
          count: "825",
          className: false,
        },
        amount: "1,225",
        rating: "5.00 (69 reviews)",
        status: "Draft",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-997",
        product: {
          image: image3,
          title: "iPhone 15 Plus",
          date: "06 Jun 2024",
        },
        category: "Apple",
        price: "99.00",
        order: 55,
        stock: {
          count: "Stock Out",
          className: true,
        },
        amount: "5,445",
        rating: "5.00 (99 reviews)",
        status: "Published",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-996",
        product: {
          image: image4,
          title: "Bluetooth Speaker",
          date: "05 Jun 2024",
        },
        category: "Google",
        price: "59.00",
        order: 40,
        stock: {
          count: "535",
          className: false,
        },
        amount: "2,360",
        rating: "4.00 (75 reviews)",
        status: "Published",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-995",
        product: {
          image: image5,
          title: "Airbuds 2nd Gen",
          date: "04 Jun 2024",
        },
        category: "Headphone",
        price: "79.00",
        order: 56,
        stock: {
          count: "460",
          className: false,
        },
        amount: "4,424",
        rating: "5.00 (158 reviews)",
        status: "Draft",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-999",
        product: {
          image: image1,
          title: "Smart Band",
          date: "08 Jun 2024",
        },
        category: "Watch",
        price: "35.00",
        order: 75,
        stock: {
          count: "750",
          className: false,
        },
        amount: "2,625",
        rating: "5.00 (141 reviews)",
        status: "Published",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-998",
        product: {
          image: image2,
          title: "Headphone",
          date: "07 Jun 2024",
        },
        category: "Electronics",
        price: "49.00",
        order: 25,
        stock: {
          count: "825",
          className: false,
        },
        amount: "1,225",
        rating: "5.00 (69 reviews)",
        status: "Draft",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-997",
        product: {
          image: image3,
          title: "iPhone 15 Plus",
          date: "06 Jun 2024",
        },
        category: "Apple",
        price: "99.00",
        order: 55,
        stock: {
          count: "Stock Out",
          className: true,
        },
        amount: "5,445",
        rating: "5.00 (99 reviews)",
        status: "Published",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-996",
        product: {
          image: image4,
          title: "Bluetooth Speaker",
          date: "05 Jun 2024",
        },
        category: "Google",
        price: "59.00",
        order: 40,
        stock: {
          count: "535",
          className: false,
        },
        amount: "2,360",
        rating: "4.00 (75 reviews)",
        status: "Published",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-995",
        product: {
          image: image5,
          title: "Airbuds 2nd Gen",
          date: "04 Jun 2024",
        },
        category: "Headphone",
        price: "79.00",
        order: 56,
        stock: {
          count: "460",
          className: false,
        },
        amount: "4,424",
        rating: "5.00 (158 reviews)",
        status: "Draft",
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
          product: { title: string; date: string };
          category: string;
          price: string;
          stock: { count: string };
          amount: string;
          rating: string;
          status: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.product.title
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.product.date
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.category
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.price.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.stock.count
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.amount.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.rating.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const publishedItems = computed(() =>
      filteredItems.value.filter(
        (item: { status: string }) => item.status === "Published"
      )
    );

    const draftItems = computed(() =>
      filteredItems.value.filter(
        (item: { status: string }) => item.status === "Draft"
      )
    );

    const computeClass = (classValue: string) => {
      return {
        published: classValue === "Published",
        draft: classValue === "Draft",
      };
    };

    return {
      items,
      searchTerm,
      filteredItems,
      publishedItems,
      draftItems,
      computeClass,
    };
  },
});
</script>
