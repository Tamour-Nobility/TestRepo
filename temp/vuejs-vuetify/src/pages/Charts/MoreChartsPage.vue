<template>
  <PageTitle pageTitle="More Charts" subTitle="Charts" />
  <MoreCharts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import MoreCharts from "@/components/Modules/Charts/MoreCharts/index.vue";

export default defineComponent({
  name: "MoreChartsPage",
  components: {
    PageTitle,
    MoreCharts,
  },
});
</script>
