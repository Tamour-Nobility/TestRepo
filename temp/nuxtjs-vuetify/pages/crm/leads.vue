<template>
  <CommonPageTitle pageTitle="Leads" subTitle="CRM" />
  <v-row>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <PagesCRMLeadsRevenueGrowth />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <PagesCRMLeadsLeadConversion />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <PagesCRMLeadsTotalOrders />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <PagesCRMLeadsAnnualProfit />
    </v-col>
  </v-row>
  <PagesCRMLeads />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeadsPage",
});
</script>
