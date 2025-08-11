<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Basic Listbox</h5>
        </div>
        <div class="listbox-container">
          <label class="listbox-label fw-semibold" id="fav-color-label">
            Favorite color
          </label>
          <ul class="listbox">
            <li class="option">Red</li>
            <li class="option">Green</li>
            <li class="option">Blue</li>
          </ul>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Listbox Custom Typeahead</h5>
        </div>
        <div class="listbox-container">
          <label class="listbox-label fw-semibold" id="satisfaction-label">
            How was your service?
          </label>
          <ul cdkListbox class="listbox">
            <li class="option">😀 Great</li>
            <li class="option">😐 Okay</li>
            <li class="option">🙁 Bad</li>
          </ul>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Horizontal Listbox</h5>
        </div>
        <label class="example-listbox-label fw-semibold"> Shirt Size: </label>
        <ul class="example-listbox mt-5">
          <li
            v-for="size in sizes"
            :key="size.id"
            cdkOption="size"
            class="example-option gray-color fw-semibold"
          >
            {{ size }}
          </li>
        </ul>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Listbox",
  data() {
    return {
      sizes: ["XS", "S", "M", "L", "XL"],
    };
  },
});
</script>

<style lang="scss" scoped>
.listbox-container {
  padding: 10px;
  border: 1px solid #eeeeee;

  .listbox-label {
    display: block;
    padding: 5px;
  }
  .listbox {
    list-style: none;
    padding: 0;
    margin: 0;

    .option {
      position: relative;
      padding: 5px 5px 5px 25px;
    }
  }
}
.example-listbox {
  display: flex;
  width: 250px;
  padding: 0;

  .example-option {
    flex: 1;
    padding: 12px;
    display: flex;
    list-style: none;
    position: relative;
    align-items: center;
    border: solid black;
    justify-content: center;
    border-width: 1px 1px 1px 0;

    &:first-child {
      border-left-width: 1px;
    }
  }
}
</style>
