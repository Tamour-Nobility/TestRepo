<template>
  <v-text-field class="d-flex">
    <template v-slot:append>
      <v-icon color="red"> mdi-plus </v-icon>
    </template>
    <template v-slot:prepend>
      <v-icon color="green"> mdi-minus </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "AppendPrependInputs",
};
</script>