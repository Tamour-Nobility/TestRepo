<template>
  <PageTitle pageTitle="Tickets" subTitle="HelpDesk" />
  <v-row>
    <v-col cols="12" lg="3" sm="6">
      <ResolvedChart />
    </v-col>
    <v-col cols="12" lg="3" sm="6">
      <InProgressChart />
    </v-col>
    <v-col cols="12" lg="3" sm="6">
      <DueChart />
    </v-col>
    <v-col cols="12" lg="3" sm="6">
      <NewOpenChart />
    </v-col>
  </v-row>
  <AllTickets />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ResolvedChart from "@/components/Pages/HelpDesk/Tickets/TicketsResolvedChart.vue";
import InProgressChart from "@/components/Pages/HelpDesk/Tickets/TicketsInProgressChart.vue";
import DueChart from "@/components/Pages/HelpDesk/Tickets/TicketsDueChart.vue";
import NewOpenChart from "@/components/Pages/HelpDesk/Tickets/TicketsNewOpenChart.vue";
import AllTickets from "@/components/Pages/HelpDesk/Tickets/AllTickets.vue";

export default defineComponent({
  name: "TicketsPage",
  components: {
    PageTitle,
    ResolvedChart,
    InProgressChart,
    DueChart,
    NewOpenChart,
    AllTickets,
  },
});
</script>
