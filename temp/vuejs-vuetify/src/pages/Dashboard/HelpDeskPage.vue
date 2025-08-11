<template>
  <v-row>
    <v-col cols="12" lg="4">
      <Congratulations />
      <v-row>
        <v-col cols="12" lg="6">
          <TicketsResolvedChart />
        </v-col>
        <v-col cols="12" lg="6">
          <TicketsInProgressChart />
        </v-col>
        <v-col cols="12" lg="6">
          <TicketsDueChart />
        </v-col>
        <v-col cols="12" lg="6">
          <TicketsNewOpenChart />
        </v-col>
      </v-row>
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

    <v-col cols="12" lg="12">
      <PerformanceOfAgents />
    </v-col>
    <v-col cols="12" lg="7">
      <NewAndSolvedTicketsChart />
    </v-col>
    <v-col cols="12" lg="5">
      <RecentCustomerRatings />
    </v-col>
    <v-col cols="12" lg="8">
      <ToDoList />
    </v-col>
    <v-col cols="12" lg="4">
      <SupportOverviewChart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Congratulations from "../../components/Dashboard/HelpDesk/Congratulations.vue";
import TicketsResolvedChart from "../../components/Dashboard/HelpDesk/TicketsResolvedChart.vue";
import TicketsInProgressChart from "../../components/Dashboard/HelpDesk/TicketsInProgressChart.vue";
import TicketsDueChart from "../../components/Dashboard/HelpDesk/TicketsDueChart.vue";
import TicketsNewOpenChart from "../../components/Dashboard/HelpDesk/TicketsNewOpenChart.vue";
import TicketsStatusChart from "../../components/Dashboard/HelpDesk/TicketsStatusChart.vue";
import CustomerSatisfactionChart from "../../components/Dashboard/HelpDesk/CustomerSatisfactionChart.vue";
import ResponseTimeChart from "../../components/Dashboard/HelpDesk/ResponseTimeChart.vue";
import PerformanceOfAgents from "../../components/Dashboard/HelpDesk/PerformanceOfAgents.vue";
import NewAndSolvedTicketsChart from "../../components/Dashboard/HelpDesk/NewAndSolvedTicketsChart.vue";
import RecentCustomerRatings from "../../components/Dashboard/HelpDesk/RecentCustomerRatings.vue";
import ToDoList from "../../components/Dashboard/HelpDesk/ToDoList.vue";
import SupportOverviewChart from "../../components/Dashboard/HelpDesk/SupportOverviewChart.vue";

export default defineComponent({
  name: "HelpDeskPage",
  components: {
    Congratulations,
    TicketsResolvedChart,
    TicketsInProgressChart,
    TicketsDueChart,
    TicketsNewOpenChart,
    TicketsStatusChart,
    CustomerSatisfactionChart,
    ResponseTimeChart,
    PerformanceOfAgents,
    NewAndSolvedTicketsChart,
    RecentCustomerRatings,
    ToDoList,
    SupportOverviewChart,
  },
});
</script>
