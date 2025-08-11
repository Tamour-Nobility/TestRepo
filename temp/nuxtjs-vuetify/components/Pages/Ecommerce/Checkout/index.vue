<template>
  <v-row>
    <v-col cols="12" lg="8">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Billing Information</h5>
        </div>
        <form>
          <div class="row">
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Customer Name
                </v-label>
                <v-text-field
                  label="Enter customer name"
                  placeholder="E.g. Ava Turner"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Phone Number
                </v-label>
                <v-text-field
                  label="Enter phone number"
                  placeholder="E.g. +1 555-123-4567"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Email Address
                </v-label>
                <v-text-field
                  label="Enter email address"
                  placeholder="E.g. ava@trezo.com"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> State </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Florida',
                    'Wisconsin',
                    'Washington',
                    'Nebraska',
                    'Minnesota',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> City </v-label>
                <v-select
                  label="Select"
                  :items="['New York', 'Tokyo', 'London', 'Amsterdam', 'Paris']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  ZIP / Postcode
                </v-label>
                <v-text-field
                  label="Enter zip / postcode"
                  placeholder="E.g. 3100"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Street Address
                </v-label>
                <v-text-field
                  label="Enter street address"
                  placeholder="E.g. 123 Main Street, Anytown, USA"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Country
                </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Switzerland',
                    'New Zealand',
                    'Germany',
                    'United States',
                    'Japan',
                    'Netherlands',
                    'Sweden',
                    'Canada',
                    'United Kingdom',
                    'Australia',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Order Note (optional)
                </v-label>
                <v-textarea
                  label="Write your note here...."
                  placeholder="E.g. It makes me feel..."
                ></v-textarea>
              </div>
            </div>
          </div>
          <div class="form-btn-box">
            <button type="button" color="primary">
              <i class="material-symbols-outlined"> add </i>
              Proceed To Shipping
            </button>
          </div>
        </form>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card
        class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Shopping Cart</h5>
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
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Payment Method</h5>
        </div>
        <form>
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Payment Card </v-label
            ><v-select
              label="Select"
              :items="['PayPal', 'Stax', 'Helcim', 'Square', 'Stripe']"
            >
            </v-select>
          </div>
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Card Number
            </v-label>
            <v-text-field
              label="Enter card number"
              placeholder="E.g. 3588XXXXXXXXX"
              required
            ></v-text-field>
          </div>
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Expiration Date
            </v-label>
            <v-text-field
              label="Enter expiration date"
              placeholder="E.g. MM / YY"
              required
            ></v-text-field>
          </div>
          <div class="trezo-form-group mb-0">
            <v-label class="d-block fw-medium text-black">
              Security Code
            </v-label>
            <v-text-field
              label="Enter security code"
              placeholder="E.g. CVV"
              required
            ></v-text-field>
          </div>
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Checkout",
};
</script>
