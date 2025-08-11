<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3">Shipping Details</h3>
      <div class="d-flex align-items-center mb-2">
        <span class="text-secondary">Shipping Date:</span>
        <span class="ms-1">25 Nov 2024 10:30 AM</span>
      </div>
      <div class="d-flex align-items-center mb-2">
        <span class="text-secondary">Email:</span>
        <span class="ms-1">example@trezo.com</span>
      </div>
      <div class="d-flex align-items-center mb-2">
        <span class="text-secondary">Phone:</span>
        <span class="ms-1">+1 444 333 5566</span>
      </div>
      <div class="d-flex mb-0">
        <span class="text-secondary">Address:</span>
        <span class="ms-1">789 Pine St, Villageton, England</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShippingDetails",
});
</script>
