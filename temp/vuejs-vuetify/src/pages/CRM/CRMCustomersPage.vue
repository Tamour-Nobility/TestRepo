<template>
  <PageTitle pageTitle="Customers" subTitle="CRM" />

  <Customers />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Customers from "@/components/Pages/CRM/Customers/index.vue";

export default defineComponent({
  name: "CRMContactsPage",
  components: {
    PageTitle,
    Customers,
  },
});
</script>
