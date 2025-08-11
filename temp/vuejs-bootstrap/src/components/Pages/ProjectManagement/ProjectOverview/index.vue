<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <ThemeDevelopment />

        <RecentActivity />
      </div>
      <div class="col-lg-6 col-md-6">
        <ProjectRoadmapChart />

        <ProjectsOverview />

        <TeamMembers />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-6">
        <ToDoList />
      </div>
      <div class="col-lg-4 col-md-6">
        <TasksOverviewChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeDevelopment from "./ThemeDevelopment.vue";
import RecentActivity from "./RecentActivity.vue";
import ProjectRoadmapChart from "./ProjectRoadmapChart.vue";
import ProjectsOverview from "./ProjectsOverview.vue";
import TeamMembers from "./TeamMembers.vue";
import ToDoList from "./ToDoList.vue";
import TasksOverviewChart from "./TasksOverviewChart.vue";

export default defineComponent({
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
});
</script>
