<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xxl-6">
        <WelcomeDashboard />
      </div>
      <div class="col-xxl-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-4">
            <TotalCourses />
          </div>
          <div class="col-lg-4 col-sm-4">
            <TotalEnrolled />
          </div>
          <div class="col-lg-4 col-sm-4">
            <TotalMentors />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-7 col-lg-6">
        <StudentsInterestedTopicsChart />
      </div>
      <div class="col-xxl-5 col-lg-6">
        <TopInstructors />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-4">
        <StudentsProgress />
      </div>
      <div class="col-xxl-4 col-md-6">
        <GroupLessons />
      </div>
      <div class="col-xxl-4 col-md-6">
        <EnrolledByCountries />
      </div>
    </div>
    <Courses />
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <CoursesSalesChart />
      </div>
      <div class="col-lg-4">
        <TimeSpentChart />
      </div>
      <div class="col-lg-4">
        <OurTopCourses />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeDashboard from "../../components/Dashboard/LMS/WelcomeDashboard.vue";
import TotalCourses from "../../components/Dashboard/LMS/TotalCourses.vue";
import TotalEnrolled from "../../components/Dashboard/LMS/TotalEnrolled.vue";
import TotalMentors from "../../components/Dashboard/LMS/TotalMentors.vue";
import StudentsInterestedTopicsChart from "../../components/Dashboard/LMS/StudentsInterestedTopicsChart.vue";
import TopInstructors from "../../components/Dashboard/LMS/TopInstructors.vue";
import StudentsProgress from "../../components/Dashboard/LMS/StudentsProgress.vue";
import GroupLessons from "../../components/Dashboard/LMS/GroupLessons.vue";
import EnrolledByCountries from "../../components/Dashboard/LMS/EnrolledByCountries.vue";
import Courses from "../../components/Dashboard/LMS/Courses.vue";
import CoursesSalesChart from "../../components/Dashboard/LMS/CoursesSalesChart.vue";
import TimeSpentChart from "../../components/Dashboard/LMS/TimeSpentChart.vue";
import OurTopCourses from "../../components/Dashboard/LMS/OurTopCourses.vue";

export default defineComponent({
  name: "LMSPage",
  components: {
    WelcomeDashboard,
    TotalCourses,
    TotalEnrolled,
    TotalMentors,
    StudentsInterestedTopicsChart,
    TopInstructors,
    StudentsProgress,
    GroupLessons,
    EnrolledByCountries,
    Courses,
    CoursesSalesChart,
    TimeSpentChart,
    OurTopCourses,
  },
});
</script>
