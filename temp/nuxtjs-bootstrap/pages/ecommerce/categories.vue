<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Categories" subTitle="eCommerce" />

    <PagesEcommerceCategories />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesPage",
});
</script>
