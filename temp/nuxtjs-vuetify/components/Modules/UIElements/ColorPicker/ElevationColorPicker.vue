<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Elevation Color Picker</h5>
    </div>
    <div class="d-flex justify-space-around">
      <v-color-picker v-model="picker" elevation="0"></v-color-picker>

      <v-color-picker v-model="picker" elevation="15"></v-color-picker>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ElevationColorPicker",
  data() {
    return {
      picker: null,
    };
  },
};
</script>
