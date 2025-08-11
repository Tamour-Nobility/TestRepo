<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Events List" subTitle="Events" />

    <EventsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import EventsList from "@/components/Pages/Events/EventsList/index.vue";

export default defineComponent({
  name: "EventsPage",
  components: {
    PageTitle,
    EventsList,
  },
});
</script>
