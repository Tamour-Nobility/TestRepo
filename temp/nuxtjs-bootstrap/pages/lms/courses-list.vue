<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Courses List" subTitle="LMS" />

    <PagesLMSCoursesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoursesListPage",
});
</script>
