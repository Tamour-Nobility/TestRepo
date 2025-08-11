<template>
  <v-card class="tooltip-card mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Location Tooltip</h5>
    </div>
    <div class="d-flex justify-space-around">
      <v-btn>
        Start
        <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
      </v-btn>

      <v-btn>
        End
        <v-tooltip activator="parent" location="end">Tooltip</v-tooltip>
      </v-btn>

      <v-btn>
        Top
        <v-tooltip activator="parent" location="top">Tooltip</v-tooltip>
      </v-btn>

      <v-btn>
        Bottom
        <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "LocationTooltip",
};
</script>
