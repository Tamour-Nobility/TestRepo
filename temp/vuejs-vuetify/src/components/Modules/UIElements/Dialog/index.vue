<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <BasicDialog />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <ActivatorDialog />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <FullscreenDialog />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <TransitionsDialog />
    </v-col>
  </v-row>
</template>

<script>
import BasicDialog from "./BasicDialog.vue";
import ActivatorDialog from "./ActivatorDialog.vue";
import FullscreenDialog from "./FullscreenDialog.vue";
import TransitionsDialog from "./TransitionsDialog.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dialog",
  components: {
    BasicDialog,
    ActivatorDialog,
    FullscreenDialog,
    TransitionsDialog,
  },
};
</script>
