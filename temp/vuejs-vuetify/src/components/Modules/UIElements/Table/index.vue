<template>
  <v-row>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Table</h5>
        </div>
        <BasicTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Theme Table</h5>
        </div>
        <ThemeTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Density Table</h5>
        </div>
        <DensityTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Use the height Table</h5>
        </div>
        <HeightTable />
      </v-card>
    </v-col>
    <v-col cols="12" xxl="6" xl="6" lg="12" md="12">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Fixed header Table</h5>
        </div>
        <FixedHeaderTable />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BasicTable from "./BasicTable.vue";
import ThemeTable from "./ThemeTable.vue";
import DensityTable from "./DensityTable.vue";
import HeightTable from "./HeightTable.vue";
import FixedHeaderTable from "./FixedHeaderTable.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Table",
  components: {
    BasicTable,
    ThemeTable,
    DensityTable,
    HeightTable,
    FixedHeaderTable,
  },
};
</script>
