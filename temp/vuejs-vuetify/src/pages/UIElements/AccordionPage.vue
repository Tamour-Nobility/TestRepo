<template>
  <PageTitle pageTitle="Accordions" subTitle="UI Elements" />
  <Accordions />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Accordions from "@/components/Modules/UIElements/Accordions/index.vue";

export default defineComponent({
  name: "AccordionPage",
  components: {
    PageTitle,
    Accordions,
  },
});
</script>
