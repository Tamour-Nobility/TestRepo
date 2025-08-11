<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Your Order</h3>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-secondary">Ordered items</span>
        <NuxtLink
          to="/ecommerce/cart"
          class="text-primary text-decoration-none"
        >
          Edit Cart
        </NuxtLink>
      </div>

      <div class="default-table-area">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col" class="text-end">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grand Total :</td>
                <td class="text-end">$0.00</td>
              </tr>
              <tr>
                <td>Discount :</td>
                <td class="text-end">$0.00</td>
              </tr>
              <tr>
                <td>Tax :</td>
                <td class="text-end">$0.00</td>
              </tr>
              <tr>
                <td class="text-secondary fw-medium">Subtotal :</td>
                <td class="text-secondary fw-medium text-end">$0.00</td>
              </tr>
              <tr>
                <td>Shipping Charge :</td>
                <td class="text-end">$0.00</td>
              </tr>
              <tr>
                <td>Coupon Charge :</td>
                <td class="text-secondary text-end">$0.00</td>
              </tr>
              <tr>
                <td class="text-secondary fw-medium">Total :</td>
                <td class="text-secondary fw-medium text-end">$0.00</td>
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
  name: "YourOrder",
});
</script>
