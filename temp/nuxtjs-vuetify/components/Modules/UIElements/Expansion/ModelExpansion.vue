<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Model Expansion</h5>
    </div>

    <div>
      <div class="text-center d-flex pb-4">
        <v-btn class="ma-2" @click="all"> All </v-btn>
        <v-btn class="ma-2" @click="none"> None </v-btn>
      </div>

      <div class="pb-4">v-model {{ panel }}</div>

      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel
          title="Foo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          value="foo"
        ></v-expansion-panel>

        <v-expansion-panel
          title="Bar"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          value="bar"
        ></v-expansion-panel>

        <v-expansion-panel
          title="Baz"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          value="baz"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ModelExpansion",
  data() {
    return {
      panel: [],
    };
  },
  methods: {
    all() {
      this.panel = ["foo", "bar", "baz"];
    },
    none() {
      this.panel = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.v-expansion-panels {
  box-shadow: 0px 0px 1px 0px;
}
</style>
