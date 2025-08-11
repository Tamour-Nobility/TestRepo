<template>
  <v-row>
    <v-col cols="12">
      <v-autocomplete
        v-model="values"
        :items="items"
        label="Default"
      ></v-autocomplete>
    </v-col>

    <v-col cols="12">
      <v-autocomplete
        v-model="values"
        :items="items"
        density="comfortable"
        label="Comfortable"
      ></v-autocomplete>
    </v-col>

    <v-col cols="12">
      <v-autocomplete
        v-model="values"
        :items="items"
        density="compact"
        label="Compact"
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DensityAutocomplete",
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    values: "foo",
  }),
};
</script>
