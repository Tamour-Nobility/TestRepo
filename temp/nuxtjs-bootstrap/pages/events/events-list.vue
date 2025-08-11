<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Events List" subTitle="Events" />

    <PagesEventsEventsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventsListPage",
});
</script>
