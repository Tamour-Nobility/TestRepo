<template>
  <PageTitle pageTitle="Progress Bar" subTitle="UI Elements" />
  <ProgressBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ProgressBar from "@/components/Modules/UIElements/ProgressBar/index.vue";

export default defineComponent({
  name: "ProgressBarPage",
  components: {
    PageTitle,
    ProgressBar,
  },
});
</script>
