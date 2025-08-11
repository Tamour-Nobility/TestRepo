<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <ModulesUIElementsButtonsDefaultButtons />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsButtonsOutlineButtons />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsButtonsSoftButtons />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsButtonsWithIcon />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsButtonsRoundedButtons />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsButtonsOutlineRoundedButtons />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsButtonsBlockButtons />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Buttons",
});
</script>
