<template>
  <v-card class="tooltip-card mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Location Tooltip</h5>
    </div>
    <v-row class="flex text-center" justify="space-between">
      <v-col cols="12" class="mb-30">
        <v-btn @click="show = !show"> toggle </v-btn>
      </v-col>

      <v-col cols="12" class="mt-12">
        <v-tooltip v-model="show" location="top">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon color="grey-lighten-1"> mdi-cart </v-icon>
            </v-btn>
          </template>
          <span>Programmatic tooltip</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "VisibilityTooltip",
  data() {
    return {
      show: false,
    };
  },
};
</script>
