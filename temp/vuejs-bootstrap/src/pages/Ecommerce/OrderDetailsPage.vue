<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Order Details" subTitle="eCommerce" />

    <OrderDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import OrderDetails from "@/components/Pages/Ecommerce/OrderDetails/index.vue";

export default defineComponent({
  name: "OrderDetailsPage",
  components: {
    PageTitle,
    OrderDetails,
  },
});
</script>
