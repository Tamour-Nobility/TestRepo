<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-6">
        <PagesHelpDeskTicketsResolvedChart />
      </div>
      <div class="col-lg-3 col-md-6">
        <PagesHelpDeskTicketsInProgressChart />
      </div>
      <div class="col-lg-3 col-md-6">
        <PagesHelpDeskTicketsDueChart />
      </div>
      <div class="col-lg-3 col-md-6">
        <PagesHelpDeskTicketsNewOpenChart />
      </div>
    </div>

    <PagesHelpDeskTicketsAllTickets />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tickets",
});
</script>
