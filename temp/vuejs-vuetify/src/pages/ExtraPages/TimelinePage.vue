<template>
  <PageTitle pageTitle="Timeline" subTitle="Extra Pages" />
  <BasicTimeline />
  <AdvancedTimeline />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import BasicTimeline from "@/components/Modules/ExtraPages/Timeline/BasicTimeline.vue";
import AdvancedTimeline from "@/components/Modules/ExtraPages/Timeline/AdvancedTimeline.vue";

export default defineComponent({
  name: "TimelinePage",
  components: {
    PageTitle,
    BasicTimeline,
    AdvancedTimeline,
  },
});
</script>
