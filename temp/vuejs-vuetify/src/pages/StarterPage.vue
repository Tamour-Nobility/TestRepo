<template>
  <PageTitle pageTitle="Starter" />

  <Starter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Starter from "@/components/Pages/Starter/index.vue";

export default defineComponent({
  name: "StarterPage",
  components: {
    PageTitle,
    Starter,
  },
});
</script>
