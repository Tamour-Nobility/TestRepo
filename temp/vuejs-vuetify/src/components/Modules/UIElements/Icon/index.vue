<template>
  <div class="row">
    <div class="col-sm-6">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Vuetify Icon</h5>
        </div>
        <v-icon icon="$vuetify" size="x-large"></v-icon>
      </v-card>
    </div>
    <div class="col-sm-6">
      <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Basic Icon</h5>
        </div>
        <i class="material-symbols-outlined"> home </i>
      </v-card>
    </div>
  </div>

  <!-- Links -->
  <div class="mb-25 mt-30 text-center">
    <a
      class="btn mb-25"
      href="https://pictogrammers.com/library/mdi/"
      target="_blank"
    >
      Click to See More Icon
    </a>
    <p>
      Icons The v-icon component provides a large set of glyphs to provide
      context to various aspects of your application. For a list of all
      available icons, visit the official
      <a href="https://materialdesignicons.com/">
        <strong>Material Design Icons</strong>
      </a>
      page. To use any of these icons simply use the mdi- prefix followed by the
      icon name.
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Icon",
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 13px 30px;
  background-color: var(--primaryColor);
  color: var(--whiteColor);
  border-radius: 7px;
  display: inline-block;
}
p {
  max-width: 500px;
  margin: auto;
}
</style>
