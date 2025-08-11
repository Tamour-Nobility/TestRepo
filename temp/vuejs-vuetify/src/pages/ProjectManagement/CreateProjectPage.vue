<template>
  <PageTitle pageTitle="Create Project" subTitle="Project Management" />

  <CreateProject />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateProject from "@/components/Pages/ProjectManagement/CreateProject/index.vue";

export default defineComponent({
  name: "CreateProjectPage",
  components: {
    PageTitle,
    CreateProject,
  },
});
</script>
