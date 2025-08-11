<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <DashboardHelpDeskCongratulations />

        <div class="row justify-content-center">
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <DashboardHelpDeskTicketsResolvedChart />
          </div>
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <DashboardHelpDeskTicketsInProgressChart />
          </div>
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <DashboardHelpDeskTicketsDueChart />
          </div>
          <div class="col-lg-12 col-xxl-6 col-md-6 col-sm-6">
            <DashboardHelpDeskTicketsNewOpenChart />
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <DashboardHelpDeskTicketsStatusChart />
        <div class="row">
          <div class="col-lg-12 col-xxl-6">
            <DashboardHelpDeskCustomerSatisfactionChart />
          </div>
          <div class="col-lg-12 col-xxl-6">
            <DashboardHelpDeskResponseTimeChart />
          </div>
        </div>
      </div>
    </div>
    <DashboardHelpDeskPerformanceOfAgents />
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <DashboardHelpDeskNewAndSolvedTicketsChart />
      </div>
      <div class="col-lg-5">
        <DashboardHelpDeskRecentCustomerRatings />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <DashboardHelpDeskToDoList />
      </div>
      <div class="col-lg-4">
        <DashboardHelpDeskSupportOverviewChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelpDeskPage",
});
</script>
