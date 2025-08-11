<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Invoice Details" subTitle="Invoices" />

    <PagesInvoicesInvoiceDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvoiceDetailsPage",
});
</script>
