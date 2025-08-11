<template>
  <PageTitle pageTitle="Order Details" subTitle="eCommerce" />

  <OrderDetails />
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
