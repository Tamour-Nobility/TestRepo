<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Courses List" subTitle="LMS" />

    <CoursesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CoursesList from "@/components/Pages/LMS/CoursesList/index.vue";

export default defineComponent({
  name: "CoursesListPage",
  components: {
    PageTitle,
    CoursesList,
  },
});
</script>
