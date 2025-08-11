<template>
  <v-row>
    <v-col cols="12" xxl="6" lg="6">
      <WelcomeDashboard />
    </v-col>
    <v-col cols="12" xxl="2" lg="2" md="4" sm="6">
      <TotalCourses />
    </v-col>
    <v-col cols="12" xxl="2" lg="2" md="4" sm="6">
      <TotalEnrolled />
    </v-col>
    <v-col cols="12" xxl="2" lg="2" md="4" sm="6">
      <TotalMentors />
    </v-col>
    <v-col cols="12" lg="7">
      <StudentsInterestedTopicsChart />
    </v-col>
    <v-col cols="12" lg="5">
      <TopInstructors />
    </v-col>
    <v-col cols="12" lg="4">
      <StudentsProgress />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <GroupLessons />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <EnrolledByCountries />
    </v-col>
    <v-col cols="12" lg="12">
      <Courses />
    </v-col>
    <v-col cols="12" lg="4">
      <CoursesSalesChart />
    </v-col>
    <v-col cols="12" lg="4">
      <TimeSpentChart />
    </v-col>
    <v-col cols="12" lg="4">
      <OurTopCourses />
    </v-col>
  </v-row>
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
