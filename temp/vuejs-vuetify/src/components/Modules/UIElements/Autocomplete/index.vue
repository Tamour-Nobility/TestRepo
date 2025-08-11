<template>
  <v-row>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Autocomplete</h5>
        </div>
        <BasicAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Density Autocomplete</h5>
        </div>
        <DensityAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Filter Autocomplete</h5>
        </div>
        <FilterAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Item and selection Autocomplete</h5>
        </div>
        <ItemSelectionAutocomplete />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">State selector Autocomplete</h5>
        </div>
        <StateSelectorAutocomplete />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BasicAutocomplete from "./BasicAutocomplete.vue";
import DensityAutocomplete from "./DensityAutocomplete.vue";
import FilterAutocomplete from "./FilterAutocomplete.vue";
import ItemSelectionAutocomplete from "./ItemSelectionAutocomplete.vue";
import StateSelectorAutocomplete from "./StateSelectorAutocomplete.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Autocomplete",
  components: {
    BasicAutocomplete,
    DensityAutocomplete,
    FilterAutocomplete,
    ItemSelectionAutocomplete,
    StateSelectorAutocomplete,
  },
};
</script>
