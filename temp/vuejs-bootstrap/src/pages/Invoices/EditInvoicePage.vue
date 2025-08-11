<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Edit Invoice" subTitle="Invoices" />

    <EditInvoice />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import EditInvoice from "@/components/Pages/Invoices/EditInvoice/index.vue";

export default defineComponent({
  name: "EditInvoicePage",
  components: {
    PageTitle,
    EditInvoice,
  },
});
</script>
