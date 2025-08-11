<template>
  <form class="example-form">
    <v-autocomplete
      class="example-full-width"
      label="Number"
      :items="['One', 'Two', 'Three', 'Four', 'Five', 'Six']"
    ></v-autocomplete>
  </form>
</template>

<script>
export default {
  name: "BasicAutocomplete",
};
</script>