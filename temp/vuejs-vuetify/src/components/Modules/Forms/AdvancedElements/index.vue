<template>
  <Select />
  <Picker />
  <AdvancedForm />
</template>

<script>
import Select from "./Select.vue";
import Picker from "./Picker.vue";
import AdvancedForm from "./AdvancedForm.vue";

export default {
  name: "AdvancedElements",
  components: {
    Select,
    Picker,
    AdvancedForm,
  },
};
</script>
