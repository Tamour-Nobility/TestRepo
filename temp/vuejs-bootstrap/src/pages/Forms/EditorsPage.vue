<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Editors" subTitle="Forms" />

    <Editors />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Editors from "@/components/Modules/Forms/Editors/index.vue";

export default defineComponent({
  name: "AdvancedElementsPage",
  components: {
    PageTitle,
    Editors,
  },
});
</script>
