<template>
  <BasicDragDrop />
  <ReorderingListsDragDrop />
</template>

<script>
import BasicDragDrop from "./BasicDragDrop.vue";
import ReorderingListsDragDrop from "./ReorderingListsDragDrop.vue";

export default {
  name: "DragDrop",
  components: {
    BasicDragDrop,
    ReorderingListsDragDrop,
  },
};
</script>
