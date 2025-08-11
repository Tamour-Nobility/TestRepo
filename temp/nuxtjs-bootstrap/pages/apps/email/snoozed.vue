<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Snooozed" subTitle="Apps" />
    <AppsEmailSnoozed />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SnoozedPage",
});
</script>
