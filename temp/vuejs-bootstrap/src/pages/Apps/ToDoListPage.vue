<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="To Do List" subTitle="Apps" />

    <ToDoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import ToDoList from "../../components/Apps/ToDoList/index.vue";

export default defineComponent({
  name: "ToDoListPage",
  components: {
    PageTitle,
    ToDoList,
  },
});
</script>
