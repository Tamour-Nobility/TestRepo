<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Create An Event" subTitle="Events" />

    <CreateAnEvent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateAnEvent from "@/components/Pages/Events/CreateAnEvent/index.vue";

export default defineComponent({
  name: "EventDetailsPage",
  components: {
    PageTitle,
    CreateAnEvent,
  },
});
</script>
