<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="row">
        <div class="col-lg-12 col-sm-2 col-md-4">
          <div style="margin-bottom: 61px">
            <span class="d-block mb-1">Accounts Receivable</span>
            <h4 class="fs-20 mb-0">$15,990</h4>
          </div>
        </div>
        <div class="col-lg-12 col-sm-5 col-md-4">
          <TotalIncome />
        </div>
        <div class="col-lg-12 col-sm-5 col-md-4">
          <TotalExpenses />
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <StaticChart />
    </div>
  </div>

  <div class="row">
    <div class="col-xxl-8">
      <TransactionHistory />
    </div>
    <div class="col-xxl-4">
      <DebitCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalIncome from "./TotalIncome.vue";
import TotalExpenses from "./TotalExpenses.vue";
import StaticChart from "./StaticChart.vue";
import TransactionHistory from "./TransactionHistory.vue";
import DebitCard from "./DebitCard.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Wallet",
  components: {
    TotalIncome,
    TotalExpenses,
    StaticChart,
    TransactionHistory,
    DebitCard,
  },
});
</script>
