<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Agents" subTitle="HelpDesk" />

    <PagesHelpDeskAgents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgentsPage",
});
</script>
