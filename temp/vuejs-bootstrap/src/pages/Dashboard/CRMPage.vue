<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <RevenueGrowthChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <LeadConversionChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <TotalOrdersChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <AnnualProfitChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <BalanceOverviewChart />
      </div>
      <div class="col-lg-4">
        <LeadsBySourceChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-4 col-xl-5 col-lg-5">
        <TopPerformers />
      </div>
      <div class="col-xxl-8 col-xl-7 col-lg-7">
        <RecentLeads />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-8 col-xl-7 col-lg-6">
        <SalesReportChart />
      </div>

      <div class="col-xxl-4 col-xl-5 col-lg-6">
        <TopProductsBySales />
      </div>
    </div>
  </div>
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
