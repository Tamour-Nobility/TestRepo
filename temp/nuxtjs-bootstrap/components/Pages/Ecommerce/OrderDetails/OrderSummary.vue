<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Order Summary</h3>

      <div class="default-table-area mb-3 mb-lg-4">
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
                <td class="text-end">$1,105.00</td>
              </tr>
              <tr>
                <td>Discount :</td>
                <td class="text-end">-$105.00</td>
              </tr>
              <tr>
                <td>Tax :</td>
                <td class="text-end">$75.00</td>
              </tr>
              <tr>
                <td class="text-secondary fw-medium">Subtotal :</td>
                <td class="text-secondary fw-medium text-end">$1,000.00</td>
              </tr>
              <tr>
                <td>Shipping Charge :</td>
                <td class="text-end">$80.00</td>
              </tr>
              <tr>
                <td>Coupon Charge :</td>
                <td class="text-secondary text-end">$20.00</td>
              </tr>
              <tr>
                <td class="text-secondary fw-medium">Total :</td>
                <td class="text-secondary fw-medium text-end">$900.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h6 class="label fs-15 fw-bold text-secondary mb-2">Payment Method</h6>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img src="~/assets/images/master-card.png" alt="master-card" />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="d-block fw-medium fs-15 text-secondary">
                Payment
              </span>
              <span class="fs-13">Via MasterCard</span>
            </div>
          </div>
          <span>$900.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderSummary",
});
</script>
