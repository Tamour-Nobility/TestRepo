<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Inbox" subTitle="Apps" />
    <AppsEmailInbox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InboxPage",
});
</script>
