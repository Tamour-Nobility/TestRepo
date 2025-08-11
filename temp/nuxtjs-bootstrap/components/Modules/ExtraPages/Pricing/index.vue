<template>
  <div>
    <ModulesExtraPagesPricingStyleOne />

    <div class="mb-4 pt-4">
      <h3 class="mb-0">Pricing Plan 2</h3>
    </div>

    <ModulesExtraPagesPricingStyleTwo />

    <div class="mb-4 pt-4">
      <h3 class="mb-0">Pricing Plan 3</h3>
    </div>

    <ModulesExtraPagesPricingStyleThree />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pricing",
});
</script>
