<template>
  <PageTitle pageTitle="RadialBar Charts" subTitle="Charts" />
  <RadialBarCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import RadialBarCharts from "@/components/Modules/Charts/RadialBarCharts/index.vue";

export default defineComponent({
  name: "RadialBarChartsPage",
  components: {
    PageTitle,
    RadialBarCharts,
  },
});
</script>
