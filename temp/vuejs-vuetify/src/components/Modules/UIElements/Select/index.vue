<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Select</h5>
        </div>
        <BasicSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Multiple Select</h5>
        </div>
        <MultipleSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Chips Select</h5>
        </div>
        <ChipsSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Custom title and value Select</h5>
        </div>
        <CustomTitleValueSelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Density Select</h5>
        </div>
        <DensitySelect />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Selection Select</h5>
        </div>
        <SelectionSelect />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BasicSelect from "./BasicSelect.vue";
import MultipleSelect from "./MultipleSelect.vue";
import ChipsSelect from "./ChipsSelect.vue";
import CustomTitleValueSelect from "./CustomTitleValueSelect.vue";
import DensitySelect from "./DensitySelect.vue";
import SelectionSelect from "./SelectionSelect.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Select",
  components: {
    BasicSelect,
    MultipleSelect,
    ChipsSelect,
    CustomTitleValueSelect,
    DensitySelect,
    SelectionSelect,
  },
};
</script>
