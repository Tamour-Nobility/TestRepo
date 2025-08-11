<template>
  <v-card
    class="recent-orders-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header justify-space-between">
      <h5 class="mb-0">Recent Orders</h5>
      <h5 class="mb-0">Customer ID : 357951</h5>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">Order ID</th>
              <th class="text-start">Product</th>
              <th class="text-start">Items</th>
              <th class="text-start">Price</th>
              <th class="text-start">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.orderID">
              <td>{{ item.orderID }}</td>
              <td class="text-start">
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
              <td>{{ item.items }}</td>
              <td>${{ item.price }}</td>
              <td>${{ item.total }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentOrders",
  data() {
    return {
      items: [
        {
          orderID: "#JAN-2345",
          product: {
            image: require("@/assets/images/products/product1.jpg"),
            title: "Smart Band",
            date: "08 Jun 2024",
          },
          items: 1,
          price: "$80.00",
          total: "$80.00",
        },
        {
          orderID: "#JAN-1323",
          product: {
            image: require("@/assets/images/products/product2.jpg"),
            title: "Headphone",
            date: "07 Jun 2024",
          },
          items: 3,
          price: "$150.00",
          total: "$450.00",
        },
        {
          orderID: "#DEC-1234",
          product: {
            image: require("@/assets/images/products/product3.jpg"),
            title: "iPhone 15 Plus",
            date: "06 Jun 2024",
          },
          items: 1,
          price: "$750.00",
          total: "$750.00",
        },
        {
          orderID: "#DEC-3567",
          product: {
            image: require("@/assets/images/products/product4.jpg"),
            title: "Bluetooth Speaker",
            date: "05 Jun 2024",
          },
          items: 5,
          price: "$15.00",
          total: "$75.00",
        },
        {
          orderID: "#DEC-1098",
          product: {
            image: require("@/assets/images/products/product5.jpg"),
            title: "Airbuds 2nd Gen",
            date: "04 Jun 2024",
          },
          items: 2,
          price: "$25.00",
          total: "$50.00",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-orders-card {
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
