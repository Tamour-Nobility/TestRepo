<template>
  <div>
    <div class="mb-4">
      <img
        src="@/assets/images/event-details.jpg"
        class="rounded-3"
        alt="event-details"
      />
    </div>

    <div class="row">
      <div class="col-lg-7">
        <AnnualConference />
      </div>
      <div class="col-lg-5">
        <EventInfo />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <AboutThisEvent />
      </div>
      <div class="col-lg-6">
        <SpeakerTopic />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnnualConference from "./AnnualConference.vue";
import EventInfo from "./EventInfo.vue";
import AboutThisEvent from "./AboutThisEvent.vue";
import SpeakerTopic from "./SpeakerTopic.vue";

export default defineComponent({
  name: "EventDetails",
  components: {
    AnnualConference,
    EventInfo,
    AboutThisEvent,
    SpeakerTopic,
  },
});
</script>
