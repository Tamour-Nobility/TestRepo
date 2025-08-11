<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" class="mb-30">
          <v-text-field
            label="Prepend"
            prepend-icon="mdi-map-marker"
            class="mb-20 d-flex"
          ></v-text-field>

          <v-text-field
            label="Prepend inner"
            prepend-inner-icon="mdi-map-marker"
            class="mb-20"
          ></v-text-field>

          <v-text-field
            label="Append"
            append-icon="mdi-map-marker"
            class="mb-20 d-flex"
          ></v-text-field>

          <v-text-field
            label="Append inner"
            append-inner-icon="mdi-map-marker"
            class="mb-20"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" class="mb-30">
          <v-text-field
            label="Prepend"
            prepend-icon="mdi-map-marker"
            variant="solo"
            class="mb-15 d-flex"
          ></v-text-field>

          <v-text-field
            label="Prepend inner"
            prepend-inner-icon="mdi-map-marker"
            variant="solo"
          ></v-text-field>

          <v-text-field
            label="Append"
            append-icon="mdi-map-marker"
            variant="solo"
            class="mb-15 d-flex"
          ></v-text-field>

          <v-text-field
            label="Append inner"
            append-inner-icon="mdi-map-marker"
            variant="solo"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" class="mb-30">
          <v-text-field
            label="Prepend"
            prepend-icon="mdi-map-marker"
            variant="outlined"
            class="mb-20 d-flex"
          ></v-text-field>

          <v-text-field
            label="Prepend inner"
            prepend-inner-icon="mdi-map-marker"
            variant="outlined"
            class="mb-20"
          ></v-text-field>

          <v-text-field
            label="Append"
            append-icon="mdi-map-marker"
            variant="outlined"
            class="mb-20 d-flex"
          ></v-text-field>

          <v-text-field
            label="Append inner"
            append-inner-icon="mdi-map-marker"
            variant="outlined"
            class="mb-20"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" class="mb-30">
          <v-text-field
            variant="underlined"
            label="Prepend"
            prepend-icon="mdi-map-marker"
            class="mb-20 d-flex"
          ></v-text-field>

          <v-text-field
            variant="underlined"
            label="Prepend inner"
            prepend-inner-icon="mdi-map-marker"
            class="mb-20"
          ></v-text-field>

          <v-text-field
            variant="underlined"
            label="Append"
            append-icon="mdi-map-marker"
            class="mb-20 d-flex"
          ></v-text-field>

          <v-text-field
            variant="underlined"
            label="Append inner"
            append-inner-icon="mdi-map-marker"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "IconsTextField",
};
</script>

<style lang="scss" scoped>
.v-field {
  &.v-field--variant-underlined {
    .v-field__prepend-inner {
      padding-top: 10px;
    }
  }
}
</style>
