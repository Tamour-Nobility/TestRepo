<template>
  <PageTitle pageTitle="Notification" />

  <Notifications />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Notifications from "@/components/Modules/Notifications/index.vue";

export default defineComponent({
  name: "NotificationsPage",
  components: {
    PageTitle,
    Notifications,
  },
});
</script>
