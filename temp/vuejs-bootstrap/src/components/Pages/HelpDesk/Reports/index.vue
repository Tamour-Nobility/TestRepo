<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <NewAndSolvedTicketsChart />
      </div>
      <div class="col-lg-8">
        <TicketsStatusChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <TasksOverviewChart />
      </div>
      <div class="col-lg-4">
        <CustomerSatisfactionChart />
      </div>
      <div class="col-lg-4">
        <ResponseTimeChart />
      </div>
    </div>

    <PerformanceOfAgents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewAndSolvedTicketsChart from "./NewAndSolvedTicketsChart.vue";
import TicketsStatusChart from "./TicketsStatusChart.vue";
import TasksOverviewChart from "./TasksOverviewChart.vue";
import CustomerSatisfactionChart from "./CustomerSatisfactionChart.vue";
import ResponseTimeChart from "./ResponseTimeChart.vue";
import PerformanceOfAgents from "./PerformanceOfAgents.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reports",
  components: {
    NewAndSolvedTicketsChart,
    TicketsStatusChart,
    TasksOverviewChart,
    CustomerSatisfactionChart,
    ResponseTimeChart,
    PerformanceOfAgents,
  },
});
</script>
