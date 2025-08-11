<template>
  <PageTitle pageTitle="Invoices" subTitle="Invoices" />

  <InvoicesList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import InvoicesList from "@/components/Pages/Invoices/InvoicesList/index.vue";

export default defineComponent({
  name: "InvoicesPage",
  components: {
    PageTitle,
    InvoicesList,
  },
});
</script>
