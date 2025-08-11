<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Ticket Details" subTitle="HelpDesk" />

    <PagesHelpDeskTicketDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketDetailsPage",
});
</script>
