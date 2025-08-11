<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Product Details" subTitle="eCommerce" />

    <PagesEcommerceProductsDetailsProductsFilter />
    <PagesEcommerceProductsDetails />
    <PagesEcommerceProductsDetailsTabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductDetailsPage",
});
</script>
