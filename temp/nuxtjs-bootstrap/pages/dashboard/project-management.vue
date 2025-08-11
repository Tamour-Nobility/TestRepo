<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xl-6">
        <DashboardProjectManagementProjectsOverview />
      </div>
      <div class="col-xl-6">
        <DashboardProjectManagementProjectsRoadmapChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-7 col-lg-6">
        <DashboardProjectManagementProjectsProgressChart />
      </div>
      <div class="col-xl-5 col-lg-6">
        <DashboardProjectManagementMyTasks />
      </div>
    </div>

    <div class="card bg-white border-0 rounded-3 mb-4">
      <DashboardProjectManagementAllProjects />
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-4 col-lg-4">
        <DashboardProjectManagementProjectsAnalysisChart />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <DashboardProjectManagementTeamMembers />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <DashboardProjectManagementWorkingSchedule />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <DashboardProjectManagementToDoList />
      </div>
      <div class="col-lg-4">
        <DashboardProjectManagementTasksOverviewChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectManagementPage",
});
</script>
