<template>
  <v-card
    class="trezo-card pb-0 mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <Stats />

    <div class="row">
      <div class="col-lg-8">
        <RecentEarningsChart />
      </div>
      <div class="col-lg-4">
        <SalesByLocations />
      </div>
    </div>
  </v-card>

  <div class="row">
    <div class="col-lg-4">
      <TransactionHistory />
    </div>
    <div class="col-lg-8">
      <RecentOrders />
    </div>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stats from "../../components/Dashboard/Sales/Stats.vue";
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
    Stats,
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
