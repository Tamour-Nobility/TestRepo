<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Advanced Elements" subTitle="Forms" />

    <AdvancedElements />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AdvancedElements from "@/components/Modules/Forms/AdvancedElements/index.vue";

export default defineComponent({
  name: "AdvancedElementsPage",
  components: {
    PageTitle,
    AdvancedElements,
  },
});
</script>
