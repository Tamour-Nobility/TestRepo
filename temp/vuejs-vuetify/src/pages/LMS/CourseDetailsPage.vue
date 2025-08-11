<template>
  <PageTitle pageTitle="Course Details" subTitle="LMS" />

  <Course />
  <TablesOfContent />
  <v-row>
    <v-col cols="12" lg="7" md="12">
      <CourseInstructor />
    </v-col>
    <v-col cols="12" lg="5" md="12">
      <EnrolledStudents />
    </v-col>
  </v-row>
  <OverallReviews />
  <ManageReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Course from "@/components/Pages/LMS/CourseDetails/Course.vue";
import TablesOfContent from "@/components/Pages/LMS/CourseDetails/TablesOfContent.vue";
import CourseInstructor from "@/components/Pages/LMS/CourseDetails/CourseInstructor.vue";
import EnrolledStudents from "@/components/Pages/LMS/CourseDetails/EnrolledStudents.vue";
import OverallReviews from "@/components/Pages/LMS/CourseDetails/OverallReviews.vue";
import ManageReviews from "@/components/Pages/LMS/CourseDetails/ManageReviews.vue";

export default defineComponent({
  name: "CourseDetailsPage",
  components: {
    PageTitle,
    Course,
    TablesOfContent,
    CourseInstructor,
    EnrolledStudents,
    OverallReviews,
    ManageReviews,
  },
});
</script>
