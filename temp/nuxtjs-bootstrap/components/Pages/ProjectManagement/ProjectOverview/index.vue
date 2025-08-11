<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <PagesProjectManagementProjectOverviewThemeDevelopment />

        <PagesProjectManagementProjectOverviewRecentActivity />
      </div>
      <div class="col-lg-6 col-md-6">
        <PagesProjectManagementProjectOverviewProjectRoadmapChart />

        <PagesProjectManagementProjectOverviewProjectsOverview />

        <PagesProjectManagementProjectOverviewTeamMembers />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-6">
        <PagesProjectManagementProjectOverviewToDoList />
      </div>
      <div class="col-lg-4 col-md-6">
        <PagesProjectManagementProjectOverviewTasksOverviewChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectOverview",
});
</script>
