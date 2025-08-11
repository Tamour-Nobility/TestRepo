<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Products List" subTitle="eCommerce" />

    <ProductsFilter />
    <ProductsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ProductsFilter from "@/components/Pages/Ecommerce/ProductsGrid/ProductsFilter.vue";
import ProductsList from "@/components/Pages/Ecommerce/ProductsList/index.vue";

export default defineComponent({
  name: "ProductsListPage",
  components: {
    PageTitle,
    ProductsFilter,
    ProductsList,
  },
});
</script>
