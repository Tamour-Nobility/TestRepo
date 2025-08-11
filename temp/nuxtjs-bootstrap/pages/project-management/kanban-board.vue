<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Kanban Board" subTitle="Apps" />

    <PagesProjectManagementKanbanBoard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KanbanBoardPage",
});
</script>
