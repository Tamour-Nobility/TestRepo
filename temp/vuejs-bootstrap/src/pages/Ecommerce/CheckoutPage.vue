<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Checkout" subTitle="eCommerce" />

    <Checkout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Checkout from "@/components/Pages/Ecommerce/Checkout/index.vue";

export default defineComponent({
  name: "CheckoutPage",
  components: {
    PageTitle,
    Checkout,
  },
});
</script>
