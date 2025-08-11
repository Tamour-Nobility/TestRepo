<template>
  <v-row>
    <v-col cols="12" xxl="6" lg="6">
      <DashboardProjectManagementProjectsOverview />
    </v-col>
    <v-col cols="12" xxl="6" lg="6">
      <DashboardProjectManagementProjectsRoadmapChart />
    </v-col>
    <v-col cols="12" lg="7">
      <DashboardProjectManagementProjectsProgressChart />
    </v-col>
    <v-col cols="12" lg="5">
      <DashboardProjectManagementMyTasks />
    </v-col>
    <v-col cols="12" lg="12">
      <DashboardProjectManagementAllProjects />
    </v-col>
    <v-col cols="12" xxl="4" xl="4" lg="4">
      <DashboardProjectManagementProjectsAnalysisChart />
    </v-col>
    <v-col cols="12" xxl="4" xl="4" lg="4" md="6">
      <DashboardProjectManagementTeamMembers />
    </v-col>
    <v-col cols="12" xxl="4" xl="4" lg="4" md="6">
      <DashboardProjectManagementWorkingSchedule />
    </v-col>
    <v-col cols="12" lg="8">
      <DashboardProjectManagementToDoList />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardProjectManagementTasksOverviewChart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectManagementPage",
});
</script>
