<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-content">
      <!-- Cryptocurrency Watchlist -->
      <DashboardCryptoCryptocurrencyWatchlist />

      <div class="row">
        <div class="col-lg-8">
          <!-- Market Price Statistics -->
          <DashboardCryptoMarketPriceStatisticsChart />
        </div>
        <div class="col-lg-4">
          <!-- Exchange -->
          <DashboardCryptoExchangeCoin />
        </div>
      </div>
    </div>
  </v-card>

  <div class="row">
    <div class="col-lg-7">
      <!-- Transactions History -->
      <DashboardCryptoTransactionHistory />
    </div>
    <div class="col-lg-5">
      <!-- Portfolio -->
      <DashboardCryptoPortfolio />
    </div>
  </div>

  <!-- Crypto Rankings -->
  <DashboardCryptoRankings />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoPage",
});
</script>
