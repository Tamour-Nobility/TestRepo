<template>
  <CommonPageTitle pageTitle="Course Details" subTitle="LMS" />
  <PagesLMSCourseDetailsCourse />
  <PagesLMSCourseDetailsTablesOfContent />
  <v-row>
    <v-col cols="12" lg="7" md="12">
      <PagesLMSCourseDetailsCourseInstructor />
    </v-col>
    <v-col cols="12" lg="5" md="12">
      <PagesLMSCourseDetailsEnrolledStudents />
    </v-col>
  </v-row>
  <PagesLMSCourseDetailsOverallReviews />
  <PagesLMSCourseDetailsManageReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CourseDetailsPage",
});
</script>
