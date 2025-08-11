<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Transitions Dialog</h5>
    </div>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary p-15"
              class="d-inline-block"
              height="auto"
              v-bind="props"
            >
              From the bottom
            </v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar
                color="primary"
                title="Opening from the bottom"
              ></v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn variant="text" @click="isActive.value = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>

      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" width="auto">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary p-15"
              class="d-inline-block"
              height="auto"
              v-bind="props"
            >
              From the top
            </v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar
                color="primary"
                title="Opening from the top"
              ></v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn variant="text" @click="isActive.value = false"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TransitionsDialog",
};
</script>

<style lang="scss" scoped>
.v-col-auto {
  padding: 0;
}
.d-inline-block {
  margin-top: 10px;
  display: inline-block !important;
}
</style>
