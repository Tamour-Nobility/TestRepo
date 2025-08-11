<template>
  <CommonPageTitle pageTitle="Tickets" subTitle="HelpDesk" />
  <v-row>
    <v-col cols="12" lg="3" sm="6">
      <PagesHelpDeskTicketsResolvedChart />
    </v-col>
    <v-col cols="12" lg="3" sm="6">
      <PagesHelpDeskTicketsInProgressChart />
    </v-col>
    <v-col cols="12" lg="3" sm="6">
      <PagesHelpDeskTicketsDueChart />
    </v-col>
    <v-col cols="12" lg="3" sm="6">
      <PagesHelpDeskTicketsNewOpenChart />
    </v-col>
  </v-row>
  <PagesHelpDeskTicketsAllTickets />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketsPage",
});
</script>
