<template>
  <Carousel v-bind="settings" :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in items" :key="slide.id">
      <v-img :src="slide.image" class="border-radius" alt="course-image" />
    </Slide>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "SlidesOnly",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    items: [
      {
        id: 1,
        image: require("@/assets/images/gallery/gallery3.jpg"),
      },
      {
        id: 2,
        image: require("@/assets/images/gallery/gallery2.jpg"),
      },
      {
        id: 3,
        image: require("@/assets/images/gallery/gallery1.jpg"),
      },
    ],
  }),
});
</script>
