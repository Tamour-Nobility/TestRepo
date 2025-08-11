<template>
  <PageTitle pageTitle="Ticket Details" subTitle="HelpDesk" />

  <Ticket />
  <v-row>
    <v-col cols="12" lg="8">
      <TicketDetails />
      <Comments />
    </v-col>
    <v-col cols="12" lg="4">
      <Attachments />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Ticket from "@/components/Pages/HelpDesk/TicketDetails/Ticket.vue";
import TicketDetails from "@/components/Pages/HelpDesk/TicketDetails/TicketDetails.vue";
import Comments from "@/components/Pages/HelpDesk/TicketDetails/Comments.vue";
import Attachments from "@/components/Pages/HelpDesk/TicketDetails/Attachments.vue";

export default defineComponent({
  name: "TicketDetailsPage",
  components: {
    PageTitle,
    Ticket,
    TicketDetails,
    Comments,
    Attachments,
  },
});
</script>
