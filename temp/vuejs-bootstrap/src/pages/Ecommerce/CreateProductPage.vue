<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Create Product" subTitle="eCommerce" />

    <CreateProduct />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateProduct from "@/components/Pages/Ecommerce/CreateProduct/index.vue";

export default defineComponent({
  name: "CreateProductPage",
  components: {
    PageTitle,
    CreateProduct,
  },
});
</script>
