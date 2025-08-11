<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Basic Chips</h5>
    </div>
    <v-chip class="mr-2">One fish</v-chip>
    <v-chip class="mr-2">Two fish</v-chip>
    <v-chip class="mr-2" prepend-icon="$vuetify">Accent fish</v-chip>
    <v-chip class="">Warn fish</v-chip>
  </v-card>
</template>

<script>
export default {
  name: "BasicChips",
};
</script>
