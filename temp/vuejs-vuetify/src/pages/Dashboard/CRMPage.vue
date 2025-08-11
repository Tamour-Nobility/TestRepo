<template>
  <v-row>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <RevenueGrowthChart />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <LeadConversionChart />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <TotalOrdersChart />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <AnnualProfitChart />
    </v-col>
    <v-col cols="12" lg="8">
      <BalanceOverviewChart />
    </v-col>
    <v-col cols="12" lg="4">
      <LeadsBySourceChart />
    </v-col>
    <v-col cols="12" lg="4">
      <TopPerformers />
    </v-col>
    <v-col cols="12" lg="8">
      <RecentLeads />
    </v-col>
    <v-col cols="12" lg="8">
      <SalesReportChart />
    </v-col>
    <v-col cols="12" lg="4">
      <TopProductsBySales />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RevenueGrowthChart from "../../components/Dashboard/CRM/RevenueGrowthChart.vue";
import LeadConversionChart from "../../components/Dashboard/CRM/LeadConversionChart.vue";
import TotalOrdersChart from "../../components/Dashboard/CRM/TotalOrdersChart.vue";
import AnnualProfitChart from "../../components/Dashboard/CRM/AnnualProfitChart.vue";
import BalanceOverviewChart from "../../components/Dashboard/CRM/BalanceOverviewChart.vue";
import LeadsBySourceChart from "../../components/Dashboard/CRM/LeadsBySourceChart.vue";
import TopPerformers from "../../components/Dashboard/CRM/TopPerformers.vue";
import RecentLeads from "../../components/Dashboard/CRM/RecentLeads.vue";
import SalesReportChart from "../../components/Dashboard/CRM/SalesReportChart.vue";
import TopProductsBySales from "../../components/Dashboard/CRM/TopProductsBySales.vue";

export default defineComponent({
  name: "CRMPage",
  components: {
    RevenueGrowthChart,
    LeadConversionChart,
    TotalOrdersChart,
    AnnualProfitChart,
    BalanceOverviewChart,
    LeadsBySourceChart,
    TopPerformers,
    RecentLeads,
    SalesReportChart,
    TopProductsBySales,
  },
});
</script>
