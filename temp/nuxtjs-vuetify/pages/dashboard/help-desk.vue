<template>
  <v-row>
    <v-col cols="12" lg="4">
      <DashboardHelpDeskCongratulations />
      <v-row>
        <v-col cols="12" lg="6">
          <DashboardHelpDeskTicketsResolvedChart />
        </v-col>
        <v-col cols="12" lg="6">
          <DashboardHelpDeskTicketsInProgressChart />
        </v-col>
        <v-col cols="12" lg="6">
          <DashboardHelpDeskTicketsDueChart />
        </v-col>
        <v-col cols="12" lg="6">
          <DashboardHelpDeskTicketsNewOpenChart />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" lg="8">
      <DashboardHelpDeskTicketsStatusChart />
      <v-row>
        <v-col cols="12" lg="6">
          <DashboardHelpDeskCustomerSatisfactionChart />
        </v-col>
        <v-col cols="12" lg="6">
          <DashboardHelpDeskResponseTimeChart />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" lg="12">
      <DashboardHelpDeskPerformanceOfAgents />
    </v-col>
    <v-col cols="12" lg="7">
      <DashboardHelpDeskNewAndSolvedTicketsChart />
    </v-col>
    <v-col cols="12" lg="5">
      <DashboardHelpDeskRecentCustomerRatings />
    </v-col>
    <v-col cols="12" lg="8">
      <DashboardHelpDeskToDoList />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardHelpDeskSupportOverviewChart />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HelpDeskPage",
};
</script>
