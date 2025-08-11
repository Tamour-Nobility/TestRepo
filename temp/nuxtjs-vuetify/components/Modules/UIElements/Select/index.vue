<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Select</h5>
        </div>
        <ModulesUIElementsSelectBasicSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Multiple Select</h5>
        </div>
        <ModulesUIElementsSelectMultipleSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Chips Select</h5>
        </div>
        <ModulesUIElementsSelectChipsSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Custom title and value Select</h5>
        </div>
        <ModulesUIElementsSelectCustomTitleValueSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Density Select</h5>
        </div>
        <ModulesUIElementsSelectDensitySelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Selection Select</h5>
        </div>
        <ModulesUIElementsSelectSelectionSelect />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Select",
};
</script>
