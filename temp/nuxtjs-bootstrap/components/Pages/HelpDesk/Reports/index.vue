<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <PagesHelpDeskReportsNewAndSolvedTicketsChart />
      </div>
      <div class="col-lg-8">
        <PagesHelpDeskReportsTicketsStatusChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <PagesHelpDeskReportsTasksOverviewChart />
      </div>
      <div class="col-lg-4">
        <PagesHelpDeskReportsCustomerSatisfactionChart />
      </div>
      <div class="col-lg-4">
        <PagesHelpDeskReportsResponseTimeChart />
      </div>
    </div>

    <PagesHelpDeskReportsPerformanceOfAgents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Reports",
});
</script>
