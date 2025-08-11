<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Responsive Breakpoints</h5>
    </div>
    <Carousel
      v-bind="settings"
      :autoplay="5000"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <Slide v-for="slide in items" :key="slide.id">
        <v-img :src="slide.image" class="border-radius" alt="course-image" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ResponsiveBreakpointsControl",
  components: {
    Carousel,
    Slide,
    Navigation,
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
      {
        id: 4,
        image: require("@/assets/images/gallery/gallery4.jpg"),
      },
      {
        id: 5,
        image: require("@/assets/images/gallery/gallery5.jpg"),
      },
      {
        id: 6,
        image: require("@/assets/images/gallery/gallery6.jpg"),
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      576: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
});
</script>
