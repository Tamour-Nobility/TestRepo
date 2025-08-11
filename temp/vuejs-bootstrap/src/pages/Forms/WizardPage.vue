<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle pageTitle="Wizard" subTitle="Forms" />

    <Wizard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Wizard from "@/components/Modules/Forms/Wizard/index.vue";

export default defineComponent({
  name: "WizardPage",
  components: {
    PageTitle,
    Wizard,
  },
});
</script>
