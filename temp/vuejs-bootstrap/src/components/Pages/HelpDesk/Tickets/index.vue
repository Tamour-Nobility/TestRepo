<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-6">
        <TicketsResolvedChart />
      </div>
      <div class="col-lg-3 col-md-6">
        <TicketsInProgressChart />
      </div>
      <div class="col-lg-3 col-md-6">
        <TicketsDueChart />
      </div>
      <div class="col-lg-3 col-md-6">
        <TicketsNewOpenChart />
      </div>
    </div>

    <AllTickets />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicketsResolvedChart from "./TicketsResolvedChart.vue";
import TicketsInProgressChart from "./TicketsInProgressChart.vue";
import TicketsDueChart from "./TicketsDueChart.vue";
import TicketsNewOpenChart from "./TicketsNewOpenChart.vue";
import AllTickets from "./AllTickets.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tickets",
  components: {
    TicketsResolvedChart,
    TicketsInProgressChart,
    TicketsDueChart,
    TicketsNewOpenChart,
    AllTickets,
  },
});
</script>
