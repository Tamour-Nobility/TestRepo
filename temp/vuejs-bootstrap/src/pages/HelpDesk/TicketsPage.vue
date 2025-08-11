<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Tickets" subTitle="HelpDesk" />

    <Tickets />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Tickets from "@/components/Pages/HelpDesk/Tickets/index.vue";

export default defineComponent({
  name: "TicketsPage",
  components: {
    PageTitle,
    Tickets,
  },
});
</script>
