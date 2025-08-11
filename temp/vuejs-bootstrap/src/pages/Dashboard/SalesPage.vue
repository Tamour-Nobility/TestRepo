<template>
  <div class="main-content-container overflow-hidden">
    <div class="card bg-white border-0 rounded-3 p-4 pb-0 mb-4">
      <WelcomeBack />
      <div class="row">
        <div class="col-sm-6 col-xxl-3">
          <TotalSalesChart />
        </div>
        <div class="col-sm-6 col-xxl-3">
          <TotalOrdersChart />
        </div>
        <div class="col-sm-6 col-xxl-3">
          <TotalProfitChart />
        </div>
        <div class="col-sm-6 col-xxl-3">
          <TotalRevenueChart />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <RecentEarningsChart />
        </div>
        <div class="col-lg-4">
          <SalesByLocations />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-4 col-xxl-4 col-lg-5">
        <TransactionHistory />
      </div>

      <div class="col-xl-8 col-xxl-8 col-lg-7">
        <RecentOrders />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <RealTimeSalesChart />
      </div>
      <div class="col-lg-4">
        <SalesOverviewChart />
      </div>
      <div class="col-lg-4">
        <GrossEarningsChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeBack from "../../components/Dashboard/Sales/WelcomeBack.vue";
import TotalSalesChart from "../../components/Dashboard/Sales/TotalSalesChart.vue";
import TotalOrdersChart from "../../components/Dashboard/Sales/TotalOrdersChart.vue";
import TotalProfitChart from "../../components/Dashboard/Sales/TotalProfitChart.vue";
import TotalRevenueChart from "../../components/Dashboard/Sales/TotalRevenueChart.vue";
import RecentEarningsChart from "../../components/Dashboard/Sales/RecentEarningsChart.vue";
import SalesByLocations from "../../components/Dashboard/Sales/SalesByLocations.vue";
import TransactionHistory from "../../components/Dashboard/Sales/TransactionHistory.vue";
import RecentOrders from "../../components/Dashboard/Sales/RecentOrders.vue";
import RealTimeSalesChart from "../../components/Dashboard/Sales/RealTimeSalesChart.vue";
import SalesOverviewChart from "../../components/Dashboard/Sales/SalesOverviewChart.vue";
import GrossEarningsChart from "../../components/Dashboard/Sales/GrossEarningsChart.vue";

export default defineComponent({
  name: "SalesPage",
  components: {
    WelcomeBack,
    TotalSalesChart,
    TotalOrdersChart,
    TotalProfitChart,
    TotalRevenueChart,
    RecentEarningsChart,
    SalesByLocations,
    TransactionHistory,
    RecentOrders,
    RealTimeSalesChart,
    SalesOverviewChart,
    GrossEarningsChart,
  },
});
</script>
