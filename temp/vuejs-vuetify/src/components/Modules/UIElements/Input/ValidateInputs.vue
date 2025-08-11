<template>
  <v-text-field
    :rules="[rules.required]"
    label="Last name"
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || "Field is required",
    },
  }),
};
</script>
