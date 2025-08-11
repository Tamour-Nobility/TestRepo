<template>
  <PageTitle pageTitle="Create Seller" subTitle="eCommerce" />

  <CreateSeller />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateSeller from "@/components/Pages/Ecommerce/CreateSeller/index.vue";

export default defineComponent({
  name: "CreateSellerPage",
  components: {
    PageTitle,
    CreateSeller,
  },
});
</script>
