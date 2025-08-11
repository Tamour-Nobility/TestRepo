<template>
  <BasicStepper />
  <EditableSnackbar />
</template>

<script>
import BasicStepper from "./BasicStepper.vue";
import EditableSnackbar from "./EditableSnackbar.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stepper",
  components: {
    BasicStepper,
    EditableSnackbar,
  },
};
</script>
