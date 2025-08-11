<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Reports" subTitle="HelpDesk" />

    <Reports />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Reports from "@/components/Pages/HelpDesk/Reports/index.vue";

export default defineComponent({
  name: "ReportsPage",
  components: {
    PageTitle,
    Reports,
  },
});
</script>
