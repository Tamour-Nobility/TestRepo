<template>
  <div class="row">
    <div class="col-lg-6">
      <ModulesUIElementsCarouselsSlidesOnly />
    </div>
    <div class="col-lg-6">
      <ModulesUIElementsCarouselsSlidesWithControls />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Carousels",
});
</script>
