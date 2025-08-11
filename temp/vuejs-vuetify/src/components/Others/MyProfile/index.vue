<template>
  <div class="row">
    <div class="col-xxl-6">
      <WelcomeBack />
    </div>
    <div class="col-xxl-2 col-sm-4">
      <TotalProjects />
    </div>
    <div class="col-xxl-2 col-sm-4">
      <TotalOrders />
    </div>
    <div class="col-xxl-2 col-sm-4">
      <TotalRevenue />
    </div>
    <div class="col-xxl-4 col-xxxl-3">
      <ProfileIntro />

      <ProfileInformation />

      <AdditionalInformation />
    </div>
    <div class="col-xxl-8 col-xxxl-9">
      <ProjectsAnalysisChart />

      <ToDoList />

      <RecentActivity />
    </div>
  </div>
</template>

<script>
import WelcomeBack from "./WelcomeBack.vue";
import TotalProjects from "./TotalProjects.vue";
import TotalOrders from "./TotalOrders.vue";
import TotalRevenue from "./TotalRevenue.vue";
import ProfileIntro from "./ProfileIntro.vue";
import ProfileInformation from "./ProfileInformation.vue";
import AdditionalInformation from "./AdditionalInformation.vue";
import ProjectsAnalysisChart from "./ProjectsAnalysisChart.vue";
import ToDoList from "./ToDoList.vue";
import RecentActivity from "./RecentActivity.vue";

export default {
  name: "MyProfile",
  components: {
    WelcomeBack,
    TotalProjects,
    TotalOrders,
    TotalRevenue,
    ProfileIntro,
    ProfileInformation,
    AdditionalInformation,
    ProjectsAnalysisChart,
    ToDoList,
    RecentActivity,
  },
};
</script>
