<template>
  <div>
    <PagesLMSCourseDetailsCourse />

    <PagesLMSCourseDetailsTablesOfContent />

    <div class="row">
      <div class="col-lg-7">
        <PagesLMSCourseDetailsCourseInstructor />
      </div>
      <div class="col-lg-5">
        <PagesLMSCourseDetailsEnrolledStudents />
      </div>
    </div>

    <PagesLMSCourseDetailsRatings />
    <PagesLMSCourseDetailsManageReviews />
    <PagesLMSCourseDetailsWriteFeedbackHere />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CourseDetails",
});
</script>
