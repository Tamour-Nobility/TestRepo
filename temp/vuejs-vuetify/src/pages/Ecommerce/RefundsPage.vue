<template>
  <PageTitle pageTitle="Refunds" subTitle="eCommerce" />

  <Refunds />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Refunds from "@/components/Pages/Ecommerce/Refunds/index.vue";

export default defineComponent({
  name: "RefundsPage",
  components: {
    PageTitle,
    Refunds,
  },
});
</script>
