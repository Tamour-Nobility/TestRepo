<template>
  <div>
    <Course />

    <TablesOfContent />
    <div class="row">
      <div class="col-lg-7">
        <CourseInstructor />
      </div>
      <div class="col-lg-5">
        <EnrolledStudents />
      </div>
    </div>

    <Ratings />
    <ManageReviews />
    <WriteFeedbackHere />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Course from "./Course.vue";
import TablesOfContent from "./TablesOfContent.vue";
import CourseInstructor from "./CourseInstructor.vue";
import EnrolledStudents from "./EnrolledStudents.vue";
import Ratings from "./Ratings.vue";
import ManageReviews from "./ManageReviews.vue";
import WriteFeedbackHere from "./WriteFeedbackHere.vue";

export default defineComponent({
  name: "CourseDetails",
  components: {
    Course,
    TablesOfContent,
    CourseInstructor,
    EnrolledStudents,
    Ratings,
    ManageReviews,
    WriteFeedbackHere,
  },
});
</script>
