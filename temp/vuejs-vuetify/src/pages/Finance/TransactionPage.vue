<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Transaction" subTitle="Finance" />

    <Transaction />
    <AddNewTransactionModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Transaction from "@/components/Pages/Finance/Transaction/index.vue";
import AddNewTransactionModal from "@/components/Pages/Finance/Transaction/AddNewTransactionModal.vue";

export default defineComponent({
  name: "TransactionPage",
  components: {
    PageTitle,
    Transaction,
    AddNewTransactionModal,
  },
});
</script>
