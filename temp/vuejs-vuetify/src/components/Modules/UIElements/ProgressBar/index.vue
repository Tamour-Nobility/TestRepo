<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="v-card-header trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Progress Bar</h5>
        </div>
        <v-progress-linear
          bg-color="blue-lighten-2"
          color="blue-darken-2"
          model-value="40"
        ></v-progress-linear>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Indeterminate Progress Bar</h5>
        </div>
        <v-progress-linear
          indeterminate
          bg-color="blue-lighten-2"
          color="blue-darken-2"
          model-value="40"
        ></v-progress-linear>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Reversed Progress Bar</h5>
        </div>
        <v-progress-linear
          indeterminate
          reverse
          bg-color="blue-lighten-2"
          color="blue-darken-2"
          model-value="40"
        ></v-progress-linear>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Progress Spinner</h5>
        </div>
        <v-progress-circular
          indeterminate
          :width="10"
          :size="100"
          color="primary"
        ></v-progress-circular>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProgressBar",
};
</script>
