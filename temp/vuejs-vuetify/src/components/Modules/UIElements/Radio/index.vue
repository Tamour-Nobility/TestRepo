<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Radio Group</h5>
        </div>
        <v-radio-group>
          <v-radio label="Male" value="one"></v-radio>
          <v-radio label="Female" value="two"></v-radio>
          <v-radio label="Other" value="three"></v-radio>
        </v-radio-group>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Radio Model Value</h5>
        </div>
        <v-radio-group v-model="radios">
          <v-radio label="Option One" value="one"></v-radio>
          <v-radio label="Option 2 (string)" value="2"></v-radio>
          <v-radio label="Option 3 (integer)" :value="3"></v-radio>
        </v-radio-group>
        <p>Selected Button: {{ radios }}</p>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Color Radio</h5>
        </div>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-radio-group v-model="ex7" column>
              <v-radio label="red" color="red" value="red"></v-radio>
              <v-radio
                label="red-darken-3"
                color="red-darken-3"
                value="red-darken-3"
              ></v-radio>
              <v-radio label="indigo" color="indigo" value="indigo"></v-radio>
              <v-radio
                label="indigo-darken-3"
                color="indigo-darken-3"
                value="indigo-darken-3"
              ></v-radio>
              <v-radio label="orange" color="orange" value="orange"></v-radio>
              <v-radio
                label="orange-darken-3"
                color="orange-darken-3"
                value="orange-darken-3"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-radio-group v-model="ex8" column>
              <v-radio
                label="primary"
                color="primary"
                value="primary"
              ></v-radio>
              <v-radio
                label="secondary"
                color="secondary"
                value="secondary"
              ></v-radio>
              <v-radio
                label="success"
                color="success"
                value="success"
              ></v-radio>
              <v-radio label="info" color="info" value="info"></v-radio>
              <v-radio
                label="warning"
                color="warning"
                value="warning"
              ></v-radio>
              <v-radio label="error" color="error" value="error"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card class="trezo-card">
        <div class="v-card-header">
          <h5 class="mb-0">Radios Direction</h5>
        </div>
        <v-radio-group v-model="column" column>
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>
        <hr />
        <v-radio-group v-model="inline" inline>
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Radio",
  data() {
    return {
      radios: "one",
      ex7: "red",
      ex8: "primary",
      column: null,
      inline: null,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card-header {
  margin-bottom: 0;
}
</style>
