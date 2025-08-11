<template>
  <v-row>
    <v-col cols="12" xxl="6" lg="6">
      <PagesProjectManagementProjectOverviewThemeDevelopment />
      <PagesProjectManagementProjectOverviewRecentActivity />
    </v-col>
    <v-col cols="12" xxl="6" lg="6">
      <PagesProjectManagementProjectOverviewProjectRoadmapChart />
      <PagesProjectManagementProjectOverviewProjectsOverview />
      <PagesProjectManagementProjectOverviewTeamMembers />
    </v-col>
    <v-col cols="12" lg="8">
      <PagesProjectManagementProjectOverviewToDoList />
    </v-col>
    <v-col cols="12" lg="4">
      <PagesProjectManagementProjectOverviewTasksOverviewChart />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProjectOverview",
};
</script>
