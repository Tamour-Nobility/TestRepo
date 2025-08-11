<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Wizard" subTitle="Forms" />

    <ModulesFormsWizard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WizardPage",
});
</script>
