<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Alerts" subTitle="UI Elements" />

    <ModulesUIElementsAlerts />
  </div>
</template>

<script lang="ts">
import { ModulesUIElementsAlerts } from "#build/components";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlertsPage",
});
</script>
