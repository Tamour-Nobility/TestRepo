<template>
  <div>
    <div class="mb-4">
      <img
        src="~/assets/images/event-details.jpg"
        class="rounded-3"
        alt="event-details"
      />
    </div>

    <div class="row">
      <div class="col-lg-7">
        <PagesEventsEventDetailsAnnualConference />
      </div>
      <div class="col-lg-5">
        <PagesEventsEventDetailsEventInfo />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <PagesEventsEventDetailsAboutThisEvent />
      </div>
      <div class="col-lg-6">
        <PagesEventsEventDetailsSpeakerTopic />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventDetails",
});
</script>
