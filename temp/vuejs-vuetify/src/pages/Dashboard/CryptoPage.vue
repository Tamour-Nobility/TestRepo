<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-content">
      <CryptocurrencyWatchlist />

      <div class="row">
        <div class="col-lg-8">
          <MarketPriceStatisticsChart />
        </div>
        <div class="col-lg-4">
          <ExchangeCoin />
        </div>
      </div>
    </div>
  </v-card>

  <div class="row">
    <div class="col-lg-7">
      <TransactionHistory />
    </div>
    <div class="col-lg-5">
      <Portfolio />
    </div>
  </div>

  <CryptoRankings />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CryptocurrencyWatchlist from "../../components/Dashboard/Crypto/CryptocurrencyWatchlist.vue";
import MarketPriceStatisticsChart from "../../components/Dashboard/Crypto/MarketPriceStatisticsChart.vue";
import ExchangeCoin from "../../components/Dashboard/Crypto/ExchangeCoin.vue";
import TransactionHistory from "../../components/Dashboard/Crypto/TransactionHistory.vue";
import Portfolio from "../../components/Dashboard/Crypto/Portfolio.vue";
import CryptoRankings from "../../components/Dashboard/Crypto/CryptoRankings.vue";

export default defineComponent({
  name: "CryptoPage",
  components: {
    CryptocurrencyWatchlist,
    MarketPriceStatisticsChart,
    ExchangeCoin,
    TransactionHistory,
    Portfolio,
    CryptoRankings,
  },
});
</script>
