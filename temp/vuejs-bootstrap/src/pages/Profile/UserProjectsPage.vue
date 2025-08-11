<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Projects" subTitle="Profile" />

    <Projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Projects from "@/components/Pages/Profile/Projects/index.vue";

export default defineComponent({
  name: "UserTeamPage",
  components: {
    PageTitle,
    Projects,
  },
});
</script>
