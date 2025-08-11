<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Event Details" subTitle="Events" />

    <PagesEventsEventDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventDetailsPage",
});
</script>
