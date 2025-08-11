<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header border-bottom">
          <h5 class="mb-0">Basic Slider</h5>
        </div>
        <v-slider></v-slider>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header border-bottom">
          <h5 class="mb-0">Range Slider</h5>
        </div>
        <v-range-slider
          min="200"
          max="500"
          v-model="value"
          strict
        ></v-range-slider>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="mb-25 trezo-card">
        <div class="v-card-header border-bottom">
          <h5 class="mb-0">Thumb label</h5>
        </div>
        <v-range-slider
          :ticks="seasons"
          :model-value="[0, 1]"
          min="0"
          max="3"
          :step="1"
          show-ticks="always"
          thumb-label="always"
          tick-size="4"
        >
          <template v-slot:thumb-label="{ modelValue }">
            <v-icon theme="dark" :icon="season(modelValue)"></v-icon>
          </template>
        </v-range-slider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider",
  data() {
    return {
      value: [300, 400],
      seasons: {
        0: "Winter",
        1: "Spring",
        2: "Summer",
        3: "Fall",
      },
      icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"],
    };
  },
  methods: {
    season(val) {
      return this.icons[val];
    },
  },
};
</script>

<style lang="scss" scoped>
.v-slider.v-input--horizontal
  .v-slider-track__tick
  .v-slider-track__tick-label {
  margin-top: 25px !important;
}
</style>
