<template>
  <PageTitle pageTitle="Alerts" subTitle="UI Elements" />
  <Alerts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Alerts from "@/components/Modules/UIElements/Alerts/index.vue";

export default defineComponent({
  name: "AlertsPage",
  components: {
    PageTitle,
    Alerts,
  },
});
</script>
