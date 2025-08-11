<template>
  <v-card class="trezo-card">
    <div>
      <h5>Default</h5>
      <v-expansion-panels class="mb-25">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          title="Item"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>

      <h5>Accordion</h5>
      <v-expansion-panels variant="accordion" class="mb-25">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          title="Item"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>

      <h5>Inset</h5>
      <v-expansion-panels variant="inset" class="my-4 mb-25">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          title="Item"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>

      <h5>Popout</h5>
      <v-expansion-panels variant="popout" class="my-4 mb-25">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          title="Item"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Accordion",
};
</script>

<style lang="scss" scoped>
.v-expansion-panels {
  box-shadow: 0px 0px 1px 0px;
}
</style>
