<template>
  <PageTitle pageTitle="Product Details" subTitle="eCommerce" />

  <ProductsDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ProductsDetails from "@/components/Pages/Ecommerce/ProductsDetails/index.vue";

export default defineComponent({
  name: "ProductDetailsPage",
  components: {
    PageTitle,
    ProductsDetails,
  },
});
</script>
