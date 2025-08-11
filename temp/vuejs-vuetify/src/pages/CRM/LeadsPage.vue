<template>
  <PageTitle pageTitle="Leads" subTitle="CRM" />

  <v-row>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <RevenueGrowth />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <LeadConversion />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <TotalOrders />
    </v-col>
    <v-col cols="12" xxl="3" xl="3" lg="3" sm="6">
      <AnnualProfit />
    </v-col>
  </v-row>
  <Leads />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import RevenueGrowth from "@/components/Pages/CRM/Leads/RevenueGrowth.vue";
import LeadConversion from "@/components/Pages/CRM/Leads/LeadConversion.vue";
import TotalOrders from "@/components/Pages/CRM/Leads/TotalOrders.vue";
import AnnualProfit from "@/components/Pages/CRM/Leads/AnnualProfit.vue";
import Leads from "@/components/Pages/CRM/Leads/index.vue";

export default defineComponent({
  name: "LeadsPage",
  components: {
    PageTitle,
    RevenueGrowth,
    LeadConversion,
    TotalOrders,
    AnnualProfit,
    Leads,
  },
});
</script>
