<template>
  <div>
    <PricingStyleOne />

    <div class="mb-4 pt-4">
      <h3 class="mb-0">Pricing Plan 2</h3>
    </div>

    <PricingStyleTwo />

    <div class="mb-4 pt-4">
      <h3 class="mb-0">Pricing Plan 3</h3>
    </div>

    <PricingStyleThree />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PricingStyleOne from "./PricingStyleOne.vue";
import PricingStyleTwo from "./PricingStyleTwo.vue";
import PricingStyleThree from "./PricingStyleThree.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pricing",
  components: {
    PricingStyleOne,
    PricingStyleTwo,
    PricingStyleThree,
  },
});
</script>
