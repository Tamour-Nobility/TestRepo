<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Invoices" subTitle="Invoices" />

    <PagesInvoicesInvoicesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvoicesPage",
});
</script>
