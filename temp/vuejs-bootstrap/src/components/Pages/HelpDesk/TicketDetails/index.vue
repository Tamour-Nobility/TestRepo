<template>
  <div>
    <Ticket />

    <div class="row">
      <div class="col-xxl-8 col-lg-7">
        <TicketDescription />

        <Comments />
      </div>
      <div class="col-xxl-4 col-lg-5">
        <Attachments />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ticket from "./Ticket.vue";
import TicketDescription from "./TicketDescription.vue";
import Comments from "./Comments.vue";
import Attachments from "./Attachments.vue";

export default defineComponent({
  name: "TicketDetails",
  components: {
    Ticket,
    TicketDescription,
    Comments,
    Attachments,
  },
});
</script>
