<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Account Settings" subTitle="Settings" />

    <OthersSettingsAccountSettings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountSettingsPage",
});
</script>
