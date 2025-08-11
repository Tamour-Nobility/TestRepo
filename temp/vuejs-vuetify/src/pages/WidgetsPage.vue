<template>
  <PageTitle pageTitle="Widgets" />

  <Widgets />
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
