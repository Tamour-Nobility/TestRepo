<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Product Details" subTitle="eCommerce" />

    <ProductsFilter />
    <ProductsDetails />
    <ProductsDetailsTabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ProductsFilter from "@/components/Pages/Ecommerce/ProductsDetails/ProductsFilter.vue";
import ProductsDetails from "@/components/Pages/Ecommerce/ProductsDetails/index.vue";
import ProductsDetailsTabs from "@/components/Pages/Ecommerce/ProductsDetails/ProductsDetailsTabs.vue";

export default defineComponent({
  name: "ProductDetailsPage",
  components: {
    PageTitle,
    ProductsFilter,
    ProductsDetails,
    ProductsDetailsTabs,
  },
});
</script>
