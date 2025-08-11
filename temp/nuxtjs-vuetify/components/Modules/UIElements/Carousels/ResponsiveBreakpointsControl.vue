<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Responsive Breakpoints</h5>
    </div>
    <CCarousel
      v-bind="settings"
      :autoplay="5000"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <CSlide v-for="slide in items" :key="slide.id">
        <v-img :src="slide.image" class="border-radius" alt="course-image" />
      </CSlide>

      <template #addons>
        <CNavigation />
        <CPagination />
      </template>
    </CCarousel>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/gallery/gallery4.jpg";
import image2 from "~/assets/images/gallery/gallery5.jpg";
import image3 from "~/assets/images/gallery/gallery6.jpg";
import image4 from "~/assets/images/gallery/gallery1.jpg";
import image5 from "~/assets/images/gallery/gallery2.jpg";
import image6 from "~/assets/images/gallery/gallery3.jpg";

export default defineComponent({
  name: "ResponsiveBreakpointsControl",
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
      {
        id: 4,
        image: image4,
      },
      {
        id: 5,
        image: image5,
      },
      {
        id: 6,
        image: image6,
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
