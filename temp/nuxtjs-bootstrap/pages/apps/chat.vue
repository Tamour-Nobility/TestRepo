<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Chat" subTitle="Apps" />
    <AppsChat />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatPage",
});
</script>
