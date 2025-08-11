<template>
  <PageTitle pageTitle="Pie Charts" subTitle="Charts" />
  <PieCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PieCharts from "@/components/Modules/Charts/PieCharts/index.vue";

export default defineComponent({
  name: "PieChartsPage",
  components: {
    PageTitle,
    PieCharts,
  },
});
</script>
