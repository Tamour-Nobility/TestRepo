<template>
  <PageTitle pageTitle="Projects" subTitle="Profile" />

  <Projects />
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
