<template>
  <BasicTooltip />
  <LocationTooltip />
  <VisibilityTooltip />
</template>

<script>
import BasicTooltip from "./BasicTooltip.vue";
import LocationTooltip from "./LocationTooltip.vue";
import VisibilityTooltip from "./VisibilityTooltip.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tooltips",
  components: {
    BasicTooltip,
    LocationTooltip,
    VisibilityTooltip,
  },
};
</script>
