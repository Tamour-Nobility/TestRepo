<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="User Profile" subTitle="Profile" />

    <PagesProfileUserProfile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfilePage",
});
</script>
