<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Project Overview" subTitle="Project Management" />

    <ProjectOverview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ProjectOverview from "@/components/Pages/ProjectManagement/ProjectOverview/index.vue";

export default defineComponent({
  name: "ProjectOverviewPage",
  components: {
    PageTitle,
    ProjectOverview,
  },
});
</script>
