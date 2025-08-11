<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMRevenueGrowthChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMLeadConversionChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMTotalOrdersChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMAnnualProfitChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <DashboardCRMBalanceOverviewChart />
      </div>
      <div class="col-lg-4">
        <DashboardCRMLeadsBySourceChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-4 col-xl-5 col-lg-5">
        <DashboardCRMTopPerformers />
      </div>
      <div class="col-xxl-8 col-xl-7 col-lg-7">
        <DashboardCRMRecentLeads />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-8 col-xl-7 col-lg-6">
        <DashboardCRMSalesReportChart />
      </div>

      <div class="col-xxl-4 col-xl-5 col-lg-6">
        <DashboardCRMTopProductsBySales />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CRMPage",
});
</script>
