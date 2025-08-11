<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <form>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Seller Name
            </v-label>
            <v-text-field
              label="Enter seller name"
              placeholder="E.g. Ava Turner"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Store Name </v-label>
            <v-text-field
              label="Enter store name"
              placeholder="E.g. TechMaster Store"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
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
        <div class="col-md-4 col-sm-6">
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
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Date of Birth
            </v-label>
            <v-text-field
              type="date"
              placeholder="Choose a date"
              class="date-input"
            >
            </v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> City </v-label>
            <v-select
              label="Select"
              :items="['New York', 'Tokyo', 'London', 'Amsterdam', 'Paris']"
            >
            </v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Country </v-label>
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
        <div class="col-md-4 col-sm-6">
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
        <div class="col-md-4 col-sm-12">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Wallet Balance
            </v-label>
            <v-text-field
              label="Enter wallet balance"
              placeholder="E.g. $12,092.00"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-12 col-sm-12">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Description
            </v-label>
            <CommonTextEditor />
            <!-- <v-textarea label="Type here...."></v-textarea> -->
          </div>
        </div>
        <div class="col-md-12 col-sm-12">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Upload Image
            </v-label>
            <CommonFileUploader />
          </div>
        </div>
      </div>
      <div class="form-btn-box">
        <button type="button" class="warn">Cancel</button>
        <button type="button" class="primary">
          <i class="material-symbols-outlined"> add </i>
          Create Seller
        </button>
      </div>
    </form>
  </v-card>
</template>

<script>
export default {
  name: "CreateSeller",
};
</script>
