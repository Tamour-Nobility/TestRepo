<template>
  <v-row>
    <v-col cols="12" xxl="6" lg="6">
      <ThemeDevelopment />
      <RecentActivity />
    </v-col>
    <v-col cols="12" xxl="6" lg="6">
      <ProjectRoadmapChart />
      <ProjectsOverview />
      <TeamMembers />
    </v-col>
    <v-col cols="12" lg="8">
      <ToDoList />
    </v-col>
    <v-col cols="12" lg="4">
      <TasksOverviewChart />
    </v-col>
  </v-row>
</template>

<script>
import ThemeDevelopment from "./ThemeDevelopment.vue";
import RecentActivity from "./RecentActivity.vue";
import ProjectRoadmapChart from "./ProjectRoadmapChart.vue";
import ProjectsOverview from "./ProjectsOverview.vue";
import TeamMembers from "./TeamMembers.vue";
import ToDoList from "./ToDoList.vue";
import TasksOverviewChart from "./TasksOverviewChart.vue";

export default {
  name: "ProjectOverview",
  components: {
    ThemeDevelopment,
    RecentActivity,
    ProjectRoadmapChart,
    ProjectsOverview,
    TeamMembers,
    ToDoList,
    TasksOverviewChart,
  },
};
</script>
