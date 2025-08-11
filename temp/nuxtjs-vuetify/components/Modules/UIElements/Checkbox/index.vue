<template>
  <v-row>
    <v-col cols="12" lg="3" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Basic Checkbox</h5>
        </div>
        <div class="d-flex">
          <v-checkbox class="example-margin" color="info"></v-checkbox>
          <v-checkbox class="example-margin" disabled color="info"></v-checkbox>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Checkbox with Text</h5>
        </div>
        <div class="d-flex">
          <v-checkbox
            class="example-margin"
            color="info"
            label="Check me!"
          ></v-checkbox>
          <v-checkbox
            class="example-margin"
            disabled
            color="info"
            label="Check me!"
          >
          </v-checkbox>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="5" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Color Checkbox</h5>
        </div>
        <div class="d-flex">
          <v-checkbox class="example-margin"></v-checkbox>
          <v-checkbox class="example-margin" color="primary"></v-checkbox>
          <v-checkbox class="example-margin" color="secondary"></v-checkbox>
          <v-checkbox class="example-margin" color="success"></v-checkbox>
          <v-checkbox class="example-margin" color="info"></v-checkbox>
          <v-checkbox class="example-margin" color="red"></v-checkbox>
          <v-checkbox class="example-margin" color="pink"></v-checkbox>
          <v-checkbox class="example-margin" color="grey"></v-checkbox>
          <v-checkbox class="example-margin" color="dark"></v-checkbox>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header mb-4">
          <h5 class="mb-0">Checkboxes with Model as array</h5>
        </div>
        <div>
          <h5 class="mb-5">Select your toppings:</h5>
          <p>
            <v-checkbox
              v-model="selected"
              value="Pepperoni"
              label="Pepperoni"
              color="primary"
            ></v-checkbox>
          </p>
          <p>
            <v-checkbox
              v-model="selected"
              value="Extra Cheese"
              label="Extra Cheese"
              color="primary"
            >
            </v-checkbox>
          </p>
          <p>
            <v-checkbox
              v-model="selected"
              value="Mushroom"
              label="Mushroom"
              color="primary"
            ></v-checkbox>
          </p>
        </div>
        <div class="mt-15">
          <h5>You chose:</h5>
          {{ selected }}
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {
      selected: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.example-margin {
  margin-right: 12px !important;
}
ul {
  list-style-type: none;
}
.v-checkbox.v-input {
  margin: -18px 12px -40px -10px;
}
.v-input__details {
  display: none !important;
}
.v-selection-control__input {
  width: 0 !important;
  height: 0 !important;
}
</style>
