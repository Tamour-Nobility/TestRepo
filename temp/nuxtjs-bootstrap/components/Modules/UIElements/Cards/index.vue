<template>
  <div class="row justify-content-center">
    <div class="col-xxl-3 col-md-6 position-relative">
      <ModulesUIElementsCardsDefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <ModulesUIElementsCardsDefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <ModulesUIElementsCardsDefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <ModulesUIElementsCardsDefaultCard />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <ModulesUIElementsCardsCardWithImage />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <ModulesUIElementsCardsCardWithBgImage />
    </div>
    <div class="col-xxl-3 col-md-6 position-relative">
      <ModulesUIElementsCardsCardWithList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cards",
});
</script>
