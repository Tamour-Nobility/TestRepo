<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="All Projects" subTitle="Project Management" />

    <PagesProjectManagementProjectsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectOverviewPage",
});
</script>
