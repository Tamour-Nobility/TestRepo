<template>
  <PageTitle pageTitle="Column Charts" subTitle="Charts" />
  <ColumnCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ColumnCharts from "@/components/Modules/Charts/ColumnCharts/index.vue";

export default defineComponent({
  name: "ColumnChartsPage",
  components: {
    PageTitle,
    ColumnCharts,
  },
});
</script>
