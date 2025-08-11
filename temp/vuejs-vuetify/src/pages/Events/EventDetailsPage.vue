<template>
  <PageTitle pageTitle="Event Details" subTitle="Events" />

  <EventDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import EventDetails from "@/components/Pages/Events/EventDetails/index.vue";

export default defineComponent({
  name: "EventDetailsPage",
  components: {
    PageTitle,
    EventDetails,
  },
});
</script>
