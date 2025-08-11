<template>
  <v-row class="divider">
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <h1 class="mt-0 mb-3">Heading One</h1>
        <v-divider></v-divider>
        <h2 class="mt-3 mb-3">Heading Two</h2>
        <v-divider></v-divider>
        <h3 class="mt-3 mb-3">Heading Three</h3>
        <v-divider></v-divider>
        <h4 class="mt-3 mb-3">Heading Four</h4>
        <v-divider></v-divider>
        <h5 class="mt-3 mb-3">Heading Five</h5>
        <v-divider></v-divider>
        <h6 class="mt-3 mb-0">Heading Six</h6>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <v-list>
          <v-divider></v-divider>
          <v-list-item>Item 1</v-list-item>
          <v-divider></v-divider>
          <v-list-item>Item 2</v-list-item>
          <v-divider></v-divider>
          <v-list-item>Item 3</v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Divider",
};
</script>
