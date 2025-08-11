<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Agent Overview" subTitle="Real Estate" />

    <AgentOverview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AgentOverview from "@/components/Pages/RealEstate/AgentOverview/index.vue";

export default defineComponent({
  name: "AgentOverviewPage",
  components: {
    PageTitle,
    AgentOverview,
  },
});
</script>
