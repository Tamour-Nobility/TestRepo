<template>
  <CommonPageTitle pageTitle="Sellers" subTitle="eCommerce" />
  <PagesEcommerceSellers />
  <CommonPagination
    items="12"
    class="pagination-content border-radius d-block bg-white border-0 shadow-none"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SellersPage",
});
</script>
