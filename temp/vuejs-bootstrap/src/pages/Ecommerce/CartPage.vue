<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Cart" subTitle="eCommerce" />

    <Cart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Cart from "@/components/Pages/Ecommerce/Cart/index.vue";

export default defineComponent({
  name: "CartPage",
  components: {
    PageTitle,
    Cart,
  },
});
</script>
