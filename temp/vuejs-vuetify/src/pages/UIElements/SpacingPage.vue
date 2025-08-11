<template>
  <PageTitle pageTitle="Spacing" subTitle="UI Elements" />
  <Spacing />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Spacing from "@/components/Modules/UIElements/Spacing/index.vue";

export default defineComponent({
  name: "SpacingPage",
  components: {
    PageTitle,
    Spacing,
  },
});
</script>
