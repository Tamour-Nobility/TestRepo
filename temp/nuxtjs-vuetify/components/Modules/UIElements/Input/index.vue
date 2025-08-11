<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Inputs</h5>
        </div>
        <ModulesUIElementsInputBasicInputs />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Hide details Input</h5>
        </div>
        <ModulesUIElementsInputHideDetailsInput />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Loading Input</h5>
        </div>
        <ModulesUIElementsInputLoadingInput />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Rules Input</h5>
        </div>
        <ModulesUIElementsInputRulesInput />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Append and prepend Inputs</h5>
        </div>
        <ModulesUIElementsInputAppendPrependInputs />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Validate Inputs Form</h5>
        </div>
        <ModulesUIElementsInputValidateInputs />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Input",
};
</script>
