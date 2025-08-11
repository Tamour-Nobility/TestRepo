<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Products List" subTitle="eCommerce" />

    <PagesEcommerceProductsGridProductsFilter />
    <PagesEcommerceProductsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsListPage",
});
</script>
