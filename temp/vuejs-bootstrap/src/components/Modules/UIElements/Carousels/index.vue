<template>
  <div class="row">
    <div class="col-lg-6">
      <SlidesOnly />
    </div>
    <div class="col-lg-6">
      <SlidesWithControls />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SlidesOnly from "./SlidesOnly.vue";
import SlidesWithControls from "./SlidesWithControls.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousels",
  components: {
    SlidesOnly,
    SlidesWithControls,
  },
});
</script>
