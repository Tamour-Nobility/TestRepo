<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Edit Course" subTitle="LMS" />

    <EditCourse />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import EditCourse from "@/components/Pages/LMS/EditCourse/index.vue";

export default defineComponent({
  name: "EditCoursePage",
  components: {
    PageTitle,
    EditCourse,
  },
});
</script>
