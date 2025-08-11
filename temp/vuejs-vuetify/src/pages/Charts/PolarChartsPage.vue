<template>
  <PageTitle pageTitle="Polar Charts" subTitle="Charts" />
  <PolarCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PolarCharts from "@/components/Modules/Charts/PolarCharts/index.vue";

export default defineComponent({
  name: "PolarChartsPage",
  components: {
    PageTitle,
    PolarCharts,
  },
});
</script>
