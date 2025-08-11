<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Chips Colored</h5>
    </div>
    <div class="text-center">
      <v-chip class="mr-2"> Default </v-chip>

      <v-chip class="mr-2" color="primary"> Primary </v-chip>

      <v-chip class="mr-2" color="secondary"> Secondary </v-chip>

      <v-chip class="mr-2" color="red" text-color="white"> Red Chip </v-chip>

      <v-chip class="" color="green" text-color="white"> Green Chip </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Colored",
};
</script>
