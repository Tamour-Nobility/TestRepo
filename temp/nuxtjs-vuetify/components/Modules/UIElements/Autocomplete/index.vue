<template>
  <v-row>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Autocomplete</h5>
        </div>
        <ModulesUIElementsAutocompleteBasicAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Density Autocomplete</h5>
        </div>
        <ModulesUIElementsAutocompleteDensityAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Filter Autocomplete</h5>
        </div>
        <ModulesUIElementsAutocompleteFilterAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Item and selection Autocomplete</h5>
        </div>
        <ModulesUIElementsAutocompleteItemSelectionAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">State selector Autocomplete</h5>
        </div>
        <ModulesUIElementsAutocompleteStateSelectorAutocomplete />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Autocomplete",
};
</script>
