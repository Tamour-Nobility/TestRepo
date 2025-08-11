<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Inputs</h5>
        </div>
        <BasicInputs />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Hide details Input</h5>
        </div>
        <HideDetailsInput />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Loading Input</h5>
        </div>
        <LoadingInput />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Rules Input</h5>
        </div>
        <RulesInput />
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Append and prepend Inputs</h5>
        </div>
        <AppendPrependInputs />
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Validate Inputs Form</h5>
        </div>
        <ValidateInputs />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BasicInputs from "./BasicInputs.vue";
import HideDetailsInput from "./HideDetailsInput.vue";
import LoadingInput from "./LoadingInput.vue";
import RulesInput from "./RulesInput.vue";
import AppendPrependInputs from "./AppendPrependInputs.vue";
import ValidateInputs from "./ValidateInputs.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Input",
  components: {
    BasicInputs,
    HideDetailsInput,
    LoadingInput,
    RulesInput,
    AppendPrependInputs,
    ValidateInputs,
  },
};
</script>
