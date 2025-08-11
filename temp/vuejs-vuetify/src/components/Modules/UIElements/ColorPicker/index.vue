<template>
  <v-row>
    <v-col cols="12" xl="6" lg="12" md="12">
      <BasicPicker />
    </v-col>
    <v-col cols="12" xl="6" lg="12" md="12">
      <CustomizingTheLookOfThePicker />
    </v-col>
    <v-col cols="12" xl="6" lg="12" md="12">
      <ElevationColorPicker />
    </v-col>
    <v-col cols="12" xl="6" lg="12" md="12">
      <ModeColorPicker />
    </v-col>
    <v-col cols="12" xl="6" lg="12" md="12">
      <ModelColorPicker />
    </v-col>
    <v-col cols="12" xl="6" lg="12" md="12">
      <SwatchesColorPicker />
    </v-col>
  </v-row>
</template>

<script>
import BasicPicker from "./BasicPicker.vue";
import CustomizingTheLookOfThePicker from "./CustomizingTheLookOfThePicker.vue";
import ElevationColorPicker from "./ElevationColorPicker.vue";
import ModeColorPicker from "./ModeColorPicker.vue";
import ModelColorPicker from "./ModelColorPicker.vue";
import SwatchesColorPicker from "./SwatchesColorPicker.vue";

export default {
  name: "ColorPicker",
  components: {
    BasicPicker,
    CustomizingTheLookOfThePicker,
    ElevationColorPicker,
    ModeColorPicker,
    ModelColorPicker,
    SwatchesColorPicker,
  },
};
</script>
