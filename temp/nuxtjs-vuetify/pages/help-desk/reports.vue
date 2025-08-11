<template>
  <CommonPageTitle pageTitle="Reports" subTitle="HelpDesk" />
  <v-row>
    <v-col cols="12" lg="4">
      <PagesHelpDeskReportsNewAndSolvedTicketsChart />
      <PagesHelpDeskReportsSupportOverviewChart />
    </v-col>
    <v-col cols="12" lg="8">
      <PagesHelpDeskReportsTicketsStatusChart />

      <v-row>
        <v-col cols="12" lg="6">
          <PagesHelpDeskReportsCustomerSatisfactionChart />
        </v-col>
        <v-col cols="12" lg="6">
          <PagesHelpDeskReportsResponseTimeChart />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <PagesHelpDeskReportsPerformanceOfAgents />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReportsPage",
});
</script>
