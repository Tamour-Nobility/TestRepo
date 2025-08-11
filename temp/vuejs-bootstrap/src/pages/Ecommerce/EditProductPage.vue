<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Edit Product" subTitle="eCommerce" />

    <EditProduct />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import EditProduct from "@/components/Pages/Ecommerce/EditProduct/index.vue";

export default defineComponent({
  name: "EditProductPage",
  components: {
    PageTitle,
    EditProduct,
  },
});
</script>
