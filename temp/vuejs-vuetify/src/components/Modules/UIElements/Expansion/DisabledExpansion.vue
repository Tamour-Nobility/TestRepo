<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Disabled Expansion</h5>
    </div>
    <div>
      <div class="d-flex">
        <v-checkbox v-model="disabled" label="Disabled"></v-checkbox>
      </div>

      <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
          <v-expansion-panel-text> Some content </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>Panel 2</v-expansion-panel-title>
          <v-expansion-panel-text> Some content </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>Panel 3</v-expansion-panel-title>
          <v-expansion-panel-text> Some content </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "DisabledExpansion",
  data: () => ({
    panel: [0],
    disabled: false,
  }),
};
</script>

<style lang="scss" scoped>
.v-expansion-panels {
  box-shadow: 0px 0px 1px 0px;
}
</style>
