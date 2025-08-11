<template>
  <v-text-field
    v-model="model"
    clearable
    hide-details="auto"
    label="Last name"
  ></v-text-field>
</template>

<script>
export default {
  name: "ClearableTextField",
  data: () => ({
    model: "Leider",
  }),
};
</script>