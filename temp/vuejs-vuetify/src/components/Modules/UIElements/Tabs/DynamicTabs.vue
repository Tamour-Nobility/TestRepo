<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Dynamic Tabs</h5>
    </div>
    <v-tabs v-model="tab" bg-color="red-lighten-2">
      <v-tab v-for="n in length" :key="n" :value="n"> Item {{ n }} </v-tab>
    </v-tabs>
    <v-card-text class="text-center">
      <v-btn :disabled="!length" variant="text" @click="length--">
        Remove Tab
      </v-btn>
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn variant="text" @click="length++"> Add Tab </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DynamicTabs",
  data: () => ({
    length: 15,
    tab: null,
  }),

  watch: {
    length(val) {
      this.tab = val - 1;
    },
  },
};
</script>
