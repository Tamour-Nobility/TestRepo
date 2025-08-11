<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Mode Color Picker</h5>
    </div>
    <div class="d-flex justify-space-around">
      <v-color-picker v-model="color" :modes="['rgba']"></v-color-picker>

      <div class="d-flex flex-column">
        <v-color-picker v-model="color" v-model:mode="mode"></v-color-picker>
        <v-select
          v-model="mode"
          :items="modes"
          style="max-width: 300px"
          :label="mode"
        ></v-select>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ModeColorPicker",
  data: () => ({
    color: "#ff00ff",
    mode: "hsla",
    modes: ["hsla", "rgba", "hexa"],
  }),
};
</script>
