<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Slides Only</h5>
        </div>
        <SlidesOnly />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <DotsControls />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <NavsControls />
    </v-col>
    <v-col cols="12" lg="12" md="12">
      <ResponsiveBreakpointsControl />
    </v-col>
  </v-row>
</template>

<script>
import SlidesOnly from "./SlidesOnly.vue";
import DotsControls from "./DotsControls.vue";
import NavsControls from "./NavsControls.vue";
import ResponsiveBreakpointsControl from "./ResponsiveBreakpointsControl.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousels",
  components: {
    SlidesOnly,
    DotsControls,
    NavsControls,
    ResponsiveBreakpointsControl,
  },
};
</script>
