<template>
  <v-row>
    <v-col cols="12" lg="8">
      <v-card
        class="your-order-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header justify-space-between">
          <h5 class="mb-0">Your Order</h5>
          <h5 class="mb-0">Customer ID : 357951</h5>
        </div>
        <div class="order-card-content">
          <div class="trezo-table-content">
            <div class="trezo-table">
              <v-table>
                <thead>
                  <tr>
                    <th scope="col" class="fw-medium">Order ID</th>
                    <th scope="col" class="fw-medium">Product</th>
                    <th scope="col" class="fw-medium">Quantity</th>
                    <th scope="col" class="fw-medium">Price</th>
                    <th scope="col" class="fw-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#JAN-2345</td>
                    <td>
                      <div class="product-info d-flex align-items-center">
                        <div class="image">
                          <v-img
                            src="@/assets/images/products/product1.jpg"
                            alt="product-image"
                          />
                        </div>
                        <div class="info">
                          <RouterLink
                            to="/ecommerce/product-details"
                            class="fw-medium d-inline-block"
                          >
                            Smart Band
                          </RouterLink>
                        </div>
                      </div>
                    </td>
                    <td>
                      <QuantityCounter :value="1" />
                    </td>
                    <td class="text-body">$80.00</td>
                    <td class="text-body">$80.00</td>
                  </tr>
                  <tr>
                    <td>#JAN-1323</td>
                    <td>
                      <div class="product-info d-flex align-items-center">
                        <div class="image">
                          <v-img
                            src="@/assets/images/products/product2.jpg"
                            alt="product-image"
                          />
                        </div>
                        <div class="info">
                          <RouterLink
                            to="/ecommerce/product-details"
                            class="fw-medium d-inline-block"
                          >
                            Headphone
                          </RouterLink>
                        </div>
                      </div>
                    </td>
                    <td>
                      <QuantityCounter value="3" />
                    </td>
                    <td class="text-body">$150.00</td>
                    <td class="text-body">$450.00</td>
                  </tr>
                  <tr>
                    <td>#DEC-1234</td>
                    <td>
                      <div class="product-info d-flex align-items-center">
                        <div class="image">
                          <v-img
                            src="@/assets/images/products/product3.jpg"
                            alt="product-image"
                          />
                        </div>
                        <div class="info">
                          <RouterLink
                            to="/ecommerce/product-details"
                            class="fw-medium d-inline-block"
                          >
                            iPhone 15 Plus
                          </RouterLink>
                        </div>
                      </div>
                    </td>
                    <td>
                      <QuantityCounter value="7" />
                    </td>
                    <td class="text-body">$750.00</td>
                    <td class="text-body">$750.00</td>
                  </tr>
                  <tr>
                    <td>#DEC-3567</td>
                    <td>
                      <div class="product-info d-flex align-items-center">
                        <div class="image">
                          <v-img
                            src="@/assets/images/products/product4.jpg"
                            alt="product-image"
                          />
                        </div>
                        <div class="info">
                          <RouterLink
                            to="/ecommerce/product-details"
                            class="fw-medium d-inline-block"
                          >
                            Bluetooth Speaker
                          </RouterLink>
                        </div>
                      </div>
                    </td>
                    <td>
                      <QuantityCounter :value="1" />
                    </td>
                    <td class="text-body">$15.00</td>
                    <td class="text-body">$75.00</td>
                  </tr>
                  <tr>
                    <td>#DEC-1098</td>
                    <td>
                      <div class="product-info d-flex align-items-center">
                        <div class="image">
                          <v-img
                            src="@/assets/images/products/product5.jpg"
                            alt="product-image"
                          />
                        </div>
                        <div class="info">
                          <RouterLink
                            to="/ecommerce/product-details"
                            class="fw-medium d-inline-block"
                          >
                            Airbuds 2nd Gen
                          </RouterLink>
                        </div>
                      </div>
                    </td>
                    <td>
                      <QuantityCounter :value="1" />
                    </td>
                    <td class="text-body">$25.00</td>
                    <td class="text-body">$50.00</td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>
          <div class="coupon-code position-relative">
            <div class="trezo-form-group">
              <v-text-field
                label="Coupon code"
                placeholder="E.g. #ARP1217"
                required
              ></v-text-field>
            </div>
            <div class="form-btn-box">
              <button type="button" class="apply">
                <i class="material-symbols-outlined"> done_all </i>
                Apply
              </button>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card
        class="order-summary-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Order Summary</h5>
        </div>
        <div class="summary-card-content">
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
          <h6>Add A Note</h6>
          <form>
            <div class="trezo-form-group">
              <v-textarea
                label="Write here...."
                placeholder="E.g. It makes me feel..."
              ></v-textarea>
            </div>
            <div class="form-btn-box">
              <button type="button" class="primary">
                <i class="material-symbols-outlined"> add </i>
                Proceed To Shipping
              </button>
            </div>
          </form>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import QuantityCounter from "./QuantityCounter.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cart",
  components: {
    QuantityCounter,
  },
};
</script>

<style lang="scss" scoped>
.your-order-card {
  .order-card-content {
    .coupon-code {
      max-width: 430px;
      margin-top: 25px;

      .form-group {
        margin-bottom: 20px;
      }
    }
  }
}
.order-summary-card {
  .summary-card-content {
    h6 {
      margin: {
        bottom: 10px;
        top: 25px;
      }
    }
    .trezo-table-content {
      .trezo-table {
        .v-table {
          table {
            tbody {
              tr {
                td {
                  padding: 13px 20px !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
.v-card {
  &.trezo-card {
    .trezo-table-content {
      .trezo-table {
        .v-table {
          table {
            thead {
              tr {
                th {
                  padding: 16px 20px;
                  line-height: 1;
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .your-order-card {
    .order-card-content {
      .coupon-code {
        max-width: 100%;
        margin-top: 17px;

        .form-group {
          margin-bottom: 15px;
        }
      }
    }
  }
  .order-summary-card {
    .summary-card-content {
      h6 {
        margin: {
          top: 17px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .your-order-card {
    .order-card-content {
      .coupon-code {
        max-width: 430px;
        margin-top: 20px;
      }
    }
  }
  .order-summary-card {
    .summary-card-content {
      h6 {
        margin: {
          top: 20px;
        }
      }
    }
  }
}
</style>
