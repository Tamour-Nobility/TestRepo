<template>
  <PageTitle pageTitle="Teams" subTitle="Project Management" />

  <Teams />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Teams from "@/components/Pages/ProjectManagement/Teams/index.vue";

export default defineComponent({
  name: "TeamsPage",
  components: {
    PageTitle,
    Teams,
  },
});
</script>
