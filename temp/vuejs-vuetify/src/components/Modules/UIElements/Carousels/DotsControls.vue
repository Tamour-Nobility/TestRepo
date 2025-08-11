<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">With Dots Controls</h5>
    </div>
    <Carousel v-bind="settings" :autoplay="5000" :wrap-around="true">
      <Slide v-for="slide in items" :key="slide.id">
        <v-img :src="slide.image" class="border-radius" alt="course-image" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "DotsControls",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    items: [
      {
        id: 1,
        image: require("@/assets/images/gallery/gallery1.jpg"),
      },
      {
        id: 2,
        image: require("@/assets/images/gallery/gallery2.jpg"),
      },
      {
        id: 3,
        image: require("@/assets/images/gallery/gallery3.jpg"),
      },
    ],
  }),
});
</script>
