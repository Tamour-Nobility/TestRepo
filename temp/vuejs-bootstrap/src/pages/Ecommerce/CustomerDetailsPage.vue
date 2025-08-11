<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Customer Details" subTitle="eCommerce" />

    <CustomerDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CustomerDetails from "@/components/Pages/Ecommerce/CustomerDetails/index.vue";

export default defineComponent({
  name: "CustomerDetailsPage",
  components: {
    PageTitle,
    CustomerDetails,
  },
});
</script>
