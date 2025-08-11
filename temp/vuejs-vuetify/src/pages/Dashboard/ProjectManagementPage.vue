<template>
  <v-row>
    <v-col cols="12" xxl="6" lg="6">
      <ProjectsOverview />
    </v-col>
    <v-col cols="12" xxl="6" lg="6">
      <ProjectsRoadmapChart />
    </v-col>
    <v-col cols="12" lg="7">
      <ProjectsProgressChart />
    </v-col>
    <v-col cols="12" lg="5">
      <MyTasks />
    </v-col>
    <v-col cols="12" lg="12">
      <AllProjects />
    </v-col>
    <v-col cols="12" xxl="4" xl="4" lg="4">
      <ProjectsAnalysisChart />
    </v-col>
    <v-col cols="12" xxl="4" xl="4" lg="4" md="6">
      <TeamMembers />
    </v-col>
    <v-col cols="12" xxl="4" xl="4" lg="4" md="6">
      <WorkingSchedule />
    </v-col>
    <v-col cols="12" lg="8">
      <ToDoList />
    </v-col>
    <v-col cols="12" lg="4">
      <TasksOverviewChart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsOverview from "../../components/Dashboard/ProjectManagement/ProjectsOverview.vue";
import ProjectsRoadmapChart from "../../components/Dashboard/ProjectManagement/ProjectsRoadmapChart.vue";
import ProjectsProgressChart from "../../components/Dashboard/ProjectManagement/ProjectsProgressChart.vue";
import MyTasks from "../../components/Dashboard/ProjectManagement/MyTasks.vue";
import AllProjects from "../../components/Dashboard/ProjectManagement/AllProjects.vue";
import ProjectsAnalysisChart from "../../components/Dashboard/ProjectManagement/ProjectsAnalysisChart.vue";
import TeamMembers from "../../components/Dashboard/ProjectManagement/TeamMembers.vue";
import WorkingSchedule from "../../components/Dashboard/ProjectManagement/WorkingSchedule.vue";
import ToDoList from "../../components/Dashboard/ProjectManagement/ToDoList.vue";
import TasksOverviewChart from "../../components/Dashboard/ProjectManagement/TasksOverviewChart.vue";

export default defineComponent({
  name: "ProjectManagementPage",
  components: {
    ProjectsOverview,
    ProjectsRoadmapChart,
    ProjectsProgressChart,
    MyTasks,
    AllProjects,
    ProjectsAnalysisChart,
    TeamMembers,
    WorkingSchedule,
    ToDoList,
    TasksOverviewChart,
  },
});
</script>
