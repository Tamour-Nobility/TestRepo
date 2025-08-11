<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Seller Details" subTitle="eCommerce" />

    <SellerDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import SellerDetails from "@/components/Pages/Ecommerce/SellerDetails/index.vue";

export default defineComponent({
  name: "SellerDetailsPage",
  components: {
    PageTitle,
    SellerDetails,
  },
});
</script>
