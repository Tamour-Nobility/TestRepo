<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Order Details" subTitle="eCommerce" />

    <PagesEcommerceOrderDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderDetailsPage",
});
</script>
