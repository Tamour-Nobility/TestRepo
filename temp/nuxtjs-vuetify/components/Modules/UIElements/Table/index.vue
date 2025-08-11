<template>
  <v-row>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Table</h5>
        </div>
        <ModulesUIElementsTableBasicTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Theme Table</h5>
        </div>
        <ModulesUIElementsTableThemeTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Density Table</h5>
        </div>
        <ModulesUIElementsTableDensityTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Use the height Table</h5>
        </div>
        <ModulesUIElementsTableHeightTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Fixed header Table</h5>
        </div>
        <ModulesUIElementsTableFixedHeaderTable />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Table",
};
</script>
