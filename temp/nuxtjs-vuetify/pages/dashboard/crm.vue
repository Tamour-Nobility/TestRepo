<template>
  <v-row>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <DashboardCRMRevenueGrowth />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <DashboardCRMLeadConversion />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <DashboardCRMTotalOrders />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <DashboardCRMAnnualProfit />
    </v-col>
    <v-col cols="12" lg="8">
      <DashboardCRMBalanceOverviewChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardCRMLeadsBySourceChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardCRMTopPerformers />
    </v-col>
    <v-col cols="12" lg="8">
      <DashboardCRMRecentLeads />
    </v-col>
    <v-col cols="12" lg="8">
      <DashboardCRMSalesReportChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardCRMTopProductsBySales />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CRMPage",
});
</script>
