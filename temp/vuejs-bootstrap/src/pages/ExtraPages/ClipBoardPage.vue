<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Clip Board" subTitle="Extra Pages" />

    <ClipBoard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ClipBoard from "@/components/Modules/ExtraPages/ClipBoard/index.vue";

export default defineComponent({
  name: "ClipBoardPage",
  components: {
    PageTitle,
    ClipBoard,
  },
});
</script>
