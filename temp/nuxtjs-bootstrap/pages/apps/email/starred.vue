<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Starred" subTitle="Apps" />
    <AppsEmailStarred />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StarredPage",
});
</script>
