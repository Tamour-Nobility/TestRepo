<template>
  <div>
    <PagesHelpDeskTicketDetailsTicket />

    <div class="row">
      <div class="col-xxl-8 col-lg-7">
        <PagesHelpDeskTicketDetailsTicketDescription />

        <PagesHelpDeskTicketDetailsComments />
      </div>
      <div class="col-xxl-4 col-lg-5">
        <PagesHelpDeskTicketDetailsAttachments />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketDetails",
});
</script>
