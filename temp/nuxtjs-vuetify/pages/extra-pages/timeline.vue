<template>
  <CommonPageTitle pageTitle="Timeline" subTitle="Extra Pages" />
  <ModulesExtraPagesTimelineBasicTimeline />
  <ModulesExtraPagesTimelineAdvancedTimeline />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimelinePage",
});
</script>
