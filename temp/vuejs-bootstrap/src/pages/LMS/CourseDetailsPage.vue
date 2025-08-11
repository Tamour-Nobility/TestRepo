<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Course Details" subTitle="LMS" />

    <CourseDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CourseDetails from "@/components/Pages/LMS/CourseDetails/index.vue";

export default defineComponent({
  name: "CourseDetailsPage",
  components: {
    PageTitle,
    CourseDetails,
  },
});
</script>
