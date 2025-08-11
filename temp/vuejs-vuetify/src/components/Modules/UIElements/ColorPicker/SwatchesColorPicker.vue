<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Usage Color Picker</h5>
    </div>
    <div class="d-flex justify-space-around">
      <v-color-picker
        class="ma-2"
        show-swatches
        swatches-max-height="400px"
      ></v-color-picker>
      <v-color-picker
        class="ma-2"
        :swatches="swatches"
        show-swatches
      ></v-color-picker>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SwatchesColorPicker",
  data: () => ({
    swatches: [
      ["#FF0000", "#AA0000", "#550000"],
      ["#FFFF00", "#AAAA00", "#555500"],
      ["#00FF00", "#00AA00", "#005500"],
      ["#00FFFF", "#00AAAA", "#005555"],
      ["#0000FF", "#0000AA", "#000055"],
    ],
  }),
};
</script>
