<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Sent Mail" subTitle="Apps" />
    <AppsEmailSentMail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SentMailPage",
});
</script>
