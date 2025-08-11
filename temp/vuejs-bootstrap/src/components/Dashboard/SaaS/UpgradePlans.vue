<template>
  <div
    class="rounded-3 p-4 text-center mb-4"
    style="background: linear-gradient(164deg, #b95232 3.1%, #eb6d5c 99.22%)"
  >
    <h2
      class="fs-24 text-white mx-auto mb-5 text-center"
      style="max-width: 300px; line-height: 1.4"
    >
      Have A Team More Than 10 Members?
    </h2>
    <a href="#" class="btn btn-dark fs-16 fw-medium rounded-3 py-2 px-3">
      Upgrade Plans
    </a>
    <div class="text-center py-5 mt-4">
      <img src="@/assets/images/saas.png" alt="saas" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpgradePlans",
});
</script>
