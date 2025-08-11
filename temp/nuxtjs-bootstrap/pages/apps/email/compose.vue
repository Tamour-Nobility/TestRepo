<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Compose" subTitle="Apps" />
    <AppsEmailCompose />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComposePage",
});
</script>
