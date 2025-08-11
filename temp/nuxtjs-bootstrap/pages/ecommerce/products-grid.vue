<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Products Grid" subTitle="eCommerce" />

    <PagesEcommerceProductsGridProductsFilter />
    <PagesEcommerceProductsGrid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsGridPage",
});
</script>
