<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-lg-4 mb-3"
      >
        <h3 class="mb-0">Recent Orders</h3>
        <h3 class="mb-0">Customer ID : 357951</h3>
      </div>
      <div class="default-table-area all-carts">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-secondary">#JAN-2345</td>
                <td>
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="~/assets/images/product-1.jpg"
                      class="wh-40 rounded-3"
                      alt="product-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Smart Band</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <PagesEcommerceOrderDetailsQuantityCounter />
                </td>
                <td class="text-body">$80.00</td>
                <td class="text-body">$80.00</td>
              </tr>
              <tr>
                <td class="text-secondary">#JAN-1323</td>
                <td>
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="~/assets/images/product-2.jpg"
                      class="wh-40 rounded-3"
                      alt="product-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Headphone</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <PagesEcommerceOrderDetailsQuantityCounter />
                </td>
                <td class="text-body">$150.00</td>
                <td class="text-body">$450.00</td>
              </tr>
              <tr>
                <td class="text-secondary">#DEC-1234</td>
                <td>
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="~/assets/images/product-3.jpg"
                      class="wh-40 rounded-3"
                      alt="product-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">iPhone 15 Plus</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <PagesEcommerceOrderDetailsQuantityCounter />
                </td>
                <td class="text-body">$750.00</td>
                <td class="text-body">$750.00</td>
              </tr>
              <tr>
                <td class="text-secondary">#DEC-3567</td>
                <td>
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="~/assets/images/product-4.jpg"
                      class="wh-40 rounded-3"
                      alt="product-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Bluetooth Speaker</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <PagesEcommerceOrderDetailsQuantityCounter />
                </td>
                <td class="text-body">$15.00</td>
                <td class="text-body">$75.00</td>
              </tr>
              <tr>
                <td class="text-secondary">#DEC-1098</td>
                <td>
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="d-flex align-items-center"
                  >
                    <img
                      src="~/assets/images/product-5.jpg"
                      class="wh-40 rounded-3"
                      alt="product-1"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">Airbuds 2nd Gen</h6>
                    </div>
                  </NuxtLink>
                </td>
                <td>
                  <PagesEcommerceOrderDetailsQuantityCounter />
                </td>
                <td class="text-body">$25.00</td>
                <td class="text-body">$50.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentOrders",
});
</script>
