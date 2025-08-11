<template>
  <PageTitle pageTitle="Settings" subTitle="Social" />

  <Settings />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Settings from "@/components/Pages/Social/Settings/index.vue";

export default defineComponent({
  name: "SettingsPage",
  components: {
    PageTitle,
    Settings,
  },
});
</script>
