<template>
  <KanbanBoard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KanbanBoard from "../../components/Apps/KanbanBoard/index.vue";

export default defineComponent({
  name: "KanbanBoardPage",
  components: {
    KanbanBoard,
  },
});
</script>
