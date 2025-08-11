<template>
  <v-text-field
    label="Main input"
    :rules="rules"
    hide-details="auto"
  ></v-text-field>
</template>

<script>
export default {
  name: "HideDetailsInput",
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>