<template>
  <v-select
    label="Select"
    :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming',
    ]"
  ></v-select>
</template>

<script>
export default {
  name: "BasicSelect",
};
</script>