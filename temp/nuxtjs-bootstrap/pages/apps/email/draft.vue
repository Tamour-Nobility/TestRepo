<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Draft" subTitle="Apps" />
    <AppsEmailDraft />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DraftPage",
});
</script>
