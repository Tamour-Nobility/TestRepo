<template>
  <PageTitle pageTitle="Invoice Details" subTitle="Invoices" />

  <InvoiceDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import InvoiceDetails from "@/components/Pages/Invoices/InvoiceDetails/index.vue";

export default defineComponent({
  name: "InvoiceDetailsPage",
  components: {
    PageTitle,
    InvoiceDetails,
  },
});
</script>
