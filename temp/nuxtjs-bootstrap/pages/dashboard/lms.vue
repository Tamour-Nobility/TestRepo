<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xxl-6">
        <DashboardLMSWelcomeDashboard />
      </div>
      <div class="col-xxl-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-4">
            <DashboardLMSTotalCourses />
          </div>
          <div class="col-lg-4 col-sm-4">
            <DashboardLMSTotalEnrolled />
          </div>
          <div class="col-lg-4 col-sm-4">
            <DashboardLMSTotalMentors />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-7 col-lg-6">
        <DashboardLMSStudentsInterestedTopicsChart />
      </div>
      <div class="col-xxl-5 col-lg-6">
        <DashboardLMSTopInstructors />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-4">
        <DashboardLMSStudentsProgress />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DashboardLMSGroupLessons />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DashboardLMSEnrolledByCountries />
      </div>
    </div>
    <DashboardLMSCourses />
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <DashboardLMSCoursesSalesChart />
      </div>
      <div class="col-lg-4">
        <DashboardLMSTimeSpentChart />
      </div>
      <div class="col-lg-4">
        <DashboardLMSOurTopCourses />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LMSPage",
});
</script>
