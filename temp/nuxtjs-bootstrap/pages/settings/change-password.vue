<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Change Password" subTitle="Settings" />

    <OthersSettingsChangePassword />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChangePasswordPage",
});
</script>
