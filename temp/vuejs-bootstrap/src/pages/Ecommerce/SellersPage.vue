<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Sellers" subTitle="eCommerce" />

    <Sellers />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Sellers from "@/components/Pages/Ecommerce/Sellers/index.vue";

export default defineComponent({
  name: "CategoriesPage",
  components: {
    PageTitle,
    Sellers,
  },
});
</script>
