<template>
  <PageTitle pageTitle="Reports" subTitle="HelpDesk" />

  <v-row>
    <v-col cols="12" lg="4">
      <NewAndSolvedTicketsChart />
      <SupportOverviewChart />
    </v-col>
    <v-col cols="12" lg="8">
      <TicketsStatusChart />

      <v-row>
        <v-col cols="12" lg="6">
          <CustomerSatisfactionChart />
        </v-col>
        <v-col cols="12" lg="6">
          <ResponseTimeChart />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <PerformanceOfAgents />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import NewAndSolvedTicketsChart from "@/components/Pages/HelpDesk/Reports/NewAndSolvedTicketsChart.vue";
import SupportOverviewChart from "@/components/Pages/HelpDesk/Reports/SupportOverviewChart.vue";
import TicketsStatusChart from "@/components/Pages/HelpDesk/Reports/TicketsStatusChart.vue";
import CustomerSatisfactionChart from "@/components/Pages/HelpDesk/Reports/CustomerSatisfactionChart.vue";
import ResponseTimeChart from "@/components/Pages/HelpDesk/Reports/ResponseTimeChart.vue";
import PerformanceOfAgents from "@/components/Pages/HelpDesk/Reports/PerformanceOfAgents.vue";

export default defineComponent({
  name: "ReportsPage",
  components: {
    PageTitle,
    NewAndSolvedTicketsChart,
    SupportOverviewChart,
    TicketsStatusChart,
    CustomerSatisfactionChart,
    ResponseTimeChart,
    PerformanceOfAgents,
  },
});
</script>
