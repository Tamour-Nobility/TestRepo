<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Widgets" />

    <Widgets />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Widgets from "@/components/Modules/Widgets/index.vue";

export default defineComponent({
  name: "WidgetsPage",
  components: {
    PageTitle,
    Widgets,
  },
});
</script>
