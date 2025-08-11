<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Progress" subTitle="UI Elements" />

    <Progress />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Progress from "@/components/Modules/UIElements/Progress/index.vue";

export default defineComponent({
  name: "ProgressPage",
  components: {
    PageTitle,
    Progress,
  },
});
</script>
