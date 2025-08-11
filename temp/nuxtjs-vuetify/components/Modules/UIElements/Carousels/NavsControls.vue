<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">With Navs Controls</h5>
    </div>
    <CCarousel v-bind="settings" :autoplay="5000" :wrap-around="true">
      <CSlide v-for="slide in items" :key="slide.id">
        <v-img :src="slide.image" class="border-radius" alt="course-image" />
      </CSlide>

      <template #addons>
        <Navigation />
      </template>
    </CCarousel>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/gallery/gallery4.jpg";
import image2 from "~/assets/images/gallery/gallery5.jpg";
import image3 from "~/assets/images/gallery/gallery6.jpg";

export default defineComponent({
  name: "NavsControls",
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    items: [
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
      {
        id: 3,
        image: image3,
      },
    ],
  }),
});
</script>
