<template>
  <BasicExpansionPanel />
  <VariantExpansion />
  <DisabledExpansion />
  <ModelExpansion />
  <AdvancedExpansion />
</template>

<script>
import BasicExpansionPanel from "./BasicExpansionPanel.vue";
import VariantExpansion from "./VariantExpansion.vue";
import DisabledExpansion from "./DisabledExpansion.vue";
import ModelExpansion from "./ModelExpansion.vue";
import AdvancedExpansion from "./AdvancedExpansion.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Expansion",
  components: {
    BasicExpansionPanel,
    VariantExpansion,
    DisabledExpansion,
    ModelExpansion,
    AdvancedExpansion,
  },
};
</script>
