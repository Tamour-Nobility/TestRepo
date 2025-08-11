<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Chips Closable</h5>
    </div>
    <div class="text-center">
      <v-chip v-if="chip" closable @click:close="chip = false">
        Closable
      </v-chip>

      <v-btn v-if="!chip" close color="primary" dark @click="chip = true">
        Reset Chip
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Closable",
  data() {
    return {
      chip: true,
    };
  },
};
</script>
