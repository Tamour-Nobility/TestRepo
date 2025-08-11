<template>
  <CommonPageTitle pageTitle="Ticket Details" subTitle="HelpDesk" />
  <PagesHelpDeskTicketDetailsTicket />
  <v-row>
    <v-col cols="12" lg="8">
      <PagesHelpDeskTicketDetails />
      <PagesHelpDeskTicketDetailsComments />
    </v-col>
    <v-col cols="12" lg="4">
      <PagesHelpDeskTicketDetailsAttachments />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketDetailsPage",
});
</script>
