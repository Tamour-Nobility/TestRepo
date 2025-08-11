<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Wallet" subTitle="Finance" />

    <Wallet />
    <AddCardDetailModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Wallet from "@/components/Pages/Finance/Wallet/index.vue";
import AddCardDetailModal from "@/components/Pages/Finance/Wallet/AddCardDetailModal.vue";

export default defineComponent({
  name: "AddAgentPage",
  components: {
    PageTitle,
    Wallet,
    AddCardDetailModal,
  },
});
</script>
