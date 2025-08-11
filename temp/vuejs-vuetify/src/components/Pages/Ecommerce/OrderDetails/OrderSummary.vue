<template>
  <v-card
    class="order-summary-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Order Summary</h5>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table basic-table">
        <v-table>
          <thead>
            <tr>
              <th class="fw-medium">Description</th>
              <th class="fw-medium text-end">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-body">Grand Total :</td>
              <td class="text-body text-end">$1,105.00</td>
            </tr>
            <tr>
              <td class="text-body">Discount :</td>
              <td class="text-body text-end">-$105.00</td>
            </tr>
            <tr>
              <td class="text-body">Tax :</td>
              <td class="text-body text-end">$75.00</td>
            </tr>
            <tr>
              <td class="fw-medium">Subtotal :</td>
              <td class="text-body text-end">$1,000.00</td>
            </tr>
            <tr>
              <td class="text-body">Shipping Charge :</td>
              <td class="text-body text-end">$80.00</td>
            </tr>
            <tr>
              <td class="text-body">Coupon Charge :</td>
              <td class="text-body text-end">$20.00</td>
            </tr>
            <tr>
              <td class="fw-medium">Total :</td>
              <td class="text-body text-end">$900.00</td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <h6>Payment Method</h6>
      <div
        class="payment-method d-flex align-items-center justify-space-between"
      >
        <div class="d-flex align-items-center">
          <div class="icon">
            <v-img src="@/assets/images/master-card.png" alt="master-card" />
          </div>
          <div class="info">
            <span class="d-block text-black fw-medium"> Payment </span>
            <span class="d-block"> Via MasterCard </span>
          </div>
        </div>
        <span class="d-block"> $900.00 </span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "OrderSummary",
};
</script>

<style lang="scss" scoped>
.order-summary-card {
  h6 {
    margin: {
      bottom: 10px;
      top: 25px;
    }
  }
  .payment-method {
    .icon {
      img {
        margin-bottom: -4px;
      }
    }
    .info {
      margin-left: 12px;

      span {
        &:nth-child(2) {
          font-size: 13px;
          margin-top: 4px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .order-summary-card {
    h6 {
      margin: {
        top: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .order-summary-card {
    h6 {
      margin: {
        top: 20px;
      }
    }
  }
}
</style>
