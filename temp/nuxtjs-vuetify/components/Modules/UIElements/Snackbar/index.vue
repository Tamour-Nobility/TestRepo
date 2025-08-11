<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Snackbar</h5>
        </div>
        <ModulesUIElementsSnackbarBasicSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Multi line Snackbar</h5>
        </div>
        <ModulesUIElementsSnackbarMultiLineSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Timeout Snackbar</h5>
        </div>
        <ModulesUIElementsSnackbarTimeoutSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Vertical Snackbar</h5>
        </div>
        <ModulesUIElementsSnackbarVerticalSnackbar />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Variants Snackbar</h5>
        </div>
        <ModulesUIElementsSnackbarVariantsSnackbar />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Snackbar",
};
</script>
