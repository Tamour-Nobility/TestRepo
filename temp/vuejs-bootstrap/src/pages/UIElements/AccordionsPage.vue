<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Accordions" subTitle="UI Elements" />

    <Accordions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Accordions from "@/components/Modules/UIElements/Accordions/index.vue";

export default defineComponent({
  name: "AccordionsPage",
  components: {
    PageTitle,
    Accordions,
  },
});
</script>
