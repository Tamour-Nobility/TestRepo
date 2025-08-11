<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="To Do List" subTitle="Apps" />

    <AppsToDoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToDoListPage",
});
</script>
