<template>
  <PageTitle pageTitle="Account Settings" subTitle="Settings" />

  <AccountSettings />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AccountSettings from "@/components/Others/Settings/AccountSettings/index.vue";

export default defineComponent({
  name: "AccountSettingsPage",
  components: {
    PageTitle,
    AccountSettings,
  },
});
</script>
