<template>
  <div class="main-content-container overflow-hidden">
    <ApexCharts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApexCharts from "@/components/ApexCharts/index.vue";

export default defineComponent({
  name: "ApexChartsPage",
  components: {
    ApexCharts,
  },
});
</script>
