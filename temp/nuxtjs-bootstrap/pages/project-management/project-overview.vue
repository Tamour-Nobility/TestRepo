<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle
      pageTitle="Project Overview"
      subTitle="Project Management"
    />

    <PagesProjectManagementProjectOverview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectOverviewPage",
});
</script>
