<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Orders" subTitle="eCommerce" />

    <PagesEcommerceOrders />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrdersPage",
});
</script>
