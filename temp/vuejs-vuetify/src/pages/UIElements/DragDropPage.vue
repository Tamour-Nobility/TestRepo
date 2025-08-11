<template>
  <PageTitle pageTitle="Drag & Drop" subTitle="UI Elements" />
  <DragDrop />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import DragDrop from "@/components/Modules/UIElements/DragDrop/index.vue";

export default defineComponent({
  name: "DragDropPage",
  components: {
    PageTitle,
    DragDrop,
  },
});
</script>
