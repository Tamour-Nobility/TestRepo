<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Timeline" subTitle="Extra Pages" />

    <Timeline />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Timeline from "@/components/Modules/ExtraPages/Timeline/index.vue";

export default defineComponent({
  name: "PricingPage",
  components: {
    PageTitle,
    Timeline,
  },
});
</script>
