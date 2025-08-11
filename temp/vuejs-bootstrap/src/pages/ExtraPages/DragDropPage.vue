<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Drag & Drop" subTitle="Extra Pages" />

    <DragDrop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import DragDrop from "@/components/Modules/ExtraPages/DragDrop/index.vue";

export default defineComponent({
  name: "DragDropPage",
  components: {
    PageTitle,
    DragDrop,
  },
});
</script>
