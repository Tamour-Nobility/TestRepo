<template>
  <PageTitle pageTitle="Categories" subTitle="eCommerce" />

  <Categories />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Categories from "@/components/Pages/Ecommerce/Categories/index.vue";

export default defineComponent({
  name: "CategoriesPage",
  components: {
    PageTitle,
    Categories,
  },
});
</script>
