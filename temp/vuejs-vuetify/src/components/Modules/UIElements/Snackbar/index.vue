<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Snackbar</h5>
        </div>
        <BasicSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Multi line Snackbar</h5>
        </div>
        <MultiLineSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Timeout Snackbar</h5>
        </div>
        <TimeoutSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Vertical Snackbar</h5>
        </div>
        <VerticalSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Variants Snackbar</h5>
        </div>
        <VariantsSnackbar />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BasicSnackbar from "./BasicSnackbar.vue";
import MultiLineSnackbar from "./MultiLineSnackbar.vue";
import TimeoutSnackbar from "./TimeoutSnackbar.vue";
import VerticalSnackbar from "./VerticalSnackbar.vue";
import VariantsSnackbar from "./VariantsSnackbar.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Snackbar",
  components: {
    BasicSnackbar,
    MultiLineSnackbar,
    TimeoutSnackbar,
    VerticalSnackbar,
    VariantsSnackbar,
  },
};
</script>
