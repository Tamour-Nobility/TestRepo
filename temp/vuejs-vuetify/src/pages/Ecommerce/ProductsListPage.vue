<template>
  <PageTitle pageTitle="Products List" subTitle="eCommerce" />

  <ProductsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ProductsList from "@/components/Pages/Ecommerce/ProductsList/index.vue";

export default defineComponent({
  name: "ProductsListPage",
  components: {
    PageTitle,
    ProductsList,
  },
});
</script>
