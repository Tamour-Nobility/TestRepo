<template>
  <div class="main-content-container overflow-hidden">
    <div class="border-0 p-4 pb-0 bg-white rounded-3 mb-4 without-card">
      <CryptocurrencyWatchList />

      <div class="row">
        <div class="col-lg-8">
          <MarketPriceStatisticsChart />
        </div>
        <div class="col-lg-4">
          <ExchangeCoin />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-md-6">
        <TransactionHistory />
      </div>
      <div class="col-lg-5 col-md-6">
        <Portfolio />
      </div>
    </div>
    <CryptoRankings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CryptocurrencyWatchList from "../../components/Dashboard/Crypto/CryptocurrencyWatchList.vue";
import MarketPriceStatisticsChart from "../../components/Dashboard/Crypto/MarketPriceStatisticsChart.vue";
import ExchangeCoin from "../../components/Dashboard/Crypto/ExchangeCoin.vue";
import TransactionHistory from "../../components/Dashboard/Crypto/TransactionHistory.vue";
import Portfolio from "../../components/Dashboard/Crypto/Portfolio.vue";
import CryptoRankings from "../../components/Dashboard/Crypto/CryptoRankings.vue";

export default defineComponent({
  name: "CryptoPage",
  components: {
    CryptocurrencyWatchList,
    MarketPriceStatisticsChart,
    ExchangeCoin,
    TransactionHistory,
    Portfolio,
    CryptoRankings,
  },
});
</script>
