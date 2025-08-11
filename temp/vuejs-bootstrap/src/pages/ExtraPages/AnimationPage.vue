<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Animation" subTitle="Extra Pages" />

    <Animation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Animation from "@/components/Modules/ExtraPages/Animation/index.vue";

export default defineComponent({
  name: "AnimationPage",
  components: {
    PageTitle,
    Animation,
  },
});
</script>
