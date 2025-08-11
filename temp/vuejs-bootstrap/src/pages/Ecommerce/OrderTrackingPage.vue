<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Order Tracking" subTitle="eCommerce" />

    <OrderTracking />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import OrderTracking from "@/components/Pages/Ecommerce/OrderTracking/index.vue";

export default defineComponent({
  name: "OrderTrackingPage",
  components: {
    PageTitle,
    OrderTracking,
  },
});
</script>
