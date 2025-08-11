<template>
  <div class="row">
    <div class="col-lg-8">
      <v-card
        class="order-tracking-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header justify-space-between">
          <h5 class="mb-0">Order ID #2435679</h5>
          <h5 class="mb-0">Tracking ID #1004216609</h5>
        </div>
        <div class="order-tracking-card-content">
          <span class="text d-block"> IBAN: EST6049283742809 </span>
          <span class="text d-block"> Date: 26 Mar 2024 </span>
          <div
            class="numbers position-relative z-1 d-md-flex justify-space-between"
          >
            <div class="box">
              <div class="rounded-circle text-center fw-semibold text-black">
                01
              </div>
              <span class="fw-semibold text-black d-block"> Order Placed </span>
              <span class="d-block"> 22 Mar 2024 - 11:35AM </span>
            </div>
            <div class="box">
              <div class="rounded-circle text-center fw-semibold text-black">
                02
              </div>
              <span class="fw-semibold text-black d-block"> Packed </span>
              <span class="d-block"> 23 Mar 2024 - 10:35AM </span>
            </div>
            <div class="box">
              <div class="rounded-circle text-center fw-semibold text-black">
                03
              </div>
              <span class="fw-semibold text-black d-block"> Shipped </span>
              <span class="d-block"> 24 Mar 2024 - 3:45PM </span>
            </div>
            <div class="box active">
              <div class="rounded-circle text-center fw-semibold text-black">
                04
              </div>
              <span class="fw-semibold text-black d-block"> Delivered </span>
              <span class="d-block"> 25 Mar 2024 - 2:21PM </span>
            </div>
          </div>
          <span class="title text-black d-block fw-semibold">
            View Details:
          </span>
          <span class="text text-black d-block">
            <span class="text-body">25 Mar 2024 - 2:21PM:</span> Your order
            delivered.
          </span>
          <span class="text text-black d-block">
            <span class="text-body">24 Mar 2024 - 3:45PM:</span> Your order
            shipped.
          </span>
          <span class="text text-black d-block">
            <span class="text-body">23 Mar 2024 - 10:35AM:</span> Your order is
            on the way for deliver.
          </span>
          <span class="text text-black d-block">
            <span class="text-body">22 Mar 2024 - 11:35AM:</span> Your order is
            now on warehouse. It’s being ready for shipped.
          </span>
        </div>
      </v-card>
    </div>
    <div class="col-lg-4">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
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
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderTracking",
};
</script>

<style lang="scss" scoped>
.order-tracking-card {
  .order-tracking-card-content {
    .text {
      margin-bottom: 15px;
      line-height: 1.1;
      color: var(--bodyColor);

      &:last-child {
        margin-bottom: 0;
      }
    }
    .numbers {
      margin: {
        top: 50px;
        bottom: 50px;
      }
      .box {
        div {
          width: 50px;
          height: 50px;
          line-height: 48px;
          background-color: var(--whiteColor);
          border: 1px dashed var(--primaryColor);
        }
        span {
          margin-top: 20px;
          font-size: 16px;
          line-height: 1.1;
          color: var(--bodyColor);

          &:last-child {
            margin-top: 10px;
            font-size: 14px;
          }
        }
        &.active {
          div {
            color: var(--whiteColor) !important;
            background-color: var(--primaryColor);
          }
        }
      }
      &::before {
        left: 0;
        right: 0;
        top: 25px;
        content: "";
        z-index: -1;
        position: absolute;
        border: {
          left: 0px dashed var(--primaryColor);
          top: 1px dashed var(--primaryColor);
        }
      }
    }
    .title {
      margin-bottom: 15px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .order-tracking-card {
    .order-tracking-card-content {
      .text {
        margin-bottom: 12px;
      }
      .numbers {
        margin: {
          top: 25px;
          bottom: 25px;
        }
        .box {
          span {
            padding-left: 45px;
            margin-top: 15px;
            font-size: 14px;

            &:last-child {
              font-size: 13px;
              margin: {
                top: 8px;
                bottom: 15px;
              }
            }
          }
        }
        &::before {
          top: 0;
          bottom: 0;
          left: 25px;
          right: auto;
          border-left-width: 1px;
        }
      }
      .title {
        margin-bottom: 12px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .order-tracking-card {
    .order-tracking-card-content {
      .numbers {
        margin: {
          top: 40px;
          bottom: 40px;
        }
        .box {
          span {
            font-size: 15px;

            &:last-child {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>
