<template>
  <PageTitle pageTitle="Deals" subTitle="CRM" />

  <Deals />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Deals from "@/components/Pages/CRM/Deals/index.vue";

export default defineComponent({
  name: "DealsPage",
  components: {
    PageTitle,
    Deals,
  },
});
</script>
