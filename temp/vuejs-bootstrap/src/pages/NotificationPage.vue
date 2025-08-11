<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Notification" />

    <Notification />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Notification from "@/components/Modules/Notification/index.vue";

export default defineComponent({
  name: "NotificationPage",
  components: {
    PageTitle,
    Notification,
  },
});
</script>
