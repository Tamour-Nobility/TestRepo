<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Tickets" subTitle="HelpDesk" />

    <PagesHelpDeskTickets />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketsPage",
});
</script>
