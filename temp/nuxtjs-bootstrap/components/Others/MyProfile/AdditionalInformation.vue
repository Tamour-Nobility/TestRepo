<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Additional Information</h3>
      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Phone:</span>
          <span class="text-secondary fw-medium ms-1">+1 444 266 5599</span>
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Address:</span>
          <span class="text-secondary fw-medium ms-1"
            >84 S. Arrowhead Court Branford</span
          >
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Orders:</span>
          <span class="text-secondary fw-medium ms-1">696</span>
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Products:</span>
          <span class="text-secondary fw-medium ms-1">9240</span>
        </li>
        <li class="d-flex align-items-center mb-2 pb-1">
          <span>Events:</span>
          <span class="text-secondary fw-medium ms-1">5</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdditionalInformation",
});
</script>
