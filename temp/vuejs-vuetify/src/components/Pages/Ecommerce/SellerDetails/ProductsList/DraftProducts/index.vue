<template>
  <div class="draft-product-list">
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search product here....."
          v-model="searchTerm"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <RouterLink to="/ecommerce/create-product" class="add-btn" type="button">
        <i class="material-symbols-outlined"> add </i>
        Add New Product
      </RouterLink>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">ID</th>
              <th class="text-start">Product</th>
              <th class="text-start">Category</th>
              <th class="text-start">Price</th>
              <th class="text-start">Order</th>
              <th class="text-start">Stock</th>
              <th class="text-start">Amount</th>
              <th class="text-start">Rating</th>
              <th class="text-start">Status</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredItems" :key="item.id">
              <td class="text-start">
                <RouterLink to="/dashboard" class="text-body">
                  {{ item.id }}
                </RouterLink>
              </td>
              <td>
                <div class="product-info d-flex align-items-center">
                  <div class="image">
                    <v-img :src="item.product.image" alt="product-image" />
                  </div>
                  <div class="info">
                    <RouterLink
                      to="/ecommerce/product-details"
                      class="fw-medium d-inline-block"
                    >
                      {{ item.product.title }}
                    </RouterLink>
                    <span class="d-block text-body">
                      {{ item.product.date }}
                    </span>
                  </div>
                </div>
              </td>
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.order }}</td>
              <td>{{ item.stock.count }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.rating }}</td>
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
        <PaginationTwo items="10" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";

export default defineComponent({
  name: "DraftProducts",
  components: {
    PaginationTwo,
  },
  setup() {
    const items = ref([
      {
        id: "#JAN-998",
        product: {
          image: require("@/assets/images/products/product2.jpg"),
          title: "Headphone",
          date: "07 Jun 2024",
        },
        category: "Electronics",
        price: "$49.00",
        order: 25,
        stock: {
          count: "825",
          className: false,
        },
        amount: "$1,225",
        rating: "5.00 (69 reviews)",
        status: "Draft",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-995",
        product: {
          image: require("@/assets/images/products/product5.jpg"),
          title: "Airbuds 2nd Gen",
          date: "04 Jun 2024",
        },
        category: "Headphone",
        price: "$79.00",
        order: 56,
        stock: {
          count: "460",
          className: false,
        },
        amount: "$4,424",
        rating: "5.00 (158 reviews)",
        status: "Draft",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-998",
        product: {
          image: require("@/assets/images/products/product2.jpg"),
          title: "Headphone",
          date: "07 Jun 2024",
        },
        category: "Electronics",
        price: "$49.00",
        order: 25,
        stock: {
          count: "825",
          className: false,
        },
        amount: "$1,225",
        rating: "5.00 (69 reviews)",
        status: "Draft",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        id: "#JAN-995",
        product: {
          image: require("@/assets/images/products/product5.jpg"),
          title: "Airbuds 2nd Gen",
          date: "04 Jun 2024",
        },
        category: "Headphone",
        price: "$79.00",
        order: 56,
        stock: {
          count: "460",
          className: false,
        },
        amount: "$4,424",
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

    const wordPublished = ref("Published");
    const wordDraft = ref("Draft");

    const computeClass = (classValue: string) => {
      return {
        published: wordPublished.value === classValue,
        warning: wordDraft.value === classValue,
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
.draft-product-list {
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
