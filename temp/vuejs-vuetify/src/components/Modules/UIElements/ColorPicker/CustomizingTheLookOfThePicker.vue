<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Customizing The Look Of The Picker</h5>
    </div>
    <div class="d-flex justify-space-around">
      <v-color-picker v-model="c1" hide-canvas hide-sliders></v-color-picker>

      <v-color-picker v-model="c2" hide-inputs show-swatches></v-color-picker>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CustomizingTheLookOfThePicker",
  data: () => ({
    c1: "#ff00ff",
    c2: "#00ff00",
  }),
};
</script>
