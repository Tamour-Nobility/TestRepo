<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Floating With Search Toolbar</h5>
    </div>
    <v-toolbar dense floating>
      <v-text-field
        width="100%"
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "FloatingWithSearch",
};
</script>

<style lang="scss" scoped>
.v-input {
  width: 100%;
}
</style>
