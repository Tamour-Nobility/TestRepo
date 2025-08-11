<template>
  <v-card
    class="trezo-card pb-0 mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <DashboardSalesStats />

    <div class="row">
      <div class="col-lg-8">
        <DashboardSalesRecentEarningsChart />
      </div>
      <div class="col-lg-4">
        <DashboardSalesByLocations />
      </div>
    </div>
  </v-card>

  <div class="row">
    <div class="col-lg-4">
      <DashboardSalesTransactionHistory />
    </div>
    <div class="col-lg-8">
      <DashboardSalesRecentOrders />
    </div>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SalesPage",
});
</script>
