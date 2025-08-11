<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Alerts" subTitle="UI Elements" />

    <Alerts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Alerts from "@/components/Modules/UIElements/Alerts/index.vue";

export default defineComponent({
  name: "FeatherIconPage",
  components: {
    PageTitle,
    Alerts,
  },
});
</script>
