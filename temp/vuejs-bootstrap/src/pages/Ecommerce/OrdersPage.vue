<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Orders" subTitle="eCommerce" />

    <Orders />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Orders from "@/components/Pages/Ecommerce/Orders/index.vue";

export default defineComponent({
  name: "OrdersPage",
  components: {
    PageTitle,
    Orders,
  },
});
</script>
