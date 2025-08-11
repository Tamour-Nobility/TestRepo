<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">YouTube Video (16x9)</h5>
        </div>
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/mVjYG9TSN88"
            title="Edon - Angular Education LMS Template Installation"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Vimeo Video (16x9)</h5>
        </div>
        <div class="ratio ratio-16x9">
          <iframe
            src="https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">YouTube Video (21x9)</h5>
        </div>

        <div class="ratio ratio-21x9">
          <iframe
            src="https://www.youtube.com/embed/mVjYG9TSN88"
            title="Welcome to Angular’s renaissance — angular.dev"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Vimeo Video (21x9)</h5>
        </div>
        <div class="ratio ratio-21x9">
          <iframe
            src="https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Videos",
});
</script>
