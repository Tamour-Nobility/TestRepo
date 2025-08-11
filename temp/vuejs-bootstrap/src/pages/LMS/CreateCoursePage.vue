<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Create Course" subTitle="LMS" />

    <CreateCourse />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateCourse from "@/components/Pages/LMS/CreateCourse/index.vue";

export default defineComponent({
  name: "CreateCoursePage",
  components: {
    PageTitle,
    CreateCourse,
  },
});
</script>
