<template>
  <div class="main-content-container overflow-hidden">
    <div class="card bg-white border-0 rounded-3 p-4 pb-0 mb-4">
      <DashboardSalesWelcomeBack />
      <div class="row">
        <div class="col-sm-6 col-xxl-3">
          <DashboardSalesTotalSalesChart />
        </div>
        <div class="col-sm-6 col-xxl-3">
          <DashboardSalesTotalOrdersChart />
        </div>
        <div class="col-sm-6 col-xxl-3">
          <DashboardSalesTotalProfitChart />
        </div>
        <div class="col-sm-6 col-xxl-3">
          <DashboardSalesTotalRevenueChart />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <DashboardSalesRecentEarningsChart />
        </div>
        <div class="col-lg-4">
          <DashboardSalesByLocations />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-4 col-xxl-4 col-lg-5">
        <DashboardSalesTransactionHistory />
      </div>

      <div class="col-xl-8 col-xxl-8 col-lg-7">
        <DashboardSalesRecentOrders />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <DashboardSalesRealTimeSalesChart />
      </div>
      <div class="col-lg-4">
        <DashboardSalesOverviewChart />
      </div>
      <div class="col-lg-4">
        <DashboardSalesGrossEarningsChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SalesPage",
});
</script>
