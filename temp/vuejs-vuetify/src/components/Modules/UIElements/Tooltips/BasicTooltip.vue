<template>
  <v-card class="tooltip-card mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Basic Tooltip</h5>
    </div>
    <v-tooltip text="Tooltip">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">Tooltip</v-btn>
      </template>
    </v-tooltip>
  </v-card>
</template>

<script>
export default {
  name: "BasicTooltip",
};
</script>
