<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Slides Only</h5>
        </div>
        <ModulesUIElementsCarouselsSlidesOnly />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <ModulesUIElementsCarouselsDotsControls />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <ModulesUIElementsCarouselsNavsControls />
    </v-col>
    <v-col cols="12" lg="12" md="12">
      <ModulesUIElementsCarouselsResponsiveBreakpointsControl />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CarouselsContent",
};
</script>
