<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Customers" subTitle="CRM" />

    <PagesCRMCustomers />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomersPage",
});
</script>
