<template>
  <PageTitle pageTitle="Line Charts" subTitle="Charts" />
  <LineCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import LineCharts from "@/components/Modules/Charts/LineCharts/index.vue";

export default defineComponent({
  name: "LineChartsPage",
  components: {
    PageTitle,
    LineCharts,
  },
});
</script>
