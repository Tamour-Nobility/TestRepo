<template>
  <PageTitle pageTitle="User Profile" subTitle="Profile" />

  <UserProfile />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import UserProfile from "@/components/Pages/Profile/UserProfile/index.vue";

export default defineComponent({
  name: "UserProfilePage",
  components: {
    PageTitle,
    UserProfile,
  },
});
</script>
