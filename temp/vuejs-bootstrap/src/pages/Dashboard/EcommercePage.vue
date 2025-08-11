<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <WelcomeDashboard />
        <TotalSalesChart />
      </div>
      <div class="col-lg-4">
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-12">
            <TotalOrdersChart />
          </div>
          <div class="col-md-4 col-lg-12">
            <TotalCustomersChart />
          </div>
          <div class="col-md-4 col-lg-12">
            <TotalRevenueChart />
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-5">
        <SalesByLocations />
      </div>
      <div class="col-lg-7">
        <TopSellingProducts />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-7 col-xxl-8 col-lg-7">
        <RecentOrders />
      </div>
      <div class="col-xl-5 col-xxl-4 col-lg-5">
        <OrderSummaryChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-5 col-xxl-4 col-lg-5">
        <RecentTransactions />
      </div>

      <div class="col-xl-7 col-xxl-8 col-lg-7">
        <ReturningCustomerRateChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import WelcomeDashboard from "../../components/Dashboard/Ecommerce/WelcomeDashboard.vue";
import TotalSalesChart from "../../components/Dashboard/Ecommerce/TotalSalesChart.vue";
import TotalOrdersChart from "../../components/Dashboard/Ecommerce/TotalOrdersChart.vue";
import TotalCustomersChart from "../../components/Dashboard/Ecommerce/TotalCustomersChart.vue";
import TotalRevenueChart from "../../components/Dashboard/Ecommerce/TotalRevenueChart.vue";
import SalesByLocations from "../../components/Dashboard/Ecommerce/SalesByLocations.vue";
import TopSellingProducts from "../../components/Dashboard/Ecommerce/TopSellingProducts.vue";
import RecentOrders from "../../components/Dashboard/Ecommerce/RecentOrders.vue";
import OrderSummaryChart from "../../components/Dashboard/Ecommerce/OrderSummaryChart.vue";
import RecentTransactions from "../../components/Dashboard/Ecommerce/RecentTransactions.vue";
import ReturningCustomerRateChart from "../../components/Dashboard/Ecommerce/ReturningCustomerRateChart.vue";

export default defineComponent({
  name: "EcommercePage",
  components: {
    WelcomeDashboard,
    TotalSalesChart,
    TotalOrdersChart,
    TotalCustomersChart,
    TotalRevenueChart,
    SalesByLocations,
    TopSellingProducts,
    RecentOrders,
    OrderSummaryChart,
    RecentTransactions,
    ReturningCustomerRateChart,
  },
});
</script>
