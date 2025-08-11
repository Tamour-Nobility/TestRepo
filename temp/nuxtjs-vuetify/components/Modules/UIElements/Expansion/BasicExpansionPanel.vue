<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Basic Expansion</h5>
    </div>
    <v-expansion-panels>
      <v-expansion-panel
        title="Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
      >
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: "BasicExpansionPanel",
};
</script>

<style lang="scss" scoped>
.v-expansion-panels {
  box-shadow: 0px 0px 1px 0px;
}
</style>
