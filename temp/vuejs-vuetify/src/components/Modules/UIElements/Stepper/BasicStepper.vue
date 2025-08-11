<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header">
      <h5 class="mb-0">Basic Snackbar</h5>
    </div>
    <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
      <template v-slot:item="{ index }">
        <v-card title="Step Item" :complete="index">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
          at placeat totam, magni doloremque veniam neque porro libero rerum
          unde voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit
        </v-card>
      </template>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  name: "BasicStepper",
};
</script>

<style lang="scss" scoped>
.v-card-item {
  padding: 0 0 10px 0px;
}
</style>
