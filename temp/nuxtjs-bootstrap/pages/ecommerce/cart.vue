<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Cart" subTitle="eCommerce" />

    <PagesEcommerceCart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartPage",
});
</script>
