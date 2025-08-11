<template>
  <PageTitle pageTitle="Events Grid" subTitle="Events" />

  <EventsGrid />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import EventsGrid from "@/components/Pages/Events/EventsGrid/index.vue";

export default defineComponent({
  name: "EventsPage",
  components: {
    PageTitle,
    EventsGrid,
  },
});
</script>
