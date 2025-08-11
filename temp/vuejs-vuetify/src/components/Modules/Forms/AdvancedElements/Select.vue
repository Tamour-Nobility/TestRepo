<template>
  <v-card
    class="mb-25 trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Select</h5>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h6>Default Select</h6>
        <div class="trezo-form-group">
          <v-select label="Favorite food" :items="['Steak', 'Pizza', 'Tacos']">
          </v-select>
        </div>
      </div>
      <div class="col-md-4">
        <h6>Multiple Select</h6>
        <div class="trezo-form-group">
          <v-select
            v-model="favorites"
            :items="states"
            label="Favorite food"
            multiple
          ></v-select>
        </div>
      </div>
      <div class="col-md-4">
        <h6>Custom Trigger Select</h6>
        <div class="trezo-form-group">
          <v-select v-model="value" :items="items" label="Select Item" multiple>
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index < 2">
                <span>{{ item.title }}</span>
              </v-chip>
              <span
                v-if="index === 2"
                class="text-grey text-caption align-self-center"
              >
                (+{{ value.length - 2 }} others)
              </span>
            </template>
          </v-select>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Select",
  data: () => ({
    favorites: [],
    states: ["Steak", "Pizza", "Tacos"],
    items: [
      "Extra cheese",
      "Mushroom",
      "Onion",
      "buzz",
      "Pepperoni",
      "Sausage",
      "Tomato",
    ],
    value: ["Extra cheese", "Mushroom", "Onion"],
  }),
};
</script>

<style lang="scss" scoped>
h6 {
  margin-bottom: 17px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .col-md-4 {
    &:not(:first-child) {
      h6 {
        margin-top: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .col-md-4 {
    &:not(:first-child) {
      h6 {
        margin-top: 20px;
      }
    }
  }
}
</style>
