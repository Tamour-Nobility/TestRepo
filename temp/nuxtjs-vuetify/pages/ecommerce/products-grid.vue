<template>
  <CommonPageTitle pageTitle="Products Grid" subTitle="eCommerce" />
  <PagesEcommerceProductsGridProductsFilter />
  <PagesEcommerceProductsGrid />
  <CommonPagination
    class="pagination-content border-radius d-block bg-white border-0 shadow-none"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsGridPage",
});
</script>
