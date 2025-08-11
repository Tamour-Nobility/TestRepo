<template>
  <div class="main-content-container overflow-hidden">
    <div class="border-0 p-4 pb-0 bg-white rounded-3 mb-4 without-card">
      <DashboardCryptoCryptocurrencyWatchList />

      <div class="row">
        <div class="col-lg-8">
          <DashboardCryptoMarketPriceStatisticsChart />
        </div>
        <div class="col-lg-4">
          <DashboardCryptoExchangeCoin />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-md-6">
        <DashboardCryptoTransactionHistory />
      </div>
      <div class="col-lg-5 col-md-6">
        <DashboardCryptoPortfolio />
      </div>
    </div>
    <DashboardCryptoRankings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoPage",
});
</script>
