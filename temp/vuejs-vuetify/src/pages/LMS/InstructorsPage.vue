<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Instructors" subTitle="LMS" />

    <Instructors />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Instructors from "@/components/Pages/LMS/Instructors/index.vue";

export default defineComponent({
  name: "InstructorsPage",
  components: {
    PageTitle,
    Instructors,
  },
});
</script>
