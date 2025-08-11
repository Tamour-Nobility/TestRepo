<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Basic Dialog</h5>
    </div>
    <v-dialog width="500">
      <template v-slot:activator="{ props }">
        <v-btn
          class="gray fw-semibold p-15"
          height="auto"
          v-bind="props"
          text="Open Dialog"
        >
        </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "BasicDialog",
};
</script>
