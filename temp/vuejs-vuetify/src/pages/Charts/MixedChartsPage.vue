<template>
  <PageTitle pageTitle="Mixed Charts" subTitle="Charts" />
  <MixedCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import MixedCharts from "@/components/Modules/Charts/MixedCharts/index.vue";

export default defineComponent({
  name: "MixedChartsPage",
  components: {
    PageTitle,
    MixedCharts,
  },
});
</script>
