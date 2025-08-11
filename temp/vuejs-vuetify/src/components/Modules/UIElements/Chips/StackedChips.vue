<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Stacked Chips</h5>
    </div>
    <div class="text-center">
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        Tags
      </v-chip>
      <v-chip class="ma-2" color="primary" label>
        <v-icon start icon="mdi-account-circle-outline"></v-icon>
        John Leider
      </v-chip>
      <v-chip class="ma-2" closable color="cyan" label>
        <v-icon start icon="mdi-twitter"></v-icon>
        New Tweets
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "StackedChips",
};
</script>
