<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3">Delivery Details</h3>
      <div class="d-flex align-items-center mb-2">
        <span class="text-secondary">XYZ Delivery</span>
      </div>
      <div class="d-flex align-items-center mb-2">
        <span class="text-secondary">Order ID:</span>
        <span class="ms-1">XXXXXX1004</span>
      </div>
      <div class="d-flex align-items-center mb-2">
        <span class="text-secondary">Payment Method:</span>
        <span class="ms-1">Master Card</span>
      </div>
      <div class="d-flex align-items-center mb-0">
        <span class="text-secondary">Email:</span>
        <span class="ms-1">example@trezo.com</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeliveryDetails",
});
</script>
