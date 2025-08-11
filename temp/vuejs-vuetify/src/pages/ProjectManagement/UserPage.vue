<template>
  <PageTitle pageTitle="Users" subTitle="Project Management" />

  <Users />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Users from "@/components/Pages/ProjectManagement/Users/index.vue";

export default defineComponent({
  name: "UserPage",
  components: {
    PageTitle,
    Users,
  },
});
</script>
