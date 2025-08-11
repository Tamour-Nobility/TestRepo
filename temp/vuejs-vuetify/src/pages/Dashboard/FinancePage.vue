<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-sm-6 col-xxl-3">
        <TotalIncome />
      </div>
      <div class="col-sm-6 col-xxl-3">
        <TotalExpenses />
      </div>
      <div class="col-sm-6 col-xxl-3">
        <AccountsReceivable />
      </div>
      <div class="col-sm-6 col-xxl-3">
        <AccountPayable />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <StaticChart />
      </div>
      <div class="col-lg-4">
        <div class="row">
          <div class="col-md-6 col-lg-12">
            <CashEndOfTheMonthChart />
          </div>
          <div class="col-md-6 col-lg-12">
            <WeeklyExpensesChart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-4">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <IncomeSourceChart />
          </div>
          <div class="col-md-6 col-xxl-12">
            <NetProfitChart />
          </div>
        </div>
      </div>
      <div class="col-xxl-8">
        <TransactionHistory />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-8 col-lg-7">
        <DebitCard />
      </div>
      <div class="col-xxl-4 col-lg-5">
        <ExpenseBreakdownChart />
      </div>
    </div>

    <!-- Modal Card Add -->
    <AddCardDetailModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalIncome from "../../components/Dashboard/Finance/TotalIncome.vue";
import TotalExpenses from "../../components/Dashboard/Finance/TotalExpenses.vue";
import AccountsReceivable from "../../components/Dashboard/Finance/AccountsReceivable.vue";
import AccountPayable from "../../components/Dashboard/Finance/AccountPayable.vue";
import StaticChart from "../../components/Dashboard/Finance/StaticChart.vue";
import CashEndOfTheMonthChart from "../../components/Dashboard/Finance/CashEndOfTheMonthChart.vue";
import WeeklyExpensesChart from "../../components/Dashboard/Finance/WeeklyExpensesChart.vue";
import IncomeSourceChart from "../../components/Dashboard/Finance/IncomeSourceChart.vue";
import NetProfitChart from "../../components/Dashboard/Finance/NetProfitChart.vue";
import TransactionHistory from "../../components/Dashboard/Finance/TransactionHistory.vue";
import DebitCard from "../../components/Dashboard/Finance/DebitCard.vue";
import ExpenseBreakdownChart from "../../components/Dashboard/Finance/ExpenseBreakdownChart.vue";
import AddCardDetailModal from "../../components/Dashboard/Finance/AddCardDetailModal.vue";

export default defineComponent({
  name: "FinancePage",
  components: {
    TotalIncome,
    TotalExpenses,
    AccountsReceivable,
    AccountPayable,
    StaticChart,
    CashEndOfTheMonthChart,
    WeeklyExpensesChart,
    IncomeSourceChart,
    NetProfitChart,
    TransactionHistory,
    DebitCard,
    ExpenseBreakdownChart,
    AddCardDetailModal,
  },
});
</script>
