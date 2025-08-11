<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Invoices" subTitle="Invoices" />

    <InvoicesList />
  </div>
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
