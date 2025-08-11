<template>
  <PageTitle pageTitle="Pricing" subTitle="Extra Pages" />
  <Pricing />
  <h5 class="mb-25">Pricing Style - 2</h5>
  <PricingStyleTwo />
  <h5 class="mb-25">Pricing Style - 3</h5>
  <PricingStyleThree />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Pricing from "@/components/Modules/ExtraPages/Pricing/index.vue";
import PricingStyleTwo from "@/components/Modules/ExtraPages/Pricing/PricingStyleTwo.vue";
import PricingStyleThree from "@/components/Modules/ExtraPages/Pricing/PricingStyleThree.vue";

export default defineComponent({
  name: "PricingPage",
  components: {
    PageTitle,
    Pricing,
    PricingStyleTwo,
    PricingStyleThree,
  },
});
</script>
