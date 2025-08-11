<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Settings" subTitle="Social" />

    <PagesSocialSettings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingsPage",
});
</script>
