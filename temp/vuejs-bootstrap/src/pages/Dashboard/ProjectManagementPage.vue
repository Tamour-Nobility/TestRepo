<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xl-6">
        <ProjectsOverview />
      </div>
      <div class="col-xl-6">
        <ProjectsRoadmapChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-7 col-lg-6">
        <ProjectsProgressChart />
      </div>
      <div class="col-xl-5 col-lg-6">
        <MyTasks />
      </div>
    </div>

    <div class="card bg-white border-0 rounded-3 mb-4">
      <AllProjects />
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-4 col-lg-4">
        <ProjectsAnalysisChart />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <TeamMembers />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <WorkingSchedule />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <ToDoList />
      </div>
      <div class="col-lg-4">
        <TasksOverviewChart />
      </div>
    </div>
  </div>
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
