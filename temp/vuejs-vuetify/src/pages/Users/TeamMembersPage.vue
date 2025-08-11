<template>
  <PageTitle pageTitle="Team Members" subTitle="Users" />

  <TeamMembers />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import TeamMembers from "@/components/Pages/Users/TeamMembers/index.vue";

export default defineComponent({
  name: "TeamMembersPage",
  components: {
    PageTitle,
    TeamMembers,
  },
});
</script>
