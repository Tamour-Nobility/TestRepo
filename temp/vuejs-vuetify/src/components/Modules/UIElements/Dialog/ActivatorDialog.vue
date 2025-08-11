<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Activator Dialog</h5>
    </div>
    <v-btn color="primary p-15" height="auto">
      Open Dialog

      <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">
              Close Dialog
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "ActivatorDialog",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
