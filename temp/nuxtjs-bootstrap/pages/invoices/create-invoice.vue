<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Create Invoice" subTitle="Invoices" />

    <PagesInvoicesCreateInvoice />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateInvoicePage",
});
</script>
