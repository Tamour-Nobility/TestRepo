<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Team" subTitle="Profile" />

    <Teams />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Teams from "@/components/Pages/Profile/Teams/index.vue";

export default defineComponent({
  name: "UserTeamPage",
  components: {
    PageTitle,
    Teams,
  },
});
</script>
