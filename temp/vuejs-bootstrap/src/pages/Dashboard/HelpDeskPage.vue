<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <Congratulations />

        <div class="row justify-content-center">
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <TicketsResolvedChart />
          </div>
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <TicketsInProgressChart />
          </div>
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <TicketsDueChart />
          </div>
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <TicketsNewOpenChart />
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <TicketsStatusChart />
        <div class="row">
          <div class="col-lg-12 col-xxl-6">
            <CustomerSatisfactionChart />
          </div>
          <div class="col-lg-12 col-xxl-6">
            <ResponseTimeChart />
          </div>
        </div>
      </div>
    </div>
    <PerformanceOfAgents />
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <NewAndSolvedTicketsChart />
      </div>
      <div class="col-lg-5">
        <RecentCustomerRatings />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <ToDoList />
      </div>
      <div class="col-lg-4">
        <SupportOverviewChart />
      </div>
    </div>
  </div>
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
