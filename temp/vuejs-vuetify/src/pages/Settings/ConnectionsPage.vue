<template>
  <PageTitle pageTitle="Connections" subTitle="Settings" />

  <Connections />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Connections from "@/components/Others/Settings/Connections/index.vue";

export default defineComponent({
  name: "ConnectionsPage",
  components: {
    PageTitle,
    Connections,
  },
});
</script>
