<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <ModulesUIElementsDialogBasicDialog />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <ModulesUIElementsDialogActivatorDialog />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <ModulesUIElementsDialogFullscreenDialog />
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <ModulesUIElementsDialogTransitionsDialog />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Dialog",
};
</script>
