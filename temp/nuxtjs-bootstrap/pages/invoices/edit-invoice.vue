<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Edit Invoice" subTitle="Invoices" />

    <PagesInvoicesEditInvoice />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditInvoicePage",
});
</script>
