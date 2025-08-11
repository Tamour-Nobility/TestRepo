<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <WelcomeBack />
      </div>
      <div class="col-lg-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-4">
            <TotalProjects />
          </div>
          <div class="col-lg-4 col-sm-4">
            <TotalOrders />
          </div>
          <div class="col-lg-4 col-sm-4">
            <TotalRevenue />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-3">
        <div class="row">
          <div class="col-xxl-12 col-md-6 col-lg-4">
            <ProfileIntro />
          </div>
          <div class="col-xxl-12 col-md-6 col-lg-4">
            <ProfileInformation />
          </div>
          <div class="col-xxl-12 col-md-6 col-lg-4">
            <AdditionalInformation />
          </div>
        </div>
      </div>
      <div class="col-xxl-9">
        <ProjectsAnalysisChart />

        <ToDoList />

        <RecentActivity />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

export default defineComponent({
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
});
</script>
