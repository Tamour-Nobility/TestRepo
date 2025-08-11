<template>
  <PageTitle pageTitle="Radar Charts" subTitle="Charts" />
  <RadarCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import RadarCharts from "@/components/Modules/Charts/RadarCharts/index.vue";

export default defineComponent({
  name: "RadarChartsPage",
  components: {
    PageTitle,
    RadarCharts,
  },
});
</script>
