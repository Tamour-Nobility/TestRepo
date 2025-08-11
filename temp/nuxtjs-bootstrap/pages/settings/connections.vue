<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Connections" subTitle="Settings" />

    <OthersSettingsConnections />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConnectionsPage",
});
</script>
