<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-card class="datepicker-card trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Datepicker</h5>
        </div>
        <div class="trezo-form-group">
          <v-date-input label="Date input"></v-date-input>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="datepicker-card trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Multiple Datepicker</h5>
        </div>
        <div class="trezo-form-group">
          <v-date-input
            v-model="model"
            label="Select day(s)"
            max-width="368"
            multiple
          ></v-date-input>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="datepicker-card trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Range Datepicker</h5>
        </div>
        <div class="trezo-form-group">
          <v-date-input
            v-model="model"
            label="Select range"
            max-width="368"
            multiple="range"
          ></v-date-input>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Datepicker</h5>
        </div>
        <v-date-picker></v-date-picker>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header border-bottom">
          <h5 class="mb-0">Elevation Datepicker</h5>
        </div>
        <v-row justify="space-around">
          <v-date-picker elevation="24"></v-date-picker>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header border-bottom">
          <h5 class="mb-0">Show sibling months Datepicker</h5>
        </div>

        <v-row justify="space-around">
          <v-date-picker show-adjacent-months></v-date-picker>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header border-bottom">
          <h5 class="mb-0">Datepicker Colors</h5>
        </div>
        <v-row justify="space-around">
          <v-date-picker color="primary"></v-date-picker>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Datepicker",
  data: () => ({
    model: null,
  }),
};
</script>

<style lang="scss" scoped>
.v-picker.v-sheet.v-picker--with-actions {
  margin: 30px;
}
</style>
