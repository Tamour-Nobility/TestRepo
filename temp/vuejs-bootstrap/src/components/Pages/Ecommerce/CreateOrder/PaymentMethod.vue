<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Payment Method</h3>

      <form>
        <div class="row">
          <div class="col-lg-12 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Payment Card</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>PayPal</option>
                <option value="1">Stax</option>
                <option value="2">Helcim</option>
                <option value="3">Square</option>
                <option value="4">Stripe</option>
              </select>
            </div>
          </div>
          <div class="col-lg-12 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Card Number</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter Card Number"
              />
            </div>
          </div>
          <div class="col-lg-12 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Expiration Date</label>
              <input type="date" class="form-control h-55" />
            </div>
          </div>
          <div class="col-lg-12 col-sm-6">
            <div class="form-group mb-0">
              <label class="label text-secondary">Security Code</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter Security Code"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaymentMethod",
});
</script>
