<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Invoice Details" subTitle="Invoices" />

    <InvoiceDetails />
  </div>
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
