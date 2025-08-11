<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-lg-8 col-xxl-9">
        <PaymentChart />
      </div>
      <div class="col-lg-4 col-xxl-3">
        <ActiveUserChart />

        <RevenueChart />

        <ConversionChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <TopRefers />
      </div>
      <div class="col-lg-8">
        <ActiveUsersChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8">
        <LatestTransaction />
      </div>
      <div class="col-lg-4">
        <UpgradePlans />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <ActiveUsers />
      </div>
      <div class="col-lg-8">
        <ProductTradeConditionChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8">
        <GrossRevenueChart />
      </div>
      <div class="col-lg-4">
        <SalesByCountry />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaymentChart from "../../components/Dashboard/SaaS/PaymentChart.vue";
import ActiveUserChart from "../../components/Dashboard/SaaS/ActiveUserChart.vue";
import RevenueChart from "../../components/Dashboard/SaaS/RevenueChart.vue";
import ConversionChart from "../../components/Dashboard/SaaS/ConversionChart.vue";
import TopRefers from "../../components/Dashboard/SaaS/TopRefers.vue";
import ActiveUsersChart from "../../components/Dashboard/SaaS/ActiveUsersChart.vue";
import LatestTransaction from "../../components/Dashboard/SaaS/LatestTransaction.vue";
import UpgradePlans from "../../components/Dashboard/SaaS/UpgradePlans.vue";
import ActiveUsers from "../../components/Dashboard/SaaS/ActiveUsers.vue";
import ProductTradeConditionChart from "../../components/Dashboard/SaaS/ProductTradeConditionChart.vue";
import GrossRevenueChart from "../../components/Dashboard/SaaS/GrossRevenueChart.vue";
import SalesByCountry from "../../components/Dashboard/SaaS/SalesByCountry.vue";

export default defineComponent({
  name: "SaaSPage",
  components: {
    PaymentChart,
    ActiveUserChart,
    RevenueChart,
    ConversionChart,
    TopRefers,
    ActiveUsersChart,
    LatestTransaction,
    UpgradePlans,
    ActiveUsers,
    ProductTradeConditionChart,
    GrossRevenueChart,
    SalesByCountry,
  },
});
</script>
