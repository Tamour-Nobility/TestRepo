<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Create Order" subTitle="eCommerce" />

    <CreateOrder />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateOrder from "@/components/Pages/Ecommerce/CreateOrder/index.vue";

export default defineComponent({
  name: "CreateOrderPage",
  components: {
    PageTitle,
    CreateOrder,
  },
});
</script>
