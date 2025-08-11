<template>
  <v-row>
    <v-col cols="12" lg="8" md="12">
      <WelcomeDashboard />
      <TotalSalesChart />
    </v-col>
    <v-col cols="12" lg="4">
      <v-row class="justify-content-center">
        <v-col cols="12" lg="12" md="4">
          <TotalOrdersChart />
        </v-col>
        <v-col cols="12" lg="12" md="4">
          <TotalCustomersChart />
        </v-col>
        <v-col cols="12" lg="12" md="4">
          <TotalRevenueChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" lg="5">
      <SalesByLocations />
    </v-col>
    <v-col cols="12" lg="7">
      <TopSellingProducts />
    </v-col>
    <v-col cols="12" lg="8">
      <RecentOrders />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <OrderSummaryChart />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <RecentTransactions />
    </v-col>
    <v-col cols="12" lg="8">
      <ReturningCustomerRateChart />
    </v-col>
  </v-row>
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
