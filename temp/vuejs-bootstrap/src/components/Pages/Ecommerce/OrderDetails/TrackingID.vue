<template>
  <div class="card bg-primary border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="text-white mb-lg-4 mb-3">Tracking ID: 000346798254</h3>

      <div class="d-flex justify-content-between tracking-step flex-wrap gap-3">
        <div>
          <span class="text-white fw-semibold count text-center mb-3">
            01
          </span>
          <span class="d-block text-white fw-semibold">Order Placed</span>
        </div>
        <div class="text-center">
          <span class="text-white fw-semibold count mb-3">02</span>
          <span class="d-block text-white fw-semibold">Packed</span>
        </div>
        <div class="text-center">
          <span class="text-white fw-semibold count mb-3 active">03</span>
          <span class="d-block text-white fw-semibold">Shipped</span>
        </div>
        <div class="text-end">
          <span class="text-white fw-semibold count text-center mb-3">
            04
          </span>
          <span class="d-block text-white fw-semibold">Delivered</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrackingID",
});
</script>
